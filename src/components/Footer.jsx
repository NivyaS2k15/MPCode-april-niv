import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div style={{ height: '300px', }} className='mt-5 container w-100'>
      <div className='d-flex justify-content-between'>
        {/* intro section */}
        <div style={{ width: '400px' }}>
          <h5> <i className="fa-solid fa-music m-2"></i>
            media player</h5>
          <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.7.</p>

        </div>
        {/* links */}
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }} >Landing </Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }} >Home </Link>
          <Link to={'/history'} style={{ textDecoration: 'none', color: 'white' }} >Histroy </Link>
        </div>

        {/* guides  */}
        <div className='d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white'}} target ='_blank'  >React</a>
          <a href="https://getbootstrap.com/" style={{ textDecoration: 'none', color: 'white' }} target ='_blank' >React Bootstrap</a>
          <a href="https://vite.dev/" style={{ textDecoration: 'none', color: 'white' }} target ='_blank'  >Vite</a>
        </div>
        {/* contacts */}
        <div className='d-flex flex-column'>
          <h5 className='px-5'>Contacts</h5>
          <div className='d-flex '>
            <input type="text" placeholder='Enter your email here' className='form-control mx-2' />
            <button className='btn btn-info'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between m-3'>
            <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-square-facebook"></i></a>
            <a href="https://x.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
            <a href="https://in.linkedin.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

      </div>
      <p className='text-center mt-3 bg-light'>Copyright &copy;,media player .Build with React</p>
    </div>
  )
}

export default Footer