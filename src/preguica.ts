import { Animal } from "./animal";
import { escalar } from "./escalar";
import { som } from "./som_animal";


class preguica extends Animal implements escalar {
    
    public escalar_arvores(): void {
        
    }

    constructor (nome: string, idade: number, escalar) {
        super(nome, idade)
        this.escalar_arvores = escalar;
    }

    public som(): void {
        console.log(`${this.nome} emite sons!`);
    }
    
    public escalar (): void {
        console.log(`${this.nome} Pode escalar arvores!`);
    }
}

export { preguica };