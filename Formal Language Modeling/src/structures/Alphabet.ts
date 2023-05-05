import { DEFAULT_BLANK_SYMBOL } from '@constants'

/**
 * Is a finite, non-empty set of tape alphabet symbols
 */
class Alphabet {
    /**
     * Default alphabet blank symbol
     */
    public static readonly DEFAULT_BLANK_SYMBOL = DEFAULT_BLANK_SYMBOL

    /**
     * Alphabet symbols
     */
    public symbols: Set<string>

    /**
     * Blank symbol
     */
    public get blankSymbol() {
        return this._blankSymbol
    }

    /**
     * Create new alphabet
     *
     * @param symbols alphabet symbols
     * @param blankSymbol blank symbol
     */
    constructor(
        symbols: Iterable<string>,
        private _blankSymbol: string = Alphabet.DEFAULT_BLANK_SYMBOL
    ) {
        this.symbols = new Set(symbols)
        this.blankSymbol = _blankSymbol
    }

    public set blankSymbol(symbol: string) {
        this.symbols.delete(this.blankSymbol)

        this._blankSymbol = symbol
        this.symbols.add(symbol)
    }
}

export default Alphabet
