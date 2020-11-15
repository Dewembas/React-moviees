import React from "react"
    
const ModalFavorite = ({openFafvist, saveopenFafvist, favContent, index}) =>{
    return(
        
        <div
          className="modalBack"
          show={`!!openFafvist`}
          


          style={{
            backgroundImage: `url(http://image.tmdb.org/t/p/original/${favContent[openFafvist]?.img}) `,
            width: '100%',
            backgroundSize: "cover",
            backgroundPosition: 'center',
            backgroundRepeat: "no-repeat",

          }
          }
        ><div className="modalContent">
            <div className="modal_buttons_navigayion">
              <button className="next" onClick={() => saveopenFafvist(null)}>Back <span>to list</span></button>
              <button className="back" onClick={() => {
                if (openFafvist <= 18) { saveopenFafvist(openFafvist+1) }
                if(openFafvist>= favContent.length -1){
                  saveopenFafvist(null)
                }
              }}>Next <span>Movie</span></button>

            </div>
            <div className="button_del_favorite">
              <button className="del_favorite" onClick={(index)=>{
                favContent.splice(index, 1)
                window.location.reload()
            localStorage.setItem("favorite-movies", JSON.stringify(favContent))}}> Unfavorite</button>
            </div>

            <div className="modal_films">
              < img src={`http://image.tmdb.org/t/p/w342/${favContent[openFafvist]?.img}`} alt='BackGround' />
              <div className="info_films">

                <h2 className="textMod">{favContent[openFafvist]?.title}</h2>

                <div className="modal_films_head">
                  <p>Score: {favContent[openFafvist]?.score}</p>
                  <div className='line'>|</div>
                  <p>Language: {favContent[openFafvist]?.language}</p>
                  <div className='line' >|</div>
                  <p>Relese: {favContent[openFafvist]?.date}</p>
                </div>
                <div className="modal_description">
                  <p>{favContent[openFafvist]?.opis}</p>
                </div>

              </div>
            </div>

          </div>


        </ div>

    )
}

export default ModalFavorite