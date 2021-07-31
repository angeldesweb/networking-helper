const ipValidateAndFormat = ({address}) => {

    if(typeof(address) === 'string'){

        if(!address.split) return {error:'Ip no válida.'};

        if(address.split('.').length != 4) return {error:'Ip no válida.'};

        let addressStrArray = address.split('.');

        address = addressStrArray.map(i => Number(i));
        
        const invalid = _.findIndex(address, item => {return item > 255});

        if(invalid != -1) return {error:`El octeto en la posición número ${invalid + 1} es mayor a 255, No es un octeto válido`}

        return {address}
    }

    if(address.length === 4){

        const invalid = _.findIndex(address, item => {return item > 255});

        if(invalid != -1) return {error:`El octeto en la posición número ${invalid + 1} es mayor a 255, No es un octeto válido`}

        return {address}
    }

}

export {ipValidateAndFormat}