var saludos = 0;

function hi (name, surname){
    console.log('hola, soy ' + name + ' ' + surname);
    saludos ++;
}

function who(name1, sname1, name2, sname2){
    hi(name1, sname1);
    console.log('who are you?');
    hi(name2,sname2);
}
let nombre = 'Gabriele';
let apellido = 'Scano';

who(nombre, apellido, 'Ruben', 'Perez');
hi('rocio', 'cejudo')

console.log('se han producido ' + String(saludos) + ' saludos en total hoy.');

