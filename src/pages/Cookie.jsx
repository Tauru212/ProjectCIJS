import React from 'react'
import '../styles/TopRated.css'
import { Link, useNavigate } from 'react-router-dom';
import data1 from '../../data1.json';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import {Route, Routes} from 'react-router-dom';
import ProductDetail from '../component/ProfuctDetail';

const Loading = styled.div`
    font-size: 20px;
    color: #333;
`;

const Cookie = () => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filterProduct, setFilterProduct]=useState([])
    const [openDetail, setOpenDetail]=useState(false)
    const navigate = useNavigate(); 
    useEffect(() => {
        // Gán dữ liệu từ data.json vào state
        setItems(data1.data);
        setLoading(false);
    }, []);

    if (loading) {
        return <Loading>Loading...</Loading>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    const handleClick=(item)=>{
    setFilterProduct(item)
    setOpenDetail(true)
    }
  return (
    <>
    {openDetail===true?(<ProductDetail filterProduct={filterProduct}/>):<div>
        <h2 className='top-h2'>Cookies</h2>
            <div className="lists">
                {
                    items.map((item) => (
                        <Link onClick={()=>handleClick(item)} className="list" >
                                <img src={item.img} alt="" />
                                <div className="list-dis">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Xem Thêm</button>
                                </div>
                            </Link>
                    ))
                }
            </div>
        </div>}
        
    </>
  )
}

export default Cookie