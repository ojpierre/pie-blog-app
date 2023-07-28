import React from "react";
import styled, { keyframes } from "styled-components";
import { contentData3 } from "../data.js";

const AllContainer = styled.div``;

const PageContainer = styled.div`
  padding: 20px;
  background-color: #f1f8ea; /* Light green background */
  margin: 104px;
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
  height: 100vh;
  margin-top: 80px;
  object-fit: cover;
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

const StandardPage3 = () => {
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
    return contentData3.map((item, index) => (
      <React.Fragment key={index}>
        <AllContainer style={{ margin: "52px" }}>
          <HeadContainer>
            <Header style={{ textDecoration: "underline", fontSize: "48px" }}>
              {item.htitle}
            </Header>
            <BlogDate>Date: June 26, 2023</BlogDate>
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

export default StandardPage3;
