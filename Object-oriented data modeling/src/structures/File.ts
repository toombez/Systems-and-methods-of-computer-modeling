import { FSComponent } from '../types'
import Folder from './Folder'

abstract class File<T> implements FSComponent {
    public parentFolder?: Folder = undefined

    public constructor(
        public name: string,
        public content: T,
    ) {}

    public dir(indent: string = ''): void {
        console.log(`${indent}${this.name}`)
    }

    public detach(): void {
        if (this.parentFolder) {
            this.parentFolder.delete(this)
        }
    }

    public abstract open(): T
}

export default File
