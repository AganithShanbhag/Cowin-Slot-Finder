import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"




const container = {
    clear: 'both',
    overflow: 'auto',
    background: 'linear-gradient(to right, #ffffff 0%, #000066 89%)',
    padding: '15px'
}
const nav = {
    float: 'right'
}

const logo_image = {
    float: 'left'
}

const ul = {
    padding: '10px 0px',
    display: 'inline-block'
}

const li = {
    padding: '10px',
    display: 'inline-block',
    fontSize: '20px', fontFamily: `'Oswald', sans-serif`,
    letterSpacing: '1.3px',
    color: 'black',
    textShadow: '1px 1px 3px white',
    background: 'rgba(253, 254, 254, 0.05)',

}

const logoutButton = {
    textDecoration: 'none',
    background: 'rgba(21, 67, 96, 0.5)',
    margin: '10px',
    color: 'white',
    textShadow: '2px 2px 4px #000000',

}

export default function Heading() {

    const [error, setError] = useState(null)
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

            <div style={container}>
                <div style={logo_image}>
                    <img src="https://image.flaticon.com/icons/png/512/3022/3022151.png" alt="" width="80" />
                </div>
                <p style={{ float: 'left', margin: '12px', padding: '10px', fontSize: '30px', fontFamily: `'Oleo Script', cursive` }}>Cowin-Sot-Finder</p>
                <nav style={nav}>
                    <ul style={ul}>
                        <Link to="/about" style={li}>AboutUs</Link>
                        <Link to="/work" style={li}>Working</Link>
                        <Link style={li}>Email:{" "}{currentUser.email}</Link>
                        <Button className="btn btn-sm" variant="link" onClick={handleLogout} style={logoutButton}>
                            Log Out
                        </Button>
                        {error && <Alert variant="danger">{error}</Alert>}

                    </ul>
                </nav>
            </div>
            <hr />





            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
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
            {error && <Alert variant="danger">{error}</Alert>} */}
        </>
    )
}


//*supress warnings