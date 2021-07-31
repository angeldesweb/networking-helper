
const binarioADecimal = (binario) => {
    let i = 0;
    let decimal = 0;
    binario.forEach(number => {
        decimal = decimal + number * Math.pow(2,i);
        i++;
    });
    return decimal
}

const ipDecimalABinario = ({octeto1,octeto2,octeto3,octeto4}) => {

    const oct1 = decimalABinario(octeto1);
    const oct2 = decimalABinario(octeto2);
    const oct3 = decimalABinario(octeto3);
    const oct4 = decimalABinario(octeto4);

    const binary = _.concat(oct4, oct3, oct2, oct1);

    return binary;

}

const decimalABinario = (numero) => {
    let binario = []
    let resto;
    if(numero % 2 === 0){
        resto = 0
    }
    if(numero % 2 > 0){
        resto = 1
    }
    let resultado = numero;
    binario.push(resto);
    do {
        resultado = Math.floor(resultado / 2);
        resto = resultado % 2;
        binario.push(resto);
    } while (resultado >= 2);
    if(binario.length < 8){
        do {
            binario.push(0)
        } while (binario.length !== 8);
    }
    binario = binario;
    return binario
}

const ipBinarioADecimal = (array) => {
    const octeto1 = _.slice(array,0,8);
    const octeto2 = _.slice(array,8,16);
    const octeto3 = _.slice(array,16,24);
    const octeto4 = _.slice(array,24,32);

    const Octeto1Decimal = binarioADecimal(octeto1);
    const Octeto2Decimal = binarioADecimal(octeto2);
    const Octeto3Decimal = binarioADecimal(octeto3);
    const Octeto4Decimal = binarioADecimal(octeto4);

    const address = _.concat(Octeto4Decimal,Octeto3Decimal,Octeto2Decimal,Octeto1Decimal);

    return address;
}

export {
    decimalABinario,
    binarioADecimal,
    ipBinarioADecimal,
    ipDecimalABinario
}