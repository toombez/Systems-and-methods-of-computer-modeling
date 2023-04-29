import { TransitionHandler } from '@/types'
import TuringMachine from '@/structures/TuringMachine'

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
        public symbol?: string,
        ...handlers: TransitionHandler[]
    ) {
        this.handlers = handlers
    }

    /**
     * Run transition handlers on machine
     * @param machine machine which to perform transition
     */
    public run(machine: TuringMachine) {
        this.handlers.forEach((handler) => handler(machine))
    }
}

export default Transition
