import { ClassNames } from "@emotion/react";
import { Link } from "react-router-dom";
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
      <nav className={classes.navbar}>
        <h3>Recruit Me</h3>
        <div className={classes.links}>
          <Link to="/" className={classes.linkButton}>Home</Link>
          <Link to="/jobs" className={classes.linkButton}>Jobs</Link>
          <Link to="/tips" className={classes.linkButton}>Tips</Link>
          <Link to="/signup"className={classes.linkButton}>Simple Sign up</Link>
          <Link to="/signuprecruit"className={classes.linkButton}>Sign up Recruiter</Link>
          <Link to="/signin"className={classes.linkButton}>Sign in</Link> 
          {/* <Link to="/signup" ><button type="button" className={classes.button}>s'inscrire</button></Link>
          <Link to="/signin" ><button type="button" className={classes.button} >se connecter</button></Link>
         */}
        </div>
      </nav>
    );
  }
   
  export default Navbar;