import { Validator } from '@types'

abstract class Builder<
    TElement,
    TAddPart extends string,
    TSetPart extends string
> implements Builder<TElement, TAddPart, TSetPart> {
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
