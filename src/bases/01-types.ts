export let name = 'Nico';
export const age: number = 25;
export const isValid: boolean = true;

name = 'Maylon'

export const templateString = ` esto es un string
multilinea
que puede tener
" doble
' simples
inyectar valores ${name}
expresiones ${1 + 1},
numeros: ${ age}
booleanos: ${isValid}`

console.log(templateString);
