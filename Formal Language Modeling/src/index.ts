import TuringMachine from '@structures/TuringMachine'
import AlphabetFactory from '@factories/AlphabetFactory'

import TransitionHandlersFactory from '@factories/TransitionHandlerFactory'

import StateBuilder from '@builders/StateBuilder'
import TransitionBuilder from '@builders/TransitionBuilder'
import TapeFactory from '@factories/TapeFactory'

const handlersFactory = new TransitionHandlersFactory()
const alphabetFactory = new AlphabetFactory()
const tapeFactory = new TapeFactory()

const state1 = new StateBuilder('Q1')
    .addTransition(
        new TransitionBuilder('1')
            .addHandler(handlersFactory.createWriteTransition('0'))
            .addHandler(handlersFactory.createRightMoveTransition())
            .build()
    )
    .addTransition(
        new TransitionBuilder('0')
            .addHandler(handlersFactory.createWriteTransition('1'))
            .addHandler(handlersFactory.createRightMoveTransition())
            .build()
    )
    .addTransition(
        new TransitionBuilder('_')
        .addHandler(handlersFactory.createChangeStateTransition('Q2'))
        .addHandler(handlersFactory.createRightMoveTransition())
        .build()
    )
    .build()
const state2 = new StateBuilder('Q2')
    .addTransition(
        new TransitionBuilder('1')
        .addHandler(handlersFactory.createWriteTransition('@'))
        .addHandler(handlersFactory.createChangeStateTransition('Q1'))
        .addHandler(handlersFactory.createRightMoveTransition())
        .build()
    )
    .addTransition(
        new TransitionBuilder('0')
            .addHandler(handlersFactory.createRightMoveTransition())
            .build()
    )
    .addTransition(
        new TransitionBuilder('_')
        .addHandler(handlersFactory.createRightMoveTransition())
        .build()
    )
    .build()

const tm = new TuringMachine(
    tapeFactory.createFromString('01_00_110_101'),
    alphabetFactory.createBinaryAlphabet(),
    [state1, state2]
)

console.log(tm.tape.join(''))

tm.run()

console.log(tm.tape.join(''))
