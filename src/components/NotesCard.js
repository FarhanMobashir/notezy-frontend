import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Flex,
  NoteHeading,
  NotePreview,
} from "./styles/Containers.style";
import { ViewPill } from "./styles/Pills.style";

export const NotesCard = ({ noteHeading, notePreview, link }) => {
  return (
    <Card>
      <Flex justifyContent="space-between" alignItems="center">
        <NoteHeading>{noteHeading}</NoteHeading>
        <NavLink to={link}>
          <ViewPill>View</ViewPill>
        </NavLink>
      </Flex>
      <NotePreview>{notePreview}</NotePreview>
    </Card>
  );
};
