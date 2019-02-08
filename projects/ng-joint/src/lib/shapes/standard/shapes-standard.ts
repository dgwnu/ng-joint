/**
 * Ng Joint implementation of Plugin Shapes joint.shapes.standard
 * based on: https://github.com/clientIO/joint/blob/master/plugins/shapes/joint.shapes.standard.js
 */
import { Input } from '@angular/core';

import { attributes } from 'jointjs';

import { DiaElement, DiaLink } from '../../dia';

import {
    NgJointElement,
    NgJointLink,
    GenericElementShapeComponent,
    GenericLinkShapeComponent
} from '../shapes';

export abstract class StandardElementShape extends DiaElement {

}

export abstract class StandardLinkShape extends DiaLink {

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
