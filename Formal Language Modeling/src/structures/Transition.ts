import { TransitionHandler } from '@types'
import Queue from '@structures/Queue'
import TuringMachine from './TuringMachine'
import Tape from './Tape'

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

    public run(machine: TuringMachine, tape: Tape) {
        while (!this.queue.isEmpty) {
            const handler = this.queue.dequeue()

            handler?.(machine, tape)
        }
    }
}

export default Transition
