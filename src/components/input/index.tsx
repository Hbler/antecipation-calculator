import { InputHTMLAttributes } from "react";

import { InputContainer } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  field: any;
  placeholder: string;
  label?: string;
  errors?: any;
  checked?: any;
}

export default function Input({
  name,
  placeholder,
  label,
  errors,
  field,
  checked,
  ...rest
}: InputProps) {
  return (
    <InputContainer>
      {!!label && <label htmlFor={name}>{label}</label>}
      <input
        name={name}
        id={name}
        placeholder={placeholder}
        {...rest}
        {...field.inputProps}
        checked={field.value.includes(checked) ? true : false}
      />
      {!!errors && <small>{errors}</small>}
    </InputContainer>
  );
}
