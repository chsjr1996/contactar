import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface UInputProps {
  name: string
  placeholder?: string;
}

const UInput: React.FC<UInputProps> = (props): JSX.Element => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(props.name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      }
    });
  }, [fieldName, registerField]);

  return (
    <div className="form-group">
      <input className="form-control" ref={inputRef} defaultValue={defaultValue} />
    </div>
  )
}

export default UInput;
