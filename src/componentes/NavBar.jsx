import './navbar.css';
import './navbar.scss';
import Logo from '../assets/img/aceite-esencial.png'
import CartWidget from './cartWidget';
import {NavLink, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavDropdown } from 'react-bootstrap';
import Searcher from './searcher';
import FreeShipping from './freeShipping';

function Header(){

  const groupCategory = [
    {id: '/group-1', category:'Temor, miedo y preocupación'},
    {id: '/group-2', category:'Incertidumbre e inseguridad'},
    {id: '/group-3', category:'Falta de interés por el presente'},
    {id: '/group-4', category:'Soledad'},
    {id: '/group-5', category:'Hipersensibilidad'},
    {id: '/group-6', category:'Desesperación, desánimo y abatimiento'},
    {id: '/group-7', category:'Sufrimiento y preocupación por los demás'},
  ]
    return (
        <>
          {['xl'].map((expand) => (
            <Navbar key={expand} expand={expand} className="header">
              <Container fluid className='containerHeader'>
                <div className="logo">
                    <a href='/'>
                        <img className='headerLogo' alt='logotipo' src={Logo}></img>
                        <p className='nombreBrand'> BachShop </p>
                    </a>
                </div>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      Menu
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center pe-3 header liHeader">
                        <NavLink to='/' className='menuEnlace menu'> INICIO </NavLink>
                        <div> 
                          <NavDropdown title="REMEDIO INDIVIDUAL" id="basic-nav-dropdown" className='menuEnlaceDrop'>
                            {groupCategory.map(cat =>
                              <NavDropdown.Item key={cat.id}>
                                <Link to={cat.id}> {cat.category} </Link>
                              </NavDropdown.Item>
                            )} 
                          </NavDropdown>
                        </div>
                        <NavLink to='/gotero-personalizado' className='menuEnlace menu'> CONJUNTO DE REMEDIOS </NavLink>
                        <NavLink to='/caja-completa' className='menuEnlace menu'> CAJAS DE REMEDIOS </NavLink>
                        <NavLink to='/contact' className='menuEnlace menu'> CONTACTO </NavLink>
                    </Nav>
                    <Searcher />
                    <div>
                <Link to='/cart'>
                  <CartWidget /> 
                </Link>
            </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          ))}
          <FreeShipping />
        </>
      );
}

export default Header;