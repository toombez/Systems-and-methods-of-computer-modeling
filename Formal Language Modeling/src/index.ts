import TuringMachine from '@/structures/TuringMachine'
import TransitionFactory from '@/structures/TransitionFactory'
import Transition from '@/structures/Transition'

const factory = new TransitionFactory()

const tape = '0101_1110_0101'.split('')
const alphabet = new Set(['0', '1', '_'])

const tm = new TuringMachine(
    tape,
    alphabet,
    [
        new Map([
            [
                '0',
                new Transition('0', [
                    factory.createWriteTransition('1'),
                    factory.createMoveTransition('RIGHT')
                ])
            ],
            [
                '1',
                new Transition('1', [
                    factory.createWriteTransition('0'),
                    factory.createMoveTransition('RIGHT')
                ])
            ],
            [
                '_',
                new Transition('_', [
                    factory.createMoveTransition('RIGHT')
                ])
            ]
        ]),
    ]
)

console.log(tm.tape, tm.head)

const result = tm.run()

console.log(result, tm.head)
