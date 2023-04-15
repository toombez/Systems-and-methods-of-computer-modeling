import File from './File'

class TextFile extends File<string> {
    public open(): string {
        console.log(this.content)

        return this.content
    }
}

export default TextFile
