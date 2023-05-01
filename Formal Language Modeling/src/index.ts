import TuringMachine from '@structures/TuringMachine'

import TransitionHandlersFactory from '@factories/TransitionHandlerFactory'

import StateBuilder from '@builders/StateBuilder'
import TransitionBuilder from '@builders/TransitionBuilder'
import TapeFactory from '@factories/TapeFactory'
import Alphabet from '@structures/Alphabet'

const handlersFactory = new TransitionHandlersFactory()
const tapeFactory = new TapeFactory()

const tape = tapeFactory.createFromString('01_00_110_101')
const alphabet = Alphabet.Factory.createBinaryAlphabet()
const states = [
    new StateBuilder('Q1')
        .addTransition(
            new TransitionBuilder('1')
                .addHandler(handlersFactory.createWriteTransition('0'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder('0')
                .addHandler(handlersFactory.createWriteTransition('1'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder('_')
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .addHandler(handlersFactory.createSetStatusTransition('FINISH'))
                .build()
        )
        .build(),
    new StateBuilder('Q2')
        .addTransition(
            new TransitionBuilder('1')
                .addHandler(handlersFactory.createWriteTransition('0'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder('0')
                .addHandler(handlersFactory.createWriteTransition('1'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder('_')
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .addHandler(handlersFactory.createSetStateTransition('FINISH'))
                .build()
        )
        .build()
]
const tm = new TuringMachine(
    alphabet,
    states,
)

console.log(tape)
const result = tm.run(tape)
console.log(result)
