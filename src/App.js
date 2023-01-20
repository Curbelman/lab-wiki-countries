import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import CountryDetails from './components/CountryDetails';
import { Routes, Route } from 'react-router-dom';
import countries from './countries.json';
import './App.css';



function App() {
  return (
    <div className="App">
    <Navbar />
    {/* <Routes>
      <Route path="/" element={<CountriesList countries={countries} />} />
    </Routes> */}
    <div className="container">
      <div className="row">
      <CountriesList countries={countries} />
       <Routes>
         <Route
         path="/:paramAlpha3Code"
         element={<CountryDetails countries={countries} /> }
         />
       </Routes>
      </div>
    </div>
    </div>
  );
}

export default App;
