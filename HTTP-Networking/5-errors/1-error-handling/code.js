try {
    printCharacterStats(4)
    printCharacterStats('ten')
    printCharacterStats(10)
} catch (error) {
    console.log(`error catch : ${error}`);
}

// don't touch below this line

function printCharacterStats(level) {
    if (isNaN(level)) {
        throw 'Parameter is not a number!'
    }
    console.log(`Your character is level ${level}!`)
}
// log :
//  Your character is level 4!
//  error catch : Parameter is not a number!

// ojo que printCharacterStats(10) no se ejecuta, 
// corre codigo fuera del try catch pero dentro si 
// encuentra un error se para la ejecucion !