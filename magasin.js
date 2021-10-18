//récupération du formulaire
let form = document.getElementById('form');

// récupération de tous les inputs
let petiteRation = document.getElementById('petite')
let grosseRation = document.getElementById('grosse')
let epee = document.getElementById('epee')
let bouclier = document.getElementById('bouclier')
let potion = document.getElementById('potion')
let sac = document.getElementById('sac')

let totalppr = document.getElementById('totalppr')
let totalpgr = document.getElementById('totalpgr')
let totalpe = document.getElementById('totalpe')
let totalpb = document.getElementById('totalpb')
let totalpp = document.getElementById('totalpp')
let totalps = document.getElementById('totalps')

//récupération du container prix
let toto = document.getElementById('total')
    
// j'écoute le formulaire, et j'agis à l'envoi de celui ci
form.addEventListener('change', () =>{
    // je bloque l'envoi du formulaire pour empecher le rechargement de page
    //e.preventDefault();

   
        if (parseInt(petiteRation.value) >= 5){
            
            document.getElementById('grosse').value = parseInt (grosseRation.value) + Math.floor(parseInt (petiteRation.value)/5); 
            document.getElementById('petite').value = parseInt (petiteRation.value) %5; 
    }
    
    let ppr = petiteRation.value * 2;
    let pgr = grosseRation.value * 8;
    let pe = epee.value * 20;
    let pb = bouclier.value * 15;
    let pp = potion.value * 5;
    let ps = sac.value * 1;

    totalppr.innerHTML = '<span>' +ppr+ '€</span>'
    totalpgr.innerHTML = '<span>' +pgr+ '€</span>'
    totalpe.innerHTML = '<span>' +pe+ '€</span>'
    totalpb.innerHTML = '<span>' +pb+ '€</span>'
    totalpp.innerHTML = '<span>' +pp+ '€</span>'
    totalps.innerHTML = '<span>' +ps+ '€</span>'
    

    let prixFinal = ppr+pgr+pe+pb+pp+ps;

    /* if(prixFinal === 0)
    {
        return total.innerHTML = '<p> votre panier est vide ! </p>'
    } */
    toto.innerHTML = '<p>' +prixFinal+ ' €</p>'

    //rééquilibrer petite et grosse ration
})


let btn = document.getElementById('submit')

btn.addEventListener('click',(event)=>{
    event.preventDefault()
    form.reset()
    toto.innerHTML = '<p>Vous avez vidé votre panier</p>'

    totalppr.innerHTML = ''
    totalpgr.innerHTML = ''
    totalpe.innerHTML = ''
    totalpb.innerHTML = ''
    totalpp.innerHTML = ''
    totalps.innerHTML = ''
})
