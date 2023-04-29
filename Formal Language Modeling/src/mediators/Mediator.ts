/**
 * Base mediator class
 */
abstract class Mediator<TElement = unknown, KTarget = unknown> {
    /**
     * Run element to target
     * @param element element to execute
     * @param target target
     */
    public abstract run(element: TElement, target: KTarget): void
}

export default Mediator
