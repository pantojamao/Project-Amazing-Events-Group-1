

async function getEventsFromServer() {
    let url = `https://pro-talento.up.railway.app/api/amazing/?time=past`;
    try {
       
        let response  =  await fetch(url);
        response= await response.json();
        eventPast=response.response;
        generateEventCards(eventPast, ".swiper-wrapper");
        document.getElementById('botton-search').addEventListener('click', filterData)
        document.querySelectorAll('.form-check-input').forEach((each) => each.addEventListener('click', filterData))
    } catch (error) {
        console.error(error);
    }
}

getEventsFromServer();

async function filterData() {
    try {
        let inputSearch = document.getElementById('input-search').value.toLowerCase();
        let checkbox = Array.from(document.querySelectorAll('.form-check-input:checked')).map(each => each.value);
        let url = `https://pro-talento.up.railway.app/api/amazing?time=past&name=${inputSearch}&category=${checkbox.join(',')}`;
        let response = await fetch(url);
        response = await response.json();
        if (response.response.length === 0) {
            const noMatchText = '<div class="no-match">No hay datos que coincidan con los filtros seleccionados.</div>';
            return document.querySelector(".swiper-wrapper").innerHTML = noMatchText;
        }
        generateEventCards(response.response, ".swiper-wrapper");
    } catch (error) {
        console.error(error);
    }
}
filterData()




var swiper = new Swiper(".slide-content", {
    slidesPerView: 4,
    spaceBetween: 100,
    slidesPerGroup: 4,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    breakpoints: {
        0: { slidesPerView: 1, slidesPerGroup: 1 },
        520: { slidesPerView: 2, slidesPerGroup: 2 },
        950: { slidesPerView: 4, slidesPerGroup: 4 },
    },
});

// document.querySelector("input[type=checkbox]").addEventListener("click",categoryFilter());

// //crear una funcion como desde el addli se puede obtener el value del
// function categoryFilter(event){

// console.log("event"+event);
// }












// Aquí puedes hacer algo con las categorías seleccionadas, como filtrar elementos


// basándote en sus categorías
