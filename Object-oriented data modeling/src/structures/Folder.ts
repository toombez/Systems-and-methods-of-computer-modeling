import { FSComponent } from '../types'

class Folder implements FSComponent {
    public parentFolder?: Folder
    public components: FSComponent[] =  []

    public constructor(
        public name: string
    ) {}

    public dir(indent: string = ''): void {
        console.log(`${indent}${this.name}`)

        this.components.forEach((component) => {
            component.dir(indent + '..')
        })
    }

    /**
     * Attach FS element to folder
     * @param component component to delete
     */
    public attach(component: FSComponent): void {
        component.detach()
        component.parentFolder = this

        this.components.push(component)
    }

    /**
     * Delete FS element from components
     * @param component
     */
    public delete(component: FSComponent): void {
        const index = this.components.indexOf(component)

        if (index > -1) {
            this.components.splice(index, 1)
        }
    }

    public detach(): void {
        if (!this.parentFolder) {
            return
        }

        this.parentFolder.delete(this)
        this.parentFolder = undefined
    }
}

export default Folder
