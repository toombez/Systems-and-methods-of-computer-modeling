import Alphabet from '@structures/Alphabet';

class AlphabetFactory {
    public createBinaryAlphabet() {
        return new Alphabet(['0', '1'])
    }
}

export default AlphabetFactory
