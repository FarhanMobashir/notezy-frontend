import React from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import notes from "../assets/notes.svg";
import googlePlay from "../assets/google-play.png";
import { isAuthenticated } from "./PrivateRoute";
const Heading = styled.h1`
  font-size: 48px;
  margin: 0px;
`;

const SubHeading = styled.p`
  font-size: 18px;
  margin: 5px 0px;
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
      <Heading>Mera Notebook</Heading>
      <SubHeading>Note making become easy</SubHeading>
      <Image src={notes}></Image>
      <Flex justifyContent="space-between" alignItems="center">
        <Link to="/signup">
          <SecondaryButton margin="0px 5px">Signup</SecondaryButton>
        </Link>
        <Link to="/signin">
          <PrimaryButton margin="0px 5px">Login</PrimaryButton>
        </Link>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="center"
        margin="60px 0px 0px 0px"
      >
        <img
          style={{ width: "150px", height: "auto" }}
          src={googlePlay}
          alt="googleplay"
        />
        <SubHeading>Coming soon</SubHeading>
      </Flex>
    </Flex>
  );
}
