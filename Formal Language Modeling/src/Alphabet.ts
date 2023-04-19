/**
 * Turing machine alphabet
 *
 * Contains blank symbol and all symbols from alphabet
 */
class Alphabet extends Set {
    /**
     * Default blank symbol for alphabet
     */
    public static readonly DEFAULT_BLANK_SYMBOL = '_'

    /**
     * Private blank symbol
     */
    private _blankSymbol: string = Alphabet.DEFAULT_BLANK_SYMBOL

    /**
     * Create new alphabet based on `set`
     *
     * @param symbols alphabet symbols
     * @param blankSymbol blank symbol
     */
    public constructor(
        symbols: string[],
        blankSymbol?: string
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
        if (!this.has(symbol)) {
            this.delete(this.blankSymbol)

            this.add(symbol)
        }

        this._blankSymbol = symbol
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
