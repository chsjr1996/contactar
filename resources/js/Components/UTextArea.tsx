import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

interface UInputProps {
  name: string
}

const UTextArea: React.FC<UInputProps> = (props): JSX.Element => {
  const textAreaRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(props.name);

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

  return <textarea ref={textAreaRef} defaultValue={defaultValue} />
}

export default UTextArea;
