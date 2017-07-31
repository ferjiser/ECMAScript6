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