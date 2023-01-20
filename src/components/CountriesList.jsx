import React from 'react';
import countries from '../countries.json';
import { Link } from 'react-router-dom';

function CountriesList() {
    return (
          countries.map(country => {
            const flag = ('https://flagpedia.net/data/flags/icon/72x54/' + country.alpha2Code.toLowerCase());

            return (
              <Link key={country.alpha3Code} className='list-group-item list-group-item-action' to={'/' + country.alpha3Code}>
                <img src={flag} alt={country.name.common} />
              </Link>
            );
          })
      );
}

export default CountriesList;