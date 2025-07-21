import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import {  Image,
          Title,
          Botao
        } from "./style"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap-icons/font/bootstrap-icons.css';


import DropTitle from "../droptitle";
import logo_rbsc from '../../images/logo_rbsc.webp';

function NavigationBar() {

  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user;

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  function RotaHome(route) {
        navigate('/home', { state: { user: user }})
  }

  function RotaElenco(route) {
        navigate('/elenco', { state: { user: user }})
  }

  function RotaJogos(route) {
        navigate('/jogos', { state: { user: user }})
  }

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)' }}>
      <Container fluid>
        <Botao onClick={handleShow} className="me-2">
          ☰
        </Botao>

        <Offcanvas show={show} onHide={handleClose} className="text-white" style={{ backgroundColor: '#970700', fontWeight: 'bold' }}>
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column">
              <Nav.Link onClick={() => { RotaHome(); handleClose(); }}>
                <i className="bi bi-house-door-fill me-2"></i>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => { RotaElenco(); handleClose(); }}>
                <i className="bi bi-people-fill me-2"></i>
                Elenco
              </Nav.Link>
              <Nav.Link onClick={() => { RotaJogos(); handleClose(); }}>
                <i className="bi bi-calendar-event me-2"></i>
                Jogos
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
        <Navbar.Brand href="/home" onClick={RotaHome}>
          <Image src={logo_rbsc} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Title>RIO BRANCO SPORT CLUB</Title>
          </Nav>
          <NavDropdown title={<DropTitle text={user.name} />} id="navbarScrollingDropdown" className="me-4">
              <NavDropdown.Item href="#" className="me-5">{user.email}</NavDropdown.Item>
              <NavDropdown.Item href="/" className="me-5">Sair</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
