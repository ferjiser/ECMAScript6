/*LET*/

function ejemploVar() {
    if (true) {
        var x = 'hola mundo';
    }
    console.log(x);
}

function ejemploLet() {
    if (true) {
        let x = 'hola mundo';
    }
    console.log(x);
}

/*
var => declara una variable global o local sin importar el ámbito del bloque.
let => declara una variable limitando su alcance(scope).
*/

ejemploVar();
try {
    ejemploLet();
} catch (err) {
    console.log(err.stack);
}



/*
var => Si inicializamos de nuevo la variable en cualquier ámbito su valor cambia globalmente.
let => Puede tener diferentes valores según el ámbito.
*/

function ejemploVar2() {
    var x = 'primer val';
    if (true) {
        var x = 'segundo var';
        console.log(x);
    }
    console.log(x);
}

function ejemploLet2() {
    let x = 'primer let';
    if (true) {
        let x = 'segundo let';
        console.log(x);
    }
    console.log(x);
}

ejemploVar2();
ejemploLet2();

/*
Si redeclaramos una variable en el mismo ámbito dará un error TypeError

function ejemploLet3() {
    if (true) {
        let foo;
        let foo;
    }
}
*/

/*
Zona muerta temporal.
Estamos haciendo referencia a un variable antes de declararla. La 
variable vive en una zona muerta hasta que es declarada.
*/
function ejemploLet4() {
    console.log(foo); //Terminamos con de tipo ReferenceError
    let foo = 2;
}

try {
    ejemploLet4();
} catch (err) {
    console.log(err.stack);
}

/*
En bucles for con let solo es accesible a nivel del for.
Si es declarada como var es acessible en toda la funcion que contiene el for.
*/

function ejemploVar6() {
    for (var i = 0; i < 5; i++) {
        console.log('con var-valor de i:', i);
    }
    console.log(i);
}

function ejemploLet6() {
    for (let i = 0; i < 5; i++) {
        console.log('con let-valor de i:', i);
    }
    console.log(i);
}

ejemploVar6();

try {
    ejemploLet6();
} catch (err) {
    console.log(err.stack);
}


/*CONST
Permite declarar una variable solo de lectura.
El ámbito es como let
*/

function ejemploConst() {
    if (true) {
        const x = 'hola mundo';
    }
    console.log(x);
}

function ejemploConst2() {
    const x = 'primer const';
    if (true) {
        const x = 'segundo const';
        console.log(x);
    }
    console.log(x);
}

try {
    ejemploConst();
} catch (err) {
    console.log(err.stack);
}

ejemploConst2();

/*Las const no se pueden reasignar ni redeclarar.
Una const no puede tener el mismo nombre con una función o variable en el mismo ámbito.

function ejemploConst3() {
    const PI = 3.14;
    PI = 3.14159;  TypeError: Assignment to constant variable
}

function ejemploConst4() {
    const PI;
    PI = 3.14159;
}
*/

function ejemploConst5() {};
//const ejemploConst5 = 5; Uncaught SyntaxError: Identifier 'ejemploConst5' has already been declared


function ejemploConst9() {
    const MY_OBJECT = { "key": "value" };
    MY_OBJECT.key = "otherValue";
    console.log(MY_OBJECT);
}
/*
Los atributos de un objeto const no están protegidos por lo que se pueden modificar
 */
ejemploConst9();