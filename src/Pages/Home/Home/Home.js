import React from 'react';
import Banner from '../Banner/Banner';
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
      </div>
   );
};

export default Home;