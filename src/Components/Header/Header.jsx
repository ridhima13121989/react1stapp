import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'animate.css/animate.min.css';
import { Link } from 'react-router-dom';
import menu from '../../manu-json-api/manu.json'
import company from '../../Company-api/Company.json'





function Mainmenu({demo}) {
  return (
    <>
    <Link to={demo.link}className={demo.isButton?"btn btn-primary":"nav-link"}>{demo.label}</Link>
    </>
  );
}
function DropdownMenu({demo})
{
  return(
    <NavDropdown title={demo.label} id="basic-nav-dropdown">
              {
              demo.dropdownMenu.map((data,index)=>{
                  return <Mainmenu demo={data} key={index}/>
                })
              }
            </NavDropdown>
  )
}

function Header()
 {
  // console.log(menu);
  //console.log(company);
  return (
    <>
   
    
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/" className='navbar-brand'>
          <img src={company.logo} alt="logo" width="56px"/>&nbsp;
          {company.name}
        </Link>
        { <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search" style={{width:'300px'}}
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success"style={{width:'120px'}} >Search</Button>
          </Form> }
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2  my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Link to="/" className='nav-link'>Home</Link>
            <Link to="/learn" className='nav-link'>Learn</Link>
            <Link to="/reference" className='nav-link'>Reference</Link>
            <Link to="/community" className='nav-link'>Community</Link>
            <Link to="/blog" className='nav-link'>Blog</Link> */}
            { 
            menu.map((item,index)=>{
              // console.log(item,index)
              if(item.isDropDown)
              {
                return(<DropdownMenu demo={item}/>);
              }
              {return(<Mainmenu demo={item} />   ) ;
            }
                
                   
              
            })
            
          }   
            
            </Nav>          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
