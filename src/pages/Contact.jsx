import React, {useState, useEffect} from 'react';
import "../styles/Contact.css";

  
  const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      number: '',
      email: '',
      message: '',
    });
  
    const handleChange = (event) => {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const dataToSave = JSON.stringify(formData);
      localStorage.setItem('formData', dataToSave);
  
      setFormData({ name: '', number: '', email: '', textarea: '' });
    };
  
    useEffect(() => {
      const savedData = localStorage.getItem('formData');
      if (savedData) {
        setFormData(JSON.parse(savedData));
      }
    }, []);

  return (
    
    <div className="form" onSubmit={handleSubmit}>
      <p>Kết nối với cộng đồng cà phê của chúng tôi là một niềm vui phong phú và ấm áp như tách cà phê yêu thích của bạn. Chúng tôi hoan nghênh bạn liên hệ và tương tác với chúng tôi thông qua phần liên hệ được thiết kế để giúp việc giao tiếp trở nên liền mạch như hương thơm bay qua cánh cửa của chúng tôi.
      Bạn có câu hỏi, gợi ý hay chỉ muốn chia sẻ tình yêu của mình với cà phê? Cánh cửa ảo của chúng tôi luôn rộng mở. Hãy liên hệ với chúng tôi thông qua biểu mẫu liên hệ được cung cấp và đội ngũ tận tâm của chúng tôi sẽ đảm bảo đáp ứng các thắc mắc của bạn với sự nhiệt tình giống như chúng tôi dành cho việc chế tạo đồ uống của mình.</p><br /><br />
      <form action="" >
        <label for="name">Họ Và Tên</label>
        <input type="text" id="name" placeholder='Enter your full name' name="name" onChange={handleChange} value={formData.name}/><br />
        <label for="number">Số Điện Thoại</label>
        <input type="number" id="number" placeholder='Enter your number' name="number" onChange={handleChange} value={formData.number}/><br />
        <label for="email">Địa Chỉ Email</label>
        <input type="email" id="email" placeholder='Enter your email' name="email" onChange={handleChange} value={formData.email}/><br />
        <label for="textarea">Để Lại Lời Nhắn</label>
        <textarea rows="5"   id='message' cols="" placeholder='Write your message...' onChange={handleChange} value={formData.message}>
        </textarea><br />
        <input type="submit" value="GỬI" id='submit' />
        </form><br /><br />
        <h2>Ghé thăm chúng tôi</h2>
        <p>Đối với những người tìm kiếm trải nghiệm cảm giác hơn, chúng tôi khuyến khích bạn ghé thăm địa điểm thực tế của chúng tôi. Ẩn mình ở trung tâm Kathmandu, thiên đường cà phê của chúng tôi đang chờ bạn. Hãy thoải mái ghé qua, thưởng thức một tách coffee ngon nhất của chúng tôi và đắm mình trong bầu không khí mời gọi đặc trưng cho không gian của chúng tôi.</p><br /><br />
        <h2>Đôi nét về quán</h2>
        <p>Đối với các hoạt động hợp tác kinh doanh, yêu cầu bán buôn hoặc bất kỳ vấn đề nào liên quan đến công ty, đội ngũ tận tâm của chúng tôi sẵn sàng thảo luận về cách chúng tôi có thể kết hợp niềm đam mê cà phê với mục tiêu kinh doanh của bạn. Hãy cùng nhau khám phá những khả năng và tạo ra điều gì đó phi thường.</p><br />
        <p>Tại N5 Coffee, cuộc trò chuyện không chỉ dừng lại ở tách cà phê. Chúng tôi mong nhận được phản hồi từ bạn và tiếp tục tạo ra những kết nối vượt xa những hạt cà phê. Chúc mừng niềm vui giao tiếp và tình yêu chung dành cho cà phê đặc biệt!</p><br /><br />
        <h2>Giữ liên lạc với chúng tôi</h2>
        <p>Cà phê mang mọi người lại gần nhau và sự hiện diện trực tuyến của chúng tôi cũng vậy. Theo dõi chúng tôi trên các nền tảng truyền thông xã hội để luôn cập nhật các loại bia, chương trình khuyến mãi và sự kiện cộng đồng mới nhất. Giờ nghỉ giải lao ảo của bạn chỉ là một cú nhấp chuột.</p>
    </div>
    
  )
}

export default Contact