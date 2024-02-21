import React, { useState } from 'react';
import * as Icons from "react-icons/tb";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import usersData from '../../../api/usersData.json';
import Input from '../../../components/comman/Input.jsx';
import Alert from "../../../components/comman/Alert.jsx";
import Button from '../../../components/comman/Button.jsx';
import { login } from '../../../redux/slices/authSlice.js';
import Checkbox from '../../../components/comman/Checkbox.jsx';
import GoogleImage from '../../assets/images/socials/google.svg';
import LinkedInImage from '../../assets/images/socials/linkedin.svg';
import TwitterXImage from '../../assets/images/socials/twitterx.svg';
import AuthImage from '../../assets/images/comman/authentication_img.svg';

const Login = () => {
  const [alertData, setAlertData] = useState({
    message: "",
    type: "",
    visible: false,
  });
  const [formData, setFormData] = useState({
    email: 'guest@gmail.com',
    password: 'guest@123',
    isChecked: true,
  });
  const alert = (message, type) => {
    setAlertData({
      message: message,
      type: type,
      visible: true,
    });
  };

  const handleDismiss = () => {
    setAlertData({ ...alertData, visible: false })
  }

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleCheckboxChange = (isChecked) => {
    setFormData({...formData, isChecked: isChecked});
  };

  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state=> state.auth.isAuthenticated);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    const foundUser = usersData.find(user => user.email === formData.email && user.password === formData.password);

    if (foundUser && formData.isChecked) {
      dispatch(login(foundUser));
    } else {
      alert('Invalid email or password and terms & conditions check. Please try again.', 'error');
    }
  };

  return (
    <div className="authentication_layout">
    <Alert
        message={alertData.message}
        type={alertData.type}
        onDismiss={handleDismiss}
        visible={alertData.visible}
      />
      <div className="authentication_content">
        <div className="back_to_home">
          <Icons.TbArrowNarrowLeft/>
          <Link to="/" className="">back to home</Link>
        </div>
        <div className="welcome_text">
          <h2>welcome back.</h2>
          <p>Login with social media or your credentials</p>
        </div>
        <div className="login_with_social">
          <div className="login_with_social_item">
            <img src={GoogleImage} alt=""/>
            <span>Login with Google</span>
          </div>
          <div className="login_with_social_item">
            <img src={LinkedInImage} alt=""/>
          </div>
          <div className="login_with_social_item">
            <img src={TwitterXImage} alt=""/>
          </div>
        </div>
        <div className="login_or">
          <span>or</span>
        </div>
        <form className="login_form" onSubmit={handleLogin}>
          <div className="login_item">
            <Input
              type="email"
              label="Email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={(value) => handleChange('email', value)}
            />
          </div>
          <div className="login_item">
            <Input
              type="password"
              label="Password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={(value) => handleChange('password', value)}
            />
          </div>
          <div className="login_item forgot_pass">
            <Checkbox id="termsCheckbox" label="I agree to the terms and conditions" checked={formData.isChecked} onChange={handleCheckboxChange} />
            <Link className="button button-link">forgot your password?</Link>
          </div>
          <Button className="primary">
            <span>sign in</span>
          </Button>
        </form>
      </div>
      <div className="authentication_img">
        <figure>
          <img src={AuthImage} alt=""/>
        </figure>
      </div>
    </div>
  );
};

export default Login;
