import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/Mail";
import { styled } from "styled-components"
import { mobile } from "../responsive"

const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })};
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`
const Logo = styled.h1`

`
const Desc = styled.p`
    margin: 20px 0px;
`

const SocialContainer = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${
        props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;

`



const Center = styled.div`
    flex: 1;
    ${mobile({display: "none"})};
`
const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    ${mobile({backgroundColor: "#fff8f8"})};
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>PIERRE.</Logo>
        <Desc>Lorem50</Desc>
        <SocialContainer>
            <SocialIcon color = "3b5999"><FacebookIcon /></SocialIcon>
            <SocialIcon color = "e4405f"><InstagramIcon /></SocialIcon>
            <SocialIcon color = "55acee"><TwitterIcon /></SocialIcon>
            <SocialIcon color = "e60023"><PinterestIcon /></SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home</ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Man Fashion</ListItem>
        <ListItem>Woman Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My Account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
                <ContactItem><RoomIcon style = {{marginRight: "10px"}} />622 Dixil Street, Nairobi West</ContactItem>
                <ContactItem><PhoneIcon style = {{marginRight: "10px"}}/>+254799538923</ContactItem>
                <ContactItem><MailOutlineIcon style = {{marginRight: "10px"}} />pierreouma@gmail.com</ContactItem>
                <Payment src="" /> 
      </Right>
    </Container>
  )
}

export default Footer
