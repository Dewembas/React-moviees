import React, { useState, useEffect } from 'react'
import ModalsFavoritePage from "./ModalsFavoritePage"
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
      return<div key={element.id}> 
        
        <div  className="all_content_favorite" >
        
        <img key={element.id} className="img_favorite" src={`http://image.tmdb.org/t/p/w342/${element.img}`} alt="poster" onClick={() => { saveopenFafvist(index) }}></img>
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
<ModalsFavoritePage 
openFafvist={openFafvist}
saveopenFafvist={saveopenFafvist}
favContent={favContent}
list={list}
/>
      )
    }
  }
  else if (favContent.length === 0) {
    return <div className="no_faforite_films"><p>Not films</p></div>

  }
}
export default FavoreteMovie