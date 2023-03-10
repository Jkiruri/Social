import "./login.scss"
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { createContext, useEffect, useState, useContext } from "react";

const Login = () => {

  const {login} = useContext(AuthContext);
  const handleLogin  = () => {
        login();
  }


  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "</p>
          
            <span>Don't have an account?</span>
            
           <Link to = "/register">
            <button>Register</button>
           </Link>
          
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                <input type="text"  placeholder="Username"/>
                <input type="password"  placeholder="Password"/>
                <button onClick={handleLogin}>Log in</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login