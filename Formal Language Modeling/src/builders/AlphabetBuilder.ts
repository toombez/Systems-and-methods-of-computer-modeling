import Alphabet from '@structures/Alphabet'
import Builder from '@builders/Builder'

/**
 * Alphabet builder
 */
class AlphabetBuilder extends Builder<Alphabet>{
    protected element: Alphabet = new Alphabet([])

    /**
     * Clear alphabet and set symbols
     * @param symbols alphabet symbols
     * @returns builder
     */
    public setSymbols(symbols: Iterable<string>) {
        this.element.clear()
        this.addSymbols(symbols)
        return this
    }

    /**
     * Add symbols to alphabet
     * @param symbols symbols to add
     * @returns builder
     */
    public addSymbols(symbols: Iterable<string>) {
        [...symbols].forEach(this.addSymbol.bind(this))
        return this
    }

    /**
     * Add symbol to alphabet
     * @param symbol symbol to add
     * @returns builder
     */
    public addSymbol(symbol: string): AlphabetBuilder {
        this.element.add(symbol)
        return this
    }

    /**
     * Delete symbol from alphabet
     * @param symbol symbol to delete
     * @returns builder
     */
    public deleteSymbol(symbol: string): AlphabetBuilder {
        this.element.delete(symbol)
        return this
    }

    /**
     * Change blank symbol
     * @param symbol blank symbol
     * @returns builder
     */
    public setBlankSymbol(symbol: string): AlphabetBuilder {
        this.element.blankSymbol = symbol
        return this
    }
}

export default AlphabetBuilder
