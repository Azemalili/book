import React, {useState, useEffect} from 'react'
import LatestBooks from '../components/LatestBooks'




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
          <h3 style={{textAlign: 'center', marginTop: '50px'}}>Latest books</h3>
          <div id='latestbooks'>
            {show && show.map((item, index)=> {return <span key={index} ><LatestBooks item={item} index={index} id='card' /></span>})}
          </div>
        </div>
    </div>
  )
}

export default Home