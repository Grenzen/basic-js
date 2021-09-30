import {NotImplementedError} from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const length = `${n}`.length
  const arr = Array(length)
  return Math.max(...arr.fill(n, 0, length).map((el, idx) =>
      +`${el}`
          .split('')
          .filter((el, id) => id !== idx)
          .join('')))
}
