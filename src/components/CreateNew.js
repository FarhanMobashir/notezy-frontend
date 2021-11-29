import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { SkeletonLoader } from "./SkeletonNotesLoader";
import { PrimaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { TextArea, TextInput } from "./styles/Inputs.style";
import { BasicToastContainer } from "./styles/Toasts.style";

export default function CreateNew() {
  const apiUrl = "https://notezy.herokuapp.com";
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});
  const navigate = useNavigate();
  const titleRef = useRef();
  const contentRef = useRef();
  const { currentUser } = useAuth();
  // console.log(currentUser);
  const createNewNote = (noteBody) => {
    fetch(apiUrl + "/api/note", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
      body: JSON.stringify(noteBody),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setLoading(false);
        setResponse(data.data);
        setSuccess(true);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();

    const title = titleRef.current.value;
    const content = contentRef.current.value;
    const noteBody = {
      name: title,
      notes: content,
    };
    if (title.length === 0 || content.length === 0) {
      setShowError(true);
      setLoading(false);
    } else {
      setShowError(false);
      createNewNote(noteBody);
    }
  }
  return (
    <>
      {loading ? (
        <SkeletonLoader loaderText="Hold on we're creating your notes...." />
      ) : (
        <form onSubmit={handleSubmit}>
          <Flex
            flexDirection="column"
            padding="20px 0px"
            justifyContent="center"
            alignItems="center"
          >
            {success ? (
              <Link
                style={{ textDecoration: "none" }}
                to={`/home/notes/${response._id}`}
              >
                <BasicToastContainer bgColor="green">
                  View note here
                </BasicToastContainer>
              </Link>
            ) : null}
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
      )}
    </>
  );
}
