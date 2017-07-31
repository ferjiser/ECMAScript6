//Un set es una lista de valores que no pueden contener duplicados. Tiene acceso rapido
//Un map es una colección de claves-valor

//SET
//Se crean usando new Set() y se añaden elementos con add()

function ejemploSet(){
    let set = new Set();
    set.add(5);
    set.add('5');
    console.log('set',set);
    console.log('size',set.size);
}
ejemploSet();

function ejemploSet2(){
    let set = new Set();
    set.add(5);
    set.add('5');
    set.add(5); //duplicado asi que será ignorado
    console.log('set',set);
    console.log('size',set.size);
}
ejemploSet2();

//Inicializar Set
function ejemploSet3(){
    let set = new Set([1,2,3,4,4,4,4,4,7,8,1]);
    console.log('set',set);
    console.log('size',set.size); //6. Los duplicados se ignoran
}
ejemploSet3();

//Comprobar si existe un valor en el set

function ejemploSet4(){
    let set = new Set([1,2,3,4,4,4,4,4,7,8,1]);
    console.log('set',set);
    console.log('has 4',set.has(4)); //true
    console.log('has 6',set.has(6)); //false
}
ejemploSet4();

//delete borra un registro y clear borra todos

function ejemploSet5(){
    let set = new Set([1,2,3,4,4,4,4,4,7,8,1]);
    console.log('set',set);
    console.log('has 4',set.has(4)); //true
    set.delete(4);
    console.log('has 4',set.has(4)); //false
    set.clear();
    console.log('size',set.size); //0
}
ejemploSet5();

//forEach.

function ejemploSet6(){
    let set = new Set([1,2]);
    set.forEach(function(value, key, ownerSet){ //value: valor de la posicion en el set, key: mismo valor, ownerSet: set desde el cual el valor es leido
        console.log(key+' '+value);
        console.log(ownerSet === set);
    });
   /* set.forEach(function(value, key, ownerSet){
        console.log(key+' '+value);
        console.log(ownerSet === set);
    }, this)*/ // Se le puede pasar el this si lo necesitara.
}
ejemploSet6();

//Convertir un set en array

function ejemploSet7(){
    let set = new Set([1,2,3,4,5,6]),
        array = [...set];
    console.log('array',array);
}
ejemploSet7();

//MAPS

function ejemploMap1(){
   let map = new Map();
    map.set('title', 'Understandings ES6');
    map.set('year', 2016);
    console.log('map', map);
    console.log('title', map.get('title'));
    console.log('year', map.get('year'));
    console.log('author', map.get('author')); //undefined
}
ejemploMap1();

function ejemploMap2(){
    let map = new Map();
    map.set('title', 'Understandings ES6');
    map.set('year', 2016);
    console.log('has title', map.has('title')); //true
    console.log('has author', map.has('author')); //false
}
ejemploMap2();

function ejemploMap3(){
    let map = new Map();
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
function ejemploMap4(){
    let map = new Map([['name', 'Nicolas'],['age', 25]]);
    console.log('has name', map.has('name')); //true
    console.log('name', map.get('name'));
    console.log('has age', map.has('age')); //true
    console.log('age', map.get('age'));
    console.log('size', map.size);
}
ejemploMap4();

//forEach

function ejemploMap5(){
    let map = new Map([['name', 'Nicolas'],['age', 25]]);
    map.forEach(function(value, key, ownerMap){ //value: valor de la posicion en el map, key: valor de la key, ownerMap: map desde el cual el valor es leido
        console.log(key+' '+value);  // name Nicolas
        console.log(ownerMap === map);
    });
}
ejemploMap5();



