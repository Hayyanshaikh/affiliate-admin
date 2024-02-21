const Textarea = ({ variant, type, label, value,readOnly, icon, placeholder, onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className={`field ${variant}`}>
      {label && <label className="field_label">{label}</label>}
      <textarea
        type={type ? type : "text"}
        value={value}
        readOnly={readOnly}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {icon && icon}
    </div>
  );
};

export default Textarea;
