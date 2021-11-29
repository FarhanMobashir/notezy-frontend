import styled from "styled-components";

export const ViewPill = styled.button`
  background-color: ${({ theme }) => theme.colors.black400};
  color: white;
  border: none;
  padding: 4px 16px;
  border-radius: 50px;
  &:hover {
    background-color: ${({ theme }) => theme.colors.black500};
  }
`;
