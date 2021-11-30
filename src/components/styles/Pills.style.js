import styled from "styled-components";

export const ViewPill = styled.button`
  background-color: ${(props) => props.bgColor || props.theme.colors.black400};
  color: white;
  border: none;
  margin: ${(props) => props.margin};
  padding: 4px 16px;
  border-radius: 50px;
  &:hover {
    background-color: ${(props) =>
      props.hoverColor || props.theme.colors.black500};
  }
`;
