import styled from "styled-components";

export const MainStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 10rem);
  justify-content: flex-end;
`;

export const ProgressBar = styled.div`
  display: flex;
  height: 5.5rem;
  backdrop-filter: blur(1rem);
  background-color: #70707020;
`;
export const MainCardPosition = styled.div`
  display: flex;
  align-self: center;
  transform: translate(-25rem, 0);
  margin: 4rem 0;
  @media (max-width: 1024px) {
    transform: translate(-15rem, 0);
    margin: 8rem 0;
  }
  @media (max-width: 768px) {
    transform: none;
    width: 90%;
  }
`;
export const Completed = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1 1 auto;
  padding: 0 2rem;
  font-size: 1.4rem;
  color: var(--white);
  backdrop-filter: blur(1rem);
  background-color: #70707080;
  text-transform: uppercase;
  &:after {
    content: "";
    position: absolute;
    left: 100%;
    width: 0;
    height: 0;
    border-right: solid 1rem transparent;
    border-top: solid 1rem transparent;
    border-left: solid 1rem #70707080;
    border-bottom: solid 1rem transparent;
  }
`;

export const DaysLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 2 1 auto;
  padding: 0 2rem;
  color: var(--black);
  text-transform: lowercase;
  font-size: 3.6rem;
`;
