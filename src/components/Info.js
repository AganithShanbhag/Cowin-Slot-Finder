import React, { createContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const InfoBar = {
    backgroundColor: '#001f3f',
    padding: '30px',
    height: '100%'
}

const inputStyle = {
    maxWidth: '200px',
    padding: '2px'

}

const buttonStyle = {
    width: '150px',
    marginBottom: '10px',
    height: '50px !important',
    backgroundColor: '#0074D9',
    borderRadius: '5px'
}

const infoText = {
    color: '#7FDBFF'
}


export default function Info() {

    const [districtId, setDistrictId] = useState(286);
    const [centerId, setCenterId] = useState(370108);

    const setProps = () =>{

        //nothing now
    }


    return (
        <Container style={InfoBar}>
            <Row >
                <Col sm-12 md-5>
                    <p style={infoText}>Enter District Id:</p>
                    <input placeholder="Enter Id: ex:286" style={inputStyle} onChange={event => setDistrictId(event.target.value)} />
                </Col>
            </Row>

            <Row >

                <Col sm-12 md-9>
                    <p style={infoText}>Enter Center Id:</p>
                    <input placeholder="Enter Id: ex:560919" style={inputStyle} onChange={event => setCenterId(event.target.value)} />
                </Col>

                <Col sm-12 md-3>
                    <p style={infoText}>Submit Details</p>
                    <button style={buttonStyle} onClick={setProps}>Submit</button>
                </Col>
            </Row>

        </Container>
    )
}

