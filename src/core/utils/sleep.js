
/**
 * "Завешивание" текущего потока на указанное количество миллисекунд
 *
 * @param {integer} millis Количество миллисекунд 
 */
export default function sleep(millis) {
    var date = new Date()
    var curDate = null
    do {
        curDate = new Date()
    }
    while (curDate - date < millis)
}