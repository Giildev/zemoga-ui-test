import styled from "styled-components";

export const HeroeCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;
  height: 60rem;
  box-shadow: inset 0 0 50rem 0rem black;
  background-image: ${({ img }) => `url("${img}.jpg")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: white;
  font-size: 1.6rem;
  color: var(--white);
  justify-content: flex-end;
  margin: 4rem 0;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 425px) {
    font-size: 1.2rem;
  }
`;
export const CardSpace = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`;
export const NamePosition = styled.div`
  margin: 1rem 0;
`;
export const Name = styled.div`
  font-size: 4rem;
  font-weight: 800;
  @media (max-width: 425px) {
    font-size: 3.4rem;
  }
`;
export const Description = styled.div`
  margin: 1rem 0;
`;
export const InfoPosition = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
`;
export const Button = styled.div`
  display: flex;
  width: 15rem;
  height: 4rem;
  backdrop-filter: blur(1rem);
  background-color: #70707020;
  border: solid 0.2rem var(--white);
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }
  @media (max-width: 425px) {
    width: 12rem;
    height: 4rem;
  }
`;
export const ButtonText = styled.div`
  display: flex;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  align-items: flex-end;
  @media (max-width: 425px) {
    font-size: 1rem;
  }
`;
export const Date = styled.div`
  font-weight: 800;
`;
export const Category = styled.div`
  display: flex;
  text-align: end;
`;
export const VoteBar = styled.div`
  display: flex;
  height: 6rem;
  font-size: 3.6rem;
  font-weight: 100;
  @media (max-width: 425px) {
    font-size: 2.8rem;
  }
`;
export const Like = styled.div`
  display: flex;
  padding: 0 2rem;
  backdrop-filter: blur(1rem);
  background-color: var(--green);
  width: ${({ likeSize }) => `${likeSize}%`};
  height: 100%;
  align-items: center;
`;
export const LikePerctenge = styled.div`
  display: flex;
`;
export const Dislike = styled.div`
  display: flex;
  padding: 0 2rem;
  backdrop-filter: blur(1rem);
  background-color: var(--yellow);
  width: ${({ dislikeSize }) => `${dislikeSize}%`};
  height: 100%;
  align-items: center;
  justify-content: flex-end;
`;
export const DislikePerctenge = styled.div`
  text-align: end;
`;
