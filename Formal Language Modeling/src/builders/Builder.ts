import { BuilderValidator } from '@types'

abstract class Builder<TElement> {
    /**
     * Element validator
     */
    protected abstract validator?: BuilderValidator

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
