import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Hero from './components/hero';
import Footer from './components/Footer';
import About from './components/about';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Footer />
    </div>
  );
}

export default App;