import _ from 'lodash';
//Función para validar direcciones ipv4 y dar formato para uso en las funciones desde donde se llama esta función.
const ipValidateAndFormat = (address) => {
//Validar que se reciba algún parámetro.
    if(!address) throw new Error('ERROR: No se recibió ningún argumento. No argument was received');

    //Condición cuando se recibe una cadena de texto.
    if(typeof(address) === 'string'){
        //Validar que la cadena tenga un formato de cuatro octetos "xxx.xxx.xxx.xxx"
        if(!address.split) throw new Error('ERROR: Debe ingresar una ip válida. Ejemplo "192.192.192.192"; You must enter a valid ip. Example "192.192.192.192".');
        if(address.split('.').length != 4) throw new Error('ERROR: Debe ingresar una ip válida. Ejemplo "192.192.192.192"; You must enter a valid ip. Example "192.192.192.192".');
        //Dividiendo el string en un arreglo de 4 elementos con cada octeto.
        let addressStrArray = address.split('.');
        //Convirtiendo los elementos de String a Number.
        address = addressStrArray.map(i => Number(i));
        //Validando que ningún octeto pase de 255
        const toHigh = _.findIndex(address, item => {return item > 255});

        if(toHigh != -1) throw new Error(`ERROR: El octeto en la posición número ${toHigh + 1} es mayor a 255, No es un octeto válido. The octet in position number ${toHigh + 1} is greater than 255, It is not a valid octet`);

        //Validando que ningún octeto sea negativo
        const toLittle = _.findIndex(address, item => {return item < 0});

        if(toLittle != -1) throw new Error(`ERROR: El octeto en la posición número ${toLittle + 1} es negativo, No es un octeto válido. The octet in position number ${toLittle + 1} is negative, it is not a valid octet.`);
        //Devolviendo el arreglo correcto;
        return address;
    }
    //Condición al recibir un arreglo
    if(address.length === 4){
        //Convirtiendo en un caso de recibir un arreglo de String.
        address = addressStrArray.map(i => Number(i));

        //Validando que ningún octeto pase de 255
        const toHigh = _.findIndex(address, item => {return item > 255});

        if(toHigh != -1) throw new Error(`ERROR: El octeto en la posición número ${toHigh + 1} es mayor a 255, No es un octeto válido. The octet in position number ${toHigh + 1} is greater than 255, It is not a valid octet`);

        //Validando que ningún octeto sea negativo
        const toLittle = _.findIndex(address, item => {return item < 0});

        if(toLittle != -1) throw new Error(`ERROR: El octeto en la posición número ${toLittle + 1} es negativo, No es un octeto válido. The octet in position number ${toLittle + 1} is negative, it is not a valid octet.`);
        //Devolviendo el arreglo correcto;
        return address;
    }

}

const maskValidate = (mask) => {
    //Validando que se reciben argumentos de
    if(!mask) throw new Error('ERROR: No se recibió ningún argumento. No argument was received');
    //validando que solo se reciba un prefijo de red
    if(typeof(mask) != 'number') throw new Error('ERROR: Prefijo de máscara inválido, tipo no admitido. Invalid mask prefix, type not supported.');
    //Validando que el prefijo no pase de 32 ni sea un número negativo.
    if(typeof(mask) === 'number'){
        if(mask > 32) throw new Error('ERROR: Prefijo de máscara inválido. Invalid mask prefix');

        if(mask < 0) throw new Error('ERROR: Prefijo de máscara inválido. Invalid mask prefix');

        return mask;
    }
}

export {ipValidateAndFormat,maskValidate}