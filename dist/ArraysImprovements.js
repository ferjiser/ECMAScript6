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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
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

/***/ })

/******/ });