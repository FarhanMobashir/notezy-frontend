import React from "react";
import { PrimaryButton, SecondaryButton } from "./styles/Buttons.style";
import { Flex } from "./styles/Containers.style";

export default function Modal({ primaryHandler, cancelHandler }) {
  return (
    <Flex justifyContent="center" alignItems="center" height="60vh">
      <Flex
        flexDirection="column"
        padding="40px 60px"
        width="100%"
        border="5px solid grey"
        borderRadius="10px"
      >
        <h4 style={{ textAlign: "center" }}>
          Do you you really want to delete ?
        </h4>
        <Flex justifyContent="space-between" alignItems="center">
          <PrimaryButton margin="0px 5px" onClick={primaryHandler}>
            Delete
          </PrimaryButton>
          <SecondaryButton margin="0px 5px" onClick={cancelHandler}>
            Cancel
          </SecondaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
}
