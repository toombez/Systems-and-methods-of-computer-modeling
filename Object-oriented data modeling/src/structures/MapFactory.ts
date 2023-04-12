import {
    MapLineElement,
    MapPoint,
    MapPointElement,
    MapPolygoneElement
} from '../types'

/**
 * Factory for map elements
 */
abstract class MapFactory {
    /**
     * Create `point` map element
     * @param point element position
     */
    public abstract createPointElement(
        point: MapPoint,
        ...args: unknown[]
    ): MapPointElement

    /**
     * Create `line` map element
     * @param points line points
     */
    public abstract createLineElement(
        points: MapPoint[],
        ...args: unknown[]
    ): MapLineElement

    /**
     * Create polygone map element
     * @param points polygone points
     */
    public abstract createPolygoneElement(
        points: MapPoint,
        ...args: unknown[]
    ): MapPolygoneElement
}

export default MapFactory
