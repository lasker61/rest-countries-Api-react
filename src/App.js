import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import Country from './components/Country/Country';

function App() {
const [countries,setCountries]=useState([]);

useEffect(() =>{
  fetch('https://restcountries.eu/rest/v2/all')
  .then(response =>response.json())
  .then(data =>{setCountries(data);
    const names = data.map(country => country.name);
    console.log(names);
  })
  .catch(error=>console.log(error))

},[])

  return (
    <div className="App">
      <h1>country loaded:{countries.length}</h1>
      <ul>
        {
          countries.map(country=><Country name={country.name}></Country>)
        }

      </ul>
      
     
    </div>
  );
}

export default App;
