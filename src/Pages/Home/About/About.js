import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../../images/sharif.png';
import './About.css';

const About = () => {
   return (
      <>

         <div className=" mt-5 py-3 about" id="about">
            <Container>
               <h2 className="pt-4 mt-5 text-primary">About Me   <hr /></h2>

               <div className="row">
                  <div data-aos="zoom-in" className="col-md-5">
                     <img className="img-fluid" src={img} alt="" />
                  </div>
                  <div className="col-md-7 me-0">
                     <p data-aos="fade-down" className="text-start">
                        This is shariful islam. I’m a web developer. I have acquired the skill and knowledge necessary to make a React-based project. My skills are Html, CSS, javascript, bootstrap, react, node, MongoDB, Express, etc. I have successfully completed 40+ projects. I enjoy every step of the functionality from discus and collaboration. I like to learn different things and want to build a foundation of my knowledge.
                     </p>
                     <p data-aos="fade-up" className="text-start">
                        I have just started my career, I don’t have practical achievements, but I really want to practically explore and experience my potential by delivering the best services to the company. It will be my honor to work with you and this organization. I am loyal and hardworking.

                     </p>
                  </div>
               </div>
            </Container>
         </div>

      </>
   );
};

export default About;