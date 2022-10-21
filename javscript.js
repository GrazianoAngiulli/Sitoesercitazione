


function contaVociMenu() {
    var vociMenu = document.getElementsByClassName('voce-menu');
    var numeroVociMenu = vociMenu.length;
    return numeroVociMenu;
}

function calcolaAltezzaNavbar() {
    var numeroVociMenu = contaVociMenu();
    var nuovaAltezza = numeroVociMenu * 100;
    var nuovoValoreAltezza = nuovaAltezza + '%';
    return nuovoValoreAltezza;
}

function impostaAltezzaNavbar() {
    //calcoliamo il nuovo valore altezza
    var altezzaNavbar = calcolaAltezzaNavbar();
    //selezionare il nav fratello di un elemento con classe .side-menù:checked e salvarlo in una variabile
    var navbar = document.getElementById('navbar');
    // modifichiamo lo stile assegnando una nuova maxHeight a navbar
    navbar.style.maxHeight = altezzaNavbar;
}

function resetAltezzaNavBar() {
    document.getElementById('navbar').removeAttribute('style');
}


function toggleMenu() {
    var checkbox = document.getElementById('side-menu');
    if(checkbox.checked) {
        compare();
    } 
    else {
        scompare();
    }
}


function compare() {
    document.getElementById('navbar').removeAttribute('style');

}

function scompare() {
    var altezzaNavbar = calcolaAltezzaNavbar();
    document.getElementById('navbar').style.maxHeight = altezzaNavbar
}




{}