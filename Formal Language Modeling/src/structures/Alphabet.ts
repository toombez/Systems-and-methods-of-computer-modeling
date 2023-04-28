/**
 * Is a finite, non-empty set of tape alphabet symbols
 */
class Alphabet extends Set<string> {
    /**
     * Default blank symbol for alphabet
     */
    public static readonly DEFAULT_BLANK_SYMBOL = '_'

    /**
     * Private blank symbol
     */
    private _blankSymbol!: string

    /**
     * Create new alphabet
     *
     * @param symbols alphabet symbols
     * @param blankSymbol blank symbol
     */
    public constructor(
        symbols: readonly string[],
        blankSymbol?: string,
    ) {
        super(symbols)

        this.blankSymbol = blankSymbol || Alphabet.DEFAULT_BLANK_SYMBOL
    }

    /**
     * Alphabet blank symbol
     */
    public get blankSymbol() {
        return this._blankSymbol
    }

    /**
     * Set blank symbol and remove previous from alphabet symbols
     */
    public set blankSymbol(symbol: string) {
        const previousBlankSymbol = this.blankSymbol
        this._blankSymbol = symbol

        if (previousBlankSymbol !== symbol) {
            this.delete(this.blankSymbol)

            this.add(symbol)
        }

    }

    /**
     * Clear alphabet and add inside blank symbol
     */
    public clear(): void {
        super.clear()

        this.add(Alphabet.DEFAULT_BLANK_SYMBOL)
    }
}

export default Alphabet
