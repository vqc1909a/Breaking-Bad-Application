import React from 'react';
import PropTypes from 'prop-types';
const Botones = ({arraypages, changePage, page}) => {
     return (
               <div className="botones text-center py-3">
                    <div className="btn-group btn-group-lg">
                         {arraypages.map((pagina, i) => (pagina === page ? <button key={i}  type="submit" className="btn btn-success active" onClick={() => changePage(pagina)}>{pagina}</button> : <button key={i} type="submit" className="btn btn-success" onClick={() => changePage(pagina)}>{pagina}</button> ))}
                    </div>
               </div>
     );
}
Botones.propTypes = {
     arraypages: PropTypes.array.isRequired,
     changePage: PropTypes.func.isRequired,
     page: PropTypes.number.isRequired
}
export default Botones;