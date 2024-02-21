import React, { useState } from 'react';
import Button from '../../../components/comman/Button.jsx';
import Input from '../../../components/comman/Input.jsx';
import Divider from '../../../components/comman/Divider.jsx';

const LoginInfo = () => {
  const [loginInfo, setLoginInfo] = useState({
    userName: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (name) => (value) => {
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Login Information submitted:', loginInfo);
  };

  return (
    <div className="login_information profile_item">
      <div className="login_information_head profile_head">
        <h2 className="sub_heading">login information</h2>
        <small>Update Your Login Credentials</small>
      </div>
      <form className="profile_form">
        <div className="profile_form_item w-full">
          <Input
            label="User Name"
            placeholder="Enter your user name"
            name="userName"
            value={loginInfo.userName}
            onChange={handleChange('userName')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={loginInfo.email}
            onChange={handleChange('email')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Current Password"
            type="password"
            placeholder="Enter your current password"
            name="currentPassword"
            value={loginInfo.currentPassword}
            onChange={handleChange('currentPassword')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="New Password"
            type="password"
            placeholder="Enter your new password"
            name="newPassword"
            value={loginInfo.newPassword}
            onChange={handleChange('newPassword')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Confirm your new password"
            name="confirmPassword"
            value={loginInfo.confirmPassword}
            onChange={handleChange('confirmPassword')}
          />
        </div>
      </form>
      <Button onClick={handleSubmit}>Update</Button>
    </div>
  );
};

export default LoginInfo;
