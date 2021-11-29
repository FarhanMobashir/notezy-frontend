import React, { useState, useEffect } from "react";
import { NotesCard } from "./NotesCard";
import { SkeletonNotesLoader } from "./SkeletonNotesLoader";
import { Flex } from "./styles/Containers.style";
import { useAuth } from "../contexts/AuthContext";
import { HomeGreet } from "./HomePage";

export default function AllNotes() {
  const apiUrl = "https://notezy.herokuapp.com";
  const [notes, setNotes] = useState([]);
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true);
  const [deleteCall, setDeleteCall] = useState(false);
  useEffect(() => {
    fetch(apiUrl + "/api/note", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
    })
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        // console.log("Success", data);
        setLoading(false);
        setNotes(data.data);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  }, [deleteCall]);

  function deleteHandler(item) {
    setDeleteCall(true);
    fetch(apiUrl + `/api/note/${item._id}`, {
      method: "DELETE",
      headers: {
        // "Content-Type": "application/json",
        Authorization: `Bearer ${currentUser.token}`,
      },
    })
      .then((res) => {
        setDeleteCall(true);
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("Success", data);
        setDeleteCall(false);
      })
      .catch((err) => {
        setDeleteCall(false);
        console.error(err);
      });
  }

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      wrap="wrap"
    >
      {loading || deleteCall ? (
        <>
          <SkeletonNotesLoader />
          <SkeletonNotesLoader />
          <SkeletonNotesLoader />
          <SkeletonNotesLoader />
          <SkeletonNotesLoader />
        </>
      ) : notes.length === 0 ? (
        <HomeGreet
          heading="You haven't created any notes"
          subHeading="Create one in just few clicks"
        />
      ) : (
        notes
          .slice(0)
          .reverse()
          .map((item) => (
            <NotesCard
              key={item._id}
              noteHeading={item.name}
              notePreview={
                item.notes.length < 150
                  ? item.notes
                  : item.notes.slice(0, 150) + "..."
              }
              link={`/home/notes/${item._id}`}
              handleDelete={() => deleteHandler(item)}
            />
          ))
      )}
    </Flex>
  );
}
