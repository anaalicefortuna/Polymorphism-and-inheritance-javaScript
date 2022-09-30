import { Animal } from "./animal";
import { correr } from "./correr";
import { som } from "./som_animal";

class cavalo extends Animal implements correr, som {
    public Podecorrer : boolean;

    constructor (nome: string, idade: number, Podecorrer: boolean) {
        super(nome, idade)
        this.Podecorrer = Podecorrer;
    }

    public som(): void {
        console.log(`${this.nome} relincha!`);
    }
    
    public correr(): void {
        console.log(`${this.nome} Pode correr !`);
    }
}

export { cavalo };