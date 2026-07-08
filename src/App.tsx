import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Layout from './layouts/layout/layout'
import Home from './pages/home/home'
import HotelInfo from './pages/hotelInfo/hotelInfo'
import NotFound from './pages/notFound/notFound'
import HotelCheckout from './pages/hotelCheckout/hotelCheckout'
import AboutUs from './pages/aboutUs/aboutUs'
import Register from './pages/register/register'
import Login from './pages/login/login'
import Support from './pages/support/support'
import BookedHotels from './pages/bookedHotels/bookedHotels'
import Favourites from './pages/favouriteHotels/favouriteHotels'
import SearchResults from './pages/searchResults/searchResults'
import AuthLayout from './layouts/authLayout/authLayout'
import Modal from './components/modal/modal'
import Toast from './components/toast/toast'
import Loading from './components/loading/loading'
import Empty from './components/empty/empty'
import DayPickerComponent from './components/dayPicker/dayPicker'









function App() {



  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='home' element={ <Home /> } />
          <Route path=':hotelName/:hotelId' element={ <HotelInfo /> } />
          <Route path='searchResults/:destination' element={ <SearchResults /> } />
          <Route path="checkout/:hotelName/:hotelId" element={ <HotelCheckout /> } /> 
          <Route path="my-bookings" element={ <BookedHotels /> } />
          <Route path="favourites" element={ <Favourites /> } />
          <Route path="about-us" element={ <AboutUs /> } />
          <Route path="support" element={ <Support /> } />

          <Route path="modal" element={ <Modal /> } />
          <Route path="toast" element={ <Toast /> } />
          <Route path="loading" element={ <Loading /> } />
          <Route path="empty" element={ <Empty /> } />
          <Route path="daypicker" element={ <DayPickerComponent />} />
        </Route>

        <Route path="accounts" element={ <AuthLayout /> }>
          <Route index element={ <Login /> } />
          <Route path="register" element={ <Register /> } />
        </Route>


        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </Router>
  )
}

export default App
