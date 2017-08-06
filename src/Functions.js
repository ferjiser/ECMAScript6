//Funciones con valores de parametros por defecto.

function defaultParametersES5(url, timeout, callback) {
    timeout = (typeof timeout !== "undefined") ? timeout : 2000;
    callback = (typeof callback !== "undefined") ? callback : function() {};
    console.log(' URL :', url + ' TIMEOUT:' + timeout + ' CALLBACK:' + callback);
}
console.log('ES5');
defaultParametersES5("/foo");
defaultParametersES5("/foo", 500);
defaultParametersES5("/foo", 500, function() { console.log('This is a test with callback'); });
defaultParametersES5("/foo", undefined, function() { console.log('This is a test with callback'); });
defaultParametersES5("/foo", null, function() { console.log('This is a test with callback'); });

function defaultParametersES6(url, timeout = 2000, callback = function() {}) {
    console.log(' URL :', url + ' TIMEOUT:' + timeout + ' CALLBACK:' + callback);
}

console.log('ES6');
defaultParametersES6("/foo");
defaultParametersES6("/foo", 500);
defaultParametersES6("/foo", 500, function() { console.log('This is a test with callback'); });
defaultParametersES6("/foo", undefined, function() { console.log('This is a test with callback'); });
defaultParametersES6("/foo", null, function() { console.log('This is a test with callback'); });

//Argumentos objetos
function defaultArgumentsES5(first, second) {
    console.log(first === arguments[0]); //true
    console.log(second === arguments[1]); // true
    first = "c";
    second = "d"; // Redefine los parametros de entrada
    console.log(first === arguments[0]); //true
    console.log(second === arguments[1]); //true
}
defaultArgumentsES5('a', 'b');

function defaultArgumentsUseStrictES5(first, second) {
    "use strict"; // No permite redefinir los parametros de entrada
    console.log(first === arguments[0]); //true
    console.log(second === arguments[1]); //true
    first = "c";
    second = "d";
    console.log(first === arguments[0]); //false
    console.log(second === arguments[1]); //false
}
defaultArgumentsUseStrictES5('a', 'b');

function defaultArgumentsES6(first, second = 'b') {
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
    first = "c";
    second = "d"; // Redefine los parametros de entrada
    console.log(first === arguments[0]);
    console.log(second === arguments[1]);
}
defaultArgumentsES6('a'); // true, false, false, false
defaultArgumentsES6('a', 'c'); // true, true, false, false

//Los valores por defecto pueden ser también funciones

function getValue() {
    return 5;
}

function defaultArgumentsWithFunction(first, second = getValue()) {
    console.log("valor de la suma suma:", first + second);
    return first + second;
}
defaultArgumentsWithFunction(1);
defaultArgumentsWithFunction(1, 1);

console.log('EJEMPLOS CON PARAMETROS REST');
//Un parametro rest es indicado con el operador ... precedido del nombre del parametro que se convierte en un array con el resto de parametros.

function pickWithArguments(object) {
    let result = {};
    for (let i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }
    console.log("pick with arguments:", result);
    return result;
}
let book = {
    title: "Understanding ECMAScript6",
    author: "Fernando Jimenez",
    year: 2017
};
pickWithArguments(book, "author", "title", "year");

function pickWithParametersRest(object, ...keys) {
    let result = {};
    for (let i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    console.log("pick with parameters rest:", result);
    return result;
}
let bookRest = {
    title: "Understanding ECMAScript6",
    author: "Fernando Jimenez",
    year: 2017
};
pickWithParametersRest(bookRest, "author", "title", "year");

//Los parámetros rest son una instancia de array por lo que se pueden utilizar las funciones de arrays
// No puede haber más parámetros detrás de un rest parameters
//No se pueden usar en metodos set.

console.log('FUNCION CONSTRUCTOR');
//ES6 aumenta las capacidades del constructor permitiendo parametros por defecto y rest

function defaultParameterConstructorES5() {
    var add = new Function("first", "second", "return first + second");
    console.log("defaultParameterConstructorES5:", add(1, 1));
}
defaultParameterConstructorES5();

function defaultParameterConstructorES6() {
    var add = new Function("first", "second = first", "return first + second");
    console.log("defaultParameterConstructorES6:", add(1, 2));
    console.log("defaultParameterConstructorES6:", add(1));
}

defaultParameterConstructorES6();


function parametersRestConstructorES6() {
    var pickFirst = new Function("...args", "return args[0]");
    console.log("parametersRestConstructorES6:", pickFirst(2, 1));
}
parametersRestConstructorES6();

//OPERADOR DE PROPAGACION

//Expresion sea extendida donde se esperar multiples argumentos.

//Es un mejor metodo apply

function exampleFunctionES5(x, y, z) {
    console.log('x:', x + ' y:', y + ' z:', z);
}
var args = [0, 1, 2];
exampleFunctionES5.apply(null, args); //this = null

function exampleFunctionES6(x, y, z) {
    console.log('x:', x + ' y:', y + ' z:', z);
}
var args = [0, 1, 2];
exampleFunctionES6(...args);

//UN ARREGLO LITERAL MAS PODEROSO

function concatArrayESconcatArrayES5() {
    var parts = ['shoulder', 'knees'],
        lyrics = ['head', 'and toes'],
        result = parts.concat(lyrics);
    console.log("concatArrayES5:", result);
}
concatArrayESconcatArrayES5();

function concatArraySpredOperator() {
    var parts = ['shoulder', 'knees'],
        lyrics = ['head', 'and toes'],
        result = [...parts, ...lyrics];
    console.log("concatArraySpredOperator:", result);
}
concatArraySpredOperator();

//Metodo push mejorado

function pushWithES5() {
    var arr1 = [0, 1, 2],
        arr2 = [3, 4, 5];
    Array.prototype.push.apply(arr1, arr2);
    console.log("pushWithNewES5:", arr1);
}

function pushWithSpredOperator() {
    var arr1 = [0, 1, 2],
        arr2 = [3, 4, 5];
    arr1.push(...arr2);
    console.log("pushWithSpredOperator:", arr1);
}

pushWithES5();
pushWithSpredOperator();

//PROPIEDAD NEW.TARGET
//Permite detectar si una funcion o constructor se ha llamado utilizando new.
//Usar new.target fuera de una funcion da error de sintaxis.

function Person(name) {
    if (this instanceof Person) {
        this.name = name; // using using new new
    } else {
        throw new Error("You must use new with Person.")
    }
}
var person = new Person("Nicholas");
//var notAPerson = Person("Nicholas");
//var notAPerson1 = Person.call(person, "Michael");

function Person2(name) {
    if (typeof new.target !== "undefined") {
        this.name = name; // using using new new
    } else {
        throw new Error("You must use new with Person.")
    }
}
var person = new Person2("Nicholas");
//var notAPerson1 = Person2.call(person, "Michael");

//FUNCIONES A NIVEL DE BLOQUE
//En ES6 esta permitido.
//Solo se puede acceder a esa funcion dentro de ese bloque.

function functionBlockLevelES6() {
    "use strict";
    if (true) {
        console.log(typeof doSomething); //function porque se iza a la parte superior del bloque

        function doSomething() {
            console.log('execute function doSomething');
        }
        doSomething();
    }
    console.log(typeof doSomething); //undefined
    //doSomething(); Error aqui fuera no está definida
}

functionBlockLevelES6();

//Con let no se izan.
function functionBlockLevelWithLet() {
    "use strict";
    if (true) {
        //console.log(typeof doSomething); Error porque no se ha izado

        let doSomething = function() {
            console.log('execute function doSomething');
        }
        doSomething();
    }
    console.log(typeof doSomething); //undefined
    //doSomething(); Error aqui fuera no está definida
}

functionBlockLevelWithLet();

//En el modo no estricto las funciones de bloque se izan a nivel global de la función.
function functionBlockLevelNoStrictES6() {

    if (true) {
        console.log(typeof doSomething);

        function doSomething() {
            console.log('execute function doSomething not use strict');
        }
        doSomething();
    }
    console.log(typeof doSomething); //undefined
    //doSomething();
}

functionBlockLevelNoStrictES6();

//FUNCION ARROW =>
//No tienen metodo constructor.
//No tienen prototipo.
//No tienen argumentos por lo que se deben usar parámetros REST.
//El valor de this se toma del contexto por lo que no hace falta blind o that = this.
//El valor de this no podra ser cambiado durante todo el ciclo de vida.

const reflect = value => value;
/* const reflect = function(value) {
    return value;
}; */
console.log('Arrow devuelve ', reflect(2));

//Multiples parametros

const sum = (num1, num2) => num1 + num2;
console.log('Arrow sum ', sum(2, 3));

//Sin parametros
const getName = () => "Nicholas";
console.log('Arrow getName ', getName());

//Proveer un cuerpo más tradicional

const sum2 = (num1, num2) => { return num1 + num2 };
console.log('Arrow sum2 ', sum2(2, 3));

//Funcion que no hace nada
const doNothing = () => {};

const getTempItem = id => ({ id: id, name: "Temp" });
console.log('Arrow getTempItem ', getTempItem('identificador1'));

//ERROR THIS BINDING JAVASCRIPT

const PageHandler = {
    id: "123456",
    init: function() {
        document.addEventListener("click", function(event) {
            this.doSomething(event.type);
        }, false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler.init();

//Solucion usar blind

var PageHandler2 = {
    id: "123456",
    init: function() {
        document.addEventListener("click", (function(event) {
            this.doSomething(event.type);
        }).bind(this), false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler2.init();

//Con arrow no se necesita bind ya que this se determina por el contexto
//Si una funcion arrow esta dentro de una noArrow el this sera el que contiene a la noArrow

var PageHandler3 = {
    id: "123456",
    init: function() {
        document.addEventListener("click",
            event => this.doSomething(event.type),
            false);
    },
    doSomething: function(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler3.init();

//Las funciones arrow no se pueden utilizar para definir nuevos tipos ya que no tienen prototipo. 
//Si se usa new obtendremos un error.

var MyType = () => {};
//object = new MyType(); // error -you can't use arrow functions.