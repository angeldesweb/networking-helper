import { decimalABinario , binarioADecimal } from './conversiones';
import { networkFinder } from './ipFinders';
import { maskBinaryToIp, maskPrefixToBinary } from './mask';

const maskBinary = maskPrefixToBinary(29);

console.log(maskBinary);

const maskIp = maskBinaryToIp(maskBinary);
console.log(maskIp);


export {
    decimalABinario,
    binarioADecimal,
    networkFinder
}