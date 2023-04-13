import { SurfaceComponent, SurfaceComponentType } from '../types'
import LineComponent from './LineComponent'
import Point from './Point'

class RiverComponent extends LineComponent implements SurfaceComponent {
    surfaceType: SurfaceComponentType = 'RIVER'

    constructor(
        points: Point[],
        public readonly name: string,
    ) {
        super(points)
    }
}

export default RiverComponent
