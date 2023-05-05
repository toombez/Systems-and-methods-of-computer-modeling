import { BuilderValidator } from '@types'

/**
 * Alphabet builder validator
 */
class AlphabetBuilderValidator implements BuilderValidator {
    validate(blankSymbol?: string): void {
        if (!blankSymbol) {
            throw new Error('Blank symbol is required')
        }
    }
}

export default AlphabetBuilderValidator
