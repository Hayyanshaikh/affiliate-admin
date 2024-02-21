import React from 'react';

const Button = ({ variant, children, onClick, className, icon }) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'outline':
        return 'button-outline';
      case 'fill':
        return 'button-fill';
      case 'text':
        return 'button-text';
      case 'link':
        return 'button-link';
      case 'file':
        return 'button-file';
      case 'disable':
        return 'button-disable';
      default:
        return 'button-fill';
    }
  };

  return (
    <button className={`button ${getButtonClass()} ${className ? className : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
