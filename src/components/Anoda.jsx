import { AiOutlineSmile, AiOutlineUsergroupAdd } from 'react-icons/ai'
import { BiNotepad } from 'react-icons/bi'
import { BiWorld } from 'react-icons/bi'
import styled from 'styled-components'

const Anoda = ()=>{
   return (
       <Container>
            <Wrapper>
                <Text>Our Major Milestones</Text>
                <Pre>Alluvium has worked with Fortune 500 companies to migrate their resources, deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance. We have been around for a while.</Pre>
                <Content>
                      <Cont>
                          <AiOutlineUsergroupAdd style={{fontSize:'40px'}}/>
                           <Number>30+</Number> 
                           <Ter>Client</Ter>
                      </Cont>
                      <Cont>
                          <BiNotepad style={{fontSize:'40px'}}/>
                           <Number>2700+</Number> 
                           <Ter>Projects</Ter>
                      </Cont>
                      <Cont>
                      <BiWorld style={{fontSize:'40px'}}/>
                          <Number>10+</Number> 
                          <Ter>Countris</Ter>
                      </Cont>
                      <Cont>
                      <AiOutlineSmile style={{fontSize:'40px'}}/>
                          <Number>96%</Number> 
                          <Ter>Success Rate</Ter>
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
     padding:70px 0px 120px 0px;
`

const Text = styled.h2`
     text-align: center;
     margin-bottom: 20px;
`

const Pre = styled.p`
    width:70%;
    margin:auto;
    text-align:center;
    font-weight: 400;
`
const Ter = styled.p`

`

const Content = styled.div`
   width:70%;
   margin:auto;
   display:flex;
   justify-content: space-between;
   padding:50px 0px 50px 0px;

`

const Cont = styled.div`
    
`

const Number = styled.p`
    font-size: 2em;
    font-weight:bold;
`


export default Anoda