import React from "react";
import Slider from "@bit/akiran.react-slick.slider";
import logo1 from "../../assets/logos/arcteryx-sw-logo.png";
import logo2 from "../../assets/logos/black-diamond-sw-logo(2).png";
import logo3 from "../../assets/logos/edelrid-sw-logo.png";
import logo4 from "../../assets/logos/hagloefs-logo.png";
import logo5 from "../../assets/logos/icebreaker-logo(2).png";
import logo6 from "../../assets/logos/la-sportiva-sw-logo.png";
import logo7 from "../../assets/logos/mammut-logo-sw.png";
import logo8 from "../../assets/logos/marmot-sw-logo.png";
import logo9 from "../../assets/logos/patagonia-sw-logo.png";
import logo10 from "../../assets/logos/petzl-logo(1).png";
import logo11 from "../../assets/logos/prana-sw-logo.png";
import logo12 from "../../assets/logos/salewa-logo.png";
import logo13 from "../../assets/logos/vaude-sw-logo.png";
import { Container } from "./StyledSlider";

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
};
const SliderLogo = () => {
  return (
    <Container>
      {/* <style>{cssstyle}</style> */}

      <Slider {...settings}>
        <div>
          <img src={logo1} alt={"logo1"} />
        </div>
        <div>
          <img src={logo2} alt={"logo2"} />
        </div>
        <div>
          <img src={logo3} alt={"logo3"} />
        </div>
        <div>
          <img src={logo4} alt={"logo4"} />
        </div>
        <div>
          <img src={logo5} alt={"logo5"} />
        </div>
        <div>
          <img src={logo6} alt={"logo6"} />
        </div>
        <div>
          <img src={logo7} alt={"log7"} />
        </div>
        <div>
          <img src={logo8} alt={"logo8"} />
        </div>
        <div>
          <img src={logo9} alt={"logo9"} />
        </div>
        <div>
          <img src={logo10} alt={"logo10"} />
        </div>
        <div>
          <img src={logo11} alt={"logo11"} />
        </div>
        <div>
          <img src={logo12} alt={"logo12"} />
        </div>
        <div>
          <img src={logo13} alt={"logo13"} />
        </div>
      </Slider>
    </Container>
  );
};
export default SliderLogo;
