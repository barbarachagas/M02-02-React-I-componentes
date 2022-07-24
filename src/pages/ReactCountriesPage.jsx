import { useState } from "react";
import Countries from "../components/Countries";
import Country from "../components/Country";
import Header from "../components/Header";
import Main from "../components/Main";
import TextInput from "../components/TextInput";
import { allCountries } from "../data/countries";

export default function ReactCountriesPage() {
  const [countryFilter, setCountryFilter] = useState("");
  const [visitedCountries, setVisitedCountries] = useState([]);

  function handleCountryChange(newCountryFilter) {
    setCountryFilter(newCountryFilter);
  }

  function toggleVisitedCountry(countryId) {
    let newVisitedCountries = [...visitedCountries];
    const isCountryVisited = newVisitedCountries.indexOf(countryId) !== -1;

    if (isCountryVisited) {
      newVisitedCountries = newVisitedCountries.filter((visitedCountryId) => {
        return visitedCountryId !== countryId;
      });
    } else {
      newVisitedCountries.push(countryId);
    }

    setVisitedCountries(newVisitedCountries);
  }

  const countryFilterLowerCase = countryFilter.toLocaleLowerCase();

  const filteredCountries =
    countryFilterLowerCase.trim().length >= 3
      ? allCountries.filter(({ nameLowerCase }) =>
          nameLowerCase.includes(countryFilterLowerCase)
        )
      : allCountries;

  return (
    <>
      <Header>React Countries</Header>
      <Main>
        <TextInput
          labelDescription="informe o nome do país (pelo menos 3 caracteres)"
          inputValue={countryFilter}
          onInputChange={handleCountryChange}
        />

        <Countries>
          <h2 className="text-center font-semibold">
            {filteredCountries.length} país(es)
          </h2>
          <h3 className="text-center font-semibold text-sm">
            {visitedCountries.length} país(es) visitados
          </h3>
          {filteredCountries.map((country) => {
            const isVisited = visitedCountries.indexOf(country.id) !== -1;
            return (
              <Country
                isVisited={isVisited}
                onCountryClick={toggleVisitedCountry}
                key={country.id}
              >
                {country}
              </Country>
            );
          })}
        </Countries>

        {/*         
        <Countries
          visitedCountries={visitedCountries}
          onCountryClick={toggleVisitedCountry}
        >
          {filteredCountries}
        </Countries> */}
      </Main>
    </>
  );
}
