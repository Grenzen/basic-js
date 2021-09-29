/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    const disNext = '--discard-next'
    const disPrev = '--discard-prev'
    const doubleNext = '--double-next'
    const doublePrev = '--double-prev'

    if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
    if (!arr.includes(disNext) &&
        !arr.includes(disPrev) &&
        !arr.includes(doubleNext) &&
        !arr.includes(doublePrev)) return arr

    let transformed = [...arr]

    transformed.forEach((el, i) => {
        if (i === 0 && el === disPrev ||
            i === 0 && el === doublePrev) {
            transformed.splice(i, 1)
        } else if (i === transformed.length - 1 && el === disNext ||
            i === transformed.length - 1 && el === doubleNext) {
            transformed.splice(i)
        } else if (el === disNext) {
            transformed.splice(i, 2)
        } else if (el === disPrev) {
            transformed.splice(i - 1, 2)
        } else if (el === doubleNext) {
            transformed.fill(el[i + 1], i, i + 1)
        } else if (el === doublePrev) {
            transformed.fill(arr[i - 1], i, i + 1)
        }
    })

    return transformed
}
