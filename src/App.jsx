import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import {
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import PersonProfile from './pages/PersonProfile';

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  let { state } = useLocation();
  useEffect(() => {

    if (state?.person && state.person?.wage) {
      setHiredPeople(hired => {
        const index = hired.findIndex(p => p.login.uuid === state.person.login.uuid)

        // person exist
        if (index !== -1){
          const updated = [...hired];
          updated[index] = state.person
          return updated;
        } else return [...hired, state.person]
        // const exists = hired.some(p => p.login.uuid === state.person.login.uuid);
        // return exists ? hired : [...hired, state.person];
      })
    }
  }, [state])

  // function handleHire(person) {
  //   setHiredPeople(hired => {
  //     const exists = hired.some(p => p.login.uuid === person.login.uuid);
  //     return exists ? hired : [...hired, person];
  //   });
  // }
  
  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard hiredPeople={hiredPeople}/>}/>
        <Route path="/view/:id" element={<PersonProfile />}/> {/* onHire={handleHire}*/}
      </Routes>
    </>
  )
}
