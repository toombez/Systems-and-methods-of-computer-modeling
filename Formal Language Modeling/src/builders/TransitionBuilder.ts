import Transition from '@structures/Transition'
import TransitionValidator from '@validators/TransitionValidator'
import Builder from '@builders/Builder'

import { TransitionHandler, Builder as BuilderType } from '@types'

type TElement = Transition
type TAddPart = 'handler'
type TSetPart = 'symbol'

/**
 * Builder for transitions
 */
class TransitionBuilder
extends Builder<TElement>
implements BuilderType<TElement, TAddPart, TSetPart> {
    protected validator = new TransitionValidator()

    protected symbol?: string
    protected handlers: TransitionHandler[] = []

    /**
     * Add handler to `transition`
     * @param handler `transition` handler
     * @returns builder
     */
    public addHandler(handler: TransitionHandler): TransitionBuilder {
        this.handlers.push(handler)
        return this
    }

    /**
     * Set symbol to `transition`
     * @param symbol `transition` symbol
     * @returns builder
     */
    public setSymbol(symbol: string): TransitionBuilder {
        this.symbol = symbol
        return this
    }

    /**
     * Build transition
     * @returns transition
     */
    public build(): Transition {
        this.validate()

        return new Transition(this.symbol!, this.handlers)
    }

    /**
     * Validate transition
     */
    protected validate(): void {
        this.validator.validate(this.symbol)
    }
}

export default TransitionBuilder
