import TuringMachine from '@structures/TuringMachine'

import TransitionHandlersFactory from '@factories/TransitionHandlerFactory'

import StateBuilder from '@builders/StateBuilder'
import TransitionBuilder from '@builders/TransitionBuilder'
import TapeFactory from '@factories/TapeFactory'
import Alphabet from '@structures/Alphabet'
import AlphabetFactory from '@factories/AlphabetFactory'

const handlersFactory = new TransitionHandlersFactory()
const tapeFactory = new TapeFactory()

const tape = tapeFactory.createFromString('01_00_110_101')
const alphabet = AlphabetFactory.createBinaryAlphabet()

const states = [
    new StateBuilder()
        .setToken('Q1')
        .addTransition(
            new TransitionBuilder()
                .setSymbol('1')
                .addHandler(handlersFactory.createWriteTransition('0'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder()
                .setSymbol('0')
                .addHandler(handlersFactory.createWriteTransition('1'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder()
                .setSymbol('_')
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .addHandler(handlersFactory.createSetStateTransition('Q2'))
                .build()
        )
        .build(),
    new StateBuilder()
        .setToken('Q2')
        .addTransition(
            new TransitionBuilder()
                .setSymbol('1')
                .addHandler(handlersFactory.createWriteTransition('0'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder()
                .setSymbol('0')
                .addHandler(handlersFactory.createWriteTransition('1'))
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .build()
        )
        .addTransition(
            new TransitionBuilder()
                .setSymbol('_')
                .addHandler(handlersFactory.createMoveTransition('RIGHT'))
                .addHandler(handlersFactory.createSetStatusTransition('FINISH'))
                .build()
        )
        .build()
]
const tm = new TuringMachine(
    alphabet,
    states,
)

console.log(tape.join(''))
const result = tm.run(tape)
console.log(result.join(''))
