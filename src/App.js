import { Container } from 'react-bootstrap'

//components
import Header from './components/Header'
import Footer from './components/Footer'

//pages
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Header />
      <main className="py-5">
        <Container>

          <Home />

        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
