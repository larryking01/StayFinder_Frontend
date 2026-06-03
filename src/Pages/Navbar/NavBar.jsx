import './navbar.scss'
import { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import appNamesArray from '../../data/appNames';
import { UserData } from '../../App';










const NavbarComponent = () => {
  const brand_name = appNamesArray[0];

  const navigate = useNavigate();

  const { userInfo } = useContext(UserData);




return (
  <nav className="navbar">
    <Navbar collapseOnSelect bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand
          onClick={() => navigate('/')}
          className="navbar__brand"
        >
          <h3 className="navbar__brand-text">{brand_name}</h3>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="redponsive-navbar-nav">
          <Nav className="me-auto navbar__links">
            <Nav.Link
              onClick={() => navigate('/fetch-all-hotels')}
              className="navbar__link"
            >
              Hotels
            </Nav.Link>

            <Nav.Link
              onClick={() => navigate('/help-contact-us')}
              className="navbar__link"
            >
              Contact Us
            </Nav.Link>

            <Nav.Link
              onClick={() => navigate('/help-about-us')}
              className="navbar__link"
            >
              About Us
            </Nav.Link>

            <Nav.Link
              className="navbar__link navbar__link--help"
              onClick={() => navigate('/help')}
            >
              Help
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto navbar__actions">
            {userInfo ? (
              <h5 className="navbar__user-name">
                {userInfo.firstName}
              </h5>
            ) : (
              <>
                <Nav.Link className="navbar__action">
                  <Button
                    variant="custom"
                    className="navbar__button navbar__button--login"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                </Nav.Link>

                <Nav.Link className="navbar__action">
                  <Button
                    variant="custom"
                    className="navbar__button navbar__button--register"
                    onClick={() => navigate('/sign-up')}
                  >
                    Register
                  </Button>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </nav>
);
};

export default NavbarComponent;
