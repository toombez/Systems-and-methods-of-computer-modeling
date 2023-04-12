/**
 * Allowed map elements
 */
export type MapElementType = 'POINT' | 'POLYGONE' | 'LINE'

/**
 * Position on map using array [longitude, lattitude]
 */
type MapPointArray = [string, string]

/**
 * Position on map using object
 */
type MapPointObject = {
    longitude: string
    lattitude: string
}

/**
 * Map point position
 */
export type MapPoint = MapPointObject | MapPointArray

/**
 * Interface for abstract map element
 */
export interface MapElement {
    /**
     * Map element type
     */
    type: MapElementType
}

/**
 * Interface for map point element
 */
export interface MapPointElement extends MapElement {
    /**
     * Element position on map
     */
    point: MapPoint
}

/**
 * Interface for map line element
 */
export interface MapLineElement extends MapElement {
    /**
     * Element line position points on map
     */
    points: MapPoint[]
}

/**
 * Interface for map polygone element
 */
export interface MapPolygoneElement extends MapElement {
    /**
     * Element polygone position points on map
     */
    points: MapPoint[]
}