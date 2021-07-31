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

export {
    maskPrefixToBinary,
    maskBinaryToIp
}