import Alphabet from '@/structures/Alphabet'

export type Transition = (machine: TuringMachine) => void

class TuringMachine {
    public head = 0

    public currentState: Map<string, Transition>

    public constructor(
        public tape: string[],
        public alphabet: Set<string>,
        public states: Map<string, Transition>[],
    ) {
        this.currentState = states[0]
    }

    public run() {
        this.tape.forEach((symbol) => {
            const transition = this.currentState.get(symbol)

            if (!transition) {
                return
            }

            transition(this)
        })

        return this.tape
    }
}

export default TuringMachine
