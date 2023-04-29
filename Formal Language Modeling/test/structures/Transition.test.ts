import Transition from '@structures/Transition'
import { describe, test, expect } from '@jest/globals'
import TransitionHandlerFactory from '@factories/TransitionHandlerFactory'

const handlersFactory = new TransitionHandlerFactory()

describe('Transition module', () => {
    test('should symbol equals passed value', () => {
        const symbol = '1'
        const transition = new Transition(symbol)

        expect(transition.symbol).toEqual(symbol)
    })

    test('should contain all passed handlers', () => {
        const handlers = [
            handlersFactory.createRightMoveTransition(),
            handlersFactory.createWriteTransition('0')
        ]

        const transition = new Transition('1', ...handlers)

        transition.handlers.forEach((handler) => {
            expect(handlers).toContain(handler)
        })
    })
})
