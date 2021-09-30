/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    const resultArr = []
    let counter = 0
    let currentChar

    str.split('').map((el, idx) => {
        if (idx === 0) currentChar = el
        if (el === currentChar) counter++
        if (el !== currentChar) {
            resultArr.push([counter, currentChar])
            currentChar = el
            counter = 1
        }
        if (idx === str.length - 1) resultArr.push([counter, currentChar])
    })
    return resultArr.flat(1).filter(el => el !== 1).join('')
}
