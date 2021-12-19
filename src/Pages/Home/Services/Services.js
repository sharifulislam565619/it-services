import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
   const [services, setServices] = useState([])

   useEffect(() => {
      fetch('https://young-hamlet-32330.herokuapp.com/services')
         .then(res => res.json())
         .then(data => setServices(data))
         .catch(() => { })
   }, [])
   return (
      <div className="mb-5">
         <h2 className="mb-4">Our services</h2>
         <Container>
            <Row xs={1} sm={1} md={3} className="g-5">
               {
                  services?.map(service => <Service
                     key={service._id}
                     service={service}
                  ></Service>)
               }
            </Row>
         </Container>
      </div>
   );
};

export default Services;