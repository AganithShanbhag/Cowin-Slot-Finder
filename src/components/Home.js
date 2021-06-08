import React from "react";
import Heading from "./Heading";
import { Container, Row, Col, Alert} from "react-bootstrap";
import Info from "./Info";
import { districtId, centerId, submit } from "./Info";


export default class Home extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            District: "",
            Manipal: "",
            TimeCaptured: ""
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
            (await "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=286&date=") +
            date;
        const response = await fetch(url);
        const Data = await response.json();
        // console.log("data ", Data);
        this.setState({ District: Data.sessions, isLoading: false });
        this.findManipal();
        this.Check(this.state.Manipal.available_capacity_dose1);
        setTimeout(() => this.fetchInterval(), 10000);
    }

    findManipal = () => {
        for (var i = 0; i < this.state.District.length; i++) {
            if (this.state.District[i].center_id === 560919) {
                //370108 for uphc
                this.setState({ Manipal: this.state.District[i] });
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
            <Container style={{ backgroundColor: 'whitesmoke' }}>
                <Heading />
                <br />
                <br />
                <br />
                <h5>
                    Once the Vaccine is Available, you will be alerted by a sound. Keep
                    the tab running...
                </h5>
                <br />
                <br />


                {this.state.isLoading ? (
                    <p>Loading...</p>
                ) : (


                    <div>
                        <Row>
                            <Col>
                                    <Info  districtId  = {this.state.districtId}/>
                            </Col>

                            <Col>
                            <div>
                                    <h2>Name: {this.state.Manipal.name}</h2>
                                    <br />
                                    <h3>Center Id: {this.state.Manipal.center_id}</h3>
                                    <br />
                                    <h4>Center Address: {this.state.Manipal.address}</h4>
                                    <br />

                                    <h5>
                                        Available Capacity Dose1:{" "}
                                        {this.state.Manipal.available_capacity_dose1}
                                    </h5>
                                    <br />
                                    <br />

                                    <h4 style={{ color: "red" }}>
                                        Last Captured: {this.state.TimeCaptured}
                                    </h4>
                                </div>

                            </Col>
                         </Row>  

                         
                         {
                                <Alert variant="success" className="m-5"  >
                                    This is an alert—check it out!
                                </Alert>
                         }
                                   

                    </div>

                )}
               

            </Container>



        );
    }
}
