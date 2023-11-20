export default function showResults(results) {
    const resultsElement = document.querySelector('.results');
    resultsElement.innerHTML = '';

    results.forEach(result => {
        console.log(result);

        resultsElement.insertAdjacentHTML('beforeend', createResult(result));
    });
}

function createResult(result) {
    return `
        <div class="result card grid grid--3-cols">
            <img class="result__image" src="images/rooms/${result.image}" alt="Image of a hotel room." />
            <div class="result__body">
                <p class="result__hotel-name">${result.name}</p>
                <p class="result__room-type">${result.roomType}</p>
                <ul class="result__included">
                    <li>Breakfast Included</li>
                    <li>Free Cancelation</li>
                </ul>
            </div>
            <div class="flex flex--col">
                <div class="result__price">&euro; ${result.price}</div>
                <div class="result__button">
                    <button class="button button--primary">Book this room</button>
                </div>
            </div>
        </div>    
    `;
}