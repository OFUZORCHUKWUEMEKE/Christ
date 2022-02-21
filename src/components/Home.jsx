import React from 'react'
import styled from 'styled-components'
import {FaSearchengin,FaListUI} from 'react-icons/fa'
const Home = () => {
  return (
    <Container>
        <Wrapper>
            <Nav>
               <Logo>ALLUVIUM</Logo>
               <Ul>
                   <Li><a>Our Projects</a></Li>
                   <Li><a>Project Reel</a></Li>
                   <Li><a>About Us</a></Li>
                   <Li><a>Services</a></Li>
                   <Li><a>Support</a></Li>
               </Ul>
               <ButtonContainer></ButtonContainer>
                   <FaSearchengin style={{fontSize:'30px',marginTop:'20px'}}/>              
                   <Button>Contact Us</Button>
            </Nav>
            <Content>
                <Text>We are Problem Solvers</Text>
                <Pre>We are Atlassian Products Migration Lab. We produce Tools, Systems and Services that deliver complete data migration in half the time for half the cost.</Pre>
                <ButtonICON>See Our Products</ButtonICON>
            </Content>
        </Wrapper>
    </Container>
  )
}

const Container = styled.div`
     height:80vh;
     width:100%;
     background-image: url('/img/Rectangle 2088.png');
     background-size:cover;
     background-position:center;
     background-repeat:no-repeat;
     object-fit: cover;
     color: white;
`

const Wrapper=styled.div`
    width:80%;
    margin:auto;
    z-index:1000; 
    @media (max-width:850px){
        width:100%;
    }
`

const Image = styled.img`
    
`

const Nav = styled.nav`
     display:flex;
     justify-content: space-between;
     height: 15vh;
     align-items: center;
     border-bottom: 1px solid #E5E5E5;
`
const Logo = styled.h1`
    cursor:pointer;
    flex:1;
    font-weight: bolder;
    font-size:29px;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    margin-top:20px;

    @media (max-width:850px){
        font-weight: 500;
        font-size: 18px;

    }
`

const Ul = styled.ul`
   display: flex;
   flex: 5;
   justify-content: space-between;
   margin-top:20px;
    
   @media (max-width:720px){
       display: none;
   }
`

const Li = styled.li`
    list-style:none;
    font-weight: 500;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    cursor:pointer;
    &:hover{
        border-bottom:1px solid white;
        transition: 4s ease-in-out;
    }
`

const ButtonContainer = styled.div`
   display: flex;
   flex:1; 
   margin-top:20px;
   justify-content: flex-end;
`

const Button = styled.button`
    padding: 10px 15px;
    background: #009BC0;
    color:white;
    font-weight: 600;
    /* line-height: 24px;
    font-style:24px; */
    border-radius:6px;
    outline-width: 0;
    margin-top:20px;
    /* height:54px;
    width:113px; */
    border:0;
    flex:1;
    /* justify-self: flex-end; */

    align-self:center;
    cursor:pointer;
`


const Content = styled.div`
    width:60%;
    margin:auto;
    text-align:center;
    height:65vh;
  
    display:flex;
     flex-direction: column; 
    align-items:center;
    /* justify-content: space-between; */
    @media (max-width){
        width:90%;
    }
`
const ButtonICON = styled.button`
padding: 10px 15px;
background: #009BC0;
color:white;
font-weight: 600;
line-height: 24px;
font-style:24px;
width:25%;
margin: auto;
border-radius:6px;
/* height:25px; */
margin-bottom: 60px;
outline-width: 0;
border:0;
cursor:pointer;
align-self: center;
`




const Text = styled.h1`
    font-size:3.5em;
    justify-self: flex-end;
    flex:1;
    margin-top:90px;

    @media (max-width:850px){
        font-size:2em;
        width: 100%;
    }
`

const Pre = styled.p`
    align-self: center;
    flex:1;
`

export default Home