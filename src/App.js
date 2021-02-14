//imports 
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//pages
import Home from "./pages/Home";
import EachProduct from "./pages/EachProduct";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5">
        <Container>

          <Route exact path='/'  component={Home}/>
          <Route path='/product/:id' component={EachProduct}/>

        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
