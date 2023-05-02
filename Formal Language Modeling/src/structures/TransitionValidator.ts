import { Validator } from '@types'

class TransitionValidator implements Validator {
    public validate(symbol?: string): void {
        if (symbol === undefined) {
            throw new Error('Symbol is required')
        }
    }
}

export default TransitionValidator
