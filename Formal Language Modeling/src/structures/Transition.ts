import { TransitionHandler } from '@types'
import Queue from '@structures/Queue'

/**
 * Turing machine state transition
 */
class Transition {
    /**
     * Transition handlers
     */
    public queue: Queue<TransitionHandler> = new Queue()

    /**
     * Create transition
     * @param symbol Symbol on which run transition
     * @param handlers handler for symbol
     */
    constructor(
        public readonly symbol: string,
        ...handlers: TransitionHandler[]
    ) {
        handlers.forEach((handler) => this.queue.enqueue(handler))
    }
}

export default Transition
