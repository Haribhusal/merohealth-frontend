import React from "react";
import { Accordion } from "react-bootstrap";
import UserFooter from "../components/user/UserFooter";
import UserHeader from "../components/user/UserHeader";



const Help = () => {
    return (
        <div>
            <UserHeader />
            <div className="py-5 container help my-5">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="textwrapper">
                            <h1>Help &amp; Support</h1>
                            <p className="text-muted">
                                You can find quick answers to your questions in our FAQs.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm-6 text-right">

                        <div className="textwrapper">
                            <h1 className="text_p d-flex align-items-center gap justify-content-end"> <i className="las la-headset la-5x" style={{ fontSize: "50px" }}></i> 1660 615 2022</h1>
                            <p className="text-muted">
                                Call us at our Toll Free Number if you have any queries                    </p>


                        </div>
                    </div>
                </div>


                <Accordion defaultActiveKey="0" className="accwrapper">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>How can I send a test request to nearest Laboratory from me? </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Accordion Item #2</Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

            </div>
            <UserFooter />
        </div>
    );
};

export default Help;
