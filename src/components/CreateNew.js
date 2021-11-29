import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";
import { useAuth } from "../contexts/AuthContext";
import { PrimaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { TextArea, TextInput } from "./styles/Inputs.style";

export default function CreateNew() {
  const apiUrl = "https://notezy.herokuapp.com";
  const [showError, setShowError] = useState(false);
  const titleRef = useRef();
  const contentRef = useRef();
  const { currentUser } = useAuth();
  console.log(currentUser);
  const createNewNote = (data) => {
    fetch(apiUrl + "/api/note", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${currentUser.token}`,
      },
      body: data,
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("Success", data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const noteBody = {
      name: title,
      notes: content,
    };
    if (title.length === 0 || content.length === 0) {
      setShowError(true);
    } else {
      setShowError(false);
      console.log(noteBody);
      createNewNote(noteBody);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Flex
          flexDirection="column"
          padding="20px 0px"
          justifyContent="center"
          alignItems="center"
        >
          <TextInput ref={titleRef} placeholder="Enter your title" />
          <TextArea
            ref={contentRef}
            width="90%"
            height="50vh"
            placeholder="Enter the notes here"
            padding="5px 10px"
          />
          <PrimaryButton type="submit" margin="10px 0px">
            Create
          </PrimaryButton>
          {showError ? <p>Enter the title and content properly</p> : null}
        </Flex>
      </form>
    </>
  );
}
