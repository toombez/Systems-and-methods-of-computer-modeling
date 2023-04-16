import File from './File'

class ImageFile extends File<unknown> {
    public open(): unknown {
        console.log('cannot find program to open file')

        return
    }
}

export default ImageFile
