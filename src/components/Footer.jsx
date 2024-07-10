import React from 'react'

function Footer() {
  return (
    <footer id='footer' className='bg-body-tertiary'>
          <div id='info'>
            <h4 style={{color: 'black'}}>Help</h4>
            <a href="/">Contact us</a>
            <a href="/">Help center</a>
            <a href="/">Report a problem</a>
          </div>
          <div id='info'>
            <h4 style={{color: 'black'}}>Discover</h4>
            <a href="/">Donate</a>
            <a href="/">Add a book</a>
            <a href="/">Visit us</a>
          </div>
          <div id='info'>
            <h4 style={{color: 'black'}}>Languages</h4>
            <a href="/">English</a>
            <a href="/">Spanish</a>
            <a href="/">Arabic</a>

          </div>
        </footer>
  )
}

export default Footer