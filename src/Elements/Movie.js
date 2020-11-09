import React, {useState, useEffect}from 'react';
import Pagination from 'react-js-pagination'


function Movie(props){
    
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
            {
           
            /* <>
            

    
    
  
  </> */}

  
   
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
    
    <div
    className="modalBack"
    show={!!openItemIndex+1}
   
   
    
    style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${data[openItemIndex]?.poster_path}) `,
                width: '100%',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                
    }
      }
     ><div className="modalContent">
      <div className="modal_buttons_navigayion">
     <button className="next"  onClick={() => saveOpenItemIndex(null)}>Back <span>to list</span></button>
     <button className="back"  onClick={() => {if(openItemIndex<=18)
                            {saveOpenItemIndex(openItemIndex+1)}
                            if (openItemIndex === 19 && page !== totalCount) {
                              setPage(page + 1);
                              saveOpenItemIndex(null)
                            }
      }}>Next <span>Movie</span></button>
      
      </div> 
           <div className="button_del_favorite">
             <button className="add_to_favorite" onClick={()=>markMovieAsFavorite(objLocal)}
             
             ><span>Add to fovorite</span><p className="mobile_icon">&#9733;</p></button>
              </div>   

      <div className="modal_films"> 
        < img  src={`http://image.tmdb.org/t/p/w342/${data[openItemIndex]?.poster_path}`} alt='BackGround'/>
    <div className="info_films">
      
      <h2 className="textMod">{data[openItemIndex]?.original_title}</h2>
     
      <div className="modal_films_head">
        <p>Score: {data[openItemIndex]?.vote_average}</p>
        <div className='line'>|</div>
    <p>Language: {data[openItemIndex]?.original_language}</p>
    <div className='line' >|</div>
    <p>Relese: {data[openItemIndex]?.release_date}</p>
    </div>
    <div className="modal_description">
      <p>{data[openItemIndex]?.overview}</p>
    </div>
    
    </div>
    </div>
    
  </div>
 

    </ div>
    
   )
   }
  }

export default Movie