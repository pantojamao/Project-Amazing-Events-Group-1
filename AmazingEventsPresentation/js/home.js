
function addHomeEvents() {

    const selectedEventsByCategory = getEventsBySelectedCategories(eventos.eventos);
    // Verificar si no hay eventos que coincidan con los filtros seleccionados
    const selectedEventsByTitle = getEventsByTitle(selectedEventsByCategory);
    if (selectedEventsByTitle.length === 0) {
        
        const noMatchText = '<div class="no-match">No hay datos que coincidan con los filtros seleccionados.</div>';

        return document.querySelector(".swiper-wrapper").innerHTML = noMatchText;

    }

    generateEventCards(selectedEventsByTitle, ".swiper-wrapper");
}

addHomeEvents();

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