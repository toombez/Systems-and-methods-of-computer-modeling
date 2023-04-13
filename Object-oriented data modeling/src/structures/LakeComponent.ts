import { SurfaceComponent, SurfaceComponentType } from '../types'
import Point from './Point'
import PolygoneComponent from './PolygoneComponent'

class LakeComponent extends PolygoneComponent implements SurfaceComponent {
    surfaceType: SurfaceComponentType = 'LAKE'

    constructor(
        points: Point[],
        public readonly name: string
    ) {
        super(points)
    }
}

export default LakeComponent
