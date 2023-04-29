import State from '@structures/State'
import Transition from '@structures/Transition'
import Builder from '@builders/Builder'

class StateBuilder extends Builder<State> {
    protected element: State

    /**
     * Create builder for state
     * @param name state name
     * @param transitions state transitions
     */
    public constructor(name: string, ...transitions: Transition[]) {
        super()
        this.element = new State(name, ...transitions)
    }

    /**
     * Add transition to state
     * @param transition transition to add
     * @returns builder
     */
    public addTransition(transition: Transition) {
        this.element.add(transition)
        return this
    }
}

export default StateBuilder
