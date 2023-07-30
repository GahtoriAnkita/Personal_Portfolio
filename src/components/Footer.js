import { Container, Row, Col } from "react-bootstrap";
// import logo from '../assets/img/logo.jpg';
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/icons8.png";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col className="text-center text-sm-end">
            <div className="social-icon " style={{marginTop: "40px",marginRight:"45%"}} >
              <a href="https://www.linkedin.com/in/ankita-gahtori03/"rel="noreferrer"  target='_blank'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/GahtoriAnkita"  rel="noreferrer" target='_blank'><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/gahtoriankita_/" rel="noreferrer"  target='_blank'><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
