import TuringMachine from '@structures/TuringMachine'
import { BINARY_ALPHABET, DEFAULT_BLANK_SYMBOL, ENGLISH_ALPHABET, RUSSIAN_ALPHABET } from '@constants'

/**
 * Any transition handler
 */
export type TransitionHandler = (machine: TuringMachine, tape: string[]) => void

/**
 * Move transition handler direction
 */
export type MoveTransitionDirection = 'LEFT' | 'RIGHT'

/**
 * Utility type for alphabet from readonly array
 */
export type Alphabet<T extends ReadonlyArray<string>> = T[number]

/**
 * Binary alphabet union type
 */
export type BinaryAlphabet = Alphabet<typeof BINARY_ALPHABET>

/**
 * English alphabet union type
 */
export type EnglishAlphaber = Alphabet<typeof ENGLISH_ALPHABET>

/**
 * Russian alphabet union type
 */
export type RussianAlphabet = Alphabet<typeof RUSSIAN_ALPHABET>

/**
 * Turing machine status
 */
export type TuringMachineStatus = 'RUNNING' | 'FINISH' | 'ERROR' | 'PAUSE'

/**
 * Interface for transition handler factories
 *
 * @param TAlphabet alphabet unit type
 * @param TBlankSymbol alphabet blank symbol
 * @param TStates states union type
 */
export interface TransitionHandlerFactory<
    TAlphabet extends Alphabet<string[]> = string,
    TBlankSymbol extends string = string,
    TState extends string = string,
> {
    /**
     * Create move transition handler
     * @param direction direction to move head
     * @param count count to move turing machine head
     * @returns move transition handler
     */
    createMoveTransition(
        direction: MoveTransitionDirection,
        count: number,
    ): TransitionHandler

    /**
     * Create write transition handler
     * @param symbol symbol to write
     * @returns write transition handler
     */
    createWriteTransition(symbol: TAlphabet | TBlankSymbol): TransitionHandler

    /**
     * Create set state transition handler
     * @param name state to set on machine
     * @returns set state transition handler
     */
    createSetStateTransition(state: TState): TransitionHandler

    /**
     * Create set status transition handler
     * @param state new machine state
     * @returns set status transition handler
     */
    createSetStatusTransition(status: TuringMachineStatus): TransitionHandler
}

/**
 * Builder part method names
 */
type BuilderMethodName<
    TMethod extends string = never,
    TPart extends string = never
> = `${Uncapitalize<TMethod>}${Capitalize<TPart>}`

/**
 * Builder
 * @param TElement builder result
 * @param TAddPart `add` methods
 * @param TSetPart `set` methods
 */
export type Builder<
    TElement = unknown,
    TAddPart extends string = never,
    TSetPart extends string = never
> = {
    [key in
        BuilderMethodName<'add', TAddPart>
        | BuilderMethodName<'set', TSetPart>
    ]: (...args: any[]) => Builder<TElement, TAddPart, TSetPart>
}

/**
 * Validator
 */
export interface BuilderValidator {
    /**
     * Validate builder element
     * @param args validation targets
     */
    validate(...args: any[]): void
}
