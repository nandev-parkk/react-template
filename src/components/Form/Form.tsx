import React from "react";
import styles from "./Form.module.scss";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
  legend: string;
}

export default function Form({
  children,
  className,
  legend,
  onSubmit,
}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={className}>
      <fieldset>
        <legend>{legend}</legend>
        {children}
      </fieldset>
    </form>
  );
}
