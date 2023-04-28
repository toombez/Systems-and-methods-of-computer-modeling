import Transition from '@/structures/Transition'

/**
 * Turing machine state
 */
class State extends Map<string, Transition> {
    /**
     * Create state of turing machine
     * @param transitions state transitions
     */
    public constructor(
        public readonly name: string,
        ...transitions: Transition[]
    ) {
        super(transitions.map((transition) => {
            return [transition.symbol, transition]
        }))
    }

    /**
     * Set transition
     * @param symbol symbol for transition
     * @param transition transition to run
     * @returns updated state
     */
    public set(symbol: string, transition: Transition): this {
        if (symbol !== transition.symbol) {
            throw new Error(`You cannot use different symbols. (${symbol} !== ${transition.symbol})`)
        }

        super.set(symbol, transition)

        return this
    }
}

export default State
