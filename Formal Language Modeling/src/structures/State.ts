import Transition from '@/structures/Transition'

/**
 * Turing machine state
 */
class State {
    /**
     * Transitions store
     */
    private store: Map<string, Transition> = new Map()

    /**
     * Create state of turing machine
     * @param name state name
     * @param transitions state transitions
     */
    public constructor(
        public readonly name: string,
        ...transitions: Transition[]
    ) {
        transitions.map(this.add)
    }

    /**
     * Add transition
     * @param transition transition to add
     * @returns updated state
     */
    public add(transition: Transition) {
        this.store.set(transition.symbol, transition)
    }

    /**
     * Get transition by symbol
     * @param symbol transition symbol
     * @returns transition
     */
    public get(symbol: string) {
        return this.store.get(symbol)
    }
}

export default State
