import { Input } from '@angular/core';

import {
    ElementShape,
    LinkShape,
    NgJointElement,
    NgJointLink,
    GenericElementShapeComponent,
    GenericLinkShapeComponent
} from '../shapes';

export abstract class StandardElementShape extends ElementShape {

}

export abstract class StandardLinkShape extends LinkShape {

}

export interface NgJointGenericStandardElement extends NgJointElement {
    root?: SVGGElement;
}

export abstract class GenericStandardElementShapeComponent extends GenericElementShapeComponent {
    @Input() root?: SVGGElement;
}

export interface NgJointGenericStandardLink extends NgJointLink {
    root?: SVGGElement;
    line?: SVGPathElement;
}

export abstract class GenericStandardLinkShapeComponent extends GenericLinkShapeComponent {
    @Input() root?: SVGGElement;
    @Input() line?: SVGPathElement;
}
