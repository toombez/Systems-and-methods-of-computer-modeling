import TuringMachine from '@/structures/TuringMachine'
import { MachineState, MoveTransitionDirection, TransitionHandler } from '@types'

/**
 * Factory for transition handlers
 */
class TransitionHandlerFactory {
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
     * Change machine state
     * @param name state name to change
     * @param machine machine to run transition
     */
    protected static changeStateTransition(name: string, machine: TuringMachine) {
        machine.setCurrentState(name)
    }

    /**
     * Change machine state on machine
     * @param state state to set on machine
     * @param machine machine to run transition
     */
    public static changeMachineStateTransition(state: MachineState, machine: TuringMachine) {
        machine.machineState = state
    }

    /**
     * Create move transition handler
     * @param direction direction to move head
     * @returns move transition handler
     */
    public createMoveTransition(direction: MoveTransitionDirection): TransitionHandler {
        return TransitionHandlerFactory.moveTransition.bind(this, direction)
    }

    /**
     * Create write transition handler
     * @param symbol symbol to write
     * @returns write transition handler
     */
    public createWriteTransition(symbol: string) {
        return TransitionHandlerFactory.writeTransition.bind(this, symbol)
    }

    /**
     * Create left move transition handler
     * @returns left move transition handler
     */
    public createLeftMoveTransition(): TransitionHandler {
        return TransitionHandlerFactory.moveTransition.bind(this, 'LEFT')
    }

    /**
     * Create right move transition handler
     * @returns right move transition handler
     */
    public createRightMoveTransition(): TransitionHandler {
        return TransitionHandlerFactory.moveTransition.bind(this, 'RIGHT')
    }

    /**
     * Create change state transition handler
     * @param name state to set on machine
     * @returns change state transition handler
     */
    public createChangeStateTransition(name: string): TransitionHandler {
        return TransitionHandlerFactory.changeStateTransition.bind(this, name)
    }

    /**
     * Create change machine state transition handler
     * @param state new machine state
     * @returns change machine state transition handler
     */
    public createChangeMachineStateTransition(state: MachineState): TransitionHandler {
        return TransitionHandlerFactory.changeMachineStateTransition.bind(this, state)
    }
}

export default TransitionHandlerFactory
