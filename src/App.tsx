import './App.css';
import { Route, Routes } from 'react-router-dom';
import Product from './routes/product';
import Home from './routes/home';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Login from './routes/login';

function App() {
  return (
    <>
      <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="/">Nhà Thuốc Hảo Hạnh</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/product">Sản phẩm</Nav.Link>
      </Nav>
      <Nav>
      <Nav.Link href="/login">Đăng nhập</Nav.Link>
      <Nav.Link href="#memes">
        Đăng kí
      </Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
