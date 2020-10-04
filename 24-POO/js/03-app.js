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

//herencia
class Empresa extends Cliente{
    constructor(nombre,saldo,telefono,categoria){
        super(nombre,saldo); //herencia
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){
        return `Bienvenida al metod rescrito`
    }
}

const nietsnie = new Cliente('Juan',400);
const empresa = new Empresa('nietsnie', 500,3333333, 'programador' );
console.log(empresa);

console.log(Cliente.bienvenida())

