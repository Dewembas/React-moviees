import React, {useState, useEffect}from 'react';
import Pagination from 'react-js-pagination'
import Modals from "./Modals"

function Movie(){
    
    const [data, setData] = useState([])
    const [page, setPage] = useState(null)
    const [totalCount, setTotalCount] = useState(1)
    const [openItemIndex, saveOpenItemIndex] = useState(null);
  
    const favotireMoviesIds = JSON.parse(localStorage.getItem('favorite-movies')) || [];
    const markMovieAsFavorite = movieId => {
    localStorage.setItem('favorite-movies', JSON.stringify([...favotireMoviesIds, movieId]));
};

let objLocal ={
  img: data[openItemIndex]?.poster_path,
  title: data[openItemIndex]?.original_title,
  opis:  data[openItemIndex]?.overview,
  id: data[openItemIndex]?.id,
  language: data[openItemIndex]?.original_language,
  date: data[openItemIndex]?.release_date,
  score: data[openItemIndex]?.vote_average,
}
  
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
    .then(res => res.json())
    .then(res => {
        setTotalCount(res.total_results)
        setData(res.results)})
    .catch(error => console.error(error))
},[page ])

if(openItemIndex===null){
   return (<div > 
<div className="release"><h2>Latest release</h2></div>
     <div className="row row_poster">
            {data.map((e,index, )=><div  key={e.id}  className="img-wrap" onClick={() => { saveOpenItemIndex(index) }}>
            <img className="posters" src={`http://image.tmdb.org/t/p/w342/${e.poster_path}`} 
           alt="poster" ></img>
   <div className="title_poster"><div>{e.original_title}</div></div>
            </div>)
            
      }
          
        </div> 
        <Pagination
       activePage={page}
       itemsCountPerPage={20}
       totalItemsCount={totalCount}
       pageRangeDisplayed={5}
       onChange={setPage}
       prevPageText={'Prev'}
       nextPageText={'Next'}
       firstPageText={'First'}
       lastPageText={'Last'}
       hideDisabled={true}
       itemClass="page-item"
       linkClass="page-link"
    />
);

    </div>
   )}else{return(
    <Modals
    data={data}
    setData={setData}
    openItemIndex={openItemIndex}
    saveOpenItemIndex={saveOpenItemIndex}
    markMovieAsFavorite={markMovieAsFavorite}
    objLocal={objLocal}
    page={page}
    setPage={setPage}
    />
         )
      }
  }

export default Movie