import State from '@structures/State'
import Alphabet from '@structures/Alphabet'
import TransitionMediator from '@mediators/TransitionMediator'

class TuringMachine {
    public head = 0
    public currentState: State

    protected transitionMediator = new TransitionMediator()

    public constructor(
        public tape: string[],
        public alphabet: Alphabet,
        public states: State[],
    ) {
        this.currentState = states[0]
    }

    public run() {
        this.tape.forEach((symbol) => {
            const transition = this.currentState.get(symbol)

            if (!transition) {
                return
            }

            this.transitionMediator.run(transition, this)
        })

        return this.tape
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
