import Transition from '@/structures/Transition'
import Builder from '@builders/Builder'
import { TransitionHandler } from '@/types'

/**
 * Builder for transitions
 */
class TransitionBuilder extends Builder<Transition> {
    protected element: Transition

    /**
     * Create builder for transition
     * @param symbol transition symbol
     */
    public constructor(symbol: string, ...handlers: TransitionHandler[]) {
        super()
        this.element = new Transition(symbol)

        handlers.forEach(this.addHandler)
    }

    /**
     * Add handler to transition
     * @param handler handler to add to transition
     * @returns builded transition
     */
    public addHandler(handler: TransitionHandler): TransitionBuilder {
        this.element.handlers.push(handler)
        return this
    }
}

export default TransitionBuilder
