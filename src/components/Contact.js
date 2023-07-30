// import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/back1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" id="connect">
      <Container>
      <div style={{width:"50%", letterSpacing:"0.6px", textAlign:"center"}}>
      <h5>For a comprehensive showcase of my portfolio, please feel free to reach out to me by clicking contact me. I'm excited to share my work with you, featuring diverse projects that highlight my skills and creativity. Looking forward to connecting and discussing how my contributions can add value to your endeavors. <br/>Thank you!</h5>
      </div>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" style={{marginTop:'-37%',marginLeft:'180%',height:"7cm", width:"5cm"}}/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>
                
                <button className="custom-btn btn-9"><a href="https://formsubmit.co/el/yosihe" target="_blank" rel="noreferrer" style={{color:'black',fontWeight:'900', fontSize:'21px', textDecoration:'none'}}>Contact Me..</a></button>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
