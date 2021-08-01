import { ipDecimalABinario } from './conversiones';
import { maskPrefixToIp } from './mask';
import { findNetAddress , findBroadAddress } from './utils';
import { ipValidateAndFormat, maskValidate } from './validations';

/**
 * Ipv4 Address formats. String => 'xxx.xxx.xxx.xxx' | Array [xxx,xxx,xxx,xxx]
 * @typedef {object} AddressToFind
 * @property {(string|Array)} address - Ipv4 address to search for propierties; Dirección ipv4 a consultar.
 * @property {number} mask - Netmask prefix of the ipv4 address; Prefijo de máscara de red de la dirección a consultar.
 */

/**
 * @function networkFinder
 * @param {AddressToFind} arguments - Ipv4 address and netmask prefix to search. Dirección Ipv4 y préfijo de máscara de red a consultar.  
 * @returns {{address:Array,network:Array,broadcast:Array,netmask:Array,prefix:number,hosts:number,utilHosts:number}} A complete set of properties. Un completo esquema de propiedades.
 */
const networkFinder = ({address,mask}) => {

    const validAddress = ipValidateAndFormat(address);

    const validMask = maskValidate(mask);

    const ipMask = maskPrefixToIp(validMask);

    const bit = 32 - validMask;


    const hosts = Math.pow(2,bit);

    const utilHosts = hosts - 2;

    const binaryArray = ipDecimalABinario({octeto1:validAddress[0],octeto2:validAddress[1],octeto3:validAddress[2],octeto4:validAddress[3]});

    const networkAddress = findNetAddress(binaryArray,bit);

    const broadcastAddress = findBroadAddress(binaryArray,bit);

    return {address:validAddress,network:networkAddress,broadcast:broadcastAddress,netmask:ipMask,prefix:validMask,hosts,utilHosts};

}

const AddressToFind = {
    address:[192,192,192,192],
    mask:24
}

const ipv4Info = networkFinder(AddressToFind);

console.log(ipv4Info);

export {
    networkFinder,
    maskPrefixToIp
}