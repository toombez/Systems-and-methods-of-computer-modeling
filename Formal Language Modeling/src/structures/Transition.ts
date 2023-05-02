import TransitionBuilder from '@builders/TransitionBuilder'

import { TransitionHandler } from '@types'

/**
 * Turing machine state transition
 */
class Transition {
    /**
     * Transition builder
     */
    public static readonly Builder = TransitionBuilder

    /**
     * Create transition
     * @param symbol Symbol on which run transition
     * @param handlers handler for symbol
    */
    constructor(
        public readonly symbol: string,
        public handlers: TransitionHandler[] = [],
    ) {
        this.handlers = handlers
    }
}

export default Transition
