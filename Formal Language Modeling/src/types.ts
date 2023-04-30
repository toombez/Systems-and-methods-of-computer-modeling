import TuringMachine from '@/structures/TuringMachine'
import { BINARY_ALPHABET, ENGLISH_ALPHABET, RUSSIAN_ALPHABET } from './constants'

/**
 * Any transition handler
 */
export type TransitionHandler = (machine: TuringMachine) => void

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

export type MachineState = 'RUNNING' | 'FINISH' | 'ERROR' | 'PAUSE'
