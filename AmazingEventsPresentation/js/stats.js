const urlPast = 'https://pro-talento.up.railway.app/api/amazing?time=past';
const urlUpcoming = 'https://pro-talento.up.railway.app/api/amazing?time=upcoming';


const dataUpcoming = document.querySelector('.dataUpcoming');
const dataEvents = document.querySelector('.dataEvents');
const dataPast = document.querySelector('.dataPast');
loadData(urlPast, dataPast);
loadData(urlUpcoming, dataUpcoming);
load();

async function loadData(listadoEventos, container) {
    listadoEventos = await fetch(listadoEventos).then(response => response.json()).then(data => data.response);
    let categorys = [...new Set(listadoEventos.map(Eventos => Eventos.category))]
    categorys.forEach((category, i) => {
        let showEvents = listadoEventos.filter(Eventos => 
        Eventos.category === category);
        console.log(category, showEvents);
        
        let percentage = Number((showEvents.map(Eventos => ('assistance' in Eventos) ? Eventos.assistance : Eventos.estimate).reduce
        ((sumatoria, doable) => 
        sumatoria + doable) / showEvents.map(Eventos => Eventos.capacity).reduce
        ((sumatoria, doable) => 
        sumatoria + doable)) * 100).toFixed(0);

        let revenues = showEvents.map(Eventos => { return Eventos.price * ('assistance' in Eventos) ? Eventos.assistance : Eventos.estimate }).reduce
        ((sumatoria, doable) => 
        sumatoria + doable);
        
        container.innerHTML += 
        `<tr>
           <td class="col-1 col-sm-1 col-md-2 col-lg-4">${category}</td>
           <td class="col-1 col-sm-1 col-md-2 col-lg-4">${Number(revenues).toLocaleString('en-US', { 
               style: 'currency', currency: 'USD', 
               minimumFractionDigits: 0, maximumFractionDigits: 0 })}
           </td>
           <td class="col-1 col-sm-1 col-md-2 col-lg-4"> ${percentage}%</td>
        </tr>`;
    });
}

async function load() {
    let events = await fetch('https://pro-talento.up.railway.app/api/amazing').then(response => response.json()).then(data => data.response);
    let eventPast = await fetch(urlPast).then(response => response.json()).then(data => data.response);
    let percentage = eventPast.map(Eventos => { return { name: Eventos.name, percentage: (Eventos.assistance / Eventos.capacity) * 100 } });
    let cantidadAlta = percentage.reduce((sumatoria, doable) => (sumatoria.percentage >= doable.percentage ? sumatoria : doable), percentage[0]);
    let cantidadBaja = percentage.reduce((sumatoria, doable) => (sumatoria.percentage <= doable.percentage ? sumatoria : doable), percentage[0]);
    let capacity = events.map(Eventos => { return { name: Eventos.name, capacity: Eventos.capacity } }).reduce
    ((accumulado, doable) => accumulado.capacity >= doable.capacity ? accumulado : doable);
    
    dataEvents.innerHTML += 
    `<tr>
       <td class="col-2">${cantidadAlta.name}</td>
       <td class="col-2">${cantidadAlta.percentage.toFixed(0)}%</td>
       <td class="col-2">${cantidadBaja.name}</td>
       <td class="col-2">${cantidadBaja.percentage.toFixed(0)}%</td>
       <td class="col-2">${capacity.name}</td>
       <td class="col-2">${capacity.capacity}</td>
    </tr>`
}