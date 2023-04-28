import TuringMachine, { Transition } from '@/structures/TuringMachine'
import TransitionFactory from './structures/TransitionFactory'

const factory = new TransitionFactory()

const tape = '0101_1110_0101'.split('')
const alphabet = new Set(['0', '1', '_'])
const states = [
    new Map<string, Transition[]>([
        ['0', [
            factory.createWriteTransition('1'),
            factory.createMoveTransition('RIGHT')
        ]],
        ['1', [
            factory.createWriteTransition('0'),
            factory.createMoveTransition('RIGHT')
        ]],
        ['_', [
            factory.createMoveTransition('RIGHT')
        ]],
    ]),
]

const tm = new TuringMachine(
    tape,
    alphabet,
    states,
)

console.log(tm.tape)

const result = tm.run()

console.log(result)
