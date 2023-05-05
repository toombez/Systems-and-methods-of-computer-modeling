import { BuilderValidator } from '@types'

class TransitionValidator implements BuilderValidator {
    public validate(symbol?: string): void {
        if (symbol === undefined) {
            throw new Error('Symbol is required')
        }
    }
}

export default TransitionValidator
