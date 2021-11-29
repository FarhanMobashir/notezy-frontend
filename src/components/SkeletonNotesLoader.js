import React from "react";
import {
  SkeletonCard,
  NoteTextSkeleton,
  NoteHeadingSkeleton,
} from "../components/styles/Skeletons.style";
import { Flex } from "./styles/Containers.style";
export const SkeletonNotesLoader = () => {
  return (
    <SkeletonCard>
      <NoteHeadingSkeleton />
      <NoteTextSkeleton mobileWidth="250px" />
      <NoteTextSkeleton mobileWidth="250px" />
      <NoteTextSkeleton width="250px" mobileWidth="200px" />
    </SkeletonCard>
  );
};

export const SkeletonLoader = ({ loaderText }) => {
  return (
    <Flex height="100vh" justifyContent="center" alignItems="center">
      <SkeletonCard>
        <h4 style={{ textAlign: "center" }}>{loaderText}</h4>
        <Flex justifyContent="space-evenly" alignItems="center">
          <NoteTextSkeleton
            webHeight="40px"
            webWidth="40px"
            mobileHeight="10px"
            mobileWidth="10px"
          />
          <NoteTextSkeleton
            webHeight="30px"
            webWidth="30px"
            mobileHeight="10px"
            mobileWidth="10px"
          />
          <NoteTextSkeleton
            webHeight="20px"
            webWidth="20px"
            mobileHeight="10px"
            mobileWidth="10px"
          />
        </Flex>
      </SkeletonCard>
    </Flex>
  );
};
