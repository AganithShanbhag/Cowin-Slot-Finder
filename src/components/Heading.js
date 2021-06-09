import React, { useState } from 'react'
import { Nav, NavDropdown, Navbar, Button, Alert } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"



const LinkStyle = {
    marginRight: '20px',
    color: '#E8E8E8',
    textDecoration: 'none',
    borderBottom: '1px solid #D0D0D0',
    textShadow: '2px 1px 3px #A8A8A8'
}

const Title = {
    marginLeft: '20px',
    color: '#edeeef',
    textShadow: '0.5px 0.5px 2px #dee3de'
}



export default function Heading() {


    const [error, setError] = useState(" ")
    const { currentUser, logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError("")

        try {
            await logout()
            history.push("/login")
        } catch {
            setError("Failed to log out")
        }
    }


    return (
        <>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <img width="45px" style={{ margin: '5px 10px' }} src="https://image.flaticon.com/icons/png/512/3022/3022142.png" alt="virus-illustration" />{" "}
                    <span style={Title}>Cowin-Slot-Finder</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/about" style={LinkStyle}>AboutUs</Nav.Link>
                        <Nav.Link href="/work" style={LinkStyle}>Working</Nav.Link>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/dashboard">Email:{" "}{currentUser.email}</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <Button variant="link" onClick={handleLogout}>
                                Log Out
                            </Button>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {error && <Alert variant="danger">{error}</Alert>}
        </>
    )
}


//*supress warnings