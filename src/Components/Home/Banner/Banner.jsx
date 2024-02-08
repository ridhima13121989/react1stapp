import React from 'react'
import { Button } from 'react-bootstrap'
import './Banner.css'

function Banner() {
  return (
    <>
    <div className='banner position-relative'>
        <video  width="100%" height="700px" className='position-relative' autoPlay muted loop >
        <source src="1.mp4" type="video/mp4" width="100%"/></video>
    
    <div className=" text-center text-white position-absolute start-0 w-100" style={{top:"25%"}}>
        <img src="logo192.png" alt="logo" width={120} className='logorotate'/>
        <h1>CNC Web World</h1>
        <h2>Remove your fresher tag</h2>
        <Button variant="info" className='me-3'>Learn React</Button>
        <Button variant="secondary">Learn JAVA</Button>
    </div>
    </div>
    </>
  )
}

export default Banner
