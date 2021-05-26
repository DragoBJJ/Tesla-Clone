import React from "react";
import Fade from "react-reveal/Fade";

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

const Section = ({ title, description, img, leftBtn, rightBtn }) => {
  return (
    <Wrap img={img}>
      <Fade bottom>
        <ItemText>
          <Header>{title}</Header>
          <HeaderDesc>{description}</HeaderDesc>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade top>
          <ButtonsWrapper btns={rightBtn}>
            <LeftButton>{leftBtn}</LeftButton>
            {rightBtn && <RightButton>{rightBtn}</RightButton>}
          </ButtonsWrapper>
        </Fade>
        <DownArrow src="images/downArrow.svg" />
      </Buttons>
    </Wrap>
  );
};

export default Section;
