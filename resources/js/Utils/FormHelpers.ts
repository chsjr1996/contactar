import { get as _get } from 'lodash';

export type FieldMap = {
  fieldRef: string;
  formName: string;
  defaultValue?: string;
};

export const handleFormFields = (
  formData: FormData,
  formRef: React.MutableRefObject<any>,
  fields: FieldMap[]
): void => {
  if (fields.length === 0) {
    return;
  }

  fields.map((field) => {
    const fieldValue = _get(formRef, field.fieldRef, field.defaultValue ?? '');
    formData.append(field.formName, fieldValue);
  });
};
