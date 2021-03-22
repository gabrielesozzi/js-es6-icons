// JSNACK 1
// Creare un array di oggetti: ogni oggetto descriverà
// una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

$(document).ready(function(){

  const bici = [
    {
      nome : "bici1",
      peso : 20
    },

    {
      nome : "bici2",
      peso : 18
    },

    {
      nome : "bici3",
      peso : 42
    }
  ]

  console.log(bici);

  let min = bici[0].peso;
  bici.forEach((item, i) => {
    console.log(`${item.nome}, ${item.peso}`);
    if (bici[i].peso < min) {
      min = item.peso
    }

  });

  let bicipiccola = bici.filter((item) => item.peso == min)
  console.log(bicipiccola);

  console.log(`La bici che pesa meno è ${bicipiccola[0].nome} e il suo peso è ${bicipiccola[0].peso}`);


})
