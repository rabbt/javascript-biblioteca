const aplicarDescuento = new Promise((resolve,reject) => {
    const descuento = false;

    if(descuento){
        resolve('descuento aplicado')
    }else {
        reject('no se puede aplicar descuento')
    }
})

aplicarDescuento.then(resultado => console.log(resultado))
.catch(error => console.log(error))

//aplicarDescuento

//console.log(aplicarDescuento);

//tres valores posibles
//fullfield el promise se cumplio
//reject - no se cumplio
//pending aun no sabe (aun no se cumple pero tampoco fue rechazado)