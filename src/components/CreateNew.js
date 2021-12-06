import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import { SkeletonLoader } from "./SkeletonNotesLoader";
import { PrimaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";
import { TextArea, TextInput } from "./styles/Inputs.style";
import { BasicToastContainer } from "./styles/Toasts.style";

const emojis = [
  "😀",
  "😁",
  "😂",
  "🤣",
  "😃",
  "😄",
  "🎈",
  "🎆",
  "🎇",
  "🧨",
  "✨",
  "🎉",
  "🎊",
  "🎃",
  "👓",
  "🍕",
  "🍔",
  "🍟",
  "🌭",
  "🍿",
  "🧂",
  "🥓",
  "🥚",
  "🍖",
  "🛹",
  "🚲",
  "🚨",
  "⛽",
  "🚀",
  "🚦",
  "🌍",
  "🧭",
  "⛈",
  "🌧",
  "⚡",
  "❄",
  "🌈",
  "🎮",
  "🔊",
  "📢",
  "♟",
  "♥",
  "🎯",
  "🏆",
  "🏀",
  "🗝",
  "🔐",
  "🧪",
  "🧲",
  "📸",
  "📓",
  "📒",
  "📔",
  "📕",
  "📗",
  "📘",
  "💰",
];

export default function CreateNew() {
  const apiUrl = "https://notezy.herokuapp.com";
  const [success, setSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState({});

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

  // function handleEmoji(e) {
  //   const emoji = e.target.innerText;
  //   titleRef.current.value += emoji;
  //   titleRef.current.focus();
  // }

  function getRandomEmoji(emojis) {
    return emojis[Math.floor(Math.random() * emojis.length)];
  }
  console.log(getRandomEmoji(emojis));
  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    let emoji = getRandomEmoji(emojis);
    const titleVal = titleRef.current.value;
    let title = emoji + " " + titleVal;
    const content = contentRef.current.value;
    const noteBody = {
      name: title,
      notes: content,
    };
    if (title.length === 0 || content.length === 0) {
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 3000);
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
            padding="0px 0px 60px 0px"
            justifyContent="center"
            alignItems="center"
            height="90vh"
          >
            {success ? (
              <Link
                style={{ textDecoration: "none" }}
                to={`/home/notes/${response._id}`}
              >
                <BasicToastContainer margin="10px 0px" bgColor="green">
                  View note here
                </BasicToastContainer>
              </Link>
            ) : null}
            {/* <small
              onClick={handleEmoji}
              style={{
                fontSize: "14px",
                padding: "5px 0px",
                margin: "0px",
              }}
            >
              Scroll to view more emoji
            </small>
            <div
              style={{
                overflow: "scroll",
                display: "flex",
                width: "300px",
                padding: "0",
                margin: "0",
              }}
            >
              {emojis.map((emoji) => (
                <small
                  onClick={handleEmoji}
                  style={{
                    fontSize: "32px",
                    padding: "0px",
                    margin: "20px 5px",
                  }}
                >
                  {emoji}
                </small>
              ))}
            </div> */}

            <TextInput
              borderRadius="2px"
              border="1px solid grey"
              width="90%"
              ref={titleRef}
              placeholder="Enter your title"
            />
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
