//imports 
import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//pages
import Home from "./pages/Home";
import EachProduct from "./pages/EachProduct";
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-5">
        <Container>

          <Route exact path='/'  component={Home}/>
          <Route path='/login'  component={Login}/>
          <Route path='/register'  component={Register}/>
          
          <Route path='/product/:id' component={EachProduct}/>
          
          {/* the question mark after the id means that you don't always have to put an id */}
          <Route path='/cart/:id?' component={Cart}/>


        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
