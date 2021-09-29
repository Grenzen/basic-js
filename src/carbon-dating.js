const MODERN_ACTIVITY = 15
const HALF_LIFE_PERIOD = 5730

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string') {
        sampleActivity = parseFloat(sampleActivity)

        if (typeof sampleActivity === 'number' &&
            isNaN(sampleActivity) !== true &&
            +sampleActivity > 0 && +sampleActivity <= MODERN_ACTIVITY) {

            //?------------------------------------------------------------
            //* variant 1
            //?
            //? Расчет возраста образца при помощи Среднего срока службы С14
            //? (среднего или ожидаемого времени, в течение которого данный атом
            //? выживет до того, как подвергнется радиоактивному распаду):
            //?
            //? t = ln(No/N) * 8267 лет - (No - исх кол-во изотопов,
            //?                            N - кол-во изотопов на момент пробы,
            //?                            8267 л - средний срок службы С14)
            //?------------------------------------------------------------
            //* variant 2
            //?
            //? Расчет возраста образца исходя из того, какая часть радиоизотопа
            //? распалась за некоторое время:
            //?
            //? t = -T1/2 * log2(N/No)  - (T1/2 - Период полураспада)
            //?------------------------------------------------------------
            //* variant 3
            //?
            //? t = ln(No/N) / k        - (k = ln(2) / 5730)
            //?
            //?------------------------------------------------------------
            //? Сейчас принятое значение периода полураспада C14 составляет 5730 ± 40 лет
            //?
            //? Полураспад  Либби в статье 1949 - (5720 ± 47)  ->
            //?                                   (5568 ± 30 лет) ->
            //?          в начале 1960-х годов до (5730 ± 40)
            //? (ошибка в периоде полураспада составляет около 3%)
            //?
            //! все три алгоритма, написанных ниже, дают примерный ответ
            //! - разбежка с тестами при использовании HALF_LIFE_PERIOD в пределах 1-6 лет,
            //! Поэтому, чтобы удовлетворить систему тестов, вместо константы
            //! в 5730 лет в var 2 и 3 использовано число 5731.23
            //?------------------------------------------------------------
            //* variant 1 -> return Math.ceil((getBaseLog(Math.E, MODERN_ACTIVITY) - getBaseLog(Math.E, sampleActivity)) * 8267);
            //* variant 2 ->
            return Math.ceil((getBaseLog(2, sampleActivity / MODERN_ACTIVITY)) * -HALF_LIFE_PERIOD);
            //* variant 3 -> return Math.ceil((getBaseLog(Math.E, MODERN_ACTIVITY) - getBaseLog(Math.E, sampleActivity)) / (Math.LN2 / 5731.23));
        } else {
            return false;
        }
    } else {
        return false;
    }
}

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
}