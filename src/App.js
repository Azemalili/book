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
import BooksByAuthor from './pages/BooksByAuthor';
import Genres from './pages/Genres';
import BookByGenres from './pages/BookByGenres';
import Footer from './components/Footer';

function App() {

 const [book, setBook] = useState([]);

 useEffect(()=>{
  fetch('https://freetestapi.com/api/v1/books')
  .then(response => response.json())
  .then(data => setBook(data))
 },[])

 const g = book.map((item) => {return item.genre})
 const ge = [].concat(...g)
 const genres = [...new Set(ge)]

  return (
    <ChakraProvider>
      <BrowserRouter>
      <NavScrollExample />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Authors' element={<Authors />} />
          {book && book.map((item,index)=>{return <Route path={`/BooksByAuthor=${item.author}`} key={index} element={<BooksByAuthor item={item} key={index} />} />})}
          {book && genres.map((item,index)=>{return <Route path={`/Genre=${item}`} key={index} element={<BookByGenres item={item} key={index} />} />})}
          <Route path='/Genres' element={<Genres genres={genres} />} />
          <Route path='/Books' element={<Books />} />
          {book && book.map((item,index) => {return <Route path={`/Book=${item.id}`} key={index} element={<Book item={item} />} />})}
          <Route path='*' element={<Error404 />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
