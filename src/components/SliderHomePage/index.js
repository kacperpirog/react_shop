import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import foto_1 from "../../assets/images/slider/foto_1.png";
import foto_2 from "../../assets/images/slider/foto_2.jpg";
import foto_3 from "../../assets/images/slider/foto_3.png";
import HomeContainer from "../homeContainer";
import SliderLogo from "./SliderLogo";
import { Container } from "./StyledSlider";

const SliderHomePage = () => {
  return (
    <Container>
      <AwesomeSlider>
        <div data-src={foto_1} />
        <div data-src={foto_2} />
        <div data-src={foto_3} />
      </AwesomeSlider>
      <div style={{ padding: "50px" }}>
        <SliderLogo />
      </div>
      <HomeContainer />
    </Container>
  );
};

export default SliderHomePage;
