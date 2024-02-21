import React from 'react';
import * as Icons from "react-icons/tb";

const Checkbox = ({ label, checked, onChange, id }) => {
  const handleCheckboxChange = (e) => {
    onChange(e.target.checked);
  };

  return (
    <div className="checkbox">
      <input type="checkbox" id={id} checked={checked} onChange={handleCheckboxChange} />
      <span className="checked">
        <Icons.TbCheck/>
      </span>
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
