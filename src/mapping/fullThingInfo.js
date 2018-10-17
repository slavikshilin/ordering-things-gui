import thingType from '../types/thingType';
import bootParams from '../types/boot/bootParams';
import clothesParams from '../types/clothes/clothesParams';
import bagParams from '../types/bag/bagParams';
import accessorizeParams from '../types/accessorize/accessorizeParams';

export function getThingParams(type) {
    if (type === thingType.BOOT) {
        return bootParams;
    } else if (type === thingType.CLOTHES) {
        return clothesParams;
    } else if (type === thingType.BAG) {
        return bagParams;
    } else if (type === thingType.ACCESSORIZE) {
        return accessorizeParams;
    } else {
        return null;
    }  
}

export function getFullThingInfo(thingInfo) {
    const params = getThingParams(thingInfo.type);
    let result = {};

    for (var key in params) {
        if ((thingInfo[key]) && (key !== 'type')) {
            result[key] = {};
            result[key].name = params[key].Text;
            result[key].value = thingInfo[key];    
        }
    }

    return result;
}