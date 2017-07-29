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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
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

/***/ })
/******/ ]);