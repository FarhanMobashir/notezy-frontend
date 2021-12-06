import styled from "styled-components";

const BaseButton = styled.button`
  background-color: white;
  padding: ${(props) => props.padding || "10px 15px"};
  border: none;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 16px;
  min-width: 150px;
  margin: ${(props) => props.margin};
  @media (max-width: 480px) {
    padding: 8px 10px;
    font-size: 14px;
    min-width: 100px;
  }
`;

export const PrimaryButton = styled(BaseButton)`
  background-color: ${({ theme }) => theme.colors.primary300};
  color: white;
  &: hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.colors.primary200};
  }
`;

export const SecondaryButton = styled(BaseButton)`
  border: 2px solid ${({ theme }) => theme.colors.primary300};
  color: ${({ theme }) => theme.colors.primary300};

  &:hover {
    transition: 0.5;
    border: 2px solid ${({ theme }) => theme.colors.primary200};
    color: ${({ theme }) => theme.colors.primary200};
  }
`;

export const TertiaryButton = styled(BaseButton)`
  border: 0px solid ${({ theme }) => theme.colors.black300};
  color: ${({ theme }) => theme.colors.black400};
  &:hover {
    transition: 0.5s;
    border: 0px solid ${({ theme }) => theme.colors.black400};
    color: ${({ theme }) => theme.colors.black400};
  }
`;
