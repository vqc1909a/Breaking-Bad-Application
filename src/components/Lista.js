import React, { Fragment } from 'react';
import Botones from './Botones';
import Character from './Character';
import PropTypes from 'prop-types';

const Lista = ({characters, arraypages, changePage, page}) => {

     let componente;
     if(characters.length !== 0){

          componente = <Fragment>
                         <div className="row">
                         {characters.map(character => <Character key={character.char_id} character={character}></Character>)}
                         </div>
                         <Botones arraypages={arraypages} changePage={changePage} page={page}></Botones>
                        </Fragment>                              

     }else{
          componente = <h3 className="text-white font-weight-bolder text-uppercase py-3">No se encontraron resultados</h3>
     }
     return (
          <Fragment>
               {componente}
          </Fragment>
          
     );
}
Lista.propTypes = {
     characters: PropTypes.array.isRequired,
     arraypages: PropTypes.array.isRequired,
     changePage: PropTypes.func.isRequired,
     page: PropTypes.number.isRequired
}
export default Lista;