import { BINARY_ALPHABET, ENGLISH_ALPHABET, RUSSIAN_ALPHABET } from '@constants'
import Alphabet from '@structures/Alphabet'

class AlphabetFactory {
    public createBinaryAlphabet(): Alphabet {
        return new Alphabet.Builder()
            .setSymbols(BINARY_ALPHABET)
            .build()
    }

    public createEnglishAlphabet(): Alphabet {
        return new Alphabet.Builder()
            .setSymbols(ENGLISH_ALPHABET)
            .build()
    }

    public createRussianAlphabet(): Alphabet {
        return new Alphabet.Builder()
            .setSymbols(RUSSIAN_ALPHABET)
            .build()
    }
}

export default AlphabetFactory
