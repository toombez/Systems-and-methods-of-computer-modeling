import { ShapeComponent, ShapeComponentType } from '../types'
import Point from './Point'

/**
 * Class for represent `point` abstraction
 */
class PointComponent extends Point implements ShapeComponent {
    shapeType: ShapeComponentType = 'POINT'
}

export default PointComponent
