import { DEFAULT_BLANK_SYMBOL } from '@/constants'
import TuringMachine from '@/structures/TuringMachine'
import Tape from '@structures/Tape'
import {
    TuringMachineStatus,
    MoveTransitionDirection,
    TransitionHandler,
    TransitionHandlerFactory as TransitionHandlerFactoryInterface,
    Alphabet
} from '@types'

/**
 * Factory for transition handlers
 *
 * @param TAlphabet alphabet symbols union type exclude blank symbol
 * @param TBlankSymbol blank symbol
 * @param TState turing machine states union type
 */
class TransitionHandlerFactory<
    TAlphabet extends Alphabet<string[]> = string,
    TBlankSymbol extends string = typeof DEFAULT_BLANK_SYMBOL,
    TState extends string = string
> implements TransitionHandlerFactoryInterface<
    TAlphabet,
    TBlankSymbol,
    TState
> {
    public createMoveTransition(
        direction: MoveTransitionDirection,
        count: number = 1,
    ): TransitionHandler {
        return TransitionHandlerFactory.moveTransition.bind(
            this,
            direction,
            count,
        )
    }

    public createWriteTransition(symbol: TAlphabet | TBlankSymbol) {
        return TransitionHandlerFactory.writeTransition.bind(this, symbol)
    }

    public createSetStateTransition(state: TState): TransitionHandler {
        return TransitionHandlerFactory.setStateTransition.bind(this, state)
    }

    public createSetStatusTransition(
        status: TuringMachineStatus,
    ): TransitionHandler {
        return TransitionHandlerFactory.setStatusTransition.bind(this, status)
    }

    /**
     * Move head left
     * @param machine machine to run transition
     */
    protected static moveTransition(
        direction: MoveTransitionDirection,
        count: number,
        machine: TuringMachine,
    ) {
        machine.head += direction === 'LEFT' ? -count : count
    }

    /**
     * Write symbol to machine head
     * @param symbol symbol to write
     * @param machine machine to run transition
     */
    protected static writeTransition(
        symbol: string,
        machine: TuringMachine,
        tape: Tape,
    ) {
        const { head } = machine

        tape[head] = symbol
    }

    /**
     * Change machine state
     * @param name state name to change
     * @param machine machine to run transition
     */
    protected static setStateTransition(
        name: string,
        machine: TuringMachine,
    ) {
        machine.setCurrentState(name)
    }

    /**
     * Change machine state on machine
     * @param state state to set on machine
     * @param machine machine to run transition
     */
    protected static setStatusTransition(
        status: TuringMachineStatus,
        machine: TuringMachine,
    ) {
        machine.status = status
    }
}

export default TransitionHandlerFactory
