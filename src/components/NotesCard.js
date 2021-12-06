import React from "react";
import { NavLink } from "react-router-dom";
import {
  Card,
  Flex,
  NoteHeading,
  NotePreview,
} from "./styles/Containers.style";
import { ViewPill } from "./styles/Pills.style";

export const NotesCard = ({ noteHeading, notePreview, link, handleDelete }) => {
  return (
    <Card>
      <Flex justifyContent="space-between" alignItems="center">
        <NoteHeading>{noteHeading}</NoteHeading>
      </Flex>
      <NotePreview>{notePreview}</NotePreview>
      <Flex justifyContent="space-between" alignItems="center">
        <ViewPill bgColor="red" onClick={handleDelete}>
          Delete
        </ViewPill>
        <NavLink to={link}>
          <ViewPill>View</ViewPill>
        </NavLink>
      </Flex>
    </Card>
  );
};
