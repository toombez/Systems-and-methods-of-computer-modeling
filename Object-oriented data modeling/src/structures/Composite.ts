import { CompositeComponent } from '../types'

abstract class Composite implements CompositeComponent {
    public referenceToParent?: Composite
    public components: CompositeComponent[] =  []

    public constructor(
        public name: string
    ) {}

    public method(): void {
        this.components.forEach((component) => {
            component.method()
        })
    }

    public attach(component: CompositeComponent): void {
        component.detach()
        component.referenceToParent = this

        this.components.push(component)
    }

    public delete(component: CompositeComponent): void {
        const index = this.components.indexOf(component)

        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    public detach(): void {
        if (!this.referenceToParent) {
            return
        }

        this.referenceToParent.delete(this)
        this.referenceToParent = undefined
    }
}

export default Composite
