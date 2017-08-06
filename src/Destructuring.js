//En ES5 para extraer información de objetos había que repetir mucho código
function extractDataFromObject() {
    let options = {
        repeat: true,
        save: false
    };
    // extract data from the object
    let repeat = options.repeat,
        save = options.save;
    console.log(options);
    console.log('repeat', repeat);
    console.log('save', save);
}
extractDataFromObject();

//ES6 permite romper la estructura de datos en partes más pequeñas

function destructuring1() {
    let node = {
        type: "Identifier",
        name: "foo"
    };
    let { type, name } = node;
    console.log('type ', type);
    console.log('name', name);
}

destructuring1();

//SIEMPRE SE DEBEN INICIALIZAR SI NO DA ERROR var {type ,name }; let {type ,name }; const {type ,name };

//Se pueden cambiar el valor de las variables antes definidas por otros nuevos usando destructuring

function destructuring2() {
    let type = "Literal",
        name = 5,
        node = {
            type: "Identifier",
            name: "foo "
        };
    ({ type, name } = node); // assign different values using destructuring
    console.log('type', type);
    console.log('name', name);
}
destructuring2();

//Si se asigna una propiedad que no existe se devuelve undefined
function destructuring3() {
    let node = {
        type: "Identifier",
        name: "foo"
    };
    let { type, name, value } = node;
    console.log('value ', value); //undefined
}

destructuring3();

//Aunque se puede asignar un valor por defecto

function destructuring4() {
    let node = {
        type: "Identifier",
        name: "foo"
    };
    let { type, name, value = 5 } = node;
    console.log('value ', value); //5
}

destructuring4();

//Asignando nombres de variables diferentes

function destructuring5() {
    let node = {
        type: "Identifier",
        name: "foo"
    };
    let { type: localType, name: localName } = node;
    console.log('localType ', localType);
    console.log('localName', localName);
}

destructuring5();

function destructuring6() {
    let node = {
        type: "Identifier",
        name: "foo"
    };
    let { type: localType, name: localName, value: localValue = 'bar' } = node;
    console.log('localValue ', localValue);
}

destructuring6();

//Objetos anidados

function destructuring7() {

    let node = {
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
    let { loc: location } = node;
    let { loc: { start } } = node; // var start = node.loc.start;
    console.log('location', location); //loc no esta definido
    console.log('start', start); //loc no esta definido
    console.log(start.line); // 1
    console.log(start.column); //1
}

destructuring7();

//ARRAY DESTRUCTURING actua sobre el index de los elementos
function destructuring8() {
    let colors = ["red", "green", "blue"];
    let [firstColor, secondColor] = colors;
    console.log(firstColor); // "red""
    console.log(secondColor); //  "green“ "
}
destructuring8();

//omitir elementos

function destructuring9() {
    let colors = ["red", "green", "blue"];
    let [, , lastColor] = colors;
    console.log(lastColor); // "blue""
}
destructuring9();

//Asignar nuevos parametros. La diferencia que no hace falta meterlo entre parentesis

function destructuring10() {
    let firstColor = 'Black',
        secondColor = 'Purple',
        lastColor = 'Yellow',
        colors = ["red", "green", "blue"];
    [firstColor, secondColor, lastColor] = colors;
    console.log('firstColor', firstColor); // "red",
    console.log('secondColor', secondColor); // "green
    console.log('lastColor', lastColor); // "blue
}
destructuring10();

//Intercambio de valores

function destructuring11() {
    let a = 1,
        b = 2;
    [a, b] = [b, a];
    console.log(a); // 2
    console.log(b); // 1
}
destructuring11();
//Valores por defecto
function destructuring12() {
    let colors = ["red"];
    let [firstColor, secondColor = "green"] = colors;
    console.log(firstColor); // "red"
    console.log(secondColor); // "green"
}
destructuring12();

//Arrays anidados
function destructuring14() {
    let colors = ["red", ["green ", "lightgreen"], "blue"];
    let [firstColor, [secondColor]] = colors;
    let [, [, lightGreen]] = colors;
    console.log(lightGreen); // "lightGreen"
}
destructuring14();

//Rest parameters

function destructuring15() {
    let colors = ["red", "green ", "blue"];
    let [firstColor, ...restColors] = colors;
    console.log(firstColor); // "red"
    console.log(restColors.length); // 2
    console.log(restColors[0]); // "green "
    console.log(restColors[1]); // "blue"
}
destructuring15();


//Objetos y arrays
function destructuring16() {
    let node = {
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
    let {
        loc: { start }, //var start = node.loc.start,
        loc: { end: localEnd },
        range: [startIndex],
        range: [, lastIndex]
    } = node;
    console.log(start.line); // 1
    console.log(start.column); // 1
    console.log(localEnd);
    console.log(startIndex); // 0
    console.log(lastIndex); //3

}

destructuring16();