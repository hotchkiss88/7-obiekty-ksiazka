
class Ksiazka {
    constructor(tytul, autor, przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this.przeczytana = przeczytana;
    }

    opiszKsiazke() {
        if (this.przeczytana === true) {
            return (
                `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została przeczytana.`);
        } else {
            return (
                `Książka ma tytuł ${this.tytul}, autorem jest ${this.autor} i została nie przeczytana.`);
        }

    }
}

let wiedzmin = new Ksiazka('Wiadzmin', 'Andrzej Sapkowski', true);

let algorytmy = new Ksiazka('Algorytmy', 'Aditya Y. Bhargava', false);

let dune = new Ksiazka('Diuna', 'Frank Herbert', false);

let tablicaGlobalna = [];
tablicaGlobalna.push(wiedzmin, algorytmy, dune);

function iloscPrzeczytanych(x) {
    let result = 0;
    for (i = 0; i < x.length; i++) {


        result = result + (x[i].przeczytana === true);
        console.log(x[i].opiszKsiazke());
    }
    console.log('suma przecztanaych to: ' + result);
}

iloscPrzeczytanych(tablicaGlobalna);