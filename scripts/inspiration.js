export function loadInspiration() {
    createInspiration('oman');
    createInspiration('maldives');
    createInspiration('uae');
    createInspiration('tanzania');
}

function createInspiration(country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            addInspiration(country, data);
        })
        .catch(error => {
            console.error(`Unable to create inspiration for ${country}`);
            console.error(error);
        })

}

function addInspiration(country, data) {
    const inspirationElement = `
        <div class="inspiration__item card">
            <img class="card__image" src="images/countries/${country}.jpg" alt="" />
            <div class="card__body">
                <p class="inspiration__heading">${data[0].name.common}</p>
                <p>${data[0].region}</p>
                <p class="card__text">${data[0].flags.alt}</p>
            </div>
        </div>
    `;

    document.querySelector('.inspiration').insertAdjacentHTML('beforeend', inspirationElement);
}