import Ejercicio5dListener from "./generated/Ejercicio5dListener.js";

export class CustomEjercicio5dListener extends Ejercicio5dListener {

    enterStat(ctx) {
        console.log(`Se detectó una: ${ctx.constructor.name}`);
    }

}