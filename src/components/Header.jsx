import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
 import { Link } from 'react-router-dom'

const Header = () => {
  return (
   
   
    
    <Navbar  style ={{zIndex:1,backgroundColor:'#2149c2'}}className="w-100 position-fixed">
        <Container>
          <Link to={'/'} style={{textDecoration:'none'}}>
          <Navbar.Brand style={{color:"white",fontSize:25}} className='fw-bolder'>
            <i className="fa-solid fa-music m-2"></i>
           media player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
   
   
  )
}

export default Header