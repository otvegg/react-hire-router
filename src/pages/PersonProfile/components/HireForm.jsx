import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


function HireForm({person}) { // , onHire
  const [wage, setWage] = useState(0)
  const navigate = useNavigate();

  useEffect(() => {
    person?.wage ? setWage(person.wage) : setWage(0)
  }, [])


  function handleSubmit(event) {
    event.preventDefault()

    person["wage"] = wage
    // onHire(person)
    navigate("/", {state: {person:person}})
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
    </form>
  )
}

export default HireForm
