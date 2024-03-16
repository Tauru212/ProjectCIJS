import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <>
      <div className="footer-main section">
        <div className='footer'>
            <ul>
              <h3>Đường Liên Kết</h3>
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="about" className="footer-link">About</NavLink>
              <NavLink to="contact" className="footer-link">Contact</NavLink>
            </ul>
            <ul>
            <h3>Đường Liên Kết</h3>
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="about" className="footer-link">About</NavLink>
              <NavLink to="contact" className="footer-link">Contact</NavLink>
            </ul>
        </div>
        <hr />
        <div className="last">
          <p>Bản Quyền</p>
          <p>SẢN PHẨM CỦA <a href="https://sonamtmg.vercel.aphttps://www.google.com/search?q=google&oq=google&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIYCAEQLhhDGIMBGMcBGLEDGNEDGIAEGIoFMgwIAhAjGCcYgAQYigUyDAgDECMYJxiABBiKBTISCAQQABhDGIMBGLEDGIAEGIoFMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEINzU3OGowajeoAgCwAgA&sourceid=chrome&ie=UTF-8p/" target='_blank'>NHÓM 5</a></p>
        </div>
      </div>
    </>
  )
}

export default Footer