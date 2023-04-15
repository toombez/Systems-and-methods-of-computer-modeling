import Folder from './Folder'
import TextFile from './TextFile'

class OS {
    public fs = new Folder('/')

    constructor() {
        const varFolder = new Folder('var')
        const etcFolder = new Folder('etc')
        const userFolder = new Folder('user')
        const rootUserFolder = new Folder('root')

        const file1 = new TextFile('f1', 'lorem3')
        const file2 = new TextFile('f2', 'lorem2')
        const file3 = new TextFile('f3', 'lorem1')

        this.fs.attach(varFolder)
        this.fs.attach(etcFolder)
        this.fs.attach(userFolder)
        userFolder.attach(rootUserFolder)

        etcFolder.attach(file1)
        rootUserFolder.attach(file2)
        rootUserFolder.attach(file3)

        console.log('Input command:')

        this.initStdin()
    }

    private initStdin() {
        process.stdin.on('data', (data) => {
            const command = data.toString().toLowerCase()

            // TODO: change to check by equals
            // Best solution will use `strategy` pattern
            if (command.includes('dir')) {
                this.fs.dir('')
            }
        })
    }
}

export default OS
