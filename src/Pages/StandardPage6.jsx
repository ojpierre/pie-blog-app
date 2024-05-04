import React from "react";
import styled, { keyframes } from "styled-components";
import { contentData6 } from "../data.js";

const PageContainer = styled.div`
  padding: 10px;
  background-color: #f1f8ea;
  margin: 2%;

  @media (min-width: 768px) {
    margin: 4%;
  }
`;

const Header = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 1024px) {
    font-size: 36px;
  }
`;

const BlogImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlogImage = styled.img`
  width: 100%;
  margin-bottom: 15px;
  animation: ${keyframes`0%{opacity:0;}100%{opacity:1;}`} 0.5s ease-in;
  height: auto;
  margin-top: 5%;
  object-fit: cover;

  @media (min-width: 768px) {
    margin-top: 80px;
  }

  @media (min-width: 1024px) {
    margin-top: 100px;
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
  margin-bottom: 15px;
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;

  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 28px;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;

  @media (min-width: 768px) {
    width: 820px;
  }

  @media (min-width: 1024px) {
    width: 900px;
  }
`;

const SectionContent = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  font-family: "Source Sans Pro", Arial, Helvetica, sans-serif;
  margin-top: 24px;
  margin-bottom: 48px;

  @media (min-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const TableOfContents = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
`;

const TOCHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;
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
  margin-bottom: 10px;
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
  animation: ${slideUp} 0.5s ease-in;
`;

const AllContainer = styled.div`
  margin: 20px;

  @media (min-width: 768px) {
    margin: 40px;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
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

const formatDate = (date) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString(undefined, options);
};

const StandardPage6 = () => {
  const currentDate = new Date();

  const renderTableOfContents = (sections) => {
    const tocItems = sections.map((section, index) => (
      <TOCItem key={index}>
        <TOCLink href={`#section${index + 1}`}>{section}</TOCLink>
      </TOCItem>
    ));

    return (
      <TableOfContents>
        <TOCHeading>Table of Contents</TOCHeading>
        <TOCList>{tocItems}</TOCList>
      </TableOfContents>
    );
  };

  const renderSections = () => {
    return contentData6.map((item, index) => (
      <React.Fragment key={index}>
        <AllContainer>
          <HeadContainer>
            <Header style={{ textDecoration: "underline", fontSize: "48px" }}>
              {item.htitle}
            </Header>
            <BlogDate>Last Updated: {formatDate(currentDate)}</BlogDate>
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
                  <SectionImage
                    src={item.sectionImages[subIndex]}
                    alt={title}
                  />
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

export default StandardPage6;
