import { ShapeComponent, ShapeComponentType } from '../types'
import Point from './Point'

/**
 * Class for represent `line` abstraction
 */
class LineComponent implements ShapeComponent {
    shapeType: ShapeComponentType = 'LINE'

    public constructor(
        public readonly points: Point[]
    ) {}

    /**
     * Get `line` path middle point
     * @param integer is integer middle point
     * @returns middle point
     */
    public GetMiddlePoint(integer: boolean = true) {
        const middle = this.points.length / 2

        return integer ? Math.floor(middle) : middle
    }

    /**
     * Integer `line` path middle point
     */
    public get integerMiddlePoint(): number {
        return this.GetMiddlePoint(true)
    }

    /**
     * `Line` path middle point
     */
    public get middlePoint(): number {
        return this.GetMiddlePoint(false)
    }
}

export default LineComponent
