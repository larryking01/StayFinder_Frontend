import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'
import { fetchHotels } from './store/features/hotelSlice/hotel.thunks.ts'
import './index.scss'
import App from './App.tsx'





// fetch hotels right from application startup to populate store
store.dispatch( fetchHotels() )


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
)
