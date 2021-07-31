import _ from 'lodash';
import { ipBinarioADecimal , ipDecimalABinario } from './conversiones';
import { ipValidateAndFormat } from './validate';


const findNetAddress = (binary,bits) => {

    const netAddress = _.fill(binary,0,0,bits);

    const networkDecimalAddress = ipBinarioADecimal(netAddress);

    return networkDecimalAddress;
}

const findBroadAddress = (binary,bits) => {

    const broadcastAddress = _.fill(binary,1,0,bits);

    const broadcastDecimalAddress = ipBinarioADecimal(broadcastAddress);

    return broadcastDecimalAddress;
}

const networkFinder = ({address,mask}) => {
    const bit = 32 - mask;

    const validAddress = ipValidateAndFormat({address});

    if(ipValidateAndFormat.error) return {error:ipValidateAndFormat.error};

    const ipAddress = validAddress.address;

    const binaryArray = ipDecimalABinario({octeto1:ipAddress[0],octeto2:ipAddress[1],octeto3:ipAddress[2],octeto4:ipAddress[3]});

    const networkAddress = findNetAddress(binaryArray,bit);
    const broadcastAddress = findBroadAddress(binaryArray,bit);

    return {address:validAddress.address,network:networkAddress,broadcast:broadcastAddress};

}

export {
    networkFinder
}