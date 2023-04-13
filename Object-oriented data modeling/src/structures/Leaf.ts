import { CompositeComponent } from '../types'
import Composite from './Composite'

abstract class Leaf implements CompositeComponent {
    public referenceToParent?: Composite = undefined

    public constructor(
        public name: string
    ) {}

    public abstract method(): void

    public detach(): void {
        if (this.referenceToParent) {
            this.referenceToParent.delete(this)
        }
    }
}

export default Leaf
