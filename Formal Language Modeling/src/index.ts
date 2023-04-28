import TuringMachine from '@/structures/TuringMachine'
import TransitionFactory from '@/structures/TransitionFactory'
import Transition from '@/structures/Transition'
import State from '@/structures/State'
import Alphabet from './structures/Alphabet'
import Tape from './structures/Tape'

const factory = new TransitionFactory()

const tm = new TuringMachine(
    Tape.fromString('0101_1110_0101'),
    new Alphabet(['0', '1', '_']),
    [
        new State(
            'Q1',
            new Transition('0', [
                factory.createWriteTransition('1'),
                factory.createRightMoveTransition()
            ]),
            new Transition('1', [
                factory.createWriteTransition('0'),
                factory.createRightMoveTransition()
            ]),
            new Transition('_', [
                factory.createRightMoveTransition()
        ]))
    ]
)

console.log(tm.tape.join(''))

const result = tm.run()

console.log(result.join(''))
