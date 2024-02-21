import React from "react";
import Select from "react-select";

const SelectOption = ({ options, selectedValue, onChange,isMulti,label, placeholder }) => {
  return (
    <div className="">
      {label && <span className="field_label">{label}</span>}
      <Select
        isMulti={isMulti}
        value={selectedValue}
        options={options}
        onChange={onChange}
        placeholder={`Select ${placeholder ? placeholder : ""}...`}
      />
    </div>
  );
};

export default SelectOption;
