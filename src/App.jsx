import { createContext, useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Home from './Pages/Home/Home';
import FetchAllBookings from './Pages/AllBookings/FetchAllBookings';
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
import PaymentSuccess from './Pages/PaymentSuccess';
import PaymentCanceled from './Pages/PaymentCanceled';

// handle user state.
const UserContext = createContext(null);

const App = () => {

  const [currentUser, setCurrentUser] = useState(null);
  const [startDateValue, setStartDateValue] = useState(null);
  const [endDateValue, setEndDateValue] = useState(null);
  const [startDateMilliseconds, setStartDateMilliseconds] = useState(
    new Date()
  );
  const [endDateMilliseconds, setEndDateMilliseconds] = useState(new Date());
  const [customerLengthOfStay, setCustomerLengthOfStay] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [numberOfAdultVisitors, setNumberOfAdultVisitors] = useState(1);
  const [numberOfChildVisitors, setNumberOfChildVisitors] = useState(1);
  const [numberOfRooms, setNumberOfRooms] = useState(1);

  const HandleCheckInState = (event) => {
    setCheckIn(event.target.value);
  };

  const HandleCheckOutState = (event) => {
    setCheckOut(event.target.value);
  };

  return (
    <>
      <HashRouter>
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            checkIn,
            HandleCheckInState,
            checkOut,
            HandleCheckOutState,
            numberOfAdultVisitors,
            setNumberOfAdultVisitors,
            numberOfChildVisitors,
            setNumberOfChildVisitors,
            numberOfRooms,
            setNumberOfRooms,
            startDateValue,
            setStartDateValue,
            endDateValue,
            setEndDateValue,
            startDateMilliseconds,
            setStartDateMilliseconds,
            endDateMilliseconds,
            setEndDateMilliseconds,
            customerLengthOfStay,
            setCustomerLengthOfStay,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="fetch-all-hotels" element={<FetchAllHotels />} />
            <Route
              path="hotel-details/:hotel_name/:hotel_id"
              element={<GetRoomDetails />}
            />
            <Route path="fetch-all-bookings" element={<FetchAllBookings />} />
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
            <Route path="payment-successful" element={<PaymentSuccess />} />
            <Route path="payment-canceled" element={<PaymentCanceled />} />
            <Route path="nav-bar" element={<NavbarComponent />} />
          </Routes>
        </UserContext.Provider>
      </HashRouter>
    </>
  );
};

export { UserContext };

export default App;
