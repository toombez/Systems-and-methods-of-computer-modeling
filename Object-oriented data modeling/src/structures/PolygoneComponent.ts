import { ShapeComponent, ShapeComponentType } from '../types'
import Point from './Point'

/**
 * Class for representing `polygone` abstraction
 */
class PolygoneComponent implements ShapeComponent {
    shapeType: ShapeComponentType = 'POLYGONE'

    public constructor(
        public readonly points: Point[]
    ) {}

    /**
     * `Polygone` centroid point
     */
    public get centroid() {
        const pointsCount = this.points.length

        const summaryVector = this.points.reduce((vector, point) => {
            return new Point(vector.x + point.x, vector.y + point.y)
        }, new Point(0, 0))

        const x = summaryVector.x / pointsCount
        const y = summaryVector.y / pointsCount

        return new Point(x, y)
    }
}

export default PolygoneComponent
