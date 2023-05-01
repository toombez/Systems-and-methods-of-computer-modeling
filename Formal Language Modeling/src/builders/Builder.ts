abstract class Builder<
    TElement,
    TAddPart extends string,
    TSetPart extends string
> implements Builder<TElement, TAddPart, TSetPart> {
    /**
     * Build element
     */
    public abstract build(): TElement

    /**
     * Validate element
     */
    protected validate(): void {}
}

export default Builder
