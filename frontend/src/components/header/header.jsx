import React from "react";
import "./header.css"
import { FaUserCircle } from "react-icons/fa";
const Header = ()=>{
    return(
        <>
        <section className="icons-container">
            <h1>LOGO</h1>
            <section className="vender-box">
                <span>User Name</span>
                <span > <FaUserCircle/></span>
            </section>
        </section>
        
        </>
    )
}
export default Header;