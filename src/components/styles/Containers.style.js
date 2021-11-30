import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  border-radius: ${(props) => props.borderRadius};
  border: ${(props) => props.border};
  margin: ${(props) => props.margin};
  flex-direction: ${(props) => {
    switch (props.flexDirection) {
      case "row":
        return "row";
      case "column":
        return "column";
      default:
        return "row";
    }
  }};
  flex: ${(props) => props.flex || "0"};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  flex-wrap: ${(props) => props.wrap};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => props.padding};
`;

export const Card = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.black200};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.black200};
  padding: 10px 20px;
  width: 400px;
  border-radius: 10px;
  margin: 10px 20px;
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.primary300};
    transition: 0.5s;
  }

  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const NoteHeading = styled.h2`
  color: ${({ theme }) => theme.colors.black400};
`;

export const NotePreview = styled.p`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black300};
`;
