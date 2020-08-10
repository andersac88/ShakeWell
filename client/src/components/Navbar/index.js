import React from 'react';
import './style.css';
import { Navbar } from 'react-bootstrap';

function NavBar() {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Shake Well?</Navbar.Brand>
		</Navbar>
	);
}

export default NavBar;
