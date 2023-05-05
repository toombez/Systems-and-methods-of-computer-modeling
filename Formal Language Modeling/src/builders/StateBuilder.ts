import State from '@structures/State'
import Transition from '@structures/Transition'
import Builder from '@builders/Builder'

import { Builder as BuilderType } from '@types'
import StateBuilderValidator from '@validators/StateBuilderValidator'

type TElement = State
type TAddPart = 'transitions' | 'transition'
type TSetPart = 'token'

class StateBuilder
extends Builder<TElement>
implements BuilderType<TElement, TAddPart, TSetPart> {
    protected validator = new StateBuilderValidator()

    protected token?: string
    protected transitions = new Map<string, Transition> ()

    /**
     * Add transition to state
     * @param transition transition to add
     * @returns builder
     */
    public addTransition(transition: Transition) {
        this.transitions.set(transition.symbol, transition)
        return this
    }

    /**
     * Add transitions to state
     * @param transitions transitions to add
     * @returns builder
     */
    public addTransitions(...transitions: Transition[]) {
        transitions.forEach(this.addTransition)
        return this
    }

    /**
     * Set state token
     * @param token token to set for state
     * @returns builder
     */
    public setToken(token: string) {
        this.token = token
        return this
    }

    public build(): State {
        this.validate()

        return new State(this.token!, [...this.transitions.values()])
    }

    protected validate(): void {
        this.validator.validate(this.token)
    }
}

export default StateBuilder
