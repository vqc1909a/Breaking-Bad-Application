import React , {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
const Buscador = ({changeSpinner, changeCharacters}) => {
     const [character, changeCharacter] = useState({
          name: '',
          error: ''
     });
     const {name, error} = character

     const handleCharacter = (e) => {
          changeCharacter({
               ...character,
               name: e.target.value
          })
     }
     const handleSubmit = async (e) => {
          e.preventDefault();
          changeSpinner(true);
          if(name.trim() === ''){
               changeCharacter({
                    ...character,
                    error: 'El campo es requerido'
               });
               changeSpinner(false);
               return null;
          }
          const {data} = await axios.get(`https://breakingbadapi.com/api/characters?name=${name.trim()}`);
          changeSpinner(false);
          changeCharacters(data);
          changeCharacter({
               name: '',
               error: ''
          });
     }
      
     return (
           <div className="buscador py-3">
               <form className="form-inline d-flex justify-content-center" onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Nombre del Personaje" value={name} onChange={handleCharacter} />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
               </form>
               {error ? <div className="alert alert-danger my-2">{error}</div> : null }
          </div>
     );
}
Buscador.propTypes = {
     changeSpinner: PropTypes.func.isRequired,
     changeCharacters: PropTypes.func.isRequired
}
export default Buscador;