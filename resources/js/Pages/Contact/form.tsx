import React from "react";
import { Form as UForm } from "@unform/web";
import { Inertia, Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

import MainLayout from "@Layout/Main";
import * as S from "@Style/ContactPageStyle";
import { InertiaPropErrors } from "@Interface/InertiaProps";
import UInput from "@Component/UInput";
import UTextArea from "@Component/UTextArea";
import GetIP from "@Service/GetIP";

interface FormProps {
  errors: InertiaPropErrors;
}

const Form: React.FC<FormProps> = (props): JSX.Element => {
  const { errors } = usePage<Page>().props

  const handleSubmit = async (data: any): Promise<void> => {
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

          <UForm onSubmit={handleSubmit}>
            <UInput name="name" label="Name" placeholder="Please insert your name" errors={errors} required/>
            <UInput name="email" label="E-mail" placeholder="Please insert your e-mail" errors={errors} required/>
            <UInput name="phone" label="Phone" placeholder="Please insert your phone" errors={errors} required/>
            <UTextArea name="message" label="Message" placeholder="Please enter with your message here" errors={errors} required/>
            <UInput type='file' name="attachment" label="Attachment (pdf, doc, docx, odt or txt)" errors={errors} required/>

            <S.Submit>Send</S.Submit>
          </UForm>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Form;
