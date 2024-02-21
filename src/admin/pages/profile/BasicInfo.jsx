import React, { useState } from 'react';
import Country from '../../api/Country.json';
import Input from '../../../components/comman/Input.jsx';
import { useSelector } from 'react-redux';
import Button from '../../../components/comman/Button.jsx';
import Textarea from '../../../components/comman/Textarea.jsx';
import Dropzone from '../../../components/comman/Dropzone.jsx';
import SelectOption from '../../../components/comman/SelectOption.jsx';
import useFileSize from '../../../components/customHooks/useFileSize.jsx';

const BasicInfo = () => {
	const user = useSelector(state=> state.auth.user);
  const [formData, setFormData] = useState({
    firstName: user && user.firstName || '',
    lastName: user && user.lastName || '',
    bio: user && user.bio || '',
    language: {label:user && user.language, value:user && user.language} || '',
    targetRegion: {label:user && user.targetRegion, value:user && user.targetRegion}  || '',
    userName: user && user.userName || '',
    gender: {label:user && user.gender, value:user && user.gender} || '',
    dateOfBirth: user && user.dateOfBirth || '',
    address: user && user.address || '',
    zipCode: user && user.zipCode || '',
    country: {label:user && user.country, value:user && user.country}  || '',
    state: {label:user && user.state, value:user && user.state} || '',
    city: {label:user && user.city, value:user && user.city} || '',
    media: user && user.media || [],
  });

  const handleChange = (name) => (value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  const handleMediaDrop = (acceptedFiles) => {
    setFormData((prevData) => ({
      ...prevData,
      media: [...prevData.media, ...acceptedFiles],
    }));
  };

  const filesSizes = useFileSize(formData.media);


  const countries = Country.map(country=>({
  	label: country.name,
  	value: country.name,
  }))

  const states = [
    { value: 'sindh', label: 'Sindh' },
  ];

  const cities = [
    { value: 'karachi', label: 'Karachi' },
  ];

  const languages = [
    { value: 'english', label: 'English' },
  ];

  const targetRegions = [
    { value: 'north', label: 'North' },
  ];

  return (
    <div className="basic_info profile_item">
      <div className="basic_info_head profile_head">
        <h2 className="sub_heading">basic information</h2>
        <small>Set Up Your Personal Information</small>
      </div>
      <form className="profile_form">
        <div className="profile_form_item">
          <Input
            label="First Name"
            placeholder="Enter your first name"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange('firstName')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Last Name"
            placeholder="Enter your last name"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange('lastName')}
          />
        </div>
        <div className="profile_form_item w-full">
          <Textarea
            label="Bio"
            placeholder="Enter your bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange('bio')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="User Name"
            placeholder="Enter your user name"
            name="userName"
            value={formData.userName}
            onChange={handleChange('userName')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Gender"
            options={[
              { value: 'male', label: 'Male' },
              { value: 'female', label: 'Female' },
              { value: 'other', label: 'Other' },
            ]}
            selectedValue={formData.gender}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'gender')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Date of Birth"
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange('dateOfBirth')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Address"
            placeholder="Enter your address"
            name="address"
            value={formData.address}
            onChange={handleChange('address')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Zip Code"
            placeholder="Enter your zip code"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange('zipCode')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Country"
            options={countries}
            selectedValue={formData.country}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'country')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="State"
            options={states}
            selectedValue={formData.state}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'state')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="City"
            options={cities}
            selectedValue={formData.city}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'city')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Language"
            options={languages}
            selectedValue={formData.language}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'language')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Target Region"
            options={targetRegions}
            selectedValue={formData.targetRegion}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'targetRegion')}
          />
        </div>
        <div className="profile_form_item">
          <Dropzone onImageDrop={handleMediaDrop} />
          <div className="table_responsive">
            <table>
              <thead>
                <tr>
                  <th>File Name</th>
                  <th>File size</th>
                </tr>
              </thead>
              <tbody>
                {formData.media &&
                  formData.media.map((media, key) => (
                    <tr key={key}>
                      <td>{media.name}</td>
                      <td>{filesSizes[key]}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
      <Button onClick={handleSubmit}>Update</Button>
    </div>
  );
};

export default BasicInfo;