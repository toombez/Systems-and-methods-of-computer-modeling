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
    public handlers: TransitionHandler[]

    /**
     * Create transition
     * @param symbol Symbol on which run transition
     * @param handlers handler for symbol
     */
    constructor(
        public readonly symbol: string,
        ...handlers: TransitionHandler[]
    ) {
        this.handlers = handlers
    }

    public run(machine: TuringMachine, tape: Tape) {
        this.handlers.forEach((handler) => {
            handler(machine, tape)
        })
    }
}

export default Transition
