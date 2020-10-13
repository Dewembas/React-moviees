import React, {useState, useEffect}from 'react';


// let moviePoster = data.map()
function Movie(props){
    const [data, setData] = useState([])
    

useEffect(() => {
        fetch("http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c")
    .then(res => res.json())
    .then(res => setData(res.results))
    .catch(error => console.error(error))

}, [])
if(data?.title){
return <div>
    <li>
        Title:{data?.title}
    </li>
</div>}
else{
    return("")
}
}
export default Movie