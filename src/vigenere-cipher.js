/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
    constructor(bool) {
        this.direction = bool
    }

    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Incorrect arguments!')
        } else {
            return this.vigenere(message.toLowerCase(), key)
        }
    }

    decrypt(encryptedMessage, key) {
        if (!encryptedMessage || !key) {
            throw new Error('Incorrect arguments!')
        } else {
            return this.vigenere(encryptedMessage, key)
        }
    }

    vigenere(str, key) {
        let rep = key
        let result = []
        let spaceCounter = 0

        if (key.length < str.length) {
            rep = key.repeat(Math.ceil(str.length / key.length))
        }
        rep = rep.slice(0, str.length).toLowerCase().split('').map(el => el.charCodeAt() - 97)

        str.split('')
            .map(el => el.charCodeAt())
            .forEach((el, i) => {
                let curr = el

                if (el < 65 || el > 90 && el < 97 || el > 122) {
                    spaceCounter++
                }

                if (el > 96 && el < 123) {
                    curr = (el - 96) + rep[i - spaceCounter];

                    if (curr > 26) {
                        curr = curr - 26;
                    }
                    curr = curr + 64;
                }

                if (el > 64 && el < 91) {
                    curr = el - rep[i - spaceCounter]

                    if (curr < 65) {
                        curr = curr + 26
                    }
                }
                result.push(curr)
            })

        if (this.direction === false) {
            return result.map(el => String.fromCharCode(el)).reverse().join('')
        } else {
            return result.map(el => String.fromCharCode(el)).join('')
        }
    }
}
