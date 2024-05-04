import React from "react";
import styled from "styled-components";
import WorkIcon from "@mui/icons-material/Work";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreateIcon from "@mui/icons-material/Create";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 104px;
  margin-right: 104px;
  margin-left: 104px;
  background-color: #f1f8ea; /* Light green background */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 24px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 104px;
  margin-bottom: 104px;
  margin-left: 104px;
  margin-right: 104px;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: left;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  background-color: #f1f8ea;
  padding: 20px;
  margin-top: 24px;
  margin-bottom: 24px;
  margin-right: 24px;
  width: 400px;
  height: 200px;
  text-align: center;
  border: 1px solid #ccc;

  @media screen and (max-width: 768px) {
    margin: 8px;
    width: auto;
  }
`;

const IconContainer = styled.i`
  font-size: 18px;
  color: green;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  font-family: "Montserrat", sans-serif;
  margin-top: 16px; /* Adjusted margin */
`;

const LearnMoreLink = styled.button`
  border: none;
  padding: 10px;
  background-color: green;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  font-family: "Montserrat", sans-serif;
  margin-top: 16px; /* Adjusted margin */

  &:hover {
    background-color: #ccc;
  }
`;

const CompartmentBox = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate.push("/new-page");
  };

  return (
    <Container>
      <DescContainer>
        <Header>Categories You May Want To Look At</Header>
        <Content>
          Feel Free to go through each category and find out what you may gain
          interest in.
        </Content>
      </DescContainer>
      <Column>
        <Box>
          <IconContainer>
            <WorkIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>Freelancing</Title>
          <Description>
            How to start freelancing in Kenya and make money online.
          </Description>
          <LearnMoreLink>
            <Link
              to="/freelancing-in-kenya"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
        <Box>
          <IconContainer>
            <LocalShippingIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>Dropshipping</Title>
          <Description>
            Learn exactly how to start a dropshipping business in Kenya.
          </Description>
          <LearnMoreLink>
            <Link
              to="/dropshipping"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
        <Box>
          <IconContainer>
            <CreateIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>Start a Blog</Title>
          <Description>
            This tutorial will teach you how to start a blog in Kenya.
          </Description>
          <LearnMoreLink>
            <Link
              to="/start-a-blog"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
      </Column>
      <Column>
        <Box>
          <IconContainer>
            <CreateIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>Writing</Title>
          <Description>
            Do you want to become a freelance writer in Kenya? Here's how.
          </Description>
          <LearnMoreLink>
            <Link
              to="/freelance-writing-in-kenya"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
        <Box>
          <IconContainer>
            <MonetizationOnIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>IQ Option Review</Title>
          <Description>
            This review will walk you through what I know and have experienced
            on this online trading platform.
          </Description>
          <LearnMoreLink>
            <Link
              to="/iq-option-review"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
        <Box>
          <IconContainer>
            <ChildFriendlyIcon />
          </IconContainer>
          <Title style={{ fontFamily: "Poppins" }}>Start a Baby Shop</Title>
          <Description>
            How to start a successful baby shop in Kenya: a step-by-step guide.
          </Description>
          <LearnMoreLink>
            <Link
              to="/start-a-baby-shop"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              Read More
            </Link>
          </LearnMoreLink>
        </Box>
      </Column>
    </Container>
  );
};

export default CompartmentBox;
