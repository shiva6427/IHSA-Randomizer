import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiHomeFill, RiMapPin2Fill, RiImageFill, RiCalendarTodoFill, RiUserSearchFill, RiLogoutBoxFill } from 'react-icons/ri';
import { GiHorseHead } from 'react-icons/gi';
import { FaUserFriends } from 'react-icons/fa';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { BiShuffle } from 'react-icons/bi';
import logo from './ihsalogo.png';
import './navbar.css';
import { Modal, message } from 'antd';

const iconStyle = {
  fontSize: '20px',
};

const linkStyle = {
  fontSize: '12px',
};

const NavBar = ({ handleLogout }) => {
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  const handleCancelLogout = () => {
    setLogoutModalVisible(false);
  };

  const confirmLogout = () => {
    setLogoutModalVisible(false);
    handleLogout();
    message.success('Logout successful');
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo-link">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link to="/manage-horses" style={linkStyle}>
            <GiHorseHead style={iconStyle} /> Manage Horses
          </Link>
        </li>
        <li>
          <Link to="/manage-riders" style={linkStyle}>
            <FaUserFriends style={iconStyle} /> Manage Riders
          </Link>
        </li>
        <li>
          <Link to="/randomize" style={linkStyle}>
            <BiShuffle style={iconStyle} /> Randomize
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
