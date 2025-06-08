import React from 'react'
import { Link } from 'react-router-dom'

const EventItem = ({ item }) => {
  return (
    <Link to={`/events/${item.id}`} className="event-card">

    {item.category && (
        <span className="event-category">{item.category}</span>
     )}

      <div className="event-image">
        <img src={item.image || "/fallback.jpg"} alt={item.title} />
      </div>

      <div className="event-info">
        <h3 className="event-title">{item.title}</h3>
        <p className="event-location">{item.location}</p>
        <p className="event-date">{new Date(item.eventDate).toLocaleDateString()}</p>
      </div>
    </Link>
  )
}

export default EventItem