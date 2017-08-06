class PersonClass {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}

let person = new PersonClass('Fernando');
person.sayName();

console.log(person instanceof PersonClass); // true
console.log(person instanceof Object); // true

console.log(typeof PersonClass); // function
console.log(typeof PersonClass.prototype.sayName); // function

//Una clase solo se puede invocar usando la palabra clave new

//Se puede sobreescribir el nombre de una clase fuera de ella pero no dentro de un metodo suyo.

class Foo {
    constructor() {
        Foo = "bar"; // throws an error
    }

}
// but this is okay
Foo = "baz";

//Las declaraciones de las classes no son hoisted (izadas)

//Una clase anónima es otra forma de denominar a una clase. Puede ser denominada o anónima

var Poligono = class { //Anonima
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};
var Poligono = class Poligono { // Denominada
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
};

//Formas de declarar un metodo equivalentes

class Foo2 {
    myMethod() {}
}
class Foo3 {
    [' my ' + ' Method']() {}
}
const m = 'myMethod';
class Foo4 {
    [m]() {}
}

//El método constructor inicializa un objeto creado por una clase. Sólo puede haber uno.
//Un constructor puede usar la palabra super para llamar al constructor de una superclase.

//Se pueden definir metodos set y get

class PersonClass2 {
    constructor(name) {
        this.name = name;
    }
    get name() {
        return this.name;
    }
    set name(name) {
        this.name = name;
    }
}
let person2 = new PersonClass('initial name');
console.log(person2.name); // initial name
person2.name = 'new name';
console.log(person2.name); //new name

//static define un método estático. Se deben llamar sin instanciar la clase y no se puede invocar cuando ya este instanciada

class Util {
    static increment(x) {
        return x + 1;
    }
    static decrement(x) {
        return x - 1;
    }
}
console.log(Util.increment(3)); // 4
console.log(Util.decrement(1)); //3

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distancia(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distancia(p1, p2));

//Subclases con extend
// Con extend se crean clases hija.

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hablar() {
        console.log(this.nombre + ' hace un ruido.');
    }
}
class Perro extends Animal {
    hablar() {
        console.log(this.nombre + ' ladra.');
    }
}
var p = new Perro('Harry');
p.hablar();

//Tambien se pueden extender las clases anteriores basadas en funciones.

function Animal2(nombre) {
    this.nombre = nombre;
}
Animal2.prototype.hablar = function() {
    console.log(this.nombre + ' hace un ruido.');
}
class Perro2 extends Animal2 {
    hablar() {
        super.hablar(); //llama al metodo de la clase madre.
        console.log(this.nombre + ' ladra.');
    }
}
var p3 = new Perro2('Harry2');
p3.hablar();

class Point2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}
class ColorPoint extends Point2 {
    constructor(x, y, color) {
        super(x, y); // (A)
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color; // (B)
    }
}

const cp = new ColorPoint(25, 8, 'green');
console.log(cp.toString()); // '( 25 ,8)in green'
console.log(cp instanceof ColorPoint); //true
console.log(cp instanceof Point2); //true


//Las propiedades estaticas son heredades.

class Foo5 {
    static classMethod() {
        return 'hello';
    }
    static classMethod2() {
        return 'hello';
    }
}
class Bar extends Foo5 {
    static classMethod() {
        return super.classMethod() + ', too ';
    }
}
console.log(Bar.classMethod()); // 'hello,too '
console.log(Bar.classMethod2()); // 'hello