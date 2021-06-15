import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { InertiaPropErrors } from '@Interface/InertiaProps';

interface UInputProps {
  name: string
  label?: string;
  placeholder?: string;
  errors?: InertiaPropErrors
}

const UTextArea: React.FC<UInputProps> = ({ name, label, placeholder, errors }): JSX.Element => {
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
      }
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
        { ...(placeholder && {placeholder}) }
      />
      {renderError()}
    </div>
  )
}

export default UTextArea;
