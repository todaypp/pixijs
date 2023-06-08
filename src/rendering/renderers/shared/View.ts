import type { Point } from '../../../maths/Point';
import type { Bounds } from '../../scene/bounds/Bounds';

export interface ViewObserver
{
    onViewUpdate: () => void;
}

export const emptyViewObserver: ViewObserver = {
    onViewUpdate: () => { /* empty */ },
};

export interface View
{
    uid: number;

    batched: boolean;

    /**
     * an identifier that is used to identify the type of system that will be used to render this renderable
     * eg, 'sprite' will use the sprite system (based on the systems name
     */
    type: string;

    owner: ViewObserver;

    addBounds: (bounds: Bounds) => void;
    containsPoint: (point: Point) => boolean;
}
