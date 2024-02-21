import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import * as Icons from "react-icons/tb";
import { NavLink } from "react-router-dom";
import Navigation from "../api/Navigation.json";
import Logo from "../../components/logo/Logo.jsx";
import Button from '../../components/comman/Button.jsx';
import Notifications from "../api/Notifications.json";
import { logout } from '../../redux/slices/authSlice.js';
import LoginImage from '../assets/images/comman/login.svg';

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=> state.auth.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const formatTimestamp = (timestamp) => {
    const options = { hour: "2-digit", minute: "2-digit" };
    return new Date(timestamp).toLocaleTimeString([], options);
  };

  const handleLogout = () => {
    dispatch(logout(null));
  };

  const menuItems = [
    {
      id: 1,
      to: 'basic-information',
      icon: <Icons.TbSettings />,
      label: 'Settings',
    },
    {
      id: 2,
      to: 'website',
      icon: <Icons.TbLayoutGrid />,
      label: 'Website',
    },
    {
      id: 3,
      to: 'payment-settings',
      icon: <Icons.TbKey />,
      label: 'Payment Settings',
    }
  ];
  return (
    <header className="admin_header">
      <div className="container">
        <div className="header">
          <Logo link="/admin/dashboard" />
          <nav className={`nav navigation ${isMenuOpen ? "active" : ""}`}>
            <ul>
              {Navigation.map((menuItem, index) => (
                <li key={index}>
                  {menuItem.submenu ? (
                    <span className="nav_link">{menuItem.label}</span>
                  ) : (
                    <NavLink className="nav_link" to={menuItem.url}>{menuItem.label}</NavLink>
                  )}
                  {menuItem.submenu && <Icons.TbChevronDown />}
                  {menuItem.submenu && (
                    <ul className="sub_menu">
                      {menuItem.submenu.map((subMenuItem, subIndex) => (
                        <li key={subIndex}>
                          <NavLink className="nav_link" to={`${menuItem.url}/${subMenuItem.url}`}>{subMenuItem.label}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

            </ul>
          </nav>
          <nav className="nav">
            <ul className="nav_right_menu">
              <li>
                <Icons.TbBell />
                <div className="right_menu_dropdwon">
                  <div className="right_menu_dropdwon_header">
                    <h4 className="right_menu_dropdwon_heading">
                      notification
                    </h4>
                    <Icons.TbSettings />
                  </div>
                  <div className="right_menu_dropdwon_list">
                    {Notifications.map((notification) => (
                      <NavLink className="notification" key={notification.id}>
                        <div className="notification_icon">
                          <Icons.TbArchive />
                        </div>
                        <div className="notification_content">
                          <h5 className="notification_title">
                            {notification.message}
                          </h5>
                          <p className="notification_time">
                            {formatTimestamp(notification.timestamp)}
                          </p>
                        </div>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </li>
              <li>
                <Icons.TbUserCircle />
                <div className="right_menu_dropdwon profile_dropdown">
                  {
                    user ? (
                      <>
                        <div className="right_menu_dropdwon_header">
                          <figure className="user_img">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt=""/>
                          </figure>
                          <div className="right_menu_dropdwon_header_content">
                            <h4 className="right_menu_dropdwon_heading">{`${user.firstName} ${user.lastName}`}</h4>
                            <p className="right_menu_dropdwon_slogan">Publisher ID: {user.id}</p>
                          </div>
                        </div>
                        <div className="right_menu_dropdwon_list">
                          <ul className="sub_menu">
                            {menuItems.map((item) => (
                              <li key={item.id} className={item.className}>
                                <NavLink to={`profile/${item.to}`}>
                                  {item.icon}
                                  <span>{item.label}</span>
                                </NavLink>
                              </li>
                            ))}
                            <li className="logout_btn" onClick={handleLogout}>
                              <Icons.TbLogout />
                              <span>Logout</span>
                            </li>
                          </ul>
                        </div>
                      </>
                    ) : (
                      <div className="login_suggest">
                        <img src={LoginImage} alt=""/>
                        <h4>before making any changes, please log in.</h4>
                        <Button className="signin_btn">
                          <span>Sign in</span>
                        </Button>
                      </div>
                    )
                  }
                </div>
              </li>
              <li className={`menu_button ${isMenuOpen ? "active" : ""}`} onClick={handleToggleMenu}>
                {
                  isMenuOpen ? <Icons.TbX/> : <Icons.TbMenu2/>
                }
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
