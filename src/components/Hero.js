import React from 'react';
import logo from '../Breaking-Bad-logo.svg';
const Hero = () => {
     return (
          <section className="hero">
               <div className="container">
                    <div className="row justify-content-center align-items-center">
                         <div className="col-sm-10 col-md-8 text-center">
                              <img src={logo} alt="breaking-bad"/>
                         </div>
                    </div>
               </div>
          </section>
     );
}
 
export default Hero;