import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
   return (
      <div>
         <Navigation></Navigation>
         <Banner></Banner>
         <Services></Services>
         <Projects></Projects>
         <About></About>
         <Contact></Contact>
         <Footer></Footer>
      </div>
   );
};

export default Home;