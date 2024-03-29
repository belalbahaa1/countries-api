import React, { useEffect } from "react";

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const regions = [
    {
      name: "Filter by region",
      desc: "All",
    },
    {
      name: "Africa",
      desc: "Africa",
    },
    {
      name: "Americas",
      desc: "Americas",
    },
    {
      name: "Asia",
      desc: "Asia",
    },
    {
      name: "Europe",
      desc: "Europe",
    },
    {
      name: "Oceania",
      desc: "Oceania",
    },
  ];

  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      );
      setFiltered(filteredCountries);
    } else {
      setFiltered(countries);
    }
  };

  // Filter by region

  const filterRegions = (region) => {
    setCountries(countries.filter((country) => country.region === region));
  };

  useEffect(() => {
    filterRegions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="filter">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search For a Country"
          onChange={(e) => searchCountries(e.target.value)}
        />

        <select
          name="select"
          id="select"
          className="select"
          onChange={(e) => filterRegions(e.target.value)}
          value={regions.name}
        >
          <option value="All">All</option>
          <option value="Africa">Africa</option>
          <option value="America">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </form>
    </section>
  );
};

export default Filter;
