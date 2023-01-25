import axios from "axios";

// las interfaces se crean para decirle a los metodos o clases como lucen que metodos deben tener 
export interface HttpAdapter {  // creacion de una dependencia para inyectar en el constructor de  la clase pokemon

    get<T>( url: string):Promise<T>; 

}


// las clases que implemente el HttpAdapter debe contener el método get de la interface
export class PokeApiFetchAdapter implements HttpAdapter{

    async get<T>( url: string):Promise<T> {
        const resp = await fetch(url);
        const data: T = await resp.json();
        console.log('Con Fetch');
        
        
        return data;
    }


}


export class PokeApiAdapter implements HttpAdapter{
//hacemos el axios privado por si se llega a actualizar la forma de usarlo, así aparezca el error
    private readonly axios = axios;
    async get<T>( url: string): Promise<T> { //el get obtendra una url por parametro la cual llega de la funcion getMoves (04-injections.ts)
        //peticion get
        const {data} = await this.axios.get<T>(url);// usamos el this para acceder al axios, luego al get y llamamos la url que viene de getMoves()
       console.log('Con axios');
       
        return data;
    }

    async post(url: string, data: any){

        
    }

    async patch(url: string, data: any){


    }

    async delete(url: string, data: any){


    }
    
}