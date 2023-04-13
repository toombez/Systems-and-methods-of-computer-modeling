import Point from './Point'

/**
 * Class for represent `line` abstraction
 */
class LineComponent {
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

    /**
     * Check is `LineComponent`
     * @param component component to check
     * @returns is component `LineComponent`
     */
    public static isLineComponent(
        component: unknown
    ): component is LineComponent {
        return component instanceof LineComponent
    }
}

export default LineComponent
