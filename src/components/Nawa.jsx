import styled from 'styled-components'

const Nawa = ()=>{
     return (
         <Container>
             <Wrapper>
                <Text>Have A Project In Mind ?</Text>
                 <Button>Get In Touch</Button>
             </Wrapper>
         </Container>
     )
}

const Container = styled.div`
     background-color:url("/img/frame 34376.png");
     background-size:cover;
     background-position:center;
     background-repeat:no-repeat;
     object-fit: cover;
     padding:80px 0px 80px 0px;
     text-align:center;
     /* background-color:linear-gradient(to left,#009BC0,#21A8C9) */
     background-color:#21A8C9;
`
const Button = styled.button`
    padding: 10px 15px;
    background: white;
    color:#21A8C9;
    font-weight: 600;
    line-height: 24px;
    font-style:24px;
    border-radius:6px;
    outline-width: 0;
    margin-top:20px;
    height:54px;
    width:113px;
    border:0;
    flex:1;
    justify-self: flex-end;
    align-self:end;
    cursor:pointer;
`

const Wrapper = styled.div`
  
 
`

const Text = styled.h2`
     font-weight: 2em;
     text-align: center;
     color:white;
`

export default Nawa;