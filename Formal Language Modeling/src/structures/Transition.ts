import { TransitionHandler } from '@types'

/**
 * Turing machine state transition
 */
class Transition {
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
