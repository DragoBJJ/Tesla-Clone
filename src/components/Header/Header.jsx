import { useState } from "react";

import { selectCars } from "../../features/car/carSlice";
import { useSelector } from "react-redux";

import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
  CloseButton,
  CloseWrapper
} from "./styledHeader";

const Header = () => {
  const [burgerOpen, setBurger] = useState(false);

  const cars = useSelector(selectCars);

  return (
    <Container>
      <a href="https://www.tesla.com/pl_pl">
        <img src="/images/logo.svg" alt="logo" height="20px" />
      </a>
      <Menu>
        {cars.map(item => (
          <p key={item.name}>
            <a href="https://www.tesla.com/pl_pl">{item}</a>
          </p>
        ))}
      </Menu>
      <RightMenu>
        <a href="https://www.tesla.com/pl_pl">Shop</a>
        <a href="https://www.tesla.com/pl_pl">Tesla Account</a>
        <CustomMenu onClick={() => setBurger(!burgerOpen)} />
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <CloseButton
            onClick={() => setBurger(!burgerOpen)}
            fontSize="large"
          ></CloseButton>
        </CloseWrapper>

        {cars.map(item => (
          <li key={item}>
            <a href="https://www.tesla.com/pl_pl">{item}</a>
          </li>
        ))}
      </BurgerNav>
    </Container>
  );
};

export default Header;
