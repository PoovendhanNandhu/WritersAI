import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './NavigationBar.module.css'; // Make sure the path is correct

const NavigationBar = () => {
  return (
    <Navbar bg="white" variant="light" className={`${styles.navbar} rounded-pill`} expand="lg">
      <Container className='justify-content-center'>
        <Navbar.Brand href="/" className={styles.logo}>
          WritersAi
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center" style={{ width: "100%" }}>
            <Nav.Link href="/" className={styles.navLink}>Home</Nav.Link>
            <Nav.Link href="/generate" className={styles.navLink}>Create</Nav.Link>
            <Nav.Link href="/aboutus" className={styles.navLink}>About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;