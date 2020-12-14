
import React,{useState} from 'react';




const Modal = ({  page, setPage, data, openItemIndex, saveOpenItemIndex, totalCount, objLocal, markMovieAsFavorite}) => {
  const arr=JSON.parse(localStorage.getItem('favorite-movies'))
  
  

  return( <div
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
     ><div key={data[openItemIndex]?.id} className="modalContent">
      <div className="modal_buttons_navigayion">
     <button className="next"  onClick={() => saveOpenItemIndex(null)}>Back <span>to list</span></button>
     <button className="back"  onClick={() => {if(openItemIndex<=18)
                            {saveOpenItemIndex(openItemIndex+1)}
                            if (openItemIndex === 19 && page !== totalCount) {
                              setPage(page + 1);
                              saveOpenItemIndex(openItemIndex+1)
                            }
      }}>Next <span>Movie</span></button>
      
      </div> 
           <div className="button_added_favorite">
             {arr.find(film => film.id === data[openItemIndex].id) ?
             <button  className="added_favorite " ><span>Movie added to favorites</span>
             <p className="mobile_icon_added">&#9733;</p>
             </button> :
             
             <button className="add_to_favorite " onClick={()=>{markMovieAsFavorite(objLocal) }}
             ><span>Add to fovorite</span>
             <p className="mobile_icon">&#9733;</p>
             </button>
             }
            
             
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
export default Modal;