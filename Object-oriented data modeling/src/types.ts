import Composite from './structures/Composite'

export interface CompositeComponent {
    name: string
    referenceToParent?: Composite
    method(): void
    detach(): void
}
