import React, { useEffect, useRef, useState } from "react";
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
  const noteHeadingRef = useRef();
  const noteContentRef = useRef();

  function handleUpdate() {
    setLoading(true);
    const name = noteHeadingRef.current.innerText;
    const notes = noteContentRef.current.innerText;
    const noteBody = {
      name,
      notes,
    };
    fetch(apiUrl + `/api/note/${noteId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
      body: JSON.stringify(noteBody),
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log("Success", data);
        setLoading(false);
        setNoteData(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }

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
  }, [noteId, currentUser.token]);
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
            style={{
              textDecoration: "none",
              padding: "20px 10px",
              width: "100%",
              textAlign: "center",
            }}
            to="/home/all"
          >
            &#8592; Back to notes
          </Link>
          {isUpdating ? (
            <SecondaryButton onClick={handleUpdate}>Update</SecondaryButton>
          ) : null}
          {/* <small style={{ width: "100%", textAlign: "center" }}>
            Click to edit
          </small> */}
          <NoteHeading
            contentEditable="true"
            suppressContentEditableWarning={true}
            ref={noteHeadingRef}
            onInput={(e) => {
              setIsUpdating(true);
            }}
          >
            {noteData.name}
          </NoteHeading>
          <NoteContent
            contentEditable="true"
            ref={noteContentRef}
            suppressContentEditableWarning={true}
            onInput={(e) => {
              setIsUpdating(true);
            }}
          >
            {noteData.notes}
          </NoteContent>
        </>
      )}
    </Flex>
  );
}
