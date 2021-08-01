import _ from 'lodash';
import { ipBinarioADecimal } from './conversiones';

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

export {
    findNetAddress,
    findBroadAddress
}