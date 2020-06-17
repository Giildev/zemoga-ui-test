import styled from "styled-components";

export const HeaderStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  height: 10rem;
  align-items: center;
  padding: 0 13rem;
  color: var(--white);
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;
export const Title = styled.div`
  font-size: 3.2rem;
  margin-right: auto;
  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`;
export const MenuContainer = styled.div`
  display: flex;
`;
export const MenuItem = styled.div`
  font-size: 1.6rem;
  margin: 0 4rem;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    font-size: 1.4rem;
    margin: 0 2rem;
  }
  @media (max-width: 768px) {
    margin: 0 0.5rem;
  }
`;
export const SearchIcon = styled.div`
  display: flex;
`;
