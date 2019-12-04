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
  errorName
}) => {
  return (
    <FormGroup>
      <div className="form-group">
        <Label htmlFor={htmlFor}>{label}</Label>
        <Input
          name={name}
          type={type}
          className={className}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <div name={errorName} className={errorClassname}>
          {errorLabel}
        </div>
      </div>
    </FormGroup>
  );
};

export default InputField;
