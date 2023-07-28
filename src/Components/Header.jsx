import styled, { keyframes } from "styled-components";
import money from "../Images/money.jpg";

const Container = styled.div`
  margin-top: 60px;
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
    top: 10%;
    font-size: 16px;
  }
`;

const HeaderTitleLg = styled.span`
  position: absolute;
  top: 20%;
  font-size: 100px;
  color: white;

  @media screen and (max-width: 768px) {
    top: 15%;
    font-size: 64px;
  }
`;

const HeaderImg = styled.img`
  width: 100%;
  height: 450px;
  margin-top: 80px;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    height: 300px;
    margin-top: 40px;
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
    animation: ${fadeIn} 1s ease-in; /* Fade-in animation */
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
  return (
    <Container>
      <HeaderTitles>
        <HeaderTitleSm>Freelancing in Kenya</HeaderTitleSm>
        <HeaderTitleLg>A Kenyan Blog</HeaderTitleLg>
      </HeaderTitles>
      <HeaderImg src={money} alt="" />
      <HeaderContent
        style={{ backgroundColor: "#f1f8ea" /* Light green background */ }}
      >
        <HeaderContentTitle style={{ fontFamily: "Poppins" }}>
          Making Money in Kenya
        </HeaderContentTitle>{" "}
        <HeaderContentPost>
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
          money doing what you love. Whether you're a skilled writer, graphic
          designer, or web developer, there's a freelance job out there that's
          perfect for you.
        </HeaderContentPost>
      </HeaderContent>
    </Container>
  );
};

export default Header;
