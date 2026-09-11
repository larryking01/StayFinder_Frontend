import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { useEffect } from 'react'
import { onAuthStateChange } from './services/supabase/supabaseAuthService'
import { setAuthenticatedUser, clearAuthenticatedUser } from './store/features/userSlice/user.slice'
import { initializeAuth } from './store/features/userSlice/user.thunks'
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
import ListHotel from './pages/listHotel/listHotel'
import AuthLayout from './layouts/authLayout/authLayout'
import { useAppDispatch } from './hooks/useStore'












function App() {

  const dispatch = useAppDispatch() 


  // What is the authentication state when the application first loads?
  useEffect(() => {
      dispatch(initializeAuth())
  }, [dispatch])


  // What happens to authentication after the application is running?
  useEffect(() => {
    const { data: { subscription } } = onAuthStateChange((event, session) => {
      if( event === 'SIGNED_IN' && session?.user ) {
          dispatch(setAuthenticatedUser(session.user))
      }

      if( event === 'SIGNED_OUT' ) {
        dispatch( clearAuthenticatedUser() )
      }
    })


    return () => {
      subscription.unsubscribe()
    }

  }, [ dispatch ])



  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home /> } />
          <Route path='home' element={ <Home /> } />
          <Route path=':hotelName/:hotelId' element={ <HotelInfo /> } />
          <Route path='search-results' element={ <SearchResults /> } />
          <Route path="checkout/:hotelName/:hotelId/:roomId" element={ <HotelCheckout /> } /> 
          <Route path="my-bookings" element={ <BookedHotels /> } />
          <Route path="list-your-hotel" element={ <ListHotel /> } />
          <Route path="favourites" element={ <Favourites /> } />
          <Route path="about-us" element={ <AboutUs /> } />
          <Route path="support" element={ <Support /> } />
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
