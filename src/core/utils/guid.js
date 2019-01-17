function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}


/**
 * Генерация Guid в виде строки
 *
 * @export
 * @returns {string} Guid в виде строки
 */
export default function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
        s4() + '-' + s4() + s4() + s4();
}