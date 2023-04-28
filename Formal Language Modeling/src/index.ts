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
        new State([
            new Transition('0', [
                factory.createWriteTransition('1'),
                factory.createMoveTransition('RIGHT')
            ]),
            new Transition('1', [
                factory.createWriteTransition('0'),
                factory.createMoveTransition('RIGHT')
            ]),
            new Transition('_', [
                factory.createMoveTransition('RIGHT')
            ])
        ])
    ]
)

console.log(tm.tape, tm.head)

const result = tm.run()

console.log(result, tm.head)
