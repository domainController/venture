// Apprendre le JavaScript : Chapitre 6, Les Fonctions
// https://www.youtube.com/watch?v=pggJ5s6sTpk

// Test nombre premier

function estPremier(nombre) {
    for (var x=2; x < nombre; x++){
        if (nombre % x === 0) {
            return false
        }
    }
    return true
}

estPremier(22);