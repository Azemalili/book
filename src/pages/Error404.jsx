import React from 'react'

function Error404() {
  return (
    <div style={{textAlign:'center', marginTop: '100px'}}>
    <b>
    <h1>Error 404</h1>
    <p>Page was not found</p>
    </b>
    <p>Please go to <a href='/' style={{color: 'blue'}}>homepage</a></p>
    </div>
  )
}

export default Error404