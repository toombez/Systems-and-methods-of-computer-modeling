import { SurfaceComponent, SurfaceComponentType } from '../types'
import PolygoneComponent from './PolygoneComponent'

class ForestComponent extends PolygoneComponent implements SurfaceComponent {
    surfaceType: SurfaceComponentType = 'FOREST'
}

export default ForestComponent
