import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import notes from "../assets/notes.svg";
import { isAuthenticated } from "./PrivateRoute";
const Heading = styled.h1`
  font-size: 48px;
  margin: 0px;
`;

const SubHeading = styled.p`
  font-size: 18px;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 30px 0px;
`;

export default function LandingPage() {
  if (isAuthenticated()) {
    return <Navigate to="/home" />;
  }
  return (
    <Flex
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      {/* <h1 style={{ padding: "10px" }} contentEditable="true">
        Heelo melo
      </h1> */}
      <Heading>Notezy</Heading>
      <SubHeading>Note making become easy</SubHeading>
      <Image src={notes}></Image>
      <Flex justifyContent="space-between" alignItems="center">
        <Link to="/signin">
          <PrimaryButton margin="0px 5px">Login</PrimaryButton>
        </Link>
        <Link to="/signup">
          <SecondaryButton margin="0px 5px">Signup</SecondaryButton>
        </Link>
      </Flex>
    </Flex>
  );
}
