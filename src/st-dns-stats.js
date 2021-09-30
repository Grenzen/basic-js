/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    const dnsStatsObj = {}
    domains.forEach(el => {
        let helperStr = ''
        return el.split('.').reverse().forEach((el) => {
            helperStr += `.${el}`
            !dnsStatsObj.hasOwnProperty(helperStr) ? dnsStatsObj[helperStr] = 1 : dnsStatsObj[helperStr] += 1
        })
    })
    return dnsStatsObj
}
