import React from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
export default function NoteView() {
  const { noteId } = useParams();
  return (
    <div>
      <Link
        style={{ textDecoration: "none", padding: "20px 10px" }}
        to="/home/all"
      >
        &#8592; Back to notes
      </Link>
      <h1>Note is {noteId}</h1>
    </div>
  );
}
