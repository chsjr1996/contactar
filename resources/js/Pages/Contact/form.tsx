import React, { useEffect, useRef, useState } from "react";
import { Form as UForm } from "@unform/web";
import { FormHandles, SubmitHandler } from '@unform/core';
import { router, usePage } from "@inertiajs/react";
import MainLayout from "@Layout/Main";
import * as S from "@Root/Styles/ContactPageFormStyle";
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
  const { errors, title, message } = usePage().props

  const acceptedFiles = 'application/msword, text/plain, application/pdf, application/vnd.oasis.opendocument.text';

  useEffect(() => {
    if (title && message) {
      // TODO: add missing notification hook here!
    }
  }, [message, errors]);

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

    router.post('/contact', formData, {
      onSuccess: () => {
        setLoading(false)
        formRef.current?.reset();
      },
      onFinish: (visit: any) => { setLoading(false) }
    });
  }

  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>Contact form</S.Title>

          <UForm ref={formRef} onSubmit={handleSubmit}>
            <UInput
              name="name"
              label="Name"
              placeholder="Please insert your name"
              errors={errors}
              required
            />

            <UInput
              name="email"
              label="E-mail"
              placeholder="Please insert your e-mail"
              errors={errors}
              required
            />

            <UInput
              name="phone"
              label="Phone"
              placeholder="Please insert your phone"
              errors={errors}
              required
            />

            <UTextArea
              name="message"
              label="Message"
              placeholder="Please enter with your message here"
              errors={errors}
              required
            />

            <UInput
              type='file'
              name="attachment"
              label="Attachment (pdf, doc, docx, odt or txt)"
              accept={acceptedFiles}
              errors={errors}
              required
            />

            <S.Submit>{ loading ? '...' : 'Send' }</S.Submit>
          </UForm>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Form;
