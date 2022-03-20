import { useEffect, useState } from "react";
import "./App.css";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      {/* <LoadCountries></LoadCountries> */}
      <Countries></Countries>
      <Header></Header>
    </div>
  );
}

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1>Rest Countries</h1>
      <h3>Available countries: {countries.length}</h3>
      {countries.map((country) => (
        <Country name={country.name} population={country.population}></Country>
      ))}
    </div>
  );
}

function Country(props) {
  return (
    <div>
      <h4>{props.name}</h4>
      <h5>{props.population}</h5>
    </div>
  );
}
export default App;
