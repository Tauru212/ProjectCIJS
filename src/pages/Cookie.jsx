import React from 'react'
import '../styles/TopRated.css'


const Cookie = () => {
    const items = [
        {
            id : 1,
            img : "https://theheritagecook.com/wp-content/uploads/2011/07/Gingersnaps-Closeup.jpg",
            price:'$30',
            title : 'Gingersnaps'
        },
        {
            id : 2,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ7ypOjiNONrBIJCPGIW1z6htA7Pkj9QiQXQ&usqp=CAU",
            title : 'Shortbread Cookies',
            price:'$30',
        },
        {
            id : 3,
            img : "https://www.hersheyland.com/content/dam/hersheyland/en-us/recipes/recipe-images/85-reeses-candy-double-peanut-butter-cookies.jpg",
            title : 'Peanut Butter',
            price:'$30',
        },
        {
            id : 4,
            img : "https://i0.wp.com/frostingandglue.com/wp-content/uploads/2021/05/Whoopie-Pies-Michele-Final-H-scaled.jpg",
            price:'$30',
            title : 'Whoopie Pies'
        },
        {
            id : 5,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqhGJ7553m0Mx6jLXbDNSxp8WQm6jqtpiW5g&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKEFLX2HufA20Tfi36imiR3a89wBx6LCMNg&usqp=CAU",
            price:'$30',
            title : 'Biscotti'
        },
        {
            id : 6,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS89DF2A0I2vG67PSfNJc2UiNeloXx-8XGqJA&usqp=CAU",
            price:'$30',
            title : 'Spritz Cookies'
        },
    ]
  return (
    <>
        <div>
        <h2 className='top-h2'>Cookies</h2>
            <div className="lists">
                {
                    items.map((item) => (
                            <div className="list">
                                <img src={item.img} alt="" />
                                <div className="list-dis">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                                <button>Mua Ngay</button>
                                </div>
                            </div>
                    ))
                }
            </div>
        </div>
    </>
  )
}

export default Cookie