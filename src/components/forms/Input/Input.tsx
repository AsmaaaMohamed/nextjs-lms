import React from "react";
import { Form } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type InputProps<TFieldValue extends FieldValues> = {
  placeHolder: string;
  name: Path<TFieldValue>;
  type?: string;
  register: UseFormRegister<TFieldValue>;
  error?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
};
const Input = <TFieldValue extends FieldValues>({
  placeHolder,
  type = "text",
  register,
  name,
  error,
  onBlur,
  formText,
  success,
  disabled,
}: InputProps<TFieldValue>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) onBlur(e);
    register(name).onBlur(e);
  };
  return (
    <Form.Group className="mb-3">
      <Form.Control
        type={type}
        placeholder={placeHolder}
        {...register(name)}
        onBlur={onBlurHandler}
        isInvalid={!!error}
        isValid={!!success}
        disabled={disabled}
      />
      <Form.Control.Feedback type="invalid" className="d-block">
        {error}
      </Form.Control.Feedback>
      <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
      {formText && <Form.Text muted>{formText}</Form.Text>}
    </Form.Group>
  );
};

export default Input;
