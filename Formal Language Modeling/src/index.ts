import TuringMachine, { Transition } from '@/structures/TuringMachine'

const tape = '0101_1110_0101'.split('')
const alphabet = new Set(['0', '1', '_'])
const states = [
    new Map<string, Transition>([
        ['0', (machine) => {
            const { tape, head } = machine

            tape[head] = '1'
            machine.head++
        }],
        ['1', (machine) => {
            const { tape, head } = machine

            tape[head] = '0'
            machine.head++
        }],
        ['_', (machine) => {
            machine.head++
        }],
    ]),
]

const tm = new TuringMachine(
    tape,
    alphabet,
    states,
)

console.log(tm.tape)

const result = tm.run()

console.log(result)
