import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Header() {
  return (
    <>
    <Navbar className="bg-warning">
        <Container>
          <Link to={'/'} style={{textDecoration:"none"}}>
          <Navbar.Brand className='fw-bold' href="#home" style={{color:"white"}}>
          <i class="fa-solid fa-music me-3"></i>
            Media Player
          </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header