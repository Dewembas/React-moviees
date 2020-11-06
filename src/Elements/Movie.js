import React, {useState, useEffect}from 'react';
import Pagination from 'react-js-pagination'

function Movie(props){
    
    const [data, setData] = useState([])
    const [page, setPage] = useState(null)
    const [totalCount, setTotalCount] = useState(1)
 
    const [openItemIndex, saveOpenItemIndex] = useState(null);
   
    
let arr = []
let objLocal ={
  img: data[openItemIndex]?.poster_path,
  title: data[openItemIndex]?.original_title,
  opis:  data[openItemIndex]?.overview,
}
  if(localStorage.getItem("favArr")){
    arr = JSON.parse(localStorage.getItem("favArr"))
  
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
    
    

     <div className="row row_poster">
            {data.map((e,index, )=><div  key={e.id} >
           <img className="posters" src={`http://image.tmdb.org/t/p/w342/${e.poster_path}`} onClick={() => { saveOpenItemIndex(index) }}
            
           alt="poster" ></img>
   
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
    onHide={() => saveOpenItemIndex(null)}
   
    
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
     <button  onClick={() => saveOpenItemIndex(null)}>Back to list</button>
     <button  onClick={() => {if(openItemIndex<=18)
                            {saveOpenItemIndex(openItemIndex+1)}
      }}>NextMovie</button>
      
      </div> 
           <div className="button_add_favorite">
             <button onClick={()=>[arr.push(localStorage.setItem('favArr',JSON.stringify([ objLocal])))]}>add to fovorite</button>
              </div>   

      <div className="modal_films"> 
        < img  src={`http://image.tmdb.org/t/p/w342/${data[openItemIndex]?.poster_path}`} alt='BackGround'/>
    <div>
      <p className="textMod">{data[openItemIndex]?.original_title}</p>
      <div className="modal_films_head">
        <p>Score: {data[openItemIndex]?.vote_average}</p>
    <p>Language: {data[openItemIndex]?.original_language}</p>
    <p>Relese: {data[openItemIndex]?.release_date}</p>
    </div>
    
    <p>{data[openItemIndex]?.overview}</p>
    </div>
    </div>
    
  </div>
 

    </ div>
    
   )
   }
  }

export default Movie