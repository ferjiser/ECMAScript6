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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
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
    doSomething();
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

/***/ })

/******/ });