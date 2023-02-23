import { createContext, useEffect } from "react";
import React, {useState } from "react";
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState (
        JSON.parse(localStorage.getItem("user"))     || null
        );
    const login = () =>{
      setCurrentUser({
        id:1, 
        name: "John Doe", 
        profilePic:
        "https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    });
    };
    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])


    return(
        <AuthContext.Provider value ={{  currentUser, login }}>
            {children}
            </AuthContext.Provider>
    )
}