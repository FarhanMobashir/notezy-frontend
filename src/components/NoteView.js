import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import { SkeletonNotesLoader } from "./SkeletonNotesLoader";
import { SecondaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";

const NoteHeading = styled.h1`
  align-self: flex-start;
  padding: 0px 20px;
  outline: none;
  width: 100%;
`;
const NoteContent = styled.p`
  text-align: left;
  padding: 0px 20px;
  align-self: flex-start;
  outline: none;
`;

export default function NoteView() {
  const { currentUser } = useAuth();
  const apiUrl = "https://notezy.herokuapp.com";
  const { noteId } = useParams();
  const [noteData, setNoteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  useEffect(() => {
    fetch(apiUrl + `/api/note/${noteId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("Success", data);
        setLoading(false);
        setNoteData(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, []);
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      wrap="wrap"
      padding="20px 0px"
    >
      {loading ? (
        <>
          <SkeletonNotesLoader />
        </>
      ) : (
        <>
          <Link
            style={{ textDecoration: "none", padding: "20px 10px" }}
            to="/home/all"
          >
            &#8592; Back to notes
          </Link>
          <small>Click to edit</small>
          <NoteHeading
            contentEditable="true"
            suppressContentEditableWarning={true}
            onInput={(e) => {
              setIsUpdating(true);
              console.log(e.target.innerText);
            }}
          >
            {noteData.name}
          </NoteHeading>
          <NoteContent
            contentEditable="true"
            suppressContentEditableWarning={true}
          >
            {noteData.notes}
          </NoteContent>
          {isUpdating ? <SecondaryButton>Update</SecondaryButton> : null}
        </>
      )}
    </Flex>
  );
}
