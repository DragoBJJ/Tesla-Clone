import styled from "styled-components";
import modelS from "../../assets/images/model-s.jpg";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: ${({ img }) => `url("images/${img}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ItemText = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 0.5rem;
  padding-top: 15vh;
  text-align: center;
`;

export const ButtonsWrapper = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: ${({ btns }) => (btns ? "repeat(2, 1fr)" : "1fr")};
  grid-template-rows: auto;
  grid-gap: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  opacity: 0.85;
  font-size: 14px;
  cursor: pointer;
`;

export const Buttons = styled.div``;

export const RightButton = styled(LeftButton)`
  background-color: #fff;
  border: 3px solid rgba(23, 26, 32, 0.8);
  color: #1d1d1d;
`;

export const DownArrow = styled.img`
  height: 60px;
  width: 60px;
  overflow-x: hidden;
  cursor: pointer;
  animation: animateDown 2s infinite;
`;

export const Header = styled.h1``;

export const HeaderDesc = styled.p``;
