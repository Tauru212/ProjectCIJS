import React from 'react'
import {Route, Routes} from 'react-router-dom';
import Navbar from './component/Navbar'
import ProfuctDetail from './component/ProfuctDetail';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './component/Footer';
import MobileNav from './component/MobileNav';
import Single from './pages/Single';
import Menulist from './pages/Menulist';
import Register from './pages/Register';
import data from '../data.json';


const App = () => {
  return (
    <>
      <Navbar />
      <div className="app container">
        
        <MobileNav/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='menu' element={<Menulist/>}/>
              <Route path="/single/:id" element={<Single />} />
              <Route path="/product-detail/:id" element={<ProfuctDetail />} />              
              <Route path='about' element={<About/>} />
              <Route path='contact' element={<Contact/>} />
            </Routes>
      </div>
    <Footer />
    </>
  )
}

export default App