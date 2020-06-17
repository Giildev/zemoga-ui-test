import styled from "styled-components";

export const AnnounceStyle = styled.div`
  display: flex;
  color: var(--black);
  padding: 2rem 3rem;
  background-color: var(--gray);
  align-items: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`;
export const TitlePosition = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem 4rem;
  text-align: center;
  @media (max-width: 768px) {
    margin: 0rem 2rem;
  }
`;
export const Title = styled.div`
  font-size: 2rem;
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;
export const TitleBold = styled.div`
  font-size: 3.6rem;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;
export const AnnounceContent = styled.div`
  font-size: 1.6rem;
  font-weight: 100;
  @media (max-width: 768px) {
    font-size: 1.2rem;
    max-width: 66%;
  }
  @media (max-width: 425px) {
    max-width: 100%;
    margin: 1rem 0;
  }
`;
