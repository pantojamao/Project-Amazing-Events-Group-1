
function createCardDivDetails(cardImage, cardName, cardDate, cardDescription, cardCategory, cardPlace, cardCapacity, cardAssistance, CardPrice) {
    //card general para details
    const container = document.createElement('div');
    const row = document.createElement('div');
    const col1 = document.createElement('div');
    const img1 = document.createElement('img');
    const col2 = document.createElement('div');
    const img2 = document.createElement('img');
    const containerText = document.createElement('div');
    const title = document.createElement('h2');
    const date = document.createElement('h6');
    const description = document.createElement('h6');
    const category = document.createElement('h6');
    const place = document.createElement('h6');
    const capacity = document.createElement('h6');
    const assistenceOrEstimate = document.createElement('h6');
    const price = document.createElement('h6');

    //agrega clases
    container.classList.add('container', 'd-flex', 'justify-content-center', 'mt-5', 'p-5');
    row.classList.add('row');
    col1.classList.add('col-md-6', 'd-flex', 'justify-content-center');
    img1.classList.add('img-fluid', 'img-1');
    col2.classList.add('col-md-6', 'position-relative', 'd-flex', 'text-left', 'justify-content-center');
    img2.classList.add('img-fluid');
    containerText.classList.add('position-absolute', 'top-1', 'start-2', 'container-text');
    title.classList.add('card-title', 'title', 'text-center');
    date.classList.add('card-title', 'title');
    description.classList.add('card-title', 'title');
    category.classList.add('card-title', 'title');
    place.classList.add('card-title', 'title');
    capacity.classList.add('card-title', 'title');
    assistenceOrEstimate.classList.add('card-title', 'title');
    price.classList.add('card-title', 'title');

    // se agrego  los atributos que contenian las etiquetas en el html
    img1.alt = 'Imagen 1';
    img1.src = cardImage;
    img2.alt = 'Imagen 2';
    img2.src = '../assets/Images/imageDatails.png';
    title.textContent = cardName;
    date.textContent = 'DATE: ' + cardDate;
    description.textContent = 'DESCRIPTION: ' + cardDescription;
    category.textContent = 'CATEGORY: ' + cardCategory;
    place.textContent = 'PLACE: ' + cardPlace;
    capacity.textContent = 'CAPACITY: ' + cardCapacity;
    assistenceOrEstimate.textContent =  cardAssistance;
    price.textContent = 'PRICE: ' + CardPrice;

    //contenido de los atributos
    col1.appendChild(img1);
    containerText.appendChild(title);
    containerText.appendChild(date);
    containerText.appendChild(description);
    containerText.appendChild(category);
    containerText.appendChild(place);
    containerText.appendChild(capacity);
    containerText.appendChild(assistenceOrEstimate);
    containerText.appendChild(price);
    col2.appendChild(img2);
    col2.appendChild(containerText);
    row.appendChild(col1);
    row.appendChild(col2);
    container.appendChild(row);

    const cardContainer = document.getElementById('cardContainer');
    cardContainer.appendChild(container);

}



async function createDetails() {

    let id = JSON.parse(sessionStorage.getItem('id'));
    let url = `https://pro-talento.up.railway.app/api/amazing/${id}`;
    try {
        let arrayEvents = await fetch(url);
        arrayEvents = await arrayEvents.json();
        arrayEvents = arrayEvents.response;
        let { image, name, category, price, description, date, assistance, capacity, place } = arrayEvents;
        if ("assistance" in arrayEvents) {
            assistance = "Assistance: " + assistance;
        } else {
            assistance = "Estimate: " + arrayEvents.estimate;
        }
        createCardDivDetails(image, name, date, description, category, place, capacity, assistance, price);

    } catch (error) {
        console.log(error)
    }

}


createDetails();
