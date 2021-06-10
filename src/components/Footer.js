import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
    return (
        <Container fluid style={{ backgroundColor: 'black', color: 'whitesmoke', fontFamily: 'Do Hyeon', letterSpacing: '1.5px' }}>
            <br />
            <Row>
                <Col xs="12" sm="4">
                    <ul style={{ listStyleType: 'square' }}>
                        <li>Works throughout the Country</li>
                        <li>Set your District ID and Preferred Center ID</li>
                        <li>Quick Alarm Alert once the Vaccine is available</li>
                    </ul>
                </Col>

                <Col xs="12" sm="8" className="mt-2">
                    <ul style={{ listStyleType: 'square' }}>
                        <li>Uses Co-WIN API to regularly check the availability of the vaccine in your preferred Center</li>

                        <li>
                            The Date is set One Day ahead.
                            <br />
                            [Use this App if you want to book a seat Tomorrow]

                        </li>
                        <li>
                            Be the first to get notified!
                        </li>
                        <li>
                            Failed to Book Today? Don't Worry! The App Captures the time for future Reference
                        </li>
                        <li style={{ color: 'red' }}>
                            Keep the WEB APP running in Background.
                        </li>
                    </ul>
                </Col>
            </Row>

            <Row>
                <p style={{ textAlign: "center", fontFamily: "monospace", letterSpacing: '2px' }}>
                    `©Trigger Fingers`
                </p>
            </Row>
        </Container>

    )
}
