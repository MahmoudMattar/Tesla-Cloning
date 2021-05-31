import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For blaaa blaaaaa blaa"
        backgroundImg="model-s.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        description="Order Online For blaaa blaaaaa blaa"
        backgroundImg="model-y.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        description="Order Online For blaaa blaaaaa blaa"
        backgroundImg="model-3.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        description="Order Online For blaaa blaaaaa blaa"
        backgroundImg="model-x.jpg"
        leftBtnText="Custom order"
        rightBtnText="Existing Inventory"
      />
      <Section
        title="Lowest Cost Solar Panels in the World"
        description="Money-back guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Solar For New Roofes"
        description="Solar Roof Costs Less ......."
        backgroundImg="solar-roof.jpg"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftBtnText="shop now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 10vh;
`;
