import styled from 'styled-components'

const About = ()=>{
    return(
      <Container>
          <Text>Our Values</Text>
          <Wrapper>
              <Picture>
                 <Image src="/img/Rectangle 2086.png" style={{marginTop:'100px'}}/>
                 <Image src="/img/Rectangle 2085.png" style={{marginLeft:'20px'}}/>
              </Picture>
              <Content>
                 <Cont>
                     <H1>Data Security</H1>
                     <P>Data Security is so important to us that Everyone in our company is GDPR certified, even the janitor.</P>
                 </Cont>
                 <Cont>
                     <H1>Simple UX</H1>
                     <P>We do our best to make sure the customer do not notice changes in their user experience, post migration</P>
                 </Cont>
                 <Cont>
                     <H1>Scalable</H1>
                     <P>Build, rinse, repeat</P>
                 </Cont>
              </Content>
          </Wrapper>
      </Container>
    )
}

const Container = styled.div`
    width:80%;
    margin:auto;

`

const Wrapper = styled.div`
  display:flex;
  padding: 120px 0px 120px 0px;
  @media (max-width:850px){

    flex-direction:column;
  }
`
const Picture = styled.div`
    display: flex;
    @media (max-width:850px){
     flex-direction:column;
}
`
const Text = styled.h2`
   text-align:center;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   margin-top: 20px;
   font-weight:500;
`
const Content = styled.div`
   margin-left:20px; 
   display: flex;
   flex-direction:column;
   justify-content: space-around;
   margin-left: 80px;
`

const Cont = styled.div`
   
`

const Image = styled.img`
    width:327.52px;
    height:368.73px;
    margin-bottom: 40px;
`

const H1 = styled.h2`
   margin-bottom: 20px;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`

const P = styled.p`
  font-weight :400;
  color: #3D3D3DE5;

`

export default About