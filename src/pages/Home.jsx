import React, {useState, useEffect} from 'react'
import CardBook from '../components/LatestBooks'
import aboutimg from '../Assets/Images/pexels-rickyrecap-1926988.jpg'

function Home() {

  const [show, setShow] = useState([])

  useEffect(()=>{
    fetch('https://freetestapi.com/api/v1/books?limit=4')
    .then(response => response.json())
    .then(data => setShow(data))
},[])

  return (
    <div>
        <div>
          <h3 style={{textAlign: 'center', marginTop: '90px', marginBottom: '30px'}}>Latest books</h3>
          <div id='latestbooks'>
            {show && show.map((item, index)=> {return <span key={index} ><CardBook item={item} index={index} id='card' /></span>})}
          </div>
        </div>
        <div id='about-us' name='#about-us'>
          <div style={{width: '50%'}}>
            <img src={aboutimg} alt="About us" style={{width: '80%', height: '800px', marginLeft: '10%'}} />
          </div>
          <div style={{ width: '50%', height: '800px', textAlign: 'center'}}>
            <h1 style={{textAlign: 'center', marginTop: '120px'}}><b>About us</b></h1>
            <p style={{fontSize: '20px'}} className='container'>Welcome to Book app, the ultimate destination for book lovers! Whether you’re an avid reader or just starting to explore the world of books, our app offers a rich and engaging experience. Discover an extensive library of books across various genres, from timeless classics to the latest bestsellers. Our intuitive search and filter options make it easy to find books by title, author, genre, or publication date. Personalized recommendations based on your reading history ensure you’ll always have something new and exciting to read. Engage with a community of fellow book enthusiasts by reading reviews, joining discussions in book clubs, and participating in interactive polls and quizzes. Create your own digital bookshelf to organize your reading collection and track your progress with our built-in reading tracker. Enjoy a seamless reading experience with our integrated e-reader, featuring customizable font sizes, themes, and a night mode for comfortable reading in any lighting condition. Sync your reading progress across all your devices, so you can pick up right where you left off. Join BookVerse today and immerse yourself in a world of literature. Discover, read, and share your passion for books with a vibrant community of readers. Happy reading!</p>
          </div>
        </div>
    </div>
  )
}

export default Home