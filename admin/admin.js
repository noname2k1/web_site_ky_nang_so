const $ = (id) => document.getElementById(id);

async function api(url, options = {}) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Có lỗi xảy ra.');
  return data;
}

function esc(v) {
  return String(v ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));
}

async function loadStats() {
  const data = await api('/api/statistics');
  $('total').textContent = data.statistics.total;
  $('passed').textContent = data.statistics.passed;
  $('failed').textContent = data.statistics.failed;
  $('average').textContent = `${Number(data.statistics.average || 0).toFixed(1)}%`;
}

async function loadDepartments() {
  const data = await api('/api/departments');
  const current = $('department').value;
  $('department').innerHTML = '<option value="">Tất cả phòng ban</option>' +
    data.departments.map(x => `<option value="${esc(x)}">${esc(x)}</option>`).join('');
  $('department').value = current;
}

async function loadResults() {
  const params = new URLSearchParams({search: $('search').value.trim(), department: $('department').value});
  const data = await api(`/api/results?${params}`);
  const rows = data.results;
  $('resultBody').innerHTML = rows.map((r, i) => `
    <tr>
      <td><input type="checkbox" class="row-check" value="${r.id}"></td>
      <td>${i + 1}</td>
      <td>${esc(r.submit_time)}</td>
      <td><b>${esc(r.name)}</b></td>
      <td>${esc(r.department)}</td>
      <td>${r.question_count}</td>
      <td>${r.correct_count}</td>
      <td>${r.wrong_count}</td>
      <td class="score">${Number(r.percentage).toFixed(0)}%</td>
      <td>${esc(r.submit_type)}</td>
      <td>
        <button class="btn-view" onclick="viewResult(${r.id})">Xem</button>
        <button class="btn-delete" onclick="deleteOne(${r.id})">Xóa</button>
      </td>
    </tr>`).join('');
  $('empty').classList.toggle('hidden', rows.length !== 0);
  $('selectAll').checked = false;
}

async function refresh() {
  try { await Promise.all([loadStats(), loadDepartments(), loadResults()]); }
  catch (e) { alert(e.message); }
}

async function viewResult(id) {
  try {
    const data = await api(`/api/results/${id}`);
    const r = data.result;
    const details = r.details || [];
    $('detailContent').innerHTML = `
      <div class="detail">
        <div class="info">
          <div><span>Họ tên</span><b>${esc(r.name)}</b></div>
          <div><span>Phòng ban</span><b>${esc(r.department)}</b></div>
          <div><span>Thời gian nộp</span><b>${esc(r.submit_time)}</b></div>
          <div><span>Số câu</span><b>${r.question_count}</b></div>
          <div><span>Đã trả lời</span><b>${r.answered_count}</b></div>
          <div><span>Đúng / Sai</span><b>${r.correct_count} / ${r.wrong_count}</b></div>
          <div><span>Điểm</span><b>${Number(r.percentage).toFixed(0)}%</b></div>
          <div><span>Hình thức</span><b>${esc(r.submit_type)}</b></div>
          <div><span>Thời gian còn lại</span><b>${r.remaining_seconds} giây</b></div>
        </div>
        ${details.map(d => `
          <div class="question-detail ${d.isCorrect ? 'ok' : 'bad'}">
            <b>Câu ${d.number} — ID ${d.questionId}</b>
            <p>${esc(d.question)}</p>
            <p>Bạn chọn: <b>${esc(d.selectedLabel || 'Chưa chọn')}</b></p>
            <p>Đáp án đúng: <b>${esc(d.correctLabel || '')}</b> — ${esc(d.correctText || '')}</p>
          </div>`).join('')}
      </div>`;
    $('detailModal').classList.remove('hidden');
  } catch (e) { alert(e.message); }
}

async function deleteOne(id) {
  if (!confirm('Bạn chắc chắn muốn xóa kết quả này?')) return;
  try { await api(`/api/results/${id}`, {method:'DELETE'}); await refresh(); }
  catch (e) { alert(e.message); }
}

async function deleteMany() {
  const ids = [...document.querySelectorAll('.row-check:checked')].map(x => Number(x.value));
  if (!ids.length) return alert('Hãy chọn ít nhất một kết quả.');
  if (!confirm(`Xóa ${ids.length} kết quả đã chọn?`)) return;
  try {
    await api('/api/results/delete-many', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({ids})});
    await refresh();
  } catch (e) { alert(e.message); }
}

$('searchBtn').onclick = loadResults;
$('refreshBtn').onclick = refresh;
$('department').onchange = loadResults;
$('deleteManyBtn').onclick = deleteMany;
$('exportBtn').onclick = () => {
  const params = new URLSearchParams({search: $('search').value.trim(), department: $('department').value});
  window.location.href = `/api/export?${params}`;
};
$('selectAll').onchange = (e) => document.querySelectorAll('.row-check').forEach(x => x.checked = e.target.checked);
$('closeModal').onclick = () => $('detailModal').classList.add('hidden');
$('detailModal').onclick = (e) => { if (e.target === $('detailModal')) $('detailModal').classList.add('hidden'); };
$('search').addEventListener('keydown', e => { if (e.key === 'Enter') loadResults(); });

refresh();
