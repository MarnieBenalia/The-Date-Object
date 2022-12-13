const HOURS = 'hours'

function addInterval (date,n,unit){
    const newDate = new Date (date.getTime())
    switch (unit){
        case HOURS:
        newDate.setHours(newDate.getHours() + n)
        break;
    }
return newDate

}
const TODAY = new Date()
const FUTUR = addInterval(TODAY,80000, HOURS)

console.log(TODAY)
console.log(FUTUR)