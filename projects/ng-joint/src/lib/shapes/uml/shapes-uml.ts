/**
 * Ng Joint implementation of Plugin Shapes joint.shapes.uml
 * based on: https://github.com/clientIO/joint/blob/master/plugins/shapes/joint.shapes.uml.js
 */

import { Input } from '@angular/core';

import { shapes, attributes } from 'jointjs';

import { DiaElement } from '../../dia/element';
import { DiaLink } from '../../dia/link';

import {
    NgJointElement,
    NgJointLink, 
    GenericElementShapeComponent,
    GenericLinkShapeComponent
} from '../shapes';

export abstract class UmlElementShape extends DiaElement {

    constructor(id: string, options?: shapes.uml.ClassAttributes, extraOptions?: { [key: string]: any; }) {
        super({id: id, options });
    }

}

export abstract class UmlLinkShape extends DiaLink {

}

export type UmlNameType = string | string[];

export interface NgJointUmlClass extends NgJointElement {
    name: UmlNameType;
    attributes?: string[];
    methods?: string[];
    attrs?: attributes.SVGRectAttributes;
}

export abstract class GenericUmlClassShapeComponent extends GenericElementShapeComponent {
    @Input() name: UmlNameType;
    @Input() attributes?: string[];
    @Input() methods?: string[];
    @Input() attrs?: attributes.SVGRectAttributes;
}

export interface NgJointUmlLink extends NgJointLink {

}

export abstract class GenericUmlLinkShapeComponent extends GenericLinkShapeComponent {

}
