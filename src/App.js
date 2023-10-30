import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Hero from './components/hero';
import About from './components/about';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>I am app.js</h1>
      < Header/>
      < Hero />
      < About/>
      <Footer/>
    </div>
  );
}

export default App;