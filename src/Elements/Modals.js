import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';


const Modal = ({ isShowing, hide,toggle, setIsShowing, props, data, setData}) => {
  
const posterUrl = "http://image.tmdb.org/t/p/w200"

  return( isShowing ? ReactDOM.createPortal(
  
  <React.Fragment>
   
    <div className="modal-overlay"/>
    <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className="modals"
      style={{
        backgroundImage: `url(${posterUrl+data?.poster_path})`,
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