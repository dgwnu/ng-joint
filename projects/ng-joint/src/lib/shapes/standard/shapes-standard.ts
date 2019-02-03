import { Input } from '@angular/core';

import { attributes } from 'jointjs';

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
    root?: attributes.SVGAttributes;
}

export abstract class GenericStandardElementShapeComponent extends GenericElementShapeComponent {
    @Input() root?: attributes.SVGAttributes;
}

export interface NgJointGenericStandardLink extends NgJointLink {
    root?: attributes.SVGAttributes;
    line?: attributes.SVGPathAttributes;
}

export abstract class GenericStandardLinkShapeComponent extends GenericLinkShapeComponent {
    @Input() root?: attributes.SVGAttributes;
    @Input() line?: attributes.SVGPathAttributes;
}
