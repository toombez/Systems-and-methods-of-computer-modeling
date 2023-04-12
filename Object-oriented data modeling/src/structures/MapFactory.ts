import {
    MapLineElement,
    MapPoint,
    MapPointElement,
    MapPolygoneElement
} from '../types'

/**
 * Factory for map elements
 */
class MapFactory {
    /**
     * Create `point` map element
     * @param point element position
     */
    public createPointElement(point: MapPoint): MapPointElement {
        return {
            point,
            meta: { elementType: 'POINT' }
        }
    }

    /**
     * Create `line` map element
     * @param points line points
     */
    public createLineElement(points: MapPoint[]): MapLineElement {
        return {
            points,
            meta: { elementType: 'LINE' }
        }
    }

    /**
     * Create polygone map element
     * @param points polygone points. First and last points will be connected
     *
     * @example
     * // Creating polygone by three points
     * const factory = new MapFactory()
     *
     * factory.createPolygoneElement([
     *     ['1.292', '2.2'],
     *     ['1.46', '2.4'],
     *     ['1.47', '2.76'],
     * ])
     */
    public createPolygoneElement(points: MapPoint[]): MapPolygoneElement {
        return {
            points,
            meta: { elementType: 'POLYGONE' }
        }
    }
}

export default MapFactory
