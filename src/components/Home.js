import React from "react";
import Info from "./Info";
import Heading from './Heading'
import { Row, Col, ListGroup, Spinner } from "react-bootstrap";

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            District: "",
            Center: "",
            TimeCaptured: "",
            distId: 286,
            centerId: 370108,
            doseNo: 1,
        };
    }

    async componentDidMount() {
        await this.fetchInterval();
    }

    async fetchInterval() {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const date =
            tomorrow.getDate() +
            "-" +
            (tomorrow.getMonth() + 1) +
            "-" +
            tomorrow.getFullYear();
        console.log(date);
        const url =
            (await "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=") +
            this.state.distId +
            "&date=" + date;
        //console.log(url);
        const response = await fetch(url);
        const Data = await response.json();
        //console.log("data ", Data);
        this.setState({ District: Data.sessions, isLoading: false });
        this.findCenter();
        if (parseInt(this.state.doseNo) === 1) {
            this.Check(this.state.Center.available_capacity_dose1);
        } else {
            this.Check(this.state.Center.available_capacity_dose2);
        }

        console.log("District Id: " + this.state.distId);
        console.log("Center Id: " + this.state.centerId);
        console.log("Checking for dose: " + this.state.doseNo)
        setTimeout(() => this.fetchInterval(), 10000);
    }

    findCenter = () => {
        // console.log("length" + this.state.District.length);
        for (var i = 0; i < this.state.District.length; i++) {
            //console.log(typeof this.state.District[i].center_id);
            //console.log("centerId is" + typeof this.state.centerId);
            if (this.state.District[i].center_id === parseInt(this.state.centerId)) {
                //370108 for uphc
                if (parseInt(this.state.District[i].min_age_limit) === 45) { continue; }

                this.setState({ Center: this.state.District[i] });
                console.log("Center Found");
                break;
            }
        }
    };

    play = () => {
        var audio = new Audio(
            "http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/ateapill.ogg"
        );
        audio.play();
    };

    Check = (val) => {
        console.log("Doses:", val);
        if (val) {
            this.play();
            this.setState({ TimeCaptured: Date().toLocaleString() });
        }
    };

    render() {
        return (
            <div style={{ margin: "20px", fontFamily: "Oswald, San-serif" }}>
                <Heading />

                <br />

                <h4>
                    Once the Vaccine is Available, you will be alerted by a sound. Keep
                    the tab running...
                </h4>
                <br />


                <br />

                <div style={{ background: "whitesmoke" }}>
                    {this.state.isLoading ? (
                        <Spinner animation="border" role="status">
                            <span className="sr-only">{""}</span>
                        </Spinner>
                    ) : (
                        <div className="mt-2">
                            <Row>
                                <Col xs='12' sm='12' md='6'>
                                    <Info
                                        updateInfo={(distId, centerId, doseNo) => {
                                            this.setState({ distId });
                                            this.setState({ centerId });
                                            this.setState({ doseNo });
                                        }}
                                    />
                                </Col>

                                <Col xs='12' sm='12' md='6'>
                                    <div>

                                        <ListGroup variant="flush" >
                                            <p>{""}</p>
                                            <ListGroup.Item style={{ backgroundColor: '#FF6F61' }}>Center Name: {this.state.Center.name}</ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '' }}>Center Id: {this.state.Center.center_id}</ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#2ECC40' }}>Vaccine:{" "}{this.state.Center.vaccine}</ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#01FF70' }}>Fee type:{" "}{this.state.Center.fee_type}</ListGroup.Item>

                                            <ListGroup.Item>Available Capacity: {this.state.Center.available_capacity}</ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#7FDBFF' }}>Available Capacity Dose 1:{" "}{this.state.Center.available_capacity_dose1}</ListGroup.Item>
                                            <ListGroup.Item style={{ backgroundColor: '#39CCCC' }}>Available Capacity Dose 2:{" "}{this.state.Center.available_capacity_dose2}</ListGroup.Item>
                                        </ListGroup>
                                        <br />
                                        <p>Center Address:{this.state.Center.address}</p>
                                        <p>Last Captured: {this.state.TimeCaptured}</p>
                                        <br />
                                    </div>
                                </Col>
                            </Row>


                        </div>


                    )}
                </div>
            </div>
        );
    }
}
