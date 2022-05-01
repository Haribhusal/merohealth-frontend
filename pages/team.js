import React from "react";
import UserFooter from "../components/user/UserFooter";
import UserHeader from "../components/user/UserHeader";

const Team = () => {
    return (
        <div>
            <UserHeader />
            <div className="py-5 container mb-5">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="textwrapper">
                            <h1>Team</h1>
                            <p className="text-muted my-2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, hic?
                                Maiores, dolorem. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, quibusdam!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/anup-jwala-poudel.jpg" alt="Pooja Bastakoti" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="https://www.linkedin.com/in/anupjwalapoudel/">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Anup Jwala Poudel</h3>
                                <p className="text-muted">
                                    CEO &amp; Founder
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/pooja-bastakoti.jpg" alt="Pooja Bastakoti" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="https://www.linkedin.com/in/pooja-bastakoti-b4647b196/">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Pooja Bastakoti</h3>
                                <p className="text-muted">
                                    Project Manager
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/hari-bhusal.jpg" alt="Pooja Bastakoti" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="https://www.linkedin.com/in/haribhusal99/">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Hari Bhusal</h3>
                                <p className="text-muted">
                                    Chief Technical Officer
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/aakriti-dhakal.jpg" alt="Pooja Bastakoti" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="#">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Aakriti Dhakal</h3>
                                <p className="text-muted">
                                    Communication Officer
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/sarbendra-malla.jpg" alt="Sarbendra Malla" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="https://www.linkedin.com/in/sarbendra-malla-1207731b6/
">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Sarbendra Malla</h3>
                                <p className="text-muted">
                                    Chief Finance Officer
                                </p>
                            </div>
                        </article>
                    </div>
                    <div className="col-sm-4">
                        <article className="teammember">
                            <figure>
                                <img src="./media/roji-gupta.jpg" alt="Pooja Bastakoti" />
                                <ul className="social-links">
                                    <li className="link">
                                        <a target="_blank" href="#">
                                            <i className="lab la-linkedin"></i>
                                        </a>
                                    </li>
                                </ul>
                            </figure>
                            <div className="info textwrapper">
                                <h3 className="title">Roji Gupta</h3>
                                <p className="text-muted">
                                    Chief Operation Officer
                                </p>
                            </div>
                        </article>
                    </div>


                </div>

            </div>
            <UserFooter />
        </div>
    );
};

export default Team;
