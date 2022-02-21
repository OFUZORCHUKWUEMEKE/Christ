import styled from 'styled-components';


const Footer = ()=>{
    return(
         <Container>
              <Wrapper>
                  <Cont>
                      <Head>Allunium</Head>
                     <P><span style={{color:'white',fontWeight:'bold'}}>Address</span>: Second Floor, Ravi Chambers, Kavuri Hills, London, United Kingdom.</P>
                      <P><span style={{color:'white',fontWeight:'bold'}}>Email</span>: contact@alluvium.com</P>
                     <P><span style={{color:'white',fontWeight:'bold'}}>Phone</span>: +44 85001 92539</P>
                  </Cont>
                  <Contt>
                     <Head>Company</Head>
                     <P style={{cursor:'pointer'}}>About Us</P>
                     <P style={{cursor:'pointer'}}>Project Reel</P>
                     <P style={{cursor:'pointer'}}>Case Studies</P>
                     <P style={{cursor:'pointer'}}>Support</P>
                  </Contt>
                  <Cont>
                    <Head>Our Services</Head>
                    <P>Atlassian Tools Migration</P>
                    <P>Atlassian Engineering Team</P> 
                    <P>Atlassian Marketplace PlugIns</P>
                  </Cont>
                  <Cont>
                    <Head>Get Access To Your Newsletter</Head>
                    <P>Join hundreds of business and technology in subcribing to Alluvium’s newsletter </P>
                    <Input>
                       <Inputs placeholder="Email Address"/>
                       <Button>Sign Up</Button>
                    </Input>
                  </Cont>
              </Wrapper>
         </Container>
    )
}

const Container = styled.div`
    background-color: #223D55;
    
`
const Contt = styled.div`
     flex:1;  
     display: flex;
     flex-direction: column;
     margin-top: 10px;
     margin-left: 20px;
`

const Wrapper = styled.div`
    width:90%;
    margin:auto;
    display:flex;
    justify-content: space-between;
    color:white;
    padding: 100px 0px 100px 0px;
`
const Button = styled.button`
    padding: 3px 10px;
    background: #009BC0;
    color:white;
    font-weight: 600;
    line-height: 24px;
    font-style:24px;
    border-radius:6px;
    outline-width: 0;
    border:0;
    flex:1;
    justify-self: flex-end;
    align-self:end;
    cursor:pointer;
`

const Cont = styled.div`
     flex:1;  
     display: flex;
     flex-direction: column;
     margin-top: 10px;
`

const Head = styled.h2`
   margin-bottom: 20px;
`

const P = styled.p`
      margin-bottom: 10px;
`
const Input = styled.div`
   display:flex
`

const Inputs = styled.input`
   padding:8px 25px;
   background-color:#305373;
   color:white;
   outline-width: 0;
   border:none;
   border-radius: 6px;
   margin-top:10px;
`

export default Footer