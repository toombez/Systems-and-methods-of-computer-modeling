import TuringMachine from '@/structures/TuringMachine'
import { MoveTransitionDirection, TransitionHandler } from '@types'

/**
 * Factory for transition handlers
 */
class TransitionFactory {
    /**
     * Move head left
     * @param machine machine to run transition
     */
    protected static moveTransition(
        direction: MoveTransitionDirection,
        machine: TuringMachine
    ) {
        machine.head += direction === 'LEFT' ? -1 : 1
    }

    /**
     * Write symbol to machine head
     * @param symbol symbol to write
     * @param machine machine to run transition
     */
    protected static writeTransition(symbol: string, machine: TuringMachine) {
        const { head, tape } = machine

        tape[head] = symbol
    }

    /**
     * Create move transition handler
     * @param direction direction to move head
     * @returns move transition handler
     */
    public createMoveTransition(direction: MoveTransitionDirection): TransitionHandler {
        return TransitionFactory.moveTransition.bind(this, direction)
    }

    /**
     * Create write transition handler
     * @param symbol symbol to write
     * @returns write transition handler
     */
    public createWriteTransition(symbol: string) {
        return TransitionFactory.writeTransition.bind(this, symbol)
    }

    /**
     * Create left move transition handler
     * @returns left move transition handler
     */
    public createLeftMoveTransition(): TransitionHandler {
        return TransitionFactory.moveTransition.bind(this, 'LEFT')
    }

    /**
     * Create right move transition handler
     * @returns right move transition handler
     */
    public createRightMoveTransition(): TransitionHandler {
        return TransitionFactory.moveTransition.bind(this, 'RIGHT')
    }
}

export default TransitionFactory
