import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function NavScrollExample() {


  const [authors,setAuthors] = useState([])

  useEffect(()=>{
      fetch('https://freetestapi.com/api/v1/books')
      .then(response => response.json())
      .then(data => setAuthors(data))
  },[])

  const g = authors.map((item) => {return item.genre})
  const ge = [].concat(...g)
  const genres = [...new Set(ge)]
  


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
              <Button href='/Authors' style={{paddingTop: '8px', backgroundColor:'rgba(255, 255, 255, 0)', border:'0px', color: 'rgb(70, 70, 70)'}}>Authors</Button>
              <Dropdown.Toggle split id="dropdown-split-basic" style={{paddingTop: '10px', backgroundColor:'rgba(255, 255, 255, 0)', border:'0px', color: 'rgb(70, 70, 70)'}} />
              <Dropdown.Menu id='authors-dropdown'>
                  {authors.map((item,index)=>{return <NavDropdown.Item key={index} href={`/BooksByAuthor=${item.author}`} >{item.author}</NavDropdown.Item>})}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup} >
              <Button href='/Genres' style={{paddingTop: '8px', backgroundColor:'rgba(255, 255, 255, 0)', border:'0px', color: 'rgb(70, 70, 70)'}}>Genres</Button>
              <Dropdown.Toggle split id="dropdown-split-basic" style={{paddingTop: '10px', backgroundColor:'rgba(255, 255, 255, 0)', border:'0px', color: 'rgb(70, 70, 70)'}} />
              <Dropdown.Menu id='genres-dropdown'>
                  {genres.map((item,index)=>{return <NavDropdown.Item key={index} href={`/Genre=${item}`} >{item}</NavDropdown.Item>})}
              </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="#about-us" >About us</Nav.Link>

            <Nav.Link href="#footer" >Contact us</Nav.Link>
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