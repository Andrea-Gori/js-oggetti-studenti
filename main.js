/* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

$(document).ready(function () {
  
  /* Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età */

  var studente = {
    nome: 'Tizio' ,
    cognome: 'Incognito' ,
    età: 'Nessuno lo sà' ,
  }
  console.log(studente);

  /* Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto. */

  for (var key in studente) {
    document.getElementById('dati-studente').innerHTML += key + ': ' + studente[key] + '<br>';
    console.log(key, studente[key]);
  }

  /* Creare un array di oggetti di studenti */

  var studenti = [
    {
      nome: 'Caio',
      cognome: 'Sempronio',
      età: 'troppi da contare',
    },
    {
      nome: 'Mario',
      cognome: 'Rossi',
      età: '38',
    },
    {
      nome: 'Kekko',
      cognome: 'Sama',
      età: '19',
    }
  ];
  console.log(studenti);

  /* Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. */

  for (var i = 0; i < studenti.length; i++) {
    $('#dati-studenti').append(studenti[i].nome + ' ' + studenti[i].cognome + '<br>');
  }

  /* Dare la possibilità all’utente di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. */

  $('#invio').click(function () {
    var nome = $('#nome').val();
    var cognome = $('#cognome').val();
    var eta = $('#eta').val();

    studente = {
      nome: nome,
      cognome: cognome,
      età: eta,
    }

    studenti.push(studente)
    console.log(studenti);

    $('#nuovo-studente').append(studenti[studenti.length -1].nome + ' ' + studenti[studenti.length -1].cognome + ' ' + studenti[studenti.length -1].età + '<br>');

  })
})

