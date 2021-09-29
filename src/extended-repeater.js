/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let {repeatTimes, separator, addition, additionRepeatTimes, additionSeparator} = options

    separator = separator ? separator : '+'
    addition = (typeof addition !== 'undefined') ? addition : ''
    additionSeparator = additionSeparator ? additionSeparator : '|'

    repeatTimes = repeatTimes ? repeatTimes - 1 : 0
    additionRepeatTimes = additionRepeatTimes ? additionRepeatTimes - 1 : 0

    let additionString = addition + `${additionSeparator}${addition}`.repeat(additionRepeatTimes)
    return `${str}${additionString}` + `${separator}${str}${additionString}`.repeat(repeatTimes)
}

