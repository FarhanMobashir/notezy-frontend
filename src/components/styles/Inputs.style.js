import styled from "styled-components";

export const TextInput = styled.input`
  padding: 8px;
  border: ${(props) =>
    props.border || `2px solid ${({ theme }) => theme.colors.black300}`};
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-size: 20px;
  margin: 10px 0px;
  width: ${(props) => props.width || "300px"};
`;

export const TextArea = styled.textarea`
  width: ${(props) => props.width};
  border: 0px solid black;
  border-radius: 5px;
  outline: none;
  background-color: #d6f0ff;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};

  font-size: 18px;
  &:active {
  }
  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;
