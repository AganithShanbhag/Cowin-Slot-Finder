import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert, Container } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


const AuthCard = {

  background: `linear-gradient(to bottom right, #3333cc 0%, #99ccff 80%)`,
  boxShadow: `2px 2px 10px 3.5px black`,
}

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div style={{ backgroundImage: `url(/assets/cover.jpg)`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
      <br />

      <Link style={{ textDecoration: 'none', color:'black' }} to ="/"> <h1 style={{ textAlign: 'center', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }} className="mb-4">
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
              <h2 className="text-center mb-4">Update Profile</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    ref={emailRef}
                    required
                    defaultValue={currentUser.email}
                  />
                </Form.Group>

                <Form.Group id="password" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Form.Group id="password-confirm">

                  <Form.Label className="mt-3">Password Confirmation</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    placeholder="Leave blank to keep the same"
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100 mt-2" type="submit">
                  Update
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/" style={{ textDecoration: 'none', color:'#FF4433' }}>Cancel</Link>
          </div>

        </div>
      </Container>

    </div>
  )
}
