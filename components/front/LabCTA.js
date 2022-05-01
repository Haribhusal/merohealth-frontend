import React, { useState } from 'react'
import Link from 'next/link'

const LabCTA = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <section className="usercta bgBlur py-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-5 d-flex align-items-center">
                        <div className="imagewrapper">
                            <img
                                src="https://picsum.photos/1000/800"
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="col-sm-7 d-flex align-items-center">
                        <div className="textwrapper">
                            <h3 className="title text_p">
                                Register your laboratory, get cuyastomers online, manage test
                                progress and send report.
                                <br />
                            </h3>

                            <p className="text-muted my-4">
                                Merohealth is a platform for the health care industry to solve
                                the problem of managing the health care process.
                            </p>

                            <div className="buttonswrapper d-flex gap">
                                <Link href="/lab-signup">
                                    <a className="btn btn_p">
                                        Register Lab <i className="las la-angle-right"></i>
                                    </a>
                                </Link>
                                <Link href="#">
                                    <a className="btn btn-default" onClick={handleShow}>
                                        Benefits of using Merohealth
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

export default LabCTA