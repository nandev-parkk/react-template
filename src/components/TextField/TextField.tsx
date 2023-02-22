import React from "react";
import styles from "./TextField.module.scss";

export default function TextField({
  type,
  value,
  autoFocus,
  disabled,
  id,
  name,
  readOnly,
  onChange,
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      value={value}
      autoFocus={autoFocus}
      disabled={disabled}
      id={id}
      name={name}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
}
