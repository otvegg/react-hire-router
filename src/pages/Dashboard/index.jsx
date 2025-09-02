import { useState, useEffect} from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props
  const url = 'https://randomuser.me/api/?results=50'

  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      console.log(jsonData.results)
      setPeople(jsonData.results);
    };
    fetchData();
    
  }, []);

  console.log(people)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={hiredPeople} />
      </section>
    </main>
  )
}

export default Dashboard
