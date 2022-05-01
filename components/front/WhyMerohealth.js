import React from 'react'
import Link from "next/link";


const WhyMerohealth = () => {
    return (
        <section className="services py-5 bgBlur">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h3 className="title text_p ">Why Merohealth?</h3>
                        <p className="text-muted">
                            Merohealth is a platform that connects health care providers and
                            patients in an innovative way.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-clock"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Save Time and Money</h3>
                                        <p className="text-muted">
                                            Merohealth is a platform that saves time and money for
                                            your health test.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-users"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Create request for others</h3>
                                        <p className="text-muted">
                                            Create request for others from your account. Care others
                                            with merohealth.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-file-medical-alt"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Get Report Online</h3>
                                        <p className="text-muted">
                                            Get your health test report online with current status
                                            of the test process.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-building"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Lab Profile</h3>
                                        <p className="text-muted">
                                            Create Lab Profile, manage services, packages, lab
                                            members and more.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-male"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Manage Walking Customers</h3>
                                        <p className="text-muted">
                                            Manage walking customers of your laboratory, Send them
                                            report online!
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                    <div className="col-sm-4">
                        <Link href="#">
                            <a>
                                <div className="boxwrapper">
                                    <div className="icon">
                                        <i className="las la-ellipsis-h"></i>
                                    </div>
                                    <div className="info">
                                        <h3 className="title">Many More...</h3>
                                        <p className="text-muted">
                                            Merohealth brings many more features to the lab and
                                            patient.
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyMerohealth