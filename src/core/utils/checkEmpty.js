export default function isEmptyOrNull(obj) {

    if (!obj) {
        return true;
    } 

    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }

    return true;
}