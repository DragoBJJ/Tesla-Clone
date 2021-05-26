import styled from "styled-components";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  display: flex;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  min-height: 10vh;
  min-width: 100vw;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Menu = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  flex: 1;
  justify-content: center;

  a {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightMenu = styled(Menu)`
  flex: 0;
  @media (max-width: 768px) {
    display: flex;
  }
  a {
    padding: 0 1rem;
  }
`;

export const CustomMenu = styled(MenuIcon)`
  height: 80px;
  width: 60px;
  cursor: pointer;
`;

export const BurgerNav = styled.div`
  display: flex;
  opacity: 0.9;
  flex-direction: column;
  position: fixed;
  height: 100vh;
  width: 300px;
  padding: 1rem;
  background-color: #fff;
  top: 0;
  right: 0;
  list-style: none;
  transition: transform 0.3s ease-in-out;
  transform: ${({ show }) => (show ? "translateX(0)" : "translate(100%)")};
  li {
    display: flex;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    align-items: center;
    justify-content: center;
    a {
      font-weight: 600;
      text-decoration: none;
    }
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
