import TuringMachine from './TuringMachine'

class TuringMachineBuilder {
    private turingMachine = new TuringMachine()

    public addAlphabet(alphabet: string[]) {
        this.turingMachine.alphabet = alphabet
        return this
    }

    public addTape(tape: string[]) {
        this.turingMachine.tape = tape
        return this
    }

    public addStates(states: unknown[]) {
        this.turingMachine.states = states
        return this
    }

    public build() {
        return this.turingMachine
    }

    public reset() {
        this.turingMachine = new TuringMachine()
    }
}

export default TuringMachineBuilder
