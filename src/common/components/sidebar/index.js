import './style.css';
import {CiUser } from 'react-icons/ci';
import { BsHouse, BsQuestionCircle} from 'react-icons/bs';
import { FiCompass } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi';
import { TbJumpRope } from 'react-icons/tb'
import { HiOutlineLogout } from 'react-icons/hi'
import logo from '../../../assets/images/logo.png'
import { Link } from 'react-router-dom';


import React from 'react'

function SideBarNav() {
  return (
    <>
      {/*side nav here  */}
      <nav className="sidebar">
         <div className="logoAndLinks">
             <div className="logo">
                 <img src={logo} alt="logo" className="imgLogo" />
                 <p>dotech <span style={{ color: "#95D5B2" }}>solutions</span></p>

             </div>
             <ul className="side-nav">
                 {/* home */}


                 <NavBar2 name="Home" barIcon={BsHouse} to="/" />
                 {/* projects */}


                 <NavBar2 name="Projects" barIcon={FiCompass}  to="/projectdetails"/>
                 {/* account details */}

                 <NavBar2 name="Account Details" barIcon={CiUser} to="/accountdetails"/>
                 {/* requests */}

                 <NavBar2 name="Requests" barIcon={TbJumpRope} to="/request"/>
                 {/* faqs */}

                 <NavBar2 name="FAQs" barIcon={BsQuestionCircle}to="/faqs" />
                 {/* admin */}
                 {/* <li className="side-nav__item">
<a href="##" className="side-nav__link">
< BiUser className="side-nav__icon"/>
<span>Admin</span>
</a>
</li> */}

                 <NavBar2 name="Admin" barIcon={BiUser} to="/project"/>


             </ul>
         </div>


         {/* logout */}
         <ul className="bottomPart">
             {/* <li className="side-nav__item">
<a href="##" className="side-nav__link">
< HiOutlineLogout className="side-nav__icon"/>
<span>Logout</span>
</a>
</li> */}
             <NavBar2 name="Logout" barIcon={HiOutlineLogout} />
         </ul>
     </nav> 
    </>
  )
}

export default SideBarNav



const NavBar2 = (props) => {
    return (
        <li className="side-nav__item">
            <Link to={props.to} className="side-nav__link">
                <props.barIcon className="side-nav__icon" />
                <span>{props.name}</span>
            </Link>
        </li>
    );
}
