import Transition from '@structures/Transition'
import TuringMachine from '@structures/TuringMachine'
import Mediator from '@mediators/Mediator'

class TransitionMediator extends Mediator<Transition, TuringMachine> {
    public run(transition: Transition, machine: TuringMachine): void {
        transition.handlers.forEach((handler) => handler(machine))
    }
}

export default TransitionMediator
