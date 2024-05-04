import React from "react";
import styled from "styled-components";
import sleep1 from "../Images/sleep1.jpg";
import affiliate from "../Images/affiliate.jpg";
import forex1 from "../Images/forex1.jpg";
import crypto2 from "../Images/crypto2.jpg";
import smallbiz from "../Images/smallbiz.jpg";
import freelance from "../Images/freelance.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AllContainer = styled.div`
  background-color: #f1f8ea;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 104px;
  margin-bottom: 104px;
  background-color: #f1f8ea;

  @media screen and (max-width: 768px) {
    margin: 32px;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 24px;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;
`;

const CompartmentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Boxes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-right: -10px;
  margin-left: -10px;
`;

const Box = styled.div`
  width: calc(33.33% - 20px);
  margin: 10px;
  background-color: white;
  padding: 20px;
  text-align: center;
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    width: calc(50% - 20px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: 2px solid green;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  margin-top: 24px;
`;

const ReadMoreButton = styled.button`
  background-color: green;
  border: none;
  color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;
  margin-top: 24px;

  &:hover {
    background-color: #ccc;
  }
`;

const CompartmentBox2 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    window.scrollTo(0, 0);
    navigate.push("/new-page");
  };
  return (
    <AllContainer>
      <Container>
        <Header>
          Random Guides to Jumpstart Your Money Making Capabilities
        </Header>
        <Content>
          Explore these guides to discover new ways of making money and boost
          your financial potential.
        </Content>
      </Container>

      <CompartmentContainer>
        <Boxes>
          <Box>
            <Image src={smallbiz} alt="Guide 1" />
            <Description>Starting a Small Business</Description>
            <ReadMoreButton>
              <Link
                to="/start-a-small-business"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
          <Box>
            <Image src={affiliate} alt="Guide 2" />
            <Description>Affiliate Marketing in Kenya</Description>
            <ReadMoreButton>
              <Link
                to="/affiliate-marketing"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
          <Box>
            <Image src={freelance} alt="Guide 3" />
            <Description>Transcription Jobs in Kenya</Description>
            <ReadMoreButton>
              <Link
                to="/transcription-jobs"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
        </Boxes>
        <Boxes>
          <Box>
            <Image src={forex1} alt="Guide 4" />
            <Description>Forex in Kenya</Description>
            <ReadMoreButton>
              <Link
                to="/forex-trading"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
          <Box>
            <Image src={crypto2} alt="Guide 5" />
            <Description>Crypto in Kenya</Description>
            <ReadMoreButton>
              <Link
                to="/crypto-in-kenya"
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
          <Box>
            <Image src={sleep1} alt="Guide 6" />
            <Description>Passive Income While Sleeping</Description>
            <ReadMoreButton>
              <Link
                to="/passive-income"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
                onClick={handleClick}
              >
                Read More
              </Link>
            </ReadMoreButton>
          </Box>
        </Boxes>
      </CompartmentContainer>
    </AllContainer>
  );
};

export default CompartmentBox2;
