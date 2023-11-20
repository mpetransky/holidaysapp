import hotels from './hotels.js';
import showResults from './results.js';

export function initSearch() {
    document.getElementById('search-button').addEventListener('click', event => {
        event.preventDefault();

        const country = document.getElementById('search-country').value;

        const searchResults = performSearch(country);
        showResults(searchResults);
    });
}

function performSearch(country) {
    return hotels.filter(hotel => hotel.country === country);
}