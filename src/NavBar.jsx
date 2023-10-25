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
          <Link to="/" style={linkStyle}>
            <RiHomeFill style={iconStyle} /> Home
          </Link>
        </li>
        <li>
          <Link to="/map" style={linkStyle}>
            <RiMapPin2Fill style={iconStyle} /> Map
          </Link>
        </li>
        <li>
          <Link to="/manage-events" style={linkStyle}>
            <RiCalendarTodoFill style={iconStyle} /> Manage Events
          </Link>
        </li>
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
          <Link to="/manage-announcements" style={linkStyle}>
            <BsFillChatQuoteFill style={iconStyle} /> Manage Announcements
          </Link>
        </li>
        <li>
          <Link to="/user-management" style={linkStyle}>
            <RiUserSearchFill style={iconStyle} /> User Management
          </Link>
        </li>
        <li>
          <Link to="/randomize" style={linkStyle}>
            <BiShuffle style={iconStyle} /> Randomize
          </Link>
        </li>
        <li>
          <Link to="/gallery" style={linkStyle}>
            <RiImageFill style={iconStyle} /> Gallery
          </Link>
        </li>
        <li>
          <Link to="/announcements" style={linkStyle}>
            <BsFillChatQuoteFill style={iconStyle} /> Announcements
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            <RiImageFill style={iconStyle} /> About Us
          </Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>
            <RiImageFill style={iconStyle} /> Contact
          </Link>
        </li>
        <li>
          <button className="login" onClick={showLogoutModal} style={linkStyle}>
            <RiLogoutBoxFill style={iconStyle} /> Logout
          </button>
        </li>
      </ul>
      <Modal
        title="Confirm Logout"
        visible={logoutModalVisible}
        onOk={confirmLogout}
        onCancel={handleCancelLogout}
        okText="Logout"
        cancelText="Cancel"
      >
        <p>Are you sure you want to logout?</p>
      </Modal>
    </div>
  );
};

export default NavBar;
