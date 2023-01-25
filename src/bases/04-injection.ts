import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interface';
import { PokeApiAdapter, PokeApiFetchAdapter, HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // TODO: inyectar dependencias
        private readonly http: HttpAdapter// la inyeccion de dependencias es agregarle a una clase una dependencia
    ) {}

    scream() {
        console.log(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        console.log(`${ this.name }, ${ this.name }`);
    }
               
    async getMoves(): Promise<Move[]> {
        // const { data } = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4')// con el this accedemos al http luego al metodo get de la clase PokeApiAdapter y le pasamos la url
        console.log( data.moves );
        
        return data.moves;
    }

}

const pokeApiAxios = new PokeApiAdapter(); //creamos una nueva instancia
const pokeApiFetch = new PokeApiFetchAdapter();
export const charmander = new Pokemon( 4, 'Charmander', pokeApiAxios );// pasamos como parametro la instancia nueva (PokeApiAdapter)

charmander.getMoves();