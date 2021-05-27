import { Container } from "./styledHomePage";
import Section from "../Section/Section";

import { teslaData } from "./teslaData";

const HomePage = () => {
  return (
    <Container>
      {teslaData.map(model => (
        <Section key={model.title} {...model} />
      ))}
    </Container>
  );
};

export default HomePage;
