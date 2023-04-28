import State from '@/structures/State'
import Alphabet from '@/structures/Alphabet'

class TuringMachine {
    public head = 0
    public currentState: State

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

            transition.run(this)
        })

        return this.tape
    }
}

export default TuringMachine
