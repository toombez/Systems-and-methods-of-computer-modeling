import Alphabet from '@structures/Alphabet'
import AlphabetValidator from '@validators/AlphabetBuilderValidator'
import Builder from '@builders/Builder'
import { Builder as BuilderType } from '@types'

type TElement = Alphabet
type TAddPart = 'symbols'
type TSetPart = 'blankSymbol' | 'symbols'

/**
 * Alphabet builder
 */
class AlphabetBuilder
extends Builder<TElement>
implements BuilderType<TElement, TAddPart, TSetPart> {
    protected validator = new AlphabetValidator()

    protected symbols = new Set<string>()
    protected blankSymbol?: string

    /**
     * Add symbols to alphabet
     * @param symbols symbols to add to alphabet
     * @returns builder
     */
    public addSymbols(symbols: Iterable<string>):AlphabetBuilder {
        [...symbols].forEach((symbol) => this.symbols.add(symbol))
        return this
    }

    /**
     * Clear symbols set and add new symbols to alphabet
     * @param symbols symbols to set to alphabet
     * @returns builder
     */
    public setSymbols(symbols: Iterable<string>) {
        this.symbols.clear();
        this.addSymbols(symbols)
        return this
    }

    /**
     * Set blank symbol
     * @param symbol blank symbol to set
     * @returns builder
     */
    public setBlankSymbol(symbol: string): AlphabetBuilder {
        this.blankSymbol = symbol
        return this
    }

    /**
     * Build alphabet
     * @returns alphabet
     */
    public build(): Alphabet {
        this.validate()
        return new Alphabet(this.symbols, this.blankSymbol)
    }

    /**
     * Validate alhabet
     */
    protected validate(): void {
        this.validator.validate(this.blankSymbol)
    }
}

export default AlphabetBuilder
