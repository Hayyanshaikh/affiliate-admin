import React from 'react'
import logo from '../../assets/images/brand/logo.png';
import { Link } from 'react-router-dom';

const Logo = ({link}) => {
	return (
		<Link to={link} className="logo">
    	<img src={logo} alt="logo"/>
    </Link>
	)
}

export default Logo