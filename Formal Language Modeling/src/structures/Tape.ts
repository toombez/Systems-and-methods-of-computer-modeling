class Tape extends Array<string> {
    public static fromString(tape: string) {
        return new this(...tape.split(''))
    }
}

export default Tape
