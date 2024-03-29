import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Filter from "./Filter";

const url = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([])
  const [filtered, setFiltered] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [isLoading, setIsLoading] = useState(true)

  const fetchCountryData = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries);
    setIsLoading(false)
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  const removeCountry = (numericCode) => {
    const newCountry = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountry);
  };
  return (
    <>
    <Filter
      searchInput={searchInput}
      setSearchInput={setSearchInput}
      setFiltered={setFiltered}
      setCountries={setCountries}
      countries={countries}
    />
    {isLoading ? (
      <h1 className="loading">Loading...</h1>
    ) : searchInput.length > 1 ? (
      <section className="countries">
        {filtered.map((country) => {
          const { numericCode, name, flag, population, region, capital } =
            country
          
          

          return (
            
              <article>
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="details">
                  <h4 className="country-name">
                    Name: <span>{name}</span>
                  </h4>
                  <h4>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                <div className="buttons">
                <Link className="btn" to={`/countries/${name}`} key={numericCode}>Learn More</Link>
               
                  </div>
                </div>
              </article>
           
          )
        })}
      </section>
    ) : (
      <section className="countries">
        {countries.map((country) => {
          const { numericCode, name, flag, population, region, capital } =
            country
          
          

          return (
            
              <article>
                <div className="flag">
                  <img src={flag} alt={name} />
                </div>
                <div className="details">
                  <h4 className="country-name">
                    Name: <span>{name}</span>
                  </h4>
                  <h4>
                    Population: <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region: <span>{region}</span>
                  </h4>
                  <h4>
                    Capital: <span>{capital}</span>
                  </h4>
                <div className="buttons">
                <Link className="btn" to={`/countries/${name}`} key={numericCode}>learn more</Link>
                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      Remove Country
                    </button>
                  </div>
                </div>
              </article>
            
          )
        })}
      </section>
    )}
  </>
  );
};

export default Countries;
