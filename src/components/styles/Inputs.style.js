import styled from "styled-components";

export const TextInput = styled.input`
  padding: 8px;
  border: 2px solid ${({ theme }) => theme.colors.black300};
  border-radius: 5px;
  font-size: 20px;
  margin: 10px 0px;
  width 300px;
`;

export const TextArea = styled.textarea`
  width: ${(props) => props.width};
  border: 1px solid black;
  border-radius: 10px;
  padding: ${(props) => props.padding};
  height: ${(props) => props.height};
  font-size: 16px;
  &:active {
  }
  &:focus {
    border: 1px solid black;
    outline: none;
  }
`;
