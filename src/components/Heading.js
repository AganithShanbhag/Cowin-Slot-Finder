import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import { useAuth } from "../contexts/AuthContext"


const LinkStyle = {
    padding: '10px',
    margin: '5px',
    color: '#E8E8E8',
    textDecoration: 'none',
    borderBottom: '2px solid #D0D0D0',
    textShadow: '2px 1px 3px #A8A8A8'
}
const headingStyle = {
    backgroundColor: '#585858',
    padding: '20px',
    // display: 'flex',
    // justifyContent: 'space-between' 
    overflow: 'hidden'
}

const Title = {
    marginLeft: '20px',
    color: '#edeeef',
    textShadow: '0.5px 0.5px 2px #dee3de'
}

export default function Heading() {

    const { currentUser } = useAuth()

    return (
        <Row style={headingStyle} className="justify-content-center align-items-center">
            <Col xs-12 sm-12 md-9>
                <img width="54px" src="https://image.flaticon.com/icons/png/512/3022/3022142.png" alt="virus-illustration" />{" "}
                <span style={Title}>Cowin-Slot-Finder</span>
            </Col>

            <Col xs-12 sm-12 md-3 className="mt-2">
                <Link style={LinkStyle}>AboutUs</Link>
                <Link style={LinkStyle}>Working</Link>
                <Link style={LinkStyle}>Stories</Link>
            </Col>
        </Row>
    )
}
