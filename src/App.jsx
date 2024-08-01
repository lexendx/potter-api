


import { Route,Routes } from 'react-router-dom';

import './App.css'
import Spell from './Component/Spell';
import Book from './Component/Book';
import Character from './Component/Character';
import Navbar from './Component/Navbar';
import Movie from './Component/Movie';
import Modal from './Component/Modal';


function App() {
  

  return (
    <>

      {/* navbar common hai isliye routes k bahar  rkhna visible in every path */}
      <Navbar path="/" />
      <Routes>
        
        {/* make routes for each component by usind browser router and route  */}
        <Route path="/" element={<Book/>}/>
        <Route path='/character' element={<Character/>}/>
        <Route path='/spell' element={<Spell/>}/>
        <Route path='/movie' element={<Movie/>}/>
        <Route path='/modal' element={<Modal/>}/>
        

      </Routes>
        

       
      
     
    </>
  )
}

export default App