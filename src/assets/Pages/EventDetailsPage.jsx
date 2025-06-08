import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const EventDetailsPage = () => {
    const {id} = useParams()

    const [event, setEvent] = useState({})

    const getEvents = async () => { 
    const res = await fetch(`https://ec-eventservice-b5bkfff4b9a7h8fx.swedencentral-01.azurewebsites.net/api/events/${id}`)

        if (res.ok) {
            const response = await res.json()
            setEvent(response.result)
        }
    }

    useEffect(() => {
        getEvents()
        
    }, [])

    return (
        <div className="event-details">
          <div className="event-details-card">
            <img
              src={event.image || "/fallback.jpg"}
              alt={event.title || "No image"}
              className="event-details-image"
            />
            <div className="event-details-info">
              <h2 className="event-title">{event.title}</h2>
              <p><strong>Location:</strong> {event.location}</p>
              <p><strong>Date:</strong> {new Date(event.eventDate).toLocaleString()}</p>
              <p><strong>About Event:</strong> {event.description}</p>
              <Link to={`/events/booking/${id}`} className="book-button">Book Event</Link>
            </div>
          </div>
        </div>
      );
}

export default EventDetailsPage