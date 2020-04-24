const note = 16
const resultat = (note > 15 ) ? 'Mention Bien' 
: (note > 12 ) ? 'Mention Assez Bien' 
: (note > 10 ) ? 'Obtention'
: 'Echec';

console.log(resultat);
