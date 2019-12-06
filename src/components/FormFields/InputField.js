import React from "react";
import { FormGroup, Label, Input, FormFeedback } from "reactstrap";
import "./input-field.scss";
const InputField = ({
  label,
  type = "text",
  name,
  className,
  value,
  onChange,
  onBlur,
  errorLabel,
  iconClass,
  placeholder
}) => {
  console.log(errorLabel);
  return (
    <FormGroup className="input-field-component">
      <Label className="field-label">{label}</Label>
      <div className="field-wrap">
        <i className={`icon graphic ${iconClass}`}></i>
        <Input
          name={name}
          type={type}
          className={className}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
        <FormFeedback>{errorLabel}</FormFeedback>
      </div>
    </FormGroup>
  );
};

export default InputField;
