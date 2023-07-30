import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.jpg";
import projImg2 from "../assets/img/project2.jpg";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/spotify.png";
import projImg5 from "../assets/img/book cart.jpg";
import projImg6 from "../assets/img/alarmClock.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Registration & Login Page",
      description: "Create account And LogIn",
      imgUrl: projImg1,
      webUrl:"https://regestrationloginform.netlify.app/"
    },
    {
      title: "E-Commerce Website",
      description: "Online Shopping Platform",
      imgUrl: projImg2,
      webUrl:"https://e-commercesite.netlify.app/"
    },
    {
      title: "TextUtilies",
      description: "Text related Operations",
      imgUrl: projImg3,
      webUrl:"https://mytextutilesfun.netlify.app/"
    },
    {
      title: "Spotify Clone",
      description: "A music streaming platform that helps you gain an advantage in the lucrative streaming industry",
      imgUrl: projImg4,
      webUrl:"https://clonespotiiify.netlify.app/"
    },
    {
      title: "Book Cart",
      description: "Shopping book cart with add and remove option",
      imgUrl: projImg5,
      webUrl:" https://gahtoriankita.github.io/Reactcart/"
    },
    {
      title: "Digital Alarm Clock",
      description: "Time related operations",
      imgUrl: projImg6,
      webUrl:"https://digitalandalarmclock.netlify.app/"
    },
   
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Welcome to my web development projects! We are passionate about creating stunning and dynamic websites that leave a lasting impression. With a keen eye for design and expertise in HTML, CSS, JavaScript, and popular frameworks, we craft user-friendly experiences. My focus is on seamless navigation, engaging visuals, and optimal performance.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
