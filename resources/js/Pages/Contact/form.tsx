import React, { useEffect, useRef, useState } from "react";
import { Form as UForm } from "@unform/web";
import { FormHandles, SubmitHandler } from '@unform/core';
import { Inertia, Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

import MainLayout from "@Layout/Main";
import * as S from "@Style/ContactPageStyle";
import UInput from "@Component/UInput";
import UTextArea from "@Component/UTextArea";
import GetIP from "@Service/GetIP";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  attachment: Blob;
  [key: string]: string | Blob;
}

const Form: React.FC = (): JSX.Element => {
  const formRef = useRef<FormHandles>(null);
  const [loading, setLoading] = useState(false);
  const { errors, title, message, clearTime } = usePage<Page>().props

  useEffect(() => {
    if (clearTime || Object.keys(errors).length) {
      setLoading(false);
    }

    if (clearTime) {
      formRef.current?.reset();
    }

    if (title && message) {
      store.addNotification({
        title: title as string,
        message: message as string,
        type: 'success',
        container: 'bottom-right'
      })
    }
  }, [clearTime, message, errors]);

  const handleSubmit: SubmitHandler<FormData> = async (data): Promise<void> => {
    if (loading) {
      return;
    }

    setLoading(true);
    const formData = new FormData();

    Object.keys(data).map((k: string) => {
      formData.append(k, data[k]);
    });

    formData.append('ip', await GetIP());

    Inertia.post('/contact', formData);
  }

  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>Contact form</S.Title>

          <UForm ref={formRef} onSubmit={handleSubmit}>
            <UInput name="name" label="Name" placeholder="Please insert your name" errors={errors} required/>
            <UInput name="email" label="E-mail" placeholder="Please insert your e-mail" errors={errors} required/>
            <UInput name="phone" label="Phone" placeholder="Please insert your phone" errors={errors} required/>
            <UTextArea name="message" label="Message" placeholder="Please enter with your message here" errors={errors} required/>
            <UInput type='file' name="attachment" label="Attachment (pdf, doc, docx, odt or txt)" errors={errors} required/>

            <S.Submit>{ loading ? '...' : 'Send' }</S.Submit>
          </UForm>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Form;
