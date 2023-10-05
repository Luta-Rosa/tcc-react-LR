import React from "react";
import { View, Text, SafeAreaView, } from "react-native";
import {ContentHeader, Description, ContentBody, ContentFooter, Title, Container, ViewButton} from "./styles";
import Styles from "./styles";

export default function Cadastro() {
  return (
    <>
    <SafeAreaView>
      <Container>

        <ContentHeader>
       <Title></Title>
      <Description></Description>
     
     <ViewButton></ViewButton>
      </ContentHeader>
      <ContentBody></ContentBody>
      <ContentFooter></ContentFooter>
     
      </Container>
      </SafeAreaView>
    </>
  );
}

export { Cadastro };
