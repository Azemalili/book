import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import NavScrollExample from './components/NavScrollExample';
import Error404 from './pages/Error404';
import Authors from './pages/Authors';
import Books from './pages/Books';
import { useEffect, useState } from 'react';

function App() {

 

  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavScrollExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Authors' element={<Authors />} />
          <Route path='/Books' element={<Books />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
