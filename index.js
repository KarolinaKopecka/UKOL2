const justFood = (pocetLidi) => {
    const cenaZaOsobu = 300;
    const cenaCelkem = cenaZaOsobu * pocetLidi 
    return `Catering od Just Food pro ${pocetLidi} lidí je za ${cenaCelkem} Kč.`
}

const yourMama = (pocetLidi) => {
    const cenaZaOsobu = 600;
    const cenaCelkem = cenaZaOsobu * pocetLidi 
    return `Catering od Your Mama pro ${pocetLidi} lidí je za ${cenaCelkem} Kč.`
}

const flavourHeaven = (pocetLidi) => {
    const cenaZaOsobu = 1000;
    const cenaCelkem = cenaZaOsobu * pocetLidi 
    return `Catering od Flavour Heaven pro ${pocetLidi} lidí je za ${cenaCelkem} Kč.`
}
console.log(yourMama(150))

const createEvent = (nazev, pocetLidi, catering ) => {
    const zprava = catering(pocetLidi);
    return `Událost ${nazev} s ${zprava}`;  
}

console.log(createEvent("Inaugurace prezidenta", 200, justFood))

//domaci ukol 
