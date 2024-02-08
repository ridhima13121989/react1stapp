import React from 'react'
import { FontawesomeObject } from '@fortawesome/fontawesome-svg-core'
import { Col, Container, Row } from 'react-bootstrap'
import './Component.css'


function Component() {
  const data=[{
    icon:"fa-solid fa-house fs-1",
    title:"Full Stack",
    subtitle:"24 hours support"
  },
  {
    icon:"fa-solid fa-folder fs-1",
    title:"Front End",
    subtitle:"24 hours support"
  },
  { 
    icon:"fa-brands fa-react fs-1",
  title:"React js",
  subtitle:"with next js"

  },
  {
    icon:" fa-brands fa-node-js fs-1",
    title:"MernStack",
    subtitle:"24 hours support"
  },
  {
    icon:" fa-brands fa-google fs-1",
    title:"Python",
    subtitle:"With ML & AI"

  }]
  const Column=({data})=>{
    return(
      <>
                <Col className='text-center shadow border p-5 my-3 mx-2  border'>
                    <div className='icon-box py-5 px-5 rounded-circle shadow border border-dark'>
                    <i className={data.icon}></i>
                   
                    </div>
                    <div className=''>
                    <h2>{data.title}</h2>
                    <p>{data.subtitle}</p>
                    </div>
                  </Col>
      </>
    )
  }
  return (
    <>
      <Container>
        <Row>
              {
                data.map((item,index)=>{
                  return(
                    <Column data={item} kay={index}/>
        
                  )
                })
              }   

        </Row>
      </Container>
    </>
  )
}

export default Component
