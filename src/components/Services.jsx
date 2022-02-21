import styled from 'styled-components'
// import {AiFillSetting} from 'react-icons'
import {FaSearchengin,FaListUl,FaListAlt,FaListOl} from 'react-icons/fa'
import {AiFillDatabase, AiOutlineSetting} from 'react-icons/ai'




const Services = ()=>{
    return (
       <Container>
          <Text>Our Sevices</Text>
          <br/>
          <Pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis , </Pre>
          <Wrapper>
              <Card style={{borderTop:'3px solid black'}}>
                 <AiFillDatabase style={{textAlign:'center',marginTop:'50px',fontSize:'40px'}} />
                 <Content>
                     <H2>Atlasain Tools Migration</H2>
                     <P>We have deep experience across all migration use cases like Server to Cloud, Cloud to Data Center, Server to Data Center, Cloud to Cloud</P>

                     <P style={{color:'#009BC0',fontWeight:'bold',marginTop:'70px',cursor:'pointer'}}>Learn More</P>
                 </Content>
              </Card>
              <Card>
                <FaListUl style={{textAlign:'center',marginTop:'50px',fontSize:'40px'}} />
                <Content  style={{textAlign:'center'}}>
                    
                     <H2>Atlassian Engineering Team</H2>
                     <P>We provide distributed Atlassian Engineering teams and embedded Engineers to major Atlassian partners and Enterprise users</P>

                     <P style={{color:'#009BC0',fontWeight:'bold',marginTop:'70px',cursor:'pointer'}}>Learn More</P>
                 
                 </Content>
              </Card>
              <Card>
              <AiOutlineSetting style={{textAlign:'center',marginTop:'50px',fontSize:'40px'}} />
                  <Content>
                     <H2>Atlassian Marketplace PlugIns</H2>
                     <P>We engineer and support migration and implementation plugins like Scrum Companion , Cloud Counter , Compare Jira Resources</P>

                     <P style={{color:'#009BC0',fontWeight:'bold',marginTop:'70px',cursor:'pointer'}}>Learn More</P>
                  </Content>
              </Card>
          </Wrapper>
       </Container>
    )
}

const Container = styled.div`
   
   padding:120px 0px 120px 0px;
   background: #F7F9FC;

`

const Wrapper = styled.div`
   display:flex;
   width:90%;
   margin:auto;
   justify-content:space-around;
   padding: 50px 0px 50px 0px;
`
const Card = styled.div`
   width:390px;
   height:342px;
   border-radius: 5px;
   /* box-shadow:rgba(50,50,93,0.25) 0px 50px 100px -20px,rgba(0,0,0,0.3) 0px 30px 60px -30px; */
   box-shadow:rgba(99,99,99,0.2) 0px 2px 8px 0px ;
   display:flex;
   flex-direction: column;
   align-items: center;
//    background:red;
`

const P = styled.p`
    text-align:center;
`
const Pre = styled.p`
 width:70%;
 margin:auto;
 text-align: center;
`

const H2 = styled.h2`
text-align:center;
`
const Text = styled.h2`
   text-align:center;
   font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
   font-weight:500;

`

const Content = styled.div`
width:80%;
margin:auto;
display:flex;
flex-direction:column;
justify-content:space-between;
align-content: center;
justify-content: center;

`

export default Services