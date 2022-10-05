// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// poi chiedi la sua età
// Infine scrivi sulla pagina nomecognomecolorepreferito21 
// (dove il 21 è in questo caso l'età)

// costante nomeCostante/variabile = comando('');
const NomeUtente = prompt('Come ti chiami?');
const CognomeUtente = prompt('Qell e il tuo Cognome?');
const ColorePreUtente = prompt('Quall e il tuo colore preferito ?');
const EtaUtente = prompt('Quanti anni hai ?');
const saluto = `

    ${NomeUtente} ${CognomeUtente} ${ColorePreUtente} ${EtaUtente}
`;

// const elemento = Funziona anche senza questa variabile
 document.getElementById('id_benvenuto').innerHTML = saluto;

// elemento.innerHTML = saluto;