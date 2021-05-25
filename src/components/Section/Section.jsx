import React from "react";
import {
  Wrap,
  ItemText,
  Header,
  HeaderDesc,
  ButtonsWrapper,
  LeftButton,
  RightButton,
  DownArrow,
  Buttons
} from "./styledSection";

import downArrow from "../../assets/images/downArrow.svg";

const Section = ({ title, description, img, leftBtn, rightBtn }) => {
  return (
    <Wrap img={img}>
      <ItemText>
        <Header>{title}</Header>
        <HeaderDesc>{description}</HeaderDesc>
      </ItemText>
      <Buttons>
        <ButtonsWrapper btns={rightBtn}>
          <LeftButton>{leftBtn}</LeftButton>
          {rightBtn && <RightButton>{rightBtn}</RightButton>}
        </ButtonsWrapper>
        <DownArrow src={downArrow} />
      </Buttons>
    </Wrap>
  );
};

export default Section;
