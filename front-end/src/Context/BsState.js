import { useEffect, useState } from "react";
import BsContext from "./BsContext";

const BsState= (props) =>{
    const [errorPopup,setErrorPopup]= useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [movie,changeMovie]  = useState('')
    const [time,changeTime] = useState('')
    const[noOfSeat, changeNoOfSeats] = useState({
        A1:"",
        A2:"",
        A3:"",
        A4:"",
        D1:"",
        D2:"",

    });

    const [lastBookingDetails,setLastBookingDetails] = useState(null);

    const handlePostBooking = async () => {
        // Sending api request to backend with user selected movie, slot and seats to book movie.
        const response = await fetch(
          `http://localhost:8080/api/booking`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ movie: movie, slot: time, seats: noOfSeat }),
          }
        );
    
        const data = await response.json();
    
        //showing message from backend on popup to user whether success or error
        setErrorPopup(true);
        setErrorMessage(data.message);
    
        if (response.status === 200) {
          //reset the state on success
          changeTime("");
          changeMovie("");
          changeNoOfSeats({
            A1: "",
            A2: "",
            A3: "",
            A4: "",
            D1: "",
            D2: "",
          });
          setLastBookingDetails(data.data);
    
          //clearing the local storage when booking is successfull
          window.localStorage.clear();
        }
      };

const handleGetBooking = async ()  => {

    const response = await fetch(
        `http://localhost:8080/api/booking`,
        {
          method: "GET",
        }
      );
  
      const data = await response.json();
  
      
      setLastBookingDetails(data.data);
};

useEffect(()=>{
    const movie = window.localStorage.getItem("movie");
    const slot = window.localStorage.getItem("slot");
    const seats = JSON.parse(window.localStorage.getItem("seat"));

    if(movie){
        changeMovie(movie);
    }
    if(slot){
        changeTime(slot);
    }
    if(seats){
        changeNoOfSeats(seats);
    }
}, []); 

    return(
        <BsContext.Provider 
        value={{movie,changeMovie,time,changeTime,noOfSeat,
            changeNoOfSeats,
            lastBookingDetails,handleGetBooking,
            handlePostBooking,
        errorMessage,errorPopup,
        setErrorMessage,setErrorPopup,
    }}>
        {props.children}
    </BsContext.Provider>
    );
};
export default BsState;