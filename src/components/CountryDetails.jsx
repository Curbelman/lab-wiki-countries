import { useState, useEffect } from 'react';
import countries from '../countries.json';
import { useParams, Link } from 'react-router-dom';

function CountryDetails(props) {
    const [oneCountry, setOneCountry] = useState(null);
    //const countries = props.countries;
    const { paramAlpha3Code } = useParams();

    useEffect(() => {
        const selectedCountry = countries.find((country) => {
            return country.alpha3Code === paramAlpha3Code
        })

        if (selectedCountry) {
            setOneCountry(selectedCountry);
        }
    }, [paramAlpha3Code])

    //const flag = ('https://flagpedia.net/data/flags/icon/72x54/' + oneCountry.alpha2Code.toLowerCase() + '.png');

    return (
        <div>
            {!oneCountry && <h3>Country not found!</h3>}

            {oneCountry && 
            <div>
                <img src={'https://flagpedia.net/data/flags/icon/72x54/' + oneCountry.alpha2Code.toLowerCase() + '.png'} alt={oneCountry.name.common}/>
                <div>
                <h1>{oneCountry.name.common}</h1>
                <h3>{oneCountry.name.official}</h3>
                </div>
                <div>
                    <p>Capital: {oneCountry.capital}</p>
                    <p>Region: {oneCountry.region}</p>
                    <p>Subregion: {oneCountry.subregion}</p>
                </div>
            </div>}
            <Link to="/countries">Back to all countries</Link>
        </div>
    )


}

export default CountryDetails;