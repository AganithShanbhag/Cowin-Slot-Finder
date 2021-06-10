import React, { useState } from "react"
import { Card, Button, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Dashboard() {
  const [error, setError] = useState("")
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
    <div style={{ backgroundImage: `url(/assets/cover.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <br />

      <Link to="/" style={{textDecoration:'none', color:'black'}}> <h1 style={{ textAlign: 'center', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }} className="mb-4">
        <img width="45px"
          src="https://image.flaticon.com/icons/png/512/2913/2913465.png" alt="virus-illustration" />{" "}
        Cowin-Slot-Finder</h1>
      </Link>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", marginTop: '-50px', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>

          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3" style={{ textDecoration: 'none' }}>
                Update Profile
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout} style={{ textDecoration: 'none', color:'red' }}>
              Log Out
            </Button>
          </div>

        </div>
      </Container>

    </div>
  )
}
