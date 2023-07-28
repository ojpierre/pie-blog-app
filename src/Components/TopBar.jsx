import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { mobile } from "../responsive.jsx";
import { searchData } from "../data.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  z-index: 9999;
  background-color: #f1f8ea;
  ${mobile({ padding: "0px", flexDirection: "column" })}
`;

const slideInAnimation = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const TopLeft = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const iconSize = "40px";

const SocialIcon = styled.a`
  width: ${iconSize};
  height: ${iconSize};
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const TopCenter = styled.div`
  flex: 6;
`;

const TopList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TopListItem = styled.li`
  margin-right: 40px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-right: 20px;
    font-size: 16px;
  }

  @media (max-width: 576px) {
    margin-right: 10px;
    font-size: 14px;
  }
`;

const TopRight = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  border: 0.5px solid lightgray;
  padding: 5px;
  width: 200px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: gray;
  outline: none;

  &::placeholder {
    color: gray;
  }
`;

const TopRightIcon = styled.button`
  font-size: ${iconSize};
  color: #666;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
  padding: 0.5rem;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const DropdownContainer = styled.div`
  position: absolute;
  top: 35px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 10;
  animation: ${slideInAnimation} 0.3s ease;
`;

const DropdownItem = styled.div`
  padding: 8px 12px;
  cursor: pointer;

  &:hover {
    background-color: #f1f8ea;
  }
`;

const SearchResultText = styled.p`
  font-size: 14px;
  color: gray;
  margin: 0;
`;

const TopBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Navigate to the new page using the navigate object
    navigate.push("/new-page");
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);

  const handleSearch = () => {
    const filteredData = searchData.filter(
      (item) =>
        item.title &&
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredData);
  };

  const handleSelectResult = (result) => {
    setSearchQuery(result.title);
    setSearchResults([]);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSearchResults([]);
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <TopLeft>
        <SocialContainer>
          <SocialIcon
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            color="3b5999"
          >
            <FacebookIcon />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/lowkymixes?igshid=OGQ5ZDc2ODk2ZA=="
            target="_blank"
            rel="noopener noreferrer"
            color="e4405f"
          >
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/EvanMunya"
            target="_blank"
            rel="noopener noreferrer"
            color="55acee"
          >
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon
            href="https://www.pinterest.com/Elllvan/?invite_code=b28117fae2a44ffe8b1b22f0bebf52f9&sender=999236373481328539"
            target="_blank"
            rel="noopener noreferrer"
            color="e60023"
          >
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </TopLeft>
      <TopCenter>
        <TopList style={{ color: "black" }}>
          <TopListItem>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleClick}
            >
              HOME
            </Link>
          </TopListItem>
          <TopListItem>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              ABOUT
            </Link>
          </TopListItem>
          <TopListItem>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              CONTACT
            </Link>
          </TopListItem>
        </TopList>
      </TopCenter>
      <TopRight>
        <SearchContainer ref={dropdownRef}>
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(event) => {
              setSearchQuery(event.target.value);
              handleSearch();
            }}
          />
          <TopRightIcon onClick={handleSearch}>
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </TopRightIcon>
          {searchResults.length > 0 && (
            <DropdownContainer>
              {searchResults.map((result) => (
                <DropdownItem
                  key={result.id}
                  onClick={() => handleSelectResult(result)}
                >
                  <SearchResultText>{result.title}</SearchResultText>
                </DropdownItem>
              ))}
            </DropdownContainer>
          )}
          {searchResults.length === 0 && searchQuery !== "" && (
            <DropdownContainer>
              <SearchResultText>
                Topic is Present, Please Scroll Down
              </SearchResultText>
            </DropdownContainer>
          )}
        </SearchContainer>
      </TopRight>
    </Container>
  );
};

export default TopBar;
