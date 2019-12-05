import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  ErrorMessage,
  Field
} from "reactstrap";
const InputField = ({
  label,
  htmlFor,
  type,
  name,
  className,
  value,
  onChange,
  onBlur,
  errorLabel,
  errorClassname,
  errorName,
  graphicDiveClass,
  graphicClassname,
  placeholder
}) => {
  return (
    //  <FormGroup>
    <div className="form-group">
      {/* <Label htmlFor={htmlFor}>{label}</Label> */}
      <div className={graphicDiveClass}>
        <i className={graphicClassname}></i>
      </div>
      <Input
        name={name}
        type={type}
        className={className}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      <div name={errorName} className={errorClassname}>
        {errorLabel}
      </div>
    </div>
    // </FormGroup>
  );
};

export default InputField;
