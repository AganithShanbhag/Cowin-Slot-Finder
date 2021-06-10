import React, { useState } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";

const InfoBar = {
    backgroundColor: "#001f3f",
    padding: "30px",
    height: "100%"
};

const inputStyle = {
    maxWidth: "200px",
    padding: "2px"
};

const buttonStyle = {
    width: "150px",
    marginBottom: "10px",
    height: "50px !important",
    backgroundColor: "#0074D9",
    borderRadius: "5px"
};

const infoText = {
    color: "#7FDBFF"
};

export default function Info(props) {
    const [districtId, setDistrictId] = useState(286);
    const [centerId, setCenterId] = useState(370108);
    const [min_age, setMin_Age] = useState(18);
    const [doseNo, setDoseNo] = useState(1);

    const [showalert, setShowAlert] = useState(false);

    const doseOption = (e) => {

        setDoseNo(e.target.value)
    }

    const minAge = (e) => {
        setMin_Age(e.target.value)
    }

    if (showalert) {
        return (

            <Alert showalert={showalert} variant="success">
                <Alert.Heading>Following Options are Submitted</Alert.Heading>
                <p>District Id:{""} {districtId}</p>
                <p>Center Id:{" "}{centerId}</p>
                <p>Dose No:{""}{doseNo}</p>
                <p>Once the Doses are available all the data gets filled</p>
                <hr />
                <div className="d-flex justify-content-end">
                    <Button onClick={() => setShowAlert(false)} variant="outline-success">
                        Close X
                    </Button>
                </div>
            </Alert>

        );
    }

    return (
        <Container style={InfoBar}>

            {/* <div style={{
                margin: '0',
                position: 'absolute',
                top: '50%',
                msTransform: 'translateY(-50%)',
                transform: 'translateY(-50%)',
            }}> */}

            <Row className="mt-2">
                <Col sm='12' md='5' >
                    <p style={infoText}>Enter District Id:</p>
                    <input
                        type="number"
                        placeholder="Enter Id: ex:286"
                        style={inputStyle}
                        onChange={(event) => setDistrictId(event.target.value)}
                    />
                </Col>
            </Row>

            <Row className="mt-2">
                <Col sm='12' md='5'>
                    <p style={infoText}>Enter Center Id:</p>
                    <input
                        type="number"
                        placeholder="Enter Id: ex:560919"
                        style={inputStyle}
                        onChange={(event) => setCenterId(event.target.value)}
                    />
                </Col>
            </Row>

            <Row className="mt-4">
                <Col className="mb-3">

                    <p style={infoText}>Enter Dose Number-</p>
                    <select value={doseNo} onChange={doseOption}>
                        <option value="1">Dose 1</option>
                        <option value="2">Dose 2</option>
                    </select>

                </Col>

                <Col className="mb-3">
                    <p style={infoText}>Enter Minimum Age-</p>
                    <select value={min_age} onChange={minAge}>
                        <option value="18">18</option>
                        <option value="45">45</option>
                    </select>
                </Col>

                <Col>
                    <p style={infoText}>Submit Details</p>
                    <button
                        style={buttonStyle}
                        onClick={() => {
                            props.updateInfo(districtId, centerId, doseNo, min_age)
                            setShowAlert(true)
                        }

                        }
                    >
                        Submit
                    </button>
                </Col>
            </Row>
            {/* </div> */}
        </Container>
    );
}
