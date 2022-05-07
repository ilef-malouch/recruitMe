import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";
import './Navbar.module.css';
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';

const NavbarComp = () => {
  
  const isAuth=()=>{
    if (localStorage.getItem("token")) return true
    else return false ;
  }

  const signout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("sign");
    window.location.reload();
    Navigate("/")
  }
  const sign=(event)=>{
    localStorage.setItem("sign",event.target.innerText)
  }


  return (
    <>
      <style type="text/css">
        {`
    .bg-custom   { 
      background-color: #28a755 ; 
    } 
    .navbar-custom .navbar-brand ,
    .navbar-custom .navbar-toggler,
    .navbar-custom .nav-item
     {
            color: white;
    }

    .nav-custom .nav-link  { 
      border-color:white;
      color:white;
    }
    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }  
    #responsive-navbar-nav{
      color:white
    }
    #collasible-nav-dropdown{color:white}
    `}
      </style>
      <Navbar collapseOnSelect sticky="top" text="custom" expand="lg" bg="custom" variant="dark"  >
        <Container >
          <Navbar.Brand as={Link} to={"/"}>Logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto text-primary" variant="custom" >
              <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
              <Nav.Link as={Link} to={"/jobs"}>Jobs</Nav.Link>
              <Nav.Link as={Link} to={"/tips"}>Tips</Nav.Link>
              <Nav.Link href="#deets">More deets</Nav.Link>
            </Nav>
            <Nav>
              {isAuth() ? (
                <Nav className="me-auto text-primary" variant="custom" >
                  {(localStorage.getItem("sign")==="SignIn Client")||(localStorage.getItem("sign")==="Sign up Client")?
                    (<Nav.Link as={Link} to={"/client-profile"}>Profile</Nav.Link>):
               
                    (<Nav.Link as={Link} to={"/recruter-profile"}>Profile</Nav.Link>)
                  }
                    <Nav.Link as={Link} to={"/"} onClick={signout}>LogOut</Nav.Link>
                </Nav>
                 
              ):(
                <NavDropdown  title="connexion" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/signup-client"} onClick={(e)=>sign(e)}>Sign up Client</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/signup-recruter"} onClick={(e)=>sign(e)}>Sign up Recruter</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/signin-recruter"} id="recruter" onClick={(e)=>sign(e)}>SignIn Recruter</NavDropdown.Item> 
                  <NavDropdown.Item as={Link} to={"/signin-client"} id="client" onClick={(e)=>sign(e)}>SignIn Client</NavDropdown.Item>   
                </NavDropdown>
              )
             }
             
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* // <nav className={classes.navbar}>
    //   <h3>Recruit Me</h3>
    //   <div className={classes.links}>
    //     <Link to="/" className={classes.linkButton}>Home</Link>
    //     <Link to="/jobs" className={classes.linkButton}>Jobs</Link>
    //     <Link to="/tips" className={classes.linkButton}>Tips</Link>
    //     <Link to="/signup"className={classes.linkButton}>Simple Sign up</Link>
    //     <Link to="/signuprecruit"className={classes.linkButton}>Sign up Recruiter</Link>
    //     <Link to="/signin"className={classes.linkButton}>Sign in</Link> 
    //     {/* <Link to="/signup" ><button type="button" className={classes.button}>s'inscrire</button></Link>
    //     <Link to="/signin" ><button type="button" className={classes.button} >se connecter</button></Link>
    //    }
    //   </div>
    // </nav> */}
    </>
  );
}

export default NavbarComp;