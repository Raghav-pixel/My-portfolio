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
import Experience from './components/Experience/Experience';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {CSSTransition} from 'react-transition-group';

function App() {

  const [ isSideModalOpen, setIsSideModalOpen ] = useState(false);
  const [ selectedHeader, setSelectedHeader ] = useState('home');
  console.log(selectedHeader, 'setSelectedHeader');
  return (
    <>
      <BrowserRouter>
        {
          isSideModalOpen && <Sidebar />
        }
        <div className="app">
          <Header 
            setIsSideModalOpen={setIsSideModalOpen}
            selectedHeader={selectedHeader}
            setSelectedHeader={setSelectedHeader}
          />
          <div className='content'>
            <SocialMediaCard />
            <Routes>
              <Route path='/' Component={() => <Home selectedHeader={selectedHeader} setSelectedHeader={setSelectedHeader} />} exact />
              <Route path='/about' Component={About} />
              <Route path='/projects' Component={Projects} />
              <Route path='/contact' Component={Contact} />
              <Route path='/experience' Component={Experience} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
