import { Validator } from '@types'

abstract class Builder<TElement> {
    /**
     * Element validator
     */
    protected abstract validator?: Validator

    /**
     * Build element
     */
    public abstract build(): TElement

    /**
     * Validate element
     */
    protected abstract validate(): void
}

export default Builder
