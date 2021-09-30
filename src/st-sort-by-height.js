import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
    const negativePositions = []
    arr.filter((el, idx) => el !== -1 ? el : negativePositions.push(idx))
    const newArr = arr.filter(el => el !== -1).sort((a, b) => a - b)
    negativePositions.forEach(el => newArr.splice(el, 0, -1))
    return newArr
}
