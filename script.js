const loadCountries = () =>{
fetch(`https://restcountries.com/v3.1/all`)
.then(res => res.json())
.then(data => displayCountry(data));
}
const displayCountry = countries => {
    //console.log(countries);
    const countriesHTML = countries.map(country=>getCountryHTML(country));
    //console.log(allCountriesHTML);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');

}

const getCountryHTML = (country) => {
    
    return (` 
    <div class="country-area">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}">
    </div>
    `)  
}

loadCountries()