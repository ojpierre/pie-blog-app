import { styled } from "styled-components";
import Header from "../Components/Header";
import CompartmentBox from "../Components/CompartmentBox";
import CompartmentBox2 from "../Components/CompartmentBox2";
import CompartmentBox3 from "../Components/CompartmentBox3";

const Container = styled.div``;

const Homepage = () => {
  return (
    <Container>
      <Header />
      <CompartmentBox />
      <CompartmentBox2 />
      <CompartmentBox3 />
    </Container>
  );
};

export default Homepage;
