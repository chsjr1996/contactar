import React from "react";
import { Link } from "@inertiajs/react";
import MainLayout from "@Layout/Main";
import * as S from '@Style/HomePageAboutStyles';

const About: React.FC = () => {
  return (
    <MainLayout>
      <S.Container>
        <S.SubContainer>
          <S.Title>About "Contactar"</S.Title>
          <S.Text>This application contains a sample of Contact Form.</S.Text>
          <Link className="btn btn-primary" href='/contact' as="button">Contact page</Link>
          <S.GithubFork>Fork me on Github</S.GithubFork>
        </S.SubContainer>
      </S.Container>
    </MainLayout>
  )
}

export default About;
