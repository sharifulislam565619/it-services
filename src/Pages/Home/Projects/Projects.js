import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import img1 from '../../../images/Dream-bike.png';
import img3 from '../../../images/Eva dental hospi.png';
import img2 from '../../../images/london-travel.png';
import './Project.css';

const Projects = () => {

   const projects = [
      {
         id: 1,
         url: "https://dream-bike-837be.web.app/",
         name: "Dream Bike",
         desc: "You'll must visit my website if you are a bike lover",
         img: img1
      },
      {
         id: 2,
         url: "https://london-travel-28132.web.app/",
         name: "London Travel",
         img: img2
      },
      {
         id: 3,
         url: "https://dental-hospital-ad560.web.app/",
         name: "Dental hospital",
         img: img3
      },


   ]


   return (
      <div className="my-3">
         <h5><small>Projects</small></h5>
         <h2>Our Portfolio</h2>

         <Container>
            <Row xs={1} md={3} className="g-4">
               {projects.map(project => (
                  <Col data-aos="fade-left" key={project.id}>
                     <Card className="project" >
                        <div style={{ overflow: 'hidden' }}>
                           <Card.Img variant="top" src={project?.img} />
                        </div>
                        <Card.Body data-aos="fade-right">
                           <Card.Title>{project.name}</Card.Title>
                           <Button variant="primary"><a target="_blank" href={project.url} rel="noreferrer">See Full website</a></Button>
                        </Card.Body>
                     </Card>
                  </Col>
               ))}
            </Row>

         </Container>
      </div>
   );
};

export default Projects;