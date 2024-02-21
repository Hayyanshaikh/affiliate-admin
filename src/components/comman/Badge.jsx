import React from "react";

const Badge = ({ variant, label, className }) => {
  const getBadgeClass = () => {
    switch (variant) {
      case 'fill':
        return 'fill';
      case 'primary':
        return 'primary';
      case 'secondary':
        return 'secondary';
      case 'info':
        return 'info';
      case 'danger':
        return 'danger';
      case 'success':
        return 'success';
      case 'dark':
        return 'dark';
      default:
        return 'fill';
    }
  };

  return (
    <div className={`badge ${getBadgeClass()} ${className ? className : ""}`}>
      {label}
    </div>
  );
};

export default Badge;
