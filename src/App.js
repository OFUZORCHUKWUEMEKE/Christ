import './App.css';
import styled from 'styled-components'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Anoda from './components/Anoda';
import Trusted from './components/Trusted';
import Nawa from './components/Nawa';
import Footer from './components/Footer';

function App() {
  return (
   <Container>
       <Home/>
       <About/>
       <Services/>
       <Anoda/>
       <Trusted/>
       <Nawa/>
       <Footer/>
   </Container>
  );
}

const Container = styled.div`
    
`

export default App;
