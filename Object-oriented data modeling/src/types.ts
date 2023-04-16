import Folder from './structures/Folder'

export interface FSComponent {
    /**
     * FS element name
     */
    name: string

    /**
     * Parent folder
     */
    parentFolder?: Folder

    /**
     * Detach FS element from folder
     */
    detach(): void

    /**
     * Dir cli command
     * @param indent display intent
     */
    dir(indent: string): void
}
