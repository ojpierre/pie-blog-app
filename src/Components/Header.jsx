import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import money1 from "../Images/money.jpg";
import yara from "../Images/yara.jpg";
import ArrowLeftOutlined from "@mui/icons-material/ArrowBackIosSharp";
import ArrowRightOutlined from "@mui/icons-material/ArrowForwardIosOutlined";
import { Link } from "react-router-dom";
import brokerImage from "../Images/forexTrading.webp";
import cryptocurrencyImage from "../Images/cryptocurrencyImage.png";

const Container = styled.div`
  margin-top: 60px;
  text-align: center;
`;

const SlideshowContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow: hidden;
`;

const SlideshowImageWrapper = styled(Link)`
  width: ${(props) => 100 / props.totalSlides}%;
  text-decoration: none;
`;

const SlideshowImages = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  width: ${(props) => props.totalSlides * 100}%;
`;

const SlideshowImage = styled.img`
  width: 100%;
  height: 600px;
  margin-top: 80px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 50%;
  }
`;

const Controls = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 99%;
  padding: 0 10px;
`;

const Arrow = styled.div`
  font-size: 72px;
  cursor: pointer;
  margin: 0 10px;
  color: white;
`;

const DotsContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Dot = styled.span`
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? "black" : "lightgray")};
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const HeaderTitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;

const HeaderTitleSm = styled.span`
  position: absolute;
  top: 18%;
  font-size: 20px;
  color: black;
  font-family: "Poppins";

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const HeaderTitleLg = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
  color: white;

  @media screen and (max-width: 768px) {
    font-size: 64px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const HeaderContent = styled.div`
  margin: 104px;
  &:hover {
    background-color: white;
    animation: ${fadeIn} 1s ease-in;
  }
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 32px;
  }
`;

const HeaderContentTitle = styled.h1`
  font-size: 32px;
  text-align: center;
  line-height: 70.4px;
  letter-spacing: normal;
  font-weight: bold;
  margin: 104px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 48px;
    margin: 32px;
  }
`;

const HeaderContentPost = styled.div`
  width: 50%;
  font-family: "Poppins";
  font-size: 16px;
  text-align: center;
  letter-spacing: normal;
  margin: 104px;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-size: 14px;
    margin: 32px;
  }
`;

const Header = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [titles, setTitles] = useState([
    "Freelancing in Kenya",
    "Fashion and Style",
    "Forex Trading",
    "Cryptocurrency",
  ]);

  const totalSlides = titles.length; // Update to reflect the total number of slides
  const slideInterval = 4000; // 4 seconds

  const nextSlide = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, slideInterval);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <Container>
      <SlideshowContainer>
        <SlideshowImages
          totalSlides={totalSlides}
          style={{
            transform: `translateX(-${activeSlide * (100 / totalSlides)}%)`,
          }}
        >
          <SlideshowImageWrapper
            to="/freelancing-in-kenya"
            totalSlides={totalSlides}
          >
            <SlideshowImage src={money1} alt={`Slide 1`} />
          </SlideshowImageWrapper>
          <SlideshowImageWrapper
            to="/top-kenyan-hairstyles-for-ladies"
            totalSlides={totalSlides}
          >
            <SlideshowImage
              src={yara}
              alt={`Slide 2`}
              style={{ objectFit: "cover" }}
            />
          </SlideshowImageWrapper>
          <SlideshowImageWrapper to="/forex" totalSlides={totalSlides}>
            <SlideshowImage
              src={brokerImage}
              alt={`Slide 3`}
              style={{ objectFit: "cover" }}
            />
          </SlideshowImageWrapper>
          <SlideshowImageWrapper to="/crypto-markets" totalSlides={totalSlides}>
            <SlideshowImage
              src={cryptocurrencyImage}
              alt={`Slide 4`}
              style={{ objectFit: "cover" }}
            />
          </SlideshowImageWrapper>
        </SlideshowImages>
        <Controls>
          <Arrow onClick={prevSlide} style={{ marginLeft: 0 }}>
            <ArrowLeftOutlined />
          </Arrow>
          <Arrow onClick={nextSlide} style={{ marginRight: 0 }}>
            <ArrowRightOutlined />
          </Arrow>
        </Controls>
      </SlideshowContainer>
      <DotsContainer>
        <Dot active={activeSlide === 0} onClick={() => setActiveSlide(0)} />
        <Dot active={activeSlide === 1} onClick={() => setActiveSlide(1)} />
        <Dot active={activeSlide === 2} onClick={() => setActiveSlide(2)} />
        <Dot active={activeSlide === 3} onClick={() => setActiveSlide(3)} />
      </DotsContainer>
      <HeaderTitles>
        <HeaderTitleSm>{titles[activeSlide]}</HeaderTitleSm>
        <HeaderTitleLg>A Kenyan Blog</HeaderTitleLg>
      </HeaderTitles>
      <HeaderContent style={{ backgroundColor: "#f1f8ea" }}>
        <HeaderContentTitle style={{ fontFamily: "Poppins" }}>
          Making Money in Kenya
        </HeaderContentTitle>{" "}
        <HeaderContentPost style={{ fontFamily: "Source Sans Pro" }}>
          Are you a young person looking to start making money on your own
          terms? Freelancing may be just what you need! In this article, we'll
          walk you through all the important steps to get started, including
          popular freelancing jobs that fit your skillset, how much you can
          expect to earn, and whether you need to pay taxes. Plus, we'll give
          you a beginner's course in freelance writing, and provide you with
          tips on finding your first freelance job. So, if you're ready to take
          control of your financial future, let's dive in!" Are you tired of
          depending on your parents or guardians for pocket money? Do you want
          to be your own boss and earn money on your own terms? Freelancing
          might be the answer you've been looking for! As a young person in
          Kenya, there are plenty of opportunities to start freelancing and earn
          money doing what you love.
        </HeaderContentPost>
      </HeaderContent>
    </Container>
  );
};

export default Header;
