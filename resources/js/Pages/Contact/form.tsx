import React from "react";
import { Form as UForm } from '@unform/web';

import MainLayout from "@Layout/Main";
import * as S from "@Style/ContactPageStyle";
import UInput from "@Component/UInput";
import UTextArea from "@Component/UTextArea";

export default function Form() {
  const handleSubmit = (data: any) => {
    console.log(data);
  }

  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>I'm contact page</S.Title>

          <UForm onSubmit={handleSubmit}>
            <UInput name="name"/>
            <UInput name="email"/>
            <UInput name="phone"/>
            <UTextArea name="message"/>

            <S.Submit>Send</S.Submit>
          </UForm>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  );
}
