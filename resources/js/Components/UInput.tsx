import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InertiaPropErrors } from '@Root/Interfaces/InertiaProps';

interface UInputProps {
  name: string
  label?: string;
  type?: 'text' | 'email' | 'file';
  placeholder?: string;
  required?: boolean;
  errors?: InertiaPropErrors;
}

const UInput: React.FC<UInputProps> = (props): JSX.Element => {
  const {
    name,
    label,
    type,
    placeholder,
    required,
    errors
  } = props;

  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: type === 'file' ? 'files[0]' : 'value',
      clearValue: ref => {
        ref.value = ''
      },
    });
  }, [fieldName, registerField]);

  const inputClasses = () => {
    if (errors && errors[name]) {
      return "form-control border-danger";
    }
    return "form-control";
  }

  const renderError = () => {
    if (errors && errors[name]) {
      return <small className="text-danger">{errors[name]}</small>
    }
  }

  return (
    <div className="form-group">
      { label && <label>{label}</label> }
      <input
        type={type}
        className={inputClasses()}
        ref={inputRef}
        defaultValue={defaultValue}
        { ...(required && { required }) }
        { ...(placeholder && { placeholder }) }
      />
      {renderError()}
    </div>
  )
}

UInput.defaultProps = {
  type: 'text'
}

export default UInput;
