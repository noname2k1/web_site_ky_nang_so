const QUESTIONS = [
  {
    id: 1,
    q: "Để tính tổng các giá trị trong một dải ô từ A1 đến A10 trong phần mềm Microsoft Excel, bạn sử dụng cú pháp hàm nào sau đây?",
    options: [
      "=SUM(A1, A10)",
      "=TOTAL(A1:A10)",
      "=SUM(A1:A10)",
      "=ADD(A1:A10)",
      "=COUNT(A1:A10)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 2,
    q: "Trong Microsoft Word, tổ hợp phím tắt nào sau đây được sử dụng để lưu lại tài liệu đang soạn thảo?",
    options: ["Ctrl + P", "Ctrl + S", "Ctrl + N", "Ctrl + O", "Ctrl + V"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 3,
    q: "Trong Microsoft PowerPoint, phím tắt nào được sử dụng để bắt đầu trình chiếu bài thuyết trình ngay từ slide đầu tiên?",
    options: ["F3", "F4", "F5", "Shift + F5", "Ctrl + F5"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 4,
    q: 'Khi gửi email, mục "Bcc" (Blind Carbon Copy) có chức năng gì?',
    options: [
      "Gửi một bản sao của email và tất cả những người nhận khác đều nhìn thấy địa chỉ email này.",
      "Đính kèm một tệp tin dung lượng lớn vào email.",
      "Gửi một bản sao ẩn danh, những người nhận khác sẽ KHÔNG nhìn thấy địa chỉ email của người trong mục Bcc.",
      'Đánh dấu email là "quan trọng" và yêu cầu người nhận phải phản hồi gấp.',
      "Tự động dịch nội dung email sang ngôn ngữ của người nhận.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 5,
    q: 'Bản chất thực sự của "Chuyển đổi số" (Digital Transformation) là gì?',
    options: [
      "Chỉ là việc đánh máy văn bản để thay thế cho việc viết tay trên giấy.",
      "Là quá trình thay đổi tổng thể và toàn diện của cá nhân, tổ chức về cách sống, cách làm việc và phương thức sản xuất dựa trên các công nghệ số.",
      "Là việc mua sắm các trang thiết bị máy tính, máy in đắt tiền cho văn phòng.",
      "Là việc lập một trang fanpage trên mạng xã hội để bán hàng.",
      "Là quá trình chuyển đổi bắt buộc toàn bộ nhân viên sang làm việc từ xa (Work from home).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 6,
    q: "Công nghệ nào sau đây KHÔNG phải là công nghệ cốt lõi của Cách mạng công nghiệp 4.0 và chuyển đổi số?",
    options: [
      "Trí tuệ nhân tạo (AI)",
      "Internet vạn vật (IoT)",
      "Công nghệ truyền tin bằng tín hiệu cờ (Semaphore)",
      "Điện toán đám mây (Cloud Computing)",
      "Dữ liệu lớn (Big Data)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 7,
    q: 'Mục tiêu quan trọng nhất của việc xây dựng "Chính phủ số" là gì?',
    options: [
      "Cắt giảm toàn bộ nhân sự làm việc trong cơ quan nhà nước.",
      "Nâng cao chất lượng, hiệu quả hoạt động của cơ quan nhà nước, phục vụ người dân và doanh nghiệp nhanh chóng, minh bạch hơn.",
      "Thu thập dữ liệu cá nhân của người dân để phục vụ cho các doanh nghiệp quảng cáo.",
      "Loại bỏ hoàn toàn việc tiếp xúc giữa người dân và chính quyền trong mọi lĩnh vực đời sống.",
      "Bắt buộc mọi người dân phải mua điện thoại thông minh đắt tiền để sử dụng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 8,
    q: "Cổng Dịch vụ công Quốc gia của Việt Nam hiện nay có địa chỉ tên miền chính thức là gì?",
    options: [
      "dichvucong.vn",
      "dichvucong.gov.vn",
      "dichvucong.com.vn",
      "e-government.vn",
      "hanhchinhcong.gov.vn",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 9,
    q: "Ứng dụng định danh điện tử quốc gia (VNeID) do cơ quan nào chủ trì phát triển và quản lý?",
    options: [
      "Bộ Thông tin và Truyền thông",
      "Bộ Công an",
      "Bộ Khoa học và Công nghệ",
      "Tập đoàn Công nghiệp - Viễn thông Quân đội (Viettel)",
      "Tập đoàn Bưu chính Viễn thông Việt Nam (VNPT)",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 10,
    q: "Khi nhận được tin nhắn từ tài khoản mạng xã hội của người thân nhờ chuyển tiền gấp, hành động nào sau đây là an toàn và đúng đắn nhất?",
    options: [
      "Chuyển tiền ngay lập tức để giúp đỡ người thân lúc khó khăn.",
      "Nhắn tin lại để hỏi rõ số tài khoản và sau đó tiến hành chuyển tiền.",
      "Bấm vào đường link lạ được đính kèm trong tin nhắn để xem chi tiết lý do mượn tiền.",
      "Gọi điện thoại trực tiếp (bằng cuộc gọi viễn thông thông thường) cho người đó để xác minh xem có đúng là họ đang mượn tiền hay không.",
      "Chụp ảnh màn hình tin nhắn và đăng công khai lên mạng xã hội kèm theo số tài khoản ngân hàng của mình. Dưới đây là phần 2 của bộ câu hỏi (từ câu 11 đến câu 30), tiếp tục tuân thủ đúng định dạng 5 đáp án (A, B, C, D, E) và 1 đáp án đúng cho mỗi câu.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 11,
    q: "Trong Microsoft Word, để tìm kiếm và thay thế một từ hoặc cụm từ, bạn sử dụng tổ hợp phím tắt nào?",
    options: ["Ctrl + F", "Ctrl + G", "Ctrl + H", "Ctrl + K", "Ctrl + R"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 12,
    q: "Trong Excel, hàm VLOOKUP được sử dụng chủ yếu để làm gì?",
    options: [
      "Tính tổng các ô theo chiều dọc.",
      "Tìm kiếm dữ liệu theo cột dọc và trả về giá trị tương ứng từ một cột khác.",
      "Đếm số lượng ô chứa dữ liệu văn bản.",
      "Tính giá trị trung bình của một vùng dữ liệu lớn.",
      "Chuyển đổi toàn bộ chữ thường thành chữ in hoa.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 13,
    q: "Trong Excel, để cố định địa chỉ một ô (tạo địa chỉ tuyệt đối) trong công thức sao cho không bị thay đổi khi sao chép sang ô khác, bạn thêm ký tự nào trước tên cột và số hàng (ví dụ: A1)?",
    options: [
      "@ (Ví dụ: @A@1)",
      "# (Ví dụ: #A#1)",
      "& (Ví dụ: &A&1)",
      "$ (Ví dụ: $A$1)",
      "* (Ví dụ: *A*1)",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 14,
    q: "Tổ hợp phím nào dùng để chèn thêm một Trang trình chiếu mới (New Slide) trong Microsoft PowerPoint?",
    options: ["Ctrl + N", "Ctrl + M", "Ctrl + S", "Shift + N", "Alt + M"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 15,
    q: 'Trong PowerPoint, chức năng "Transitions" dùng để làm gì?',
    options: [
      "Tạo hiệu ứng chuyển động cho các đối tượng (chữ, hình ảnh) bên trong một slide.",
      "Tạo hiệu ứng chuyển đổi từ slide này sang slide khác khi trình chiếu.",
      "Chèn âm thanh nền cho toàn bộ bài thuyết trình một cách tự động.",
      "Thiết lập thời gian tự động chạy cho văn bản trên slide.",
      "Tạo liên kết (Hyperlink) đến một trang web bên ngoài.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 16,
    q: "Định dạng file PDF (Portable Document Format) có ưu điểm nổi bật nào sau đây khi chia sẻ tài liệu văn phòng?",
    options: [
      "Dễ dàng chỉnh sửa nội dung văn bản hơn so với file Word.",
      "Giữ nguyên định dạng, phông chữ, hình ảnh trên mọi thiết bị và hệ điều hành.",
      "Tự động dịch tài liệu sang ngôn ngữ của người nhận email.",
      "Giảm dung lượng file xuống mức 0 byte để gửi qua mạng nhanh hơn.",
      "Tự động mã hóa và yêu cầu người nhận phải trả phí mới được xem.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 17,
    q: "Trong Word, để căn đều hai bên (Justify) cho một đoạn văn bản, bạn dùng tổ hợp phím nào?",
    options: ["Ctrl + L", "Ctrl + R", "Ctrl + E", "Ctrl + J", "Ctrl + C"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 18,
    q: "Chương trình Chuyển đổi số quốc gia của Việt Nam tập trung vào 3 trụ cột chính nào sau đây?",
    options: [
      "Chính phủ số, Kinh tế số, Xã hội số.",
      "Y tế số, Giáo dục số, Giao thông số.",
      "Thương mại số, Công nghiệp số, Nông nghiệp số.",
      "An ninh số, Quốc phòng số, Ngoại giao số.",
      "Văn hóa số, Thể thao số, Du lịch số.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 19,
    q: '"Kinh tế số" (Digital Economy) có thể được hiểu cơ bản là gì?',
    options: [
      "Là nền kinh tế hoàn toàn không sử dụng tiền mặt, chỉ sử dụng tiền ảo (Crypto).",
      "Là các hoạt động kinh tế sử dụng công nghệ số và dữ liệu số làm yếu tố đầu vào chính, có sử dụng môi trường mạng làm không gian hoạt động.",
      "Là việc Chính phủ phát tiền hỗ trợ cho người dân thông qua các ứng dụng trên điện thoại thông minh.",
      "Là nền kinh tế mà trong đó các công ty công nghệ nước ngoài độc quyền kinh doanh tại một quốc gia.",
      "Là việc cấm hoàn toàn các hoạt động buôn bán truyền thống tại chợ và siêu thị để chuyển sang mua bán online.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 20,
    q: "Chữ ký số (Digital Signature) có giá trị pháp lý như thế nào đối với các tài liệu, văn bản điện tử?",
    options: [
      "Chỉ mang tính chất tham khảo, hoàn toàn không có giá trị pháp lý.",
      "Chỉ có giá trị pháp lý khi có người làm chứng bên cạnh lúc ký.",
      "Có giá trị pháp lý tương đương với chữ ký tay của cá nhân hoặc con dấu của tổ chức/doanh nghiệp trên văn bản giấy.",
      "Chỉ có giá trị trong nội bộ một công ty, không có giá trị pháp lý với đối tác bên ngoài.",
      "Có giá trị pháp lý nhưng tài liệu điện tử vẫn phải được in ra giấy và đóng dấu đỏ mới hoàn tất thủ tục.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 21,
    q: "Công nghệ Điện toán đám mây (Cloud Computing) mang lại lợi ích cơ bản nào cho người dùng cá nhân và doanh nghiệp?",
    options: [
      "Tăng tốc độ đánh máy của người dùng văn phòng lên gấp đôi.",
      "Cho phép lưu trữ, truy cập dữ liệu và sử dụng ứng dụng từ bất kỳ đâu có kết nối Internet mà không cần cài đặt trực tiếp trên máy tính.",
      "Tự động sửa chữa các phần cứng máy tính (như RAM, ổ cứng) khi bị hỏng hóc vật lý.",
      "Ngăn chặn 100% các cuộc tấn công của hacker và virus máy tính.",
      "Thay thế hoàn toàn ban giám đốc trong việc ra quyết định kinh doanh chiến lược.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 22,
    q: 'Ứng dụng công nghệ Internet vạn vật (IoT) trong "Nhà thông minh" (Smart Home) được thể hiện rõ nhất qua ví dụ nào?',
    options: [
      "Ngôi nhà được xây dựng hoàn toàn bằng vật liệu tái chế để bảo vệ môi trường.",
      "Các thiết bị như bóng đèn, rèm cửa, điều hòa được kết nối mạng và có thể điều khiển từ xa qua ứng dụng điện thoại.",
      "Ngôi nhà có hệ thống tường cách âm và cản sóng tuyệt đối không để sóng điện thoại lọt vào.",
      "Ngôi nhà sử dụng hoàn toàn năng lượng mặt trời để đun nước nóng sinh hoạt.",
      "Ngôi nhà lắp đặt hàng chục máy tính để bàn đời mới trong tất cả các phòng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 23,
    q: 'Trong bối cảnh Chuyển đổi số, "Dữ liệu lớn" (Big Data) khác biệt với dữ liệu truyền thống chủ yếu ở những đặc điểm (3V) nào?',
    options: [
      "Khối lượng dữ liệu cực kỳ lớn (Volume), tốc độ sinh ra nhanh (Velocity) và đa dạng về định dạng (Variety).",
      "Chỉ bao gồm dữ liệu dạng văn bản (Text) và được lưu trữ an toàn trong máy tính cá nhân.",
      "Là những dữ liệu lưu trữ lịch sử đã được in ra giấy và đóng thành các quyển sách lớn.",
      "Là những dữ liệu tuyệt mật chỉ do các cơ quan an ninh của chính phủ thu thập.",
      "Là lượng dữ liệu nhỏ gọn có thể lưu vừa vặn trong một chiếc USB dung lượng 2GB.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 24,
    q: "Một ứng dụng phổ biến và điển hình của Trí tuệ nhân tạo (AI) trong cuộc sống hàng ngày là gì?",
    options: [
      "Máy sấy tóc tự động ngắt điện khi quá nhiệt.",
      "Trợ lý ảo trên điện thoại (như Siri, Google Assistant) có khả năng hiểu giọng nói và thực hiện lệnh của con người.",
      "Bàn phím cơ máy tính phát sáng đèn LED nhiều màu nhấp nháy theo nhạc.",
      "Chuông cửa cơ học dùng tay gõ để tạo ra âm thanh lớn.",
      "Màn hình tivi phẳng có độ phân giải siêu nét 4K.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 25,
    q: "Theo nguyên tắc an toàn thông tin cơ bản, mật khẩu nào sau đây được coi là MẠNH và AN TOÀN NHẤT?",
    options: [
      "123456789",
      "password123",
      "NguyenVanA1990",
      "kL9@#mP2$vX",
      "iloveyou",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 26,
    q: "Mã OTP (One-Time Password) được ngân hàng gửi đến số điện thoại di động của bạn mang ý nghĩa gì?",
    options: [
      "Là mã khuyến mãi để bạn được giảm giá khi mua hàng online trên các sàn thương mại điện tử.",
      "Là mật khẩu sử dụng một lần để xác thực giao dịch, tuyệt đối KHÔNG ĐƯỢC cung cấp mã này cho bất kỳ ai.",
      "Là số tiền thưởng bằng tiền mặt bạn vừa nhận được từ ngân hàng.",
      "Là mã để bạn chia sẻ công khai lên Facebook để chứng minh mình vừa chuyển tiền thành công.",
      "Là mã số dự thưởng chương trình xổ số cuối năm của ngân hàng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 27,
    q: 'Khi lướt web, bạn nhận được cửa sổ nhấp nháy: *"Cảnh báo: Thiết bị của bạn đã bị nhiễm virus, hãy bấm vào ĐÂY để tải phần mềm diệt virus miễn phí"*. Bạn nên làm gì?',
    options: [
      "Bấm ngay vào đường link để tải phần mềm về diệt virus kẻo hỏng máy tính.",
      "Điền thông tin cá nhân và số thẻ ngân hàng vào biểu mẫu để xác nhận nhận phần mềm.",
      "Bỏ qua thông báo và lập tức đóng thẻ (tab) trình duyệt đó lại vì đây thường là mồi nhử lừa đảo (Phishing) để phát tán mã độc.",
      "Chia sẻ đường link đó cho người thân để cảnh báo họ về loại virus mới.",
      "Gọi điện cho tổng đài nhà mạng viễn thông để yêu cầu họ xóa virus trên máy mình.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 28,
    q: 'Dịch vụ công trực tuyến "Toàn trình" (trước đây gọi là mức độ 4) khác với các mức độ thấp hơn ở điểm cốt lõi nào?',
    options: [
      "Người dân chỉ có thể tải mẫu đơn định dạng file Word trên mạng về viết tay.",
      "Người dân nộp hồ sơ qua mạng nhưng vẫn phải đến cơ quan nhà nước xếp hàng đóng lệ phí.",
      "Cung cấp toàn bộ quá trình xử lý hồ sơ, thanh toán trực tuyến và trả kết quả tận nhà/qua mạng mà người dân KHÔNG CẦN đến cơ quan nhà nước.",
      "Chỉ ưu tiên giải quyết cho người dân có hộ khẩu ở thành phố lớn, người ở nông thôn không được dùng.",
      "Chỉ mở cửa cho người dân truy cập hệ thống vào các ngày nghỉ lễ và cuối tuần.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 29,
    q: '"Xác thực 2 yếu tố" (2FA - Two-Factor Authentication) trên các nền tảng mạng xã hội, email là gì?',
    options: [
      "Việc bạn tin tưởng chia sẻ mật khẩu tài khoản cho 2 người bạn thân nhất.",
      "Việc đăng nhập cùng một tài khoản trên 2 thiết bị (ví dụ: máy tính và điện thoại) cùng lúc.",
      "Là lớp bảo mật bổ sung, yêu cầu người dùng cung cấp 2 phương thức xác minh khác nhau (ví dụ: Mật khẩu + Mã OTP điện thoại) khi đăng nhập.",
      "Việc tài khoản sẽ tự động bị xóa vĩnh viễn sau 2 lần nhập sai mật khẩu.",
      "Việc bạn sử dụng chung 1 mật khẩu duy nhất cho 2 tài khoản mạng xã hội khác nhau để dễ nhớ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 30,
    q: 'Thanh toán qua mã QR (QR Code) ngày càng phổ biến trong "Xã hội số". Chữ QR là viết tắt của cụm từ tiếng Anh nào?',
    options: [
      "Quick Read (Đọc nhanh)",
      "Quality Request (Yêu cầu chất lượng)",
      "Quantity Return (Hoàn trả số lượng)",
      "Quick Response (Phản hồi nhanh)",
      "Query Result (Kết quả truy vấn)",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 31,
    q: "Trong Excel, hàm COUNTIF được sử dụng với mục đích gì?",
    options: [
      "Tính tổng tất cả các ô chứa dữ liệu dạng số.",
      "Đếm số lượng các ô thỏa mãn một điều kiện (tiêu chí) cụ thể trong một dải ô.",
      "Tính giá trị trung bình cộng của một cột dữ liệu.",
      "Tìm ra giá trị lớn nhất trong một bảng tính.",
      "Tự động đổi màu các ô bị lỗi công thức.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 32,
    q: 'Nút công cụ "Format Painter" (biểu tượng cây chổi) trong Microsoft Word có chức năng gì?',
    options: [
      "Vẽ các hình khối (shapes) vào trong văn bản.",
      "Xóa toàn bộ định dạng của một đoạn văn bản và đưa về dạng gốc.",
      "Sao chép định dạng (màu sắc, phông chữ, kích thước...) từ một vùng văn bản này sang vùng văn bản khác.",
      "Tự động dịch đoạn văn bản được chọn sang ngôn ngữ khác.",
      "Quét và diệt virus trong tài liệu Word.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 33,
    q: 'Trong Microsoft PowerPoint, công cụ "Slide Master" có chức năng chính là gì?',
    options: [
      "Tạo hiệu ứng chuyển trang cho toàn bộ slide.",
      "Cho phép chỉnh sửa định dạng chung (như phông chữ, màu sắc, logo, định dạng dòng) để áp dụng đồng bộ trên tất cả các slide trong bài trình chiếu.",
      "Tự động kiểm tra lỗi chính tả và ngữ pháp trong slide.",
      "Xuất toàn bộ bài thuyết trình thành định dạng video.",
      "Đếm tổng số từ và hình ảnh có trong file thuyết trình.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 34,
    q: 'Khi đang soạn thảo văn bản hoặc làm việc trên máy tính mà bạn lỡ tay xóa nhầm một đoạn nội dung, tổ hợp phím tắt nào giúp bạn "Hoàn tác" (Undo) lại thao tác vừa rồi?',
    options: ["Ctrl + Z", "Ctrl + X", "Ctrl + Y", "Ctrl + P", "Ctrl + W"],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 35,
    q: "Khi bảng tính Excel xuất hiện lỗi #DIV/0!, điều đó có nghĩa là gì?",
    options: [
      "Công thức tham chiếu đến một ô không tồn tại.",
      "Độ rộng của cột không đủ để hiển thị hết dãy số.",
      "Bạn đang cố gắng thực hiện phép chia cho số 0 (hoặc chia cho một ô trống).",
      "Tên hàm bạn nhập bị sai chính tả.",
      "Máy tính của bạn không có kết nối Internet để tính toán.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 36,
    q: "Trong Microsoft Word, để chuyển hướng trang giấy in từ nằm dọc (Portrait) sang nằm ngang (Landscape), bạn chọn mục nào trong thẻ Layout (hoặc Page Layout)?",
    options: ["Margins", "Size", "Columns", "Orientation", "Breaks"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 37,
    q: "Trên hệ điều hành Windows, tổ hợp phím Alt + Tab có chức năng gì?",
    options: [
      "Đóng ngay lập tức cửa sổ đang làm việc.",
      "Chuyển đổi nhanh qua lại giữa các cửa sổ ứng dụng đang mở.",
      "Khóa màn hình máy tính.",
      "Mở thanh tìm kiếm của Windows.",
      "Bật tính năng đọc màn hình cho người khiếm thị.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 38,
    q: "Trong quá trình Chuyển đổi số của doanh nghiệp, mục tiêu cốt lõi nhất thường hướng tới là gì?",
    options: [
      "Mua thật nhiều phần mềm đắt tiền để trưng bày.",
      "Thay thế hoàn toàn sức lao động của con người bằng robot trong văn phòng.",
      "Tối ưu hóa quy trình hoạt động, nâng cao trải nghiệm khách hàng và tạo ra mô hình kinh doanh mới nhờ dữ liệu số.",
      "Buộc tất cả khách hàng phải đến trụ sở công ty để đăng ký thông tin sinh trắc học.",
      "Tiêu hủy toàn bộ giấy tờ, sổ sách cũ của công ty ngay lập tức.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 39,
    q: 'Đâu là sự khác biệt cơ bản nhất giữa "Số hóa dữ liệu" (Digitization) và "Chuyển đổi số" (Digital Transformation)?',
    options: [
      "Số hóa là việc dùng máy vi tính, còn Chuyển đổi số là dùng điện thoại thông minh.",
      "Số hóa là quá trình chuyển đổi thông tin từ dạng vật lý (giấy) sang dạng kỹ thuật số (file), còn Chuyển đổi số là sự thay đổi toàn diện mô hình, cách thức vận hành dựa trên công nghệ số.",
      "Số hóa tốn nhiều tiền hơn Chuyển đổi số.",
      "Số hóa chỉ dành cho cơ quan nhà nước, Chuyển đổi số dành cho doanh nghiệp tư nhân.",
      "Hai khái niệm này hoàn toàn giống hệt nhau, chỉ khác tên gọi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 40,
    q: '"Định danh số" (Digital Identity) của một cá nhân trên môi trường mạng được hiểu là gì?',
    options: [
      "Là biệt danh (nickname) mà người đó hay dùng khi chơi game.",
      "Là hình ảnh đại diện (avatar) của người đó trên mạng xã hội Facebook.",
      "Là tập hợp các dữ liệu số gắn liền với một cá nhân, giúp xác định duy nhất cá nhân đó trong môi trường điện tử.",
      "Là địa chỉ nhà riêng của cá nhân đó được đăng tải công khai trên mạng.",
      "Là số lượng người theo dõi (followers) của cá nhân đó trên Tiktok.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 41,
    q: 'Công nghệ "Chuỗi khối" (Blockchain) nổi bật với đặc tính cốt lõi nào sau đây?',
    options: [
      "Dễ dàng bị bất kỳ ai chỉnh sửa và xóa bỏ dữ liệu mọi lúc mọi nơi.",
      "Tính phi tập trung, minh bạch và dữ liệu một khi đã ghi vào khối thì cực kỳ khó bị thay đổi hay giả mạo.",
      "Hoàn toàn phụ thuộc vào một máy chủ duy nhất đặt tại Mỹ để vận hành.",
      "Tốc độ truyền tải file video nhanh gấp 10 lần mạng 5G.",
      "Là công nghệ chỉ được dùng riêng biệt để thiết kế trò chơi điện tử trực tuyến.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 42,
    q: "Trong Thương mại điện tử, mô hình B2C (Business-to-Consumer) mang ý nghĩa gì?",
    options: [
      "Doanh nghiệp bán hàng trực tiếp cho người tiêu dùng cá nhân.",
      "Doanh nghiệp bán hàng cho doanh nghiệp khác.",
      "Người tiêu dùng tự bán hàng cho người tiêu dùng khác.",
      "Chính phủ cung cấp dịch vụ cho doanh nghiệp.",
      "Người tiêu dùng cung cấp sản phẩm ngược lại cho chính phủ.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 43,
    q: 'Khái niệm "Dữ liệu mở" (Open Data) của cơ quan nhà nước có nghĩa là gì?',
    options: [
      "Là những dữ liệu tuyệt mật về an ninh quốc gia vô tình bị rò rỉ lên mạng.",
      "Là dữ liệu cá nhân của người dân được đem bán công khai cho các công ty quảng cáo.",
      "Là dữ liệu do cơ quan nhà nước công bố rộng rãi, cho phép cơ quan, tổ chức, cá nhân tự do truy cập, sử dụng và chia sẻ hợp pháp.",
      "Là những tập tin văn bản không bị cài đặt mật khẩu bảo vệ trên máy tính cá nhân.",
      "Là tính năng mở khóa khuôn mặt (FaceID) trên các dòng điện thoại đời mới.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 44,
    q: '"Văn hóa số" (Digital Culture) yêu cầu người lao động cần có thái độ và kỹ năng nào là quan trọng nhất?',
    options: [
      "Bảo thủ, từ chối sử dụng các phần mềm mới vì sợ mất nhiều thời gian học.",
      "Chỉ tương tác qua tin nhắn, tránh mọi sự giao tiếp trực tiếp với đồng nghiệp.",
      "Khả năng học hỏi liên tục, sẵn sàng thích ứng với thay đổi công nghệ và kỹ năng cộng tác trên môi trường mạng.",
      "Luôn luôn chia sẻ mật khẩu máy tính công ty cho tất cả mọi người để thể hiện sự cởi mở.",
      "Chờ đợi máy tính tự động làm thay mọi việc của mình mỗi ngày.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 45,
    q: "Dấu hiệu nào sau đây cho thấy một email có khả năng cao là email lừa đảo (Phishing)?",
    options: [
      "Email đến từ địa chỉ chính thức của công ty bạn và gọi đúng họ tên của bạn.",
      "Email có chứa những lỗi sai chính tả cơ bản, yêu cầu bạn cung cấp khẩn cấp mật khẩu/mã OTP hoặc đe dọa khóa tài khoản nếu không làm theo.",
      "Email thông báo cuộc họp nội bộ từ bộ phận Hành chính nhân sự vào tuần tới.",
      "Email từ người thân gửi kèm ảnh chụp gia đình trong dịp lễ tất niên.",
      "Email chứa chữ ký điện tử hợp lệ của tổng giám đốc doanh nghiệp bạn đang làm việc.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 46,
    q: '"Dấu chân số" (Digital Footprint) của bạn trên Internet là gì?',
    options: [
      "Dấu vân tay thực tế của bạn để lại trên màn hình cảm ứng điện thoại.",
      "Ứng dụng đo lường số bước chân hàng ngày (Pedometer) trên đồng hồ thông minh.",
      "Toàn bộ những thông tin, dữ liệu về các hoạt động của bạn bị lưu lại trên Internet (như lịch sử duyệt web, bài đăng mạng xã hội, bình luận...).",
      "Kích cỡ giày dép mà bạn thường xuyên đặt mua trên các trang thương mại điện tử.",
      "Hình ảnh đôi bàn chân bạn chụp lại và đăng lên Facebook cá nhân.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 47,
    q: "Để tích hợp các loại giấy tờ như Giấy phép lái xe, Thẻ bảo hiểm y tế vào ứng dụng VNeID, tài khoản định danh điện tử của công dân cần phải đạt mức độ mấy?",
    options: ["Mức độ 1", "Mức độ 2", "Mức độ 3", "Mức độ 4", "Mức độ 5"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 48,
    q: 'Khi truy cập một trang web để thanh toán trực tuyến, bạn thấy địa chỉ web bắt đầu bằng "https://" và có biểu tượng ổ khóa nhỏ. Chữ "s" trong "https" đại diện cho từ gì?',
    options: [
      "Speed (Tốc độ truyền tải nhanh)",
      "Social (Mạng xã hội cộng đồng)",
      "Secure (Bảo mật, dữ liệu được mã hóa)",
      "Server (Máy chủ trung tâm)",
      "Standard (Tiêu chuẩn quốc tế)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 49,
    q: "Theo phép lịch sự trên không gian mạng (Netiquette), việc BẬT CAPS LOCK (viết hoa toàn bộ chữ cái) trong tin nhắn hoặc email thường được người nhận hiểu là hành động gì?",
    options: [
      "Thể hiện sự tôn trọng tuyệt đối đối với người nhận.",
      "Làm cho văn bản trở nên đẹp mắt và chuyên nghiệp hơn.",
      "Đang la mắng, quát tháo hoặc thể hiện sự giận dữ đối với người đọc.",
      "Chứng tỏ người gửi là một chuyên gia về công nghệ thông tin.",
      "Giúp hệ thống mạng chuyển tin nhắn đi với tốc độ nhanh hơn bình thường.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 50,
    q: "Hành động nào sau đây là RỦI RO CAO NHẤT khi bạn kết nối vào một mạng Wi-Fi công cộng miễn phí (không có mật khẩu) tại quán cà phê?",
    options: [
      "Đọc tin tức trên các trang báo điện tử chính thống.",
      "Xem video giải trí trên ứng dụng YouTube.",
      "Đăng nhập vào ứng dụng Ngân hàng số (Mobile Banking) để chuyển số tiền lớn.",
      "Tra cứu bản đồ chỉ đường Google Maps.",
      "Tìm kiếm thông tin thời tiết trong ngày.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 51,
    q: "Trong Microsoft Excel, hàm IF (hàm điều kiện) cơ bản bao gồm bao nhiêu thành phần (đối số) chính bên trong dấu ngoặc đơn?",
    options: [
      "1 thành phần (Chỉ có điều kiện).",
      "2 thành phần (Điều kiện và Giá trị đúng).",
      "3 thành phần (Điều kiện, Giá trị trả về nếu đúng, Giá trị trả về nếu sai).",
      "4 thành phần (Điều kiện, Giá trị đúng, Giá trị sai, và Định dạng ô).",
      "5 thành phần.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 52,
    q: 'Trong hầu hết các phần mềm như Word, Excel, hay trình duyệt web, tổ hợp phím tắt nào được dùng để "Chọn tất cả" (Select All) nội dung?',
    options: ["Ctrl + C", "Ctrl + X", "Ctrl + P", "Ctrl + A", "Ctrl + V"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 53,
    q: "Để chèn một hình ảnh hoặc video vào Trang trình chiếu trong Microsoft PowerPoint, bạn cần truy cập vào thẻ (Tab) nào trên thanh công cụ Ribbon?",
    options: ["Home", "Insert", "Design", "Animations", "View"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 54,
    q: "Khi nhập dữ liệu trong một ô (cell) của Excel, nếu văn bản quá dài, tổ hợp phím nào giúp bạn ngắt dòng để gõ tiếp văn bản ngay bên dưới nhưng vẫn NẰM TRONG CÙNG MỘT Ô đó?",
    options: ["Enter", "Shift + Enter", "Alt + Enter", "Ctrl + Enter", "Tab"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 55,
    q: "Trong Microsoft Word, để chèn một bảng biểu (Table) vào văn bản, bạn thực hiện thao tác nào sau đây?",
    options: [
      "Chọn thẻ Insert -> chọn Table.",
      "Chọn thẻ Home -> chọn Table.",
      "Chọn thẻ Layout -> chọn Table.",
      "Chọn thẻ View -> chọn Table.",
      "Chọn thẻ Design -> chọn Table.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 56,
    q: 'Trong các ứng dụng thư điện tử (Email) như Gmail hay Outlook, biểu tượng nào thường được sử dụng để "Đính kèm tệp tin" (Attach file)?',
    options: [
      "Hình chiếc phong bì mở.",
      "Hình chiếc ghim kẹp giấy (Paperclip).",
      "Hình ngôi sao năm cánh.",
      "Hình bánh răng cưa.",
      "Hình kính lúp.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 57,
    q: "Phím tắt nhanh nhất trên bàn phím để khóa màn hình máy tính sử dụng hệ điều hành Windows (Lock Screen) khi bạn cần rời khỏi chỗ ngồi là gì?",
    options: [
      "Phím Windows + D",
      "Phím Windows + L",
      "Phím Windows + E",
      "Phím Windows + R",
      "Ctrl + Alt + Delete rồi chờ máy tự tắt.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 58,
    q: "Các dịch vụ như Google Drive, Microsoft OneDrive hay Dropbox là những ví dụ điển hình của ứng dụng công nghệ nào?",
    options: [
      "Mạng xã hội trực tuyến (Social Media).",
      "Lưu trữ đám mây (Cloud Storage).",
      "Sàn thương mại điện tử (E-commerce).",
      "Chuỗi khối (Blockchain).",
      "Thực tế ảo (VR - Virtual Reality).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 59,
    q: 'Điểm khác biệt cốt lõi giữa "Tin học hóa" (Computerization) quy trình cũ và "Chuyển đổi số" (Digital Transformation) là gì?',
    options: [
      "Tin học hóa tốn nhiều tiền hơn Chuyển đổi số.",
      "Tin học hóa là thay đổi hoàn toàn mô hình, trong khi Chuyển đổi số chỉ là việc đánh máy thay vì viết tay.",
      "Chuyển đổi số làm thay đổi toàn diện mô hình vận hành và tạo ra giá trị/mô hình mới dựa trên dữ liệu, chứ không chỉ số hóa một quy trình cũ đã có sẵn.",
      "Tin học hóa cần Internet, Chuyển đổi số thì không cần kết nối mạng.",
      "Hoàn toàn không có sự khác biệt, hai từ này là một.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 60,
    q: 'Ứng dụng nào sau đây ở Việt Nam KHÔNG phải là một "Ví điện tử" hoặc Cổng thanh toán số?',
    options: ["MoMo", "ZaloPay", "VNPay", "Viettel Money", "Microsoft Excel"],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 61,
    q: "Trong lĩnh vực Nông nghiệp, việc ứng dụng công nghệ để hệ thống tự động tưới tiêu khi cảm nhận được độ ẩm của đất xuống thấp là ví dụ của công nghệ nào?",
    options: [
      "Cảm biến Internet vạn vật (IoT - Internet of Things).",
      "Kính thực tế ảo (VR).",
      "Tiền điện tử (Cryptocurrency).",
      "Chữ ký số.",
      "In 3D (3D Printing).",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 62,
    q: "Khi quét mã QR trên thẻ Căn cước công dân (CCCD) gắn chip bằng điện thoại thông minh, thông tin cơ bản nào sau đây sẽ hiển thị?",
    options: [
      "Số dư tài khoản ngân hàng của công dân.",
      "Thông tin nhân thân cơ bản và số Chứng minh nhân dân cũ 9 số (nếu có).",
      "Lịch sử khám chữa bệnh chi tiết của công dân.",
      "Điểm thi tốt nghiệp THPT của công dân đó.",
      "Lịch sử truy cập Internet trong tháng qua.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 63,
    q: "Tài khoản định danh điện tử trên ứng dụng VNeID (Mức độ 2) có giá trị thay thế cho loại giấy tờ nào khi công dân thực hiện các thủ tục hành chính?",
    options: [
      "Hộ chiếu khi đi du lịch tại các nước Châu Âu.",
      "Thẻ CCCD gắn chip vật lý và các loại giấy tờ đã được tích hợp thành công (như Giấy phép lái xe, BHYT).",
      "Giấy chứng nhận quyền sử dụng đất (Sổ đỏ) bản gốc.",
      "Thẻ ATM để rút tiền tại mọi cây ATM trên toàn cầu.",
      "Bằng cấp, chứng chỉ đại học bản gốc.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 64,
    q: 'Trong khái niệm Chuyển đổi số quốc gia, "Xã hội số" (Digital Society) chú trọng nhất vào đối tượng nào?',
    options: [
      "Đưa toàn bộ máy móc thay thế con người.",
      "Người dân (Công dân số), giúp họ trang bị kỹ năng số, có khả năng tiếp cận các dịch vụ số thiết yếu (y tế, giáo dục, văn hóa) trên môi trường mạng.",
      "Các doanh nghiệp xuất nhập khẩu quốc tế.",
      "Đội ngũ kỹ sư lập trình phần mềm cấp cao.",
      "Những người kinh doanh tiền ảo trên mạng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 65,
    q: "Khi vô tình đọc được một tin tức rất giật gân trên Facebook (ví dụ: bùng phát dịch bệnh lạ tại địa phương), hành động nào sau đây là văn minh và an toàn nhất?",
    options: [
      "Chia sẻ (Share) ngay lập tức lên trang cá nhân để cảnh báo bạn bè.",
      "Tải ảnh về và gửi vào tất cả các nhóm chat Zalo của gia đình.",
      "Kiểm tra đối chiếu thông tin trên các báo điện tử chính thống hoặc cổng thông tin của chính quyền trước khi tin tưởng và chia sẻ.",
      "Bình luận chỉ trích cơ quan chức năng vì không thông báo sớm.",
      "Xóa tài khoản mạng xã hội ngay lập tức để bảo vệ mình.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 66,
    q: 'Thư mục "Spam" hoặc "Junk" trong hệ thống thư điện tử (như Gmail) dùng để chứa loại thư nào?',
    options: [
      "Thư của cấp trên gửi nội bộ.",
      "Thư rác, thư quảng cáo hàng loạt không mong muốn hoặc thư có dấu hiệu lừa đảo.",
      "Thư chứa tài liệu quan trọng đã được hệ thống mã hóa bảo mật.",
      "Thư bạn đang soạn dở nhưng chưa bấm nút gửi đi (bản nháp).",
      "Thư bạn đã gửi đi thành công cho người khác.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 67,
    q: 'Chế độ duyệt web "Ẩn danh" (Incognito / Private Browsing) trên trình duyệt (như Google Chrome) có tính năng chính là gì?',
    options: [
      "Ngăn chặn 100% việc máy tính bị nhiễm virus.",
      "Trình duyệt không lưu lại lịch sử truy cập, cookie và thông tin biểu mẫu trên thiết bị đó sau khi bạn đóng tất cả các cửa sổ ẩn danh.",
      "Che giấu hoàn toàn danh tính của bạn đối với nhà mạng viễn thông và cơ quan an ninh.",
      "Tăng tốc độ tải trang web lên gấp 3 lần so với bình thường.",
      "Cho phép truy cập mạng Internet miễn phí mà không cần kết nối Wi-Fi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 68,
    q: "Hành vi sao chép toàn bộ một bài viết, bức ảnh của người khác trên mạng và đăng lại trên trang cá nhân của mình mà không ghi rõ nguồn (coi như của mình) được gọi là gì?",
    options: [
      "Chuyển đổi số nội dung.",
      "Chia sẻ tri thức cộng đồng.",
      "Vi phạm bản quyền / Đạo văn.",
      "Quảng bá văn hóa số.",
      "Bảo mật thông tin mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 69,
    q: "Khi mua sắm trực tuyến (Online Shopping), để đảm bảo an toàn tài sản, bạn TUYỆT ĐỐI KHÔNG NÊN làm điều gì?",
    options: [
      "Đọc kỹ đánh giá (review) của những người mua trước.",
      "Mua hàng tại các sàn thương mại điện tử uy tín, có đăng ký với cơ quan chức năng.",
      "Kiểm tra kỹ chính sách đổi trả hàng và bảo hành trước khi đặt mua.",
      "Chuyển trước 100% tiền mặt vào tài khoản cá nhân của một người bán hàng lạ mặt trên Facebook khi không rõ danh tính và uy tín của họ.",
      "So sánh giá của cùng một sản phẩm ở nhiều cửa hàng khác nhau.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 70,
    q: 'Bạn nhận được một email trông giống hệt như gửi từ ngân hàng của bạn, yêu cầu click vào một đường link và nhập mật khẩu để "cập nhật hệ thống". Đây rất có thể là hình thức tấn công mạng nào?',
    options: [
      "Lừa đảo giả mạo (Phishing).",
      "Tấn công từ chối dịch vụ (DDoS).",
      "Quảng cáo hợp pháp của ngân hàng (Marketing).",
      "Lỗi phần cứng máy tính (Hardware Failure).",
      "Nâng cấp băng thông Internet.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 71,
    q: 'Trong phần mềm Microsoft Excel, tính năng "Freeze Panes" được sử dụng với mục đích gì?',
    options: [
      "Đóng băng (khóa) không cho người khác sửa đổi nội dung tệp tin.",
      "Cố định hàng và/hoặc cột tiêu đề để chúng luôn hiển thị khi bạn cuộn trang tính chứa dữ liệu lớn.",
      "Thay đổi màu sắc của toàn bộ bảng tính thành màu xanh dương.",
      "Tự động chuyển đổi các số thập phân thành số nguyên.",
      "Xóa bỏ tất cả các công thức và chỉ giữ lại giá trị chữ số.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 72,
    q: 'Chức năng "Watermark" trong Microsoft Word dùng để làm gì?',
    options: [
      "Chèn các ký tự toán học phức tạp vào văn bản.",
      'Tạo một chữ mờ hoặc hình mờ chìm dưới nền của văn bản (thường dùng để đánh dấu bản quyền hoặc trạng thái tài liệu như "BẢN NHÁP").',
      "Kiểm tra lỗi chính tả tiếng Việt tự động.",
      "Thay đổi kích thước lề giấy cho phù hợp với máy in.",
      "Tự động lưu tài liệu lên đám mây cứ mỗi 5 phút.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 73,
    q: 'Trong Microsoft PowerPoint, chế độ "Presenter View" (Góc nhìn người thuyết trình) mang lại lợi ích gì khi bạn cắm máy tính vào máy chiếu?',
    options: [
      "Khán giả sẽ nhìn thấy toàn bộ màn hình máy tính của bạn, bao gồm cả thanh công cụ và các ứng dụng khác đang mở.",
      "Tắt hoàn toàn máy chiếu và chỉ hiển thị trên màn hình laptop của bạn.",
      "Khán giả nhìn thấy slide trình chiếu trọn vẹn, còn bạn (trên máy tính) nhìn thấy được slide hiện tại, slide tiếp theo, ghi chú (notes) và đồng hồ đếm giờ.",
      "Tự động dịch lời nói của bạn thành phụ đề tiếng Anh trên màn hình.",
      "Tự động phát nhạc nền nhẹ nhàng trong suốt quá trình thuyết trình.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 74,
    q: "Trong Excel, để tìm ra giá trị LỚN NHẤT trong một dải ô (ví dụ từ B1 đến B10), bạn dùng hàm nào?",
    options: [
      "=LARGE(B1:B10)",
      "=MIN(B1:B10)",
      "=SUM(B1:B10)",
      "=MAX(B1:B10)",
      "=COUNT(B1:B10)",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 75,
    q: "Trong Microsoft Word, các tổ hợp phím Ctrl + B, Ctrl + I, Ctrl + U lần lượt có chức năng gì?",
    options: [
      "Cắt, Sao chép, Dán văn bản.",
      "In đậm, In nghiêng, Gạch chân văn bản.",
      "Căn trái, Căn giữa, Căn phải văn bản.",
      "Lưu tài liệu, Mở tài liệu mới, Đóng tài liệu.",
      "Chèn hình ảnh, Chèn bảng, Chèn liên kết.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 76,
    q: "Quy tắc bắt buộc đầu tiên khi bạn muốn viết một công thức tính toán hoặc sử dụng một hàm trong Microsoft Excel là gì?",
    options: [
      "Phải gõ chữ in hoa toàn bộ.",
      'Phải bắt đầu bằng dấu ngoặc kép ("").',
      "Phải bắt đầu bằng dấu bằng (=).",
      "Phải bắt đầu bằng dấu cộng (+).",
      "Phải có ít nhất 2 chữ số trong công thức.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 77,
    q: "Khi bạn ấn tổ hợp phím Ctrl + C sau đó là Ctrl + V đối với một tệp tin (file) trên máy tính, hệ điều hành sẽ thực hiện lệnh gì?",
    options: [
      "Đổi tên tệp tin đó thành tên mới.",
      "Xóa tệp tin đó vào thùng rác.",
      "Cắt tệp tin khỏi vị trí cũ và dán sang vị trí mới.",
      "Sao chép tệp tin đó và tạo ra một bản sao (dán) ở vị trí bạn chọn.",
      "Nén tệp tin lại để giảm dung lượng.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 78,
    q: 'Thuật ngữ "SaaS" (Software as a Service - Phần mềm dạng Dịch vụ) trong điện toán đám mây được hiểu như thế nào?',
    options: [
      "Bạn phải mua đĩa CD phần mềm về tự cài đặt thủ công vào máy tính.",
      "Bạn không cần cài đặt phần mềm vào máy, mà truy cập và sử dụng phần mềm đó thông qua trình duyệt web trên Internet (Ví dụ: Google Workspace, Microsoft 365 online).",
      "Là một loại phần mềm diệt virus chỉ hoạt động khi máy tính không có Internet.",
      "Là dịch vụ sửa chữa phần cứng máy tính tận nhà.",
      "Là việc nhà nước cấp phát máy tính miễn phí cho người dân.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 79,
    q: "Trong công cuộc Chuyển đổi số của Chính phủ Việt Nam (Đề án 06), toàn bộ dữ liệu nhân thân cốt lõi của công dân được quản lý tập trung tại đâu?",
    options: [
      "Cơ sở dữ liệu quốc gia về Dân cư do Bộ Công an quản lý.",
      "Sổ hộ khẩu giấy lưu trữ tại Ủy ban nhân dân cấp xã.",
      "Máy chủ của các mạng xã hội nước ngoài.",
      "Máy tính cá nhân của các trưởng thôn/tổ trưởng dân phố.",
      "Hồ sơ y tế tại các bệnh viện tuyến trung ương.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 80,
    q: 'Thuật ngữ "RPA" (Robotic Process Automation - Tự động hóa quy trình bằng robot) trong môi trường văn phòng số là gì?',
    options: [
      "Chế tạo ra một con robot bằng kim loại để ngồi đánh máy thay nhân viên.",
      "Việc dùng phần mềm máy tính để bắt chước các thao tác lặp đi lặp lại của con người (như nhập liệu, tải file) giúp quy trình diễn ra tự động và chính xác.",
      "Lắp đặt camera AI để theo dõi thời gian làm việc của nhân viên.",
      "Cấm nhân viên sử dụng giấy tờ và chỉ được phép nói chuyện với máy tính.",
      "Đưa robot vào dọn dẹp vệ sinh trong văn phòng công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 81,
    q: '"Mã hóa dữ liệu" (Data Encryption) là kỹ thuật rất quan trọng trong an toàn không gian số. Bản chất của mã hóa là gì?',
    options: [
      "Dịch một văn bản từ tiếng Việt sang tiếng Anh.",
      'Chuyển đổi dữ liệu từ định dạng dễ đọc sang định dạng mật mã không thể đọc được nếu không có "chìa khóa" (key) giải mã.',
      "Đổi tên tệp tin để người khác không tìm thấy.",
      "Lưu trữ văn bản dưới định dạng file PDF thay vì Word.",
      "Xóa bỏ hoàn toàn dữ liệu để không ai có thể truy cập.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 82,
    q: 'Trong nền kinh tế số, thuật ngữ "Fintech" là từ viết tắt kết hợp của hai lĩnh vực nào?',
    options: [
      "Final và Technique (Kỹ thuật cuối cùng).",
      "Fine và Technology (Công nghệ tuyệt vời).",
      "Financial và Technology (Công nghệ Tài chính).",
      "Finish và Teaching (Hoàn thành giảng dạy).",
      "Find và Ticket (Tìm kiếm vé máy bay).",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 83,
    q: '"Trí tuệ nhân tạo tạo sinh" (Generative AI), ví dụ như ChatGPT, khác biệt như thế nào so với các phần mềm tìm kiếm truyền thống (như Google Search cũ)?',
    options: [
      "Nó chỉ có khả năng tính toán các phép toán cộng trừ nhân chia.",
      "Thay vì chỉ liệt kê các trang web có chứa từ khóa, nó có khả năng tự động sáng tạo ra nội dung mới (văn bản, hình ảnh, mã code) dựa trên dữ liệu đã học.",
      "Nó yêu cầu người dùng phải tự viết mã lập trình thì mới trả lời được câu hỏi.",
      "Nó hoạt động không cần kết nối Internet, chỉ cần điện thoại di động có pin.",
      "Nó không thể hiểu được ngôn ngữ tiếng Việt dưới bất kỳ hình thức nào.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 84,
    q: 'Mô hình "Chính quyền điện tử" hướng tới "Chính phủ số" đem lại thay đổi lớn nhất nào cho người dân?',
    options: [
      "Người dân không cần phải nộp thuế cho nhà nước nữa.",
      "Người dân có thể thực hiện phần lớn các thủ tục hành chính mọi lúc, mọi nơi qua môi trường mạng mà không cần đến trực tiếp cơ quan công quyền.",
      "Người dân bị bắt buộc phải thi đỗ chứng chỉ tin học quốc tế mới được làm CCCD.",
      "Chính quyền sẽ phát cho mỗi người dân một chiếc điện thoại di động miễn phí hàng năm.",
      "Mọi thông tin riêng tư, bí mật cá nhân của người dân đều được công khai minh bạch trên báo chí.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 85,
    q: 'Trong an toàn thông tin mạng, thuật ngữ "Malware" dùng để chỉ điều gì?',
    options: [
      "Một loại phần mềm hỗ trợ tăng tốc độ kết nối Wi-Fi.",
      "Một phần mềm độc hại (như virus, trojan, mã độc tống tiền) được thiết kế để phá hoại, đánh cắp dữ liệu hoặc xâm nhập hệ thống.",
      "Thiết bị phần cứng của máy tính như chuột và bàn phím.",
      "Một loại phần mềm ứng dụng chuyên dùng để thiết kế đồ họa 3D.",
      "Hệ thống cáp quang dưới đáy biển kết nối Internet quốc tế.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 86,
    q: '"Cyberbullying" (Bắt nạt trên không gian mạng) là hành vi như thế nào?',
    options: [
      "Cạnh tranh lành mạnh trong các trò chơi điện tử trực tuyến.",
      "Sử dụng công nghệ kỹ thuật số, mạng xã hội hoặc tin nhắn để đe dọa, quấy rối, bêu xấu hoặc làm tổn thương người khác.",
      "Việc giáo viên giao bài tập về nhà quá nhiều qua ứng dụng học trực tuyến.",
      "Sử dụng phần mềm chặn quảng cáo khi lướt web.",
      "Báo cáo (Report) một tài khoản lừa đảo để ban quản trị mạng xã hội khóa tài khoản đó.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 87,
    q: 'Khi bạn duyệt web, trang web thường hỏi bạn có chấp nhận "Cookies" hay không. "Cookie" ở đây là gì?',
    options: [
      "Một loại bánh quy giảm giá được tặng kèm khi mua sắm online.",
      "Một mẩu dữ liệu nhỏ mà trang web lưu trên trình duyệt của bạn để ghi nhớ thông tin (như trạng thái đăng nhập, giỏ hàng, tùy chọn ngôn ngữ).",
      "Một con virus chắc chắn sẽ làm hỏng máy tính của bạn ngay lập tức.",
      "Phần mềm diệt virus được cài sẵn trên trình duyệt web.",
      "Mật khẩu ngân hàng của bạn do hệ thống tự động sinh ra.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 88,
    q: "Nếu bạn nhập sai mật khẩu tài khoản VNeID quá số lần quy định và bị khóa tạm thời, cách xử lý ĐÚNG, AN TOÀN VÀ CHÍNH THỐNG nhất là gì?",
    options: [
      'Đăng lên Facebook nhờ các "hacker" mạng lấy lại mật khẩu giúp với giá rẻ.',
      'Sử dụng tính năng "Quên mật khẩu" trên ứng dụng để tự lấy lại qua số điện thoại/NFC, hoặc mang CCCD đến cơ quan Công an để được hỗ trợ mở khóa.',
      "Xóa ứng dụng đi, mua một sim điện thoại số mới và tạo lại tài khoản từ đầu.",
      "Gửi email cung cấp số thẻ ngân hàng và mã OTP cho tài khoản giả mạo công an trên Zalo.",
      "Không làm gì cả, tài khoản sẽ tự động mở và không cần mật khẩu sau 30 ngày.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 89,
    q: 'Khi mua hàng trực tuyến (Shopee, Lazada, Tiktok Shop...), phương thức thanh toán "COD" (Cash on Delivery) có nghĩa là gì?',
    options: [
      "Chuyển khoản trước qua tài khoản ngân hàng rồi mới giao hàng.",
      "Thanh toán bằng thẻ tín dụng quốc tế (Visa/Mastercard).",
      "Nhận hàng, kiểm tra (tùy chính sách) rồi mới thanh toán tiền mặt trực tiếp cho người giao hàng (shipper).",
      "Thanh toán bằng mã giảm giá thay cho tiền thật.",
      "Trả góp sản phẩm theo từng tháng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 90,
    q: 'Hành động "Sao lưu dữ liệu" (Backup) đối với các tệp tin quan trọng mang ý nghĩa gì?',
    options: [
      "Xóa hoàn toàn các tệp tin đó khỏi máy tính để giải phóng bộ nhớ.",
      "Dịch các tệp tin đó sang một ngôn ngữ khác để người nước ngoài có thể hiểu được.",
      "Đăng công khai toàn bộ các tệp tin đó lên mạng xã hội để mọi người cùng xem.",
      "Tạo ra một hoặc nhiều bản sao của dữ liệu và lưu trữ ở một nơi an toàn khác (như ổ cứng rời, đám mây) để phòng trường hợp thiết bị chính bị hỏng hoặc mất dữ liệu.",
      "Thiết lập mật khẩu cho máy tính khi khởi động.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 91,
    q: "Trong Microsoft Word, khi bạn muốn đẩy đoạn văn bản đang gõ dở xuống một trang mới ngay lập tức (Ngắt trang - Page Break), bạn dùng tổ hợp phím nào?",
    options: [
      "Shift + Enter",
      "Alt + Enter",
      "Ctrl + Enter",
      "Ctrl + P",
      "Tab + Enter",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 92,
    q: 'Khu vực "Header" và "Footer" trong phần mềm soạn thảo văn bản (Word) được dùng để làm gì?',
    options: [
      "Chèn các hình ảnh động có định dạng GIF vào giữa văn bản.",
      "Tạo các tiêu đề ở lề trên (Header) và lề dưới (Footer) của trang giấy, thường lặp lại tự động ở tất cả các trang.",
      "Mã hóa tài liệu bằng mật khẩu gồm chữ và số.",
      "Định dạng màu nền (background) cho toàn bộ trang giấy.",
      "Tự động dịch tài liệu sang tiếng nước ngoài.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 93,
    q: "Trong Excel, tính năng nào giúp bạn TỰ ĐỘNG ĐỔI MÀU các ô có giá trị lớn hơn 50 (hoặc thỏa mãn một điều kiện bất kỳ)?",
    options: [
      "Data Validation",
      "Find & Select",
      "Format Painter",
      "Conditional Formatting (Định dạng có điều kiện)",
      "Text to Columns",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 94,
    q: 'Để tạo một danh sách thả xuống (Drop-down list) trong một ô của Excel (ví dụ: cho phép người dùng chỉ được chọn "Nam" hoặc "Nữ"), bạn sử dụng công cụ nào?',
    options: [
      "Data Validation (Xác thực dữ liệu)",
      "Pivot Table",
      "Insert Shape",
      "Page Setup",
      "Wrap Text",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 95,
    q: 'Trong Microsoft PowerPoint, chức năng "Slide Master" mang lại lợi ích lớn nhất nào?',
    options: [
      "Tự động thiết kế nội dung bài thuyết trình bằng trí tuệ nhân tạo.",
      "Giúp thiết lập định dạng chung (phông chữ, logo, màu nền, bố cục) cho toàn bộ các slide một cách thống nhất và nhanh chóng.",
      "Cho phép người xem bình chọn trực tiếp trên slide.",
      "Giảm dung lượng file xuống mức thấp nhất bằng cách xóa bớt ảnh.",
      "Khóa bài thuyết trình không cho ai mở lên xem.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 96,
    q: 'Trong Microsoft Word, chức năng "Drop Cap" dùng để làm gì?',
    options: [
      "Tạo một chữ cái đầu đoạn văn được phóng to ra, chiếm diện tích nhiều dòng (thường thấy ở các bài báo, tạp chí).",
      "Cắt bỏ đi phần dưới của một bức ảnh trong tài liệu.",
      "Viết hoa toàn bộ các chữ cái trong tài liệu.",
      "Chèn biểu tượng một giọt nước vào văn bản.",
      "Tự động sửa các lỗi sai chính tả tiếng Anh.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 97,
    q: "Khi bạn gõ một công thức trong Excel và nhận được kết quả là lỗi #NAME?, nguyên nhân chủ yếu là do đâu?",
    options: [
      "Bạn chia một số cho 0.",
      "Ô bạn đang tham chiếu chứa quá nhiều ký tự.",
      "Bạn đã gõ sai tên hàm (ví dụ: gõ =SUMM thay vì =SUM) hoặc dùng một hàm không tồn tại.",
      "Bảng tính Excel của bạn chưa được lưu (Save).",
      "Số được tính ra có giá trị quá lớn, không hiển thị vừa trong ô.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 98,
    q: 'Trong bối cảnh công nghệ thông tin và chuyển đổi số, khái niệm "Khoảng cách số" (Digital Divide) được hiểu là gì?',
    options: [
      "Là khoảng cách vật lý tính bằng kilomet giữa máy tính cá nhân và máy chủ đám mây.",
      "Là sự chênh lệch và bất bình đẳng giữa các nhóm người/khu vực trong việc tiếp cận, sử dụng công nghệ thông tin và Internet.",
      "Là thời gian phản hồi (Ping) khi truy cập một trang web nước ngoài.",
      "Là độ phân giải của màn hình tivi kỹ thuật số.",
      "Là sự chênh lệch mức lương giữa các kỹ sư lập trình trong cùng một công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 99,
    q: "Trong hệ thống chữ ký số của doanh nghiệp hoặc tổ chức, thiết bị vật lý nhỏ gọn (giống USB) dùng để cắm vào máy tính thường được gọi là gì?",
    options: [
      "USB Wi-Fi",
      "USB Bluetooth",
      "USB Token (chứa khóa bí mật của người ký)",
      "Mouse Token",
      "Keyboard Token",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 100,
    q: 'Mục tiêu cốt lõi của việc xây dựng "Thành phố thông minh" (Smart City) là gì?',
    options: [
      "Lắp đặt tivi màn hình phẳng ở mọi ngã tư đường phố.",
      "Ứng dụng công nghệ thông tin và phân tích dữ liệu để nâng cao hiệu quả quản lý đô thị, tối ưu hóa dịch vụ công và cải thiện chất lượng sống của người dân.",
      "Buộc mọi người dân phải ở trong nhà và làm việc từ xa 100%.",
      "Loại bỏ hoàn toàn hệ thống giao thông công cộng truyền thống như xe buýt.",
      "Xây dựng các tòa nhà hoàn toàn bằng kính và kim loại.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 101,
    q: 'Vũ trụ ảo "Metaverse" – một định hướng phát triển của chuyển đổi số trong tương lai – chủ yếu kết hợp những nền tảng công nghệ nào?',
    options: [
      "Thực tế ảo (VR) và Thực tế tăng cường (AR) tạo ra môi trường tương tác 3D.",
      "Chỉ sử dụng công nghệ in giấy 3D.",
      "Công nghệ truyền thanh qua sóng Radio FM truyền thống.",
      "Công nghệ điện báo mã Morse.",
      "Chỉ dùng để quét mã vạch 1D tại siêu thị.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 102,
    q: "Trí tuệ nhân tạo (AI) đã mang lại đột phá lớn nhất nào trong lĩnh vực Y tế số thời gian gần đây?",
    options: [
      "Thay thế hoàn toàn 100% bác sĩ phẫu thuật bằng robot.",
      "Hỗ trợ phân tích hình ảnh y khoa (như X-quang, MRI) để nhận diện các bất thường và chẩn đoán bệnh ung thư ở giai đoạn sớm với độ chính xác cao.",
      "Tự động kê đơn thuốc cho bệnh nhân mà không cần khám.",
      "Chữa khỏi hoàn toàn mọi loại bệnh nan y chỉ bằng sóng điện từ.",
      "Phát thuốc miễn phí bằng máy bán hàng tự động.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 103,
    q: 'Trong Chính phủ số, hệ thống "e-Cabinet" được triển khai nhằm mục đích chính là gì?',
    options: [
      "Quản lý hệ thống đèn giao thông điện tử trên toàn quốc.",
      "Là hệ thống thông tin phục vụ họp và xử lý công việc của Chính phủ, hướng tới chính phủ không giấy tờ.",
      "Là ứng dụng để người dân gọi xe cứu thương trực tuyến.",
      "Là trò chơi điện tử trực tuyến dành cho các công chức nhà nước lúc nghỉ ngơi.",
      "Là tủ đựng hồ sơ bằng sắt có khóa điện tử mật mã tại cơ quan.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 104,
    q: 'Trong ngành Bán lẻ số, việc phân tích "Dữ liệu lớn" (Big Data) thu thập từ khách hàng chủ yếu giúp doanh nghiệp làm gì?',
    options: [
      "Tìm ra tên nhân viên đi làm muộn nhiều nhất.",
      "Xóa bỏ các gian hàng trực tuyến không bán được hàng.",
      "Dự đoán nhu cầu, thói quen mua sắm, từ đó cá nhân hóa các gợi ý sản phẩm và tối ưu hóa chuỗi cung ứng.",
      "Tự động tố cáo khách hàng mua ít hàng với cơ quan công an.",
      "Chặn khách hàng ở khu vực nông thôn mua hàng trực tuyến.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 105,
    q: '"Deepfake" là một thuật ngữ đang rất phổ biến hiện nay, nó chỉ hiện tượng gì?',
    options: [
      "Một lỗi phần cứng khiến màn hình điện thoại bị tối đen sâu (deep).",
      "Công nghệ sử dụng AI để tạo ra các video, âm thanh giả mạo (ghép mặt, nhái giọng) một người nào đó cực kỳ chân thực, thường dùng để lừa đảo.",
      "Tính năng lặn sâu dưới nước của các loại đồng hồ thông minh (Smartwatch).",
      "Một loại phần mềm diệt virus quét sâu vào hệ điều hành.",
      "Phong trào chụp ảnh nghệ thuật ở dưới đáy biển.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 106,
    q: "Các ứng dụng như Google Authenticator hoặc Microsoft Authenticator cài trên điện thoại thông minh được dùng để làm gì?",
    options: [
      "Dịch thuật giọng nói tự động sang 100 ngôn ngữ.",
      "Lọc các cuộc gọi quảng cáo rác từ các công ty bảo hiểm.",
      "Tạo ra mã xác thực OTP thay đổi liên tục (thường là 30 giây/lần) dùng cho tính năng Bảo mật 2 lớp (2FA).",
      "Chỉnh sửa khuôn mặt, làm mịn da khi gọi video call.",
      "Đếm số bước chân và nhịp tim của người sử dụng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 107,
    q: 'Mối nguy hiểm tiềm ẩn lớn nhất khi bạn dùng điện thoại quét một "mã QR lạ" được dán bừa bãi trên tường hoặc cột điện ngoài đường là gì?',
    options: [
      "Điện thoại của bạn sẽ bị trừ hết tiền cước viễn thông ngay lập tức.",
      "Bạn sẽ bị dẫn dụ truy cập vào một trang web lừa đảo để đánh cắp thông tin cá nhân hoặc tải mã độc về thiết bị.",
      "Máy ảnh của điện thoại sẽ bị cháy cảm biến.",
      "Bạn sẽ bị yêu cầu đóng một khoản tiền phạt cho cảnh sát giao thông.",
      "Màn hình điện thoại sẽ vỡ ngay lập tức.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 108,
    q: "Theo nguyên tắc bảo vệ quyền riêng tư trên không gian mạng, khi bạn chụp một bức ảnh nhóm tại công ty và muốn đăng lên Facebook cá nhân, hành động lịch sự và đúng đắn nhất là?",
    options: [
      "Chỉnh sửa mặt của tất cả mọi người thành hình con vật rồi mới đăng.",
      "Hỏi ý kiến/xin phép những người có mặt trong ảnh trước khi đăng tải hình ảnh của họ lên không gian công cộng.",
      "Đăng ngay lập tức và gắn thẻ (tag) tất cả mọi người để họ nhận được thông báo bất ngờ.",
      "Cắt bỏ mặt của tất cả những người khác, chỉ để lại mình bạn rồi đăng.",
      "Gửi bức ảnh đó cho các tờ báo mạng để kiếm nhuận ảnh.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 109,
    q: "Cách an toàn và khoa học nhất để người dùng thông thường quản lý nhiều mật khẩu mạnh, phức tạp cho các tài khoản khác nhau là gì?",
    options: [
      "Ghi tất cả mật khẩu vào một tờ giấy note và dán ở mặt sau điện thoại.",
      "Sử dụng chung 1 mật khẩu duy nhất (ví dụ: ngày tháng năm sinh) cho tất cả các tài khoản.",
      'Lưu tất cả mật khẩu vào danh bạ điện thoại với tên là "Matkhau1, Matkhau2...".',
      "Sử dụng một trình quản lý mật khẩu uy tín (Password Manager) để lưu trữ và mã hóa an toàn tất cả các mật khẩu đó.",
      "Gửi toàn bộ mật khẩu qua tin nhắn Zalo cho một người bạn thân để nhờ họ nhớ hộ.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 110,
    q: '"Thuật toán" (Algorithm) của các mạng xã hội (như TikTok, Facebook) thường tạo ra hiện tượng "Bong bóng lọc" (Filter Bubble). Hiện tượng này được biểu hiện như thế nào?',
    options: [
      "Mạng xã hội tự động thêm hiệu ứng bong bóng xà phòng bay lơ lửng trên màn hình điện thoại.",
      "Mạng xã hội chỉ hiển thị các nội dung, bài báo, video phù hợp với sở thích và quan điểm bạn đã từng xem, làm giới hạn khả năng tiếp nhận các quan điểm đa chiều.",
      "Mạng xã hội tự động chặn tất cả các tin nhắn từ người lạ.",
      "Mạng xã hội yêu cầu bạn phải nạp tiền mới được xem video.",
      "Mạng xã hội tự động kết bạn ngẫu nhiên với 100 người mỗi ngày.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 111,
    q: "Trong Microsoft Word, nếu bạn lỡ bấm nút Undo (Ctrl + Z) một thao tác nhưng sau đó đổi ý muốn khôi phục lại (làm lại) thao tác vừa Undo đó, bạn dùng tổ hợp phím nào (lệnh Redo)?",
    options: ["Ctrl + X", "Ctrl + Y", "Ctrl + U", "Ctrl + R", "Ctrl + F"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 112,
    q: 'Trong Excel, tính năng "Filter" (Lọc dữ liệu) nằm trong thẻ Data được sử dụng để làm gì?',
    options: [
      "Xóa hoàn toàn các hàng dữ liệu bị trùng lặp trong bảng.",
      "Hiển thị (lọc ra) những hàng thỏa mãn một điều kiện cụ thể và tạm thời ẩn đi các hàng không thỏa mãn điều kiện đó.",
      "Thay đổi màu sắc của văn bản bên trong ô.",
      "Sắp xếp lại thứ tự tên nhân viên theo bảng chữ cái A-Z.",
      "Tính tổng nhanh của một cột dữ liệu.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 113,
    q: 'Tính năng "Mail Merge" (Trộn thư) trong Microsoft Word mang lại tiện ích lớn nhất nào cho dân văn phòng?',
    options: [
      "Gửi email hàng loạt mà không cần sử dụng kết nối Internet.",
      "Tạo ra hàng loạt các tài liệu giống nhau về mặt biểu mẫu (như thư mời, giấy khen, hợp đồng) nhưng tự động thay đổi thông tin cá nhân hóa (Tên, địa chỉ) lấy từ một danh sách dữ liệu (như Excel).",
      "Trộn 2 file Word khác nhau thành một file duy nhất.",
      "Tự động kiểm tra lỗi chính tả của nhiều tài liệu cùng một lúc.",
      "Trộn các màu sắc khác nhau để tạo thành màu nền mới cho văn bản.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 114,
    q: "Trong PowerPoint, để xuất (lưu) bài thuyết trình của bạn thành một video (định dạng MP4) để người khác xem như một đoạn phim, bạn vào thẻ File và chọn mục nào?",
    options: [
      "Print",
      "Share",
      "Options",
      "Export -> Create a Video",
      "Account",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 115,
    q: "Trên hệ điều hành Windows, tổ hợp phím tắt nào được dùng để mở nhanh cửa sổ Quản lý tệp tin (File Explorer / This PC)?",
    options: [
      "Phím Windows + M",
      "Phím Windows + E",
      "Phím Windows + R",
      "Phím Windows + D",
      "Phím Windows + I",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 116,
    q: "Trong Excel, khi bạn sử dụng hàm VLOOKUP (tìm kiếm) và nhận được kết quả báo lỗi #N/A, nguyên nhân phổ biến nhất là gì?",
    options: [
      "Bạn đã chia một số cho 0.",
      "Ô bạn tra cứu không có dữ liệu (ô trống).",
      "Giá trị mà bạn muốn tìm kiếm KHÔNG TỒN TẠI trong cột đầu tiên của vùng dữ liệu tra cứu (Not Available).",
      "Máy tính của bạn đang bị lỗi font chữ.",
      "Bạn chưa đăng nhập bản quyền Microsoft Office.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 117,
    q: "Trong Word, để tự động đánh số trang cho một tài liệu dài, bạn truy cập vào thẻ (Tab) nào trên thanh Ribbon?",
    options: [
      "Thẻ Home",
      "Thẻ Insert",
      "Thẻ Design",
      "Thẻ Layout",
      "Thẻ References",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 118,
    q: 'Sự khác biệt cốt lõi giữa "Chính phủ điện tử" (E-Government) và "Chính phủ số" (Digital Government) là gì?',
    options: [
      "Chính phủ điện tử sử dụng điện, còn Chính phủ số chạy bằng pin mặt trời.",
      "Chính phủ điện tử tập trung số hóa các quy trình giấy tờ hiện có; Chính phủ số nâng lên một tầm cao mới: sử dụng Dữ liệu (Data) để ra quyết định và chủ động cung cấp dịch vụ cá nhân hóa cho người dân.",
      "Chính phủ điện tử phục vụ người dân thành thị, Chính phủ số phục vụ người dân nông thôn.",
      "Chính phủ điện tử do cơ quan nhà nước làm, Chính phủ số do doanh nghiệp tư nhân làm thay.",
      "Không có sự khác biệt, hai khái niệm này hoàn toàn giống hệt nhau.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 119,
    q: 'Trong Công nghiệp 4.0, khái niệm "Bản sao số" (Digital Twin) được hiểu như thế nào?',
    options: [
      "Việc chụp ảnh bằng máy kỹ thuật số thay vì máy phim.",
      "Một mô hình ảo trên máy tính mô phỏng chính xác cấu trúc và trạng thái hoạt động thực tế của một thực thể vật lý (ví dụ: máy móc, tòa nhà) để theo dõi và tối ưu hóa.",
      "Việc một người dùng tạo hai tài khoản Facebook giống hệt nhau.",
      "Dịch vụ in ấn văn bản bằng máy photocopy kỹ thuật số.",
      "Một bản sao lưu (backup) dữ liệu trên đám mây.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 120,
    q: 'Mạng di động thế hệ thứ 5 (5G) có một ưu điểm vô cùng quan trọng đối với các công nghệ tương lai như "Xe tự lái" hoặc "Phẫu thuật từ xa" so với mạng 4G. Đó là ưu điểm gì?',
    options: [
      "Giá cước sử dụng rẻ hơn.",
      "Có thể phát sóng xuyên qua các bức tường bê tông cốt thép dày 1 mét.",
      "Độ trễ (Latency) cực kỳ thấp (gần như tức thời), đảm bảo lệnh điều khiển được thực thi ngay lập tức mà không có độ trễ gây nguy hiểm.",
      "Chỉ tiêu tốn năng lượng bằng 1% so với 4G.",
      "Không cần trạm phát sóng (Trạm BTS) để hoạt động.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 121,
    q: "Trong lộ trình Chuyển đổi số của một doanh nghiệp hoặc tổ chức, yếu tố nào được các chuyên gia đánh giá là KHÓ KHĂN và mang tính QUYẾT ĐỊNH NHẤT tới sự thành bại?",
    options: [
      "Vấn đề mua sắm phần mềm đắt tiền của nước ngoài.",
      "Sự thay đổi về tư duy, nhận thức, thói quen và văn hóa làm việc của con người (từ lãnh đạo đến nhân viên).",
      "Việc nâng cấp đường truyền Internet cáp quang.",
      "Mua sắm máy tính, laptop đời mới nhất cho nhân viên.",
      "Vị trí địa lý của trụ sở công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 122,
    q: 'Khái niệm "Omnichannel" (Bán lẻ đa kênh) trong thương mại điện tử hướng tới mục tiêu gì?',
    options: [
      "Chỉ bán hàng qua duy nhất một kênh trên tivi.",
      "Buộc khách hàng phải đến cửa hàng vật lý mới được mua hàng.",
      "Mang lại trải nghiệm mua sắm liền mạch, đồng nhất cho khách hàng trên tất cả các kênh (cửa hàng vật lý, website, mạng xã hội, ứng dụng di động).",
      "Xóa bỏ hoàn toàn hệ thống cửa hàng vật lý để bán 100% online.",
      "Yêu cầu khách hàng dùng nhiều ứng dụng khác nhau để thanh toán một món hàng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 123,
    q: "Điện toán biên (Edge Computing) giải quyết nhược điểm nào của Điện toán đám mây (Cloud Computing)?",
    options: [
      "Lưu trữ dữ liệu an toàn hơn đám mây.",
      "Xử lý và phân tích dữ liệu ngay tại hoặc gần nguồn sinh ra dữ liệu (ví dụ: ngay tại camera, cảm biến) để xử lý tức thời, giảm độ trễ thay vì phải gửi tất cả lên đám mây xa xôi.",
      "Có thể hoạt động không cần bất kỳ thiết bị điện tử nào.",
      "Thay thế hoàn toàn phần cứng của máy tính cá nhân.",
      "In tài liệu ra giấy nhanh hơn.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 124,
    q: '"Hợp đồng thông minh" (Smart Contract) chạy trên nền tảng công nghệ Blockchain có đặc tính nổi bật nào?',
    options: [
      "Tự động dịch các điều khoản hợp đồng sang mọi ngôn ngữ.",
      "Các điều khoản được mã hóa và hệ thống tự động thực thi khi các điều kiện được thỏa mãn, không cần sự can thiệp hay chứng thực của bên thứ 3 (như luật sư, công chứng).",
      "Hợp đồng chỉ có thể được ký kết bằng vân tay của con người.",
      "Nó là một chiếc máy in chuyên dùng để in các bản hợp đồng quan trọng.",
      "Nó có khả năng phát ra âm thanh nhắc nhở các bên thực hiện hợp đồng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 125,
    q: 'Khi nhận được tin nhắn SMS lạ có nội dung: "Gói hàng của bạn đang bị giữ tại hải quan, vui lòng bấm vào link sau để thanh toán phí giải phóng hàng", bạn nên xử lý thế nào là an toàn nhất?',
    options: [
      "Bấm ngay vào link và nhập số thẻ ngân hàng để nhận bưu kiện kẻo bị hoàn trả.",
      "Gọi lại số điện thoại vừa gửi tin nhắn để mắng mỏ họ.",
      "Bỏ qua, xóa tin nhắn và tuyệt đối không bấm vào link vì đây là hình thức lừa đảo phổ biến (Smishing) qua tin nhắn.",
      "Chia sẻ link đó cho bạn bè xem họ có biết là bưu kiện gì không.",
      "Đi đến trụ sở hải quan gần nhất để lấy bưu kiện.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 126,
    q: 'Phương thức "Xác thực sinh trắc học" (Biometric Authentication) trên các thiết bị di động, ngân hàng số KHÔNG bao gồm hình thức nào sau đây?',
    options: [
      "Quét khuôn mặt (FaceID).",
      "Quét vân tay (Fingerprint).",
      "Nhận diện mống mắt (Iris scanner).",
      "Nhập mã PIN gồm 6 chữ số từ bàn phím.",
      "Nhận diện giọng nói (Voice recognition).",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 127,
    q: "Trong sử dụng thư điện tử (Email), khi bạn nhận được một thư có nhiều người trong mục 'To' (Tới) và 'Cc' (Đồng gửi), nút \"Reply All\" (Trả lời tất cả) sẽ hoạt động thế nào?",
    options: [
      "Chỉ gửi thư phản hồi cho duy nhất người đã gửi email gốc (người gửi).",
      "Gửi thư phản hồi cho người đã gửi email gốc và toàn bộ những người có tên trong mục 'To' và 'Cc' của email đó.",
      "Tự động chuyển tiếp (Forward) email đó cho người không có trong danh sách.",
      "Gửi thư cho tất cả mọi người có trong danh bạ điện thoại của bạn.",
      "Đăng nội dung email đó công khai lên mạng xã hội.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 128,
    q: 'Mã độc "Ransomware" (Mã độc tống tiền) thường có hành vi phá hoại như thế nào khi lây nhiễm thành công vào máy tính của bạn?',
    options: [
      "Tự động tắt máy tính của bạn sau mỗi 5 phút.",
      "Bật nhạc to liên tục không thể tắt được.",
      'Mã hóa toàn bộ các tệp tin quan trọng (Word, Excel, Hình ảnh) trên máy tính khiến bạn không mở được, sau đó yêu cầu bạn chuyển tiền (thường là tiền ảo) để mua "chìa khóa" giải mã.',
      "Xóa định dạng ổ cứng C: khiến bạn phải cài lại Windows.",
      "Tự động kết bạn với người lạ trên Facebook.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 129,
    q: '"Digital Detox" (Giải độc số / Cai nghiện kỹ thuật số) là một phương pháp khuyên người dùng nên làm gì để bảo vệ sức khỏe tâm thần trong kỷ nguyên số?',
    options: [
      "Cài đặt các phần mềm diệt virus mạnh nhất cho điện thoại.",
      "Xóa vĩnh viễn mọi tài khoản mạng xã hội và không bao giờ dùng lại.",
      "Chủ động dành ra những khoảng thời gian nhất định (ví dụ: ngày nghỉ, trước khi ngủ) rời xa hoàn toàn các thiết bị màn hình số (điện thoại, máy tính) để thư giãn và kết nối với thế giới thực.",
      "Đeo kính chống ánh sáng xanh 24/24 giờ mỗi ngày.",
      "Mua các loại nước ép trái cây được bán qua mạng để thanh lọc cơ thể.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 130,
    q: 'Trước khi chia sẻ (Share) một bài viết kêu gọi quyên góp từ thiện cho một hoàn cảnh thương tâm trên mạng xã hội, hành động "Kiểm chứng thông tin" đúng đắn nhất là gì?',
    options: [
      "Nhìn thấy ảnh người bệnh đáng thương là bấm chia sẻ ngay lập tức để giúp đỡ.",
      "Xem bài viết đó có nhiều lượt Thích (Like) không, nếu nhiều Like thì cứ chia sẻ.",
      "Kiểm tra xem nguồn gốc bài viết từ đâu, số tài khoản nhận tiền có thuộc tổ chức chính thống / cá nhân uy tín hay không, hoặc đối chiếu với báo chí chính thống trước khi chia sẻ.",
      "Chỉnh sửa số tài khoản trong bài viết thành số tài khoản của mình rồi mới chia sẻ.",
      "Chỉ chia sẻ nếu người đăng bài là một người nổi tiếng (KOL) mà không cần kiểm tra lại.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 131,
    q: "Trong Microsoft Excel, để gộp nhiều ô đang chọn thành một ô duy nhất và căn giữa nội dung bên trong, bạn sử dụng nút lệnh nào trên thẻ Home?",
    options: [
      "Wrap Text",
      "Merge & Center",
      "AutoSum",
      "Orientation",
      "Conditional Formatting",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 132,
    q: "Để tạo mục lục tự động trong Microsoft Word, bạn cần sử dụng tính năng nào kết hợp với việc thiết lập các thẻ Heading (Tiêu đề)?",
    options: [
      "Table of Figures",
      "Insert Table",
      "Mail Merge",
      "Page Setup",
      "Table of Contents (trong thẻ References)",
    ],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 133,
    q: 'Khi thiết kế bài thuyết trình trong Microsoft PowerPoint, tính năng "SmartArt" giúp người dùng thực hiện công việc nào sau đây?',
    options: [
      "Tự động chèn các file nhạc nền vào slide.",
      "Chuyển đổi các danh sách dạng văn bản thành các sơ đồ, đồ thị trực quan chuyên nghiệp.",
      "Quét và diệt vi-rút trong file presentation.",
      "Tự động dịch văn bản slide sang các ngôn ngữ khác.",
      "Tạo mật khẩu bảo vệ file slide không cho người khác mở.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 134,
    q: "Phím tắt chung trong các phần mềm Microsoft Office (Word, Excel, PowerPoint) để ra lệnh In tài liệu là gì?",
    options: ["Ctrl + P", "Ctrl + I", "Ctrl + O", "Ctrl + S", "Ctrl + N"],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 135,
    q: 'Trong Microsoft Excel, công cụ "Remove Duplicates" (nằm trong thẻ Data) có chức năng chính là gì?',
    options: [
      "Sắp xếp dữ liệu theo thứ tự từ A đến Z.",
      "Xóa bỏ các hàng chứa dữ liệu bị trùng lặp trong bảng được chọn.",
      "Đổi màu toàn bộ dòng bị trùng lặp.",
      "Khóa không cho phép nhập dữ liệu trùng lặp.",
      "Tạo bản sao lưu dự phòng cho bảng tính.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 136,
    q: "Trong Microsoft Word, để tạo đường kẻ ngang phân cách hoặc chia văn bản thành nhiều cột dạng như trang báo chí, bạn sử dụng tính năng nào trong thẻ Layout?",
    options: ["Margins", "Orientation", "Columns", "Size", "Hyphenation"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 137,
    q: "Trong Excel, hàm nào sau đây được sử dụng để ĐẾM số lượng các ô CÓ CHỨA DỮ LIỆU LÀ SỐ trong một vùng?",
    options: ["COUNT", "COUNTA", "COUNTBLANK", "SUM", "MAX"],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 138,
    q: "Khi đang thiết kế PowerPoint, muốn trình chiếu ngay từ slide mà bạn ĐANG CHỌN (không phải từ slide đầu tiên), bạn ấn phím tắt nào?",
    options: [
      "F5",
      "Ctrl + F5",
      "Shift + F5",
      "Alt + F5",
      "Phím Space (Dấu cách)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 139,
    q: 'Tổ hợp phím tắt nào trong Word được dùng để mở nhanh hộp thoại "Find and Replace" (Tìm kiếm và Thay thế)?',
    options: ["Ctrl + F", "Ctrl + R", "Ctrl + T", "Ctrl + H", "Ctrl + G"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 140,
    q: "Để bảo vệ một bảng tính (Sheet) trong Excel không cho người khác vô tình chỉnh sửa, xóa dữ liệu, bạn vào thẻ Review và chọn tính năng nào?",
    options: [
      "Share Workbook",
      "Track Changes",
      "Freeze Panes",
      "Data Validation",
      "Protect Sheet",
    ],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 141,
    q: 'Phím tắt nào giúp bạn mở nhanh hộp thoại "Save As" (Lưu thành file mới) trong các ứng dụng Office?',
    options: ["F1", "F12", "F10", "F5", "Ctrl + S"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 142,
    q: "Hàm nào trong Excel dùng để tính TRUNG BÌNH CỘNG của một dãy số?",
    options: ["SUM", "MIN", "AVERAGE", "MEDIAN", "MOD"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 143,
    q: "Trong Word, để điều chỉnh khoảng cách giữa các dòng văn bản (Line Spacing), bạn tìm cài đặt này ở nhóm lệnh nào trên thẻ Home?",
    options: ["Paragraph", "Font", "Styles", "Clipboard", "Editing"],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 144,
    q: "Chế độ xem nào trong PowerPoint giúp bạn nhìn được tổng quan tất cả các slide dưới dạng hình thu nhỏ để dễ dàng kéo thả, sắp xếp lại thứ tự?",
    options: [
      "Normal",
      "Reading View",
      "Notes Page",
      "Slide Sorter",
      "Outline View",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 145,
    q: 'Tính năng "Text to Columns" trong Excel có chức năng chính là gì?',
    options: [
      "Gộp nhiều cột thành một cột duy nhất.",
      "Tách dữ liệu từ một cột thành nhiều cột khác nhau dựa trên các ký tự phân cách (như dấu phẩy, khoảng trắng).",
      "Chuyển đổi văn bản thành hình ảnh.",
      "Đổi hướng chữ từ ngang thành dọc.",
      "Tự động viết hoa chữ cái đầu tiên của cột.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 146,
    q: "Làm thế nào để xuất một file Word sang định dạng PDF mà không cần cài thêm phần mềm bên thứ 3 (trên các bản Office mới)?",
    options: [
      "Nhấn Ctrl + P và chọn máy in màu.",
      "Bấm nút Insert -> PDF.",
      "Vào File -> Save As (hoặc Export) -> Chọn định dạng PDF.",
      "Đổi tên phần mở rộng của file từ .docx thành .pdf.",
      "Không thể làm được, bắt buộc phải dùng phần mềm trực tuyến.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 147,
    q: "Phím tắt nào trên Windows dùng để ĐÓNG (thoát hoàn toàn) cửa sổ ứng dụng đang mở (ví dụ đang mở Word/Excel)?",
    options: [
      "Ctrl + C",
      "Ctrl + Alt + Delete",
      "Shift + Delete",
      "Alt + Tab",
      "Alt + F4",
    ],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 148,
    q: '"Trí tuệ nhân tạo" (AI - Artificial Intelligence) được hiểu một cách đơn giản nhất là gì?',
    options: [
      "Khả năng của máy tính mô phỏng các năng lực trí tuệ của con người như học tập, suy luận và tự sửa lỗi.",
      "Máy móc có khả năng sinh sản như con người.",
      "Một bộ phận linh kiện phần cứng gắn trong máy tính.",
      "Phần mềm diệt virus thế hệ mới.",
      "Mạng xã hội ảo dành cho robot.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 149,
    q: 'Dữ liệu lớn (Big Data) thường được đặc trưng bởi mô hình "3V". 3 chữ V đó là viết tắt của những từ nào trong tiếng Anh?',
    options: [
      "Vision, Value, Victory",
      "Volume (Dung lượng lớn), Velocity (Tốc độ nhanh), Variety (Đa dạng loại hình)",
      "Virus, Virtual, Visual",
      "Voice, Video, Vlog",
      "Variable, Valid, View",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 150,
    q: "IoT (Internet of Things - Internet vạn vật) là khái niệm chỉ mạng lưới của những đối tượng nào?",
    options: [
      "Mạng lưới những người dùng Facebook trên toàn cầu.",
      "Mạng lưới các hệ thống cáp quang dưới đáy biển.",
      "Mạng lưới các thiết bị, đồ vật vật lý (tivi, tủ lạnh, cảm biến...) được nhúng công nghệ để kết nối và trao đổi dữ liệu qua Internet.",
      "Mạng lưới các vệ tinh nhân tạo ngoài không gian.",
      "Tập hợp các trang web thương mại điện tử.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 151,
    q: 'Trong Điện toán đám mây, mô hình "SaaS" (Software as a Service - Phần mềm như một dịch vụ) có nghĩa là gì?',
    options: [
      "Người dùng phải mua đĩa CD để cài đặt phần mềm.",
      "Phần mềm được cài chết vào ổ cứng máy tính từ khi mới mua.",
      "Nhà cung cấp phân phối phần mềm qua Internet, người dùng chỉ cần đăng nhập qua trình duyệt để sử dụng (như Gmail, Google Docs) mà không cần cài đặt phức tạp.",
      "Dịch vụ sửa chữa phần mềm tại nhà.",
      "Phần mềm độc hại chuyên đánh cắp dữ liệu.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 152,
    q: "Công nghệ Blockchain (Chuỗi khối) KHÔNG có đặc điểm nào sau đây?",
    options: [
      "Tính phi tập trung (Decentralization).",
      "Dữ liệu một khi đã ghi vào khối thì rất khó bị thay đổi hay xóa bỏ (Tính bất biến).",
      "Tính minh bạch, các giao dịch có thể được truy xuất.",
      "Dữ liệu được lưu trữ tập trung tại một máy chủ duy nhất của chính phủ.",
      "Là nền tảng nền móng để phát triển tiền mã hóa (Cryptocurrency) và Hợp đồng thông minh (Smart Contract).",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 153,
    q: "Thuật ngữ E-Learning trong chuyển đổi số lĩnh vực giáo dục là gì?",
    options: [
      "Hình thức học bơi điện tử.",
      "Mô hình đào tạo/học tập trực tuyến dựa trên các thiết bị kết nối mạng Internet.",
      "Hệ thống đèn điện chiếu sáng trong lớp học.",
      "Học sinh phải dùng sách giấy điện tử.",
      "Việc quản lý điểm thi bằng sổ giấy.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 154,
    q: '"Fintech" là từ ghép mô tả sự kết hợp giữa hai lĩnh vực nào?',
    options: [
      "Fine Art (Mỹ thuật) và Technology (Công nghệ)",
      "Finance (Tài chính) và Technology (Công nghệ)",
      "Fishing (Ngư nghiệp) và Technology (Công nghệ)",
      "Fitness (Thể hình) và Technology (Công nghệ)",
      "Finish (Kết thúc) và Technology (Công nghệ)",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 155,
    q: "API (Application Programming Interface) có vai trò gì trong thế giới công nghệ số?",
    options: [
      "Là cổng sạc pin đa năng cho điện thoại.",
      "Là một loại thẻ nhớ dung lượng cao.",
      'Là "cây cầu" giao tiếp, cho phép hai phần mềm/ứng dụng khác nhau có thể nói chuyện và trao đổi dữ liệu với nhau một cách an toàn.',
      "Là phần mềm chuyên chỉnh sửa ảnh.",
      "Là hệ điều hành của máy chủ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 156,
    q: "Trong doanh nghiệp, hệ thống phần mềm CRM (Customer Relationship Management) được dùng vào mục đích chính yếu nào?",
    options: [
      "Quản lý hệ thống máy móc sản xuất trong nhà máy.",
      "Quản lý việc tuyển dụng và tính lương nhân viên.",
      "Quản lý, lưu trữ thông tin, tương tác và chăm sóc quan hệ khách hàng.",
      "Kế toán thuế và báo cáo tài chính.",
      "Thiết kế bao bì sản phẩm.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 157,
    q: "Chữ ký số (Digital Signature) mang lại giá trị lớn nhất nào cho các giao dịch điện tử?",
    options: [
      "Làm cho văn bản đẹp hơn vì có thể chèn nhiều màu sắc.",
      "Tương đương với chữ ký tay và con dấu, đảm bảo tính pháp lý, xác thực danh tính người ký và tính toàn vẹn của tài liệu điện tử.",
      "Dịch tự động tài liệu sang ngôn ngữ khác.",
      "Tự động kiểm tra lỗi chính tả của hợp đồng.",
      "Cho phép chỉnh sửa nội dung hợp đồng sau khi đã ký mà không ai biết.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 158,
    q: "Metaverse (Vũ trụ ảo) được mô tả tốt nhất bằng định nghĩa nào?",
    options: [
      "Một vệ tinh mới được phóng lên vũ trụ.",
      "Trò chơi điện tử 2D chơi trên điện thoại nắp gập.",
      "Một mạng lưới không gian ảo 3D được kết nối với nhau, nơi mọi người tương tác thông qua các hiện thân (Avatar) bằng kính thực tế ảo hoặc thực tế tăng cường.",
      "Tên gọi khác của mạng Internet hiện tại.",
      "Ứng dụng xem bản đồ Google Maps.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 159,
    q: 'Khái niệm "Dữ liệu mở" (Open Data) của chính phủ hướng tới điều gì?',
    options: [
      "Bán dữ liệu cá nhân của công dân cho các công ty quảng cáo.",
      "Để mở cửa phòng máy chủ cho mọi người vào xem.",
      "Công bố công khai các dữ liệu phi cá nhân (ví dụ: dữ liệu giao thông, thời tiết, môi trường) để người dân, doanh nghiệp được tự do sử dụng, tái sử dụng nhằm tạo ra giá trị mới.",
      "Không mã hóa bất kỳ dữ liệu bảo mật nào của quốc gia.",
      "Khuyến khích hacker tấn công hệ thống nhà nước.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 160,
    q: 'Đâu là điểm khác biệt cốt lõi giữa "Số hóa tài liệu" (Digitization) và "Chuyển đổi số" (Digital Transformation)?',
    options: [
      "Số hóa là dùng số, Chuyển đổi số là dùng chữ.",
      "Số hóa là quá trình biến thông tin vật lý (giấy tờ) thành định dạng kỹ thuật số. Còn Chuyển đổi số là việc thay đổi toàn diện mô hình, quy trình hoạt động dựa trên ứng dụng công nghệ số.",
      "Chuyển đổi số phải làm trước, số hóa làm sau.",
      "Số hóa chỉ áp dụng cho cá nhân, chuyển đổi số áp dụng cho doanh nghiệp.",
      "Không có gì khác biệt.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 161,
    q: "Trong thiết kế phần mềm, UX (User Experience) là viết tắt của từ gì?",
    options: [
      "Giao diện người dùng (User Interface).",
      "Máy chủ người dùng (User XML).",
      "Trải nghiệm người dùng (Cảm giác, sự tiện lợi, mức độ hài lòng khi người dùng sử dụng sản phẩm).",
      "Đơn vị tiền tệ ảo.",
      "Tốc độ đường truyền Internet.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 162,
    q: "Công nghệ RPA (Robotic Process Automation) giúp ích gì cho nhân viên văn phòng?",
    options: [
      "Cung cấp một con robot bằng sắt quét dọn văn phòng.",
      "Sử dụng robot phần mềm để tự động hóa các tác vụ lặp đi lặp lại trên máy tính (như nhập liệu, xuất báo cáo), giúp nhân viên tiết kiệm thời gian làm việc khác.",
      "Thay thế hoàn toàn 100% nhân sự văn phòng.",
      "Nấu ăn tự động trong nhà ăn công ty.",
      "Tự động chấm công bằng vân tay.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 163,
    q: 'Yếu tố nào là cốt lõi để xây dựng một "Thành phố thông minh" (Smart City)?',
    options: [
      "Chỉ cần xây nhiều tòa nhà chọc trời bằng kính.",
      "Trồng nhiều cây xanh và cấm các loại xe cơ giới.",
      "Ứng dụng công nghệ thông tin, thu thập dữ liệu qua cảm biến IoT để quản lý hiệu quả các nguồn lực (giao thông, năng lượng, y tế, môi trường) và nâng cao chất lượng sống của người dân.",
      "Lắp đặt Wifi miễn phí nhưng không cần thu thập dữ liệu gì.",
      "Dời tất cả các khu công nghiệp ra khỏi thành phố.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 164,
    q: "Trong thương mại điện tử, B2B là viết tắt của mô hình giao dịch nào?",
    options: [
      "Business to Consumer (Doanh nghiệp bán cho Khách hàng cá nhân)",
      "Consumer to Consumer (Cá nhân bán cho Cá nhân)",
      "Business to Business (Giao dịch thương mại giữa các Doanh nghiệp với nhau)",
      "Business to Government (Doanh nghiệp giao dịch với Chính phủ)",
      "Back to Back (Giao dịch hoàn trả)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 165,
    q: 'Một "Mật khẩu mạnh" (Strong Password) chuẩn mực cần đáp ứng tối thiểu các tiêu chí nào?',
    options: [
      'Dễ nhớ, ví dụ như "123456" hoặc tên ngày tháng năm sinh.',
      "Chỉ cần dài hơn 8 ký tự là đủ, toàn số cũng được.",
      "Chiều dài tối thiểu (thường từ 8-12 ký tự), kết hợp chữ hoa, chữ thường, chữ số và các ký tự đặc biệt (@, #, !, *...).",
      "Giống y hệt Tên đăng nhập (Username) để khỏi quên.",
      "Cứ 1 ngày phải thay đổi 1 lần.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 166,
    q: 'Hành vi "Phishing" (Tấn công giả mạo) trên không gian mạng thường được thực hiện như thế nào?',
    options: [
      "Kẻ gian dùng búa đập hỏng máy tính của bạn.",
      "Kẻ gian cắt cáp mạng Internet nhà bạn.",
      "Kẻ gian gửi email, tin nhắn chứa đường link dẫn đến một trang web ĐƯỢC THIẾT KẾ GIẢ MẠO y hệt ngân hàng/mạng xã hội thật để lừa bạn nhập tài khoản, mật khẩu.",
      "Kẻ gian tạo ra nhiều tài khoản ảo để tăng lượt Like.",
      "Kẻ gian gửi thư từ bằng giấy qua đường bưu điện.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 167,
    q: 'Tính năng "Xác thực 2 yếu tố" (2FA / Two-Factor Authentication) bảo vệ tài khoản của bạn bằng cách nào?',
    options: [
      "Bắt bạn phải nhập mật khẩu 2 lần liên tiếp giống nhau mới được đăng nhập.",
      "Yêu cầu hai người dùng khác nhau cùng nhập mật khẩu.",
      "Sau khi nhập đúng mật khẩu, hệ thống yêu cầu cung cấp thêm một mã xác nhận (OTP) gửi qua SMS hoặc ứng dụng Authenticator để chứng minh chính bạn đang đăng nhập.",
      "Khóa tài khoản vĩnh viễn nếu bạn gõ sai mật khẩu 2 lần.",
      "Cho phép bạn dùng 2 mật khẩu khác nhau để vào 1 tài khoản.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 168,
    q: "VPN (Virtual Private Network - Mạng riêng ảo) có tác dụng bảo mật gì nổi bật khi bạn sử dụng wifi ở quán cafe?",
    options: [
      "Tăng tốc độ wifi lên gấp 10 lần.",
      "Cho phép bạn dùng wifi không cần mật khẩu.",
      'Tạo ra một "đường hầm" mã hóa dữ liệu truyền đi và ẩn địa chỉ IP của bạn, giúp chống lại việc bị kẻ xấu nghe lén thông tin cá nhân.',
      "Tự động tải phim HD miễn phí.",
      "Ngăn chặn người khác kết nối vào cùng mạng wifi.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 169,
    q: "Vì sao các chuyên gia an ninh mạng luôn khuyên bạn phải thường xuyên CẬP NHẬT (Update) hệ điều hành và phần mềm?",
    options: [
      "Để làm cho máy tính chạy chậm đi, ép bạn mua máy mới.",
      "Để các bản cập nhật cung cấp thêm virus.",
      "Để nhà sản xuất thu thêm tiền phí hàng tháng.",
      "Để vá các lỗ hổng bảo mật mới được phát hiện, ngăn chặn tin tặc lợi dụng các kẽ hở đó để tấn công, đồng thời tối ưu hiệu suất thiết bị.",
      "Để thay đổi màu nền của màn hình desktop.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 170,
    q: "Khi truy cập một trang web để thanh toán trực tuyến, dấu hiệu nào trên thanh địa chỉ trình duyệt cho thấy trang web đó có mã hóa dữ liệu bảo mật?",
    options: [
      'Tên trang web có chữ "VIP".',
      "Giao diện trang web có nhiều màu đỏ.",
      "Địa chỉ bắt đầu bằng https:// và có biểu tượng ổ khóa an toàn (Padlock).",
      "Trang web nhấp nháy liên tục yêu cầu nạp tiền.",
      "Thanh địa chỉ có màu đen.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 171,
    q: 'Việc sử dụng các phần mềm "Crack" (phần mềm lậu, bẻ khóa) mang lại nguy cơ bảo mật lớn nhất là gì?',
    options: [
      "Máy tính sẽ bị thu tiền điện cao hơn.",
      'Các công cụ "Crack" thường bị gắn kèm mã độc (Trojan, Ransomware), giúp hacker dễ dàng kiểm soát máy tính, đánh cắp dữ liệu và tài khoản của người dùng.',
      "Không gõ được tiếng Việt.",
      "Màn hình máy tính tự động bị thu nhỏ lại.",
      "Bàn phím bị liệt.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 172,
    q: "Khi bắt buộc phải kết nối vào các mạng Wi-Fi công cộng miễn phí không có mật khẩu (tại bến xe, sân bay), bạn TUYỆT ĐỐI KHÔNG NÊN làm gì?",
    options: [
      "Đọc báo mạng.",
      "Xem thời tiết.",
      "Nghe nhạc trên Youtube.",
      "Đăng nhập vào ứng dụng Ngân hàng (Internet Banking) để chuyển số tiền lớn hoặc mua sắm trực tuyến.",
      "Đọc tin tức thể thao.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 173,
    q: 'Khái niệm "Dấu chân kỹ thuật số" (Digital Footprint) ám chỉ điều gì?',
    options: [
      "Vết chân bạn dẫm lên màn hình điện thoại.",
      "Tổng hợp tất cả những dấu vết thông tin, dữ liệu mà bạn để lại trên Internet thông qua các hoạt động trực tuyến (bài đăng, bình luận, lịch sử duyệt web...).",
      "Một phần mềm đếm số bước chân chạy bộ.",
      "Công nghệ in 3D hình bàn chân.",
      "Việc đo kích cỡ giày qua mạng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 174,
    q: 'Mã "OTP" (One Time Password) được ngân hàng gửi về điện thoại của bạn có đặc điểm gì?',
    options: [
      "Là mật khẩu dùng chung cho mọi tài khoản mạng xã hội.",
      "Là mật khẩu chỉ có giá trị sử dụng DUY NHẤT MỘT LẦN và trong một khoảng thời gian cực ngắn (thường 1-3 phút).",
      "Có thể chia sẻ cho người tự xưng là nhân viên ngân hàng để họ giúp đỡ.",
      "Không bao giờ hết hạn.",
      "Lưu lại để dùng cho tháng sau.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 175,
    q: '"Deepfake" là một công nghệ tinh vi sử dụng Trí tuệ nhân tạo (AI) để lừa đảo theo hình thức nào?',
    options: [
      "Gửi hàng vạn email rác.",
      "Chặn không cho người dùng vào Facebook.",
      "Giả mạo khuôn mặt và giọng nói của người quen một cách chân thực trong các video hoặc cuộc gọi hình ảnh (Video call) để vay tiền, lừa đảo.",
      "Làm cho hình ảnh trên tivi trở nên mờ đi.",
      "Tự động đọc trộm tin nhắn SMS.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 176,
    q: "Spam (Thư rác) là thuật ngữ dùng để chỉ:",
    options: [
      "Các email báo cáo công việc từ sếp.",
      "Các email cảnh báo bảo mật chính thống từ Google.",
      "Những thư điện tử vô bổ, chứa nội dung quảng cáo hoặc lừa đảo được gửi hàng loạt đến rất nhiều người mà không có sự đồng ý của họ.",
      "Thư mục chứa các tài liệu quan trọng nhất trong máy tính.",
      "Mạng xã hội chuyên đăng ảnh đồ ăn.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 177,
    q: 'Tại sao "Backup" (Sao lưu dữ liệu định kỳ) lại là nguyên tắc sống còn trong an toàn thông tin?',
    options: [
      "Để máy tính chạy tốn ít điện hơn.",
      "Giúp bạn nhanh chóng khôi phục lại tài liệu quan trọng nếu máy tính chẳng may bị hỏng ổ cứng, mất cắp hoặc bị tấn công bởi mã độc tống tiền (Ransomware).",
      "Để chia sẻ dữ liệu cho hacker dễ hơn.",
      "Để nâng cấp phần cứng máy tính.",
      "Để xóa dữ liệu cũ đi mãi mãi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 178,
    q: 'Chế độ "Duyệt web ẩn danh" (Incognito / InPrivate) trên trình duyệt mạng có tác dụng chính là gì?',
    options: [
      "Chống lại mọi loại virus trên đời.",
      "Không cho nhà mạng biết bạn đang truy cập web gì.",
      "Ẩn hoàn toàn địa chỉ IP của bạn.",
      "Trình duyệt không lưu lại Lịch sử duyệt web, cookie và dữ liệu biểu mẫu trên máy tính SAU KHI bạn đóng cửa sổ ẩn danh đó.",
      "Giúp mạng internet chạy nhanh gấp đôi.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 179,
    q: "Chức năng của mã CAPTCHA (yêu cầu gõ lại các chữ cái loằng ngoằng hoặc chọn hình ảnh có chứa đèn giao thông) trên các trang web là gì?",
    options: [
      "Để kiểm tra thị lực của người dùng.",
      "Phân biệt người thật (human) với các chương trình phần mềm tự động (bot), nhằm chống lại việc spam bình luận hoặc tấn công hệ thống.",
      "Làm chậm quá trình duyệt web cho vui.",
      "Để thu phí truy cập.",
      "Là một hình thức quảng cáo hình ảnh.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 180,
    q: 'Hành vi "Bắt nạt trên mạng" (Cyberbullying) biểu hiện qua các hành động nào dưới đây?',
    options: [
      "Cùng bạn bè chơi game online vui vẻ.",
      "Thả tim vào ảnh của bạn thân.",
      "Liên tục gửi tin nhắn đe dọa, bình luận lăng mạ, bôi nhọ, hoặc phát tán hình ảnh nhạy cảm nhằm hạ nhục người khác trên không gian mạng.",
      "Chia sẻ kiến thức học tập lên diễn đàn.",
      "Nhắn tin hỏi thăm sức khỏe đồng nghiệp.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 181,
    q: "Trong Excel, để cố định một địa chỉ ô (tạo địa chỉ tuyệt đối) để khi sao chép công thức, địa chỉ ô đó không bị thay đổi, bạn sử dụng ký hiệu nào trước tên cột và số hàng?",
    options: [
      "Dấu & (Ví dụ: &A&1)",
      "Dấu # (Ví dụ: #A#1)",
      "Dấu $ (Ví dụ: 1)",
      "Dấu @ (Ví dụ: @A@1)",
      "Dấu * (Ví dụ: A1)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 182,
    q: "Trong Microsoft Word, để tạo các dòng biểu mẫu có dấu chấm nối tiếp nhau (ví dụ: Họ và tên: .............................) một cách thẳng hàng và chuyên nghiệp nhất mà không phải gõ dấu chấm thủ công nhiều lần, bạn dùng tính năng nào?",
    options: [
      "Gõ dấu chấm (.) liên tục trên bàn phím.",
      "Thiết lập điểm dừng Tab (Tab Stops) kết hợp với đường dẫn (Leader).",
      "Chèn một bảng (Table) ẩn viền.",
      "Dùng công cụ vẽ đường thẳng (Shapes) và chọn kiểu nét đứt.",
      "Dùng tính năng Drop Cap.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 183,
    q: "Trong Microsoft PowerPoint, khi bạn muốn thiết lập hiệu ứng xuất hiện cho từng dòng chữ hoặc từng hình ảnh trong slide khi click chuột, bạn chọn mục nào trên thanh công cụ?",
    options: [
      "Transitions",
      "Animations",
      "Slide Master",
      "Design Ideas",
      "Page Setup",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 184,
    q: "Trong Excel, hàm điều kiện IF có cú pháp chuẩn nào sau đây?",
    options: [
      "=IF(Giá_trị_đúng, Giá_trị_sai, Điều_kiện)",
      "=IF(Giá_trị_sai, Điều_kiện, Giá_trị_đúng)",
      "=IF(Điều_kiện, Giá_trị_đúng, Giá_trị_sai)",
      "=IF(Điều_kiện, Giá_trị_sai, Giá_trị_đúng)",
      "=IF(Điều_kiện1, Điều_kiện2, Điều_kiện3)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 185,
    q: "Tính năng Format Painter (Biểu tượng cái chổi sơn) trong Word, Excel có chức năng gì?",
    options: [
      "Xóa màu nền của văn bản.",
      "Quét virus cho tài liệu.",
      "Sao chép NHỮNG ĐỊNH DẠNG (font chữ, màu sắc, kích thước...) từ một đoạn văn bản/ô này và áp dụng nhanh cho đoạn văn bản/ô khác.",
      "Vẽ các hình khối tự do vào bảng tính.",
      "Đổi màu toàn bộ tài liệu thành đen trắng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 186,
    q: "Công cụ PivotTable trong Excel được mệnh danh là công cụ cực kỳ mạnh mẽ, chức năng chính của nó là gì?",
    options: [
      "Tạo ra các hiệu ứng chuyển động giống PowerPoint.",
      "Tự động tìm lỗi chính tả trong bảng dữ liệu lớn.",
      "Mã hóa dữ liệu để bảo mật.",
      "Tổng hợp, tóm tắt, phân tích và trích xuất thông tin đa chiều từ một bảng dữ liệu khổng lồ chỉ bằng các thao tác kéo thả.",
      "Chuyển đổi dữ liệu từ Excel sang Word tự động.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 187,
    q: "Trong Word, để ngắt trang văn bản ngay lập tức (chuyển con trỏ soạn thảo sang đầu trang tiếp theo) mà không cần nhấn phím Enter nhiều lần, bạn dùng tổ hợp phím nào?",
    options: [
      "Shift + Enter",
      "Alt + Enter",
      "Ctrl + Enter",
      "Ctrl + Shift + Enter",
      "Tab + Enter",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 188,
    q: "Để thiết kế một logo, định dạng tiêu đề hoặc phông nền chung xuất hiện đồng loạt trên TẤT CẢ các slide trong PowerPoint, bạn chỉnh sửa ở đâu là nhanh nhất?",
    options: [
      "Tự copy logo và dán thủ công vào từng slide.",
      "Slide Master (View -> Slide Master)",
      "Transitions",
      "Animations",
      "Design Ideas",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 189,
    q: "Trong Excel, toán tử nào được sử dụng để NỐI chuỗi văn bản giữa các ô lại với nhau (tương đương hàm CONCATENATE)?",
    options: ["Toán tử +", "Toán tử -", "Toán tử", "Toán tử &", "Toán tử %"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 190,
    q: "Phím tắt Ctrl + J trong Microsoft Word có tác dụng định dạng đoạn văn bản như thế nào?",
    options: [
      "Căn trái",
      "Căn giữa",
      "Căn phải",
      "Căn đều hai bên lề (Justify)",
      "In đậm toàn bộ đoạn văn",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 191,
    q: "Khi nhập một số liệu hoặc ngày tháng vào Excel, nếu ô hiển thị toàn dấu #######, điều đó có nghĩa là gì?",
    options: [
      "Bạn nhập sai công thức.",
      "Bảng tính đã bị nhiễm virus.",
      "Độ rộng của cột không đủ lớn để hiển thị toàn bộ nội dung, bạn chỉ cần kéo rộng cột ra.",
      "Hàm tính toán không có sẵn trong hệ thống.",
      "Phần mềm đang bị đơ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 192,
    q: "Trong PowerPoint, để chèn một đoạn nhạc nền chạy xuyên suốt tất cả các slide từ đầu đến cuối bài thuyết trình, bạn chọn Audio và đánh dấu vào tùy chọn nào?",
    options: [
      "Play in Background (hoặc Play across slides)",
      "Loop until Stopped",
      "Rewind after playing",
      "Hide During Show",
      "Mute Audio",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 193,
    q: "Khi sử dụng hàm VLOOKUP trong Excel, tham số thứ 4 (Range_lookup) nên đặt là gì để tìm kiếm CHÍNH XÁC TUYỆT ĐỐI một giá trị?",
    options: [
      "Số 1 (True)",
      "Số 2",
      "Số 0 (False)",
      "Không cần điền",
      'Chữ "Exact"',
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 194,
    q: 'Trong Microsoft Word, tính năng "Track Changes" (nằm trong thẻ Review) thường được sử dụng nhằm mục đích gì khi làm việc nhóm?',
    options: [
      "Tự động đánh số trang cho văn bản.",
      "Theo dõi, ghi lại và hiển thị toàn bộ các thao tác chỉnh sửa, thêm, xóa nội dung do các thành viên thực hiện trên tài liệu.",
      "Chuyển đổi file Word sang dạng ảnh.",
      "Đếm tổng số từ và ký tự trong tài liệu.",
      "Khóa tài liệu không cho phép ai xem.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 195,
    q: "Trong Excel, khi một đoạn chữ quá dài tràn sang ô bên cạnh, bạn muốn chữ tự động ngắt dòng và gói gọn hiển thị trong phạm vi một ô đó, bạn bấm nút nào trên thẻ Home?",
    options: [
      "Merge & Center",
      "Orientation",
      "Wrap Text",
      "Format Cells",
      "Shrink to fit",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 196,
    q: "Trong mô hình Điện toán đám mây, IaaS (Infrastructure as a Service) cung cấp cho khách hàng loại hình dịch vụ nào?",
    options: [
      "Cung cấp phần mềm hoàn thiện như Gmail, Office 365.",
      "Cung cấp nền tảng lập trình cho lập trình viên.",
      "Cung cấp hạ tầng phần cứng ảo hóa (máy chủ, ổ cứng lưu trữ, mạng) qua Internet để khách hàng tự cài hệ điều hành và phần mềm.",
      "Cung cấp dịch vụ sửa chữa máy tính tận nơi.",
      "Cung cấp thiết bị di động.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 197,
    q: "Nền kinh tế số (Digital Economy) khác biệt với kinh tế truyền thống ở điểm căn bản nào?",
    options: [
      "Chỉ sử dụng tiền giấy để giao dịch.",
      "Hoạt động kinh tế dựa trên nền tảng công nghệ số, dữ liệu số làm yếu tố đầu vào chính, nâng cao hiệu quả và tạo ra các mô hình kinh doanh mới.",
      "Chỉ tồn tại ở các nước phát triển phương Tây.",
      "Không sản xuất ra bất kỳ hàng hóa vật lý nào.",
      "Các doanh nghiệp không cần đóng thuế.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 198,
    q: "Các nền tảng như Shopee, Lazada kết nối những người dùng cá nhân có nhu cầu bán đồ cũ/mới với những người tiêu dùng cá nhân khác. Đây là đặc trưng tiêu biểu của mô hình thương mại điện tử nào?",
    options: [
      "B2B (Business to Business)",
      "B2G (Business to Government)",
      "C2C (Consumer to Consumer)",
      "G2C (Government to Citizen)",
      "C2B (Consumer to Business)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 199,
    q: "Việc ứng dụng một hệ thống ERP (Enterprise Resource Planning) mang lại hiệu quả cốt lõi nào cho công tác vận hành nội bộ của doanh nghiệp/nhà máy?",
    options: [
      "Tự động hóa việc đăng bài quảng cáo trên Facebook.",
      "Thay thế hoàn toàn ban giám đốc bằng Trí tuệ nhân tạo.",
      "Tích hợp và đồng bộ hóa các quy trình từ nhân sự, kế toán đến tạo phiếu yêu cầu vật tư, phê duyệt nhiều cấp trên cùng một cơ sở dữ liệu duy nhất, tránh tình trạng dữ liệu rời rạc.",
      "Quét virus cho tất cả máy tính trong công ty.",
      "Phân tích đối thủ cạnh tranh trên thị trường.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 200,
    q: '"Học máy" (Machine Learning) là một nhánh của Trí tuệ nhân tạo (AI), phương pháp hoạt động của nó dựa trên nguyên lý nào?',
    options: [
      "Con người viết sẵn từng câu lệnh If-Else cho máy tính.",
      "Máy tính tự động đọc sách giáo khoa của con người.",
      'Cung cấp cho máy tính một lượng dữ liệu lớn (Data) để tự nó phân tích, "học" các quy luật và đưa ra dự đoán/quyết định mà không cần lập trình rõ ràng cho mọi tình huống.',
      "Lắp thêm nhiều bộ nhớ RAM cho máy tính.",
      "Cho hai máy tính nói chuyện với nhau bằng loa ngoài.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 201,
    q: "Công nghệ cho phép phủ (đè) các thông tin, hình ảnh kỹ thuật số ảo lên môi trường thế giới thực khi nhìn qua camera điện thoại (ví dụ: trò chơi Pokemon Go, hoặc xem trước nội thất trong nhà) được gọi là gì?",
    options: [
      "Virtual Reality - VR (Thực tế ảo).",
      "Augmented Reality - AR (Thực tế tăng cường).",
      "Artificial Intelligence - AI (Trí tuệ nhân tạo).",
      "Cloud Computing (Điện toán đám mây).",
      "Blockchain (Chuỗi khối).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 202,
    q: "Ứng dụng VNeID của Bộ Công an có chức năng chính yếu gì trong tiến trình Chuyển đổi số quốc gia?",
    options: [
      "Là ứng dụng mạng xã hội của Việt Nam.",
      "Là ứng dụng chơi game kiếm tiền trực tuyến.",
      "Cung cấp định danh điện tử, tích hợp các loại giấy tờ tùy thân (CCCD, BHYT, GPLX...) để thay thế giấy tờ vật lý trong các giao dịch hành chính.",
      "Là ứng dụng chỉ để khai báo y tế.",
      "Là phần mềm học ngoại ngữ trực tuyến.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 203,
    q: '"Phân tích dự đoán" (Predictive Analytics) trong lĩnh vực Dữ liệu lớn (Big Data) giúp doanh nghiệp thực hiện điều gì?',
    options: [
      "Tổng hợp lại báo cáo doanh thu của năm ngoái.",
      "Sử dụng dữ liệu quá khứ và thuật toán AI để dự báo các xu hướng, rủi ro hoặc hành vi khách hàng trong tương lai.",
      "Chỉ lưu trữ dữ liệu lại để tiết kiệm ổ cứng.",
      "Vẽ biểu đồ nến cho thị trường chứng khoán.",
      "Thiết kế lại website của công ty cho đẹp hơn.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 204,
    q: 'Việc chuyển đổi từ một quy trình ký duyệt giấy tờ thủ công qua nhiều phòng ban sang việc "trình ký điện tử" trên phần mềm nội bộ là một ví dụ rõ nét của khái niệm nào?',
    options: [
      "Số hóa thông tin (Digitization)",
      "Tự động hóa quy trình số (Workflow Automation)",
      "Học sâu (Deep Learning)",
      "Thực tế ảo (Virtual Reality)",
      "Thương mại điện tử (E-commerce)",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 205,
    q: "Mô hình O2O (Online to Offline) trong kinh doanh hiện đại được hiểu như thế nào?",
    options: [
      "Tắt Internet để làm việc ngoại tuyến.",
      "Không bán hàng trên mạng, chỉ bán ở cửa hàng.",
      "Thu hút khách hàng tiềm năng từ các kênh trực tuyến (Online) và đưa họ đến trải nghiệm, mua sắm thực tế tại các cửa hàng vật lý (Offline).",
      "Đặt hàng ở cửa hàng vật lý nhưng yêu cầu giao qua mạng.",
      "Mua hàng trên mạng và chỉ đổi trả trên mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 206,
    q: "Chatbot chăm sóc khách hàng trên website hoạt động dựa trên công nghệ cốt lõi nào để hiểu câu hỏi của người dùng?",
    options: [
      "Công nghệ in 3D.",
      "Xử lý ngôn ngữ tự nhiên (NLP) thuộc Trí tuệ nhân tạo.",
      "Điện toán ranh giới (Edge Computing).",
      "Chuỗi khối (Blockchain).",
      "Mạng nội bộ (LAN).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 207,
    q: '"Nền tảng số" (Digital Platform) như Uber, Grab, hay Airbnb có đặc điểm chung nổi bật nhất là gì?',
    options: [
      "Họ sở hữu toàn bộ số lượng xe cộ và bất động sản cung cấp cho dịch vụ.",
      "Họ không sở hữu tài sản vật lý (xe, nhà) mà chỉ cung cấp cơ sở hạ tầng công nghệ để kết nối cung (người có tài sản rảnh rỗi) và cầu (người cần dịch vụ).",
      "Họ chỉ tuyển dụng lập trình viên, không cần nhân viên vận hành.",
      "Họ cung cấp dịch vụ hoàn toàn miễn phí.",
      "Họ là công ty nhà nước.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 208,
    q: '"Công dân số" (Digital Citizen) được định nghĩa bao gồm những yếu tố nào?',
    options: [
      "Người chỉ dùng điện thoại di động thông minh.",
      "Người dùng máy tính trên 10 tiếng một ngày.",
      "Công dân có năng lực sử dụng công nghệ số an toàn, hiệu quả, có văn hóa ứng xử trên mạng và tuân thủ pháp luật số.",
      "Người có tài khoản mạng xã hội trên 1 triệu lượt theo dõi.",
      "Người biết lập trình phần mềm.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 209,
    q: "Sự phát triển của các nền tảng Low-code/No-code giúp ích gì cho dân văn phòng không chuyên về IT?",
    options: [
      "Giúp họ không phải làm việc nữa.",
      "Cho phép họ tự tạo ra các ứng dụng, phần mềm quản lý nội bộ đơn giản thông qua thao tác kéo-thả trực quan mà không cần hoặc cần rất ít kiến thức lập trình phức tạp.",
      "Tự động sửa chữa phần cứng máy tính bị hỏng.",
      "Cung cấp các mã giảm giá mua hàng online.",
      "Thay thế hoàn toàn phần mềm Microsoft Word.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 210,
    q: '"Chữ ký điện tử" (Electronic Signature) và "Chữ ký số" (Digital Signature) khác nhau ở điểm cơ bản nào?',
    options: [
      "Cả hai là một, không có sự khác biệt.",
      "Chữ ký điện tử ký bằng bút điện, chữ ký số ký bằng ngón tay.",
      "Chữ ký số là một DẠNG CAO CẤP của chữ ký điện tử, nó sử dụng thuật toán mã hóa (mật mã không đối xứng) để đảm bảo tính toàn vẹn và xác thực tính pháp lý chặt chẽ hơn.",
      "Chữ ký điện tử dùng ở Việt Nam, chữ ký số dùng ở nước ngoài.",
      "Chữ ký số dễ bị làm giả hơn chữ ký điện tử.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 211,
    q: '"Trình quản lý mật khẩu" (Password Manager) mang lại lợi thế bảo mật nào so với việc tự nhớ mật khẩu?',
    options: [
      "Tự động đổi mật khẩu mỗi ngày.",
      "Giúp bạn tạo và lưu trữ an toàn các mật khẩu cực kỳ phức tạp và khác nhau cho từng tài khoản; bạn chỉ cần nhớ một Mật khẩu chủ (Master Password) duy nhất.",
      "Ngăn chặn hoàn toàn việc máy tính bị nhiễm virus.",
      "Phục hồi lại các email đã bị xóa.",
      "Tự động hack mật khẩu wifi của hàng xóm.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 212,
    q: 'Tấn công "Phi kỹ thuật" (Social Engineering) không sử dụng các lỗ hổng phần mềm máy tính, vậy nó tấn công vào đâu?',
    options: [
      "Tấn công vào nguồn điện của tòa nhà.",
      "Tấn công vào các trạm phát sóng wifi.",
      "Tấn công vào tâm lý, sự chủ quan, sợ hãi hoặc lòng tham của CON NGƯỜI (nhân viên) để lừa họ tự nguyện cung cấp mật khẩu hoặc chuyển tiền.",
      "Tấn công vào hệ thống làm mát của máy chủ.",
      "Tấn công vào ổ đĩa quang.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 213,
    q: "Khi tải một ứng dụng mới (ví dụ: Ứng dụng đèn pin) trên điện thoại thông minh, rủi ro bảo mật lớn nhất từ phía người dùng là gì?",
    options: [
      "Làm tốn dung lượng 4G.",
      'Không đọc kỹ và cấp "Quyền truy cập" (Permissions) vô lý cho ứng dụng (ví dụ: app đèn pin đòi quyền truy cập danh bạ, tin nhắn, định vị).',
      "Điện thoại nhanh hết pin hơn.",
      "Màn hình bị tối đi.",
      "Bị mất kết nối wifi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 214,
    q: "Để chia sẻ tệp tin nội bộ giữa các máy tính trong cùng một văn phòng, một nhà xưởng một cách nhanh chóng, ổn định mà KHÔNG phụ thuộc vào việc có Internet hay không, phương thức nào truyền thống và hiệu quả nhất?",
    options: [
      "Gửi qua Zalo.",
      "Upload lên Google Drive rồi tải về.",
      "Chia sẻ qua Mạng cục bộ (LAN) bằng tính năng File Sharing của hệ điều hành.",
      "Gửi qua email đính kèm.",
      "In ra giấy rồi đánh máy lại.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 215,
    q: "Dấu hiệu tinh vi nhất thường xuất hiện trong một Email Phishing (Email lừa đảo) giả mạo ngân hàng là gì?",
    options: [
      "Email không có tiêu đề (Subject).",
      'Tên hiển thị là "Ngân Hàng" nhưng địa chỉ email thực sự gửi đi lại xuất phát từ các đuôi email lạ, sai chính tả (ví dụ: admin@vietcom-bank-security.com).',
      "Email chỉ có toàn chữ viết hoa.",
      "Email bị rơi vào thư mục Inbox (Hộp thư đến).",
      "Email có đính kèm file âm thanh.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 216,
    q: 'Phương thức "Xác thực 2 yếu tố" (2FA) vẫn có thể bị vượt qua (hack) trong trường hợp nào dưới đây?',
    options: [
      "Hacker ngồi hack hệ thống của Google.",
      "Điện thoại của bạn hết pin.",
      "Kẻ gian gọi điện thoại giả danh công an/nhân viên ngân hàng và lừa chính bạn tự miệng đọc mã OTP đó cho họ.",
      "Bạn tắt wifi.",
      "Bạn đổi mật khẩu máy tính.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 217,
    q: "Khi rời khỏi bàn làm việc tại văn phòng dù chỉ vài phút, thói quen an toàn thông tin cơ bản nhất bạn cần thao tác trên máy tính Windows là gì?",
    options: [
      "Rút phích cắm điện.",
      "Nhấn tổ hợp phím Windows + L để khóa màn hình máy tính (Lock screen).",
      "Tắt kết nối mạng wifi.",
      "Lưu tất cả file lại và Shutdown (Tắt máy).",
      "Rút dây mạng ra khỏi máy.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 218,
    q: 'Nguy cơ "Tấn công xen giữa" (Man-in-the-Middle) thường xảy ra nhất ở môi trường nào?',
    options: [
      "Mạng wifi ở nhà bạn.",
      "Mạng LAN nội bộ của công ty.",
      "Mạng Wi-Fi công cộng, không có mật khẩu bảo vệ tại quán cafe, sân bay.",
      "Mạng 4G/5G của các nhà mạng viễn thông.",
      "Khi không kết nối mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 219,
    q: 'Để bảo vệ dữ liệu theo "Quy tắc Backup 3-2-1", con số "1" mang ý nghĩa gì?',
    options: [
      "1 bản sao lưu mỗi tháng.",
      "1 ổ cứng dung lượng 1 Terabyte.",
      "Ít nhất 1 bản sao lưu phải được lưu trữ ở một VỊ TRÍ ĐỊA LÝ KHÁC (Offsite) hoặc trên Đám mây (Cloud) để phòng ngừa hỏa hoạn, ngập lụt tại văn phòng.",
      "Chỉ 1 người được quyền xem bản backup.",
      "Khôi phục dữ liệu trong vòng 1 phút.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 220,
    q: "Dữ liệu Sinh trắc học (Vân tay, mống mắt, khuôn mặt) có một nhược điểm chí mạng về mặt bảo mật so với Mật khẩu chữ và số là gì?",
    options: [
      "Khó sử dụng hơn mật khẩu.",
      "Tốn nhiều thời gian xác thực hơn gõ phím.",
      'Nếu dữ liệu sinh trắc học bị rò rỉ và kẻ gian đánh cắp (tạo ra vân tay giả/khuôn mặt giả), bạn KHÔNG THỂ "đổi" vân tay hay khuôn mặt của mình như đổi một mật khẩu được.',
      "Không tích hợp được vào điện thoại.",
      "Chi phí quá đắt đỏ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 221,
    q: "Malware (Phần mềm độc hại) lây lan mạnh nhất vào hệ thống máy tính của doanh nghiệp thông qua con đường nào?",
    options: [
      "Sóng điện thoại.",
      "Bụi bẩn bám vào khe tản nhiệt.",
      "Người dùng bất cẩn mở các file đính kèm (Word, Excel chứa macro độc hại, file .exe, .zip) từ các email lạ, không rõ nguồn gốc.",
      "Nhìn vào màn hình quá lâu.",
      "Cắm sạc pin điện thoại vào máy tính.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 222,
    q: 'Chế độ duyệt web "Ẩn danh" (Incognito) thực chất KHÔNG BẢO VỆ bạn khỏi đối tượng nào dưới đây?',
    options: [
      "Vợ/chồng hoặc người dùng chung máy tính với bạn.",
      "Trình duyệt web (nó không lưu lịch sử máy tính).",
      "Nhà mạng cung cấp dịch vụ Internet (ISP), cơ quan quản lý mạng nội bộ của công ty, hoặc chính trang web bạn truy cập.",
      "Trẻ em trong nhà.",
      "Các tiện ích mở rộng (Extensions) bị vô hiệu hóa.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 223,
    q: "Để phát hiện và hạn chế các trang web lừa đảo trực tuyến (Scam), tiêu chí nào sau đây thường BỊ BỎ QUA nhưng rất quan trọng khi mua sắm mạng?",
    options: [
      "Website thiết kế càng đẹp thì càng uy tín.",
      "Giá sản phẩm rẻ hơn 70-80% so với thị trường là món hời cần mua ngay.",
      'Kiểm tra kỹ thông tin liên hệ (Địa chỉ thực, mã số thuế, số điện thoại chăm sóc khách hàng rõ ràng) và dấu tích thông báo "Đã thông báo Bộ Công Thương" (ở VN).',
      "Trang web yêu cầu chuyển khoản trước 100% vào tài khoản cá nhân thay vì tài khoản công ty.",
      "Có nhiều quảng cáo nhấp nháy trên trang.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 224,
    q: '"Năng lực số" (Digital Literacy) không chỉ là việc biết dùng máy tính, mà năng lực cốt lõi nhất trong kỷ nguyên bùng nổ thông tin là gì?',
    options: [
      "Biết gõ phím 10 ngón không cần nhìn.",
      "Khả năng tư duy phản biện, biết cách tìm kiếm, đánh giá, chắt lọc tính xác thực của nguồn thông tin và sử dụng thông tin đó một cách có đạo đức.",
      "Cài đặt được Windows cho máy tính.",
      "Sửa được lỗi kẹt giấy của máy in.",
      "Viết được một chương trình phần mềm.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 225,
    q: 'Tính năng "Block" (Chặn) và "Report" (Báo cáo) trên các nền tảng mạng xã hội đóng vai trò gì?',
    options: [
      "Làm tăng lượng người theo dõi (Follower) của bạn.",
      "Công cụ tự bảo vệ bản thân và góp phần làm sạch không gian mạng khi gặp các nội dung quấy rối, bắt nạt, lừa đảo, tin giả.",
      "Để kết bạn với nhiều người hơn.",
      "Xóa bài viết của người khác khỏi internet hoàn toàn.",
      "Lấy lại mật khẩu mạng xã hội khi bị quên.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 226,
    q: "Cookie trên trình duyệt web có bản chất là gì?",
    options: [
      "Là một loại mã độc chuyên đánh cắp tiền ngân hàng.",
      'Là các đoạn dữ liệu nhỏ (text) do trang web tạo ra và lưu trên máy tính của bạn nhằm "nhớ" trạng thái đăng nhập, tùy chọn cá nhân và giỏ hàng của bạn.',
      "Là một trò chơi tích hợp sẵn trên Google Chrome.",
      "Là trình diệt virus trực tuyến.",
      "Là tên một loại ngôn ngữ lập trình.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 227,
    q: "Điều rủi ro khi cắm một chiếc USB nhặt được hoặc USB không rõ nguồn gốc vào máy tính văn phòng là gì?",
    options: [
      "Máy tính sẽ bị hỏng cổng USB ngay lập tức.",
      "USB có thể chứa mã độc tự động kích hoạt (AutoRun) hoặc là thiết bị USB Killer có khả năng phóng điện phá hủy hoàn toàn bo mạch chủ máy tính.",
      "Làm giảm tuổi thọ màn hình.",
      "Gây tốn mực máy in của công ty.",
      "Mạng wifi công ty sẽ bị ngắt.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 228,
    q: 'Thuật ngữ "Zero-day vulnerability" (Lỗ hổng zero-day) trong an toàn thông tin chỉ điều gì?',
    options: [
      "Lỗ hổng xảy ra vào lúc 0 giờ đêm.",
      "Lỗ hổng khiến máy tính có giá trị bằng 0.",
      "Lỗ hổng bảo mật chưa từng được biết đến, nhà sản xuất phần mềm chưa có thời gian (0 ngày) để tung ra bản vá khắc phục, khiến tin tặc dễ dàng lợi dụng.",
      "Lỗ hổng do người dùng quên mật khẩu vào ngày đầu tiên.",
      "Lỗ hổng mạng nội bộ bị ngắt vào cuối ngày.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 229,
    q: "Botnet (Mạng máy tính ma) thường được tin tặc sử dụng vào mục đích gì?",
    options: [
      "Chơi game online cùng nhau.",
      "Đào bitcoin hợp pháp cho nhà nước.",
      "Điều khiển từ xa hàng ngàn máy tính bị nhiễm mã độc đồng loạt truy cập vào một website nhằm đánh sập trang web đó (Tấn công từ chối dịch vụ DDoS).",
      "Nâng cấp hệ điều hành miễn phí cho máy tính.",
      "Trao đổi file văn bản giữa các công ty.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 230,
    q: "Khi một liên kết (URL) được rút gọn thông qua các dịch vụ như bit.ly, tinyurl... bạn nên có thái độ như thế nào về mặt bảo mật?",
    options: [
      "Bấm vào ngay vì link ngắn rất an toàn.",
      "Gửi cho người thân bấm thử xem là link gì.",
      "Thận trọng và có thể sử dụng các công cụ kiểm tra link rút gọn (URL expander) trước khi bấm, vì kẻ gian thường lợi dụng để che giấu đường dẫn lừa đảo thật sự.",
      "Khởi động lại máy tính rồi mới bấm vào.",
      "Chỉ bấm khi truy cập bằng điện thoại.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 231,
    q: 'Trong tính năng Mail Merge (Trộn thư) của Word, loại tệp tin nào thường được sử dụng phổ biến nhất làm "Nguồn dữ liệu" (Data Source) chứa danh sách khách hàng?',
    options: [
      "Một file nhạc MP3.",
      "Một file hình ảnh JPG.",
      "Một bảng tính Excel (.xlsx).",
      "Một file trình chiếu PowerPoint (.pptx).",
      "Một video MP4.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 232,
    q: "Trong Excel, khi đang viết công thức, phím tắt nào giúp bạn chuyển đổi nhanh giữa địa chỉ ô tương đối (ví dụ: A1) và địa chỉ ô tuyệt đối (ví dụ: 1)?",
    options: ["F1", "F2", "F3", "F4", "F5"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 233,
    q: "Tổ hợp phím tắt nào được dùng để chèn một Liên kết (Hyperlink) vào văn bản trong Word, Excel hoặc PowerPoint?",
    options: ["Ctrl + H", "Ctrl + L", "Ctrl + K", "Ctrl + M", "Ctrl + U"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 234,
    q: "Trong Word, nếu bạn muốn một đoạn văn bản (như Tên công ty, Số trang) lặp lại ở đỉnh hoặc đáy của TẤT CẢ các trang, bạn phải chèn nội dung đó vào đâu?",
    options: [
      "Text Box",
      "WordArt",
      "Header & Footer (Tiêu đề trên và Tiêu đề dưới)",
      "Drop Cap",
      "Watermark",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 235,
    q: "Khi sử dụng Excel, nếu bạn nhận được kết quả báo lỗi #VALUE!, nguyên nhân phổ biến nhất là gì?",
    options: [
      "Bạn chia một số cho số 0.",
      "Cột không đủ rộng để hiển thị số.",
      "Bạn đang thực hiện phép tính toán học (cộng, trừ, nhân, chia) với một ô chứa Dữ liệu kiểu Chữ (Text).",
      "Bạn chưa lưu file.",
      "Bạn tìm kiếm một giá trị không tồn tại.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 236,
    q: 'Trong Excel, tính năng "Data Validation" thường được sử dụng nhiều nhất để làm gì trong công tác nhập liệu?',
    options: [
      "Vẽ biểu đồ tự động.",
      "Tạo một danh sách thả xuống (Drop-down list) để người dùng chỉ được phép chọn dữ liệu đã thiết lập sẵn, tránh gõ sai chính tả.",
      "Mã hóa mật khẩu bảng tính.",
      "Tự động dịch tiếng Anh sang tiếng Việt.",
      "Chèn hình ảnh vào ô.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 237,
    q: "Công cụ nào trong Microsoft Office (Word, PowerPoint) hỗ trợ bạn vẽ Sơ đồ tổ chức công ty hoặc Sơ đồ quy trình một cách tự động, đẹp mắt mà không phải vẽ từng hình khối thủ công?",
    options: ["Shapes", "SmartArt", "Chart", "Icons", "3D Models"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 238,
    q: "Trong Word, ngoài việc dùng chuột nhấn vào biểu tượng cái chổi (Format Painter), bạn có thể dùng tổ hợp phím tắt nào để SAO CHÉP ĐỊNH DẠNG?",
    options: [
      "Ctrl + C",
      "Ctrl + Shift + C",
      "Alt + C",
      "Shift + C",
      "Windows + C",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 239,
    q: "Hàm VLOOKUP trong Excel có một nhược điểm (hoặc giới hạn) cơ bản nào sau đây?",
    options: [
      "Nó chỉ có thể tìm kiếm dữ liệu từ Phải sang Trái.",
      "Nó chỉ có thể tìm kiếm dữ liệu từ Trái sang Phải (Cột chứa giá trị tìm kiếm phải nằm bên trái cột chứa kết quả).",
      "Nó chỉ hoạt động với các con số, không hoạt động với chữ.",
      "Nó chỉ tìm được dữ liệu trong cùng một Sheet.",
      "Nó giới hạn tối đa chỉ tìm được 100 dòng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 240,
    q: "Hàm nào trong Excel cho phép bạn TÍNH TỔNG các giá trị trong một vùng dữ liệu nhưng chỉ tính những ô THỎA MÃN MỘT ĐIỀU KIỆN cho trước?",
    options: ["SUM", "COUNTIF", "AVERAGE", "SUMIF", "MAX"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 241,
    q: "Trong Word, công cụ Tìm kiếm và Thay thế (Find and Replace) CÓ THỂ làm được điều gì ngoài việc thay thế chữ cái?",
    options: [
      "Nó có thể tìm và thay thế định dạng (ví dụ: đổi tất cả chữ in nghiêng thành chữ in đậm).",
      "Nó tự động tạo ra một văn bản mới.",
      "Nó tự động nén file Word cho nhẹ hơn.",
      "Nó tự động gửi email cho người khác.",
      "Nó không thể làm gì khác ngoài thay chữ.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 242,
    q: 'Trong PowerPoint, hiệu ứng "Trigger" (Cò súng/Nút kích hoạt) được dùng để làm gì?',
    options: [
      "Phát ra tiếng súng khi chuyển slide.",
      "Tự động tắt máy tính khi kết thúc bài thuyết trình.",
      "Làm cho một hiệu ứng hình ảnh/âm thanh CHỈ XẢY RA khi người thuyết trình bấm chuột vào ĐÚNG một đối tượng/nút cụ thể trên slide.",
      "Tự động xóa các slide không dùng đến.",
      "Chuyển đổi định dạng file sang PDF.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 243,
    q: "Trong Excel, để ngắt dòng văn bản BÊN TRONG CÙNG MỘT Ô (xuống dòng chủ động), bạn nhấn tổ hợp phím nào?",
    options: [
      "Enter",
      "Shift + Enter",
      "Alt + Enter",
      "Ctrl + Enter",
      "Tab + Enter",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 244,
    q: "Trong Word, muốn trang số 1 là trang dọc (Portrait) nhưng trang số 2 lại là trang ngang (Landscape) trong CÙNG MỘT TÀI LIỆU, bạn phải sử dụng tính năng nào?",
    options: [
      "Page Break (Ngắt trang thông thường)",
      "Section Break (Ngắt phân vùng)",
      "Column Break (Ngắt cột)",
      "Text Wrapping Break",
      "Header & Footer",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 245,
    q: 'Tính năng "Sparklines" trong Excel từ phiên bản 2010 trở đi là gì?',
    options: [
      "Những tia lửa điện xuất hiện khi bạn gõ phím nhanh.",
      "Công cụ xóa dữ liệu rác.",
      "Các biểu đồ thu nhỏ xíu được nhúng trực tiếp GỌN TRONG MỘT Ô (Cell) duy nhất để thể hiện xu hướng dữ liệu.",
      "Tính năng chat nội bộ trong Excel.",
      "Các đường kẻ bảng có màu dạ quang.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 246,
    q: 'Hiệu ứng chuyển slide "Morph" (từ Office 2019/365 trở lên) trong PowerPoint tạo ra hiệu ứng thị giác như thế nào?',
    options: [
      "Biến toàn bộ slide thành màn hình đen.",
      "Tạo sự chuyển động mượt mà, biến đổi hình dạng hoặc di chuyển đối tượng từ vị trí ở Slide A sang vị trí mới ở Slide B một cách liền mạch.",
      "Biến chữ văn bản thành giọng nói.",
      "Biến hình ảnh 2D thành 3D.",
      "Tạo hiệu ứng sấm chớp.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 247,
    q: 'Tính năng "AutoSave" (Tự động lưu) ở góc trái phía trên của các ứng dụng Office 365 chỉ hoạt động khi bạn đáp ứng điều kiện nào?',
    options: [
      "Bạn phải cắm USB vào máy.",
      "Bạn phải mua bàn phím của Microsoft.",
      "File của bạn phải được lưu trực tuyến trên OneDrive hoặc SharePoint.",
      "Bạn phải in tài liệu ra ít nhất 1 lần.",
      "Máy tính phải có dung lượng trống trên 100GB.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 248,
    q: "Theo các chuyên gia, 3 trụ cột (Pillars) chính quyết định sự thành công của Chuyển đổi số trong doanh nghiệp là gì?",
    options: [
      "Máy tính, Mạng Internet, Điện thoại.",
      "Lãnh đạo, Nhân viên, Khách hàng.",
      "Con người, Quy trình, Công nghệ.",
      "Tiền vốn, Địa điểm, Sản phẩm.",
      "Phần cứng, Phần mềm, Phần mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 249,
    q: 'Khái niệm "Data Mining" (Khai phá dữ liệu) trong Dữ liệu lớn (Big Data) có nghĩa là gì?',
    options: [
      "Thuê thợ mỏ đi đào cáp quang dưới biển.",
      "Quá trình phân tích một lượng lớn dữ liệu để tìm ra các mẫu (patterns), mối quan hệ và xu hướng ẩn giấu có giá trị dự báo.",
      "Việc xóa các dữ liệu cũ không cần thiết.",
      "Đánh cắp dữ liệu của công ty đối thủ.",
      "Sao lưu dữ liệu ra ổ cứng ngoài.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 250,
    q: 'Trong Dịch vụ công trực tuyến, "Mức độ 4" (hoặc Dịch vụ công trực tuyến toàn trình) khác biệt so với các mức độ thấp hơn ở điểm nào?',
    options: [
      "Người dân vẫn phải đến cơ quan nhà nước để nhận kết quả giấy.",
      "Cho phép người dân thực hiện TẤT CẢ các bước từ điền đơn, nộp hồ sơ, thanh toán phí trực tuyến và nhận kết quả trực tuyến (hoặc qua bưu điện) mà KHÔNG CẦN đến cơ quan nhà nước bất kỳ lần nào.",
      "Chỉ cho phép tải mẫu đơn về tự in ra viết tay.",
      "Mức độ 4 yêu cầu phải đóng phí đắt gấp 4 lần.",
      "Mức độ 4 dành riêng cho người nước ngoài.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 251,
    q: 'Phương pháp "Agile/Scrum" thường được nhắc đến trong các dự án Chuyển đổi số là gì?',
    options: [
      "Một loại phần mềm diệt virus.",
      "Một phương pháp quản lý dự án linh hoạt, chia nhỏ dự án thành các giai đoạn ngắn (Sprint) để liên tục thử nghiệm, đánh giá và điều chỉnh, thay vì lập kế hoạch cứng nhắc từ đầu đến cuối.",
      "Một ngôn ngữ lập trình web mới.",
      "Một hình thức kỷ luật nhân viên.",
      "Một loại máy chủ đám mây.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 252,
    q: "ChatGPT, Midjourney là những ví dụ điển hình của loại hình Trí tuệ nhân tạo (AI) nào?",
    options: [
      "AI Nhận diện khuôn mặt (Facial Recognition).",
      "AI Sáng tạo (Generative AI) - có khả năng tạo ra nội dung mới (văn bản, hình ảnh, mã code) dựa trên dữ liệu đã được huấn luyện.",
      "AI Phân tích dữ liệu số liệu (Analytical AI).",
      "AI Điều khiển Robot (Robotics).",
      "AI Nhận diện giọng nói (Speech to Text).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 253,
    q: 'Trong Kinh tế số, mô hình "Kinh tế chia sẻ" (Sharing Economy) được áp dụng thành công nhất bởi các công ty nào sau đây?',
    options: [
      "Microsoft, Apple.",
      "Toyota, Honda.",
      "Grab, Uber, Airbnb.",
      "Coca Cola, Pepsi.",
      "Vinamilk, TH True Milk.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 254,
    q: 'Trọng tâm của khái niệm "Omnichannel" (Đa kênh liền mạch) khác với "Multichannel" (Đa kênh thông thường) ở yếu tố nào?',
    options: [
      "Đa kênh liền mạch yêu cầu khách hàng dùng nhiều ứng dụng hơn.",
      "Đa kênh liền mạch kết nối dữ liệu của tất cả các kênh (Online, Offline) thành một hệ thống duy nhất, tạo ra trải nghiệm mua sắm xuyên suốt cho khách hàng dù họ đổi kênh liên tục.",
      "Đa kênh liền mạch chỉ sử dụng kênh bán hàng truyền thống.",
      "Đa kênh thông thường đắt tiền hơn.",
      "Không có gì khác biệt.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 255,
    q: 'Trong công nghiệp 4.0, ứng dụng "Digital Twin" (Bản sao số) trong sản xuất mang lại lợi ích gì trước khi xây dựng một nhà máy thực tế?',
    options: [
      "Giúp chụp ảnh nhà máy đẹp hơn.",
      "Cho phép mô phỏng, chạy thử và phát hiện lỗi của dây chuyền sản xuất trên không gian ảo, từ đó tối ưu hóa thiết kế trước khi tốn tiền xây dựng thực tế.",
      "In ra các bản vẽ giấy nhanh hơn.",
      "Tự động tuyển dụng công nhân cho nhà máy.",
      "Ngăn chặn tin tặc tấn công nhà máy.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 256,
    q: '"Data-Driven Decision Making" (Ra quyết định dựa trên dữ liệu) trong văn hóa doanh nghiệp số có nghĩa là gì?',
    options: [
      "Giám đốc quyết định dựa trên cảm tính cá nhân.",
      "Quyết định dựa trên việc tung đồng xu.",
      "Các quyết định chiến lược hoặc vận hành được đưa ra dựa trên việc phân tích các bằng chứng, số liệu thực tế (Data) thay vì chỉ dựa vào kinh nghiệm, trực giác hay phỏng đoán.",
      "Thuê thầy phong thủy để ra quyết định.",
      "Trì hoãn mọi quyết định cho đến khi máy tính tự xử lý.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 257,
    q: 'Khái niệm "SaaS" (Software as a Service) mang lại lợi ích tài chính nào cho doanh nghiệp so với phần mềm truyền thống (On-premise)?',
    options: [
      "Phải trả một khoản tiền cục cực lớn ngay từ đầu để mua đứt bản quyền vĩnh viễn.",
      "Phải thuê nhân viên IT giỏi để bảo trì máy chủ riêng.",
      "Chuyển chi phí đầu tư ban đầu (CAPEX) thành chi phí hoạt động (OPEX) bằng cách trả phí thuê bao theo tháng/năm, không tốn tiền mua máy chủ hay bảo trì phần cứng.",
      "Miễn phí vĩnh viễn, không bao giờ phải trả tiền.",
      "Chỉ thanh toán bằng tiền mặt.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 258,
    q: 'Trong thiết kế Giao diện/Trải nghiệm người dùng (UI/UX), phương pháp "A/B Testing" là gì?',
    options: [
      "Kiểm tra xem người dùng thích chữ A hay chữ B.",
      "Thử nghiệm song song hai phiên bản thiết kế khác nhau (Phiên bản A và Phiên bản B) cho cùng một nhóm người dùng để xem phiên bản nào mang lại hiệu quả (tỷ lệ nhấp chuột, mua hàng) tốt hơn.",
      "Phân chia người dùng thành nhóm người giàu (A) và nhóm người nghèo (B).",
      "Bắt buộc người dùng phải qua 2 bài kiểm tra trước khi dùng app.",
      "Đánh giá phần mềm dựa trên thang điểm A và B.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 259,
    q: 'Mô hình "Dropshipping" trong thương mại điện tử có đặc điểm gì nổi bật?',
    options: [
      "Người bán hàng phải sở hữu nhà kho khổng lồ.",
      "Người bán hàng không lưu giữ sản phẩm trong kho. Khi có đơn, họ chuyển thông tin cho nhà cung cấp, và nhà cung cấp sẽ đóng gói, giao hàng trực tiếp cho người mua.",
      "Khách hàng phải tự đến xưởng sản xuất để lấy hàng.",
      "Hàng hóa được thả (drop) từ máy bay trực thăng xuống.",
      "Chỉ áp dụng cho bán hàng nông sản.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 260,
    q: 'Mối quan hệ giữa "Blockchain" và "Tiền mã hóa" (Cryptocurrency) được mô tả chính xác nhất là:',
    options: [
      "Blockchain và Tiền mã hóa là một, chỉ khác tên gọi.",
      "Blockchain là tên một loại tiền mã hóa phổ biến.",
      "Blockchain là NỀN TẢNG CÔNG NGHỆ cốt lõi, còn Tiền mã hóa chỉ là MỘT TRONG SỐ rất nhiều ỨNG DỤNG được xây dựng trên nền tảng Blockchain đó.",
      "Tiền mã hóa tạo ra Blockchain.",
      "Blockchain là phần cứng máy tính để chứa tiền mã hóa.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 261,
    q: "Việc kết nối máy lạnh, hệ thống đèn chiếu sáng, camera an ninh trong nhà vào mạng Wifi để điều khiển bằng giọng nói qua điện thoại thông minh là ứng dụng phổ biến của công nghệ nào?",
    options: [
      "Big Data.",
      "Điện toán đám mây.",
      "IoT (Internet vạn vật) - Cụ thể là Smart Home (Nhà thông minh).",
      "Blockchain.",
      "Thực tế ảo (VR).",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 262,
    q: "Văn hóa số (Digital Culture) của một tổ chức chuyển đổi số thành công thường KHUYẾN KHÍCH điều gì?",
    options: [
      "Duy trì các quy trình truyền thống chậm chạp càng lâu càng tốt.",
      "Che giấu lỗi lầm để không bị phạt.",
      'Tinh thần đổi mới sáng tạo, làm việc linh hoạt, chấp nhận "thử nghiệm và thất bại nhanh" (Fail fast) để rút kinh nghiệm và liên tục cải tiến.',
      "Cấm nhân viên sử dụng mạng xã hội.",
      "Phân cấp bậc quản lý càng nhiều tầng càng tốt.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 263,
    q: "Phần mềm MES (Manufacturing Execution System) trong nhà máy thông minh đóng vai trò gì?",
    options: [
      "Quản lý việc tuyển dụng nhân sự.",
      "Theo dõi, kiểm soát và thu thập dữ liệu thời gian thực tại các máy móc trên tầng xưởng sản xuất để quản lý hiệu suất.",
      "Thiết kế bao bì sản phẩm.",
      "Chạy quảng cáo bán hàng.",
      "Là phần mềm kế toán thuế.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 264,
    q: 'Thuật ngữ "Dashboard" trong phân tích dữ liệu kinh doanh có nghĩa là gì?',
    options: [
      "Bảng điều khiển xe ô tô.",
      "Bảng tổng hợp trực quan dữ liệu (gồm biểu đồ, số liệu quan trọng - KPI) giúp nhà quản lý nắm bắt tình hình hoạt động theo thời gian thực chỉ trên một màn hình.",
      "Một loại bàn phím máy tính mới.",
      "Nút nguồn của máy chủ.",
      "Bản nháp của một báo cáo.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 265,
    q: 'Trong bảo mật tài khoản, "Backup codes" (Mã dự phòng) của tính năng Xác thực 2 yếu tố được dùng khi nào?',
    options: [
      "Dùng để đăng nhập hàng ngày cho nhanh.",
      "Dùng để chia sẻ cho bạn bè mượn tài khoản.",
      "Được in ra/lưu lại ở nơi an toàn để nhập vào khôi phục tài khoản trong trường hợp bạn BỊ MẤT ĐIỆN THOẠI hoặc SIM không nhận được mã OTP.",
      "Dùng để nạp tiền điện thoại.",
      "Dùng để tạo tài khoản mới.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 266,
    q: '"Dấu chân kỹ thuật số thụ động" (Passive Digital Footprint) là những thông tin bạn để lại trên mạng BẰNG CÁCH NÀO?',
    options: [
      "Chủ động đăng một bức ảnh lên Facebook.",
      "Chủ động viết một bài đánh giá trên Google.",
      "Bạn không chủ động đăng tải, nhưng hệ thống tự động theo dõi và ghi lại qua Cookies (như địa chỉ IP, các trang web bạn lướt qua, lịch sử tìm kiếm).",
      "Gửi email cho đồng nghiệp.",
      "Tham gia bình luận trên diễn đàn.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 267,
    q: 'Hình thức tấn công "Spear Phishing" nguy hiểm hơn "Phishing" thông thường ở điểm nào?',
    options: [
      "Dùng giáo mác đâm vào máy tính.",
      "Gửi email rác cho hàng triệu người cùng lúc.",
      "Kẻ tấn công thu thập thông tin và nhắm mục tiêu vào CÁ NHÂN CỤ THỂ (có tên gọi, chức vụ, ngữ cảnh quen thuộc) khiến nạn nhân mất cảnh giác thay vì gửi email chung chung.",
      "Gắn virus vào thẻ từ thang máy.",
      "Chỉ tấn công vào ban đêm.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 268,
    q: 'Việc sử dụng chung MỘT mật khẩu (Password Reuse) cho nhiều tài khoản (Facebook, Gmail, Shopee, Ngân hàng) dẫn đến rủi ro "Credential Stuffing". Điều này nghĩa là gì?',
    options: [
      "Máy tính sẽ bị chậm đi.",
      "Bộ nhớ RAM bị đầy.",
      "Khi một trang web bị hack và lộ mật khẩu của bạn, hacker sẽ dùng chính mật khẩu đó để đăng nhập trót lọt vào TẤT CẢ các tài khoản quan trọng khác của bạn.",
      "Bạn sẽ dễ quên mật khẩu hơn.",
      "Các tài khoản tự động khóa lại do trùng lặp.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 269,
    q: 'Chiêu trò lừa đảo qua Telegram/Zalo: "Làm nhiệm vụ xem video YouTube / chốt đơn Shopee để nhận hoa hồng" thường kết thúc bằng việc gì?',
    options: [
      "Nạn nhân được nhận làm nhân viên chính thức của YouTube.",
      "Nạn nhân kiếm được rất nhiều tiền và làm giàu nhanh chóng.",
      'Nạn nhân ban đầu nhận được vài khoản tiền nhỏ để tạo lòng tin, sau đó bị dụ nạp số tiền lớn để "nâng cấp nhiệm vụ" và bị mất trắng (cắt liên lạc).',
      "Nạn nhân bị yêu cầu đi giao hàng trực tiếp.",
      "Nạn nhân được tặng một chiếc điện thoại mới.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 270,
    q: "Để phòng chống triệt để nhất việc bị mã độc tống tiền (Ransomware) làm mất dữ liệu công ty, hành động nào là cốt lõi?",
    options: [
      "Thương lượng trả tiền cho hacker ngay lập tức.",
      "Cài đặt 10 phần mềm diệt virus cùng lúc.",
      "Thực hiện Sao lưu dữ liệu (Backup) định kỳ ra ổ cứng rời hoặc Đám mây và NGẮT KẾT NỐI bản backup đó khỏi mạng nội bộ.",
      "Tắt máy tính không dùng nữa.",
      "Đổi mật khẩu máy tính mỗi ngày.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 271,
    q: 'Mối nguy hiểm của "Evil Twin" (Wifi giả mạo) tại quán cafe là gì?',
    options: [
      "Wifi phát ra tia bức xạ xấu.",
      "Tin tặc thiết lập một điểm phát wifi giả có TÊN Y HỆT wifi thật của quán cafe, nếu bạn kết nối vào, chúng sẽ chặn thu mọi dữ liệu bạn gửi đi (mật khẩu, tài khoản).",
      "Có hai người quản lý quán cafe cùng lúc.",
      "Wifi bắt bạn xem 2 quảng cáo liên tiếp.",
      "Nó tự động cài phần mềm học tiếng Anh vào máy bạn.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 272,
    q: 'Chuẩn bảo vệ quyền riêng tư dữ liệu "GDPR" (rất hay thấy thông báo chấp nhận trên các trang web) là luật của khu vực nào?',
    options: [
      "Liên minh Châu Phi.",
      "Hợp chủng quốc Hoa Kỳ (Mỹ).",
      "Khối ASEAN.",
      "Liên minh Châu Âu (EU).",
      "Trung Quốc.",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 273,
    q: '"Shoulder surfing" (Nhìn trộm qua vai) là một kiểu tấn công an ninh mạng mang tính chất vật lý. Nó xảy ra như thế nào?',
    options: [
      "Kẻ gian xoa bóp vai cho bạn rồi móc túi.",
      "Kẻ tấn công đứng phía sau bạn ở nơi công cộng (ATM, quán cafe) để lén nhìn bạn gõ mật khẩu hoặc xem thông tin nhạy cảm trên màn hình.",
      "Mang balo chứa thiết bị phá sóng.",
      "Gửi virus qua mạng wifi.",
      "Tựa vai vào máy chủ làm máy chủ sập nguồn.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 274,
    q: "Khi gửi email cho một danh sách hàng chục khách hàng không quen biết nhau, bạn nên đặt địa chỉ email của họ vào trường (field) nào để bảo vệ quyền riêng tư, không để lộ email của người này cho người kia?",
    options: [
      "Trường 'To' (Tới)",
      "Trường 'Cc' (Carbon Copy)",
      "Trường 'Bcc' (Blind Carbon Copy)",
      "Trường 'Subject' (Tiêu đề)",
      "Chèn vào phần nội dung thư (Body)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 275,
    q: 'Hành vi thả một chiếc USB có chứa mã độc (dán nhãn "Lương thưởng năm 2024") ở bãi gửi xe của công ty để chờ nhân viên tò mò nhặt cắm vào máy tính được gọi là kỹ thuật tấn công gì?',
    options: [
      "Phishing.",
      "Baiting (Thả mồi nhử).",
      "Ransomware.",
      "Vishing.",
      "DDoS.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 276,
    q: 'Thuật ngữ "Echo chamber" (Buồng vang thông tin) trên mạng xã hội giải thích hiện tượng gì?',
    options: [
      "m thanh trong video bị vang do lỗi loa.",
      "Thuật toán của mạng xã hội liên tục hiển thị cho bạn những thông tin, quan điểm GIỐNG HỆT với niềm tin sẵn có của bạn, khiến bạn mất góc nhìn đa chiều.",
      "Việc một nhóm chat có quá nhiều người nhắn tin.",
      "Thông báo của điện thoại reo liên tục.",
      "Gọi điện thoại qua mạng bị vọng tiếng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 277,
    q: 'Hành động "Jailbreak" (trên iPhone) hoặc "Root" (trên Android) thiết bị di động mang lại rủi ro gì?',
    options: [
      "Vỡ màn hình điện thoại.",
      "Gây nổ pin.",
      "Phá vỡ các lớp bảo mật gốc của hệ điều hành, khiến điện thoại cực kỳ dễ bị nhiễm phần mềm độc hại và bị đánh cắp thông tin.",
      "Tăng thời lượng pin lên 200%.",
      "Điện thoại bị khóa mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 278,
    q: "Khi trình duyệt web báo lỗi hiển thị giao diện cũ hoặc trang web chạy không đúng cách, thao tác cơ bản và hiệu quả nhất bạn nên thử làm đầu tiên là gì?",
    options: [
      "Mua máy tính mới.",
      "Gỡ cài đặt Windows.",
      "Xóa bộ nhớ đệm và Cookies (Clear Cache and Cookies) của trình duyệt rồi tải lại trang.",
      "Đổi mật khẩu wifi.",
      "Rút phích cắm điện của modem mạng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 279,
    q: "Đâu là nguyên tắc ứng xử ĐẠO ĐỨC trên không gian số khi sử dụng nội dung (hình ảnh, bài viết, âm nhạc) của người khác?",
    options: [
      "Copy và đăng lại nhận là của mình.",
      "Chỉ cần sửa một chữ là thành tác phẩm của mình.",
      "Tôn trọng bản quyền tác giả: xin phép, trả phí (nếu có yêu cầu) hoặc ghi rõ trích dẫn nguồn gốc khi sử dụng hợp pháp.",
      "Lưu về máy tính cá nhân rồi bán lấy tiền.",
      "Sử dụng thoải mái miễn là không ai kiện.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 280,
    q: "Khi bạn đang làm việc tại văn phòng và nghi ngờ chiếc máy tính công ty của mình VỪA BỊ nhiễm mã độc hoặc đang bị tin tặc điều khiển chuột từ xa, hành động KHẨN CẤP ĐẦU TIÊN bạn cần làm là gì?",
    options: [
      "Lên Google tìm kiếm cách diệt virus.",
      "Bật camera lên để chụp ảnh tin tặc.",
      "Lập tức rút dây cáp mạng Internet (hoặc tắt Wifi) của máy đó để cô lập, ngăn mã độc gửi dữ liệu ra ngoài hoặc lây lan sang máy khác, sau đó báo cho bộ phận IT.",
      "Ngồi nhìn xem tin tặc định làm gì tiếp theo.",
      "Format (Xóa trắng) toàn bộ ổ cứng ngay lập tức.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 281,
    q: "Trong Excel, khi bạn cuộn trang tính xuống dưới hoặc sang phải mà vẫn muốn các tiêu đề cột hoặc hàng đầu tiên luôn hiển thị, bạn sử dụng tính năng nào?",
    options: [
      "Wrap Text",
      "Freeze Panes (Cố định vùng)",
      "Merge & Center",
      "Format Painter",
      "Split Cells",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 282,
    q: "Trong Word, khi nhiều người cùng chỉnh sửa một tài liệu và bạn muốn biết chính xác ai đã thêm, xóa hay sửa đoạn chữ nào, bạn bật tính năng gì?",
    options: [
      "Macro",
      "Spelling & Grammar",
      "Track Changes (Theo dõi thay đổi)",
      "Mail Merge",
      "AutoCorrect",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 283,
    q: "Trong PowerPoint, nếu bạn muốn chèn một logo công ty xuất hiện ở ĐÚNG MỘT VỊ TRÍ trên TẤT CẢ các slide hiện tại và tương lai mà không cần copy/paste từng trang, bạn nên chèn logo đó vào đâu?",
    options: [
      "Animation Pane",
      "Reading View",
      "Slide Master",
      "Slide Sorter",
      "Transition",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 284,
    q: "Cấu trúc cơ bản của hàm điều kiện IF trong Excel bao gồm 3 đối số, thứ tự đúng là gì?",
    options: [
      "IF(Điều kiện kiểm tra; Giá trị nếu điều kiện ĐÚNG; Giá trị nếu điều kiện SAI)",
      "IF(Giá trị nếu điều kiện ĐÚNG; Giá trị nếu điều kiện SAI; Điều kiện kiểm tra)",
      "IF(Điều kiện kiểm tra; Giá trị nếu điều kiện SAI; Giá trị nếu điều kiện ĐÚNG)",
      "IF(Giá trị trung bình; Điều kiện kiểm tra; Giá trị lỗi)",
      "IF(Vùng dữ liệu; Điều kiện kiểm tra; Tổng)",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 285,
    q: 'Tính năng "Drop Cap" trong Microsoft Word có tác dụng gì?',
    options: [
      "Tự động viết hoa toàn bộ chữ trong văn bản.",
      "Làm cho chữ cái đầu tiên của đoạn văn bản to lên, thả dài xuống nhiều dòng (như kiểu trình bày trên báo chí).",
      "Tạo chữ nghệ thuật 3D.",
      "Tự động sửa lỗi chính tả.",
      "Thu nhỏ kích thước văn bản.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 286,
    q: "Pivot Table trong Excel là một công cụ cực kỳ mạnh mẽ dùng để làm gì?",
    options: [
      "Khôi phục dữ liệu đã bị xóa.",
      "Dịch dữ liệu từ tiếng Anh sang tiếng Việt.",
      "Tóm tắt, nhóm, tổng hợp và phân tích một lượng lớn dữ liệu thô một cách nhanh chóng mà không cần viết công thức phức tạp.",
      "Tạo mật khẩu bảo vệ file Excel.",
      "Vẽ các khối hình 3D trong bảng tính.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 287,
    q: "Trong PowerPoint, bạn có thể lưu bài thuyết trình của mình thành định dạng nào để người khác có thể xem như một bộ phim có sẵn âm thanh và hiệu ứng chuyển động?",
    options: [
      "PDF (.pdf)",
      "Video (.mp4 hoặc .wmv)",
      "Word Document (.docx)",
      "Excel Template (.xltx)",
      "Plain Text (.txt)",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 288,
    q: "Trong Word, phím tắt (hoặc công cụ) nào giúp bạn gõ các công thức toán học phức tạp (như phân số, căn bậc hai, tích phân)?",
    options: ["Symbol", "WordArt", "Equation (Alt + =)", "Macros", "SmartArt"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 289,
    q: "Hàm nào trong Excel dùng để ĐẾM số lượng các ô TRỐNG (không chứa bất kỳ dữ liệu nào) trong một vùng được chọn?",
    options: ["COUNTA", "COUNT", "COUNTIF", "COUNTBLANK", "DCOUNT"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 290,
    q: "Phím tắt Ctrl + Z trong các ứng dụng Office có chức năng gì?",
    options: [
      "Lưu tài liệu (Save).",
      "Hoàn tác lại thao tác vừa thực hiện (Undo).",
      "In tài liệu (Print).",
      "Lặp lại thao tác vừa làm (Redo).",
      "Chọn toàn bộ văn bản (Select All).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 291,
    q: 'Trong hàm VLOOKUP của Excel, đối số thứ 4 (Range_lookup) thường được nhập là "0" (hoặc FALSE). Việc này mang ý nghĩa gì?',
    options: [
      "Yêu cầu Excel tìm kiếm CHÍNH XÁC giá trị đó, nếu không có sẽ báo lỗi #N/A.",
      "Yêu cầu Excel tìm kiếm TƯƠNG ĐỐI giá trị đó.",
      "Báo cho Excel biết vùng tìm kiếm không có dòng tiêu đề.",
      "Bỏ qua các ô bị trống.",
      "Chỉ tìm kiếm các ô có định dạng là số không.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 292,
    q: 'Tính năng "Presenter View" (Chế độ người thuyết trình) trong PowerPoint mang lại lợi ích gì khi bạn cắm máy tính vào máy chiếu?',
    options: [
      "Khán giả sẽ thấy toàn bộ các ứng dụng bạn đang mở trên máy.",
      "Khán giả nhìn thấy Slide toàn màn hình, còn bạn (trên laptop) nhìn thấy Slide hiện tại, Slide tiếp theo, đồng hồ bấm giờ và phần Ghi chú (Notes).",
      "Tự động dịch lời nói của bạn thành phụ đề trên máy chiếu.",
      "Làm cho màn hình máy chiếu tự động mờ đi khi bạn ngưng nói.",
      "Khóa không cho ai copy file thuyết trình của bạn.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 293,
    q: 'Trong Excel, phím tắt nào được sử dụng để mở nhanh hộp thoại "Format Cells" (Định dạng ô)?',
    options: ["Ctrl + F", "Ctrl + P", "Ctrl + 1", "Ctrl + 2", "Alt + Enter"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 294,
    q: 'Để Word có thể tự động tạo ra một bản "Mục lục" (Table of Contents) chuẩn xác, bạn BẮT BUỘC phải thực hiện thao tác nào trước đó với văn bản?',
    options: [
      "In đậm và tô màu đỏ toàn bộ tiêu đề.",
      'Gán các "Heading" (Heading 1, Heading 2...) cho các tiêu đề chương, mục trong bài.',
      "Đánh số trang cho tài liệu.",
      "Chuyển font chữ về Times New Roman.",
      "Nhấn phím Tab 3 lần trước mỗi tiêu đề.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 295,
    q: 'Tính năng "Conditional Formatting" (Định dạng có điều kiện) trong Excel được dùng để làm gì?',
    options: [
      "Tự động tính tổng các cột số.",
      "Tạo các bảng Drop-down list.",
      "Tự động đổi màu ô, màu chữ hoặc chèn biểu tượng vào ô nếu giá trị trong ô đó thỏa mãn một điều kiện nhất định (ví dụ: tô đỏ số âm).",
      "Xóa định dạng của toàn bộ bảng tính.",
      "Ghép nhiều ô thành một ô.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 296,
    q: "Hệ thống CRM (Customer Relationship Management) mang lại lợi ích chính nào cho doanh nghiệp?",
    options: [
      "Thay thế bộ phận kế toán thuế.",
      "Tự động điều khiển máy móc trong nhà máy.",
      "Quản lý, lưu trữ toàn bộ dữ liệu lịch sử tương tác, chăm sóc và bán hàng đối với từng khách hàng để nâng cao trải nghiệm và tỷ lệ giữ chân khách.",
      "Chỉ dùng để chấm công nhân viên.",
      "Thiết kế logo cho công ty.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 297,
    q: "Hệ thống ERP (Enterprise Resource Planning) khác biệt với các phần mềm quản lý rời rạc ở điểm nào?",
    options: [
      "ERP rẻ hơn nhiều so với phần mềm rời rạc.",
      "ERP tích hợp tất cả các phòng ban (Kế toán, Nhân sự, Kho, Mua hàng...) vào MỘT hệ thống cơ sở dữ liệu duy nhất, giúp dữ liệu đồng bộ và chạy xuyên suốt.",
      "ERP chỉ hoạt động khi không có Internet.",
      "ERP do chính phủ cung cấp miễn phí.",
      "ERP chỉ dùng cho các cửa hàng tạp hóa nhỏ.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 298,
    q: "Điện toán đám mây (Cloud Computing) có 3 mô hình triển khai chính là: Đám mây công cộng (Public Cloud), Đám mây lai (Hybrid Cloud) và gì nữa?",
    options: [
      "Đám mây mưa (Rain Cloud).",
      "Đám mây phần cứng (Hardware Cloud).",
      "Đám mây riêng (Private Cloud).",
      "Đám mây tàng hình (Invisible Cloud).",
      "Đám mây chia sẻ (Shared Cloud).",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 299,
    q: 'Trong công nghệ số, "API" (Giao diện lập trình ứng dụng) đóng vai trò gì?',
    options: [
      "Là màn hình để người dùng nhập văn bản.",
      'Là chiếc "cầu nối" cho phép hai phần mềm độc lập có thể giao tiếp, trao đổi dữ liệu với nhau một cách an toàn (ví dụ: App bán hàng gọi API của App giao hàng).',
      "Là một loại thẻ nhớ dung lượng cao.",
      "Là thuật toán nén hình ảnh.",
      "Là cổng cắm USB trên máy tính.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 300,
    q: "RPA (Robotic Process Automation - Tự động hóa quy trình bằng Robot) trong văn phòng thường được dùng để thay con người làm những việc gì?",
    options: [
      "Suy nghĩ và sáng tạo các chiến lược marketing mới.",
      "Tham gia họp và đàm phán hợp đồng với đối tác.",
      "Thực hiện các công việc lặp đi lặp lại trên máy tính theo một quy tắc cố định (ví dụ: copy dữ liệu từ Excel nhập lên hệ thống web mỗi ngày).",
      "Lau dọn vệ sinh văn phòng.",
      "Sửa chữa máy in bị hỏng.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 301,
    q: "Giải pháp eKYC (Nhận biết khách hàng điện tử) giúp các ngân hàng thực hiện công việc gì?",
    options: [
      "Rút tiền mặt tại nhà.",
      "Cho phép khách hàng mở tài khoản từ xa bằng cách xác minh danh tính qua ảnh chụp giấy tờ và quét khuôn mặt trên điện thoại, không cần ra quầy.",
      "In thẻ ATM ngay trên điện thoại.",
      "Xóa các tài khoản nợ xấu.",
      "Chặn các tin nhắn rác.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 302,
    q: 'Khái niệm "Machine Learning" (Học máy) trong Trí tuệ nhân tạo (AI) có nghĩa là gì?',
    options: [
      "Máy tính tự động học cách lắp ráp một cỗ máy khác.",
      "Con người phải nhập từng dòng lệnh IF/THEN thủ công cho mọi tình huống.",
      "Cung cấp cho máy tính một lượng dữ liệu lớn để thuật toán tự động học hỏi, tìm ra quy luật và cải thiện khả năng dự đoán mà không cần con người lập trình chi tiết cho từng bước.",
      "Việc sinh viên IT học cách sử dụng máy tính.",
      "Máy tính học cách phát âm tiếng Anh.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 303,
    q: "Đặc điểm nổi trội nhất của mạng 5G so với 4G giúp nó ứng dụng được vào phẫu thuật từ xa hoặc xe tự lái là gì?",
    options: [
      "Giá cước rẻ hơn 4G.",
      "Độ trễ (Latency) cực thấp, thời gian phản hồi gần như ngay lập tức (dưới 1 phần nghìn giây) cùng băng thông khổng lồ.",
      "Chỉ hoạt động được ở vùng nông thôn.",
      "Có khả năng phát wifi miễn phí.",
      "Không cần dùng SIM.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 304,
    q: 'Trong thiết kế phần mềm, "UI" (User Interface) và "UX" (User Experience) khác nhau như thế nào?',
    options: [
      "UI là giá tiền, UX là chất lượng.",
      "UI dành cho máy tính, UX dành cho điện thoại.",
      "UI là hình thức bên ngoài (màu sắc, nút bấm, giao diện), UX là cảm nhận và sự thuận tiện của người dùng khi trải nghiệm sản phẩm.",
      "UI là code backend, UX là frontend.",
      "Chúng hoàn toàn giống nhau.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 305,
    q: "Nền tảng Alibaba.com kết nối các xưởng sản xuất với các doanh nghiệp mua sỉ toàn cầu là ví dụ của mô hình Thương mại điện tử nào?",
    options: [
      "B2C (Business to Consumer).",
      "B2B (Business to Business).",
      "C2C (Consumer to Consumer).",
      "G2C (Government to Consumer).",
      "O2O (Online to Offline).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 306,
    q: 'Thuật ngữ "Open Data" (Dữ liệu mở) của Chính phủ hoặc các tổ chức có nghĩa là gì?',
    options: [
      "Dữ liệu mật nhưng bị tin tặc tung lên mạng.",
      "Dữ liệu được bán với giá rất cao.",
      "Dữ liệu được công khai, cho phép bất kỳ ai cũng có thể truy cập, tải về, sử dụng và chia sẻ miễn phí nhằm thúc đẩy sáng tạo (ví dụ: dữ liệu thời tiết, giao thông).",
      "Dữ liệu mở nhưng chỉ cho người có chức vụ xem.",
      "Cổng USB để cắm ổ cứng ngoài.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 307,
    q: "Phân tích dự đoán (Predictive Analytics) giúp doanh nghiệp làm gì?",
    options: [
      "Giải thích lý do tại sao tháng trước doanh thu giảm.",
      "Sử dụng dữ liệu lịch sử và thuật toán để dự báo những điều có thể xảy ra trong TƯƠNG LAI (ví dụ: khách hàng nào sắp có ý định rời bỏ dịch vụ).",
      "Chỉnh sửa số liệu báo cáo cho đẹp.",
      "Xem thống kê số lượng nhân viên hiện tại.",
      "Tự động đuổi việc nhân viên làm việc kém.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 308,
    q: "Mô hình O2O (Online to Offline) trong kinh doanh có nghĩa là gì?",
    options: [
      "Chuyển nhân viên từ làm việc online sang làm việc tại văn phòng offline.",
      "Ngắt kết nối mạng của cửa hàng.",
      "Sử dụng các kênh trực tuyến (Online) để thu hút, dẫn dắt khách hàng đến cửa hàng vật lý thực tế (Offline) để trải nghiệm và mua sắm.",
      "Chỉ bán hàng trực tuyến, đóng cửa hàng vật lý.",
      "Sao lưu dữ liệu từ đám mây xuống ổ cứng offline.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 309,
    q: 'Ứng dụng "Smart Contract" (Hợp đồng thông minh) trên nền tảng Blockchain có đặc tính gì?',
    options: [
      "Tự động soạn thảo văn bản pháp lý.",
      "Tự động thực thi các điều khoản khi các điều kiện định trước được thỏa mãn mà không cần thông qua người làm chứng hay bên thứ ba (như công chứng, ngân hàng).",
      "Bắt buộc phải ký bằng bút mực thông minh.",
      "Chỉ áp dụng cho hợp đồng hôn nhân.",
      "Có thể tẩy xóa, thay đổi dễ dàng sau khi ký.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 310,
    q: '"Metaverse" (Vũ trụ ảo) được định nghĩa cơ bản là gì?',
    options: [
      "Một trò chơi xếp hình kiểu mới.",
      "Mạng xã hội chuyên đăng ảnh thiên văn học.",
      "Một không gian kỹ thuật số liên kết, nơi mọi người sử dụng avatar (hiện thân ảo) để tương tác, làm việc, giải trí trong môi trường 3D bằng công nghệ VR/AR.",
      "Một loại kính râm chống tia UV.",
      "Một đồng tiền điện tử mới của Facebook.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 311,
    q: "Để bảo mật tài khoản mạng xã hội an toàn nhất, các chuyên gia khuyên dùng phương thức Xác thực 2 yếu tố (2FA) nào thay vì nhận mã SMS qua số điện thoại?",
    options: [
      "Nhận mã qua bưu điện.",
      "Sử dụng ứng dụng tạo mã OTP chuyên dụng (Authenticator App) như Google Authenticator, Microsoft Authenticator.",
      "Nhận mã qua một tài khoản Facebook khác.",
      "Chuyển sang nhận mã bằng cuộc gọi ghi âm sẵn.",
      "In mã ra giấy dán lên màn hình.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 312,
    q: "Cách nhanh và chính xác nhất để kiểm tra một đường link gửi qua Zalo có phải là trang đăng nhập ngân hàng giả mạo (Phishing) hay không là gì?",
    options: [
      "Nhìn xem giao diện có giống thật không.",
      "Xem có logo của ngân hàng trên trang đó không.",
      "Kiểm tra kỹ tên miền (Domain/URL) trên thanh địa chỉ trình duyệt xem có viết sai chính tả hoặc thừa/thiếu ký tự so với trang web chính thức của ngân hàng không.",
      "Nhập thử mật khẩu cũ đã bỏ xem có đăng nhập được không.",
      "Gọi hỏi bạn bè xem họ có nhận được link này không.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 313,
    q: 'Mã độc "Trojan Horse" (Ngựa thành Troy) lây nhiễm vào máy tính người dùng bằng cách thức phổ biến nào?',
    options: [
      "Bay trong không khí và lây qua wifi.",
      "Nguỵ trang thành một phần mềm hợp pháp, hữu ích (ví dụ: game miễn phí, phần mềm bẻ khóa phần mềm khác) để lừa người dùng tự tay tải và cài đặt vào máy.",
      "Tự động chép từ máy này sang máy kia khi để 2 máy tính gần nhau.",
      "Hiện ra các dòng mã màu xanh lá cây trên màn hình đen.",
      "Lây qua đường dây điện.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 314,
    q: "Khi phải kết nối vào mạng Wifi công cộng tại sân bay để làm việc với dữ liệu quan trọng, bạn NÊN sử dụng công cụ nào để mã hóa dữ liệu, bảo vệ khỏi bị kẻ gian nghe lén?",
    options: [
      "Dùng trình duyệt Cốc Cốc.",
      "Bật chế độ máy bay (Airplane mode).",
      "Bật phần mềm VPN (Mạng riêng ảo).",
      "Bật chế độ bảo vệ mắt (Eye care).",
      "Gắn tai nghe có dây vào máy.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 315,
    q: "Trình quản lý mật khẩu (Password Manager) giúp ích gì cho người dùng cá nhân?",
    options: [
      "Tự động đổi mật khẩu wifi mỗi ngày.",
      "Giúp tạo, lưu trữ và điền tự động các mật khẩu dài, phức tạp, khác nhau cho từng trang web mà người dùng chỉ cần nhớ MỘT mật khẩu gốc (Master Password).",
      "Khôi phục lại tài khoản Facebook bị khóa.",
      "Tự động hack mật khẩu của người khác.",
      "Xóa bỏ hoàn toàn việc phải dùng mật khẩu.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 316,
    q: 'Một lầm tưởng rất phổ biến về "Chế độ ẩn danh" (Incognito/InPrivate) của trình duyệt web là gì?',
    options: [
      "Nó không lưu lịch sử duyệt web trên máy tính của bạn.",
      "Nó không lưu Cookies khi bạn tắt cửa sổ.",
      "Nó làm bạn hoàn toàn vô hình trên Internet, ngăn được nhà mạng (ISP), công ty nơi bạn làm việc, hay Google biết bạn đang truy cập trang web nào.",
      "Nó cho phép bạn đăng nhập nhiều tài khoản cùng lúc.",
      "Nó không giữ lại thông tin bạn điền vào các biểu mẫu.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 317,
    q: '"Social Engineering" (Tấn công phi kỹ thuật/Tấn công thao túng tâm lý) trong an ninh mạng nhắm vào lỗ hổng bảo mật nào lớn nhất?',
    options: [
      "Lỗ hổng của hệ điều hành Windows.",
      "Điểm yếu tâm lý của CON NGƯỜI (sự cả tin, lòng tham, nỗi sợ hãi) để lừa họ tự nguyện giao nộp mật khẩu hoặc chuyển tiền.",
      "Lỗ hổng của bộ định tuyến Wifi.",
      "Lỗ hổng của chip máy tính Intel.",
      "Lỗ hổng của mạng 4G.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 318,
    q: 'Hiện nay, kẻ lừa đảo thường dùng công nghệ "Deepfake" trong các cuộc gọi video trên Zalo/Messenger nhằm mục đích gì?',
    options: [
      "Đánh cắp thông tin thẻ nhớ điện thoại.",
      "Làm cho chất lượng cuộc gọi nét hơn, đẹp hơn.",
      "Giả mạo khuôn mặt và giọng nói của người thân/bạn bè để vay mượn tiền gấp, khiến nạn nhân tin rằng đang gọi video với người thật.",
      "Hack tài khoản ngân hàng của bạn ngay khi bạn nghe máy.",
      "Tự động kết bạn với người lạ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 319,
    q: 'Khi bạn nhận được một tin nhắn Zalo từ "nhân viên ngân hàng" yêu cầu cung cấp mã OTP vừa gửi về máy để "hủy giao dịch trừ tiền", bạn phải làm gì?',
    options: [
      "Đọc ngay mã OTP để tránh mất tiền.",
      "TUYỆT ĐỐI KHÔNG cung cấp mã OTP cho bất kỳ ai, dưới bất kỳ hình thức nào, kể cả người xưng là công an hay nhân viên ngân hàng, rồi gọi thẳng lên tổng đài ngân hàng để kiểm tra.",
      "Nhắn tin chửi bới kẻ lừa đảo rồi mới đưa mã.",
      "Đọc sai mã OTP một số để trêu chọc họ.",
      "Chuyển mã OTP đó cho người thân xem thử.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 320,
    q: 'Quy tắc sao lưu (Backup) dữ liệu an toàn "3-2-1" có nghĩa là gì?',
    options: [
      "3 bản chính, 2 bản phụ, 1 bản nháp.",
      "Sao lưu mỗi ngày 3 lần, 2 lần buổi sáng, 1 lần buổi chiều.",
      "Có 3 bản sao dữ liệu, lưu trên 2 loại phương tiện lưu trữ khác nhau, và 1 bản sao lưu trữ ở một vị trí khác (Offsite/Cloud).",
      "3 năm sao lưu 2 lần trên 1 máy tính.",
      "Sao lưu cho 3 máy tính, 2 máy in và 1 điện thoại.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 321,
    q: 'Bạn đang lướt web thì màn hình bật lên thông báo đỏ chót: "Máy tính của bạn đã nhiễm 5 con virus! Bấm vào đây để tải phần mềm diệt ngay!". Đây thường là hình thức tấn công gì?',
    options: [
      "Windows Defender đang làm nhiệm vụ.",
      "Scareware (Phần mềm hù dọa) - lừa bạn hoảng sợ để tải chính mã độc về máy hoặc trả tiền mua phần mềm dỏm.",
      "Cảnh báo an toàn của nhà mạng.",
      "Cập nhật hệ thống của Microsoft.",
      "Sự cố hỏng màn hình.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 322,
    q: 'Chức năng của mã "CAPTCHA" (ví dụ: gõ lại chữ ngoằn ngoèo, chọn hình ảnh xe đạp) trên các trang web là gì?',
    options: [
      "Làm chậm tốc độ truy cập của người dùng.",
      "Khoe khoang công nghệ xử lý hình ảnh của website.",
      "Phân biệt người dùng thật và máy móc (Bot), ngăn chặn các phần mềm tự động đăng nhập hoặc tạo tài khoản hàng loạt.",
      "Dùng để đăng ký nhận bản tin quảng cáo.",
      "Thu thập dữ liệu sở thích của bạn.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 323,
    q: 'Khi mua hàng trực tuyến hoặc nhập thông tin thẻ tín dụng, bạn cần đảm bảo địa chỉ trang web bắt đầu bằng HTTPS thay vì HTTP. Chữ "S" ở đây mang ý nghĩa gì?',
    options: [
      "Speed (Tốc độ cao).",
      "Secure (Bảo mật) - dữ liệu giữa bạn và trang web được mã hóa chống nghe lén.",
      "Shopping (Chuyên dùng để mua sắm).",
      "Server (Máy chủ).",
      "Simple (Giao diện đơn giản).",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 324,
    q: "Chữ ký số (Digital Signature) được sử dụng trong giao dịch điện tử có giá trị tương đương với gì ngoài đời thực?",
    options: [
      "Chữ ký nháp.",
      "Một bức ảnh selfie.",
      "Chữ ký tay và con dấu của cá nhân/doanh nghiệp, đảm bảo tính toàn vẹn của tài liệu và không thể chối bỏ trách nhiệm.",
      "Một hình icon mặt cười.",
      "Bằng lái xe.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 325,
    q: 'Thuật ngữ "Cyberbullying" đề cập đến vấn nạn nào trên không gian mạng?',
    options: [
      "Đánh bạc trực tuyến.",
      "Bắt nạt, lăng mạ, uy hiếp, tung tin đồn thất thiệt để xúc phạm danh dự người khác trên mạng xã hội hoặc tin nhắn.",
      "Hack tài khoản game của người khác.",
      "Ăn trộm tiền ảo.",
      "Livestream bán hàng giả.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 326,
    q: "Hình thức Phishing (lừa đảo mạo danh) thông qua Tin nhắn SMS trên điện thoại (ví dụ: tin nhắn giả mạo Brandname ngân hàng chứa link độc) được gọi tên riêng là gì?",
    options: ["Vishing", "Quishing", "Smishing", "Spamming", "Doxing"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 327,
    q: "Xác thực Sinh trắc học (Biometric Authentication) trên các thiết bị di động hiện nay bao gồm những phương pháp phổ biến nào?",
    options: [
      "Nhập mã PIN và vuốt màn hình theo mẫu hình (Pattern).",
      "Quét vân tay (Fingerprint) và Nhận diện khuôn mặt (FaceID).",
      'Trả lời câu hỏi bảo mật "Tên trường tiểu học của bạn là gì?".',
      "Bấm nút nguồn 3 lần liên tiếp.",
      "Vẽ chữ ký lên màn hình cảm ứng.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 328,
    q: 'Lỗ hổng "Zero-day" trong an ninh mạng là loại lỗ hổng gì?',
    options: [
      "Lỗ hổng chỉ xuất hiện vào lúc nửa đêm (0 giờ).",
      "Lỗ hổng đã được vá lỗi từ lâu và không còn nguy hiểm.",
      "Lỗ hổng bảo mật mới được phát hiện mà nhà phát triển phần mềm chưa hề biết tới hoặc chưa có bản vá (Patch) để khắc phục.",
      "Lỗ hổng khiến máy tính có nguy cơ cháy nổ.",
      "Lỗ hổng xóa toàn bộ tài khoản có số 0.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 329,
    q: '"Doxing" là một hành vi vi phạm đạo đức và pháp luật trên mạng, nó nghĩa là gì?',
    options: [
      "Tự sướng (Selfie) ở những nơi nguy hiểm.",
      "Cố ý tìm kiếm và công khai thông tin cá nhân riêng tư của ai đó (địa chỉ nhà, số điện thoại, nơi làm việc) lên mạng internet với mục đích đe dọa, làm nhục.",
      "Tải phim lậu trên mạng.",
      "Sử dụng phần mềm bẻ khóa.",
      "Lập nhiều nick ảo để tự bình luận khen mình.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 330,
    q: "Thói quen quan trọng nhất để bảo vệ máy tính cá nhân, điện thoại khỏi các lỗ hổng bảo mật là gì?",
    options: [
      "Luôn để màn hình ở chế độ sáng tối đa.",
      "Chỉ dùng phần mềm của các công ty Trung Quốc.",
      "Thường xuyên và nhanh chóng Cập nhật (Update) hệ điều hành và các ứng dụng lên phiên bản mới nhất ngay khi có thông báo.",
      "Tắt máy tính bằng cách rút dây điện thay vì nhấn Shutdown.",
      "Dán băng dính che kín các cổng USB.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 331,
    q: 'Trong Excel, để tính số lượng ký tự của một chuỗi văn bản có trong ô A1 (ví dụ: đếm xem từ "Cong ty" có bao nhiêu chữ cái và dấu cách), bạn sử dụng hàm nào?',
    options: ["SUM", "VALUE", "LEN", "UPPER", "TRIM"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 332,
    q: "Khi đang thuyết trình bằng PowerPoint, nếu bạn muốn màn hình ngay lập tức chuyển sang màu ĐEN hoàn toàn để hướng sự chú ý của khán giả về phía bạn (không nhìn lên slide nữa), bạn nhấn phím nào?",
    options: [
      "Phím B (Black)",
      "Phím W (White)",
      "Phím Esc",
      "Phím Space",
      "Phím F5",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 333,
    q: "Trong Word, nếu bạn muốn chèn một chú thích thích ngắn gọn nằm ở NGAY CUỐI TRANG (Footnote) để giải thích nghĩa của một từ ngữ hoặc trích dẫn nguồn tài liệu, bạn chọn thẻ nào trên thanh Ribbon?",
    options: ["Insert", "Home", "References", "Review", "Mailings"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 334,
    q: "Trong Excel, nếu bạn nhập công thức =TODAY() vào một ô, kết quả trả về là gì?",
    options: [
      "Giờ hiện tại của hệ thống.",
      "Ngày, tháng, năm hiện tại của hệ thống máy tính.",
      "Số thứ tự của ngày trong tuần.",
      "Tên của tháng hiện tại bằng tiếng Anh.",
      "Một chuỗi văn bản trống.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 335,
    q: 'Công cụ "Format Painter" trong Microsoft Office có chức năng chính là gì?',
    options: [
      "Vẽ hình tranh nghệ thuật vào văn bản.",
      "Tô màu nền cho toàn bộ trang giấy.",
      "Sao chép định dạng (font chữ, cỡ chữ, màu sắc, kiểu chữ...) từ một đoạn văn bản/ô này sang một đoạn văn bản/ô khác.",
      "Tự động sửa lỗi chính tả tiếng Việt.",
      "Xóa toàn bộ định dạng văn bản.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 336,
    q: "Trong Excel, hàm nào dùng để TÌM KIẾM một giá trị trong một hàng hoặc một cột và TRẢ VỀ VỊ TRÍ (số thứ tự hàng/cột) của giá trị đó?",
    options: ["VLOOKUP", "HLOOKUP", "MATCH", "INDEX", "XLOOKUP"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 337,
    q: "Trong Word, để nhanh chóng chọn (Highlight) TOÀN BỘ nội dung có trong văn bản, bạn có thể sử dụng tổ hợp phím tắt nào?",
    options: ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + A", "Ctrl + F"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 338,
    q: "Trong PowerPoint, khi bạn muốn các đối tượng trên slide xuất hiện một cách có thứ tự (ví dụ: chữ bay vào trước, hình ảnh hiện ra sau khi bạn bấm chuột), bạn sử dụng tính năng nào?",
    options: [
      "Transitions",
      "Animations",
      "Slide Master",
      "Design Ideas",
      "Record Slide Show",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 339,
    q: 'Hàm nào trong Excel cho phép bạn đếm số lượng các ô THỎA MÃN MỘT ĐIỀU KIỆN cho trước (ví dụ: đếm xem có bao nhiêu nhân viên có giới tính là "Nam")?',
    options: ["COUNT", "COUNTA", "COUNTIF", "SUMIF", "AVERAGEIF"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 340,
    q: "Trong Excel, khi bạn nhìn thấy một ô hiển thị chuỗi ký tự toàn dấu thăng #####, nguyên nhân là do đâu?",
    options: [
      "Công thức bị lỗi chia cho số 0.",
      "Chiều rộng của cột không đủ lớn để hiển thị toàn bộ con số trong ô đó.",
      "Dữ liệu trong ô chứa chữ bị cấm.",
      "Bạn chưa kết nối Internet.",
      "File Excel đã bị khóa mật khẩu.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 341,
    q: 'Tính năng "Smart Lookup" trong bộ ứng dụng Office giúp bạn làm gì?',
    options: [
      "Tìm kiếm các tệp tin bị mất trên ổ cứng.",
      "Quét virus cho tài liệu.",
      "Tra cứu nhanh thông tin, định nghĩa hoặc hình ảnh trên internet về một từ/cụm từ đang chọn ngay trong giao diện làm việc mà không cần mở trình duyệt web.",
      "Tìm kiếm các lỗi chính tả tự động.",
      "Tìm kiếm phím tắt phù hợp.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 342,
    q: "Trong Excel, để cố định cả hàng và cột của một ô trong công thức khi kéo công thức đi nơi khác (ví dụ cố định ô B2), ký hiệu đúng là gì?",
    options: ["", "B", "2", "#B#2", "@B@2"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 343,
    q: 'Trong Word, nếu bạn muốn gõ một công thức viết tắt và muốn máy tự động mở rộng thành một đoạn văn bản dài (ví dụ gõ "cty" tự động ra "Công ty TNHH MTV Cơ khí 83"), bạn sử dụng tính năng nào?',
    options: [
      "Mail Merge",
      "AutoCorrect Options",
      "Find and Replace",
      "Thesaurus",
      "Track Changes",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 344,
    q: "Trong Excel, hàm IF kết hợp với hàm nào để kiểm tra nhiều điều kiện đồng thời và TẤT CẢ các điều kiện đó đều phải ĐÚNG?",
    options: ["OR", "NOT", "AND", "XOR", "IFERROR"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 345,
    q: "Khi tạo một bản trình bày trong PowerPoint, quy tắc thiết kế nào sau đây thường được khuyên dùng để tránh làm khán giả bị ngợp và mất tập trung?",
    options: [
      "Viết toàn bộ nội dung bài phát biểu lên slide rồi đọc nguyên văn.",
      "Sử dụng cỡ chữ nhỏ (dưới 10pt) để chứa được nhiều thông tin nhất có thể.",
      "Quy tắc 6x6 hoặc tối giản chữ trên slide, ưu tiên hình ảnh, biểu đồ và dùng slide làm gợi ý, lời nói chi tiết do người thuyết trình trình bày.",
      "Dùng từ 10 màu chữ khác nhau trên một slide cho sinh động.",
      "Không bao giờ sử dụng hình ảnh minh họa.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 346,
    q: 'Công nghệ "Edge Computing" (Điện toán biên) trong bối cảnh IoT có ưu điểm gì vượt trội so với chỉ xử lý trên điện toán đám mây trung tâm?',
    options: [
      "Tốn nhiều chi phí đường truyền hơn.",
      "Xử lý dữ liệu ngay tại thiết bị biên (gần nơi phát sinh dữ liệu) giúp giảm độ trễ tối đa và tiết kiệm băng thông mạng, không phải gửi mọi thứ về đám mây xa xôi.",
      "Chỉ hoạt động khi có kết nối cáp quang biển quốc tế.",
      "Làm cho thiết bị tiêu thụ điện năng nhiều gấp 10 lần.",
      "Làm mất hoàn toàn tính bảo mật của dữ liệu.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 347,
    q: 'Khái niệm "Văn hóa ra quyết định dựa trên thử nghiệm" (Experimentation Culture) trong doanh nghiệp số khuyến khích điều gì?',
    options: [
      "Sợ sai, không dám thay đổi quy trình cũ.",
      "Luôn đợi có đủ 100% dữ liệu hoàn hảo trong nhiều năm rồi mới làm.",
      "Thử nghiệm các ý tưởng mới trên quy mô nhỏ, đo lường kết quả thực tế nhanh chóng, nếu thất bại thì rút kinh nghiệm sửa đổi, nếu thành công thì nhân rộng.",
      "Khoán trắng mọi quyết định cho trí tuệ nhân tạo.",
      "Cấm nhân viên đưa ra ý kiến trái chiều với sếp.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 348,
    q: 'Trong hệ sinh thái thương mại điện tử, giải pháp thanh toán "BNPL" (Buy Now, Pay Later - Mua trước trả sau) mang lại lợi ích lớn nhất cho đối tượng nào?',
    options: [
      "Giúp các ngân hàng tăng tỷ lệ nợ xấu.",
      "Giúp khách hàng mua ngay được sản phẩm mình muốn dù chưa đủ tiền ngay lúc đó mà không cần thủ tục thẻ tín dụng rườm rà.",
      "Giúp nhà nước thu thuế dễ hơn.",
      "Giúp các tiệm cầm đồ phát triển.",
      "Loại bỏ hoàn toàn nhu cầu mua sắm online.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 349,
    q: 'Thuật ngữ "Data Silo" (Kho dữ liệu cô lập) trong doanh nghiệp được hiểu là gì?',
    options: [
      "Một kho chứa dữ liệu cực kỳ an toàn và hiện đại.",
      "Tình trạng dữ liệu bị chia cắt, lưu trữ rời rạc ở từng phòng ban riêng lẻ (Phòng Kế toán giữ một ít, Phòng Kinh doanh giữ một ít) và không thể chia sẻ, kết nối với nhau, gây cản trở chuyển đổi số.",
      "Kho lưu trữ dữ liệu trên mây đám mây công cộng.",
      "Phương pháp sao lưu dữ liệu ra ổ cứng di động.",
      "Hệ thống bảo mật chống rò rỉ dữ liệu.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 350,
    q: 'Trong chuyển đổi số giáo dục, thuật ngữ "LMS" (Learning Management System) là hệ thống dùng để làm gì?',
    options: [
      "Quản lý việc ăn uống nội trú của học sinh.",
      "Quản lý toàn bộ quá trình học tập trực tuyến (tổ chức khóa học, bài giảng, bài kiểm tra, chấm điểm, theo dõi tiến độ của học viên).",
      "In ấn tài liệu sách giáo khoa.",
      "Dịch thuật đa ngôn ngữ tài liệu học tập.",
      "Quản lý hệ thống camera giám sát lớp học.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 351,
    q: 'Việc ứng dụng Trí tuệ nhân tạo (AI) vào tổng đài chăm sóc khách hàng thông qua các "Chatbot" thông minh mang lại lợi ích cốt lõi nào?',
    options: [
      "Thay thế hoàn toàn con người trong mọi tình huống cảm xúc phức tạp.",
      "Trả lời tự động các thắc mắc thường gặp của khách hàng 24/7 một cách tức thì, giảm tải áp lực cho điện thoại viên con người.",
      "Làm giảm chất lượng dịch vụ chăm sóc khách hàng.",
      "Bắt buộc khách hàng phải chờ đợi lâu hơn.",
      "Chỉ dùng để gửi các tệp hình ảnh quảng cáo.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 352,
    q: 'Khái niệm "Low-code / No-code" trong phát triển phần mềm thời đại số có ý nghĩa gì đối với nhân sự không chuyên về lập trình (như nhân sự phòng ban nghiệp vụ)?',
    options: [
      "Giúp họ tự học lập trình mã nguồn C++ nâng cao trong 3 ngày.",
      "Cho phép họ tự xây dựng các ứng dụng hoặc tự động hóa quy trình đơn giản bằng thao tác kéo-thả trực quan mà không cần biết viết những dòng code phức tạp.",
      "Cấm nhân sự tự ý cài phần mềm ngoài.",
      "Yêu cầu mọi nhân viên phải biết viết code Python.",
      "Giảm tốc độ phát triển ứng dụng của công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 353,
    q: 'Trong mô hình kinh doanh số, "Subscription Model" (Mô hình thuê bao định kỳ, ví dụ như Netflix, Microsoft 365) giúp doanh nghiệp đạt được ưu điểm gì lớn nhất?',
    options: [
      "Dòng tiền đến đều đặn, dự báo trước được doanh thu hàng tháng/năm và duy trì mối quan hệ gắn bó lâu dài với khách hàng.",
      "Bán được sản phẩm với giá cực kỳ cao ngay từ lần đầu tiên.",
      "Không cần phải cập nhật tính năng mới cho phần mềm nữa.",
      "Giảm số lượng khách hàng xuống mức tối thiểu.",
      "Loại bỏ hoàn toàn chi phí chăm sóc khách hàng.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 354,
    q: 'Khái niệm "Smart Factory" (Nhà máy thông minh) khác biệt gì so với nhà máy tự động hóa truyền thống?',
    options: [
      "Nhà máy thông minh không cần sử dụng máy móc.",
      "Nhà máy thông minh kết hợp tự động hóa với kết nối vạn vật (IoT), trí tuệ nhân tạo (AI) và dữ liệu lớn để các máy móc có thể tự giao tiếp, tự tối ưu hóa quy trình và dự báo hỏng hóc.",
      "Nhà máy thông minh chỉ hoạt động vào ban đêm.",
      "Nhà máy thông minh không cần bất kỳ công nhân hay kỹ sư nào làm việc.",
      "Nhà máy thông minh không sử dụng điện lưới.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 355,
    q: '"Customer Journey" (Hành trình khách hàng) trong chiến lược trải nghiệm số được định nghĩa là gì?',
    options: [
      "Quãng đường vận chuyển hàng hóa từ kho đến nhà khách hàng.",
      "Lộ trình di chuyển của nhân viên kinh doanh đi gặp khách hàng.",
      "Toàn bộ các điểm chạm (touchpoints) và trải nghiệm cảm xúc của khách hàng từ khi họ nhận biết nhu cầu, tìm hiểu, mua sắm cho đến sau khi sử dụng sản phẩm/dịch vụ của doanh nghiệp.",
      "Lịch sử tìm kiếm Google của khách hàng.",
      "Danh sách các khiếu nại của khách hàng gửi lên tổng đài.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 356,
    q: 'Công nghệ "RFID" (Nhận dạng bằng tần số vô tuyến) thường được ứng dụng mạnh mẽ trong lĩnh vực nào của doanh nghiệp số?',
    options: [
      "Quản lý kho hàng, theo dõi vị trí tài sản và kiểm kê hàng hóa tự động từ xa mà không cần quét từng mã vạch thủ công bằng mắt.",
      "Quản lý mật khẩu máy tính của nhân viên.",
      "Dùng để phát wifi miễn phí trong văn phòng.",
      "Gửi email quảng cáo tự động.",
      "Phân tích ngữ nghĩa văn bản tiếng Việt.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 357,
    q: 'Trong chuyển đổi số doanh nghiệp, "Change Management" (Quản trị sự thay đổi) đóng vai trò gì?',
    options: [
      "Quản lý việc thay đổi linh kiện máy tính khi bị hỏng.",
      "Quản lý sự thay đổi mẫu mã bao bì sản phẩm.",
      "Giải quyết yếu tố con người, giúp đội ngũ nhân viên vượt qua sự kháng cự thay đổi, thấu hiểu lợi ích và sẵn sàng thích ứng với quy trình, công nghệ mới.",
      "Quản lý dòng tiền thay đổi theo tỷ giá ngoại tệ.",
      "Thay đổi tên thương hiệu của công ty.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 358,
    q: 'Khái niệm "Omnichannel Retailing" (Bán lẻ đa kênh hợp nhất) đòi hỏi điều gì ở doanh nghiệp?',
    options: [
      "Mở càng nhiều cửa hàng vật lý càng tốt.",
      "Tách biệt hoàn toàn giá bán giữa online và offline để tranh giành khách hàng.",
      "Đồng bộ hóa toàn bộ thông tin sản phẩm, giá cả, tồn kho, chương trình khuyến mãi và dữ liệu khách hàng giữa cửa hàng vật lý, website, ứng dụng di động và mạng xã hội.",
      "Chỉ bán hàng qua một kênh duy nhất để đỡ tốn nhân lực.",
      "Miễn phí vận chuyển cho tất cả đơn hàng lớn.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 359,
    q: 'Trong các dự án phần mềm theo mô hình Agile, thuật ngữ "Sprint" có ý nghĩa gì?',
    options: [
      "Một cuộc thi chạy đua tốc độ giữa các lập trình viên.",
      "Một chu kỳ làm việc ngắn, có thời gian cố định (thường từ 1 đến 4 tuần) để hoàn thành một phần sản phẩm có thể chuyển giao được.",
      "Bản vá lỗi khẩn cấp khi hệ thống bị sập.",
      "Khoảng thời gian nghỉ ngơi giữa các năm tài chính.",
      "Công cụ kiểm tra tốc độ đường truyền internet.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 360,
    q: 'Ý nghĩa của chỉ số "NPS" (Net Promoter Score) trong việc đo lường trải nghiệm khách hàng số là gì?',
    options: [
      "Đo lường tốc độ tải trang web của công ty.",
      "Đo lường mức độ sẵn lòng của khách hàng trong việc giới thiệu sản phẩm/dịch vụ của công ty cho bạn bè, đồng nghiệp (đo lường mức độ hài lòng và trung thành thực sự).",
      "Đo lường số lượng nhân viên nghỉ việc hàng tháng.",
      "Đo lường chi phí quảng cáo trên Facebook.",
      "Đo lường số lượng sản phẩm bị lỗi trong kho.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 361,
    q: "Khi bạn lỡ tay nhấp vào một đường link lạ trên mạng xã hội và ngay lập tức thấy trình duyệt chuyển hướng đến một trang web lạ hoắc đòi quyền truy cập webcam, hành động an toàn nhất là gì?",
    options: [
      "Cho phép quyền truy cập để xem trang web muốn làm gì.",
      "Ngay lập tức tắt (Close) tab/trình duyệt đó đi, không nhập bất kỳ thông tin gì và tiến hành quét virus/malware nếu cần.",
      "Nhập số điện thoại của mình lên trang đó để xác minh.",
      "Đăng tải ngay đường link đó lên tường nhà mình để hỏi bạn bè.",
      "Tắt nguồn điện toàn bộ ngôi nhà.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 362,
    q: 'Thuật ngữ "Credential Harvesting" (Thu hoạch thông tin đăng nhập) là thủ đoạn mà tội phạm mạng thường dùng để làm gì?',
    options: [
      "Thu thập lúa gạo của nông dân qua mạng.",
      "Tạo ra các trang web giả mạo (như cổng đăng nhập email, ngân hàng, mạng xã hội) để lừa người dùng tự điền tên đăng nhập và mật khẩu vào nhằm đánh cắp chúng.",
      "Xóa bỏ các mật khẩu cũ không dùng đến.",
      "Tổng hợp danh sách tên nhân viên trong công ty.",
      "Thu gom các ổ cứng máy tính cũ bỏ đi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 363,
    q: "Khi sử dụng máy tính chung ở thư viện hoặc phòng họp công ty, thói quen an toàn nào sau khi bạn làm việc xong là BẮT BUỘC?",
    options: [
      "Tắt màn hình máy tính rồi đi về.",
      "Đăng xuất (Sign out / Log out) khỏi tất cả các tài khoản cá nhân (Email, Google, Mạng xã hội) và xóa lịch sử duyệt web nếu cần thiết.",
      "Lấy khăn lau sạch bàn phím.",
      "Đổi mật khẩu wifi của thư viện.",
      "Rút dây chuột máy tính giấu đi.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 364,
    q: "Mạng lưới các thiết bị máy tính bị nhiễm mã độc và bị kẻ gian điều khiển từ xa thành một đội quân để thực hiện các cuộc tấn công mạng quy mô lớn (như tấn công từ chối dịch vụ DDoS) được gọi là gì?",
    options: [
      "Botnet (Mạng máy ma).",
      "Cloud Network.",
      "Local Area Network.",
      "Peer-to-Peer Network.",
      "Social Network.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 365,
    q: 'Hình thức lừa đảo qua cuộc gọi điện thoại giả mạo cơ quan công an, tòa án, viện kiểm sát yêu cầu chuyển tiền vào tài khoản "tạm giữ để điều tra" được gọi là gì?',
    options: [
      "Phishing",
      "Vishing (Voice Phishing)",
      "Smishing",
      "Whaling",
      "Pharming",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 366,
    q: "Khi bạn thấy một bức ảnh trên mạng có dấu hiệu bị cắt ghép bất thường hoặc ánh sáng không khớp, công cụ hoặc kỹ thuật nào giúp bạn kiểm tra xem bức ảnh đó xuất phát từ đâu hoặc có bịa đặt không?",
    options: [
      "Đọc kỹ định dạng file.",
      "Tìm kiếm hình ảnh ngược (Reverse Image Search) bằng Google Lens hoặc TinEye.",
      "In bức ảnh ra giấy rồi dùng kính lúp soi.",
      "Gửi ảnh cho tổng đài viễn thông kiểm tra.",
      "Đổi tên file ảnh thành tên khác.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 367,
    q: 'Vì sao việc sử dụng các phần mềm "bẻ khóa" (Crack software) tải trôi nổi trên internet lại tiềm ẩn rủi ro cực kỳ cao đối với an toàn thông tin doanh nghiệp?',
    options: [
      "Phần mềm crack chạy chậm hơn phần mềm bản quyền.",
      "Các bản crack thường bị kẻ gian chèn sẵn mã độc ẩn (Trojan, Backdoor, Ransomware) để đánh cắp dữ liệu hoặc phá hoại hệ thống khi cài vào máy.",
      "Làm cho máy tính bị tốn điện hơn.",
      "Vi phạm thuần phong mỹ tục.",
      "Không in được tài liệu ra giấy.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 368,
    q: "Trong bảo mật email, các giao thức xác thực tên miền gửi thư như SPF, DKIM, DMARC có tác dụng chính là gì?",
    options: [
      "Giúp email gửi đi nhanh gấp đôi bình thường.",
      "Ngăn chặn kẻ giả mạo tên miền của công ty để gửi email lừa đảo (giả mạo email nội bộ hoặc email đối tác).",
      "Tự động dịch email sang tiếng nước ngoài.",
      "Nén dung lượng tệp đính kèm trong email.",
      "Xóa các email rác quảng cáo hàng ngày.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 369,
    q: 'Tính năng "Find My Device" (Tìm thiết bị của tôi) trên điện thoại hoặc máy tính xách tay phát huy tác dụng tốt nhất trong tình huống nào?',
    options: [
      "Khi máy bị hỏng phần cứng màn hình.",
      "Khi thiết bị bị BỎ QUÊN hoặc BỊ MẤT CẮP, giúp chủ nhân định vị vị trí trên bản đồ, phát âm thanh cảnh báo hoặc ra lệnh khóa/xóa dữ liệu từ xa để bảo vệ thông tin.",
      "Khi điện thoại bị hết pin ngột ngạt.",
      "Khi bạn quên mật khẩu mở khóa màn hình.",
      "Khi cần kết nối máy với máy in không dây.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 370,
    q: "Tại sao các chuyên gia an ninh mạng khuyến cáo KHÔNG NÊN cắm các loại USB lạ nhặt được ngoài đường hoặc quà tặng không rõ nguồn gốc vào máy tính làm việc?",
    options: [
      "Vì USB đó có thể bị nặng cân làm gãy cổng cắm.",
      "Vì USB có thể chứa mã độc phần cứng (Rubber Ducky) tự động gõ lệnh cài mã độc vào máy ngay khi cắm vào mà người dùng không kịp trở tay.",
      "Vì USB cũ làm máy tính bị nhiễm từ tính màn hình.",
      "Vì USB không tương thích với cổng USB 3.0.",
      "Vì dễ làm hỏng pin của máy tính.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 371,
    q: "Khi lướt mạng xã hội, bạn đọc được một bài viết giật gân có tiêu đề cực kỳ sốc nhưng khi đọc nội dung bên trong thì hoàn toàn không đúng như tiêu đề, hoặc đưa tin thất thiệt câu view. Loại thông tin này được gọi là gì?",
    options: [
      "Deepfake",
      "Clickbait (Câu nhử chuột / Giật tít câu view)",
      "Spyware",
      "Phishing link",
      "Open data",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 372,
    q: "Quy tắc vàng trong việc quản lý mật khẩu cá nhân và doanh nghiệp là gì?",
    options: [
      "Đặt một mật khẩu duy nhất thật dễ nhớ cho tất cả mọi tài khoản từ năm này sang năm khác.",
      "Dùng ngày sinh nhật của mình làm mật khẩu cho an toàn.",
      "Sử dụng mật khẩu mạnh (dài trên 12 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt), KHÔNG DÙNG CHUNG mật khẩu giữa các tài khoản quan trọng và thay đổi định kỳ.",
      "Viết mật khẩu dán trực tiếp lên màn hình máy tính để đỡ quên.",
      "Chia sẻ mật khẩu cho đồng nghiệp thân thiết để nhờ quản lý hộ.",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 373,
    q: 'Khi bạn nhận được một email từ nhà cung cấp dịch vụ yêu cầu "Bấm vào đây để cập nhật ngay thông tin tài khoản ngân hàng nếu không tài khoản sẽ bị khóa sau 24 giờ", dấu hiệu nào cho thấy đây rõ ràng là email lừa đảo?',
    options: [
      "Email trình bày rất đẹp mắt.",
      "Ngôn từ mang tính thúc ép, tạo sự hoảng sợ kết hợp với đường link dẫn tới một tên miền lạ không phải của ngân hàng chính thống.",
      "Email gửi đến vào giờ hành chính.",
      "Email có kèm theo logo chính hãng.",
      "Email có chữ ký của giám đốc.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 374,
    q: 'Khi cơ quan hoặc công ty phát hành chính sách "BYOD" (Bring Your Own Device - Mang thiết bị cá nhân đi làm), thách thức lớn nhất về mặt an toàn thông tin là gì?',
    options: [
      "Nhân viên không thích dùng điện thoại cá nhân.",
      "Khó kiểm soát việc bảo mật dữ liệu công ty khi nó được lưu trữ và truy cập trên các thiết bị cá nhân vốn có thể thiếu các tiêu chuẩn bảo mật đồng bộ.",
      "Làm tốn tiền mua máy tính của công ty.",
      "Làm giảm tốc độ mạng Wifi văn phòng.",
      "Làm hỏng các phần mềm ERP của công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 375,
    q: "Việc mã hóa dữ liệu đầu cuối (End-to-End Encryption) trên các ứng dụng nhắn tin như Zalo, WhatsApp, Telegram mang lại ý nghĩa gì?",
    options: [
      "Giúp tin nhắn gửi đi nhanh hơn 5 lần.",
      "Đảm bảo chỉ có người gửi và người nhận mới đọc được nội dung tin nhắn, ngay cả nhà cung cấp dịch vụ hay kẻ trung gian chặn bắt gói tin trên đường truyền cũng không thể giải mã đọc được.",
      "Cho phép thu hồi tin nhắn trong vòng 1 tuần.",
      "Tự động xóa tin nhắn sau khi đọc xong.",
      "Giúp tin nhắn không bị tốn dung lượng 4G.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 376,
    q: 'Hành vi "Typosquatting" (Đánh tráo tên miền dựa trên lỗi gõ phím) của kẻ lừa đảo nhằm mục đích gì?',
    options: [
      "Đăng ký các tên miền gần giống hệt tên miền chính thức nhưng cố tình gõ sai chính tả một ký tự (ví dụ: googlet.com thay vì google.com) để lừa người dùng gõ nhầm vào trang web giả mạo.",
      "Đánh sập máy chủ của đối thủ cạnh tranh.",
      "Tăng tốc độ truy cập trang web lên gấp nhiều lần.",
      "Mua bán các tên miền đẹp với giá cao.",
      "Xóa lịch sử tìm kiếm của người dùng.",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 377,
    q: "Tại sao các chuyên gia khuyến cáo người dùng không nên lưu trữ ảnh chụp màn hình chứa ảnh thẻ căn cước công dân, số thẻ ngân hàng hoặc mật khẩu trong thư viện ảnh công khai (như đồng bộ tự động lên Album đám mây không bảo mật)?",
    options: [
      "Vì làm tốn dung lượng bộ nhớ điện thoại.",
      "Vì nếu tài khoản đám mây của bạn bị kẻ gian xâm nhập (do lộ mật khẩu), toàn bộ những hình ảnh nhạy cảm và giấy tờ tùy thân đó sẽ bị đánh cắp, dẫn đến nguy cơ bị vay tiền giả mạo hoặc chiếm đoạt danh tính.",
      "Vì làm giảm chất lượng điểm ảnh của giấy tờ.",
      "Vì các ứng dụng không cho phép xem lại ảnh cũ.",
      "Vì vi phạm luật giao thông đường bộ.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 378,
    q: 'Trong hệ thống mạng máy tính của doanh nghiệp, thiết bị "Firewall" (Tường lửa) đóng vai trò phòng thủ gì?',
    options: [
      "Dùng để dập tắt đám cháy phòng server.",
      "Kiểm soát và lọc toàn bộ lưu lượng truy cập mạng ra/vào doanh nghiệp dựa trên các quy tắc bảo mật đã định sẵn, nhằm ngăn chặn các truy cập trái phép và mã độc từ bên ngoài.",
      "Phát ra sóng vô tuyến để kết nối wifi.",
      "Tăng tốc độ in ấn tài liệu của máy in mạng.",
      "Lưu trữ dữ liệu dự phòng cho toàn công ty.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 379,
    q: "Khi bạn mua một chiếc định vị thông minh (như Apple AirTag) bỏ vào cốp xe để chống trộm, rủi ro về quyền riêng tư (Stalking/Theo dõi trái phép) có thể xảy ra nếu:",
    options: [
      "Thiết bị bị hết pin giữa đường.",
      "Kẻ gian lén bỏ một thiết bị định vị lạ vào đồ đạc của bạn mà bạn không hề hay biết để theo dõi lịch trình di chuyển của bạn.",
      "Bạn quên bật kết nối Bluetooth trên điện thoại.",
      "Bạn làm rơi thiết bị xuống nước.",
      "Thiết bị phát ra tiếng kêu quá to.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 380,
    q: "Thói quen bảo mật nào sau đây là quan trọng nhất khi bạn không sử dụng máy tính xách tay trong khoảng thời gian ngắn tại nơi làm việc (ví dụ đi họp hoặc đi ăn trưa)?",
    options: [
      "Gập màn hình lại ngay lập tức mà không cần khóa.",
      "Nhấn tổ hợp phím Windows + L để khóa màn hình (Lock screen) ngay lập tức.",
      "Rút phích cắm ổ điện của máy tính.",
      "Tắt toàn bộ ứng dụng đang mở rồi tắt nguồn hẳn máy.",
      "Nhờ đồng nghiệp ngồi canh giữ máy tính hộ.",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 381,
    q: "Trong Microsoft Word, để chèn một bảng biểu (Table) vào văn bản, người dùng truy cập vào thẻ nào trên thanh Ribbon?",
    options: ["Home", "Insert", "Layout", "View", "References"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 382,
    q: "Trong Microsoft Excel, hàm nào được sử dụng để tính tổng của một vùng dữ liệu theo một điều kiện cho trước?",
    options: ["COUNTIF", "SUM", "SUMIF", "AVERAGEIF", "VLOOKUP"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 383,
    q: "Trong Microsoft PowerPoint, chế độ hiển thị nào cho phép người dùng xem tất cả các trang chiếu dưới dạng các hình thu nhỏ (thumbnails)?",
    options: [
      "Normal View",
      "Slide Sorter View",
      "Reading View",
      "Notes Page View",
      "Master View",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 384,
    q: 'Khái niệm "Chuyển đổi số" (Digital Transformation) tập trung chủ yếu vào yếu tố nào sau đây?',
    options: [
      "Mua sắm thêm nhiều máy tính cho cơ quan",
      "Số hóa toàn bộ tài liệu giấy sang file PDF",
      "Thay đổi tổng thể và toàn diện của cá nhân, tổ chức về cách sống, cách làm việc dựa trên công nghệ số",
      "Nâng cấp đường truyền Internet tốc độ cao",
      "Cài đặt phần mềm diệt virus cho tất cả máy tính",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "C"],
  },
  {
    id: 385,
    q: 'Mục tiêu cốt lõi của phong trào "Bình dân học vụ số" tại Việt Nam là gì?',
    options: [
      "Phổ cập kỹ năng số cơ bản cho toàn dân, giúp mọi người dân tiếp cận và sử dụng dịch vụ số",
      "Đào tạo toàn bộ người dân trở thành lập trình viên chuyên nghiệp",
      "Bắt buộc mọi người dân phải mua smartphone đắt tiền",
      "Cung cấp máy tính miễn phí cho 100% hộ gia đình",
      "Thay thế hoàn toàn giáo dục truyền thống bằng hình thức học trực tuyến",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 386,
    q: "Tổ công nghệ số cộng đồng ở cấp thôn/bản/tổ dân phố có vai trò chính là gì?",
    options: [
      "Thu thuế dịch vụ Internet của người dân",
      '"Đi từng ngõ, gõ từng nhà" hướng dẫn người dân cài đặt và sử dụng các ứng dụng, dịch vụ số',
      "Mua bán các thiết bị điện tử cũ",
      "Sửa chữa máy tính và điện thoại hỏng cho người dân",
      "Cung cấp dịch vụ lắp đặt mạng cáp quang",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 387,
    q: "Trong Microsoft Excel, phím tắt nào dùng để cố định tọa độ ô (chuyển đổi giữa địa chỉ tương đối và tuyệt đối) khi lập công thức?",
    options: ["F2", "F4", "F8", "F12", "Ctrl + F4"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 388,
    q: "Dịch vụ công trực tuyến toàn trình là dịch vụ như thế nào?",
    options: [
      "Chỉ cho phép người dân tải mẫu đơn về in ra giấy",
      "Người dân phải nộp hồ sơ trực tiếp tại cơ quan nhà nước",
      "Bảo đảm cung cấp toàn bộ thông tin về thủ tục hành chính",
      "Cho phép người dân thực hiện toàn bộ quá trình nộp hồ sơ, thanh toán lệ phí và nhận kết quả trực tuyến",
      "Người dân nộp hồ sơ trực tuyến nhưng bắt buộc nhận kết quả tại trụ sở",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 389,
    q: "Khi nhận được một tin nhắn nhắn tin trúng thưởng kèm liên kết lạ qua SMS hoặc Zalo, người dân nên làm gì để đảm bảo an toàn thông tin?",
    options: [
      "Nhấp vào liên kết ngay để nhận thưởng",
      "Cung cấp mã OTP ngân hàng để xác minh danh tính",
      "Bỏ qua, không nhấp vào liên kết và cảnh báo người thân về hình thức lừa đảo",
      "Chuyển tiếp tin nhắn cho tất cả bạn bè trong danh bạ",
      "Gọi điện theo số máy trong tin nhắn để cung cấp thông tin cá nhân",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 390,
    q: "Trong Microsoft Word, tính năng Mail Merge (Trộn thư) được sử dụng hiệu quả nhất trong trường hợp nào?",
    options: [
      "Tạo bảng chỉ mục cho cuốn sách",
      "Gửi một biểu mẫu giấy mời đến hàng trăm khách hàng với thông tin cá nhân hóa riêng biệt",
      "Sửa lỗi chính tả tự động trong văn bản",
      "Tạo hiệu ứng chuyển trang cho tài liệu",
      "Xuất file Word sang định dạng âm thanh",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 391,
    q: "Tài khoản định danh điện tử VNeID do cơ quan nào tại Việt Nam phát hành và quản lý?",
    options: [
      "Bộ Thông tin và Truyền thông",
      "Bộ Công An",
      "Bộ Tư pháp",
      "Bộ Giáo dục và Đào tạo",
      "Văn phòng Chính phủ",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 392,
    q: "Trong Microsoft Excel, khi nhập công thức =AVERAGE(10, 20, 30), kết quả trả về là bao nhiêu?",
    options: ["10", "20", "30", "60", "Error"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 393,
    q: 'Khái niệm "Điện toán đám mây" (Cloud Computing) cho phép người dùng thực hiện việc gì?',
    options: [
      "Chỉ lưu trữ dữ liệu trên ổ cứng di động",
      "Truy cập và sử dụng dữ liệu, phần mềm thông qua kết nối Internet mà không cần lưu trữ cục bộ",
      "Dự báo thời tiết chính xác tuyệt đối",
      "Tăng tốc độ phần cứng máy tính mà không cần mạng",
      "Kết nối các thiết bị không dây qua sóng vô tuyến ngắn",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 394,
    q: 'Yếu tố nào sau đây được coi là "nhiên liệu" chính cho nền kinh tế số và hoạt động chuyển đổi số?',
    options: [
      "Dữ liệu số",
      "Giấy in",
      "Máy in siêu tốc",
      "Đĩa CD/DVD",
      "Dây cáp mạng",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 395,
    q: "Trong Microsoft PowerPoint, phím tắt nào được sử dụng để bắt đầu trình chiếu từ slide đầu tiên?",
    options: ["F1", "F5", "Shift + F5", "Ctrl + F5", "Esc"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 396,
    q: "Để đăng ký tài khoản trên Cổng Dịch vụ công Quốc gia, người dân có thể sử dụng phương thức xác thực nào sau đây?",
    options: [
      "Thuê bao di động chính chủ (đăng ký bằng CCCD)",
      "Thẻ ATM không chính chủ",
      "Địa chỉ Email cá nhân chưa xác thực",
      "Thẻ học sinh/sinh viên",
      "Số tài khoản mạng xã hội vô danh",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 397,
    q: "Trong Microsoft Word, tổ hợp phím Ctrl + Shift + C có chức năng gì?",
    options: [
      "Sao chép đoạn văn bản được chọn",
      "Sao chép định dạng (Format Painter) của đoạn văn bản được chọn",
      "Căn giữa đoạn văn bản",
      "Chèn ký tự đặc biệt",
      "Xóa định dạng của văn bản",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 398,
    q: "Trong các ứng dụng sau, ứng dụng nào hỗ trợ thanh toán không dùng tiền mặt phổ biến tại Việt Nam?",
    options: [
      "Microsoft Word",
      "VNPT Money / Viettel Money / Momo",
      "Google Drive",
      "Canva",
      "Zoom Meeting",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 399,
    q: "Trong Microsoft Excel, biểu tượng ### xuất hiện trong một ô có ý nghĩa gì?",
    options: [
      "Công thức bị sai cú pháp",
      "Ô đó chứa dữ liệu văn bản quá dài",
      "Độ rộng của cột không đủ để hiển thị hết giá trị số hoặc ngày tháng",
      "Ô đó bị khóa không cho chỉnh sửa",
      "Ô dữ liệu bị trống",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 400,
    q: "Mật khẩu nào sau đây được coi là có độ bảo mật cao nhất?",
    options: [
      "12345678",
      "qwertyuiop",
      "nguyenvana1990",
      "Th@nhCo2026!",
      "password",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 401,
    q: 'Thuật ngữ "Dữ liệu mở" (Open Data) trong cơ quan nhà nước nghĩa là gì?',
    options: [
      "Dữ liệu mà bất kỳ ai cũng có thể tự do truy cập, sử dụng, khai thác và chia sẻ",
      "Dữ liệu mật của quốc gia",
      "Dữ liệu cá nhân của người dân",
      "Dữ liệu chỉ dành cho cán bộ cấp cao",
      "Dữ liệu phải mua bằng tiền mặt",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 402,
    q: "Trong Microsoft Word, để tạo mục lục tự động cho tài liệu, người dùng cần định dạng các tiêu đề bằng công cụ nào?",
    options: [
      "Font Size",
      "Text Highlight Color",
      "Styles (Heading 1, Heading 2...)",
      "Paragraph Alignment",
      "Bullet and Numbering",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 403,
    q: "Chữ ký số cá nhân có giá trị pháp lý tương đương với yếu tố nào trong đời thực?",
    options: [
      "Chữ ký tay của cá nhân",
      "Dấu vân tay khi làm thủ tục hành chính",
      "Ảnh chụp chân dung",
      "Thẻ căn cước công dân gắn chíp",
      "Giấy khai sinh",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 404,
    q: 'Trong Microsoft Excel, hàm IF(5 > 3, "Đúng", "Sai") sẽ trả về kết quả là gì?',
    options: ["5", "3", "Đúng", "Sai", "TRUE"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 405,
    q: 'Khi tham gia môi trường số, nguyên tắc "Khai báo thông tin tối thiểu" giúp người dân phòng tránh rủi ro gì?',
    options: [
      "Tăng dung lượng bộ nhớ điện thoại",
      "Lộ lọt thông tin cá nhân và bị can thiệp, lừa đảo",
      "Mất kết nối Wifi",
      "Hỏng thiết bị phần cứng",
      "Chậm tốc độ tải trang web",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 406,
    q: "Ứng dụng Sổ sức khỏe điện tử giúp người dân thực hiện việc gì?",
    options: [
      "Mua sắm vật tư y tế giá rẻ",
      "Quản lý thông tin sức khỏe, lịch sử khám chữa bệnh và tiêm chủng của bản thân",
      "Tự chẩn đoán và điều trị bệnh phức tạp",
      "Thanh toán tiền điện thoại hàng tháng",
      "Đăng ký vay vốn ngân hàng",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 407,
    q: 'Trong Microsoft PowerPoint, tính năng "Transition" dùng để làm gì?',
    options: [
      "Tạo hiệu ứng xuất hiện cho từng đối tượng (chữ, hình ảnh) trong slide",
      "Tạo hiệu ứng chuyển tiếp giữa các trang chiếu (slides)",
      "Thay đổi màu nền của toàn bộ bài trình chiếu",
      "Chèn âm thanh vào video",
      "Kiểm tra lỗi chính tả tiếng Anh",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 408,
    q: "Để tra cứu thông tin quá trình đóng Bảo hiểm xã hội trên điện thoại, người dân sử dụng ứng dụng chính thức nào?",
    options: ["VssID", "VNeID", "PC-COVID", "Zalo", "Gmail"],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 409,
    q: "Trong Microsoft Excel, biểu đồ dạng tròn (Pie Chart) thích hợp nhất để thể hiện dữ liệu dạng nào?",
    options: [
      "Biến động của dữ liệu theo thời gian",
      "Tỷ lệ phần trăm các thành phần so với tổng thể",
      "Mối tương quan giữa hai biến số",
      "So sánh doanh thu của 50 chi nhánh",
      "Liệt kê danh sách nhân sự",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 410,
    q: 'Khái niệm "Xã hội số" (Digital Society) bao gồm yếu tố cốt lõi nào sau đây?',
    options: [
      "Công dân số, văn hóa số và thể chế số",
      "Chỉ bao gồm các công ty sản xuất phần mềm",
      "Việc ngưng sử dụng hoàn toàn giấy tờ trong sinh hoạt",
      "Việc bắt buộc mọi người dân làm việc từ xa",
      "Sử dụng robot thay thế 100% lao động con người",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 411,
    q: "Trong Microsoft Word, tổ hợp phím nào dùng để bật/tắt cửa sổ tìm kiếm và thay thế (Find and Replace)?",
    options: ["Ctrl + F", "Ctrl + H", "Ctrl + K", "Ctrl + G", "Ctrl + N"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 412,
    q: 'Hình thức "Phishing" trong an toàn thông tin mạng là gì?',
    options: [
      "Tấn công vật lý vào máy chủ",
      "Hình thức lừa đảo giả mạo thương hiệu/tổ chức uy tín để chiếm đoạt thông tin nhạy cảm của người dùng",
      "Cài đặt phần mềm diệt virus tự động",
      "Việc nâng cấp băng thông mạng gia đình",
      "Dịch thuật tự động tài liệu trực tuyến",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 413,
    q: "Trong Excel, hàm COUNTA(A1:A5) dùng để làm gì?",
    options: [
      "Đếm số ô chứa dữ liệu kiểu số trong vùng A1:A5",
      "Đếm tất cả các ô không trống (chứa bất kỳ dữ liệu nào) trong vùng A1:A5",
      "Đếm các ô bị trống trong vùng A1:A5",
      "Tính tổng các ô trong vùng A1:A5",
      "Tìm giá trị lớn nhất trong vùng A1:A5",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 414,
    q: "Mã QR Code trên thẻ Căn cước công dân gắn chíp chứa những thông tin gì?",
    options: [
      "Toàn bộ tài sản ngân hàng của người dân",
      "Thông tin nhân thân cơ bản như số CCCD/CMND cũ, họ tên, ngày sinh, giới tính, địa chỉ",
      "Mật khẩu tài khoản mạng xã hội",
      "Lịch sử giao dịch mua sắm",
      "Danh bạ điện thoại gia đình",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 415,
    q: 'Trong Microsoft PowerPoint, tính năng "Animation" áp dụng cho đối tượng nào?',
    options: [
      "Toàn bộ slide chiếu",
      "Các đối tượng cụ thể trên slide (văn bản, hình ảnh, bảng biểu, hình khối)",
      "Tệp văn bản Word đính kèm",
      "Máy in kết nối với máy tính",
      "Cấu hình độ phân giải màn hình",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 416,
    q: "Việc đọc báo qua các trang tin chính thống và nền tảng số giúp người dân điều gì trong Bình dân học vụ số?",
    options: [
      "Tiếp cận thông tin chính xác, kịp thời và nâng cao văn hóa số",
      "Tiết kiệm dung lượng pin tối đa",
      "Tự động thanh toán các hóa đơn sinh hoạt",
      "Tăng tốc độ soạn thảo văn bản",
      "Bỏ qua việc xác thực tài khoản",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 417,
    q: 'Trong Microsoft Word, tính năng "Track Changes" có công dụng chính là gì?',
    options: [
      "Tự động lưu văn bản lên Google Drive",
      "Theo dõi, ghi lại các chỉnh sửa (thêm, xóa, thay đổi định dạng) thực hiện trên tài liệu",
      "Đếm tổng số từ trong bài văn",
      "Dịch văn bản sang tiếng nước ngoài",
      "Tạo chữ nghệ thuật WordArt",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 418,
    q: 'Khái niệm "Kinh tế số" (Digital Economy) được hiểu là gì?',
    options: [
      "Mọi hoạt động kinh tế có sử dụng thông tin số và kiến thức số làm nhân tố sản xuất chiến lược",
      "Việc mua bán linh kiện máy tính trực tiếp tại cửa hàng",
      "Hoạt động in tiền polymer của Ngân hàng Nhà nước",
      "Các giao dịch đổi hàng lấy hàng không qua tiền mặt",
      "Việc quản lý sổ sách kế toán bằng tay",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 419,
    q: 'Trong Microsoft Excel, công thức =CONCATENATE("Bình dân ", "học vụ số") hoặc ="Bình dân " & "học vụ số" trả về kết quả nào?',
    options: [
      "Bình dân",
      "học vụ số",
      "Bình dân học vụ số",
      "BÌNH DÂN HỌC VỤ SỐ",
      "Error",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 420,
    q: "Mã xác thực OTP (One Time Password) gửi qua SMS thường có đặc điểm gì?",
    options: [
      "Dùng được vĩnh viễn",
      "Chỉ có hiệu lực một lần và trong một khoảng thời gian ngắn",
      "Có thể chia sẻ công khai cho bất kỳ ai",
      "Giống hệt mật khẩu đăng nhập ứng dụng",
      "Do người dùng tự thiết lập",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 421,
    q: "Khi sử dụng mạng Wi-Fi công cộng không có mật khẩu tại quán cà phê, người dùng nên tránh làm việc gì?",
    options: [
      "Đọc báo trực tuyến",
      "Xem các video giải trí",
      "Thực hiện các giao dịch ngân hàng trực tuyến hoặc nhập thông tin nhạy cảm",
      "Tìm kiếm bản đồ đường đi",
      "Xem dự báo thời tiết",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 422,
    q: "Trong Microsoft Word, phím tắt Ctrl + Z thực hiện chức năng gì?",
    options: [
      "Sao chép đoạn văn bản",
      "Lặp lại thao tác vừa làm",
      "Hoàn tác (hủy bỏ) thao tác vừa thực hiện",
      "Dán văn bản vừa sao chép",
      "Lưu tài liệu",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 423,
    q: "Nền tảng học trực tuyến (MOOCs) mang lại lợi ích gì cho người dân trong phong trào Bình dân học vụ số?",
    options: [
      "Cung cấp không gian lưu trữ ảnh không giới hạn",
      "Cho phép học tập mọi lúc, mọi nơi với các khóa học đa dạng kỹ năng số",
      "Tự động cập nhật hệ điều hành máy tính",
      "Giúp tăng dung lượng pin điện thoại",
      "Thay thế toàn bộ sách in truyền thống",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 424,
    q: "Trong Excel, hàm VLOOKUP được dùng để làm gì?",
    options: [
      "Tìm kiếm một giá trị theo cột và trả về giá trị tương ứng ở cột khác",
      "Tìm kiếm một giá trị theo hàng ngang",
      "Sắp xếp dữ liệu theo thứ tự tăng dần",
      "Lọc các dữ liệu bị trùng lặp",
      "Đếm số ô thỏa mãn điều kiện",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 425,
    q: 'Khái niệm "Công dân số" (Digital Citizen) chỉ người như thế nào?',
    options: [
      "Người sở hữu nhiều thiết bị công nghệ đắt tiền",
      "Người có khả năng sử dụng công nghệ số để tham gia vào các hoạt động xã hội một cách an toàn, hiệu quả và có trách nhiệm",
      "Người làm việc tại các công ty công nghệ thông tin",
      "Người chơi game trực tuyến thành thạo",
      "Người có tài khoản mạng xã hội đạt lượng theo dõi lớn",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 426,
    q: 'Trong Microsoft PowerPoint, tính năng "Slide Master" được dùng để làm gì?',
    options: [
      "Tạo hiệu ứng hoạt hình nâng cao",
      "Thiết lập định dạng chung (font chữ, màu sắc, logo...) nhất quán cho toàn bộ các slide trong bài",
      "Xuất bài trình chiếu sang định dạng âm thanh",
      "Đếm tổng số từ trên bài trình chiếu",
      "Tự động đọc văn bản trên slide",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 427,
    q: "Để bảo vệ tài khoản mạng xã hội hoặc ứng dụng quan trọng, người dân nên bật tính năng an toàn nào?",
    options: [
      "Đăng nhập tự động không cần mật khẩu",
      "Xác thực 2 bước (2FA / 2-Factor Authentication)",
      "Đặt mật khẩu ngắn dễ nhớ",
      "Cho phép ứng dụng truy cập toàn bộ danh bạ",
      "Lưu mật khẩu trên máy tính công cộng",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 428,
    q: "Trong Microsoft Word, để ngắt trang văn bản ngay tại vị trí con trỏ chuột, ta dùng tổ hợp phím nào?",
    options: [
      "Shift + Enter",
      "Ctrl + Enter",
      "Alt + Enter",
      "Ctrl + Shift + Enter",
      "Tab + Enter",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 429,
    q: "Mạng 5G có ưu điểm vượt trội nào so với mạng 4G?",
    options: [
      "Tốc độ truyền tải dữ liệu cao hơn nhiều và độ chậm (độ trễ) cực thấp",
      "Bắt buộc người dùng không cần đăng ký gói cước",
      "Phủ sóng tốt hơn dưới lòng đất mà không cần trạm phát",
      "Giúp điện thoại không bao giờ bị hết pin",
      "Thay thế hoàn toàn kết nối Bluetooth",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 430,
    q: "Trong Microsoft Excel, công thức =MAX(12, 45, 23, 8, 30) cho kết quả là bao nhiêu?",
    options: ["8", "12", "23", "30", "45"],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 431,
    q: "Trong Microsoft Word, để điều chỉnh khoảng cách giữa các dòng trong một đoạn văn bản (Line Spacing), người dùng thao tác trong nhóm công cụ nào của thẻ Home?",
    options: ["Font", "Paragraph", "Styles", "Editing", "Clipboard"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 432,
    q: "Trong Microsoft Excel, hàm nào được sử dụng để đếm số lượng các ô thỏa mãn một điều kiện nhất định trong vùng dữ liệu?",
    options: ["COUNT", "COUNTA", "COUNTIF", "SUMIF", "AVERAGEIF"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 433,
    q: "Trong Microsoft PowerPoint, thao tác nào cho phép nhân đôi (duplicate) một slide đang được chọn?",
    options: [
      "Ctrl + C rồi Ctrl + V",
      "Ctrl + D",
      "Right click -> Duplicate Slide",
      "Tất cả các phương án A, B, C đều đúng",
      "Chỉ phương án B và C đúng",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 434,
    q: 'Phong trào "Bình dân học vụ số" áp dụng phương châm nào sau đây để phổ cập kỹ năng số đến người dân nhanh chóng và hiệu quả?',
    options: [
      '"Học đi đôi với hành, đi từng ngõ, gõ từng nhà, hướng dẫn từng người"',
      '"Chỉ đào tạo lý thuyết trực tuyến tập trung"',
      '"Yêu cầu người dân tự mua tài liệu về nghiên cứu"',
      '"Chỉ hướng dẫn cho thanh thiếu niên, không hướng dẫn người lớn tuổi"',
      '"Bắt buộc học viên phải trải qua kỳ thi sát hạch lấy chứng chỉ quốc tế"',
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 435,
    q: 'Trong an toàn thông tin mạng, thuật ngữ "Malware" dùng để chỉ đối tượng nào?',
    options: [
      "Phần mềm quản lý cơ sở dữ liệu",
      "Các loại phần mềm độc hại (virus, trojan, spyware...) gây hại cho thiết bị",
      "Thiết bị mở rộng sóng Wi-Fi",
      "Chuột máy tính không dây",
      "Phần mềm tối ưu hóa dung lượng ổ cứng",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 436,
    q: 'Khái niệm "Chính phủ số" (Digital Government) hướng tới mục tiêu chính nào sau đây?',
    options: [
      "Giảm bớt số lượng máy tính tại các cơ quan nhà nước",
      "Cung cấp dịch vụ công chất lượng cao hơn, vận hành dựa trên dữ liệu và công nghệ số",
      "Thay thế toàn bộ cán bộ công chức bằng trí tuệ nhân tạo",
      "Bắt buộc người dân phải trả phí cho mọi dịch vụ hành chính",
      "Đóng cửa toàn bộ các trung tâm hành chính công trực tiếp",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 437,
    q: 'Trong Microsoft Excel, công thức =LEN("Bình dân học vụ số") sẽ trả về kết quả là bao nhiêu (tính cả khoảng trắng)?',
    options: ["15", "16", "17", "18", "19"],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 438,
    q: "Để thanh toán tiền điện, nước hàng tháng trực tuyến an toàn mà không lo bị lừa đảo, người dân nên chọn kênh thanh toán nào?",
    options: [
      "Chuyển tiền vào tài khoản cá nhân của một người tự xưng là thu ngân qua tin nhắn SMS",
      "Bấm vào đường link lạ được gửi qua email yêu cầu nộp tiền điện khẩn cấp",
      "Trực tiếp trên ứng dụng ngân hàng (Mobile Banking) hoặc các ví điện tử chính thức",
      "Gửi tiền mặt qua bưu điện cho một cá nhân không rõ địa chỉ",
      "Cung cấp mã OTP cho người gọi điện tự xưng là cán bộ công ty điện lực",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 439,
    q: "Trong Microsoft Word, để đổi toàn bộ chữ thường thành chữ hoa cho đoạn văn bản được chọn, người dùng có thể sử dụng tổ hợp phím tắt nào?",
    options: [
      "Shift + F3",
      "Ctrl + Shift + A",
      "Ctrl + F3",
      "Alt + F3",
      "Cả A và B đều có thể sử dụng",
    ],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 440,
    q: "Trong các định dạng tệp sau, định dạng nào thường được dùng cho tài liệu chỉ đọc, giữ nguyên định dạng trên mọi thiết bị?",
    options: [".docx", ".xlsx", ".pdf", ".txt", ".pptx"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 441,
    q: 'Khi tham gia các nền tảng mạng xã hội, hành vi nào sau đây thể hiện văn hóa ứng xử chuẩn mực của "Công dân số"?',
    options: [
      "Chia sẻ tin đồn chưa qua kiểm chứng để thu hút tương tác",
      "Công kích, xúc phạm người khác khi có ý kiến trái chiều",
      "Kiểm chứng thông tin trước khi chia sẻ và tôn trọng bản quyền, quyền riêng tư của người khác",
      "Sử dụng tài khoản ảo để đăng tải nội dung sai sự thật",
      "Tự ý lấy ảnh cá nhân của người khác để làm ảnh đại diện",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 442,
    q: "Trong Microsoft Excel, khi muốn tìm giá trị nhỏ nhất trong một dải ô từ B2 đến B10, ta dùng hàm nào?",
    options: [
      "=SMALL(B2:B10)",
      "=MIN(B2:B10)",
      "=LOW(B2:B10)",
      "=FEWEST(B2:B10)",
      "=BOTTOM(B2:B10)",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 443,
    q: 'Nền tảng "Căn cước công dân gắn chíp" tích hợp thông tin của những loại giấy tờ nào sau đây giúp đơn giản hóa thủ tục hành chính?',
    options: [
      "Thẻ Bảo hiểm y tế, Giấy phép lái xe, Đăng ký xe",
      "Sổ tiết kiệm ngân hàng cá nhân",
      "Hóa đơn mua sắm đồ điện tử",
      "Hợp đồng lao động với công ty tư nhân",
      "Thẻ thành viên câu lạc bộ thể thao",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 444,
    q: 'Trong Microsoft PowerPoint, tính năng "Presenter View" hỗ trợ người trình chiếu điều gì?',
    options: [
      "Tự động dịch lời nói sang tiếng Anh",
      "Xem trước slide tiếp theo, ghi chú cá nhân và đồng hồ thời gian trong khi khán giả chỉ thấy slide hiện tại",
      "Tự động thay đổi màu sắc của trang chiếu",
      "Khóa màn hình không cho người xem theo dõi",
      "Phát nhạc nền tự động",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 445,
    q: "Việc đăng ký và sử dụng tài khoản Dịch vụ công Quốc gia mang lại lợi ích trực tiếp nào cho người dân?",
    options: [
      "Tiết kiệm thời gian, chi phí đi lại và theo dõi được tiến độ giải quyết hồ sơ thủ tục hành chính",
      "Được miễn hoàn toàn các khoản thuế thu nhập cá nhân",
      "Được cấp máy tính bảng miễn phí từ nhà nước",
      "Tự động được nâng cấp đường truyền Internet gia đình",
      "Không cần phải kê khai bất kỳ thông tin nào khi làm thủ tục",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 446,
    q: "Trong Microsoft Word, phím tắt Ctrl + E có chức năng gì cho đoạn văn bản đang chọn?",
    options: [
      "Căn lề trái",
      "Căn lề phải",
      "Căn giữa",
      "Căn đều hai bên",
      "Thụt lề dòng đầu tiên",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 447,
    q: 'Công nghệ "Trí tuệ nhân tạo" (AI - Artificial Intelligence) được ứng dụng phổ biến trong việc gì hiện nay?',
    options: [
      "Tự động hóa xử lý dữ liệu, nhận diện khuôn mặt và trợ lý ảo hỗ trợ người dùng",
      "Thay thế các thiết bị phần cứng máy tính",
      "Tăng dung lượng pin cho các thiết bị di động",
      "Dọn dẹp vệ sinh vật lý cho bàn làm việc",
      "Sản xuất dây cáp quang mạng",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 448,
    q: 'Trong Microsoft Excel, kết quả của công thức =UPPER("binh dan hoc vu so") là gì?',
    options: [
      "Binh Dan Hoc Vu So",
      "BINH DAN HOC VU SO",
      "binh dan hoc vu so",
      "Binh dan hoc vu so",
      "Error",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 449,
    q: "Để phòng tránh việc bị chiếm đoạt tài khoản Zalo/Facebook, người dùng KHÔNG nên làm điều nào sau đây?",
    options: [
      "Bật tính năng xác thực 2 lớp",
      "Đặt mật khẩu phức tạp gồm chữ, số và ký tự đặc biệt",
      "Nhấp vào các đường link nhận quà, bình chọn sắc đẹp lạ gửi qua tin nhắn",
      "Đăng xuất tài khoản khi dùng trên máy tính lạ",
      "Cập nhật ứng dụng lên phiên bản mới nhất",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 450,
    q: 'Thuật ngữ "IoT" (Internet of Things - Mạng lưới thiết bị kết nối Internet) chỉ điều gì?',
    options: [
      "Việc kết nối các máy tính văn phòng trong một phòng làm việc",
      "Mạng lưới các thiết bị thông minh (đồ gia dụng, xe cộ, cảm biến) được kết nối Internet để thu thập và chia sẻ dữ liệu",
      "Dịch vụ bán hàng trực tuyến toàn cầu",
      "Hệ thống mạng cáp quang biển",
      "Phần mềm diệt virus trên điện thoại",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 451,
    q: 'Trong Microsoft Word, chức năng "Find and Replace" (Ctrl + H) cho phép làm gì?',
    options: [
      "Tìm kiếm một cụm từ và thay thế bằng một cụm từ khác trong toàn bộ tài liệu",
      "Tìm kiếm file bị ẩn trong máy tính",
      "Thay thế font chữ của toàn bộ hệ điều hành",
      "Tìm kiếm hình ảnh trên mạng Internet",
      "Tự động sửa lỗi ngữ pháp tiếng Việt",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 452,
    q: "Trong Excel, giả sử ô A1 có giá trị 10, ô A2 có giá trị 20. Công thức =A1 + A2 * 2 cho kết quả là bao nhiêu?",
    options: ["60", "50", "40", "30", "80"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 453,
    q: "Khi nhận được cuộc gọi video giả mạo người thân (sử dụng công nghệ Deepfake) để vay tiền khẩn cấp, dấu hiệu nào giúp nhận biết lừa đảo?",
    options: [
      "Tín hiệu chập chờn, khuôn mặt bị đơ, giật, tiếng nói không khớp với chuyển động môi",
      "Yêu cầu chuyển tiền ngay vào một tài khoản ngân hàng đứng tên người lạ",
      "Cúp máy nhanh với lý do sóng yếu khi được hỏi các câu hỏi riêng tư",
      "Tất cả các dấu hiệu A, B, C đều đúng",
      "Chỉ có dấu hiệu A và B đúng",
    ],
    answer: 3,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 454,
    q: "Trong Microsoft PowerPoint, để chèn một video vào slide, người dùng truy cập thẻ nào?",
    options: ["Home", "Insert", "Design", "Transitions", "View"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 455,
    q: 'Phong trào "Bình dân học vụ số" tập trung vào việc nâng cao nhóm kỹ năng cơ bản nào cho người dân?',
    options: [
      "Lập trình phần mềm, quản trị cơ sở dữ liệu",
      "Kỹ năng sử dụng thiết bị số, truy cập Internet, sử dụng dịch vụ công trực tuyến, an toàn thông tin và thanh toán số",
      "Thiết kế vi mạch bán dẫn",
      "Lắp ráp và sửa chữa phần cứng máy tính",
      "Quản trị mạng doanh nghiệp",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 456,
    q: "Trong Microsoft Word, để tạo một bảng biểu gồm 3 cột và 4 hàng, thao tác đúng là gì?",
    options: [
      "Thẻ Insert -> Table -> Chọn 3x4 (3 columns x 4 rows)",
      "Thẻ Home -> Table -> Chọn 3x4",
      "Thẻ Layout -> Insert Table -> 4 columns x 3 rows",
      "Thẻ Design -> Table -> 3x4",
      "Thẻ View -> Table -> 3x4",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 457,
    q: 'Khái niệm "Hạ tầng số" bao gồm các thành phần cốt lõi nào?',
    options: [
      "Mạng viễn thông, mạng Internet, trung tâm dữ liệu và điện toán đám mây",
      "Đường giao thông nông thôn",
      "Hệ thống lưới điện quốc gia",
      "Các trụ sở làm việc của cơ quan nhà nước",
      "Hệ thống bưu chính truyền thống",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 458,
    q: "Trong Microsoft Excel, hàm ROUND(12.3456, 2) sẽ trả về kết quả nào?",
    options: ["12", "12.3", "12.35", "12.34", "12.346"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 459,
    q: 'Nền tảng "Bản đồ số" (như Google Maps, Vietbando) giúp người dân thực hiện tiện ích nào phổ biến nhất?',
    options: [
      "Tra cứu vị trí, tìm đường đi, đo khoảng cách và tìm kiếm địa điểm dịch vụ",
      "Đăng ký cấp hộ chiếu trực tuyến",
      "Kiểm tra số dư tài khoản ngân hàng",
      "Đọc tin tức thời sự hàng ngày",
      "Soạn thảo tài liệu văn bản",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 460,
    q: "Trong Microsoft PowerPoint, phím tắt Shift + F5 dùng để làm gì?",
    options: [
      "Bắt đầu trình chiếu từ slide đầu tiên",
      "Bắt đầu trình chiếu từ slide đang chọn (slide hiện tại)",
      "Thoát khỏi chế độ trình chiếu",
      "Dừng video đang phát trên slide",
      "Mở cửa sổ tìm kiếm",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 461,
    q: 'Trong Microsoft Word, công cụ "Header & Footer" nằm trong thẻ nào?',
    options: ["Home", "Insert", "Page Layout", "View", "References"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 462,
    q: "Biện pháp nào sau đây giúp bảo vệ dữ liệu cá nhân an toàn nhất khi lưu trữ trên các nền tảng đám mây?",
    options: [
      "Đặt mật khẩu đơn giản để tránh quên",
      "Bật xác thực hai yếu tố và không chia sẻ quyền truy cập công khai cho tệp chứa thông tin nhạy cảm",
      "Chia sẻ tài khoản cho nhiều người cùng dùng",
      "Không bao giờ cập nhật mật khẩu",
      "Tải tất cả tệp lên thư mục dùng chung công khai",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 463,
    q: "Trong Microsoft Excel, để gộp nhiều ô thành một ô duy nhất và căn giữa văn bản, ta dùng nút lệnh nào trên thẻ Home?",
    options: [
      "Wrap Text",
      "Merge & Center",
      "AutoSum",
      "Alignment",
      "Format Cells",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 464,
    q: '"Định danh điện tử" (eKYC) giúp các ngân hàng và tổ chức tài chính làm được điều gì?',
    options: [
      "Xác thực danh tính khách hàng từ xa qua internet mà không cần gặp mặt trực tiếp",
      "Miễn phí toàn bộ các khoản vay cho khách hàng",
      "Tự động gửi tiền mặt đến nhà khách hàng",
      "Tăng lãi suất tiền gửi lên gấp đôi",
      "Thay thế hoàn toàn tiền tệ bằng thẻ quà tặng",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 465,
    q: "Trong Microsoft Word, để thụt lề dòng đầu tiên của một đoạn văn bản tự động, cách chuẩn nhất là gì?",
    options: [
      "Nhấn phím Spacebar (dấu cách) nhiều lần",
      "Sử dụng thước đo (Ruler) kéo con trỏ First Line Indent hoặc thiết lập trong hộp thoại Paragraph",
      "Nhấn phím Enter",
      "Dùng công cụ Format Painter",
      "Đổi cỡ chữ lớn hơn",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 466,
    q: "Trong các loại mã độc sau, loại nào mã hóa dữ liệu của người dùng và yêu cầu trả tiền chuộc để lấy lại dữ liệu?",
    options: [
      "Spyware (mã độc gián điệp)",
      "Ransomware (mã độc tống tiền)",
      "Adware (mã độc quảng cáo)",
      "Rootkit",
      "Keylogger",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 467,
    q: 'Trong Microsoft Excel, hàm =PROPER("nguyen van a") trả về kết quả nào?',
    options: [
      "NGUYEN VAN A",
      "nguyen van a",
      "Nguyen Van A",
      "Nguyen van a",
      "Error",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 468,
    q: "Sổ sức khỏe điện tử mang lại tiện ích gì nổi bật trong khám chữa bệnh?",
    options: [
      "Giúp bác sĩ tra cứu nhanh lịch sử khám bệnh, xét nghiệm, đơn thuốc của bệnh nhân để chẩn đoán chính xác hơn",
      "Giúp bệnh nhân không bao giờ bị mắc bệnh",
      "Giảm giá 100% chi phí mua thuốc",
      "Cho phép người dân tự cấp đơn thuốc cho mình",
      "Thay thế hoàn toàn bác sĩ khám chữa bệnh",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 469,
    q: 'Trong Microsoft PowerPoint, chức năng "Save As" khác "Save" ở điểm chính nào?',
    options: [
      "Save As cho phép lưu tệp với tên mới, định dạng mới hoặc vị trí lưu mới",
      "Save As chỉ dùng để xóa tệp",
      "Save không thể lưu tệp lần đầu tiên",
      "Save As tự động in bài trình chiếu",
      "Hai chức năng này hoàn toàn giống hệt nhau trong mọi trường hợp",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 470,
    q: "Khi nhận được email có tệp đính kèm dạng .exe từ một người gửi lạ, hành vi an toàn nhất là gì?",
    options: [
      "Tải về và mở ra ngay lập tức",
      "Không mở tệp đính kèm, kiểm tra lại thông tin người gửi và xóa email/quét virus",
      "Chuyển tiếp email cho toàn bộ đồng nghiệp",
      "Đổi tên tệp thành .docx rồi mở",
      "Lưu tệp vào ổ đĩa hệ thống",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 471,
    q: "Trong Microsoft Word, tổ hợp phím Ctrl + J có chức năng gì?",
    options: [
      "Căn lề trái",
      "Căn giữa",
      "Căn đều hai bên (Justify)",
      "Căn lề phải",
      "Chèn liên kết (Hyperlink)",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 472,
    q: "Trong Microsoft Excel, phím tắt nào dùng để chọn toàn bộ dữ liệu trong bảng tính hiện tại?",
    options: [
      "Ctrl + A",
      "Ctrl + B",
      "Ctrl + C",
      "Ctrl + Shift + A",
      "Alt + A",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 473,
    q: 'Vai trò của "Thanh toán không dùng tiền mặt" trong phát triển Kinh tế số là gì?',
    options: [
      "Giúp giao dịch nhanh chóng, minh bạch, an toàn và giảm chi phí in ấn, lưu thông tiền mặt",
      "Làm gia tăng nguy cơ mất tiền mặt trong ví tay",
      "Bắt buộc người dân không được tiêu tiền",
      "Chỉ phục vụ cho người giàu",
      "Làm chậm tốc độ lưu thông hàng hóa",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 474,
    q: "Trong Microsoft PowerPoint, để chèn hình ảnh từ máy tính vào slide, ta chọn:",
    options: [
      "Insert -> Pictures -> This Device",
      "Home -> Pictures",
      "Design -> Insert Image",
      "View -> Pictures",
      "Transitions -> Add Picture",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 475,
    q: 'Khái niệm "Dữ liệu cá nhân" theo quy định an toàn thông tin bao gồm những gì?',
    options: [
      "Thông tin gắn liền với một con người cụ thể giúp xác định danh tính người đó (họ tên, ngày sinh, số CCCD, số điện thoại, dữ liệu sinh trắc học...)",
      "Chỉ bao gồm tên tuổi",
      "Chỉ bao gồm số tài khoản ngân hàng",
      "Các thông tin công khai của doanh nghiệp",
      "Dữ liệu thời tiết địa phương",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 476,
    q: 'Trong Microsoft Word, để chia một đoạn văn bản thành 2 hoặc 3 cột (giống dạng báo chí), ta dùng công cụ "Columns" trong thẻ nào?',
    options: ["Home", "Layout (hoặc Page Layout)", "Insert", "View", "Review"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 477,
    q: "Trong Excel, giả sử công thức tại ô C1 là =A1+B1. Khi sao chép công thức từ ô C1 xuống ô C2, công thức tại ô C2 sẽ tự động chuyển thành gì?",
    options: ["=A1+B1", "=A2+B2", "=$A$1+$B$1", "=A2+B1", "=A1+B2"],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 478,
    q: "Trang mạng xã hội/Ứng dụng nào sau đây được Bộ Thông tin và Truyền thông định hướng phát triển thành kênh tương tác phổ biến giữa chính quyền và người dân tại nhiều địa phương ở Việt Nam?",
    options: [
      "Tik Tok",
      "Zalo (Zalo Official Account của chính quyền)",
      "Instagram",
      "Twitter (X)",
      "Snapchat",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 479,
    q: "Trong Microsoft PowerPoint, phím Esc khi đang ở chế độ trình chiếu có tác dụng gì?",
    options: [
      "Chuyển sang slide tiếp theo",
      "Quay lại slide trước",
      "Thoát khỏi chế độ trình chiếu về màn hình chỉnh sửa",
      "Lên lịch trình chiếu",
      "Tắt máy tính",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 480,
    q: "Nhằm nâng cao an toàn thông tin cá nhân, người dân được khuyến nghị thay đổi mật khẩu các tài khoản quan trọng theo chu kỳ như thế nào?",
    options: [
      "10 năm một lần",
      "Không bao giờ cần thay đổi",
      "Định kỳ 3 - 6 tháng một lần hoặc ngay khi nghi ngờ bị lộ",
      "Thay đổi liên tục mỗi giờ một lần",
      "Chỉ thay đổi khi tài khoản bị khóa",
    ],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 481,
    q: "Trong Microsoft Word, để chèn một đường liên kết (Hyperlink) truy cập nhanh vào một trang web hoặc tài liệu khác, người dùng sử dụng tổ hợp phím tắt nào?",
    options: [
      "Ctrl + K",
      "Ctrl + H",
      "Ctrl + L",
      "Ctrl + Shift + K",
      "Alt + K",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 482,
    q: "Trong Microsoft Excel, hàm nào được dùng để trích xuất một số lượng ký tự nhất định từ bên trái của một chuỗi văn bản?",
    options: ["RIGHT", "MID", "LEFT", "FIRST", "TRIM"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 483,
    q: 'Trong Microsoft PowerPoint, công cụ "Eyedropper" (Ống hút màu) dùng để làm gì?',
    options: [
      "Tự động sửa lỗi chính tả",
      "Sao chép chính xác một màu sắc từ đối tượng bất kỳ trên màn hình để áp dụng cho đối tượng đang chọn",
      "Phóng to một vùng slide",
      "Xóa màu nền của hình ảnh",
      "Tạo hiệu ứng trong suốt cho chữ",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 484,
    q: 'Nội dung nào sau đây là một trong những trụ cột chính của Đề án "Phát triển ứng dụng dữ liệu về dân cư, định danh và xác thực điện tử phục vụ chuyển đổi số quốc gia" (Đề án 06)?',
    options: [
      "Phục vụ giải quyết thủ tục hành chính và cung cấp dịch vụ công trực tuyến",
      "Phát triển kinh tế - xã hội",
      "Phục vụ công dân số",
      "Hoàn thiện hệ sinh thái phục vụ kết nối, khai thác, bổ sung dữ liệu dân cư",
      "Tất cả các phương án trên đều đúng",
    ],
    answer: 4,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 485,
    q: "Việc sử dụng chữ ký số trong các giao dịch điện tử mang lại ưu điểm nổi bật nào?",
    options: [
      "Giúp giảm tốc độ xử lý văn bản",
      "Đảm bảo tính chống chối bỏ, xác thực người ký và tính toàn vẹn của dữ liệu",
      "Cho phép ký thay người khác mà không cần ủy quyền",
      "Tự động dịch tài liệu sang tiếng nước ngoài",
      "Giúp tài liệu không thể bị xóa khỏi máy tính",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 486,
    q: "Trong Microsoft Word, để in trang hiện tại (trang đang đặt con trỏ chuột), trong cửa sổ Print người dùng chọn tùy chọn nào dưới mục Settings?",
    options: [
      "Print All Pages",
      "Print Current Page",
      "Print Selection",
      "Custom Print",
      "Only Print Odd Pages",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 487,
    q: "Trong Microsoft Excel, lỗi #VALUE! xuất hiện khi nào?",
    options: [
      "Khi chia một số cho 0",
      "Khi công thức chứa kiểu dữ liệu không hợp lệ (ví dụ: lấy số cộng với chuỗi văn bản)",
      "Khi tên hàm bị viết sai cú pháp",
      "Khi không tìm thấy giá trị tham chiếu",
      "Khi cột quá hẹp",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 488,
    q: 'Khái niệm "Trí tuệ nhân tạo tạo sinh" (Generative AI - ví dụ: ChatGPT, Gemini) dùng để chỉ các hệ thống AI có khả năng làm gì?',
    options: [
      "Tạo ra nội dung mới như văn bản, hình ảnh, mã máy tính dựa trên dữ liệu học được",
      "Thay thế hoàn toàn phần cứng máy tính",
      "Quản lý hệ thống đường dây điện lưới",
      "Tự động nâng cấp phần cứng smartphone",
      "Sửa chữa hư hỏng vật lý của máy in",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 489,
    q: "Để chủ động phòng ngừa lộ lọt thông tin cá nhân trên môi trường mạng, người dân KHÔNG nên làm điều nào sau đây?",
    options: [
      "Công khai thông tin căn cước công dân, thẻ ngân hàng, vé máy bay lên mạng xã hội",
      "Cài đặt ứng dụng từ các kho ứng dụng chính thức (Google Play Store, Apple App Store)",
      "Kiểm tra quyền truy cập của các ứng dụng trên điện thoại",
      "Đăng xuất tài khoản khi truy cập trên thiết bị công cộng",
      "Thường xuyên kiểm tra nhật ký đăng nhập tài khoản cá nhân",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 490,
    q: 'Trong Microsoft PowerPoint, tính năng "Rehearse Timings" dùng để làm gì?',
    options: [
      "Tự động kiểm tra lỗi ngữ pháp bài trình chiếu",
      "Luyện tập và ghi lại thời gian trình chiếu cho từng slide để chuẩn bị bài nói",
      "Đếm tổng số chữ trong bài slide",
      "Tự động dịch slide sang ngôn ngữ khác",
      "Đặt mật khẩu khóa file slide",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 491,
    q: 'Trong Microsoft Word, chức năng "Watermark" được sử dụng nhằm mục đích gì?',
    options: [
      'Chèn logo hoặc dòng chữ mờ (ví dụ: "DRAFT", "CONFIDENTIAL") vào nền phía sau văn bản',
      "Tự động lưu tài liệu lên mạng",
      "Tạo viền trang in",
      "Căn chỉnh khoảng cách lề tự động",
      "Đếm số trang của tài liệu",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 492,
    q: "Trong Microsoft Excel, hàm nào được dùng để chuyển đổi toàn bộ chuỗi văn bản thành chữ thường?",
    options: ["UPPER", "PROPER", "LOWER", "SMALL", "TEXT"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 493,
    q: "Để nộp hồ sơ xin cấp Hộ chiếu phổ thông trực tuyến, người dân truy cập vào Cổng dịch vụ công của cơ quan nào?",
    options: [
      "Cổng dịch vụ công Bộ Công an",
      "Cổng dịch vụ công Bộ Y tế",
      "Cổng dịch vụ công Bộ Giáo dục và Đào tạo",
      "Cổng dịch vụ công Bộ Lao động - Thương binh và Xã hội",
      "Cổng dịch vụ công Bộ Giao thông vận tải",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 494,
    q: "Khi xảy ra sự cố nghi ngờ bị lộ thông tin tài khoản ngân hàng trên điện thoại, hành động khẩn cấp đầu tiên người dân nên thực hiện là gì?",
    options: [
      "Đợi vài ngày xem có mất tiền không rồi mới xử lý",
      "Gọi ngay cho tổng đài ngân hàng hoặc dùng ứng dụng khóa thẻ/khóa tài khoản khẩn cấp",
      "Xóa ứng dụng ngân hàng khỏi điện thoại và không làm gì thêm",
      "Chia sẻ thông tin lên mạng xã hội để hỏi ý kiến cộng đồng",
      "Đổi số điện thoại cá nhân",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 495,
    q: "Trong Microsoft Word, để bật thanh thước đo (Ruler) hỗ trợ căn chỉnh văn bản, người dùng vào thẻ nào và tích chọn mục Ruler?",
    options: ["Home", "Insert", "View", "Page Layout", "Review"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 496,
    q: "Trong Microsoft Excel, công thức =NOW() sẽ trả về giá trị gì?",
    options: [
      "Chỉ trả về ngày tháng hiện tại của hệ thống",
      "Trả về cả ngày, tháng, năm và giờ, phút hiện tại của hệ thống",
      "Chỉ trả về giờ hiện tại",
      "Trả về ngày đầu tiên của năm",
      "Trả về ngày cuối cùng của tháng",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 497,
    q: 'Trong phong trào Bình dân học vụ số, nền tảng "Nhiệm vụ số" hoặc các kênh hỗ trợ cộng đồng giúp người dân đạt được điều gì?',
    options: [
      "Được cung cấp các bài học, hướng dẫn thực hành kỹ năng số cụ thể theo dạng cầm tay chỉ việc",
      "Đào tạo thành chuyên gia công nghệ thông tin quốc tế",
      "Miễn phí cước sử dụng điện thoại hàng tháng",
      "Tự động hoàn thành các thủ tục hành chính mà không cần khai báo",
      "Miễn hoàn toàn chi phí mua sắm thiết bị điện tử",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 498,
    q: "Trong Microsoft PowerPoint, phím tắt Ctrl + M có chức năng gì?",
    options: [
      "Mở bài trình chiếu mới",
      "Chèn thêm một Slide mới (New Slide) vào bài trình chiếu",
      "Lề trái văn bản",
      "Phát âm thanh",
      "Nhân đôi slide hiện tại",
    ],
    answer: 1,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 499,
    q: 'Khái niệm "Văn hóa số" (Digital Culture) trên không gian mạng thể hiện ở điều nào sau đây?',
    options: [
      "Tôn trọng sự đa dạng, không lan truyền tin giả, tuân thủ pháp luật và ứng xử văn minh trên môi trường số",
      "Tự do đăng tải mọi thông tin cá nhân của người khác mà không cần xin phép",
      "Sử dụng phần mềm bẻ khóa (crack) để tiết kiệm chi phí",
      "Bỏ qua các quy định về bảo vệ bản quyền tác giả",
      "Tấn công tài khoản mạng xã hội của những người có quan điểm trái chiều",
    ],
    answer: 0,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
  {
    id: 500,
    q: "Trong Microsoft Excel, để cố định cả hàng và cột (địa chỉ tuyệt đối hoàn toàn) của ô A1 trong công thức, ký hiệu chuẩn là gì?",
    options: ["A$1", "$A1", "$A$1", "A1$", "#A#1"],
    answer: 2,
    sourceLabels: ["A", "B", "C", "D", "E"],
  },
];
let quiz = [],
  answers = [],
  current = 0,
  remaining = 0,
  timerId = null,
  submitted = false,
  debug = true;

document.getElementById("startBtn").addEventListener("click", function () {
  if (!validateForm()) {
    return;
  }

  startQuiz();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  prevQ();
});

document.getElementById("nextBtn").addEventListener("click", function () {
  nextQ();
});

// document.getElementById("goBtn").addEventListener("click", function () {
//   const qNum = Number(document.getElementById("goInput").value);
//   if (qNum >= 1 && qNum <= quiz.length) {
//     go(qNum - 1);
//   }
// });

document.getElementById("submitBtn").addEventListener("click", function () {
  submitQuiz();
});

document.getElementById("reviewBtn").addEventListener("click", function () {
  review();
});

document.getElementById("retryBtn").addEventListener("click", function () {
  document.getElementById("setup").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");
  if (timerId) clearInterval(timerId);
});

function shuffle(a) {
  return [...a].sort(() => Math.random() - 0.5);
}
function startQuiz() {
  const countVal = document.getElementById("count").value;
  const count = countVal === "all" ? QUESTIONS.length : Number(countVal);
  quiz = shuffle(QUESTIONS).slice(0, count);
  answers = new Array(quiz.length).fill(null);
  current = 0;
  submitted = false;
  const mins = Number(document.getElementById("minutes").value);
  remaining = mins * 60;
  document.getElementById("setup").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");
  document.getElementById("result").classList.add("hidden");
  if (timerId) clearInterval(timerId);
  if (mins > 0) {
    updateTimer();
    timerId = setInterval(() => {
      remaining--;
      updateTimer();
      if (remaining <= 0) {
        clearInterval(timerId);
        submitQuiz(true);
      }
    }, 1000);
  } else document.getElementById("timer").textContent = "∞";
  render();
}
function updateTimer() {
  const m = Math.floor(Math.max(0, remaining) / 60),
    s = Math.max(0, remaining) % 60;
  document.getElementById("timer").textContent =
    `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}
function render() {
  const q = quiz[current];
  document.getElementById("counter").textContent =
    `Câu ${current + 1}/${quiz.length} • Ngân hàng câu ${q.id}`;
  const n = answers.filter((x) => x !== null).length;
  document.getElementById("answered").textContent =
    `Đã trả lời: ${n}/${quiz.length}`;
  document.getElementById("progress").style.width =
    ((current + 1) / quiz.length) * 100 + "%";
  document.getElementById("question").innerHTML =
    `<div class="question">${escapeHtml(q.q)}</div>`;
  const letters = "ABCDE";
  document.getElementById("options").innerHTML = q.options
    .map(
      (op, i) => `
    <label class="option ${submitted ? (i === q.answer ? "correct" : answers[current] === i ? "wrong" : "") : ""}">
      <input type="radio" name="opt" ${answers[current] === i ? "checked" : ""} ${submitted ? "disabled" : ""} onchange="choose(${i})">
      <span><b>${letters[i]}.</b> ${escapeHtml(op)}</span>
    </label>`,
    )
    .join("");
  document.getElementById("palette").innerHTML = quiz
    .map((_, i) => {
      let cls = i === current ? "current " : "";
      if (answers[i] !== null) cls += "done ";
      if (submitted) cls += answers[i] === quiz[i].answer ? "correct" : "wrong";
      return `<button class="dot ${cls}" onclick="go(${i})">${i + 1}</button>`;
    })
    .join("");
}
function escapeHtml(s) {
  return s.replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[c],
  );
}
function choose(i) {
  if (!submitted) {
    answers[current] = i;
    render();
  }
}
function go(i) {
  current = i;
  render();
}
function prevQ() {
  if (current > 0) {
    current--;
    render();
  }
}
function nextQ() {
  if (current < quiz.length - 1) {
    current++;
    render();
  }
}
async function submitQuiz(auto = false) {
  if (submitted) return;
  if (!auto && !confirm("Bạn chắc chắn muốn nộp bài?")) return;

  submitted = true;
  if (timerId) clearInterval(timerId);

  const score = answers.reduce(
    (sum, answer, i) => sum + (answer === quiz[i].answer ? 1 : 0),
    0,
  );
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const wrongCount = quiz.length - score;
  const pct = quiz.length ? Math.round((score / quiz.length) * 100) : 0;
  const configuredMinutes =
    Number(document.getElementById("minutes").value) || 0;
  const countValue = document.getElementById("count").value;

  const details = quiz.map((q, i) => ({
    number: i + 1,
    questionId: q.id,
    question: q.q,
    selected: answers[i],
    selectedLabel: answers[i] === null ? "Chưa chọn" : "ABCDE"[answers[i]],
    correct: q.answer,
    correctLabel: "ABCDE"[q.answer],
    correctText: q.options[q.answer],
    isCorrect: answers[i] === q.answer,
  }));

  // Lưu lên Python/SQLite. Chạy hoàn toàn offline trên máy.
  let saveMessage = "";
  try {
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("name").value.trim(),
        department: document.getElementById("department").value.trim(),
        questionCount: quiz.length,
        countValue,
        configuredMinutes,
        remainingSeconds: Math.max(0, remaining),
        autoSubmit: auto,
        answeredCount,
        correctCount: score,
        wrongCount,
        percentage: pct,
        details,
      }),
    });
    console.log("Response from server:", response);
    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.message || "Không lưu được kết quả.");
    }
    saveMessage = `<p class="save-success">✓ Đã lưu kết quả.</p>`;
  } catch (error) {
    console.error("Lỗi lưu kết quả:", error);
    saveMessage = `<p class="save-error">⚠ Không lưu được vào hệ thống: ${escapeHtml(error.message)}</p>`;
  }

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").textContent =
    `${score}/${quiz.length} (${pct}%)`;
  document.getElementById("resultName").textContent =
    `Thí sinh: ${document.getElementById("name").value || "Chưa nhập tên"}` +
    `${document.getElementById("department").value ? ` • ${document.getElementById("department").value}` : ""}` +
    `${auto ? " • Hết giờ" : ""}`;
  document.getElementById("resultDetail").innerHTML =
    `<p>Đúng <b>${score}</b> câu • Sai/không trả lời <b>${quiz.length - score}</b> câu.</p>${saveMessage}`;
  document.getElementById("review").innerHTML = "";
}
function review() {
  const letters = "ABCDE";
  document.getElementById("review").innerHTML = quiz
    .map((q, i) => {
      const ok = answers[i] === q.answer;
      return `<div class="review-item ${ok ? "ok" : "bad"}">
      <b>Câu ${i + 1} (ngân hàng câu ${q.id})</b>
      <p>${escapeHtml(q.q)}</p>
      <div>Bạn chọn: <b>${answers[i] === null ? "Chưa chọn" : letters[answers[i]]}</b></div>
      <div>Đáp án đúng: <b>${letters[q.answer]}</b> — ${escapeHtml(q.options[q.answer])}</div>
    </div>`;
    })
    .join("");
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
}

// ============================================================
// VALIDATE FORM
// ============================================================

function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.classList.add("input-error");
  input.classList.remove("input-valid");

  error.textContent = message;
  error.classList.add("show");
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);

  input.classList.remove("input-error");
  input.classList.add("input-valid");

  error.textContent = "";
  error.classList.remove("show");
}

// ------------------------------------------------------------
// Validate Họ và tên
// ------------------------------------------------------------

function validateName() {
  const input = document.getElementById("name");
  const value = input.value.trim();

  input.value = value;

  if (!value) {
    showError("name", "nameError", "Vui lòng nhập họ và tên.");
    return false;
  }

  if (value.length < 2) {
    showError("name", "nameError", "Họ và tên phải có ít nhất 2 ký tự.");
    return false;
  }

  if (value.length > 100) {
    showError("name", "nameError", "Họ và tên không được vượt quá 100 ký tự.");
    return false;
  }

  if (/[\u0000-\u001F\u007F]/.test(value)) {
    showError("name", "nameError", "Họ và tên chứa ký tự không hợp lệ.");
    return false;
  }

  clearError("name", "nameError");
  return true;
}

// ------------------------------------------------------------
// Validate Phòng ban
// ------------------------------------------------------------

function validateDepartment() {
  const input = document.getElementById("department");
  const value = input.value.trim();

  input.value = value;

  if (!value) {
    showError("department", "departmentError", "Vui lòng nhập phòng ban.");
    return false;
  }

  if (value.length < 2) {
    showError(
      "department",
      "departmentError",
      "Phòng ban phải có ít nhất 2 ký tự.",
    );
    return false;
  }

  if (value.length > 100) {
    showError(
      "department",
      "departmentError",
      "Phòng ban không được vượt quá 100 ký tự.",
    );
    return false;
  }

  if (/[\u0000-\u001F\u007F]/.test(value)) {
    showError(
      "department",
      "departmentError",
      "Phòng ban chứa ký tự không hợp lệ.",
    );
    return false;
  }

  clearError("department", "departmentError");
  return true;
}

// ------------------------------------------------------------
// Validate toàn bộ form
// ------------------------------------------------------------

function validateForm() {
  const nameOK = validateName();
  const departmentOK = validateDepartment();

  if (!nameOK) {
    document.getElementById("name").focus();
    return false;
  }

  if (!departmentOK) {
    document.getElementById("department").focus();
    return false;
  }

  return true;
}

document.getElementById("name").addEventListener("input", function () {
  if (this.classList.contains("input-error")) {
    validateName();
  }
});

document.getElementById("department").addEventListener("input", function () {
  if (this.classList.contains("input-error")) {
    validateDepartment();
  }
});

document.getElementById("name").addEventListener("blur", function () {
  validateName();
});

document.getElementById("department").addEventListener("blur", function () {
  validateDepartment();
});

if (!debug) {
  // ============================================================
  // PHÁT HIỆN DEVTOOLS
  // ============================================================

  let devToolsDetected = false;

  function handleDevToolsDetected() {
    if (devToolsDetected) return;

    devToolsDetected = true;

    // Dừng timer nếu đang thi
    if (typeof timerInterval !== "undefined" && timerInterval) {
      clearInterval(timerInterval);
    }

    // Nếu đang thi thì khóa màn hình
    const quiz = document.getElementById("quiz");
    const setup = document.getElementById("setup");
    const result = document.getElementById("result");

    if (quiz) {
      quiz.classList.add("hidden");
    }

    if (result) {
      result.classList.add("hidden");
    }

    if (setup) {
      setup.classList.remove("hidden");
    }

    alert(
      "Phát hiện công cụ kiểm tra phần tử (DevTools).\n\n" +
        "Bài thi đã bị dừng.",
    );
    window.location.reload();
  }

  // Kiểm tra kích thước cửa sổ
  function checkDevTools() {
    const threshold = 160;

    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;

    if (widthDiff > threshold || heightDiff > threshold) {
      handleDevToolsDetected();
    }
  }

  // Kiểm tra định kỳ
  setInterval(checkDevTools, 1000);

  window.addEventListener("resize", checkDevTools);

  // Chặn phím tắt DevTools
  document.addEventListener("keydown", function (e) {
    const key = e.key?.toLowerCase();

    // F12
    if (e.key === "F12") {
      e.preventDefault();
      handleDevToolsDetected();
      return;
    }

    // Ctrl + Shift + I
    if (e.ctrlKey && e.shiftKey && key === "i") {
      e.preventDefault();
      handleDevToolsDetected();
      return;
    }

    // Ctrl + Shift + J
    if (e.ctrlKey && e.shiftKey && key === "j") {
      e.preventDefault();
      handleDevToolsDetected();
      return;
    }

    // Ctrl + U
    if (e.ctrlKey && key === "u") {
      e.preventDefault();
      handleDevToolsDetected();
      return;
    }
  });
}
