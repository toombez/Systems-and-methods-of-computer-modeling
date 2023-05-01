import State from '@structures/State'
import Alphabet from '@structures/Alphabet'
import { TuringMachineStatus } from '@/types'
import Tape from './Tape'

class TuringMachine {
    public head = 0
    public currentState: State

    public status: TuringMachineStatus = 'PAUSE'

    public constructor(
        public alphabet: Alphabet,
        public states: State[],
    ) {
        this.currentState = states[0]
    }

    public run(tape: Tape) {
        const result = new Tape(...tape)
        this.status = 'RUNNING'

        while (this.status === 'RUNNING' && this.isInsideTape(tape)) {
            const symbol = result[this.head]
            const transition = this.currentState.get(symbol)

            if (!transition) {
                this.status = 'ERROR'
                return result
            }

            transition.run(this, result)
        }

        return result
    }

    protected isInsideTape(tape: Tape): boolean {
        return this.head >= 0 && this.head < tape.length
    }

    public setCurrentState(name: string) {
        const newState = this.states.find((state) => state.name === name)

        if (!newState) {
            throw new Error(`Cannot find state ${name}`)
        }

        this.currentState = newState
    }
}

export default TuringMachine
