import React from 'react'
import Link from 'next/link'

const ServiceLink = () => {
    return (
        <section className="services py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 bg_3">
                        <div className="serviceItem">
                            <div className="icon">
                                <i className="las la-x-ray"></i>
                            </div>
                            <div className="textwrap">
                                <h3 className="title">Send Health Test Request</h3>
                                <p className="text-muted my-4">
                                    Create health test request and get report online.
                                </p>
                                <Link href="/search?tab=tests&keyword=">
                                    <a className="btn btn_p">
                                        Test Now <i className="las la-angle-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bg_2">
                        <div className="serviceItem">
                            <div className="icon">
                                <i className="las la-laptop-medical"></i>
                            </div>
                            <div className="textwrap">
                                <h3 className="title">Get Test Requests from Patients</h3>
                                <p className="text-muted my-4">
                                    List your services and get health test requests.
                                </p>
                                <Link href="#">
                                    <a className="btn btn_p">
                                        Register Lab <i className="las la-angle-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 bg_3">
                        <div className="serviceItem">
                            <div className="icon">
                                <i className="las la-question"></i>
                            </div>
                            <div className="textwrap">
                                <h3 className="title">Having health issues?</h3>
                                <p className="text-muted my-4">
                                    Post your health issues and get solutions from health
                                    experts.
                                </p>
                                <Link href="#">
                                    <a className="btn btn_p">
                                        Ask Question <i className="las la-angle-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceLink