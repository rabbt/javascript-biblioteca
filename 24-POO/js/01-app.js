//class declaration
class Cliente{
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    //metodos
    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es ${this.saldo}`;
    }

    //metodo estatico
    static bienvenida(){
        return `Bienvenido al  cajero`
    }
}

const nietsnie = new Cliente('Juan',400);
console.log(nietsnie.mostrarInformacion());
console.log(Cliente.bienvenida() );

//class expresion
const Cliente2 = class {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
}

const nietsnie2 = new Cliente2('juan',400);
console.log(nietsnie2);