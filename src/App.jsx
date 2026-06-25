import './App.css'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <Cursor>
      <Navbar />
      <Home />
      <About />
      <Projects/>
      <Footer/>
    </Cursor>
  );
}
