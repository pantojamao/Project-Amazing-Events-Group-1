
function addPastEvents() {
    const eventPast = eventos.eventos.filter(evento => new Date(evento.date).getTime() < fechaActualTimestamp);
    const selectedEvents = getEventsBySelectedCategories(eventPast);
    generateEventCards(selectedEvents, '.swiper-wrapper');


}
addPastEvents();

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