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
        name,
        age
    };
}

//ES5

var person = {
    name: "Nicholas",
    sayName: function() {
        console.log(this.name);
    }
};

//ES6

const personES6 = {
    name: "Nicholas",
    sayName() {
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
            return "file.js"
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
    var person = {
        name: "Nicholas",
        name: "Greg"
    };
}

//En ES6 es el último valor de la propiedad duplicada el que se asigna al objeto.
function sampleDuplicatedProperty2() {
    "use strict";
    var person = {
        name: "Nicholas",
        name: "Greg"
    };
    console.log(person.name); //Greg
}
sampleDuplicatedProperty2();

//Orden de las propiedades cuando son devueltas.

//Claves numéricas de forma ascendiente.
//Claves string y símbolos según se hayan añadido al objeto. //A la hora de desplegar en el navegador salen en orden alfabetico

function orderObject() {
    let obj = {
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
    let person = {
            getGreeting() {
                return "Hello";
            }
        },
        dog = {
            getGreeting() {
                return "Woof";
            }
        };
    // prototype is person
    let friend = Object.create(person);
    console.log(friend.getGreeting());
    console.log(Object.getPrototypeOf(friend) === person);
    // set prototype to dog
    Object.setPrototypeOf(friend, dog);
    console.log(friend.getGreeting());
    console.log(Object.getPrototypeOf(friend) === dog);
}

changePrototypeObject();