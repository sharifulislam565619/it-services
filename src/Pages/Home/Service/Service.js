import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Service.css';

const Service = ({ service }) => {

   const { title, desc, img, price } = service
   return (

      <Col data-aos="zoom-in">
         <Card className="my-card" style={{ width: '18rem' }}>


            <i className={img}></i>

            <Card.Body>
               <Card.Title data-aos="fade-right">{title}</Card.Title>
               <Card.Text>
                  <small>${price}</small>
               </Card.Text>
               <Card.Text data-aos="fade-left">
                  {desc}
               </Card.Text>
            </Card.Body>
         </Card>
      </Col>
   );
};

export default Service;