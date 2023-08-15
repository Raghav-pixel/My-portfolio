import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import SocialMediaCard from './components/SocialMediaCard/SocialMediaCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
// import {CSSTransition} from 'react-transition-group';

function App() {

  const [ isSideModalOpen, setIsSideModalOpen ] = useState(false);

  return (
    <>
      <BrowserRouter>
        {
          isSideModalOpen && <Sidebar />
        }
        <div className="app">
          <Header isSideModalOpen={isSideModalOpen} setIsSideModalOpen={setIsSideModalOpen} />
          <div className='content'>
            <SocialMediaCard />
            <Routes>
              <Route path='/' Component={Home} exact />
              <Route path='/about' Component={About} exact />
              <Route path='/projects' Component={Projects} exact />
              <Route path='/contact' Component={Contact} exact />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
