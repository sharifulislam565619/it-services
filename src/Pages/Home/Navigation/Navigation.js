import React, { useState } from 'react';
import { Container, Nav, Navbar, NavLink, Offcanvas } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import userPhoto from '../../../images/userPhoto.png';
import './Navigation.css';


const Navigation = () => {
   const { user, logOut, uri } = useAuth()
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const [navbar, setNavbar] = useState(true)

   const navigate = useNavigate()

   const changeBg = () => {
      if (window.scrollY >= 80) {
         setNavbar(true)
      } else {
         setNavbar(false)
      }
   }
   window.addEventListener('scroll', changeBg)
   return (
      <>

         <Navbar collapseOnSelect expand="lg" className={navbar ? "active py-0" : "navigation"} sticky="top" variant="dark" >
            <Container>
               <Navbar.Brand className='logo' href="/home"><h2 >It service</h2></Navbar.Brand>


               <button onClick={handleShow} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
               </button>


               <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">

                  <Nav.Link as={NavHashLink} className="nav_before" to="/#banner"><span>Home</span></Nav.Link>
                  <Nav.Link as={NavHashLink} className="nav_before" to="/#services"><span>Services</span></Nav.Link>
                  <Nav.Link as={NavHashLink} className="nav_before" to="/#about" ><span>About</span></Nav.Link>
                  <Nav.Link as={NavHashLink} className="nav_before" to="/#contact"><span>Contact</span></Nav.Link>

                  {user?.email && <Link to="/dashboard">Dashboard</Link>}
                  {user?.email ? <div>
                     <small className="displayName" style={{ color: "yellow", fontStyle: "italic", marginRight: "5px" }}>{user?.displayName}</small>
                     <small><img style={{ width: "50px", borderRadius: "50%", marginRight: "5px" }} src={user?.photoURL || userPhoto} alt="" /></small>
                     <button onClick={() => logOut(navigate, uri)} className="btn my-button text-white"><i className="fas fa-sign-out-alt "></i> Log out</button>
                  </div> :
                     <Link to="/login" className="btn my-button"><i className="fas fa-sign-in-alt"></i> Login</Link>}
               </Navbar.Collapse>
            </Container>
         </Navbar>

         <Offcanvas className="offcanvas" show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
               <Offcanvas.Title>It service</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/home">Services</NavLink>
               <NavLink to="/home">About us</NavLink>
               <NavLink to="/home">Contact us</NavLink>
            </Offcanvas.Body>
         </Offcanvas>
      </>
   );
};

export default Navigation;