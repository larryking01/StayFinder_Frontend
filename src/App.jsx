import { createContext, useState} from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './Pages/Home/Home';
import FetchAllHotels from './Pages/AllHotels/FetchAllHotels';
import GetRoomDetails from './Pages/HotelDetails/GetHotelDetails';
import BookHotel from './Pages/BookHotel/BookHotel';
import Help from './Pages/Help/Help';
import ContactUsHelp from './Pages/ContactUsHelp/ContactUsHelp';
import AboutHelp from './Pages/AboutUsHelp/AboutHelp';
import FrequentlyAskedQuestionsHelp from './Pages/FAQs/FrequentlyAskedQuestionsHelp';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Register/SignUp';
import NavbarComponent from './Pages/Navbar/NavBar';





// declare context variable to hold global state.
const UserData = createContext({})






const App = () => {


  // declare global application state
  const [ userInfo, setUserInfo ] = useState({
    firstName: '',
    lastName: '',
    email: '',
    isAuthenticated: false,
  })
  

  const [ bookingDetails, setBookingDetails ] = useState({
    checkInDate: null,
    checkOutDate: null,
    numberOfAdults: 0,
    numberOfChildren: 0,
    numberOfRoomsBooked: 0,
    lengthOfStay: 0
  })


  let contextValue = {
    userInfo,
    setUserInfo,
    bookingDetails,
    setBookingDetails
  }


  return (
    <>
      <HashRouter>
        <UserData.Provider value={ contextValue }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fetch-all-hotels" element={<FetchAllHotels />} />
            <Route
              path="hotel-details/:hotel_name/:hotel_id"
              element={<GetRoomDetails />}
            />
            <Route
              path="book-hotel/:hotel_name/:room_id"
              element={<BookHotel />}
            />
            <Route path="help" element={<Help />} />
            <Route path="help-contact-us" element={<ContactUsHelp />} />
            <Route path="help-about-us" element={<AboutHelp />} />
            <Route
              path="frequently-asked-questions"
              element={<FrequentlyAskedQuestionsHelp />}
            />
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="nav-bar" element={<NavbarComponent />} />
          </Routes>
        </UserData.Provider>      
      </HashRouter>
    </>
  );
};


export {
  UserData
}



export default App;
