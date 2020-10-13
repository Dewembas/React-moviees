import React, {useState,} from 'react';
import Movie from "../Elements/Movie"

function PageNone(props){

    const [PostMov, setPostMov]=useState("")
    return(<div>
      
      <  Movie 
      PostMov={PostMov}
      setPostMov={setPostMov}
      />
    </div>     
    )
}

export default PageNone