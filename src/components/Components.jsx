import styled from 'styled-components'
const Components = ()=>{
    return (
        <Container>
            <H2>Our Major MileStones</H2>
            <Pre>Alluvium has worked with Fortune 500 companies to migrate their resources, deploying Atlassian Tools to support Project/Delivery Lifecycle / Governance. We have been around for a while  </Pre>
             <Wrapper>
                 
             </Wrapper>
        </Container>
    )
}

const Container = styled.div`
   width:80%;
   margin: auto;

`

const Wrapper = styled.div`
    
`
const Pre = styled.p`
 width:70%;
 margin:auto;
 text-align: center;
`
const H2 = styled.h2`
text-align:center;
`

export default Components