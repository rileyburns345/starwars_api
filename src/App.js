import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import axios from 'axios'
import { Router, navigate } from '@reach/router';

import PoepleDisplay from './components/people_display/people_display.js'
import PlanetDisplay from './components/planets_display/planets_display.js'
import ErrorPage from './components/ErrorPage/ErrorPage.js'

function App() {
  const [people, setPeople] = useState('')
  const [planet, setPlanet] = useState('')
  const [searchTerm, setSearchTerm] = useState('people')
  const [searchID, setSearchID] = useState('')

  const getData = () => {
    axios.get(`https://swapi.dev/api/${searchTerm}/${searchID}/`)
    .then(res => {
      console.log('res: ', res.data)
      if (searchTerm === 'people') {
        setPeople(res.data)
        setPlanet('')
        navigate(`/people/${searchID}`)
      }
      else {
        setPlanet(res.data)
        setPeople('')
        navigate(`/planets/${searchID}`)
      }
 
    })
    .catch(err => {
      console.log("Error:", err)
      navigate('/error')
    })
  }

  const searchTermChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const searchIDChange = (e) => {
    setSearchID(e.target.value)
  }


  return (
    <div className="App">
      <h1>star wars</h1>
      <form>
      <select id="searchTerm" name="searchTerm" onChange={searchTermChange}>
        <option value="people">People</option>
        <option value="planets">Planets</option>
      </select>
      <label for="searchID">ID: </label>
      <input name="searchID" onChange={searchIDChange}></input>
      </form>
      <button onClick={() => getData()}>Search</button>
      <Router>
        <PoepleDisplay people={people} path='people/:id'/>
        <PlanetDisplay planet={planet} path='planets/:id'/>
        <ErrorPage path='error'/>
      </Router>
      
    </div>
  );
}

export default App;
