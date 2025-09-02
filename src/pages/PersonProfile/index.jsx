import { useState } from 'react'
import HireForm from './components/HireForm'
import { useLocation } from 'react-router-dom'

function PersonProfile() {
  
  let { state } = useLocation();
  const person = state.person;

  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} /> {/* onHire={onHire} */}
    </article>
  )
}

export default PersonProfile
