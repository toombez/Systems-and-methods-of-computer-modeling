import { BINARY_ALPHABET, ENGLISH_ALPHABET, RUSSIAN_ALPHABET } from '@constants'
import Alphabet from '@/structures/Alphabet'
import { describe, it, expect } from '@jest/globals'

describe('Alphabet module', () => {
    describe('Alphabet structure', () => {
        it('should create alphabet with only blank symbol', () => {
            const alphabet = new Alphabet([])

            expect(alphabet.has(Alphabet.DEFAULT_BLANK_SYMBOL)).toBe(true)
            expect(alphabet.size).toBe(1)
        })

        it('should throw a error on deleting blank symbol', () => {
            const alphabet = new Alphabet([])

            expect(() => alphabet.delete(Alphabet.DEFAULT_BLANK_SYMBOL)).toThrow()
        })

        it('should not throw error on change blank symbol', () => {
            const alphabet = new Alphabet([])
            const newBlankSymbol = '@'

            expect(() => alphabet.blankSymbol = newBlankSymbol).not.toThrow()
            expect(alphabet.blankSymbol).toBe(newBlankSymbol)
        })

        it('should delete default blank symbol on passing new to constructor', () => {
            const blankSymbol = '|'
            const alphabet = new Alphabet([], blankSymbol)

            expect(alphabet.has(Alphabet.DEFAULT_BLANK_SYMBOL)).toBe(false)
            expect(alphabet.blankSymbol).toBe(blankSymbol)
            expect(alphabet.size).toBe(1)
        })

        it('should delete previous blank symbol on changing it', () => {
            const blankSymbol = '@'
            const alphabet = new Alphabet([])

            alphabet.blankSymbol = blankSymbol

            expect(alphabet.has(Alphabet.DEFAULT_BLANK_SYMBOL)).toBe(false)
            expect(alphabet.blankSymbol).toBe(blankSymbol)
            expect(alphabet.size).toBe(1)
        })

        it('shound not throw error on clearing', () => {
            const alphabet = new Alphabet([])

            expect(() => alphabet.clear()).not.toThrow()
        })

        it('should have only blank symbol on clearing', () => {
            const alphabet = new Alphabet([])
            const previousBlankSymbol = alphabet.blankSymbol

            alphabet.clear()

            expect(alphabet.size).toBe(1)
            expect(alphabet.has(previousBlankSymbol)).toBe(true)
        })

        it('should have previous blank symbol after clearing', () => {
            const alphabet = new Alphabet([], '@')
            const { blankSymbol } = alphabet

            alphabet.clear()

            expect(alphabet.blankSymbol).toBe(blankSymbol)
            expect(alphabet.size).toBe(1)
        })

        it('should contain passed symbols to constructor', () => {
            const symbols = ['1', '2', '3']
            const alphabet = new Alphabet(symbols)

            symbols.forEach((symbol) => expect(alphabet.has(symbol)).toBe(true))
        })

        it ('should create add symbols passed string', () => {
            const symbols = '123'
            const alphabet = new Alphabet(symbols)

            symbols.split('').map((symbol) => expect(alphabet.has(symbol)).toBe(true))
        })

        it('should create alphabet from two others alphabets', () => {
            const alphabet1Symbol = '1'
            const alphabet2Symbol = '2'

            const alphabet1 = new Alphabet(alphabet1Symbol)
            const alphabet2 = new Alphabet(alphabet2Symbol)

            const alphabet = new Alphabet([...alphabet1, ...alphabet2])

            expect(alphabet.has(alphabet1Symbol)).toBe(true)
            expect(alphabet.has(alphabet2Symbol)).toBe(true)
        })

        it('should add symbol', () => {
            const alphabet = new Alphabet([])
            const newSymbol = '1'

            alphabet.add(newSymbol)

            expect(alphabet.has(newSymbol)).toBe(true)
        })

        it('shound not change symbols after add new if it contains before', () => {
            const symbol = '1'
            const alphabet = new Alphabet([symbol])

            const previousSize = alphabet.size
            alphabet.add(symbol)
            const newSize = alphabet.size

            expect(alphabet.has(symbol)).toBe(true)
            expect(previousSize).toBe(newSize)
        })

        it('should delete symbol', () => {
            const symbol = '1'
            const alphabet = new Alphabet(symbol.split(''))

            alphabet.delete(symbol)

            expect(alphabet.has(symbol)).toBe(false)
            expect(alphabet.size).toBe(1)
        })
    })

    describe('Alphabet builder', () => {
        it('should return alphabet after build', () => {
            const alphabet = new Alphabet.Builder()
                .build()

            expect(alphabet).toBeInstanceOf(Alphabet)
        })

        it('should clear alphabet before set symbols', () => {
            const initSymbols = 'abc'.split('')
            const symbols = '123'.split('')
            const alphabet = new Alphabet.Builder()
                .addSymbols(initSymbols)
                .setSymbols(symbols)
                .build()

            initSymbols.forEach((symbol) => expect(alphabet.has(symbol)).toBe(false))
            symbols.forEach((symbol) => expect(alphabet.has(symbol)).toBe(true))
        })

        it('should change blank symbol', () => {
            const blankSymbol = '@'
            const alphabet = new Alphabet.Builder()
                .setBlankSymbol(blankSymbol)
                .build()

            expect(alphabet.size).toBe(1)
            expect(alphabet.has(blankSymbol)).toBe(true)
        })
    })

    describe('Alphabet factory', () => {
        it('should contain only binary and blank symbols', () => {
            const alphabet = Alphabet.Factory.createBinaryAlphabet()

            BINARY_ALPHABET.forEach((symbol) => expect(alphabet.has(symbol)).toBe(true))
            expect(alphabet.size).toBe(BINARY_ALPHABET.length + 1)
        })

        it('should contain only english and blank symbols', () => {
            const alphabet = Alphabet.Factory.createEnglishAlphabet()

            ENGLISH_ALPHABET.forEach((symbol) => expect(alphabet.has(symbol)).toBe(true))
            expect(alphabet.size).toBe(ENGLISH_ALPHABET.length + 1)
        })

        it('should contain only russian and blank symbols', () => {
            const alphabet = Alphabet.Factory.createRussianAlphabet()

            RUSSIAN_ALPHABET.forEach((symbol) => expect(alphabet.has(symbol)).toBe(true))
            expect(alphabet.size).toBe(RUSSIAN_ALPHABET.length + 1)
        })
    })
})
