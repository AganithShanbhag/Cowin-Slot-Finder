import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container style={{ backgroundColor: 'black', color: 'whitesmoke'}}>
            <br />
            <Row>
                <Col xs="12" sm="4">
                    Currently Looking Only for Manipal UPHC Venugopal Temple
                </Col>
                <Col xs="12" sm="8" className="mt-2">
                    <ul>
                        <li>We are Requesting Cowin Data for the Next day</li>
                        <li>
                            The Text is Blank because the Server isn't Updated with Next Day's
                            Content
                        </li>
                        <li>
                            Once the Server is loaded with Data, all the Information will
                            appear here
                        </li>
                        <li>
                            Once the dose is available the app captures the time for future
                            Reference.
                        </li>
                        <li>
                            The React App Resfreshes every 10s hence Data is being Requested
                            Every 10s
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <p style={{ textAlign: "center", fontFamily: "monospace" }}>
                    `Anxious Coder`
                </p>
            </Row>
        </Container>

    )
}
