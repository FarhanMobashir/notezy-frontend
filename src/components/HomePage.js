import React from "react";
import styled from "styled-components";
import { SecondaryButton, TertiaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { ViewPill } from "./styles/Pills.style";
import { Outlet } from "react-router-dom";

import notebook from "../assets/notebook.svg";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Heading = styled.h1`
  text-decoration: none;
  color: black;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Image = styled.img`
  width: 200px;
  height: auto;
  margin: 30px 0px;
`;

export default function HomePage() {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  console.log(currentUser);
  const handleLogout = () => {
    localStorage.removeItem("notezy");
    navigate("/");
  };
  return (
    <>
      <Flex
        justifyContent="space-around"
        bgColor={({ theme }) => theme.colors.primary100}
        alignItems="center"
      >
        <Link style={{ textDecoration: "none" }} to="/home">
          <Heading>Notezy</Heading>
        </Link>
        <ViewPill onClick={handleLogout}>Logout</ViewPill>
      </Flex>
      <Flex
        justifyContent="space-around"
        bgColor={({ theme }) => theme.colors.primary100}
        alignItems="center"
        position="sticky"
        top="0px"
        padding="10px 0px"
      >
        <Link to="/home/all">
          <TertiaryButton>All notes</TertiaryButton>
        </Link>
        <Link to="/home/new">
          <TertiaryButton>Create New</TertiaryButton>
        </Link>
      </Flex>
      <Outlet />
    </>
  );
}

export const HomeGreet = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading>Welcome back !</Heading>
        <Image src={notebook} />
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Link to="/home/all">
          <SecondaryButton margin="0px 10px">All notes</SecondaryButton>
        </Link>
        <Link to="/home/new">
          <TertiaryButton margin="0px 10px">Create New</TertiaryButton>
        </Link>
      </Flex>
    </>
  );
};
