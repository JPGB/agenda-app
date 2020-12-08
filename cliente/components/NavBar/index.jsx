import { Navbar, Nav } from 'react-bootstrap'

export default function NavBar() {
    return (
      <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Agenda</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
        </Navbar>
      </>
    )
  }

