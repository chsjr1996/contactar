import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InertiaPropErrors } from '@Interface/InertiaProps';

interface UInputProps {
  name: string
  label?: string;
  placeholder?: string;
  required?: boolean;
  errors?: InertiaPropErrors
}

const UTextArea: React.FC<UInputProps> = (props): JSX.Element => {
  const {
    name,
    label,
    placeholder,
    required,
    errors
  } = props;

  const textAreaRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textAreaRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
          ref.current.value = ''
      },
    });
  }, [fieldName, registerField]);

  const textAreaClasses = () => {
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
      <textarea
        className={textAreaClasses()}
        ref={textAreaRef}
        defaultValue={defaultValue}
        { ...(required && { required }) }
        { ...(placeholder && {placeholder}) }
      />
      {renderError()}
    </div>
  )
}

export default UTextArea;
