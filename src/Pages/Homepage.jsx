import { styled } from "styled-components";
import Header from "../Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import CompartmentBox from "../Components/CompartmentBox";
import CompartmentBox2 from "../Components/CompartmentBox2";

const Container = styled.div``;

const Homepage = () => {
  return (
    <Container>
      <Header />
      <CompartmentBox />
      <CompartmentBox2 />
    </Container>
  );
};

export default Homepage;
