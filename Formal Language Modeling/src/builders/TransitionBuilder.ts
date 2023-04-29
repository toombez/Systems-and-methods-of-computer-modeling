import Transition from '@/structures/Transition'
import Builder from '@builders/Builder'
import { TransitionHandler } from '@/types'

/**
 * Builder for transitions
 */
class TransitionBuilder extends Builder<Transition> {
    protected element: Transition = new Transition()

    /**
     * Create builder for transition
     * @param symbol transition symbol
     */
    public constructor() {
        super()
    }

    /**
     * Set symbol for transition
     * @param symbol transition symbol
     */
    public setSymbol(symbol: string) {
        this.element.symbol = symbol
        return this
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

    protected validate(): void {
        if (this.element.symbol === undefined) {
            throw new Error('Transition must have symbol')
        }
    }
}

export default TransitionBuilder
