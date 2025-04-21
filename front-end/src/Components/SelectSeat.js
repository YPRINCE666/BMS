import React, { useContext, useState } from 'react'
import { seats } from '../data'
import '../CSS/SelectSeats.css'
import SeatInput from './SeatInput'
import BsContext from '../Context/BsContext'

const SelectSeat = () => {
  const [seat, changeSeats] = useState([]);
  const context = useContext(BsContext)
  const {noOfSeat, changeNoOfSeats} = context
  return (
    <div><div className='SS_wrapper'>
    <h1 className='SS_heading'>Select Seats</h1>
    <div className='SS_main_container'>
        {seats.map((el,index) =>{
            return (
            <SeatInput 
            seat={seat}
            key={index}
            index={index}
            changeSeats={changeSeats}
            noOfSeat={noOfSeat}
            text={el}
            changeNoOfSeats={changeNoOfSeats}
             />
            )
        })}
    </div>
</div></div>
  )
}

export default SelectSeat