import Point from './Point'

/**
 * Class for represent `point` abstraction
 */
class PointComponent extends Point {
    /**
     * Check component is `PointComponent`
     * @param component component to check
     * @returns is component `PointComponent`
     */
    public static isPointComponent(
        component: unknown
    ): component is PointComponent {
        return component instanceof PointComponent
    }
}

export default PointComponent
