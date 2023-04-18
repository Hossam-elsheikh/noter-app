import React from 'react'
import Card from '../UI/Card'
import Event from './Event'

const Events = () => {
  return (
    <Card maxWidth='50%' maxHeight='100vh'>
    <h2>Upcoming Events</h2>
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />
        <Event />

    </Card>
  )
}

export default Events