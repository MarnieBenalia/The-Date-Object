let date = new Date();

let dateLocale = date.toLocaleString('fr-FR',{
    timeZone:"Europe/Brussels",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'})

let dateA = new Date()

let dateLocaleA = dateA.toLocaleString('fr-FR',{
    timeZone: "America/Anchorage",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'})

let dateR = new Date()

let dateLocaleR = dateR.toLocaleString('fr-FR',{
    timeZone: "Iceland",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'});

let dateS = new Date()

let dateLocaleS = dateS.toLocaleString('fr-FR',{
    timeZone: "Europe/Moscow",
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'});


document.getElementById('d01').innerHTML = 'Charleroi: ' + dateLocale ;
document.getElementById('d02').innerHTML = 'Anchorage : ' + dateLocaleA;
document.getElementById('d03').innerHTML = 'Reykjavik : ' + dateLocaleR;
document.getElementById('d04').innerHTML = 'Saint-Petersbourg : ' + dateLocaleS;


