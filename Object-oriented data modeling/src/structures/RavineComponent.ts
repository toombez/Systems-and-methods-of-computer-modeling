import { SurfaceComponent, SurfaceComponentType } from '../types'
import PolygoneComponent from './PolygoneComponent'

class RavineComponent extends PolygoneComponent implements SurfaceComponent {
    surfaceType: SurfaceComponentType = 'RAVINE'
}

export default RavineComponent
