
/**
 * Проверка на null и заполненность свойств
 *
 * @export
 * @param {Object} obj Объект произвольного типа
 * @returns {boolean} true если проверка пройдена, иначе false
 */
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