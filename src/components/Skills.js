import { Container, Col, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import js from '../assets/img/js.png';
import python from '../assets/img/python.png';
import reac from '../assets/img/react.png';
import nodejs from '../assets/img/nodejs.png';
import html from '../assets/img/html.png';
import css from '../assets/img/css.png';
import colorSharp from '../assets/img/pexels.jpg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className='skill' id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className='skill-bx'>
                        <h2>
                            Skills
                        </h2>
                        <p>I'm a tech and code lover. Always learning new knowledge about code. Also you can watch the repositories in my GitHub link.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className='item'>
                                <img src={js} alt='image' />
                                <h5>JavaScript</h5>
                            </div>
                            <div className='item'>
                                <img src={python} alt='image' />
                                <h5>Python</h5>
                            </div>
                            <div className='item'>
                                <img src={html} alt='image' />
                                <h5>HTML</h5>
                            </div>
                            <div className='item'>
                                <img src={css} alt='image' />
                                <h5>Css</h5>
                            </div>
                            {/* <div className='item'>
                                <img src={meter2} alt='image' />
                                <h5>Web Development</h5>
                            </div> */}
                            <div className='item'>
                                <img src={nodejs} alt='image' />
                                <h5>Node Js</h5>
                            </div>
                            <div className='item'>
                                <img src={reac} alt='image' />
                                <h5>React</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className='background-image-left' src={colorSharp} />
        </section>
      )
}