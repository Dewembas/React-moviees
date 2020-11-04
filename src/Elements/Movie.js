import React, {useState, useEffect}from 'react';
import Pagination from 'react-js-pagination'
import Modals from "./Modals";
import useModal from '../Elements/useModal';
// import Modal from 'react-bootstrap/Modal'
import Menu from './Menu'
function Movie(props){
    const{modalPage, setModalPage, }=props
    const [data, setData] = useState([])
    const [page, setPage] = useState(null)
    const [totalCount, setTotalCount] = useState(1)
 
    const [openItemIndex, saveOpenItemIndex] = useState(null);
   
    const {isShowing, toggle} = useModal();

   
    
    
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
    .then(res => res.json())
    .then(res => {
        setTotalCount(res.total_results)
        setData(res.results)})
    .catch(error => console.error(error))

},[page ])


if(isShowing===null){

   return (<div >
    
    

     <div className="row row_poster">
            {data.map((e,index, )=><div  key={e.id} >
           <img className="posters" src={`http://image.tmdb.org/t/p/w342/${e.poster_path}`} onClick={() => { toggle(index) }}
            
           alt="poster" ></img>
   
            </div>)
            
            }
            {
           
            /* <>
            

    <Modal
    show={!!openItemIndex}
    onHide={() => saveOpenItemIndex(null)}
    centered
    
    style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${data[openItemIndex]?.poster_path}) `,
                width: '100%',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                
    }
      }contentClassName='myModal'
     ><Menu />
       <button onClick={()=>localStorage.setItem('favArr',JSON.stringify([ <p className="textMod">{data[openItemIndex]?.original_title}</p>]))}>add to fovorite</button> 
     <buton  onClick={() => saveOpenItemIndex(null)}>Back to list</buton>
     <buton  onClick={() => saveOpenItemIndex(openItemIndex+1)}>NextMovie</buton>
     < img  src={`http://image.tmdb.org/t/p/w342/${data[openItemIndex]?.poster_path}`} alt='BackGround'/>
    <p className="textMod">{data[openItemIndex]?.original_title}</p>
    <p>Score: {data[openItemIndex]?.vote_average}</p>
    <p>Language: {data[openItemIndex]?.original_language}</p>
    <p>Relese: {data[openItemIndex]?.release_date}</p>
    <p>{data[openItemIndex]?.overview}</p>
  
 

    </ Modal>
    
  
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
   
  

   <button className="button-default" onClick={toggle}>Show Modal</button>
);


    </div>
   )}else{return(
    <> 
    <Modals
      isShowing={isShowing}
      hide={toggle}
    /></>)
   }
  }

export default Movie