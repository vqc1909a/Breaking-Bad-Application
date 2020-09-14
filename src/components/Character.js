import React, {Fragment, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
const Character = ({character}) => {
     const {char_id, name, nickname, occupation, img} = character;
     const [frase, changeFrase] = useState({});
     useEffect(() => {
          generarFrase();
          // eslint-disable-next-line
     }, [])

     const generarFrase = async () => {
               const {data} = await axios.get(`https://breakingbadapi.com/api/quote/random?author=${name}`);
               changeFrase({...data[0]});
     }
     return (
          <Fragment>
               <div className="col-sm-6 col-md-4 col-lg-3 my-3">
                    <div className="card text-center">
                         <img src={img} alt={name} className="card-img-top"/>
                         <div className="card-body">
                              <h3 className="card-title">{name}</h3>
                              <p className="lead">"{nickname}"</p>
                         </div>
                         <ul className="list-group list-group-flush">
                              {occupation.map((occup, i) => <li key={i} className="list-group-item">{occup}</li>)}
                         </ul>
                         <div className="card-header">
                              <button type="button" className="btn btn-success btn-block" data-toggle="modal" data-target={`#characterModal` + char_id}>Ver frases</button>
                         </div>
                    </div>
               </div>
               <div className="modal fade" id={`characterModal` + char_id}>
                    <div className="modal-dialog modal-dialog-centered">
                         <div className="modal-content">
                              <div className="modal-header text-center">
                                    <h3 className="card-title">{name}</h3>
                                    <p className="lead">"{nickname}"</p>
                              </div>
                              <div className="modal-body">
                                   {Object.keys(frase).length !== 0
                                   ?
                                        <blockquote className="blockquote">
                                             <p className="lead">{frase.quote}</p>
                                             <footer className="blockquote-footer">{frase.author} in <cite title="Source Title"> {frase.series}</cite></footer>
                                        </blockquote>
                                   :
                                        <p className="lead">No tiene frases</p>
                                        
                                   }
                              </div>
                              <div className="modal-footer justify-content-center">
                                   <button className="btn btn-success btn-lg" onClick={generarFrase}>Generar frase</button>
                              </div>
                         </div>

                    </div>
               </div>
          </Fragment>
          
     );
}

Character.propTypes = {
     character: PropTypes.object.isRequired
}
export default Character;