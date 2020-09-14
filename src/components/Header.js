import React from 'react';
import PropTypes from 'prop-types';
const Header = ({title}) => {
     return (
          <header className="header py-3 bg-light" id="header">
               <div className="container">
                    <div className="row">
                         <div className="col text-center">
                              <h1 className="display-2 text-body font-weight-bolder">{title}</h1>
                         </div>
                    </div>
               </div>
          </header>
     );
}
Header.propTypes = {
     title: PropTypes.string.isRequired
}
 
export default Header;