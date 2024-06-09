import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaCommentAlt,
    FaCircle
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import skripsiLogo from "../assets/SkripsiRasyid2.png";



const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/about",
            name:"About",
            icon:<FaUserAlt/>
        },
        
    ]
    return (
        <div className="sidebar-container">
           <div style={{width: isOpen ? "180px" : "60px"}} className="sidebar">
               <div className="top_section">
                   <img style={{display: isOpen ? "block" : "none"}} className="logo" src={skripsiLogo} alt='Gambar'/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;