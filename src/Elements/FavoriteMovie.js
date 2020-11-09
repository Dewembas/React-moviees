import React, { useState, useEffect } from 'react'

const FavoreteMovie = (movieId) => {
  const [openFafvist, saveopenFafvist] = useState(null);
  const list = localStorage.getItem('favorite-movies')
  const favContent = JSON.parse(list)
  const [, setData] = useState([])






  useEffect(() => {
    fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`)
      .then(res => res.json())
      .then(res => {

        setData(res.results)
      })
      .catch(error => console.error(error))

  }, [])
  if (favContent.length >= 1) {
    const favList = favContent.map((element, index) => {
      return <div key={element.id} className="all_content_favorite" >
        <img className="img_favorite" src={`http://image.tmdb.org/t/p/w342/${element.img}`} alt="poster" onClick={() => { saveopenFafvist(index) }}></img>
        <div className="all_text_favorite">
          <h2 className="title_favorite">{element.title}</h2>
          <button className="unfavorite_mobile" onClick={() => {
            favContent.splice(index, 1)
            window.location.reload()
            localStorage.setItem("favorite-movies", JSON.stringify(favContent))
          }}>Unfaforite</button>
          <div className="text_favorite_container"><p className="text_favorite">{element.opis}</p></div>
        </div>
        <button className="unfavorite" onClick={() => {
          favContent.splice(index, 1)
          window.location.reload()
          localStorage.setItem("favorite-movies", JSON.stringify(favContent))
        }} >Unfavorite</button>
      </div>

    })
    if (openFafvist === null) {
      return (
        <div >
          {favList}


        </div>

      )
    }
    else {
      return (

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
  }
  else if (favContent.length === 0) {
    return <div><p>Not films</p></div>

  }
}
export default FavoreteMovie