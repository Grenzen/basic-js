/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    chain: [],
    length: 0,
    getLength() {
        return this.length
    },

    addLink(value) {
        this.length += 1
        this.chain.push(`( ${value} )`)
        return this
    },

    removeLink(position) {
        if (position < 1 || typeof position !== 'number' || position > this.length) {
            this.chain = []
            this.length = 0
            throw new Error("You can't remove incorrect link!")
        } else {
            this.length -= 1
            this.chain.splice(position - 1, 1)
            return this
        }
    },

    reverseChain() {
        this.chain.reverse()
        return this
    },

    finishChain() {
        const finishChain = this.chain.join('~~')
        this.chain = []
        this.length = 0
        return finishChain
    },
};
