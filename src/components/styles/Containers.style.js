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
  width: ${(props) => props.width};
  background-color: ${(props) => props.bgColor};
  flex-wrap: ${(props) => props.wrap};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  padding: ${(props) => props.padding};
  @media (max-width: 480px) {
    order: ${(props) => props.orderMobile};
  }
`;

export const Card = styled.div`
  border: 0px solid ${({ theme }) => theme.colors.black200};

  padding: 10px 20px;
  width: 400px;
  border-radius: 14px;
  background: #e0e0e0;
  box-shadow: 7px 7px 14px #a4a4a4, -7px -7px 14px #ffffff;
  margin: 10px 20px;
  &:hover {
    transform: scale(1.02);
    transition: 0.2s;
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
