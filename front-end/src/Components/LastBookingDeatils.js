import React, { useContext, useEffect } from 'react'
import { seats } from '../data'
import '../CSS/LastBookingDetails.css'
import BsContext from '../Context/BsContext'

const LastBookingDeatils = () => {
  const context = useContext(BsContext)

  const {lastBookingDetails,handleGetBooking}=context;

  useEffect(() => {
    handleGetBooking();
  }, []);

  return (
    <div className='last_booking_details_container_main'>
      <h2 className='last_booking_details_header'>Last Booking : </h2>
      {
        lastBookingDetails ? (
          <>
          <div className='seats_container'>
        <p className='seats_header'>Seats:</p>
        <ul className='seats'> 
          {seats.map((seat, index) => (
            <li className='seat_value' key={index}>
              {seat} : {Number(lastBookingDetails.seats[seat])}
            </li>
          ))}
        </ul>
      </div>
       <p className='slot' style={{textAlign:'left'}}>
        Slot:<span>{lastBookingDetails.slot}
          </span></p>
       <p className='movie'>Movie: <span>{lastBookingDetails.movie}
        </span></p>
          </>
        ) : (
            <p className='no_previous'>No Previous Booking</p> 
        )
      }
      
    </div>
  )
}

export default LastBookingDeatils