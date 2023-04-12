class Point {
    constructor(
        public readonly x: number,
        public readonly y: number,
    ) {}
}

class PointElement {
    public readonly type = 'point'

    constructor(
        public readonly point: Point
    ) {}
}

class LineElement {
    public readonly type = 'line'

    constructor(
        public readonly points: Point[]
    ) {}
}

class PolygonElement {
    public readonly type = 'polygone'

    constructor(
        public readonly points: Point[]
    ) {}
}

class Forest extends PolygonElement {}

class River extends LineElement {
    constructor(
        points: Point[],
        public readonly name: string,
    ) {
        super(points)
    }
}

class Lake extends PolygonElement {
    constructor(
        points: Point[],
        public readonly name: string,
    ) {
        super(points)
    }
}

class Ravine extends PolygonElement {}

class Waterfall extends PointElement {}

type MapObject = Forest | River | Lake | Ravine | Waterfall

type MapObjects = MapObject[]

type MapElement = PointElement | LineElement | PolygonElement

class MapDrawing {
    constructor(
        private readonly width: number,
        private readonly height: number,
        private objects: MapObjects = [],
    ) {}

    private pointsCentroid(points: Point[]) {
        const pointsCount = points.length

        const pointsSummary = points.reduce((centroid, point) => {
            return new Point(centroid.x + point.x, centroid.y + point.y)
        }, new Point(0, 0))

        const x = pointsSummary.x / pointsCount
        const y = pointsSummary.y / pointsCount

        const centroid = new Point(x, y)

        return centroid
    }

    public middlePoint(points: Point[]) {
        const middleIndex = Math.floor(points.length / 2)

        return points[middleIndex]
    }

    private checkPointElement(element: MapElement): element is PointElement {
        return element.type === 'point'
    }

    private checkLineElement(element: MapElement): element is LineElement {
        return element.type === 'line'
    }

    private checkPolygoneElement(element: MapElement): element is PolygonElement {
        return element.type === 'polygone'
    }

    private checkLakeElement(element: MapObject): element is Lake {
        return 'name' in element
    }

    private checkRiverElement(element: MapObject): element is River {
        return 'name' in element
    }

    private drawPolygoneElement(
        polygone: Point[],
        context: CanvasRenderingContext2D,
    ) {
        context.beginPath()

        polygone.reduceRight((prevPoint, point) => {
            const { x, y } = point
            const { x: prevPointX, y: prevPointY } = prevPoint

            context.moveTo(x, y)
            context.lineTo(prevPointX, prevPointY)

            return point
        }, polygone[0])

        context.stroke()
        context.closePath()
    }

    private drawLineElement(
        line: Point[],
        context: CanvasRenderingContext2D,
    ) {
        context.beginPath()

        line.slice(1).reduce((prevPoint, point) => {
            const { x, y } = point
            const { x: prevPointX, y: prevPointY } = prevPoint

            context.moveTo(prevPointX, prevPointY)
            context.lineTo(x, y)

            return point
        }, line[0])

        context.stroke()
        context.closePath()
    }

    private drawPoint(
        point: Point,
        context: CanvasRenderingContext2D,
    ) {
        context.beginPath()
        const { x, y } = point

        context.arc(x, y, 2, 0, Math.PI * 2)

        context.stroke()
        context.closePath()
    }

    public drawCanvas(canvas: HTMLCanvasElement) {
        canvas.width = this.width
        canvas.height = this.height

        const context = canvas.getContext('2d')

        if (!context) {
            return
        }

        this.objects.forEach(object => {
            if (this.checkPointElement(object)) {
                this.drawPoint(object.point, context)
            } else if (this.checkLineElement(object)) {
                this.drawLineElement(object.points, context)

                const middlePoint = this.middlePoint(object.points)

                if (this.checkRiverElement(object)) {
                    context.fillText(object.name, middlePoint.x, middlePoint.y)
                }
            } else if (this.checkPolygoneElement(object)) {
                this.drawPolygoneElement(object.points, context)
                const centroid = this.pointsCentroid(object.points)

                if (this.checkLakeElement(object)) {
                    context.fillText(object.name, centroid.x, centroid.y)
                }
            }
        })
    }
}

const r1 = new River([
    new Point(175, 57),
    new Point(230, 30),
    new Point(300, 38),
], 'lorem')

const l1 = new Lake([
    new Point(58, 20),
    new Point(120, 20),
    new Point(216, 80),
    new Point(128, 146),
    new Point(33, 111),
], 'lake 1')

const map = new MapDrawing(300, 150, [r1, l1])

map.drawCanvas(document.querySelector('canvas')!!)
