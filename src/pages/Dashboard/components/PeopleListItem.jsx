import { Link, useNavigate } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate();


  return (
    <li>
      {person.wage ? (
        <h3>
          {person.name.first} {person.name.last}
        </h3>
      ) : (
        <Link to={`view/${person.login.uuid}`} state={{ person }}>
          <h3>
            {person.name.first} {person.name.last}
          </h3>
        </Link>
      )}
      {person.wage && <p>Wage: £{person.wage} <button onClick={() => navigate(`/view/${person.login.uuid}`, {state: {person:person}})}>Edit</button></p>}
    </li>
  )
}

export default PeopleListItem
