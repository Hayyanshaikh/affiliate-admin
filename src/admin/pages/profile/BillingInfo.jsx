import React, { useState } from 'react';
import Country from '../../api/Country.json';
import Input from '../../../components/comman/Input.jsx';
import { useSelector } from 'react-redux';
import Button from '../../../components/comman/Button.jsx';
import Textarea from '../../../components/comman/Textarea.jsx';
import SelectOption from '../../../components/comman/SelectOption.jsx';

const BillingInfo = () => {
  const user = useSelector((state) => state.auth.user);
  const [formData, setFormData] = useState({
    billingName: user && user.billingName || '',
    billingPhone: user && user.billingPhone || '',
    billingAddress: user && user.billingAddress || '',
    billingZipCode: user && user.billingZipCode || '',
    billingCountry: { label: user && user.billingCountry, value: user && user.billingCountry } || '',
    billingState: { label: user && user.billingState, value: user && user.billingState } || '',
    billingCity: { label: user && user.billingCity, value: user && user.billingCity } || '',
    companyRegistrationNumber: user && user.companyRegistrationNumber || '',
    taxVatNumber: user && user.taxVatNumber || '',
  });

  const handleChange = (name) => (value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSelectChange = (selectedOption, name) => {
    setFormData({ ...formData, [name]: selectedOption });
  };

  const handleSubmit = () => {
    console.log('Billing Info submitted:', formData);
  };

  const countries = Country.map((country) => ({
    label: country.name,
    value: country.name,
  }));

  const states = [
    { value: 'sindh', label: 'Sindh' },
  ];

  const cities = [
    { value: 'karachi', label: 'Karachi' },
  ];

  return (
    <div className="billing_info profile_item">
      <div className="billing_info_head profile_head">
        <h2 className="sub_heading">billing information</h2>
        <small>Set Up Your Billing Information</small>
      </div>
      <form className="profile_form">
        <div className="profile_form_item">
          <Input
            label="Billing Name"
            placeholder="Enter billing name"
            name="billingName"
            value={formData.billingName}
            onChange={handleChange('billingName')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Billing Phone"
            placeholder="Enter billing phone"
            name="billingPhone"
            value={formData.billingPhone}
            onChange={handleChange('billingPhone')}
          />
        </div>
        <div className="profile_form_item w-full">
          <Textarea
            label="Billing Address"
            placeholder="Enter billing address"
            name="billingAddress"
            value={formData.billingAddress}
            onChange={handleChange('billingAddress')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Zip Code"
            placeholder="Enter zip code"
            name="billingZipCode"
            value={formData.billingZipCode}
            onChange={handleChange('billingZipCode')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Billing Country"
            options={countries}
            selectedValue={formData.billingCountry}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'billingCountry')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Billing State"
            options={states}
            selectedValue={formData.billingState}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'billingState')}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Billing City"
            options={cities}
            selectedValue={formData.billingCity}
            onChange={(selectedOption) => handleSelectChange(selectedOption, 'billingCity')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Company Registration Number"
            placeholder="Enter company registration number"
            name="companyRegistrationNumber"
            value={formData.companyRegistrationNumber}
            onChange={handleChange('companyRegistrationNumber')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="TAX/VAT Number"
            placeholder="Enter TAX/VAT number"
            name="taxVatNumber"
            value={formData.taxVatNumber}
            onChange={handleChange('taxVatNumber')}
          />
        </div>
      </form>
      <Button onClick={handleSubmit}>Update</Button>
    </div>
  );
};

export default BillingInfo;