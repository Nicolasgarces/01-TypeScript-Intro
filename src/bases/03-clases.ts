import axios from "axios";
import { PokeapiResponse, Move } from '../interfaces/pokeapi-response.interface';


export class Pokemon {

    get imageUrl(): string{
        return `https://pokemon.com/${ this.id }.jpg`; // cuando se trabaja en metodos el this apounta a la instancia que se está creando
    }

    //el constructor se usa para poder inicializar las propiedades id y name
    constructor( 
        public readonly id: number, 
        public name: string
        //  public imageUrl; string,
        ) {}
    
    scream(){
        console.log(`${ this.name.toUpperCase()}!!!`);
    }

    speak(){
        console.log(`${ this.name}, ${this.name}`);
        
    }

    async getMoves(): Promise<Move[]>{
        //const moves =10;
        const {data} = await axios.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        console.log(data.moves);
        
        return data.moves;
    } 
    
    
        
}
export const charmanderrr = new Pokemon( 4, 'Charmanderrrr')
// console.log(charmander.imageUrl);
// charmander.scream();
// charmander.speak();

//charmander.id = 10; NO SE PODRÁ PORQUE TIENE EL READONLY (SOLO LECTURA )
//charmander.name = 'picachu'; SI SE PODRA PORQUE NO ESTÁ CONDICIONO

// console.log(charmanderrr.getMoves());
charmanderrr.getMoves();
