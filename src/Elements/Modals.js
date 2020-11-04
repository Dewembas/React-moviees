import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ isShowing, hide,toggle, setIsShowing, props}) => {
  const [data, setData] = useState([])
  
  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`)
.then(res => res.json())
.then(res => {
   
    setData(res.results)})
.catch(error => console.error(error))

},[])

 const back=data.map((e)=><img className="posters" src={`http://image.tmdb.org/t/p/w342/${e.poster_path}`}  alt="poster" ></img>)
  return( isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
   
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modals"
      style={{
        backgroundImage: `url(${data[setIsShowing]?.poster_path})`,
        width: '100%',
        height: 'calc(100vh - 80px)',
        backgroundSize: "cover",
       
        backgroundPosition: 'center',
        backgroundColor: 'rgb(0, 0, 0, 0.7)'
  }}
      >
        <div className="modal-header">
          <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <p>
          ss
        </p>
      </div>
    </div>
  </React.Fragment>, document.body
) : null)
}
export default Modal;