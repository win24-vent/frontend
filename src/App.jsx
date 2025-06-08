import { Route, Routes } from 'react-router-dom'
import './App.css'
import EventPage from './assets/Pages/EventPage'
import EventDetailsPage from './assets/Pages/EventDetailsPage'
import BookingEventPage from './assets/Pages/BookingEventPage'
import PortalLayout from './assets/layouts/PortalLayout'

function App() {
  return (
    <Routes>
      <Route element={<PortalLayout />}>
        <Route path="/" element={<EventPage />} />
        <Route path="/events/:id" element={<EventDetailsPage />} />
        <Route path="/events/booking/:id" element={<BookingEventPage />} />
      </Route>
    </Routes>
  )
}

export default App