import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;
const ProductDetail = ({filterProduct}) => {

    console.log('filterProduct', filterProduct);
    return(
        
        <Card 
        hoverable
        style={{
            width: 450,
            textAlign: 'center',
            fontWeight: 'bold',
        }}
        cover={<img  alt="example" src={filterProduct.img} />}
        >
        <Meta title={filterProduct.price} description="Tôi thích làm những món tráng miệng mới cho ngày lễ nên tôi luôn tìm kiếm những cách sáng tạo để cập nhật kẹo truyền thống! Lớp vỏ bánh quy gừng này là một sự thay thế ngon miệng cho lớp vỏ bánh nướng cổ điển và sẽ tạo thêm nét độc đáo cho bữa tiệc ngày lễ của bạn." />
        </Card>
      ) 
    }

export default ProductDetail;