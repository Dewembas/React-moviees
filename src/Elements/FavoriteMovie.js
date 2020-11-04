import React from 'react'

const FavoreteMovie = (props) =>{
   let {favoriteArr} =props
   const list = JSON.parse(localStorage.getItem('favArr'))
   let arr =[]
   console.log(list)
    return(
    <div>{list.map(e=><div>{e.props.children}</div>)}</div>
        
        )
}
export default FavoreteMovie