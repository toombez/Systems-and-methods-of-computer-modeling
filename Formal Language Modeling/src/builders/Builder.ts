/**
 * Base builder class
 */
abstract class Builder<T = unknown> {
    /**
     * Element to build
     */
    protected abstract element: T

    /**
     * Validate element and build it
     * @returns builded element
     */
    public build() {
        this.validate()
        return this.element
    }

    /**
     * Validate element
     */
    protected abstract validate(): void
}

export default Builder
