import React from "react";
import { Form as UForm } from "@unform/web";
import { Inertia, Page } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";

import MainLayout from "@Layout/Main";
import * as S from "@Style/ContactPageStyle";
import { InertiaPropErrors } from "@Interface/InertiaProps";
import UInput from "@Component/UInput";
import UTextArea from "@Component/UTextArea";

interface FormProps {
  errors: InertiaPropErrors;
}

const Form: React.FC<FormProps> = (props): JSX.Element => {
  const { errors } = usePage<Page>().props

  const handleSubmit = (data: any): void => {

    Inertia.post('/contact', data);

  }

  const renderError = (fieldName: string) => {
  }

  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>I'm contact page</S.Title>

          <UForm onSubmit={handleSubmit}>
            <UInput name="name" label="Name" placeholder="Please insert your name" errors={errors}/>
            <UInput name="email" label="E-mail" placeholder="Please insert your e-mail" errors={errors}/>
            <UInput name="phone" label="Phone" placeholder="Please insert your phone" errors={errors}/>
            <UTextArea name="message" label="Message" placeholder="Please enter with your message here" errors={errors}/>

            <S.Submit>Send</S.Submit>
          </UForm>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}

export default Form;
