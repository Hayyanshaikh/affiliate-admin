import React from 'react';
import * as Icons from 'react-icons/tb';
import { useSelector } from 'react-redux';
import {NavLink, Outlet} from 'react-router-dom';
import userImage from '../../assets/images/users/user.png';
import ProgressBar from '../../../components/comman/ProgressBar.jsx';

const ProfileLayout = () => {
	const user = useSelector(state=> state.auth.user);
	const profileNav = [
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
      to: 'company',
      icon: <Icons.TbBuilding />,
      label: 'Company',
    }
  ];

	const paymentsNav = [
    {
      id: 1,
      to: 'billing-information',
      icon: <Icons.TbCreditCard />,
      label: 'Billing Information',
    },
    {
      id: 2,
      to: 'payment-settings',
      icon: <Icons.TbCreditCard />,
      label: 'Payment Settings',
    }
  ];
	const accountsNav = [
    {
    id: 1, // Add a new item for Login Information
    to: 'login-info',
    icon: <Icons.TbShieldCheck />,
    label: 'Login Information',
  },
  {
    id: 4, // Add another new item for Login History
    to: 'login-history',
    icon: <Icons.TbHistoryToggle />,
    label: 'Login History',
  },
  ];

  const progress = 75;
	return (
		<section className="profile">
			<div className="container">
				<div className="profile_layout wrapper">
					<aside className="profile_side sidebar">
			      <div className="profile_detail">
			      	<figure className="profile_image">
				        <img src={userImage} alt="Profile" />
				      </figure>
				      <div className="profile_content">
				      	<h4>{user ? `${user.firstName} ${user.lastName}` : "Unknown"}</h4>
				      	<p>{user ? user.email : "fake@mail.com"}</p>
				      </div>
			      	<ProgressBar data={progress} color="#48cb49"/>
			      </div>
			      <div className="profile_menu_item sidebar_item">
			      	<h2 className="sub_heading">Profile</h2>
				      <ul className="profile_nav">
				        {profileNav.map((item) => (
				          <li key={item.id}>
				            <NavLink to={item.to}>
				              {item.icon}
				              <span>{item.label}</span>
				              <Icons.TbChevronRight/>
				            </NavLink>
				          </li>
				        ))}
				      </ul>
			      </div>
			      <div className="profile_menu_item sidebar_item">
			      	<h2 className="sub_heading">Payments</h2>
				      <ul className="profile_nav">
				        {paymentsNav.map((item) => (
				          <li key={item.id}>
				            <NavLink to={item.to}>
				              {item.icon}
				              <span>{item.label}</span>
				              <Icons.TbChevronRight/>
				            </NavLink>
				          </li>
				        ))}
				      </ul>
			      </div>
			      <div className="profile_menu_item sidebar_item">
			      	<h2 className="sub_heading">Account</h2>
				      
				      <ul className="profile_nav">
				        {accountsNav.map((item) => (
				          <li key={item.id}>
				            <NavLink to={item.to}>
				              {item.icon}
				              <span>{item.label}</span>
				              <Icons.TbChevronRight/>
				            </NavLink>
				          </li>
				        ))}
				      </ul>
			      </div>
			    </aside>
					<article className="profile_main main">
						<Outlet/>
					</article>		
				</div>
			</div>
		</section>
	)
}

export default ProfileLayout;