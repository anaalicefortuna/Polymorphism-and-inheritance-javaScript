import { cachorro } from "./cachorro";
import { cavalo } from "./cavalo";
import { preguica} from "./preguica";
import { som } from "./som_animal";

const Cachorro = new cachorro ('Eredin', 4, true);
const Cavalo = new cavalo ('Carpeado', 9, true);
const Preguica = new preguica ('Larry', 12, true)

function som(animal: som) {
    animal.som();
}

som(Cavalo);
som(Cachorro);
som(Preguica);