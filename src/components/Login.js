import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


const AuthCard = {

  background: `linear-gradient(to bottom right, #3333cc 0%, #99ccff 80%)`,
  boxShadow: `2px 2px 10px 3.5px black`,
}

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (

    <div style={{ backgroundImage: `url(/assets/cover.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <br />

      <Link style={{ textDecoration: 'none', color: 'black' }} to="/"> <h1 style={{ textAlign: 'center', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }} className="mb-4">
        <img width="45px"
          src="https://image.flaticon.com/icons/png/512/2913/2913465.png" alt="virus-illustration" />{" "}
        Cowin-Slot-Finder</h1>
      </Link>

      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh", marginTop: '-50px', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>

          <Card style={AuthCard}>
            <Card.Body>
              <h2 className="text-center mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <br />
                <Form.Group id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100 my-3" type="submit">
                  Log In
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/forgot-password" style={{ textDecoration: 'none' }}>Forgot Password?</Link>
              </div>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup" style={{ textDecoration: 'none', color: 'red' }}>Sign Up</Link>
          </div>
        </div>
      </Container>



    </div>
  )
}
