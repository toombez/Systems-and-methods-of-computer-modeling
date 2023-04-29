import { DEFAULT_BLANK_SYMBOL } from '@constants'
import AlphabetBuilder from '@builders/AlphabetBuilder'
import AlphabetFactory from '@factories/AlphabetFactory'

/**
 * Is a finite, non-empty set of tape alphabet symbols
 */
class Alphabet extends Set<string> {
    /**
     * Alphabet builder
     */
    public static readonly Builder = AlphabetBuilder

    /**
     * Alphabet factory
     */
    public static readonly Factory = AlphabetFactory

    /**
     * Default alphabet blank symbol
     */
    public static readonly DEFAULT_BLANK_SYMBOL = DEFAULT_BLANK_SYMBOL

    /**
     * Private blank symbol
     */
    private _blankSymbol: string = DEFAULT_BLANK_SYMBOL

    /**
     * Create new alphabet
     *
     * @param symbols alphabet symbols
     * @param blankSymbol blank symbol
     */
    constructor(
        symbols: Iterable<string>,
        blankSymbol: string = DEFAULT_BLANK_SYMBOL,
    ) {
        super([...symbols, blankSymbol])
        this.blankSymbol = blankSymbol
    }

    /**
     * Alphabet blank symbol
     */
    public get blankSymbol(): string {
        return this._blankSymbol
    }

    /**
     * Set blank symbol and remove previous from alphabet symbols
     */
    public set blankSymbol(symbol: string) {
        if (this.isBlankSymbol(symbol)) {
            return
        }

        if (!this.has(symbol)) {
            this.add(symbol)
        }

        const previousBlankSymbol = this.blankSymbol
        this._blankSymbol = symbol
        this.delete(previousBlankSymbol)
    }

    /**
     * Clear alphabet and add inside blank symbol
     */
    public clear(): void {
        const blankSymbol = this.blankSymbol

        super.clear()
        super.add(blankSymbol)
    }

    /**
     * Delete symbol from alphabet
     * @param symbol symbol to delete
     * @returns Returns true if an element in the Set existed and has been
     * removed, or false if the element does not exist.
     */
    public delete(symbol: string): boolean {
        if (this.isBlankSymbol(symbol)) {
            throw new Error(`Cannot delete blank symbol "${this.blankSymbol}"`)
        }

        return super.delete(symbol)
    }

    /**
     * Check symbol is blank
     * @param symbol symbol to check
     * @returns is blank symbol
     */
    protected isBlankSymbol(symbol: string): boolean {
        return symbol === this.blankSymbol
    }
}

export default Alphabet
