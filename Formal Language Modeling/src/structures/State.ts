import Transition from '@structures/Transition'

/**
 * Turing machine state
 */
class State {
    /**
     * State transitions
     */
    public transitions: Map<string, Transition>

    /**
     * Create state of turing machine
     * @param token state name
     * @param transitions state transitions
     */
    public constructor(
        public readonly token: string,
        transitions: Transition[],
    ) {
        this.transitions = new Map(transitions.map((transition) => {
            return [transition.symbol, transition]
        }))
    }
}

export default State
