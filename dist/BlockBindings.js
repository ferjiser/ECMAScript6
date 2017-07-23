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

/***/ })
/******/ ]);