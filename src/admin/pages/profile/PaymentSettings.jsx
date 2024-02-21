import React, { useState } from 'react';
import Input from '../../../components/comman/Input.jsx';
import Button from '../../../components/comman/Button.jsx';
import Divider from '../../../components/comman/Divider.jsx';
import TagsSlider from '../../../components/sliders/TagsSlider.jsx';
import SelectOption from '../../../components/comman/SelectOption.jsx';

const PaymentSettings = () => {
  const [paymentData, setPaymentData] = useState({
    paymentFrequency: '',
    paymentThreshold: '$100',
    paymentMethod: '',
    defaultPaymentMethod: 'Active',
    bankCountry: '',
    accountHolderName: '',
    bankAccountNumber: '',
    bicSwiftCode: '',
    bankAccountType: '',
  });

  const handleChange = (name) => (value) => {
    setPaymentData({ ...paymentData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Payment Settings submitted:', paymentData);
    // Add logic to send the form data to the server
  };

  const paymentFrequencies = [
    { value: 'pleaseSelect', label: 'Please Select' },
  ];

  const commissionThresholds = [
    { value: '100', label: '100' },
    { value: '200', label: '200' },
    { value: '300', label: '300' },
  ];

  const paymentMethodsTags = [
    'Visa',
    'Master Card',
    'American Express',
    'Visa Debit',
    'Master Card Debit',
    'PayPal',
    'Apple Pay',
    'Google Pay',
    'Cash on Delivery (COD)',
    'Skrill',
    'Neteller',
    'Payoneer',
  ];

  const handleFormSubmitted = (event) => {
    event.preventDefault();
    handleSubmit();
  };

  const [selecedMethod, setSelecedMethod] = useState("visa");

  const handleFilterMethods = (method) => {
    setSelecedMethod(method);
  };

  return (
    <div className="payment_settings profile_item">
      <div className="payment_settings_head profile_head">
        <h2 className="sub_heading">payment settings</h2>
        <small>Set Up Your Payment Methods To Withdraw Funds</small>
      </div>
      <form className="profile_form" onSubmit={handleFormSubmitted}>
        <div className="profile_form_item">
          <SelectOption
            label="Payment Frequency"
            options={paymentFrequencies}
            selectedValue={paymentData.paymentFrequency}
            onChange={(selectedOption) => handleChange('paymentFrequency')(selectedOption)}
          />
        </div>
        <div className="profile_form_item">
          <SelectOption
            label="Payment Threshold"
            options={commissionThresholds}
            selectedValue={paymentData.paymentThreshold}
            onChange={(selectedOption) => handleChange('paymentThreshold')(selectedOption)}
          />
        </div>
        <div className="profile_form_item w-full">
          <small className="note">Note: You can schedule when you would like to receive your commission payments and at what threshold your Approved commissions must reach before payout.</small>
        </div>
        <div className="payment_settings_head profile_head">
        <Divider/>
          <h2 className="sub_heading">Payment Method</h2>
          <small>Select your active payment method where you want to withdraw funds.</small>
        </div>
        <div className="profile_form_item">
          <TagsSlider tags={paymentMethodsTags} onClick={handleFilterMethods} />
        </div>
        <div className="profile_form_item w-full">
          <h2 className="sub_heading">{selecedMethod}</h2>
        </div>
        <div className="profile_form_item">
          <Input
            label="Bank Country"
            placeholder="Enter bank country"
            name="bankCountry"
            value={paymentData.bankCountry}
            onChange={handleChange('bankCountry')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Account Holder Name"
            placeholder="Enter account holder name"
            name="accountHolderName"
            value={paymentData.accountHolderName}
            onChange={handleChange('accountHolderName')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Bank Account Number"
            placeholder="Enter bank account number"
            name="bankAccountNumber"
            value={paymentData.bankAccountNumber}
            onChange={handleChange('bankAccountNumber')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="BIC/SWIFT Code/BSB"
            placeholder="Enter BIC/SWIFT Code/BSB"
            name="bicSwiftCode"
            value={paymentData.bicSwiftCode}
            onChange={handleChange('bicSwiftCode')}
          />
        </div>
        <div className="profile_form_item">
          <Input
            label="Bank Account Type"
            placeholder="Enter bank account type"
            name="bankAccountType"
            value={paymentData.bankAccountType}
            onChange={handleChange('bankAccountType')}
          />
        </div>
      </form>
      <Button onClick={handleSubmit}>Update</Button>
    </div>
  );
};

export default PaymentSettings;