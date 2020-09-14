import React, {useEffect, useState} from 'react';
import Lista from './Lista';
import Buscador from './Buscador';
import Spinner from './Spinner';
import axios from 'axios';
import PropTypes from 'prop-types';
const Characters = ({title}) => {
     const [characters, changeCharacters] = useState([]);
     const [page, changePage] = useState(1);
     const [arraypages, changeArrayPages] = useState([]);
     const [spinner, changeSpinner] = useState(false);
 

     useEffect(()=>{
          (async ()=>{
               changeSpinner(true);
               const {data} = await axios.get(`https://breakingbadapi.com/api/characters?limit=8&offset=${8*(page-1)}`);
               changeSpinner(false);
               changeCharacters(data);
               // eslint-disable-next-line
          })();
     },[page])

     useEffect(()=>{
          (async()=>{
               const {data} = await axios.get(`https://breakingbadapi.com/api/characters`);
               const array = []
               for (let i = 1; i <= Math.ceil(data.length / 8); i++) {
                    array.push(i);
               }
               changeArrayPages([...array]);
          })();
          // eslint-disable-next-line
     },[])

     return (
          <section className="caracteres">
               <div className="container">
                    <h2 className="display-4 text-center text-white font-weight-bolder py-3">{title}</h2>
                    <Buscador changeSpinner={changeSpinner} changeCharacters={changeCharacters} ></Buscador>
                    {
                         !spinner 
                         ?
                         <Lista characters={characters} arraypages={arraypages} changePage={changePage} page={page}/> 
                         :
                         <Spinner />
                    }
               </div>
          </section>   
     );
}
Characters.propTypes = {
     title: PropTypes.string.isRequired
}
export default Characters
