let anniv = new Date('07/26/1993');
let today = new Date();

const jour = (anniv, today) =>{
    let difference = today.getTime() - anniv.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}

document.getElementById('result').innerHTML = jour(anniv, today) + " est mon âge en jours";