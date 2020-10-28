import React from 'react'

const MovieItems = (props)=>{

    return(<div>
        <li>
            <img src={`http://image.tmdb.org/t/p/w342/${props.poster_path}`} />
        </li>
    </div>
    )
}
export default MovieItems