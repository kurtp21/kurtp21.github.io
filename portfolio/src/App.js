import "./styles/tailwind.css"

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  return (
    <div className='flex flex-col justify-between min-w-screen min-h-screen scrollbar-hide'>
      <Header />
      <div className="min-w-screen min-h-screen mx-20">
        <Routes>
          <Route path="/" element={ <Home /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
