import React, { useState, useEffect } from 'react'
import Slider from 'react-slick/lib/slider'
import Link from "next/link";


const HeroSlider = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const settings = {
        dots: true,
        infinite: true,
        fade: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        pauseOnHover: false,
        arrows: false,
        autoplaySpeed: 5000,
    };
    const newSlider = {
        autoplay: true,
        speed: 800,
        lazyLoad: "progressive",
        arrows: false,
        dots: true,
    };
    return (
        <section className="homeBanner bgBlur py-5">
            <div className="container">
                <Slider {...settings}>
                    <div className="slideritem">
                        <div className="row">
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="textwrapper">
                                    <div className="hideOverflow">
                                        <h1 className="mb-4 title  text_p">
                                            Test your Health <br />
                                            From your Home
                                        </h1>
                                    </div>
                                    <p className="text-muted mb-5">
                                        Send your health test request to the laboratory near you
                                        and get your report online.
                                    </p>
                                    <div className="buttonwrapper d-block d-sm-flex gap my-3 align-items-center">
                                        {/* <Link href="/signup">
                        <a className="btn btn_p btn-sm-block">
                          Read More <i className="las la-angle-right f16"></i>
                        </a>
                      </Link> */}

                                        <Link
                                            href={{ pathname: "/search", query: { keyword: "" } }}
                                        >
                                            <a>
                                                <button type="button" className="btn btn_p ">
                                                    Search Tests
                                                </button>
                                            </a>
                                        </Link>

                                        <button className="btn btn_a" onClick={handleShow}>
                                            <i className="las la-play"></i> How it works?
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7 imagecontainer">
                                <div className="imagewrapper">
                                    <img src="media/lady.png" alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="slideritem">
                        <div className="row">
                            <div className="col-sm-5 d-flex align-items-center">
                                <div className="textwrapper">
                                    <div className="hideOverflow">
                                        <h1 className="mb-4 title  text_p">
                                            Get Customers
                                            <br />
                                            For Your Lab
                                        </h1>
                                    </div>
                                    <p className="text-muted mb-5">
                                        You can register your laboratory, your services and your
                                        health packages along with your price. You can get health
                                        test requests from the patients.
                                    </p>
                                    <div className="buttonwrapper d-block d-sm-flex gap my-3 align-items-center">
                                        <Link
                                            href={{ pathname: "/search", query: { keyword: "" } }}
                                        >
                                            <a>
                                                <button type="button" className="btn btn_p">
                                                    Search Tests
                                                </button>
                                            </a>
                                        </Link>

                                        <button className="btn btn_a" onClick={handleShow}>
                                            See Benefits
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-7 imagecontainer">
                                <div className="imagewrapper">
                                    <img
                                        src="media/nurse.png"
                                        alt=""
                                        className="img-fluid flipX"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    )
}

export default HeroSlider