import React from 'react'
import { Col ,Container, Row } from 'react-bootstrap'
import './Service.css';
function Service() {
    const data=[{
    
        icon:"fa-solid fa-house",
        title:"BUSINESS MODEL",
        subtitle:"You can also use this space for other purpose where the informaton is best presented as mere teasers."
    },
    {
        icon:"fa-solid fa-house",
        title:"BUSINESS EXECUTION",
        subtitle:"You can also use this space for other purpose where the informaton is best presented as mere teasers."

    },
    {
        icon:"fa-solid fa-house",
        title:"BUSINESS MONITORING",
        subtitle:"You can also use this space for other purpose where the informaton is best presented as mere teasers.",

    }
]
const Column=({demo})=>{
    return(
        <>
        <Col md className="rounded-5 py-4 bg-success me-4">
            <div className='icon-box '>
                <i className={demo.icon}></i>
            </div>
           
                <h4>{demo.title}</h4>
                <p className='fw-bold'>{demo.subtitle}</p>
         
        </Col>
        </>
    )
}

  return (
    <section className=' service bg-success py-5 bg-opacity-50 text-white'>
        <Container >
            <Row>
                <h1 className='text-success'>Our Services</h1>
                <p className='text-white col-lg-8'>Share your services or product offering here.
                    present them as a simple headers that can lead our services.
                </p>
            </Row>
            <Row>
                {
                data.map((item,index)=>{
                    return(
                        <Column demo={item}key={index}/>
                    )
               })
            }
            </Row>
        </Container>      
    </section>
  )
}

export default Service
