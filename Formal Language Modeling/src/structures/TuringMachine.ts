import State from '@structures/State'
import Alphabet from '@structures/Alphabet'
import TransitionMediator from '@mediators/TransitionMediator'
import { MachineState } from '@/types'

class TuringMachine {
    public head = 0
    public currentState: State

    public machineState: MachineState = 'PAUSE'

    protected transitionMediator = new TransitionMediator()

    public constructor(
        public tape: string[],
        public alphabet: Alphabet,
        public states: State[],
    ) {
        this.currentState = states[0]
    }

    public run() {
        this.machineState = 'RUNNING'
        while (this.machineState === 'RUNNING') {
            const symbol = this.tape[this.head]
            const transition = this.currentState.get(symbol)

            if (!transition) {
                this.machineState = 'FINISH'
                return
            }

            this.transitionMediator.run(transition, this)
        }
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
