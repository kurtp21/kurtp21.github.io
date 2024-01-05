import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home.js';

import { Routes, Route } from 'react-router-dom';
import './styles/tailwind.css';

function App() {
  return (
    <div className='flex flex-col justify-between min-w-screen min-h-screen'>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
