import React from "react";
import styled, { keyframes } from "styled-components";
import { guideData5 } from "../data.js";

const AllContainer = styled.div``;

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f1f8ea; /* Light green background */
  margin: 2%;

  @media (min-width: 768px) {
    margin: 4%;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: "Montserrat", sans-serif;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const BlogContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const BlogImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  animation: ${fadeIn} 0.5s ease-in; /* Fade-in animation */
  height: auto;
  margin-top: 5%;
  object-fit: cover;

  @media (min-width: 768px) {
    margin-top: 80px;
  }
`;

const BlogDate = styled.p`
  font-size: 14px;
  color: #666;
  font-family: "Montserrat", sans-serif;
`;

const SectionContainer = styled.div`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Poppins", sans-serif;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

const SectionContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: "Poppins", sans-serif;
`;

const TableOfContents = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc; /* Border around the table of contents */
  padding: 10px;
  text-align: center;
`;

const TOCHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  font-family: "Urbanist", sans-serif;
`;

const TOCList = styled.ol`
  list-style: decimal;
  padding-left: 20px;
  text-align: left;
  font-family: "Urbanist", sans-serif;
  color: green;
`;

const TOCItem = styled.li`
  margin-bottom: 5px;
`;

const TOCLink = styled.a`
  color: green;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const slideUp = keyframes`
  0% {
    transform: translateY(10px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SectionContentContainer = styled.div`
  margin-top: 20px;
  animation: ${slideUp} 0.5s ease-in; /* Slide-up animation */
`;

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const GuidePage5 = () => {
  const renderTableOfContents = (sections) => {
    const tocItems = sections.map((section, index) => (
      <TOCItem key={index}>
        <TOCLink href={`#section${index + 1}`}>{section}</TOCLink>
      </TOCItem>
    ));

    return (
      <TableOfContents style={{ margin: "52px" }}>
        <TOCHeading>Table of Contents</TOCHeading>
        <TOCList>{tocItems}</TOCList>
      </TableOfContents>
    );
  };

  const renderSections = () => {
    const currentDate = new Date(); // Get the current date

    return guideData5.map((item, index) => (
      <React.Fragment key={index}>
        <AllContainer style={{ margin: "52px" }}>
          <HeadContainer>
            <Header style={{ textDecoration: "underline", fontSize: "48px" }}>
              {item.htitle}
            </Header>
            <BlogDate> Last Updated: {formatDate(currentDate)} </BlogDate>
          </HeadContainer>
          <BlogContainer>
            <BlogImageContainer>
              <BlogImage src={item.img} alt="Illustration" />
            </BlogImageContainer>

            <div>
              <SectionContainer>
                <SectionTitle
                  style={{ textDecoration: "underline", fontSize: "32px" }}
                >
                  {item.ititle}
                </SectionTitle>
                <SectionContent
                  style={{ fontStyle: "italic", color: "#97a5b1" }}
                >
                  {item.icontent}
                </SectionContent>
              </SectionContainer>

              {renderTableOfContents(item.stitle)}

              {item.stitle.map((title, subIndex) => (
                <SectionContentContainer key={subIndex}>
                  <SectionTitle id={`section${subIndex + 1}`}>
                    {`${index + 1}.${subIndex + 1} ${title}`}
                  </SectionTitle>
                  <SectionContent>{item.scontent[subIndex]}</SectionContent>
                </SectionContentContainer>
              ))}
            </div>
          </BlogContainer>
        </AllContainer>
      </React.Fragment>
    ));
  };

  return <PageContainer>{renderSections()}</PageContainer>;
};

export default GuidePage5;
