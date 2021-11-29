import styled, { keyframes } from "styled-components";

const skeletonPulse = keyframes`
0% {
    background-color:#bfbfbf;

}
100% {
      background-color:#d9d9d9;

}

`;

const skeletonPulseForCardContainer = keyframes`
0% {
    box-shadow:0px 0px 10px #bfbfbf;
    border: 2px solid #bfbfbf;
}
100% {
      box-shadow:0px 0px 0px #bfbfbf;
    border: 2px solid #d9d9d9;
}`;

export const SkeletonCard = styled.div`
  border: 4px solid ${({ theme }) => theme.colors.black200};
  box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.black200};
  padding: 10px 20px;
  width: 400px;
  border-radius: 10px;
  margin: 10px 20px;
  animation: ${skeletonPulseForCardContainer} 1s linear infinite alternate;
  &:hover {
    border: 4px solid ${({ theme }) => theme.colors.primary300};
    transition: 0.5s;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

export const NoteHeadingSkeleton = styled.div`
  width: 200px;
  height: 25px;
  background-color: ${({ theme }) => theme.colors.black200};
  border-radius: 50px;
  animation: ${skeletonPulse} 1s linear infinite alternate;
  margin: 30px 0px;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const NoteTextSkeleton = styled.div`
  width: ${(props) => props.width || "350px"};
  height:  ${(props) => props.webHeight || "15px"};
  background-color: ${({ theme }) => theme.colors.black200};
   width: ${(props) => props.webWidth || "350px"};
  }
  border-radius: 50px;
  animation: ${skeletonPulse} 1s linear infinite alternate;
  margin: 8px 0px;
  @media (max-width: 480px) {
    height:  ${(props) => props.mobileHeight || "15px"};
    width: ${(props) => props.mobileWidth || "350px"};
  }
`;
