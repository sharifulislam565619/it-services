import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
   const [success, setSuccess] = useState(false)
   const form = useRef();

   // const sendEmail = (e) => {
   //    e.preventDefault();

   //    emailjs.sendForm('Gmail', 'template_l0wcgch', form.current, 'user_LoAvcfnR8yQuwfYaDI8TI')
   //       .then((result) => {
   //          console.log(result.text);
   //       }, (error) => {
   //          console.log(error.text);
   //       });
   //    e.target.reset()
   //    setSuccess(true)
   // };
   return (
      <div id="contact" className="py-5 " >
         <Container>
            <div data-aos="zoom-in">
               <h2 className="pt-4 text-white">Contact Me</h2>
               <hr />
            </div>

            <div>
               <form data-aos="zoom-out" ref={form} >
                  <input className="" type="text" name="name" placeholder="Your Name" id="" /><br />
                  <input className="" type="email" name="email" id="" placeholder="Your Email" /> <br />
                  <input className="" type="text" name="subject" placeholder="Subject" id="" /><br />

                  <textarea className="" name="message" id="" placeholder="Message" cols="30" rows="5"></textarea>
                  <br />
                  <input type="submit" className="btn btn-outline-primary text-center text-white" />
               </form>
               {success && <p style={{ color: 'green' }}>Your message successfully proceed !!</p>}
            </div>
         </Container>
      </div>
   );
};

export default Contact;