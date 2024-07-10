import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import BooksByAuthor from '../pages/BooksByAuthor';

function NavScrollExample() {


  const [authors,setAuthors] = useState([])

  useEffect(()=>{
      fetch('https://freetestapi.com/api/v1/books')
      .then(response => response.json())
      .then(data => setAuthors(data))
  },[])


  


  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{paddingLeft:'100px', paddingRight:'100px'}}>
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"

            navbarScroll
          >
            <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="/Books">Books</Nav.Link>
            <Dropdown as={ButtonGroup} >
              <Button variant="" href='/Authors'>Authors</Button>
              <Dropdown.Toggle split variant="" id="dropdown-split-basic" />
              <Dropdown.Menu id='authors-dropdown'>
                  {authors.map((item,index)=>{return <NavDropdown.Item key={index} href={`/BooksByAuthor=${item.author}`} >{item.author}</NavDropdown.Item>})}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#about-us" >About us</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;