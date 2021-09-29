/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */

export default function getSeason(date) {
    if (date === undefined) {
        return `Unable to determine the time of year!`
    } else if (date instanceof Date === false) {
        throw new Error('Invalid date!')
    } else if (date.getUTCFullYear()) {
        console.log(date.getUTCFullYear())
        console.log(date.getFullYear())
        let month = date.getMonth()

        return month === 11 || month >= 0 && month <= 1 ?
            `winter` : month >= 2 && month <= 4 ?
                `spring` : month >= 5 && month <= 7 ?
                    `summer` : `autumn`
    }
}
