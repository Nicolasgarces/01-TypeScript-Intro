

export const pokemonIds= [1,20,25,30,54];

interface Pokemon {
    id: number;
    name: string;
    age: number; // una propiedad con el signo quiere decir que no es obligatoria
}

export const bulbasaur: Pokemon ={
    id: 1,
    name: 'bulbasaur',
    age: 2
}
export const charmander : Pokemon ={
    id: 4,
    name: "charmander",
    age: 1
}
                    //tipo de dato
export const pokemons: Pokemon[] = [];//pokemons es un array de tipo pokemon

pokemons.push(charmander, bulbasaur); 

console.log(pokemons);
