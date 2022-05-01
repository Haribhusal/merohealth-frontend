/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import UserFooter from "../components/user/UserFooter";
import UserHeader from "../components/user/UserHeader";
import { Modal, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import Blog from "../components/front/Blog";
import YoutubeEmbed from "../components/front/YoutubeEmbed";
import TestServices from "../components/front/TestServices";
import PopularTests from "../components/front/PopularTests";
import WhyMerohealth from '../components/front/WhyMerohealth';
import HeroSlider from "../components/front/HeroSlider";
import WhyChoose from "../components/front/WhyChoose";
import LabCTA from "../components/front/LabCTA";
import ServiceLink from "../components/front/ServiceLink";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <>
      <UserHeader />
      <HeroSlider />
      {/* <TestServices /> */}
      <PopularTests />
      <ServiceLink />
      <WhyMerohealth />
      <WhyChoose />
      <LabCTA />
      <Blog count="3" showMoreLink="true" title="recent medium blog posts" />
      <div className="mb-5"></div>
      <UserFooter />
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Body className="m-0 p-0 youtubeModal">
          <YoutubeEmbed embedId="rokGy0huYEA" />
          <i className="las la-times" onClick={handleClose}></i>
        </Modal.Body>
      </Modal>
    </>
  );
}
