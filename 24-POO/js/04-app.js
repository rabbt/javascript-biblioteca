//class declaration
class Cliente{

    #nombre;//PRIVADA

    constructor(nombre,saldo){
        this.#nombre = nombre; //metodo privado _
        this.saldo = saldo;
    }

    //metodos
    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es ${this.saldo}`;
    }

    //metodo estatico
    static bienvenida(){
        return `Bienvenido al  cajero`
    }
}

const juan = new Cliente('juan',200);
console.log(juan.mostrarInformacion());