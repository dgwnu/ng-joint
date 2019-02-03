import { shapes } from 'jointjs';
import { ElementShape, LinkShape, NgJointElement, NgJointLink, ElementShapeComponent, GenericElementShapeComponent } from '../shapes';

export abstract class UmlElementShape extends ElementShape {

    constructor(id: string, options?: shapes.uml.ClassAttributes, extraOptions?: { [key: string]: any; }) {
        super({id: id, options });
    }

}

export abstract class UmlLinkShape extends LinkShape {

}

export type UmlNameType = string | string[];

export interface NgJointUmlElement extends NgJointElement {
    name: UmlNameType;
    attributes?: string[];
    methods?: string[];
    attrs?: {};
}

export abstract class GenericUmlClassShapeComponent extends GenericElementShapeComponent {
    name: UmlNameType;
    attributes?: string[];
    methods?: string[];
    attrs?: {};
}

export interface NgJointUmlLink extends NgJointLink {

}