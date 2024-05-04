import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";
import yara from "../Images/yara.jpg";
import brokerImage from "../Images/brokerImage.png";

const BoxContainer = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px;
  padding: 16px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;
  max-width: 400px; /* Limit the box width */
  margin: 0 auto; /* Center the box horizontally */

  &:hover {
    transform: scale(1.05);
    background-color: #f1f8ea; /* Change the background color on hover */
  }

  @media screen and (max-width: 768px) {
    height: 300px;
  }
`;

const BoxImage = styled.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 16px;
`;

const BoxContent = styled(Box)``;

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
    <>
      <Link to="/top-kenyan-hairstyles-for-ladies" onClick={handleClick}>
        <BoxContainer onClick={toggleTyping}>
          <BoxImage src={yara} alt="Image" />
          <BoxContent>
            <BoxTitle variant="h6">Top Kenyan Hairstyles For Ladies</BoxTitle>
            <BoxDescription variant="body1">
              {isTyping
                ? "Discover the latest trends in Kenyan hairstyles for women and find the perfect look for any occasion."
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
    </>
  );
};

export default CompartmentBox3;
