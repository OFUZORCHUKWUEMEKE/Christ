import styled from 'styled-components'

const Trusted = ()=>{
    return(
        <Container>
            <Text>Trusted By</Text>
            <Wrapper>
              <Image src="/img/image 10.png" style={{objectFit:'contain',width:'100%'}}/>
              <Image src="/img/image 13.png" style={{objectFit:'contain',width:'100%'}}/>
              <Image src="/img/image 14.png" style={{objectFit:'contain',width:'100%'}} />
              <Image src="/img/edf.png"/>
            </Wrapper>          
        </Container>
    )
   
}

const Container = styled.div`
    width:100%;
`
const Text = styled.h2`
     text-align: center;
    //  margin-bottom: 20px;
`

const Image = styled.img`

`
const Wrapper = styled.div`
   display:flex;
`

export default Trusted