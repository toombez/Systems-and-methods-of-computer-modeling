import { TransitionHandler } from '@/types'
import TuringMachine from '@/structures/TuringMachine'

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
        private handlers: TransitionHandler[],
    ) {}

    /**
     * Run transition handlers on machine
     * @param machine machine which to perform transition
     */
    public run(machine: TuringMachine) {
        this.handlers.forEach((handler) => handler(machine))
    }
}

export default Transition
