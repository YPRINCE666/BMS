import React, { useContext } from 'react'
import { movieList } from '../data'
import RadioComponent from './RadioComponent'
import '../CSS/SelectMovie.css'
import BsContext from '../Context/BsContext'

const SelectMovies = () => {
  const context = useContext(BsContext)

  const {movie, changeMovie} = context

  const handleChangeMovie =(val) =>{
    changeMovie(val)

    window.localStorage.setItem("movie",val)
  }

  return (
    <>
    <h1 className='SM_heading'>Select Your Movie</h1>
     <div className='SM_main_container'>
{movieList.map((el,index) =>{
    return(
        <RadioComponent text={el} key={index} data={movie} changeSelection={handleChangeMovie}/>
    )
})}
</div>
</>
  )
}

export default SelectMovies