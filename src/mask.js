import { ipBinarioADecimal } from "./conversiones";

const maskPrefixToBinary = (prefix) => {
    const binaryArray = []
    let i = 0;
    do {
        binaryArray.push(1);
        prefix -= 1;
        i += 1;
    } while (prefix > 0);

    let arrayLength = binaryArray.length;
    let pusher = 32 - arrayLength;

    do {
        binaryArray.push(0);
        pusher -= 1;
    } while (pusher > 0);

    return binaryArray.reverse();
}

const maskBinaryToIp = (binary) => {
    const maskIp = ipBinarioADecimal(binary);

    return maskIp;
}

/**
 * @function maskPrefixToIp
 * @param {number} prefix Netmask prefix to convert to ip. Prefijo de máscara de red a convertir en ip.
 * @returns {Array} - Network mask in Array format. Máscara de red en formato Array.          
 */
const maskPrefixToIp = (prefix) => {
    const binary = maskPrefixToBinary(prefix);

    const ipmask = maskBinaryToIp(binary);

    return ipmask;
}

export {
    maskPrefixToBinary,
    maskBinaryToIp,
    maskPrefixToIp,
}