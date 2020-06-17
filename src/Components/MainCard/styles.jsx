import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 50rem;
  @media (max-width: 1024px) {
    height: 35rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
  backdrop-filter: blur(1rem);
  background-color: #00000096;
  font-size: 1.6rem;
  color: var(--white);
`;
export const Text = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  display: flex;
  font-size: 6rem;
  @media (max-width: 1024px) {
    font-size: 3rem;
  }
`;
export const Content = styled.div`
  display: flex;
  margin: 2rem 0;
  font-size: 2rem;
  font-weight: 100;

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin: 1rem 0;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  margin: 2rem 0;
`;
export const Icon = styled.div`
  display: flex;
`;
export const Link = styled.a`
  display: flex;
  font-size: 1.4rem;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 1024px) {
    font-size: 1.2rem;
  }
`;
export const CTAText = styled.div`
  display: flex;
  font-size: 2rem;
  font-weight: 800;
  margin: 2rem 0;
  @media (max-width: 1024px) {
    font-size: 1.6rem;
    margin: 1rem 0;
  }
`;
export const VoteBox = styled.div`
  display: flex;
  height: 8rem;
  @media (max-width: 1024px) {
    height: 6rem;
  }
`;
export const Upvote = styled.div`
  flex: 1 1 auto;
  background-color: var(--green);
  &:hover {
    cursor: pointer;
  }
`;
export const Downvote = styled.div`
  flex: 1 1 auto;
  background-color: var(--yellow);
  &:hover {
    cursor: pointer;
  }
`;
