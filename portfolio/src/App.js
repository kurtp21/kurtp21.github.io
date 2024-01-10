import "./styles/tailwind.css"

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  return (
    <div className='flex flex-col justify-between overflow-y-auto min-w-screen min-h-screen'>
      <Header />
      <div className="">
        <Routes>
          <Route path="/" element={ <Home /> }/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
