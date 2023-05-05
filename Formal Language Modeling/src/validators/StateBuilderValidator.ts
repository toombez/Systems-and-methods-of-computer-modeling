import { BuilderValidator } from '@types';

class StateBuilderValidator implements BuilderValidator {
    validate(token?: string): void {
        if (token === undefined) {
            throw new Error('Token is required')
        }
    }
}

export default StateBuilderValidator
