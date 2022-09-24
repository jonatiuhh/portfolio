import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/imgprincipal.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import { findRenderedComponentWithType } from "react-dom/test-utils";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [ 'Web developer'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; 

    useEffect (() =>{
        let ticker = setInterval(() =>{
            tick();
        },delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum +1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={5}>
                      <TrackVisibility>
                      {({ isVisible }) =>
                      <div className={isVisible ? "animated__animated animate__fadeIn" : ""}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi, im Jonathan, '}<span className="wrap">{text}</span></h1>
                        <p>My name is Jonathan Sesma, I live in Guadalajara, MX. I'm web developer, recently gratuaded of Mecatronic Engeneer. 
                        Currently working as freelancer.
                        </p>
                        {/* <button onClick={() => console.log('connect')}>Lets connect </button> */}
                        </div>}
                      </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder-Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}