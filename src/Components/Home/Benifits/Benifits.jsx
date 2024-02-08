import React from 'react'
import { Col, Container,Row } from 'react-bootstrap'

const data=[
    {
        title:"100% project based learning",
        subtitle:"We build more than 2 real world project in each language"
    },
    {
        title:"100% project based learning",
        subtitle:"We build more than 2 real world project in each language"
    },
    {
        title:"100% project based learning",
        subtitle:"We build more than 2 real world project in each language"
    },
    {
        title:"100% project based learning",
        subtitle:"We build more than 2 real world project in each language"
    }
]
function Benifit({demo})
{
    return(
      <div className='d-flex'>
        <div>
            <div className='me-3 mt-1'>
                <i className='fa-solid fa-check p-3 bg-primary text-white rounded-circle'></i>
            </div>
        </div>
        <div className=''>
        <h5>{demo.title}</h5>
        <p>{demo.subtitle}</p>
        
        </div>      
        </div>
    )
  }


function Benifits() {
  return (
    <section className='bg-info bg-opacity-10 py-5'>
        <Container>
            <Row className="bg-white">
                <Col md>
                <h3 className='my-4'>
                    Benifits of Learning MERN Stack
                </h3>
                {
                    data.map((item,index)=>
                    {
                        return(
                            <Benifit demo={item} key={index}/>
                        )
                        })
                    }
                 </Col>
                 <Col md>
                    <img src="2.avif" alt="logo" className='rounded-circle img-fluid w-75 d-block mx-auto'/>

                 </Col>
            </Row>
        </Container>
        </section>

  )
}

export default Benifits
