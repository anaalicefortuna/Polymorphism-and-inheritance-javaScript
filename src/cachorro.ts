import { Animal } from "./animal";
import { correr } from "./correr"
import { som } from "./som_animal"

class cachorro extends Animal implements correr {
    public Podecorrer: boolean;

    constructor (nome: string, idade: number, Podecorrer: boolean) {
        super (nome, idade)
        this.Podecorrer = Podecorrer;
    }

    public som (): void {
        console.log(`${this.nome} late!`);
    }

    public correr (): void {
        console.log(`${this.nome} Pode correr!`);
    }
}

export { cachorro };