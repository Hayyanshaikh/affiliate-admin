import React, { useState, useEffect } from 'react';
import Country from '../../api/Country.json';
import Input from '../../../components/comman/Input.jsx';
import Textarea from '../../../components/comman/Textarea.jsx';
import { useSelector } from 'react-redux';
import Button from '../../../components/comman/Button.jsx';
import SelectOption from '../../../components/comman/SelectOption.jsx';

const Company = () => {
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    companyName: user && user.companyName || '',
    legalEntityType: user && user.legalEntityType || '',
    country: { label: user && user.country, value: user && user.country } || '',
    state: { label: user && user.state, value: user && user.state } || '',
    city: { label: user && user.city, value: user && user.city } || '',
    zipCode: user && user.zipCode || '',
    addressLine1: user && user.addressLine1 || '',
    addressLine2: user && user.addressLine2 || '',
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

  const countries = Country.map((country) => ({
    label: country.name,
    value: country.name,
  }));

  const states = [
    { value: 'sindh', label: 'Sindh' },
    // Add other states as needed
  ];

  const cities = [
    { value: 'karachi', label: 'Karachi' },
    // Add other cities as needed
  ];

  useEffect(() => {
    // Update form data when user data changes
    if (user) {
      setFormData({
        companyName: user.companyName || '',
        legalEntityType: user.legalEntityType || '',
        country: { label: user.country, value: user.country } || '',
        state: { label: user.state, value: user.state } || '',
        city: { label: user.city, value: user.city } || '',
        zipCode: user.zipCode || '',
        addressLine1: user.addressLine1 || '',
        addressLine2: user.addressLine2 || '',
      });
    }
  }, [user]);

  return (
    <div className="company profile_item">
      <div className="profile_head">
        <h2 className="sub_heading">Company</h2>
        <small>Set Up Your Company</small>
      </div>
      <form className="profile_form">
        <div className="profile_form_item">
          <Input
            label="Company Name"
            placeholder="Enter your company name"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange('companyName')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Legal Entity Type"
            options={[
              { value: 'type1', label: 'Type 1' },
              { value: 'type2', label: 'Type 2' },
              // Add other legal entity types as needed
            ]}
            selectedValue={formData.legalEntityType}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'legalEntityType')}
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
        <div className="profile_form_item w-full">
          <Textarea
            label="Address Line 1"
            placeholder="Enter your address"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange('addressLine1')}
          />
        </div>
        <div className="profile_form_item w-full">
          <Textarea
            label="Address Line 2"
            placeholder="Enter your address"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange('addressLine2')}
          />
        </div>
        <div className="profile_form_item">
          <Button onClick={handleSubmit}>Update</Button>
        </div>
      </form>
    </div>
  );
};

export default Company;