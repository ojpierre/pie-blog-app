import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import yara from "../Images/yara.jpg";
import brokerImage from "../Images/brokerImage.png";
import bookCoverImage from "../Images/bookCoverImage.webp";
import cryptoMarketImage from "../Images/cryptoMarketImage.png";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  justify-items: center;
  margin: 24px auto;
  max-width: 1200px;
`;
const BoxContainer = styled(Paper)`
  display: flex;
  align-items: center;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  width: 350px; /* Set a fixed width for the box container */
  height: 250px; /* Set a fixed height for the box container */
  margin: 24px;
  text-align: left; /* Align text to the left */

  &:hover {
    transform: scale(1.05);
    background-color: #f1f8ea; /* Change the background color on hover */
  }

  @media screen and (max-width: 768px) {
    width: 250px; /* Adjust width for smaller screens if needed */
    height: 350px; /* Adjust height for smaller screens if needed */
  }
`;

const BoxImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: contain;
  margin-right: 16px; /* Add margin to separate the image from the text */
`;

const BoxContent = styled(Box)`
  display: flex;
  flex-direction: column;
`;

const BoxTitle = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const BoxDescription = styled(Typography)`
  font-size: 16px;
  margin-bottom: 16px;
`;

const CompartmentBox3 = () => {
  const [isTyping, setTyping] = useState(true);
  const navigate = useNavigate();

  const toggleTyping = () => {
    setTyping((prev) => !prev);
  };

  const handleClick = () => {
    window.scrollTo(0, 0);
    // You can navigate to the target route when the box is clicked
    navigate("/top-kenyan-hairstyles-for-ladies");
  };

  return (
    <GridContainer>
      <Link to="/top-kenyan-hairstyles-for-ladies" onClick={handleClick}>
        <BoxContainer onClick={toggleTyping}>
          <BoxImage src={yara} alt="Image" />
          <BoxContent>
            <BoxTitle variant="h6">Top Kenyan Hairstyles For Ladies</BoxTitle>
            <BoxDescription variant="body1">
              {isTyping
                ? "Discover the latest trends in Kenyan hairstyles."
                : "Static content after typing"}
            </BoxDescription>
          </BoxContent>
        </BoxContainer>
      </Link>
      <Link to="/forex" onClick={handleClick}>
        <BoxContainer onClick={toggleTyping}>
          <BoxImage src={brokerImage} alt="Image" />
          <BoxContent>
            <BoxTitle variant="h6">Top Forex Brokers To Go For</BoxTitle>
            <BoxDescription variant="body1">
              {isTyping
                ? "Unveil the top Forex Traders recognised worldwide."
                : "Static content after typing"}
            </BoxDescription>
          </BoxContent>
        </BoxContainer>
      </Link>
      <Link to="/forex-risks" onClick={handleClick}>
        <BoxContainer onClick={toggleTyping}>
          <BoxImage src={bookCoverImage} alt="Image" />
          <BoxContent>
            <BoxTitle variant="h6">Risk Management in Forex</BoxTitle>
            <BoxDescription variant="body1">
              {isTyping
                ? "Some of the well known Risk Management Strategies"
                : "Static content after typing"}
            </BoxDescription>
          </BoxContent>
        </BoxContainer>
      </Link>
      <Link to="/crypto-markets" onClick={handleClick}>
        <BoxContainer onClick={toggleTyping}>
          <BoxImage src={cryptoMarketImage} alt="Image" />
          <BoxContent>
            <BoxTitle variant="h6">Trending Crypto Markets in 2024</BoxTitle>
            <BoxDescription variant="body1">
              {isTyping
                ? "Find the trending crypto markets of 2024 in correct order"
                : "Static content after typing"}
            </BoxDescription>
          </BoxContent>
        </BoxContainer>
      </Link>
    </GridContainer>
  );
};

export default CompartmentBox3;
