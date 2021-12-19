import { Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Dashboard.css';



const Dashboard = () => {

   const { logOut, admin, user } = useAuth()

   const history = useNavigate()
   const uri = "/home"

   return (
      <>
         <Navbar className="py-0 navbar " fixed="top" bg="dark" collapseOnSelect expand="lg" variant="dark">
            <>
               <Navbar.Brand >

                  <button className="btn btn-light bg-dark toggle_btn ms-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                     <span className="navbar-toggler-icon" data-bs-target="#offcanvasExample" ></span>
                  </button>
                  <h5 className="text ps-3">Dashboard</h5>

               </Navbar.Brand>
               <Navbar.Collapse id="responsive-navbar-nav" >
                  <Nav className="ms-auto">

                  </Nav>
               </Navbar.Collapse>
            </>
         </Navbar>



         <div className="offcanvas offcanvas-start bg-dark text-white sidebar-nav" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">


            </div>
            <div className="offcanvas-body ">
               <Nav className="justify-content-start flex-grow-1 pe-3 my-dashboard">


                  <button onClick={() => logOut(history, uri)} className="btn my-button"><i className="fas fa-sign-out-alt"></i> Sign out</button>
               </Nav>



            </div>
            <Outlet></Outlet>

         </div>

      </>
   );
};

export default Dashboard;