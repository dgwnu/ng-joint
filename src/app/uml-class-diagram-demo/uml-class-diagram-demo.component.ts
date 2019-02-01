/**
 * Angular Component supported by NgJoint Library: JointJs UML Class Diagram Demo
 * Based on @see https://resources.jointjs.com/demos/joint/demo/umlcd/src/umlcd.js
 */
import { Component, OnInit, OnDestroy } from '@angular/core';

import {
    NgJointUmlAbstract, NgJointUmlClass, NgJointUmlInterface,
    NgJointUmlGeneralization, NgJointUmlImplementation, NgJointUmlAggregation, NgJointUmlComposition,
    NgJointService
} from '@dgwnu/ng-joint';

@Component({
  selector: 'app-uml-class-diagram-demo',
  templateUrl: './uml-class-diagram-demo.component.html',
  styleUrls: ['./uml-class-diagram-demo.component.scss']
})
export class UmlClassDiagramDemoComponent implements OnInit, OnDestroy {

    constructor(private service: NgJointService) { }

    umlInterfaces: NgJointUmlInterface[] = [
        {
            id: 'mammal',
            x: 300, y: 50,
            width: 240, height: 100,
            name: 'Mammal',
            attributes: [
                'dob: Date'
            ],
            methods: [
                '+ setDateOfBirth(dob: Date): Void',
                '+ getAgeAsDays(): Numeric'
            ],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#feb662',
                    stroke: '#ffffff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-rect': {
                    fill: '#fdc886',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#fdc886',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                }

            }
        }
    ];

    umlAbstracts: NgJointUmlAbstract[] = [
        {
            id: 'person',
            x: 300, y: 300,
            width: 260, height: 100,
            name: 'Person',
            attributes: [
                'firstName: String',
                'lastName: String'
            ],
            methods: ['+ setName(first: String, last: String): Void', '+ getName(): String'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#68ddd5',
                    stroke: '#ffffff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-rect': {
                    fill: '#9687fe',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#9687fe',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-text, .uml-class-attrs-text': {
                    fill: '#fff'
                }
            }
        }
    ];

    umlClasses: NgJointUmlClass[] = [
        {
            id: 'bloodgroup',
            x: 20  , y: 190,
            width: 220, height: 100,
            name: 'BloodGroup',
            attributes: ['bloodGroup: String'],
            methods: ['+ isCompatible(bG: String): Boolean'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#ff8450',
                    stroke: '#fff',
                    'stroke-width': 0.5,
                },
                '.uml-class-attrs-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-text': {
                    ref: '.uml-class-attrs-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                },
                '.uml-class-methods-text': {
                    ref: '.uml-class-methods-rect',
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                }
            }
        },
        {
            id: 'address',
            x: 630, y: 190,
            width: 160, height: 100,
            name: 'Address',
            attributes: ['houseNumber: Integer', 'streetName: String', 'town: String', 'postcode: String'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#ff8450',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-text': {
                    'ref-y': 0.5,
                    'y-alignment': 'middle'
                }
            }
        },
        {
            id: 'man',
            x: 200, y: 500,
            width: 180, height: 50,
            name: ['Man'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#ff8450',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                }
            }
        },
        {
            id: 'woman',
            x: 450  , y: 500,
            width: 180, height: 50,
            name: ['Woman'],
            attrs: {
                '.uml-class-name-rect': {
                    fill: '#ff8450',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-attrs-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                },
                '.uml-class-methods-rect': {
                    fill: '#fe976a',
                    stroke: '#fff',
                    'stroke-width': 0.5
                }
            }
        }
    ];

    umlGeneralizations: NgJointUmlGeneralization[] = [
        { id: 'gen1', sourceId: 'man', targetId: 'person'},
        { id: 'gen2', sourceId: 'woman', targetId: 'person'}
    ];

    umlImplementations: NgJointUmlImplementation[] = [
        { id: 'impl1', sourceId: 'person', targetId: 'mammal'}
    ];

    umlAggregations: NgJointUmlAggregation[] = [
        { id: 'aggr1', sourceId: 'person', targetId: 'address'}
    ];

    umlCompositions: NgJointUmlComposition[] = [
        { id: 'comp1', sourceId: 'person', targetId: 'bloodgroup'}
    ];

    private _cacheData = {
        umlInterfaces: this.umlInterfaces,
        umlAbstracts: this.umlAbstracts,
        umlClasses: this.umlClasses,
        umlGeneralizations: this.umlGeneralizations,
        umlImplementations: this.umlImplementations,
        umlAggregations: this.umlAggregations,
        umlCompositions: this.umlCompositions
    };

    ngOnInit() {
        const data = this.service.getCache(this.constructor.name);
        if (data) {
            this._cacheData = data;
        }
    }

    ngOnDestroy() {
        this.service.setCache(this.constructor.name, this._cacheData);
    }
}
