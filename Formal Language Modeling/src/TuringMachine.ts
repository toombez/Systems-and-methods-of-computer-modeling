class TuringMachine {
    private _tape: string[] = []
    private _alphabet: string[] = []
    private _states: unknown[] = []

    public set tape(tape: string[]) {
        this._tape = tape
    }

    public set alphabet(alphabet: string[]) {
        this._alphabet = alphabet
    }

    public set states(states: unknown[]) {
        this._states = states
    }
}

export default TuringMachine
