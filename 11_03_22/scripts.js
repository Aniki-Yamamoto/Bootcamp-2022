const PI = 3.14;

console.log(PI);

if (PI >= 3) {
  console.log(PI);
};

 /* RISPOSTA: Il console.log restituirà il valore di valore di PI, essendo PI maggiore di 3
(condizione per attivare la funzione). */

var favColour = "violet";
let monthsInAYear = 12;

if (true) {
  var favColour = "violet";
  console.log("Il mio colore preferito è:", favColour);
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

/* RISPOSTA: Il console log darà prima il messaggio "Il mio colore preferito è: Violet "
poi "Ci sono 12mesi in un anno." */

function makePizza(moreIngredients) {
  let theSecond = "Sugo di pomodoro freschissimo";
  // { ... }
  console.log(theSecond + ", " + moreIngredients);
  return true; // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!)
}

if (true) {
  makePizza("rucola, prosciutto crudo e scaglie di grana.");
  console.log("Il secondo ingrediente necessario: ", theSecond);
}


/*RISPOSTA: Il console log darà  il messaggio "rucola, prosciutto crudo e scaglie di grana."
ed un errore essendo "thesecond" esistente solo all'interno della funzione avendo utilizzato "LET" */
