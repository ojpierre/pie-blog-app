import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Container = styled.div`
  height: 100vh;
  position: relative;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    margin: 32px;
  }
`;

const ContainerBg = styled.div`
  width: 20px;
  height: 100%;
  background-color: #f1f8ea;
  position: absolute;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const Left = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 60px;
  width: 80%;
`;

const InfoContainer = styled.div`
  margin-top: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  margin: 50px 0px;
  font-weight: 300;
  width: 70%;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Desc = styled.p`
  font-weight: 200;
`;

const Form = styled.form`
  margin-top: 20px;
`;

const Input = styled.input`
  width: 50%;
  height: 50px;
  border: none;
  border-bottom: 1px solid black;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

const TextArea = styled.textarea`
  width: 100%;
  margin: 10px 0px;
  font-size: 14px;
  padding-left: 10px;
`;

const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: green;
  color: white;
  font-weight: 500;
  cursor: pointer;
`;

const Contact = () => {
  const formRef = useRef();

  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_30z62ts",
        "template_issfzkf",
        formRef.current,
        "CumNNoNYD7luBxHEq"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      <ContainerBg></ContainerBg>
      <Wrapper>
        <Left>
          <Title style={{ fontFamily: "Poppins" }}>Write to us.</Title>
          <InfoContainer style={{ fontFamily: "Montserrat" }}>
            <ContactItem>
              <RoomIcon style={{ marginRight: "10px" }} />
              Nairobi
            </ContactItem>
            <ContactItem>
              <MailOutlineIcon style={{ marginRight: "10px" }} />
              sharevalueke@gmail.com
            </ContactItem>
          </InfoContainer>
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
        </Left>
        <Right>
          <Desc style={{ fontFamily: "Poppins", fontSize: "24px" }}>
            For money making enquiries
          </Desc>
          <Form ref={formRef}>
            <Input type="text" placeholder="Name" name="user_name" />
            <Input type="text" placeholder="Subject" name="user_subject" />
            <Input type="text" placeholder="Email" name="user_email" />
            <TextArea rows="5" placeholder="Message" name="message"></TextArea>
            <Button
              onClick={handleSubmit}
              style={{ color: "white", fontFamily: "Poppins" }}
            >
              Submit
            </Button>
            {done && "Thank you..."}
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Contact;
