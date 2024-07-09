import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import NavScrollExample from './components/NavScrollExample';
import Error404 from './pages/Error404';
import Authors from './pages/Authors';
import Books from './pages/Books';
import { useEffect, useState } from 'react';
import Book from './pages/Book';

function App() {

 const [book, setBook] = useState([]);

 useEffect(()=>{
  fetch('https://freetestapi.com/api/v1/books')
  .then(response => response.json())
  .then(data => setBook(data))
 },[])
  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavScrollExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Authors' element={<Authors />} />
          <Route path='/Books' element={<Books />} />
          {book && book.map((item,index) => {return <Route path={`/Book=${item.id}`} key={index} element={<Book item={item} />} />})}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
