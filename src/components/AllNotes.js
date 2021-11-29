import React from "react";
import { NotesCard } from "./NotesCard";
import { SkeletonNotesLoader } from "./SkeletonNotesLoader";
import { Flex } from "./styles/Containers.style";

const notes = [
  {
    id: "1",
    name: "Note 1",
    notes: "this is a note",
  },
  {
    id: "2",
    name: "Note 2",
    notes: "this is a note",
  },
  {
    id: "3",
    name: "Note 3",
    notes: "this is a note",
  },
  {
    id: "4",
    name: "Note 4",
    notes: "this is a note",
  },
  {
    id: "5",
    name: "Note 5",
    notes: "this is a note",
  },
];

export default function AllNotes() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection="row"
      wrap="wrap"
    >
      {notes.map((item) => (
        <NotesCard
          key={item.id}
          noteHeading={item.name}
          notePreview={item.notes}
          link={`/home/notes/${item.id}`}
        />
      ))}

      <SkeletonNotesLoader />
    </Flex>
  );
}
