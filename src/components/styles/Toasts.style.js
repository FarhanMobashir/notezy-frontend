import styled from "styled-components";

export const BasicToastContainer = styled.div`
  background-color: ${(props) => props.bgColor || props.theme.colors.black300};
  color: white;
  padding: 10px 20px;
  width: 300px;
  margin: 0 auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.black200};
`;
