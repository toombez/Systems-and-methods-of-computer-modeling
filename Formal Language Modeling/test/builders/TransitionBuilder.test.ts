import TransitionBuilder from '@builders/TransitionBuilder'
import TransitionHandlerFactory from '@factories/TransitionHandlerFactory'
import { describe, expect, test } from '@jest/globals'

const handlersFactory = new TransitionHandlerFactory()

describe('Transition builder module', () => {
    test('should contain all passed handlers', () => {
        const builder = new TransitionBuilder('1')
        const handlers = [
            handlersFactory.createWriteTransition('0'),
            handlersFactory.createRightMoveTransition()
        ]

        const transition = builder
            .addHandler(handlers[0])
            .addHandler(handlers[1])
            .build()

        while (!transition.queue.isEmpty) {
            expect(handlers).toContain(transition.queue.dequeue())
        }
    })

    test('should build without errors', () => {
        const builder = new TransitionBuilder('1')

        expect(() => builder
            .addHandler(handlersFactory.createMoveTransition('RIGHT'))
            .build()
        ).not.toThrow()
    })
})
