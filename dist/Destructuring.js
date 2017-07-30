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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
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

/***/ })

/******/ });