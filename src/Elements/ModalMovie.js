import React, {useEffect, useState} from 'react'




function Modal (){
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(`http://api.themoviedb.org/3/movie/now_playing?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c`)
    .then(res => res.json())
    .then(res => {setData(res.results)})
    .catch(error => console.error(error))

},[])
  
alert(
   
    `${data.map((e, index)=><div key={e.id}><p>Title:{e.original_title}</p></div>)}`
       
)
                }
export default Modal