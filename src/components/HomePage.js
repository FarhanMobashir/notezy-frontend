import React from "react";
import styled from "styled-components";
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
} from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { ViewPill } from "./styles/Pills.style";
import { Outlet } from "react-router-dom";

import notebook from "../assets/notebook.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Heading = styled.h1`
  text-decoration: none;
  color: ${(props) => props.color || "black"};
  text-align: center;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const SubHeading = styled.p`
  color: ${({ theme }) => theme.colors.black300};
  text-align: center;
  margin: 0;
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 30px 0px;
`;

export default function HomePage() {
  const navigate = useNavigate();
  // console.log(currentUser);
  const handleLogout = () => {
    localStorage.removeItem("notezy");
    navigate("/");
  };

  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="space-around"
        bgColor={({ theme }) => theme.colors.primary300}
        alignItems="center"
      >
        <Link style={{ textDecoration: "none" }} to="/home">
          <Heading color="white">MeraNotebook</Heading>
        </Link>
        <ViewPill onClick={handleLogout}>Logout</ViewPill>
      </Flex>
      <Flex
        justifyContent="space-around"
        bgColor={({ theme }) => theme.colors.primary300}
        alignItems="center"
        width="100%"
        position="sticky"
        top="0"
        padding="10px 0px"
      >
        <Link to="/home/all">
          <TertiaryButton padding="5px 10px">All notes</TertiaryButton>
        </Link>
        <Link to="/home/new">
          <TertiaryButton padding="5px 10px">Create New</TertiaryButton>
        </Link>
      </Flex>
      <Outlet />
    </Flex>
  );
}

export const HomeGreet = ({ heading, subHeading }) => {
  return (
    <Flex flexDirection="column">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="50vh"
      >
        <Heading>{heading}</Heading>
        <SubHeading>{subHeading}</SubHeading>

        <Image src={notebook} />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Link to="/home/all">
          <SecondaryButton margin="0px 10px">All notes</SecondaryButton>
        </Link>
        <Link to="/home/new">
          <PrimaryButton margin="0px 10px">Create New</PrimaryButton>
        </Link>
      </Flex>
    </Flex>
  );
};
