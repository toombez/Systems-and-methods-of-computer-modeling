import TuringMachine from '@/structures/TuringMachine'
import TransitionFactory from '@/structures/TransitionFactory'
import Transition from '@/structures/Transition'
import State from '@/structures/State'

const factory = new TransitionFactory()

const tape = '0101_1110_0101'.split('')
const alphabet = new Set(['0', '1', '_'])

const state = new State([
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

const tm = new TuringMachine(
    tape,
    alphabet,
    [
        state
    ]
)

console.log(tm.tape, tm.head)

const result = tm.run()

console.log(result, tm.head)
