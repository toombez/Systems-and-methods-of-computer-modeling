import Alphabet from '@/structures/Alphabet'
import { describe, test, expect } from '@jest/globals'

describe('Alphabet module', () => {
    const binarySymbols = ['0', '1'] as const

    test('should contain passed and blank symbols', () => {
        const symbols = binarySymbols

        const alphabet = new Alphabet(symbols)

        const mask = [...symbols, Alphabet.DEFAULT_BLANK_SYMBOL]
            .map((symbol) => alphabet.has(symbol))

        expect(mask).not.toContain(false)
    })

    test('should contain added symbol', () => {
        const symbols = binarySymbols
        const addedSymbol = '2'

        const alphabet = new Alphabet(symbols)
        alphabet.add(addedSymbol)

        expect(alphabet.has(addedSymbol)).toEqual(true)
    })

    test('should contain only blank symbol after clearing', () => {
        const symbols = binarySymbols
        const alphabet = new Alphabet(symbols)

        alphabet.clear()

        expect(alphabet.size).toEqual(1)
        expect(alphabet.has(Alphabet.DEFAULT_BLANK_SYMBOL)).toEqual(true)
    })
})
