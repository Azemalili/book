import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import { ChakraProvider } from '@chakra-ui/react'
import Error404 from './pages/Error404';
import Authors from './pages/Authors';
import Books from './pages/Books';
import { useEffect, useState } from 'react';
import Book from './pages/Book';
import BooksByAuthor from './pages/BooksByAuthor';
import Genres from './pages/Genres';
import BookByGenres from './pages/BookByGenres';
import SearchBook from './pages/SearchBook';
import Layout from './components/Layout';

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

 const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      { 
        path: '/', element: <Home /> 
      },
      { 
        path: '/Authors', element: <Authors /> 
      },
      {
        path: '/BooksByAuthor/:authorName',
        element: <BooksByAuthor api={book} />
      },
      {
        path: `/BooksByGenre/:genre`,
        element: <BookByGenres api={book} />
      },
      { 
        path: '/Genres', element: <Genres genres={genres} /> 
      },
      { 
        path: '/Books', element: <Books /> 
      },{
        path: `/Book/:bookID`,
        element: <Book api={book} />
      },
      { 
        path: '/Books/search/:inputValue', 
        element: <SearchBook api={book} /> 
      }
    ]
  }
      
])

  return (
    <ChakraProvider>
      <RouterProvider router={router} /> 
    </ChakraProvider>
  );
}

export default App;
