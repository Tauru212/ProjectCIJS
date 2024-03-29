import React from 'react'
import '../styles/Home.css'
import TopRated from './TopRated';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from 'react-router-dom';

import img1 from '../images/1.webp'
import img2 from '../images/2.webp'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import img5 from '../images/5.webp'
import img6 from '../images/6.jpg'
import img7 from '../images/7.jpg'
import img8 from '../images/8.jpg'
import Menu from '../component/Menu';
import Tea from './Tea';
import Cookie from './Cookie';
import Cake from './Cake';


const Home = () => {
    const sections = {
        coffee: 'TopRate', // Replace with actual ID of your Coffee section
        tea: 'Tea',      // Replace with actual ID of your Tea section
        cookie: 'Cookie', // Replace with actual ID of your Cookie section
        cake: 'Cake',     // Replace with actual ID of your Cake section
    };


    const menu = [
        {
            id : 1,
            img : img1,
            title : 'Espresso'
        },
        {
            id : 2,
            img : img2,
            title : 'Americano'
        },
        {
            id : 3,
            img : img3,
            title : 'Macchiato'
        },
        {
            id : 4,
            img : img5,
            title : 'Iced Coffee'
        },
        {
            id : 5,
            img : img6,
            title : 'Hot Chocolate'
        },
        {
            id : 6,
            img : img7,
            title : 'Mocha'
        },
        {
            id : 7,
            img : img4,
            title : 'Latte'
        },
        {
            id : 8,
            img : img8,
            title : 'Cold Brew',
        },
    ]

    const handleButtonClick = (section) => {
        const element = document.querySelector(sections[section]);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    

  return (
    <>
      <div className='home'>
          <Carousel
              className='dd'
              showThumbs={false}
              autoPlay={true}
              transitionTime={3}
              infiniteLoop={true}
              showStatus={false}
          >
                {
                    menu.map((item) =>(
                        <>
                        <div className="image">
                            <img src={item.img} />
                        </div>
                        <div className='pp'>
                            {/* <p className="">{item.title}</p> */}
                        </div>
                        </>
                    ))
                }
          </Carousel>

          <div className="items">
            <button className='btn' onClick={() => handleButtonClick('TopRated')}>Coffee</button>
            <button className='btn' onClick={() => handleButtonClick('Tea')}>Tea</button>
            <button className='btn' onClick={() => handleButtonClick('Cookie')}>Cookie</button>
            <button className='btn' onClick={() => handleButtonClick('Cake')}>Cake</button>
          </div>
          <div className="section">
            <TopRated />
          </div>
          <div className="section">
            <Tea/>
          </div>
          <div className="section">
            <Cookie/>
          </div>
          <div className="section">
            <Cake/>
          </div>
          {/* <Menu/> */}
      </div>
    </>
  )
}

export default Home