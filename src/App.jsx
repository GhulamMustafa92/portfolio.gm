
import './App.css'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Cursor from "./components/Cursor";
import Projects from './components/Projects';
import Footer from './components/Footer';
import Preloader from './components/Preloader';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function MainPage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Preloader />

      <Cursor>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Cursor>
    </BrowserRouter>
  );
}
