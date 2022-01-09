import React, { useState,useEffect } from 'react'

const Header = () => {
  const [list,setlist]=useState('bi-list');
  const[menu,setmenu]=useState('active')
  
  const data=()=>{
    // var bt=document.getElementsByTagName("body");
    document.body.classList.add(`mobile-nav-${menu}`);
      setlist('bi-list d-none ');


  }
 
  // close.addEventListener('click',()=>{
    // document.body.classList.remove('mobile-nav-active');
  // })
  // useEffect(() => {
  //   window.addEventListener('keydown',()=>{
  //     document.body.classList.remove('mobile-nav-active');
  //     setlist('bi-list');
  //   })
  
  // }, []);
  useEffect(()=>{
    let close=document.getElementsByClassName('bi-x');
    close.onClick=function(){
      document.body.classList.remove('mobile-nav-active');

    }
  })
  
  // let cross=document.getElementsByClassName('bi bi-list mobile-nav-toggle d-xl-none bi-x');
  // // cross.ondblClick=
  // cross.addEventListener('click',()=>{
  //   console.log("working");
  //   document.body.classList.remove("mobile-nav-active");
  //   setlist('bi-list');
  // })
  
    return (
        <>
  <i className={`bi bi-list mobile-nav-toggle d-xl-none ${list}`} id='cross' onClick={data}></i>

  <header id="header">
    <div className="d-flex flex-column">

      <div className="profile">
        <img src="assets/img/nitish.jpg" alt="" className="img-fluid rounded-circle"/>
        <h1 className="text-light"><a href="index.html">NITISH KUSHWAHA</a></h1>
        <div className="social-links mt-3 text-center">
          <a href="/#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="/#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="/#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="/#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="/#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="/#"><i className="bx bx-home"></i> <span onClick={()=>{
      document.body.classList.remove('mobile-nav-active');
        setlist('bi-list')

          }}>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span onClick={()=>{
      document.body.classList.remove('mobile-nav-active');
        setlist('bi-list')
            
          }}>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span
          onClick={()=>{
      document.body.classList.remove('mobile-nav-active');
        setlist('bi-list')
           
          }}
          >Resume</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span
          onClick={()=>{
      document.body.classList.remove('mobile-nav-active');
      setlist('bi-list')

          }}
          >Portfolio</span></a></li>
          <li><a href="#services" className="nav-link scrollto"><i className="bx bx-server"></i> <span 
             onClick={()=>{
              document.body.classList.remove('mobile-nav-active');
              setlist('bi-list')
        
                  }}
          >Services</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span
             onClick={()=>{
              document.body.classList.remove('mobile-nav-active');
              setlist('bi-list')
        
              
                  }}
          >Contact</span></a></li>
        </ul>
      </nav>
    </div>
  </header>
        </>
    )
}

export default Header
