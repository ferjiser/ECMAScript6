/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(5);
__webpack_require__(6);
__webpack_require__(7);
__webpack_require__(8);
module.exports = __webpack_require__(9);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*LET*/

function ejemploVar() {
    if (true) {
        var x = 'hola mundo';
    }
    console.log(x);
}

function ejemploLet() {
    if (true) {
        var _x = 'hola mundo';
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
    var x = 'primer let';
    if (true) {
        var _x2 = 'segundo let';
        console.log(_x2);
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
    var foo = 2;
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
    for (var _i = 0; _i < 5; _i++) {
        console.log('con let-valor de i:', _i);
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
        var _x3 = 'hola mundo';
    }
    console.log(x);
}

function ejemploConst2() {
    var x = 'primer const';
    if (true) {
        var _x4 = 'segundo const';
        console.log(_x4);
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
    var MY_OBJECT = { "key": "value" };
    MY_OBJECT.key = "otherValue";
    console.log(MY_OBJECT);
}
/*
Los atributos de un objeto const no están protegidos por lo que se pueden modificar
 */
ejemploConst9();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//includes() devuelve true si el texto está dentro de la cadena.

function ejemploIncludes() {
    var string = 'prueba de texto';
    console.log(string.includes('de')); // true
}

function ejemploIncludes2() {
    var string = 'prueba de texto';
    console.log(string.includes('da')); //false
}

function ejemploIncludes3() {
    var string = 'prueba de texto';
    console.log('El caracter en la posición 7 es ', string.charAt(7)); //d
    console.log(string.includes('de', 7)); //true
}
console.log('Ejemplos con includes()');
ejemploIncludes();
ejemploIncludes2();
ejemploIncludes3();

//startsWith () : Devuelve true si la cadena empieza por ese texto

function ejemploStartsWith() {
    var string = 'prueba de texto';
    console.log(string.startsWith('prueba')); //true
}

function ejemploStartsWith2() {
    var string = 'prueba de texto';
    console.log(string.startsWith('xxx')); //false
}

function ejemploStartsWith3() {
    var string = 'prueba de texto';
    console.log('El caracter en la posición 7 es ', string.charAt(7)); //d
    console.log(string.startsWith('prueba', 7)); //false
}

function ejemploStartsWith4() {
    var string = 'prueba de texto';
    console.log('El caracter en la posición 7 es ', string.charAt(7)); //d
    console.log(string.startsWith('de', 7)); // true
}
console.log('Ejemplos con startsWith()');
ejemploStartsWith();
ejemploStartsWith2();
ejemploStartsWith3();
ejemploStartsWith4();

//endsWith () : Devuelve true si la cadena termina por ese texto


function ejemploEndsWith() {
    var string = 'prueba de texto';
    console.log(string.endsWith('texto')); //true
}

function ejemploEndsWith2() {
    var string = 'prueba de texto';
    console.log(string.endsWith('xxx')); //false
}

function ejemploEndsWith3() {
    var string = 'prueba de texto';
    console.log('El caracter en la posición 9 es ', string.charAt(9)); //espacio
    console.log(string.endsWith('de', 9)); // true
}

function ejemploEndsWith4() {
    var string = 'prueba de texto';
    console.log('El caracter en la posición 15 es ', string.charAt(15)); //espacio
    console.log(string.endsWith('texto', 15)); // true
}
console.log('Ejemplos con endsWith()');
ejemploEndsWith();
ejemploEndsWith2();
ejemploEndsWith3();
ejemploEndsWith4();

//repeat () : repite la cadena

function ejemploRepeat() {
    console.log('x'.repeat(4));
}

function ejemploRepeat2() {
    console.log('0'.repeat(2));
}

console.log('Ejemplos con repeat()');
ejemploRepeat();
ejemploRepeat2();

function ejemploStrings() {
    var msg = "Hello world!";

    console.log(msg.startsWith("Hello")); //true
    console.log(msg.endsWith("!")); // true
    console.log(msg.includes("o")); //true

    console.log(msg.startsWith("o")); //false
    console.log(msg.endsWith("world!")); // true
    console.log(msg.includes("x")); //false

    console.log('El caracter en la posición 4 es ', msg.charAt(4)); //0
    console.log(msg.startsWith("o", 4)); //true
    console.log('El caracter en la posición 8 es ', msg.charAt(8)); //r
    console.log(msg.endsWith("o", 8)); // true
    console.log(msg.includes("o", 8)); //false
}
console.log('Ejemplos con strings');
ejemploStrings();

//Ejemplo multilínea
function ejemploMultilinea() {
    //ES6
    var multilinea = 'Esta es una cadena\n    multil\xEDnea';
    console.log(multilinea);
}
console.log('Ejemplo multilinea, el símbolo ` es importante. No vale cualquier comilla');
ejemploMultilinea();

//PLANTILLAS.Formateo de strings
console.log('Ejemplos con plantillas y formateos de strings, insertar valores. No valen cualqueir comilla. Se pueden hacer calculos');

function ejemploBasicStringFormatting() {
    var nombre = 'Jason',
        apellido = 'Harris';
    console.log('Hola ' + nombre + ' ' + apellido);
}

function ejemploBasicStringFormatting2() {
    var persona = {
        nombre: 'Jason',
        apellido: 'Harris'
    };
    console.log('Hola ' + persona.nombre + ' ' + persona.apellido);
}

function ejemploBasicStringFormatting3() {
    var contador = 10,
        precio = 0.25;
    console.log(contador + ' piezas cuestan ' + (contador * precio).toFixed(2) + ' \u20AC');
}

//Plantillas dentro de pantillas
function ejemploBasicStringFormatting4() {
    var nombre = 'Jason';
    console.log('Hola, ' + ('mi nombre es ' + nombre));
}

ejemploBasicStringFormatting();
ejemploBasicStringFormatting2();
ejemploBasicStringFormatting3();
ejemploBasicStringFormatting4();

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

//Funciones con valores de parametros por defecto.

function defaultParametersES5(url, timeout, callback) {
    timeout = typeof timeout !== "undefined" ? timeout : 2000;
    callback = typeof callback !== "undefined" ? callback : function () {};
    console.log(' URL :', url + ' TIMEOUT:' + timeout + ' CALLBACK:' + callback);
}
console.log('ES5');
defaultParametersES5("/foo");
defaultParametersES5("/foo", 500);
defaultParametersES5("/foo", 500, function () {
    console.log('This is a test with callback');
});
defaultParametersES5("/foo", undefined, function () {
    console.log('This is a test with callback');
});
defaultParametersES5("/foo", null, function () {
    console.log('This is a test with callback');
});

function defaultParametersES6(url) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
    var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

    console.log(' URL :', url + ' TIMEOUT:' + timeout + ' CALLBACK:' + callback);
}

console.log('ES6');
defaultParametersES6("/foo");
defaultParametersES6("/foo", 500);
defaultParametersES6("/foo", 500, function () {
    console.log('This is a test with callback');
});
defaultParametersES6("/foo", undefined, function () {
    console.log('This is a test with callback');
});
defaultParametersES6("/foo", null, function () {
    console.log('This is a test with callback');
});

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

function defaultArgumentsES6(first) {
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'b';

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

function defaultArgumentsWithFunction(first) {
    var second = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getValue();

    console.log("valor de la suma suma:", first + second);
    return first + second;
}
defaultArgumentsWithFunction(1);
defaultArgumentsWithFunction(1, 1);

console.log('EJEMPLOS CON PARAMETROS REST');
//Un parametro rest es indicado con el operador ... precedido del nombre del parametro que se convierte en un array con el resto de parametros.

function pickWithArguments(object) {
    var result = {};
    for (var i = 1, len = arguments.length; i < len; i++) {
        result[arguments[i]] = object[arguments[i]];
    }
    console.log("pick with arguments:", result);
    return result;
}
var book = {
    title: "Understanding ECMAScript6",
    author: "Fernando Jimenez",
    year: 2017
};
pickWithArguments(book, "author", "title", "year");

function pickWithParametersRest(object) {
    var result = {};

    for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        keys[_key - 1] = arguments[_key];
    }

    for (var i = 0, len = keys.length; i < len; i++) {
        result[keys[i]] = object[keys[i]];
    }
    console.log("pick with parameters rest:", result);
    return result;
}
var bookRest = {
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
exampleFunctionES6.apply(undefined, args);

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
        result = [].concat(parts, lyrics);
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
    arr1.push.apply(arr1, arr2);
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
        throw new Error("You must use new with Person.");
    }
}
var person = new Person("Nicholas");
//var notAPerson = Person("Nicholas");
//var notAPerson1 = Person.call(person, "Michael");

function Person2(name) {
    if (typeof new.target !== "undefined") {
        this.name = name; // using using new new
    } else {
        throw new Error("You must use new with Person.");
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
        //function porque se iza a la parte superior del bloque

        var _doSomething = function _doSomething() {
            console.log('execute function doSomething');
        };

        console.log(typeof _doSomething === "undefined" ? "undefined" : _typeof(_doSomething));
        _doSomething();
    }
    console.log(typeof doSomething === "undefined" ? "undefined" : _typeof(doSomething)); //undefined
    //doSomething(); Error aqui fuera no está definida
}

functionBlockLevelES6();

//Con let no se izan.
function functionBlockLevelWithLet() {
    "use strict";

    if (true) {
        //console.log(typeof doSomething); Error porque no se ha izado

        var _doSomething2 = function _doSomething2() {
            console.log('execute function doSomething');
        };
        _doSomething2();
    }
    console.log(typeof doSomething === "undefined" ? "undefined" : _typeof(doSomething)); //undefined
    //doSomething(); Error aqui fuera no está definida
}

functionBlockLevelWithLet();

//En el modo no estricto las funciones de bloque se izan a nivel global de la función.
function functionBlockLevelNoStrictES6() {

    if (true) {
        var _doSomething3 = function _doSomething3() {
            console.log('execute function doSomething not use strict');
        };

        console.log(typeof _doSomething3 === "undefined" ? "undefined" : _typeof(_doSomething3));

        _doSomething3();
    }
    console.log(typeof doSomething === "undefined" ? "undefined" : _typeof(doSomething)); //undefined
    //doSomething();
}

functionBlockLevelNoStrictES6();

//FUNCION ARROW =>
//No tienen metodo constructor.
//No tienen prototipo.
//No tienen argumentos por lo que se deben usar parámetros REST.
//El valor de this se toma del contexto por lo que no hace falta blind o that = this.
//El valor de this no podra ser cambiado durante todo el ciclo de vida.

var reflect = function reflect(value) {
    return value;
};
/* const reflect = function(value) {
    return value;
}; */
console.log('Arrow devuelve ', reflect(2));

//Multiples parametros

var sum = function sum(num1, num2) {
    return num1 + num2;
};
console.log('Arrow sum ', sum(2, 3));

//Sin parametros
var getName = function getName() {
    return "Nicholas";
};
console.log('Arrow getName ', getName());

//Proveer un cuerpo más tradicional

var sum2 = function sum2(num1, num2) {
    return num1 + num2;
};
console.log('Arrow sum2 ', sum2(2, 3));

//Funcion que no hace nada
var doNothing = function doNothing() {};

var getTempItem = function getTempItem(id) {
    return { id: id, name: "Temp" };
};
console.log('Arrow getTempItem ', getTempItem('identificador1'));

//ERROR THIS BINDING JAVASCRIPT

var PageHandler = {
    id: "123456",
    init: function init() {
        document.addEventListener("click", function (event) {
            this.doSomething(event.type);
        }, false);
    },
    doSomething: function doSomething(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler.init();

//Solucion usar blind

var PageHandler2 = {
    id: "123456",
    init: function init() {
        document.addEventListener("click", function (event) {
            this.doSomething(event.type);
        }.bind(this), false);
    },
    doSomething: function doSomething(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler2.init();

//Con arrow no se necesita bind ya que this se determina por el contexto
//Si una funcion arrow esta dentro de una noArrow el this sera el que contiene a la noArrow

var PageHandler3 = {
    id: "123456",
    init: function init() {
        var _this = this;

        document.addEventListener("click", function (event) {
            return _this.doSomething(event.type);
        }, false);
    },
    doSomething: function doSomething(type) {
        console.log("Handling " + type + " for " + this.id);
    }
};
PageHandler3.init();

//Las funciones arrow no se pueden utilizar para definir nuevos tipos ya que no tienen prototipo. 
//Si se usa new obtendremos un error.

var MyType = function MyType() {};
//object = new MyType(); // error -you can't use arrow functions.

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//En ES5 los objectos son colecciones de clave y valor
function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
//En ES6 se puede eliminar la duplicidad.

function createPersonES6(name, age) {
    return {
        name: name,
        age: age
    };
}

//ES5

var person = {
    name: "Nicholas",
    sayName: function sayName() {
        console.log(this.name);
    }
};

//ES6

var personES6 = {
    name: "Nicholas",
    sayName: function sayName() {
        console.log(this.name);
    }
};

//Object.is() compensa las peculiaridades del operador ===

function exampleObjectIS() {
    console.log(+0 == -0); //true
    console.log(+0 === -0); //true
    console.log(Object.is(+0, -0)); //false

    console.log(NaN == NaN); //false
    console.log(NaN === NaN); //false
    console.log(Object.is(NaN, NaN)); //true

    console.log(5 == 5); //true
    console.log(5 == "5"); //true
    console.log(5 === 5); //true
    console.log(5 === "5"); //false
    console.log(Object.is(5, 5)); //true
    console.log(Object.is(5, "5")); //false
}

exampleObjectIS();

//Objects.assign(destino, origen). Copia en un objecto las propiedades del otro

function sampleObjectAssign() {
    var receiver = {};
    Object.assign(receiver, {
        type: "js ",
        name: "file.js"
    }, {
        type: "css "
    });
    console.log(receiver.type); // "css "
    console.log(receiver.name); // "file.js“
    console.log(receiver);
}
sampleObjectAssign();

//Object.getOwnPropertyDescriptor(obj ,prop) //devuelve una descripcion de una propiedad del objecto

var receiver = {},
    supplier = {
    get name() {
        return "file.js";
    }
};
Object.assign(receiver, supplier);
var descriptor = Object.getOwnPropertyDescriptor(receiver, "name");
console.log(descriptor.value); // "file.js“
console.log(descriptor.get); // undefined

//Propiedades duplicadas
//En E55 daria error
function sampleDuplicatedProperty() {
    "use strict";

    var person = _defineProperty({
        name: "Nicholas"
    }, "name", "Greg");
}

//En ES6 es el último valor de la propiedad duplicada el que se asigna al objeto.
function sampleDuplicatedProperty2() {
    "use strict";

    var person = _defineProperty({
        name: "Nicholas"
    }, "name", "Greg");
    console.log(person.name); //Greg
}
sampleDuplicatedProperty2();

//Orden de las propiedades cuando son devueltas.

//Claves numéricas de forma ascendiente.
//Claves string y símbolos según se hayan añadido al objeto. //A la hora de desplegar en el navegador salen en orden alfabetico

function orderObject() {
    var obj = {
        a: 1,
        0: 1,
        c: 1,
        2: 1,
        b: 1,
        1: 1
    };
    obj.d = 1;
    console.log(obj);
}

orderObject();

//En ES5 el prototipo de un objeto se define cuando es creado usando el constructor o el Object.create() y no se puede cambiar.
//En ES6 Object.setPrototypeOf() permite cambiar el prototipo de un objeto.

function changePrototypeObject() {
    var person = {
        getGreeting: function getGreeting() {
            return "Hello";
        }
    },
        dog = {
        getGreeting: function getGreeting() {
            return "Woof";
        }
    };
    // prototype is person
    var friend = Object.create(person);
    console.log(friend.getGreeting());
    console.log(Object.getPrototypeOf(friend) === person);
    // set prototype to dog
    Object.setPrototypeOf(friend, dog);
    console.log(friend.getGreeting());
    console.log(Object.getPrototypeOf(friend) === dog);
}

changePrototypeObject();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//En ES5 para extraer información de objetos había que repetir mucho código
function extractDataFromObject() {
    var options = {
        repeat: true,
        save: false
    };
    // extract data from the object
    var repeat = options.repeat,
        save = options.save;
    console.log(options);
    console.log('repeat', repeat);
    console.log('save', save);
}
extractDataFromObject();

//ES6 permite romper la estructura de datos en partes más pequeñas

function destructuring1() {
    var node = {
        type: "Identifier",
        name: "foo"
    };
    var type = node.type,
        name = node.name;

    console.log('type ', type);
    console.log('name', name);
}

destructuring1();

//SIEMPRE SE DEBEN INICIALIZAR SI NO DA ERROR var {type ,name }; let {type ,name }; const {type ,name };

//Se pueden cambiar el valor de las variables antes definidas por otros nuevos usando destructuring

function destructuring2() {
    var type = "Literal",
        name = 5,
        node = {
        type: "Identifier",
        name: "foo "
    };
    // assign different values using destructuring
    type = node.type;
    name = node.name;
    console.log('type', type);
    console.log('name', name);
}
destructuring2();

//Si se asigna una propiedad que no existe se devuelve undefined
function destructuring3() {
    var node = {
        type: "Identifier",
        name: "foo"
    };
    var type = node.type,
        name = node.name,
        value = node.value;

    console.log('value ', value); //undefined
}

destructuring3();

//Aunque se puede asignar un valor por defecto

function destructuring4() {
    var node = {
        type: "Identifier",
        name: "foo"
    };
    var type = node.type,
        name = node.name,
        _node$value = node.value,
        value = _node$value === undefined ? 5 : _node$value;

    console.log('value ', value); //5
}

destructuring4();

//Asignando nombres de variables diferentes

function destructuring5() {
    var node = {
        type: "Identifier",
        name: "foo"
    };
    var localType = node.type,
        localName = node.name;

    console.log('localType ', localType);
    console.log('localName', localName);
}

destructuring5();

function destructuring6() {
    var node = {
        type: "Identifier",
        name: "foo"
    };
    var localType = node.type,
        localName = node.name,
        _node$value2 = node.value,
        localValue = _node$value2 === undefined ? 'bar' : _node$value2;

    console.log('localValue ', localValue);
}

destructuring6();

//Objetos anidados

function destructuring7() {

    var node = {
        type: "Identifier",
        name: "foo ",
        loc: {
            start: {
                line: 1,
                column: 1
            },
            end: {
                line: 1,
                column: 4
            }
        }
    };
    var location = node.loc;
    var start = node.loc.start; // var start = node.loc.start;

    console.log('location', location); //loc no esta definido
    console.log('start', start); //loc no esta definido
    console.log(start.line); // 1
    console.log(start.column); //1
}

destructuring7();

//ARRAY DESTRUCTURING actua sobre el index de los elementos
function destructuring8() {
    var colors = ["red", "green", "blue"];
    var firstColor = colors[0],
        secondColor = colors[1];

    console.log(firstColor); // "red""
    console.log(secondColor); //  "green“ "
}
destructuring8();

//omitir elementos

function destructuring9() {
    var colors = ["red", "green", "blue"];
    var lastColor = colors[2];

    console.log(lastColor); // "blue""
}
destructuring9();

//Asignar nuevos parametros. La diferencia que no hace falta meterlo entre parentesis

function destructuring10() {
    var firstColor = 'Black',
        secondColor = 'Purple',
        lastColor = 'Yellow',
        colors = ["red", "green", "blue"];
    firstColor = colors[0];
    secondColor = colors[1];
    lastColor = colors[2];

    console.log('firstColor', firstColor); // "red",
    console.log('secondColor', secondColor); // "green
    console.log('lastColor', lastColor); // "blue
}
destructuring10();

//Intercambio de valores

function destructuring11() {
    var a = 1,
        b = 2;
    var _ref = [b, a];
    a = _ref[0];
    b = _ref[1];

    console.log(a); // 2
    console.log(b); // 1
}
destructuring11();
//Valores por defecto
function destructuring12() {
    var colors = ["red"];
    var firstColor = colors[0],
        _colors$ = colors[1],
        secondColor = _colors$ === undefined ? "green" : _colors$;

    console.log(firstColor); // "red"
    console.log(secondColor); // "green"
}
destructuring12();

//Arrays anidados
function destructuring14() {
    var colors = ["red", ["green ", "lightgreen"], "blue"];

    var firstColor = colors[0],
        _colors$2 = _slicedToArray(colors[1], 1),
        secondColor = _colors$2[0];

    var _colors$3 = _slicedToArray(colors[1], 2),
        lightGreen = _colors$3[1];

    console.log(lightGreen); // "lightGreen"
}
destructuring14();

//Rest parameters

function destructuring15() {
    var colors = ["red", "green ", "blue"];
    var firstColor = colors[0],
        restColors = colors.slice(1);

    console.log(firstColor); // "red"
    console.log(restColors.length); // 2
    console.log(restColors[0]); // "green "
    console.log(restColors[1]); // "blue"
}
destructuring15();

//Objetos y arrays
function destructuring16() {
    var node = {
        type: "Identifier",
        name: "foo",
        loc: {
            start: {
                line: 1,
                column: 1
            },
            end: {
                line: 1,
                column: 4
            }
        },
        range: [0, 3]
    };

    var start = node.loc.start,
        localEnd = node.loc.end,
        _node$range = _slicedToArray(node.range, 1),
        startIndex = _node$range[0],
        _node$range2 = _slicedToArray(node.range, 2),
        lastIndex = _node$range2[1];

    console.log(start.line); // 1
    console.log(start.column); // 1
    console.log(localEnd);
    console.log(startIndex); // 0
    console.log(lastIndex); //3
}

destructuring16();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//Un set es una lista de valores que no pueden contener duplicados. Tiene acceso rapido
//Un map es una colección de claves-valor

//SET
//Se crean usando new Set() y se añaden elementos con add()

function ejemploSet() {
    var set = new Set();
    set.add(5);
    set.add('5');
    console.log('set', set);
    console.log('size', set.size);
}
ejemploSet();

function ejemploSet2() {
    var set = new Set();
    set.add(5);
    set.add('5');
    set.add(5); //duplicado asi que será ignorado
    console.log('set', set);
    console.log('size', set.size);
}
ejemploSet2();

//Inicializar Set
function ejemploSet3() {
    var set = new Set([1, 2, 3, 4, 4, 4, 4, 4, 7, 8, 1]);
    console.log('set', set);
    console.log('size', set.size); //6. Los duplicados se ignoran
}
ejemploSet3();

//Comprobar si existe un valor en el set

function ejemploSet4() {
    var set = new Set([1, 2, 3, 4, 4, 4, 4, 4, 7, 8, 1]);
    console.log('set', set);
    console.log('has 4', set.has(4)); //true
    console.log('has 6', set.has(6)); //false
}
ejemploSet4();

//delete borra un registro y clear borra todos

function ejemploSet5() {
    var set = new Set([1, 2, 3, 4, 4, 4, 4, 4, 7, 8, 1]);
    console.log('set', set);
    console.log('has 4', set.has(4)); //true
    set.delete(4);
    console.log('has 4', set.has(4)); //false
    set.clear();
    console.log('size', set.size); //0
}
ejemploSet5();

//forEach.

function ejemploSet6() {
    var set = new Set([1, 2]);
    set.forEach(function (value, key, ownerSet) {
        //value: valor de la posicion en el set, key: mismo valor, ownerSet: set desde el cual el valor es leido
        console.log(key + ' ' + value);
        console.log(ownerSet === set);
    });
    /* set.forEach(function(value, key, ownerSet){
         console.log(key+' '+value);
         console.log(ownerSet === set);
     }, this)*/ // Se le puede pasar el this si lo necesitara.
}
ejemploSet6();

//Convertir un set en array

function ejemploSet7() {
    var set = new Set([1, 2, 3, 4, 5, 6]),
        array = [].concat(_toConsumableArray(set));
    console.log('array', array);
}
ejemploSet7();

//MAPS

function ejemploMap1() {
    var map = new Map();
    map.set('title', 'Understandings ES6');
    map.set('year', 2016);
    console.log('map', map);
    console.log('title', map.get('title'));
    console.log('year', map.get('year'));
    console.log('author', map.get('author')); //undefined
}
ejemploMap1();

function ejemploMap2() {
    var map = new Map();
    map.set('title', 'Understandings ES6');
    map.set('year', 2016);
    console.log('has title', map.has('title')); //true
    console.log('has author', map.has('author')); //false
}
ejemploMap2();

function ejemploMap3() {
    var map = new Map();
    map.set('title', 'Understandings ES6');
    map.set('year', 2016);
    console.log('has title', map.has('title')); //true
    map.delete('title');
    console.log('has title', map.has('title')); //true
    map.clear();
    console.log('size', map.size); //0
}
ejemploMap3();

//Maps initialization
function ejemploMap4() {
    var map = new Map([['name', 'Nicolas'], ['age', 25]]);
    console.log('has name', map.has('name')); //true
    console.log('name', map.get('name'));
    console.log('has age', map.has('age')); //true
    console.log('age', map.get('age'));
    console.log('size', map.size);
}
ejemploMap4();

//forEach

function ejemploMap5() {
    var map = new Map([['name', 'Nicolas'], ['age', 25]]);
    map.forEach(function (value, key, ownerMap) {
        //value: valor de la posicion en el map, key: valor de la key, ownerMap: map desde el cual el valor es leido
        console.log(key + ' ' + value); // name Nicolas
        console.log(ownerMap === map);
    });
}
ejemploMap5();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Array.of(..items)

function ejemploArray() {
    var a = Array.of(1),
        b = Array.of(1, 2, 3),
        c = new Array(42); // 42 elementos undefined
    console.log(a);
    console.log(b);
    console.log('constructor ES5', c);
}
ejemploArray();

//Array.from(array, function, arg). Nueva instancia de array a través de un objeto iterable

function ejemploArray2() {
    var a = Array.from('fernando'),
        b = Array.from([1, 2, 3], function (x) {
        return x + x;
    }); //(1+1),(2+2), (3+3)
    console.log(a);
    console.log(b);
}
ejemploArray2();

//Convertir los argumentos en objetos se usa Array.from

function arraySample() {

    var args = Array.from(arguments);
    console.log('arguments:', args);
}

arraySample(1, 3, [4, 5, 6], { 'name': 'Fer' });

//Array.Prototype.entries(). Devuelve un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice en el array

function arrayEntries() {

    var arr = ['a', 'b', 'c'],
        eArr = arr.entries();

    console.log('eArr: ', eArr);
    console.log(eArr.next().value);
    console.log(eArr.next().value);
    console.log(eArr.next().value);
}

arrayEntries();

//Array.Prototype.keys(). Devuelve un nuevo objeto Array Iterator que contiene las claves para cada índice en el array

function arrayKeys() {

    var arr = ['a', 'b'],
        iterator = arr.keys();

    console.log('iterator: ', iterator);
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
}

arrayKeys();

//Array.Prototype.values(). Devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice en el array

function arrayValues() {

    var arr = ['a', 'b', 'c', 'd', 'e', 'f'],
        iterator = arr.values();

    console.log('iterator: ', iterator);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
    console.log(iterator.next().value);
}

//arrayValues();

//Array.Prototype.find(). Devuelve el primer elemento hallado que cumpla con el predicado de busqueda o undefined si no halla ninguno.

function arrayFind() {

    var inventory = [{ name: 'apples', quantity: 2 }, { name: 'bananas', quantity: 3 }, { name: 'cherries', quantity: 2 }, { name: 'cherries', quantity: 5 }];
    function findCherries(fruit) {
        return fruit.name === 'cherries';
    }
    console.log(inventory.find(findCherries));
}
arrayFind();

//Array.Prototype.findIndex(). Devuelve el índice del elemento hallado que cumpla con el predicado de busqueda o -1 si no halla ninguno.

function arrayFindIndex() {

    var inventory = [{ name: 'apples', quantity: 2 }, { name: 'bananas', quantity: 3 }, { name: 'cherries', quantity: 2 }, { name: 'cherries', quantity: 5 }];
    function findCherries(fruit) {
        return fruit.name === 'cherries';
    }
    function findTomatoes(fruit) {
        return fruit.name === 'tomatoes';
    }
    console.log(inventory.findIndex(findCherries));
    console.log(inventory.findIndex(findTomatoes));
}
arrayFindIndex();

//Array.prototype.fill(value. start, end) El índice de fin no está incluido

function arrayFill() {
    console.log([1, 2, 3, 4, 5, 6].fill(4));
    console.log([1, 2, 3, 4, 5, 6].fill(4, 1));
    console.log([1, 2, 3, 4, 5, 6].fill(4, 1, 2)); //[1,4,3,4,5,6]
    console.log([1, 2, 3, 4, 5, 6].fill(4, 1, 1)); //No hace nada
    console.log([1, 2, 3, 4, 5, 6].fill(4, -3, -2));
    console.log([1, 2, 3, 4, 5, 6].fill(4, NaN, NaN));
}
arrayFill();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Se usan para computaciones diferidas o asíncronas.  deferred
// 3 ESTADOS: PENDING (inicial) FULFILLED (cumplida ok) REJECTED (rechazada)

//new Promise();

//Promise.resolve(value),
//Promise.reject(reason),
//Promise.all(iterable) La promesa se devuelve cuando todas las promesas del argumento iterable han sido resueltas.
//Promise.race(iterable) Devuelve una promesa que resuelve o rechaza tan pronto como una de las promesas re resuelve o se rechaza.

//Promise.prototype.then(onFulfilled, onRejected)
//Promise.prototype.catch(onRejected) Gestion del fail.


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PersonClass = function () {
    function PersonClass(name) {
        _classCallCheck(this, PersonClass);

        this.name = name;
    }

    _createClass(PersonClass, [{
        key: "sayName",
        value: function sayName() {
            console.log(this.name);
        }
    }]);

    return PersonClass;
}();

var person = new PersonClass('Fernando');
person.sayName();

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass === "undefined" ? "undefined" : _typeof(PersonClass)); // function
console.log(_typeof(PersonClass.prototype.sayName)); // function

//Una clase solo se puede invocar usando la palabra clave new

//Se puede sobreescribir el nombre de una clase fuera de ella pero no dentro de un metodo suyo.

var Foo = function Foo() {
    _classCallCheck(this, Foo);

    Foo = "bar"; // throws an error
};
// but this is okay


Foo = "baz";

//Las declaraciones de las classes no son hoisted (izadas)

//Una clase anónima es otra forma de denominar a una clase. Puede ser denominada o anónima

var Poligono = //Anonima
function Poligono(alto, ancho) {
    _classCallCheck(this, Poligono);

    this.alto = alto;
    this.ancho = ancho;
};
var Poligono = // Denominada
function Poligono(alto, ancho) {
    _classCallCheck(this, Poligono);

    this.alto = alto;
    this.ancho = ancho;
};

//Formas de declarar un metodo equivalentes

var Foo2 = function () {
    function Foo2() {
        _classCallCheck(this, Foo2);
    }

    _createClass(Foo2, [{
        key: "myMethod",
        value: function myMethod() {}
    }]);

    return Foo2;
}();

var Foo3 = function () {
    function Foo3() {
        _classCallCheck(this, Foo3);
    }

    _createClass(Foo3, [{
        key: ' my ' + ' Method',
        value: function value() {}
    }]);

    return Foo3;
}();

var m = 'myMethod';

var Foo4 = function () {
    function Foo4() {
        _classCallCheck(this, Foo4);
    }

    _createClass(Foo4, [{
        key: m,
        value: function value() {}
    }]);

    return Foo4;
}();

//El método constructor inicializa un objeto creado por una clase. Sólo puede haber uno.
//Un constructor puede usar la palabra super para llamar al constructor de una superclase.

//Se pueden definir metodos set y get

var PersonClass2 = function () {
    function PersonClass2(name) {
        _classCallCheck(this, PersonClass2);

        this.name = name;
    }

    _createClass(PersonClass2, [{
        key: "name",
        get: function get() {
            return this.name;
        },
        set: function set(name) {
            this.name = name;
        }
    }]);

    return PersonClass2;
}();

var person2 = new PersonClass('initial name');
console.log(person2.name); // initial name
person2.name = 'new name';
console.log(person2.name); //new name

//static define un método estático. Se deben llamar sin instanciar la clase y no se puede invocar cuando ya este instanciada

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: "increment",
        value: function increment(x) {
            return x + 1;
        }
    }, {
        key: "decrement",
        value: function decrement(x) {
            return x - 1;
        }
    }]);

    return Util;
}();

console.log(Util.increment(3)); // 4
console.log(Util.decrement(1)); //3

var Point = function () {
    function Point(x, y) {
        _classCallCheck(this, Point);

        this.x = x;
        this.y = y;
    }

    _createClass(Point, null, [{
        key: "distancia",
        value: function distancia(a, b) {
            var dx = a.x - b.x;
            var dy = a.y - b.y;
            return Math.sqrt(dx * dx + dy * dy);
        }
    }]);

    return Point;
}();

var p1 = new Point(5, 5);
var p2 = new Point(10, 10);
console.log(Point.distancia(p1, p2));

//Subclases con extend
// Con extend se crean clases hija.

var Animal = function () {
    function Animal(nombre) {
        _classCallCheck(this, Animal);

        this.nombre = nombre;
    }

    _createClass(Animal, [{
        key: "hablar",
        value: function hablar() {
            console.log(this.nombre + ' hace un ruido.');
        }
    }]);

    return Animal;
}();

var Perro = function (_Animal) {
    _inherits(Perro, _Animal);

    function Perro() {
        _classCallCheck(this, Perro);

        return _possibleConstructorReturn(this, (Perro.__proto__ || Object.getPrototypeOf(Perro)).apply(this, arguments));
    }

    _createClass(Perro, [{
        key: "hablar",
        value: function hablar() {
            console.log(this.nombre + ' ladra.');
        }
    }]);

    return Perro;
}(Animal);

var p = new Perro('Harry');
p.hablar();

//Tambien se pueden extender las clases anteriores basadas en funciones.

function Animal2(nombre) {
    this.nombre = nombre;
}
Animal2.prototype.hablar = function () {
    console.log(this.nombre + ' hace un ruido.');
};

var Perro2 = function (_Animal2) {
    _inherits(Perro2, _Animal2);

    function Perro2() {
        _classCallCheck(this, Perro2);

        return _possibleConstructorReturn(this, (Perro2.__proto__ || Object.getPrototypeOf(Perro2)).apply(this, arguments));
    }

    _createClass(Perro2, [{
        key: "hablar",
        value: function hablar() {
            _get(Perro2.prototype.__proto__ || Object.getPrototypeOf(Perro2.prototype), "hablar", this).call(this); //llama al metodo de la clase madre.
            console.log(this.nombre + ' ladra.');
        }
    }]);

    return Perro2;
}(Animal2);

var p3 = new Perro2('Harry2');
p3.hablar();

var Point2 = function () {
    function Point2(x, y) {
        _classCallCheck(this, Point2);

        this.x = x;
        this.y = y;
    }

    _createClass(Point2, [{
        key: "toString",
        value: function toString() {
            return "(" + this.x + ", " + this.y + ")";
        }
    }]);

    return Point2;
}();

var ColorPoint = function (_Point) {
    _inherits(ColorPoint, _Point);

    function ColorPoint(x, y, color) {
        _classCallCheck(this, ColorPoint);

        // (A)
        var _this3 = _possibleConstructorReturn(this, (ColorPoint.__proto__ || Object.getPrototypeOf(ColorPoint)).call(this, x, y));

        _this3.color = color;
        return _this3;
    }

    _createClass(ColorPoint, [{
        key: "toString",
        value: function toString() {
            return _get(ColorPoint.prototype.__proto__ || Object.getPrototypeOf(ColorPoint.prototype), "toString", this).call(this) + ' in ' + this.color; // (B)
        }
    }]);

    return ColorPoint;
}(Point2);

var cp = new ColorPoint(25, 8, 'green');
console.log(cp.toString()); // '( 25 ,8)in green'
console.log(cp instanceof ColorPoint); //true
console.log(cp instanceof Point2); //true


//Las propiedades estaticas son heredades.

var Foo5 = function () {
    function Foo5() {
        _classCallCheck(this, Foo5);
    }

    _createClass(Foo5, null, [{
        key: "classMethod",
        value: function classMethod() {
            return 'hello';
        }
    }, {
        key: "classMethod2",
        value: function classMethod2() {
            return 'hello';
        }
    }]);

    return Foo5;
}();

var Bar = function (_Foo) {
    _inherits(Bar, _Foo);

    function Bar() {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).apply(this, arguments));
    }

    _createClass(Bar, null, [{
        key: "classMethod",
        value: function classMethod() {
            return _get(Bar.__proto__ || Object.getPrototypeOf(Bar), "classMethod", this).call(this) + ', too ';
        }
    }]);

    return Bar;
}(Foo5);

console.log(Bar.classMethod()); // 'hello,too '
console.log(Bar.classMethod2()); // 'hello

/***/ })
/******/ ]);