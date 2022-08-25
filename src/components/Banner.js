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
    const toRotate = [ 'JavaScript', 'Python'];
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
                        <h1>{'Hi, im Jonathan, '}<span className="wrap">{text}</span>{' programmer'}</h1>
                        <p>My name is Jonathan Sesma, Im living in Guadalajara, MX. Im recently gratuaded at Mecatronic Engeneer when i found the love for programming. A friend mine askme make him a web page and one thing back another one. 
                            I'm skilful with JS and Python.</p>
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