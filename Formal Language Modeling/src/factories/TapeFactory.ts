import Tape from '@structures/Tape'

class TapeFactory {
    public createFromString(tape: string) {
        return new Tape(...tape)
    }
}

export default TapeFactory
