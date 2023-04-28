import TuringMachine from '@/structures/TuringMachine'

/**
 * Any transition handler
 */
export type TransitionHandler = (machine: TuringMachine) => void

/**
 * Move transition handler direction
 */
export type MoveTransitionDirection = 'LEFT' | 'RIGHT'
