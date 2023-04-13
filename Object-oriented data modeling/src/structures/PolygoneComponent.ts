import Point from './Point'

/**
 * Class for representing `polygone` abstraction
 */
class PolygoneComponent {
    public constructor(
        public readonly points: Point[]
    ) {}

    /**
     * `Polygone` centroid point
     */
    private get centroid() {
        const pointsCount = this.points.length

        const summaryVector = this.points.reduce((vector, point) => {
            return new Point(vector.x + point.x, vector.y + point.y)
        }, new Point(0, 0))

        const x = summaryVector.x / pointsCount
        const y = summaryVector.y / pointsCount

        return new Point(x, y)
    }

    /**
     * Check is `PolygoneComponent`
     * @param component component to check
     * @returns is component `PolygoneComponent`
     */
    public static isPolygoneComponent(
        component: unknown
    ): component is PolygoneComponent {
        return component instanceof PolygoneComponent
    }
}

export default PolygoneComponent
