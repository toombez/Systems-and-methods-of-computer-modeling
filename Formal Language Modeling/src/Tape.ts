class Tape extends Array<string> {
    public constructor(
        initialTape: Array<string> | string,
    ) {
        const tape = initialTape instanceof Array
            ? initialTape
            : initialTape.split('')

        super(...tape)
    }
}

export default Tape
