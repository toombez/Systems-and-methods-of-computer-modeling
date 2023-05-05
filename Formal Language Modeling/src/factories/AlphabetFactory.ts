import { BINARY_ALPHABET, ENGLISH_ALPHABET, RUSSIAN_ALPHABET } from '@constants'
import Alphabet from '@structures/Alphabet'
import AlphabetBuilder from '@builders/AlphabetBuilder'

abstract class AlphabetFactory {
    /**
     * Create binary alphabet
     * @returns alphabet with binary and blank symbols
     */
    public static createBinaryAlphabet(): Alphabet {
        return new AlphabetBuilder()
            .setBlankSymbol('_')
            .setSymbols(BINARY_ALPHABET)
            .build()
    }

    /**
     * Create english alphabet
     * @returns alphabet with english and blank symbols
     */
    public static createEnglishAlphabet(): Alphabet {
        return new AlphabetBuilder()
            .setBlankSymbol('_')
            .setSymbols(ENGLISH_ALPHABET)
            .build()
    }

    /**
     * Create russina alphabet
     * @returns alphabet with russian and blank symbol
     */
    public static createRussianAlphabet(): Alphabet {
        return new AlphabetBuilder()
            .setBlankSymbol('_')
            .setSymbols(RUSSIAN_ALPHABET)
            .build()
    }
}

export default AlphabetFactory
