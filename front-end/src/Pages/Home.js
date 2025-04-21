import React, { useContext } from 'react'
import SelectMovies from '../Components/SelectMovies'
import LastBookingDeatils from '../Components/LastBookingDeatils'
import TimeSchedule from '../Components/TimeSchedule'
import SelectSeat from '../Components/SelectSeat'
import '../CSS/Home.css'
import BsContext from '../Context/BsContext'

const Home = () => {
  const context = useContext(BsContext);
  const{
    movie,
    time,
    noOfSeat,
    handlePostBooking,
    setErrorPopup,
    setErrorMessage,
  } = context;

  const checkNegativeSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) < 0) {
        return true;
      }
    }

    return false;
  };
  const checkZeroSeatsValidity = (seats) => {
    for (let seat in seats) {
      if (Number(seats[seat]) > 0) {
        return false;
      }
    }
    return true;
  };

  const handleBookNow = () =>  {
if(!movie){
  setErrorPopup(true)
  setErrorMessage("Please Select A Movie")
}
else if (!time) {
  setErrorPopup(true);
  setErrorMessage("Please select a time slot!");
} else if (
  checkNegativeSeatsValidity(noOfSeat) ||
  checkZeroSeatsValidity(noOfSeat)
) {
  setErrorPopup(true);
  setErrorMessage("Invalid Seats!");
} else {
  handlePostBooking();
}
  };
  return (

  <div className='container'>
      <div className='wrapper'>
      <div className='select_movtie_component'>
        <SelectMovies/>
        </div>
        <div className='last_booking_datails_container'>

       <LastBookingDeatils/>

        </div>
        </div>
        <div className='time_seats_container'>

      <TimeSchedule/>

       <SelectSeat/>

        <button  onClick={() => {
          handleBookNow();
        }} 
        className='BN-btn'
         >Book Now</button>
        </div>
  </div>
  )
}

export default Home