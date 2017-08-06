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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ 8:
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

/******/ });