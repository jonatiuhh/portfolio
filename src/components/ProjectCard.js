import { Col } from 'react-bootstrap';
export const ProjectCard = ({ title, description, imgUrl, link }) => {

    const openLink = () => {
            console.log({link});
    }
    return (
        <Col sm={6} md={4} >
            <div className="proj-imgbx" onClick={()=>window.open(link,'_blank')}>
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4 >{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}