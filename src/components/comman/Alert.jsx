import React from "react";
import * as Icons  from "react-icons/tb";

const Alert = ({ message, type, onDismiss, visible }) => {
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  let icon = null;

  switch (type) {
    case "success":
      icon = <Icons.TbSquareRoundedCheckFilled />;
      break;
    case "warning":
      icon = <Icons.TbAlertSquareRoundedFilled />;
      break;
    case "error":
      icon =  <Icons.TbSquareRoundedXFilled />;
      break;
    default:
      icon = null;
  }

  return (
    <>
      <div className={`alert ${type} ${visible ? "active" : ""}`}>
        {icon && icon}
        <p>{message}</p>
        <button className="dismiss" onClick={handleDismiss}>
          <Icons.TbX />
        </button>
      </div>
    </>
  );
};

export default Alert;
