import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BookingEventPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [event, setEvent] = useState({})
    const [formData, setFormData] = useState ({
         eventId: id,
         firstName: '',
         lastName: '',
         email: '',
         streetName: '',
         postalCode: '',
         city: '',
         ticketQuantity: 1
        })

        const [showConfirmation, setShowConfirmation] = useState(false)

    useEffect(() => {
        getEvent()
        
    }, []) 

    const getEvent = async () => {
        try {
          const res = await fetch(`https://ec-eventservice-b5bkfff4b9a7h8fx.swedencentral-01.azurewebsites.net/api/events/${id}`)
          if (!res.ok) throw new Error("Failed to fetch event")
      
          const data = await res.json()
          setEvent(data.result)
        } catch (err) {
          console.error(err)
        }
      }


/* uppdatera formulär */
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try { 
            const res = await fetch(`https://bookingsservice-aug8a0cwg9ehb4f6.swedencentral-01.azurewebsites.net/api/bookings`, {
                method: 'POST',
                headers: { 'Content-Type' : 'application/json' },
                body: JSON.stringify(formData)
            })
    
            if (!res.ok) {
              console.error("Booking failed")
            } else {
              console.log("Booking successful")
              setShowConfirmation(true)
            }
        } catch (err) {
            console.error("Error submitting booking", err)
        }
    }

   
    return (
      <div className="booking-form">
      {showConfirmation ? (
        <div className="confirmation-message">
          <h2>Booking Confirmed!</h2>
          <p>Thank you for booking <strong>{event.title}</strong>.</p>
          <p>You can now return to the event list.</p>
          <button className="confirmation-button" onClick={() => navigate('/')}>
            Back to Events
          </button>
        </div>
        ) : (
          <>
            <h1 className="page-title">Book Event</h1>
            <h2 className="page-subtitle">{event.title}</h2>
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label>First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>E-mail</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Street Name</label>
                <input type="text" name="streetName" value={formData.streetName} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Postal Code</label>
                <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>City</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
              </div>
              <button type="submit" className="book-button">Book Now</button>
            </form>
          </>
        )}
      </div>
    )

}
export default BookingEventPage