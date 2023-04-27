
const url = 'https://pro-talento.up.railway.app/api/amazing?order=asc';

async function getCategorias() {
    try {
        let response = await fetch(url);
        response = await response.json();
        const categorias = Array.from(new Set(response.response.map(evento => evento.category)));
        crearCheckboxesDeCategorias(categorias);
    } catch (error) {
        console.log(error);
    }
}

getCategorias();

function crearCheckboxesDeCategorias(array) {
    const container = document.querySelector('.ms-5.mt-3.col-6.d-flex.justify-content-around.flex-wrap');
    const formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    container.appendChild(formGroup);
    array.forEach(category => {
        const div = document.createElement('div');
        div.classList.add('form-check', 'form-check-inline', 'ms-5');
        div.innerHTML = `
            <input class="form-check-input" type="checkbox" value="${category}" id="${category}">
            <label class="form-check-label" for="${category}">${category}</label>
        `;
        formGroup.appendChild(div);
    });
}


// Crear las etiquetas correspondientes de Events.html
function createCardDiv(CardImage, CardName, CardDescription, CardPrice, id) {
    const cardDiv = document.createElement('div');
    const card = document.createElement('div');
    const img = document.createElement('img');
    const cardBody = document.createElement('div');
    const title = document.createElement('h5');
    const description = document.createElement('p');
    const price = document.createElement('p');
    const detailsLink = document.createElement('a');

    // Agregar las clases que tienen las etiquetas en el html principal
    cardDiv.classList.add('card-body', 'd-flex', 'justify-content-around', 'pt-5', 'flex-wrap', 'mb-5');
    card.classList.add('card');
    img.classList.add('image-card', 'card-img-top', 'p-3', 'shadow');
    cardBody.classList.add('card-body');
    title.classList.add('card-title', 'text-center');
    description.classList.add('card-text', 'w-80', 'p-1');
    detailsLink.classList.add('btn', 'btn-primary', 'button-Shadow');
    detailsLink.addEventListener('click', () => {
        sessionStorage.setItem('id', JSON.stringify(id));

    });

    // se agrego  los atributos que contenian las etiquetas en el html
    card.style.width = "18rem";
    img.src = CardImage;
    img.alt = 'weddings';
    title.textContent = CardName;
    description.textContent = CardDescription;
    price.textContent = `Price: ${CardPrice}`;
    detailsLink.href = './details.html';
    detailsLink.textContent = 'Details';

    // Construir la tarjeta de bodas
    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(price);
    cardBody.appendChild(detailsLink);
    card.appendChild(img);
    card.appendChild(cardBody);
    cardDiv.appendChild(card);

    return cardDiv;
}
//Esta funcion obtiene un listado de  eventos de acuerdo a las categorias selecionadas
//retorna un array de eventos 











// function getEventsByTitle(array) {
//     const input = document.getElementById("input-search");
//     const regex = new RegExp(input.value.toLowerCase());
//     return array.filter(evento => regex.test(evento.name.toLowerCase()));
// }


function generateEventCards(array, containerId) {
    const container = document.querySelector(containerId);
    container.innerHTML = " ";
    array.forEach(evento => {
        const slide = document.createElement('div');
        slide.classList.add("swiper-slide")
        let CardImage = evento.image;
        let CardName = evento.name;
        let CardDescription = evento.description;
        let CardPrice = evento.price;
        const pastEventCard = createCardDiv(CardImage, CardName, CardDescription, CardPrice, evento.id);
        slide.appendChild(pastEventCard);
        container.appendChild(slide)
    });

}





