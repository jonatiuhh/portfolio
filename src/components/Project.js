import { Row, Nav, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorsharp2 from '../assets/img/night-sky-bottom.jpg';
import projImg1 from '../assets/img/portfolio-web-page.png';
import projImg2 from '../assets/img/portfolio-calculadora-react.jpg';
import projImg4 from '../assets/img/portfolio-tasklist.png';
import projImg5 from '../assets/img/portfolio-fighting-game.png';
import projImg6 from '../assets/img/portfolio-apiMovies.png';
import projImg7 from '../assets/img/portfolio-webServer-njs.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
    
    const projects = [
        {
            title: 'Web page',
            description: 'My fist web page using html, css and js',
            imgUrl: projImg1,
            link: 'https://jonatiuhh.github.io/'
        },
        {
            title: 'Retro Fighting Game',
            description: 'Fighting game created width HTML`s canvas and javascript (objects, constructor)',
            imgUrl: projImg5,
            link: 'https://fighting-game-by-sesma.netlify.app/'
        },
        {
            title: 'Api of movies',
            description: 'geting info from api public of top movies updated daily with promises, fetch, await, catch.. ',
            imgUrl: projImg6,
            link: 'https://unrivaled-parfait-f001d0.netlify.app/'
        }
    ];

    const projects2 = [
        {
            title: 'Web server with node js',
            description: 'Web server created widh core modules like "fs" that help us reading and writing file`s system, and http modules that support various features of the protocol',
            imgUrl: projImg7,
            link: 'https://github.com/jonatiuhh/web-server-with-nodeJs'
        },
        {
            title: 'Task list',
            description: 'Task managemet app',
            imgUrl: projImg4,
            link: 'https://task-list-af4d4.firebaseapp.com/'
        },
        {
            title: 'Calculator',
            description: 'Calcularor created with react',
            imgUrl: projImg2,
            link: 'https://calculator-db2f1.web.app/'
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animated__animated animate__slideInUp" : ""}>
                      <h2>Projects</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eni</p>
                      </div>}
                      </TrackVisibility>
                      <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                       <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id='pills-tab'>
                         <Nav.Item>
                           <Nav.Link eventKey="first">Tab 1</Nav.Link>
                         </Nav.Item>
                         <Nav.Item>
                           <Nav.Link eventKey="second">Tab 2</Nav.Link>
                         </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey='first'>
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
                            <Tab.Pane eventKey="second">
                                <Row>
                                    {
                                        projects2.map((project, index) => {
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
                            {/* <Tab.Pane eventKey="third">Lorem ipsum</Tab.Pane> */}
                        </Tab.Content>
                       </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorsharp2}></img> */}
        </section>
    )
}