import React, {useState, useEffect}from 'react';
import Pagination from 'react-js-pagination'
import ModalMovie from '../Elements/ModalMovie'
import Modal from 'react-bootstrap/Modal'

function Movie(){
    const [data, setData] = useState([])
    const [page, setPage] = useState(null)
    const [totalCount, setTotalCount] = useState(1)
  let newArr=data
  
   
    
    
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c&page=${page}`)
    .then(res => res.json())
    .then(res => {
        setTotalCount(res.total_results)
        setData(res.results)})
    .catch(error => console.error(error))

},[page])

let movposb = ()=> {alert(`${<div className="row row_poster">
{data.map((e, index)=><div key={e.id} >
<p>Title</p>
</div>)}

</div>}`)}

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

   return (<div>
        <div className="row row_poster">
            {data.map((e, index)=><div key={e.id} >
           <img className="posters" src={`http://image.tmdb.org/t/p/w342/${e.poster_path}`} onClick={() => handleShow() } alt="poster" ></img>
           <>
    

    <Modal 
    
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      style={{
        backgroundImage: `url(http://image.tmdb.org/t/p/original/${e.poster_path}) `,
                width: '100%',
                backgroundSize: "cover",
                backgroundPosition: 'center',
                
    }}
    >
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
        
      </Modal.Body>
      <Modal.Footer>
       
      </Modal.Footer>
    </Modal>
  </>
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
   )
}
export default Movie