(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js":
/*!***********************************************!*\
  !*** ./dist/ng-joint/fesm5/dgwnu-ng-joint.js ***!
  \***********************************************/
/*! exports provided: DiaPaperComponent, DiaGraphComponent, ShapesComponent, NgJointService, NgJointModule, StandardLinkComponent, StandardDoubleLinkComponent, StandardRectangleComponent, StandardPolylineComponent, StandardPolygonComponent, StandardPathComponent, StandardInscribedImageComponent, StandardImageComponent, StandardHeaderedRectangleComponent, StandardEmbeddedImageComponent, StandardEllipseComponent, StandardCylinderComponent, StandardCircleComponent, StandardBorderedImageComponent, ShapesStandardComponent, ShapesStandardModule, UmlImplementationComponent, UmlGeneralizationComponent, UmlCompositionComponent, UmlAggregationComponent, UmlInterfaceComponent, UmlClassComponent, UmlAbstractComponent, ShapesUmlComponent, ShapesUmlModule, AngularElementComponent, ShapesAngularComponent, ShapesAngularModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaPaperComponent", function() { return DiaPaperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaGraphComponent", function() { return DiaGraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesComponent", function() { return ShapesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointService", function() { return NgJointService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointModule", function() { return NgJointModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinkComponent", function() { return StandardLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardDoubleLinkComponent", function() { return StandardDoubleLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardRectangleComponent", function() { return StandardRectangleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPolylineComponent", function() { return StandardPolylineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPolygonComponent", function() { return StandardPolygonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardPathComponent", function() { return StandardPathComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardInscribedImageComponent", function() { return StandardInscribedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardImageComponent", function() { return StandardImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardHeaderedRectangleComponent", function() { return StandardHeaderedRectangleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardEmbeddedImageComponent", function() { return StandardEmbeddedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardEllipseComponent", function() { return StandardEllipseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardCylinderComponent", function() { return StandardCylinderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardCircleComponent", function() { return StandardCircleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardBorderedImageComponent", function() { return StandardBorderedImageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardComponent", function() { return ShapesStandardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardModule", function() { return ShapesStandardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlImplementationComponent", function() { return UmlImplementationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlGeneralizationComponent", function() { return UmlGeneralizationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlCompositionComponent", function() { return UmlCompositionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAggregationComponent", function() { return UmlAggregationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlInterfaceComponent", function() { return UmlInterfaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassComponent", function() { return UmlClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAbstractComponent", function() { return UmlAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlComponent", function() { return ShapesUmlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlModule", function() { return ShapesUmlModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementComponent", function() { return AngularElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularComponent", function() { return ShapesAngularComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularModule", function() { return ShapesAngularModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jointjs */ "./node_modules/jointjs/dist/joint.min.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jointjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var node_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! node-cache */ "./node_modules/node-cache/index.js");
/* harmony import */ var node_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(node_cache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Indexable Holder of Joint Paper Object
 */
var /**
 * Indexable Holder of Joint Paper Object
 */
DiaPaper = /** @class */ (function () {
    function DiaPaper(options) {
        this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["dia"].Paper(options);
    }
    Object.defineProperty(DiaPaper.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () {
            return this._jointjsObject;
        },
        enumerable: true,
        configurable: true
    });
    return DiaPaper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular Joint Dia Paper Service:
 */
var DiaPaperService = /** @class */ (function () {
    function DiaPaperService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    DiaPaperService.prototype.createPaper = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new DiaPaper(options);
    };
    /**
     * jointjs internal dia.Paper.event handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onPaperEvents(..)
     *             |
     *             ? -> DiaGPaperComponent -> emit(..)
     *             |
     *             V
     *    DiaGraph.jointEvent.next(..)
     *             |
     *             ? -> DiaGraphComponent -> emit(..)
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents(..)
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit(..)
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit(..)
     *
     */
    /**
     * jointjs internal dia.Paper.event handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onPaperEvents(..)
     *             |
     *             ? -> DiaGPaperComponent -> emit(..)
     *             |
     *             V
     *    DiaGraph.jointEvent.next(..)
     *             |
     *             ? -> DiaGraphComponent -> emit(..)
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents(..)
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit(..)
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit(..)
     *
     * @param {?} component
     * @return {?}
     */
    DiaPaperService.prototype.onPaperEvents = /**
     * jointjs internal dia.Paper.event handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onPaperEvents(..)
     *             |
     *             ? -> DiaGPaperComponent -> emit(..)
     *             |
     *             V
     *    DiaGraph.jointEvent.next(..)
     *             |
     *             ? -> DiaGraphComponent -> emit(..)
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents(..)
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit(..)
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit(..)
     *
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.paperInstance.jointjsObject
            .on('element:pointerclick', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            component.graph.graphInstance.jointEvent.next({
                cid: context.model.cid,
                eventSource: 'element',
                eventType: 'pointerclick'
            });
        }));
    };
    DiaPaperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ DiaPaperService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function DiaPaperService_Factory() { return new DiaPaperService(); }, token: DiaPaperService, providedIn: "root" });
    return DiaPaperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic Shape Plugin Component Class (anchestor for all Shape Plugin Components)
 * @abstract
 */
var /**
 * Generic Shape Plugin Component Class (anchestor for all Shape Plugin Components)
 * @abstract
 */
GenericShapePluginComponent = /** @class */ (function () {
    function GenericShapePluginComponent(service) {
        this.service = service;
    }
    Object.defineProperty(GenericShapePluginComponent.prototype, "graphInstance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._graphInstance;
        },
        set: /**
         * @param {?} graphInstance
         * @return {?}
         */
        function (graphInstance) {
            this._graphInstance = graphInstance;
            this.service.initShapePluginComponent(this);
        },
        enumerable: true,
        configurable: true
    });
    return GenericShapePluginComponent;
}());
/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 * @abstract
 */
var GenericElementShapeComponent = /** @class */ (function () {
    function GenericElementShapeComponent(service) {
        this.service = service;
        /**
         * @ignore
         */
        this.xChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * @ignore
         */
        this.yChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * @ignore
         */
        this.widthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * @ignore
         */
        this.heightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * jointjs-paper-event (element:pointer:click)
         */
        this.elementPointerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
    }
    Object.defineProperty(GenericElementShapeComponent.prototype, "x", {
        /** two-way binding x property */
        get: /**
         * two-way binding x property
         * @return {?}
         */
        function () { return this._x; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} xValue
         * @return {?}
         */
        function (xValue) {
            if (this._x !== xValue) {
                this._x = xValue;
                this.xChange.emit(this._x);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "y", {
        /** two-way binding y property */
        get: /**
         * two-way binding y property
         * @return {?}
         */
        function () { return this._y; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} yValue
         * @return {?}
         */
        function (yValue) {
            if (this._y !== yValue) {
                this._y = yValue;
                this.yChange.emit(this._y);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "width", {
        /** two-way binding width property */
        get: /**
         * two-way binding width property
         * @return {?}
         */
        function () { return this._width; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} widthValue
         * @return {?}
         */
        function (widthValue) {
            if (this._width !== widthValue) {
                this._width = widthValue;
                this.widthChange.emit(this._width);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericElementShapeComponent.prototype, "height", {
        /** two-way binding height property */
        get: /**
         * two-way binding height property
         * @return {?}
         */
        function () { return this._height; },
        /** @ignore */
        set: /**
         * @ignore
         * @param {?} heightValue
         * @return {?}
         */
        function (heightValue) {
            if (this._height !== heightValue) {
                this._height = heightValue;
                this.heightChange.emit(this._height);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Create Shape Element Instance and initialize event handlers */
    /**
     * Create Shape Element Instance and initialize event handlers
     * @param {?} graphInstance
     * @return {?}
     */
    GenericElementShapeComponent.prototype.createShape = /**
     * Create Shape Element Instance and initialize event handlers
     * @param {?} graphInstance
     * @return {?}
     */
    function (graphInstance) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance = graphInstance;
        /** @type {?} */
        var shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createElementShape(this.id, shapeOptions);
        this.service.configShape(this);
        console.log('POST: createShape.shapeInstance', this.shapeInstance);
        this.service.onEvents(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GenericElementShapeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.service.setChanges(changes, this);
    };
    GenericElementShapeComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        x: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        xChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        y: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        yChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        widthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        heightChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }],
        elementPointerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"] }]
    };
    return GenericElementShapeComponent;
}());
/**
 * Generic Element Shape Component Class (anchestor for all Element Shapes)
 * @abstract
 */
var GenericLinkShapeComponent = /** @class */ (function () {
    function GenericLinkShapeComponent(service) {
        this.service = service;
    }
    Object.defineProperty(GenericLinkShapeComponent.prototype, "sourceShape", {
        set: /**
         * @param {?} source
         * @return {?}
         */
        function (source) {
            this.shapeInstance.jointjsObject.source(source.jointjsObject);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkShapeComponent.prototype, "targetShape", {
        set: /**
         * @param {?} target
         * @return {?}
         */
        function (target) {
            this.shapeInstance.jointjsObject.target(target.jointjsObject);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} graphInstance
     * @return {?}
     */
    GenericLinkShapeComponent.prototype.createShape = /**
     * @param {?} graphInstance
     * @return {?}
     */
    function (graphInstance) {
        console.log('PRE: createShape.shapeInstance', this.shapeInstance);
        this.graphInstance = graphInstance;
        /** @type {?} */
        var shapeOptions = this.service.shapeOptions(this);
        this.shapeInstance = this.service.createLinkShape(this.id, this.sourceId, this.targetId, shapeOptions);
        this.service.configShape(this);
        console.log('POST: createShape.shapeInstance', this.shapeInstance);
        this.service.onEvents(this);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GenericLinkShapeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.service.setChanges(changes, this);
    };
    GenericLinkShapeComponent.propDecorators = {
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        sourceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        targetId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return GenericLinkShapeComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding of Plugin Shapes
 */
var ShapesService = /** @class */ (function () {
    function ShapesService() {
    }
    /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     */
    /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     * @param {?} shapePlugins
     * @param {?} graphInstance
     * @return {?}
     */
    ShapesService.prototype.activateShapePlugins = /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     * @param {?} shapePlugins
     * @param {?} graphInstance
     * @return {?}
     */
    function (shapePlugins, graphInstance) {
        var e_1, _a;
        try {
            for (var shapePlugins_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(shapePlugins), shapePlugins_1_1 = shapePlugins_1.next(); !shapePlugins_1_1.done; shapePlugins_1_1 = shapePlugins_1.next()) {
                var shapePlugin = shapePlugins_1_1.value;
                if (shapePlugin) {
                    shapePlugin.graphInstance = graphInstance;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (shapePlugins_1_1 && !shapePlugins_1_1.done && (_a = shapePlugins_1.return)) _a.call(shapePlugins_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param component any shape Plugin Component
     */
    /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param {?} component any shape Plugin Component
     * @return {?}
     */
    ShapesService.prototype.initShapePluginComponent = /**
     * Create Shapes from ContentChildren QueryLists on ShapePlugin Component
     * @param {?} component any shape Plugin Component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var elements = [];
        /** @type {?} */
        var links = [];
        for (var key in component) {
            if (component[key] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_4__["QueryList"]) {
                /** @type {?} */
                var listObject = component[key]['first'];
                if (listObject) {
                    if (listObject instanceof GenericElementShapeComponent) {
                        elements.push(component[key]);
                    }
                    if (listObject instanceof GenericLinkShapeComponent) {
                        links.push(component[key]);
                    }
                }
            }
        }
        console.log('elements', elements);
        console.log('links', links);
        this.createShapes(elements, links, component.graphInstance);
    };
    /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     */
    /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graphInstance
     * @return {?}
     */
    ShapesService.prototype.createShapes = /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graphInstance
     * @return {?}
     */
    function (elements, links, graphInstance) {
        var e_2, _a, e_3, _b;
        try {
            // Firstly, create elements
            for (var elements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                element.forEach((/**
                 * @param {?} elementShape
                 * @return {?}
                 */
                function (elementShape) {
                    elementShape.createShape(graphInstance);
                }));
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        try {
            // Secondly, create links and connect them between the elements
            for (var links_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(links), links_1_1 = links_1.next(); !links_1_1.done; links_1_1 = links_1.next()) {
                var link = links_1_1.value;
                link.forEach((/**
                 * @param {?} linkShape
                 * @return {?}
                 */
                function (linkShape) {
                    var e_4, _a;
                    // create link shape
                    linkShape.createShape(graphInstance);
                    try {
                        // connect link to elements
                        for (var elements_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                            var element = elements_2_1.value;
                            // connect source element
                            /** @type {?} */
                            var source = element.find((/**
                             * @param {?} elementShape
                             * @return {?}
                             */
                            function (elementShape) { return elementShape.id === linkShape.sourceId; }));
                            if (source) {
                                linkShape.sourceShape = source.shapeInstance;
                            }
                            // connect target element
                            /** @type {?} */
                            var target = element.find((/**
                             * @param {?} elementShape
                             * @return {?}
                             */
                            function (elementShape) { return elementShape.id === linkShape.targetId; }));
                            if (target) {
                                linkShape.targetShape = target.shapeInstance;
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (elements_2_1 && !elements_2_1.done && (_a = elements_2.return)) _a.call(elements_2);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }));
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (links_1_1 && !links_1_1.done && (_b = links_1.return)) _b.call(links_1);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype._positionComponent = /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var xShapeElement = shape.jointjsObject.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.jointjsObject.getBBox().y;
        /** @type {?} */
        var xChangeDetected = (component.x !== xShapeElement);
        /** @type {?} */
        var yChangedDetected = (component.y !== yShapeElement);
        if (xChangeDetected) {
            component.x = xShapeElement;
        }
        if (yChangedDetected) {
            component.y = yShapeElement;
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype._sizeComponent = /**
     * @ignore
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var widthShapeElement = shape.jointjsObject.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.jointjsObject.getBBox().height;
        /** @type {?} */
        var widthChangeDetected = (component.width !== widthShapeElement);
        /** @type {?} */
        var heightChangedDetected = (component.height !== heightShapeElement);
        if (widthChangeDetected) {
            component.width = widthShapeElement;
        }
        if (heightChangedDetected) {
            component.height = heightShapeElement;
        }
    };
    /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     */
    /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.onElementEvents = /**
     * NgJoint dia.Element.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Element.events
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        // jointjs internal element event handling
        // bi-directional data changes
        component.shapeInstance.jointjsObject
            .on('change:position', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { _this._positionComponent(component); }))
            .on('change:size', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { _this._sizeComponent(component); }));
        // jointjs internal paper event handling
        // emit events on element level to seperate event-sources (element instances)
        component.graphInstance.jointEvent.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.eventSource === 'element') {
                if (event.eventType === 'pointerclick') {
                    if ((event.cid === component.shapeInstance.jointjsObject.cid)) {
                        component.elementPointerClick.emit(event.cid);
                    }
                }
            }
        }));
    };
    /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     */
    /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.onLinkEvents = /**
     * NgJoint dia.Link.events handling
     *
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Link.events
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.shapeInstance.jointjsObject
            .on('change:source', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { }))
            .on('change:target', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { }));
    };
    /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     */
    /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    ShapesService.prototype.setAttrProp = /**
     * Set Attr Property Values on a jointjs dia shape (element or link)
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    function (diaShape, prop, currentValue) {
        for (var attr in currentValue) {
            if (currentValue.hasOwnProperty(attr)) {
                diaShape.attr(prop + '/' + attr, currentValue[attr]);
            }
        }
    };
    /**
     * @ignore
     */
    /**
     * @ignore
     * @private
     * @param {?} changes
     * @param {?} shape
     * @return {?}
     */
    ShapesService.prototype._setAttrChanges = /**
     * @ignore
     * @private
     * @param {?} changes
     * @param {?} shape
     * @return {?}
     */
    function (changes, shape) {
        /** @type {?} */
        var diaShape = shape.jointjsObject;
        /** @type {?} */
        var attrs = diaShape.attributes['attrs'];
        for (var prop in changes) {
            if (changes.hasOwnProperty(prop) &&
                prop !== 'x' && prop !== 'y' && prop !== 'width' && prop !== 'height') {
                /** @type {?} */
                var currentValue = changes[prop].currentValue;
                /** @type {?} */
                var previousValue = attrs[prop];
                if (currentValue !== previousValue) {
                    this.setAttrProp(diaShape, prop, currentValue);
                }
            }
        }
        // console.log(element.attributes);
    };
    /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * @comment To provide bi-directional functionality for position, size and attrs
     */
    /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * \@comment To provide bi-directional functionality for position, size and attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.setElementChanges = /**
     * Process Angular Element Component changes --> in JointJs Element Shape object
     *
     * \@comment To provide bi-directional functionality for position, size and attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.jointjsObject.getBBox();
        /** @type {?} */
        var element = shape.jointjsObject;
        // detect position change
        /** @type {?} */
        var positionChangeDetected = false;
        if (changes.x) {
            positionChangeDetected = (changes.x.currentValue !== bbox.x);
        }
        else if (changes.y) {
            positionChangeDetected = (changes.y.currentValue !== bbox.y);
        }
        // detect size change
        /** @type {?} */
        var sizeChangeDetected = false;
        if (changes.width) {
            sizeChangeDetected = (changes.width.currentValue !== bbox.width);
        }
        else if (changes.height) {
            sizeChangeDetected = (changes.height.currentValue !== bbox.height);
        }
        // process position changes
        if (positionChangeDetected) {
            element.position(component.x, component.y);
        }
        // process size changes
        if (sizeChangeDetected) {
            element.resize(component.width, component.height);
        }
        // process attrs changes
        this._setAttrChanges(changes, shape);
    };
    /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * @comment To provide bi-directional functionality for attrs
     */
    /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * \@comment To provide bi-directional functionality for attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.setLinkChanges = /**
     * Process Angular Link Component changes --> in JointJs Link Shape object
     *
     * \@comment To provide bi-directional functionality for attrs
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var link = shape.jointjsObject;
        // process attrs changes
        this._setAttrChanges(changes, shape);
    };
    ShapesService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesService.ctorParameters = function () { return []; };
    /** @nocollapse */ ShapesService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ShapesService_Factory() { return new ShapesService(); }, token: ShapesService, providedIn: "root" });
    return ShapesService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dia Element Class
 * @abstract
 */
var /**
 * Dia Element Class
 * @abstract
 */
DiaElement = /** @class */ (function () {
    function DiaElement(parms) {
        this._id = parms.id;
    }
    Object.defineProperty(DiaElement.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaElement.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () { return this._jointjsObject; },
        enumerable: true,
        configurable: true
    });
    return DiaElement;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaElementModule = /** @class */ (function () {
    function DiaElementModule() {
    }
    DiaElementModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [],
                    imports: []
                },] }
    ];
    return DiaElementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Dia Link Class
 * @abstract
 */
var /**
 * Dia Link Class
 * @abstract
 */
DiaLink = /** @class */ (function () {
    function DiaLink(parms) {
        this._id = parms.id;
        this._sourceId = parms.sourceId;
        this._targetId = parms.targetId;
    }
    Object.defineProperty(DiaLink.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "sourceId", {
        get: /**
         * @return {?}
         */
        function () { return this._sourceId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "targetId", {
        get: /**
         * @return {?}
         */
        function () { return this.targetId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DiaLink.prototype, "jointjsObject", {
        get: /**
         * @return {?}
         */
        function () { return this._jointjsObject; },
        enumerable: true,
        configurable: true
    });
    return DiaLink;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaLinkModule = /** @class */ (function () {
    function DiaLinkModule() {
    }
    DiaLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [],
                    imports: []
                },] }
    ];
    return DiaLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardElementShape, _super);
    function StandardElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardElementShape;
}(DiaElement));
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLinkShape, _super);
    function StandardLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardLinkShape;
}(DiaLink));
/**
 * @abstract
 */
var GenericStandardElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericStandardElementShapeComponent, _super);
    function GenericStandardElementShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericStandardElementShapeComponent.propDecorators = {
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return GenericStandardElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var GenericStandardLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericStandardLinkShapeComponent, _super);
    function GenericStandardLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericStandardLinkShapeComponent.propDecorators = {
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return GenericStandardLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardService = /** @class */ (function () {
    function ShapesStandardService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.onElementEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.onLinkEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.setElementChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.setLinkChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.elementShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var e_1, _a;
        // generic shape options
        /** @type {?} */
        var options = {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height },
            attrs: { root: component.root }
        };
        // custom shape options
        /** @type {?} */
        var attrsMetaData = component.shapePropertiesMetaData.filter((/**
         * @param {?} dataEl
         * @return {?}
         */
        function (dataEl) { return dataEl['type'] === 'attrs'; }));
        try {
            for (var attrsMetaData_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(attrsMetaData), attrsMetaData_1_1 = attrsMetaData_1.next(); !attrsMetaData_1_1.done; attrsMetaData_1_1 = attrsMetaData_1.next()) {
                var attrDataEl = attrsMetaData_1_1.value;
                /** @type {?} */
                var key = attrDataEl['key'];
                options.attrs[key] = component[key];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (attrsMetaData_1_1 && !attrsMetaData_1_1.done && (_a = attrsMetaData_1.return)) _a.call(attrsMetaData_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return options;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.configElementShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // shape extra config
        if (component.shapeInstance.jointjsObject instanceof jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Cylinder && component['topRy']) {
            // jointjs.shapes.Cylinder extra config
            /** @type {?} */
            var t = component['topRy'];
            /** @type {?} */
            var cylinder = (/** @type {?} */ (component.shapeInstance.jointjsObject));
            cylinder.topRy(t);
            console.log('cylinder', cylinder);
        }
        // shape generic config
        component.graphInstance.addElement(component.shapeInstance);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.linkShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return undefined;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.configLinkShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        if (component.line) {
            this.service.setAttrProp(component.shapeInstance.jointjsObject, 'line', component.line);
        }
        if (component['outline']) {
            this.service.setAttrProp(component.shapeInstance.jointjsObject, 'outline', component['outline']);
        }
        component.graphInstance.addLink(component.shapeInstance);
    };
    ShapesStandardService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesStandardService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesStandardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ShapesStandardService_Factory() { return new ShapesStandardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesService)); }, token: ShapesStandardService, providedIn: "root" });
    return ShapesStandardService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Link Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Link Class
 */
StandardLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLink, _super);
    function StandardLink(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Link(options);
        return _this;
    }
    return StandardLink;
}(StandardLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkService = /** @class */ (function () {
    function StandardLinkService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    StandardLinkService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new StandardLink(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    StandardLinkService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardLinkService_Factory() { return new StandardLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardLinkService, providedIn: "root" });
    return StandardLinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardLinkComponent, _super);
    // no additional inputs
    function StandardLinkComponent(linkService) {
        var _this = _super.call(this, linkService) || this;
        _this.linkService = linkService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    StandardLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-link',
                    template: "\n    <!-- joint.shapes.standard.Link  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardLinkComponent.ctorParameters = function () { return [
        { type: StandardLinkService }
    ]; };
    return StandardLinkComponent;
}(GenericStandardLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard DoubleLink Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard DoubleLink Class
 */
StandardDoubleLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardDoubleLink, _super);
    function StandardDoubleLink(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.DoubleLink(options);
        return _this;
    }
    return StandardDoubleLink;
}(StandardLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkService = /** @class */ (function () {
    function StandardDoubleLinkService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    StandardDoubleLinkService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new StandardDoubleLink(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardDoubleLinkService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    StandardDoubleLinkService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardDoubleLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardDoubleLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardDoubleLinkService_Factory() { return new StandardDoubleLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardDoubleLinkService, providedIn: "root" });
    return StandardDoubleLinkService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardDoubleLinkComponent, _super);
    function StandardDoubleLinkComponent(doubleLinkService) {
        var _this = _super.call(this, doubleLinkService) || this;
        _this.doubleLinkService = doubleLinkService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'outline', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPathAttributes' } }];
        return _this;
    }
    StandardDoubleLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-double-link',
                    template: "\n    <!-- joint.shapes.standard.DoubleLink  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardDoubleLinkComponent.ctorParameters = function () { return [
        { type: StandardDoubleLinkService }
    ]; };
    StandardDoubleLinkComponent.propDecorators = {
        outline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardDoubleLinkComponent;
}(GenericStandardLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Rectangle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Rectangle Class
 */
StandardRectangle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardRectangle, _super);
    function StandardRectangle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Rectangle(options);
        return _this;
    }
    return StandardRectangle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleService = /** @class */ (function () {
    function StandardRectangleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardRectangleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardRectangle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardRectangleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardRectangleService_Factory() { return new StandardRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardRectangleService, providedIn: "root" });
    return StandardRectangleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardRectangleComponent, _super);
    function StandardRectangleComponent(rectangleService) {
        var _this = _super.call(this, rectangleService) || this;
        _this.rectangleService = rectangleService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-rectangle',
                    template: "\n    <!-- joint.shapes.standard.Rectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardRectangleComponent.ctorParameters = function () { return [
        { type: StandardRectangleService }
    ]; };
    StandardRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardRectangleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polyline Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polyline Class
 */
StandardPolyline = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolyline, _super);
    function StandardPolyline(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Polyline(options);
        return _this;
    }
    return StandardPolyline;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineService = /** @class */ (function () {
    function StandardPolylineService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPolylineService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPolyline(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPolylineService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPolylineService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolylineService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolylineService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardPolylineService_Factory() { return new StandardPolylineService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardPolylineService, providedIn: "root" });
    return StandardPolylineService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolylineComponent, _super);
    function StandardPolylineComponent(polylineService) {
        var _this = _super.call(this, polylineService) || this;
        _this.polylineService = polylineService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPolylineAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardPolylineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-polyline',
                    template: "\n    <!-- joint.shapes.standard.Polyline  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolylineComponent.ctorParameters = function () { return [
        { type: StandardPolylineService }
    ]; };
    StandardPolylineComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardPolylineComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polygon Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Polygon Class
 */
StandardPolygon = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolygon, _super);
    function StandardPolygon(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Polygon(options);
        return _this;
    }
    return StandardPolygon;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonService = /** @class */ (function () {
    function StandardPolygonService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPolygonService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPolygon(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPolygonService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPolygonService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolygonService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolygonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardPolygonService_Factory() { return new StandardPolygonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardPolygonService, providedIn: "root" });
    return StandardPolygonService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPolygonComponent, _super);
    function StandardPolygonComponent(polygonService) {
        var _this = _super.call(this, polygonService) || this;
        _this.polygonService = polygonService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPolygonAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardPolygonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-polygon',
                    template: "\n    <!-- joint.shapes.standard.Polygon  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolygonComponent.ctorParameters = function () { return [
        { type: StandardPolygonService }
    ]; };
    StandardPolygonComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardPolygonComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Path Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Path Class
 */
StandardPath = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPath, _super);
    function StandardPath(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Path(options);
        return _this;
    }
    return StandardPath;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathService = /** @class */ (function () {
    function StandardPathService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardPathService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardPath(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardPathService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardPathService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPathService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPathService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardPathService_Factory() { return new StandardPathService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardPathService, providedIn: "root" });
    return StandardPathService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardPathComponent, _super);
    function StandardPathComponent(pathService) {
        var _this = _super.call(this, pathService) || this;
        _this.pathService = pathService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPathAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardPathComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-path',
                    template: "\n    <!-- joint.shapes.standard.Path  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPathComponent.ctorParameters = function () { return [
        { type: StandardPathService }
    ]; };
    StandardPathComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardPathComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard InscribedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard InscribedImage Class
 */
StandardInscribedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardInscribedImage, _super);
    function StandardInscribedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.InscribedImage(options);
        return _this;
    }
    return StandardInscribedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageService = /** @class */ (function () {
    function StandardInscribedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardInscribedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardInscribedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardInscribedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardInscribedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardInscribedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardInscribedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardInscribedImageService_Factory() { return new StandardInscribedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardInscribedImageService, providedIn: "root" });
    return StandardInscribedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardInscribedImageComponent, _super);
    function StandardInscribedImageComponent(inscribedImageService) {
        var _this = _super.call(this, inscribedImageService) || this;
        _this.inscribedImageService = inscribedImageService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'image', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGImageAttributes' } }, { 'type': 'attrs', 'key': 'border', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGEllipseAttributes' } }, { 'type': 'attrs', 'key': 'background', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGEllipseAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardInscribedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-inscribed-image',
                    template: "\n    <!-- joint.shapes.standard.InscribedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardInscribedImageComponent.ctorParameters = function () { return [
        { type: StandardInscribedImageService }
    ]; };
    StandardInscribedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardInscribedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Image Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Image Class
 */
StandardImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardImage, _super);
    function StandardImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Image(options);
        return _this;
    }
    return StandardImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageService = /** @class */ (function () {
    function StandardImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardImageService_Factory() { return new StandardImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardImageService, providedIn: "root" });
    return StandardImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardImageComponent, _super);
    function StandardImageComponent(imageService) {
        var _this = _super.call(this, imageService) || this;
        _this.imageService = imageService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'image', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGImageAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-image',
                    template: "\n    <!-- joint.shapes.standard.Image  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardImageComponent.ctorParameters = function () { return [
        { type: StandardImageService }
    ]; };
    StandardImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard HeaderedRectangle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard HeaderedRectangle Class
 */
StandardHeaderedRectangle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardHeaderedRectangle, _super);
    function StandardHeaderedRectangle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.HeaderedRectangle(options);
        return _this;
    }
    return StandardHeaderedRectangle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleService = /** @class */ (function () {
    function StandardHeaderedRectangleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardHeaderedRectangle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardHeaderedRectangleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardHeaderedRectangleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardHeaderedRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardHeaderedRectangleService_Factory() { return new StandardHeaderedRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardHeaderedRectangleService, providedIn: "root" });
    return StandardHeaderedRectangleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardHeaderedRectangleComponent, _super);
    function StandardHeaderedRectangleComponent(headeredRectangleService) {
        var _this = _super.call(this, headeredRectangleService) || this;
        _this.headeredRectangleService = headeredRectangleService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'header', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'headerText', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }, { 'type': 'attrs', 'key': 'bodyText', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardHeaderedRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-headered-rectangle',
                    template: "\n    <!-- joint.shapes.standard.HeaderedRectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleComponent.ctorParameters = function () { return [
        { type: StandardHeaderedRectangleService }
    ]; };
    StandardHeaderedRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        bodyText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardHeaderedRectangleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard EmbeddedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard EmbeddedImage Class
 */
StandardEmbeddedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEmbeddedImage, _super);
    function StandardEmbeddedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.EmbeddedImage(options);
        return _this;
    }
    return StandardEmbeddedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageService = /** @class */ (function () {
    function StandardEmbeddedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardEmbeddedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardEmbeddedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardEmbeddedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEmbeddedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardEmbeddedImageService_Factory() { return new StandardEmbeddedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardEmbeddedImageService, providedIn: "root" });
    return StandardEmbeddedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEmbeddedImageComponent, _super);
    function StandardEmbeddedImageComponent(embeddedImageService) {
        var _this = _super.call(this, embeddedImageService) || this;
        _this.embeddedImageService = embeddedImageService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'image', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGImageAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardEmbeddedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-embedded-image',
                    template: "\n    <!-- joint.shapes.standard.EmbeddedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageComponent.ctorParameters = function () { return [
        { type: StandardEmbeddedImageService }
    ]; };
    StandardEmbeddedImageComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardEmbeddedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Ellipse Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Ellipse Class
 */
StandardEllipse = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEllipse, _super);
    function StandardEllipse(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Ellipse(options);
        return _this;
    }
    return StandardEllipse;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseService = /** @class */ (function () {
    function StandardEllipseService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardEllipseService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardEllipse(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardEllipseService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardEllipseService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEllipseService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEllipseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardEllipseService_Factory() { return new StandardEllipseService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardEllipseService, providedIn: "root" });
    return StandardEllipseService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardEllipseComponent, _super);
    function StandardEllipseComponent(ellipseService) {
        var _this = _super.call(this, ellipseService) || this;
        _this.ellipseService = ellipseService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGEllipseAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardEllipseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-ellipse',
                    template: "\n    <!-- joint.shapes.standard.Ellipse  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEllipseComponent.ctorParameters = function () { return [
        { type: StandardEllipseService }
    ]; };
    StandardEllipseComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardEllipseComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Cylinder Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Cylinder Class
 */
StandardCylinder = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCylinder, _super);
    function StandardCylinder(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Cylinder(options);
        return _this;
    }
    return StandardCylinder;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderService = /** @class */ (function () {
    function StandardCylinderService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardCylinderService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardCylinder(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardCylinderService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardCylinderService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCylinderService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCylinderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardCylinderService_Factory() { return new StandardCylinderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardCylinderService, providedIn: "root" });
    return StandardCylinderService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCylinderComponent, _super);
    function StandardCylinderComponent(cylinderService) {
        var _this = _super.call(this, cylinderService) || this;
        _this.cylinderService = cylinderService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPathAttributes' } }, { 'type': 'attrs', 'key': 'top', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGEllipseAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }, { 'type': 'extra', 'key': 'topRy', 'classDefinition': { 'class': 'string | number' } }];
        return _this;
    }
    StandardCylinderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-cylinder',
                    template: "\n    <!-- joint.shapes.standard.Cylinder  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCylinderComponent.ctorParameters = function () { return [
        { type: StandardCylinderService }
    ]; };
    StandardCylinderComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        topRy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardCylinderComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Circle Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard Circle Class
 */
StandardCircle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCircle, _super);
    function StandardCircle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.Circle(options);
        return _this;
    }
    return StandardCircle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleService = /** @class */ (function () {
    function StandardCircleService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardCircleService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardCircle(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardCircleService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardCircleService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCircleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCircleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardCircleService_Factory() { return new StandardCircleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardCircleService, providedIn: "root" });
    return StandardCircleService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardCircleComponent, _super);
    function StandardCircleComponent(circleService) {
        var _this = _super.call(this, circleService) || this;
        _this.circleService = circleService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'body', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGPathAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardCircleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-circle',
                    template: "\n    <!-- joint.shapes.standard.Circle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCircleComponent.ctorParameters = function () { return [
        { type: StandardCircleService }
    ]; };
    StandardCircleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardCircleComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard BorderedImage Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Standard BorderedImage Class
 */
StandardBorderedImage = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardBorderedImage, _super);
    function StandardBorderedImage(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].standard.BorderedImage(options);
        return _this;
    }
    return StandardBorderedImage;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageService = /** @class */ (function () {
    function StandardBorderedImageService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    StandardBorderedImageService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new StandardBorderedImage(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    StandardBorderedImageService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    StandardBorderedImageService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardBorderedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardBorderedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function StandardBorderedImageService_Factory() { return new StandardBorderedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesStandardService)); }, token: StandardBorderedImageService, providedIn: "root" });
    return StandardBorderedImageService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(StandardBorderedImageComponent, _super);
    function StandardBorderedImageComponent(borderedImageService) {
        var _this = _super.call(this, borderedImageService) || this;
        _this.borderedImageService = borderedImageService;
        _this.shapePropertiesMetaData = [{ 'type': 'attrs', 'key': 'image', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGImageAttributes' } }, { 'type': 'attrs', 'key': 'border', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'background', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGRectAttributes' } }, { 'type': 'attrs', 'key': 'label', 'classDefinition': { 'nameSpace': 'attributes', 'class': 'SVGTextAttributes' } }];
        return _this;
    }
    StandardBorderedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-bordered-image',
                    template: "\n    <!-- joint.shapes.standard.BorderedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardBorderedImageComponent.ctorParameters = function () { return [
        { type: StandardBorderedImageService }
    ]; };
    StandardBorderedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return StandardBorderedImageComponent;
}(GenericStandardElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesStandardComponent, _super);
    function ShapesStandardComponent(shapesStandardService) {
        var _this = _super.call(this, shapesStandardService) || this;
        _this.shapesStandardService = shapesStandardService;
        return _this;
    }
    ShapesStandardComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-shapes-standard',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesStandardComponent.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    ShapesStandardComponent.propDecorators = {
        standardBorderedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardBorderedImageComponent,] }],
        standardCircles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardCircleComponent,] }],
        standardCylinders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardCylinderComponent,] }],
        standardEllipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardEllipseComponent,] }],
        standardEmbeddedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardEmbeddedImageComponent,] }],
        standardHeaderedRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardHeaderedRectangleComponent,] }],
        standardImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardImageComponent,] }],
        standardInscribedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardInscribedImageComponent,] }],
        standardPaths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardPathComponent,] }],
        standardPolygons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardPolygonComponent,] }],
        standardPolylines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardPolylineComponent,] }],
        standardRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardRectangleComponent,] }],
        standardDoubleLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardDoubleLinkComponent,] }],
        standardLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardLinkComponent,] }]
    };
    return ShapesStandardComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardBorderedImageModule = /** @class */ (function () {
    function StandardBorderedImageModule() {
    }
    StandardBorderedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardBorderedImageService],
                    declarations: [StandardBorderedImageComponent],
                    exports: [StandardBorderedImageComponent]
                },] }
    ];
    return StandardBorderedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCircleModule = /** @class */ (function () {
    function StandardCircleModule() {
    }
    StandardCircleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardCircleService],
                    declarations: [StandardCircleComponent],
                    exports: [StandardCircleComponent]
                },] }
    ];
    return StandardCircleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardCylinderModule = /** @class */ (function () {
    function StandardCylinderModule() {
    }
    StandardCylinderModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardCylinderService],
                    declarations: [StandardCylinderComponent],
                    exports: [StandardCylinderComponent]
                },] }
    ];
    return StandardCylinderModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEllipseModule = /** @class */ (function () {
    function StandardEllipseModule() {
    }
    StandardEllipseModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardEllipseService],
                    declarations: [StandardEllipseComponent],
                    exports: [StandardEllipseComponent]
                },] }
    ];
    return StandardEllipseModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardEmbeddedImageModule = /** @class */ (function () {
    function StandardEmbeddedImageModule() {
    }
    StandardEmbeddedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardEmbeddedImageService],
                    declarations: [StandardEmbeddedImageComponent],
                    exports: [StandardEmbeddedImageComponent]
                },] }
    ];
    return StandardEmbeddedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardHeaderedRectangleModule = /** @class */ (function () {
    function StandardHeaderedRectangleModule() {
    }
    StandardHeaderedRectangleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardHeaderedRectangleService],
                    declarations: [StandardHeaderedRectangleComponent],
                    exports: [StandardHeaderedRectangleComponent]
                },] }
    ];
    return StandardHeaderedRectangleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardImageModule = /** @class */ (function () {
    function StandardImageModule() {
    }
    StandardImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardImageService],
                    declarations: [StandardImageComponent],
                    exports: [StandardImageComponent]
                },] }
    ];
    return StandardImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardInscribedImageModule = /** @class */ (function () {
    function StandardInscribedImageModule() {
    }
    StandardInscribedImageModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardInscribedImageService],
                    declarations: [StandardInscribedImageComponent],
                    exports: [StandardInscribedImageComponent]
                },] }
    ];
    return StandardInscribedImageModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPathModule = /** @class */ (function () {
    function StandardPathModule() {
    }
    StandardPathModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardPathService],
                    declarations: [StandardPathComponent],
                    exports: [StandardPathComponent]
                },] }
    ];
    return StandardPathModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolygonModule = /** @class */ (function () {
    function StandardPolygonModule() {
    }
    StandardPolygonModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardPolygonService],
                    declarations: [StandardPolygonComponent],
                    exports: [StandardPolygonComponent]
                },] }
    ];
    return StandardPolygonModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardPolylineModule = /** @class */ (function () {
    function StandardPolylineModule() {
    }
    StandardPolylineModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardPolylineService],
                    declarations: [StandardPolylineComponent],
                    exports: [StandardPolylineComponent]
                },] }
    ];
    return StandardPolylineModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleModule = /** @class */ (function () {
    function StandardRectangleModule() {
    }
    StandardRectangleModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardRectangleService],
                    declarations: [StandardRectangleComponent],
                    exports: [StandardRectangleComponent]
                },] }
    ];
    return StandardRectangleModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardDoubleLinkModule = /** @class */ (function () {
    function StandardDoubleLinkModule() {
    }
    StandardDoubleLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardDoubleLinkService],
                    declarations: [StandardDoubleLinkComponent],
                    exports: [StandardDoubleLinkComponent]
                },] }
    ];
    return StandardDoubleLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkModule = /** @class */ (function () {
    function StandardLinkModule() {
    }
    StandardLinkModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [StandardLinkService],
                    declarations: [StandardLinkComponent],
                    exports: [StandardLinkComponent]
                },] }
    ];
    return StandardLinkModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardModule = /** @class */ (function () {
    function ShapesStandardModule() {
    }
    ShapesStandardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesStandardService],
                    declarations: [ShapesStandardComponent],
                    exports: [ShapesStandardComponent, StandardBorderedImageModule, StandardCircleModule, StandardCylinderModule, StandardEllipseModule, StandardEmbeddedImageModule, StandardHeaderedRectangleModule, StandardImageModule, StandardInscribedImageModule, StandardPathModule, StandardPolygonModule, StandardPolylineModule, StandardRectangleModule, StandardDoubleLinkModule, StandardLinkModule],
                    imports: [StandardBorderedImageModule, StandardCircleModule, StandardCylinderModule, StandardEllipseModule, StandardEmbeddedImageModule, StandardHeaderedRectangleModule, StandardImageModule, StandardInscribedImageModule, StandardPathModule, StandardPolygonModule, StandardPolylineModule, StandardRectangleModule, StandardDoubleLinkModule, StandardLinkModule]
                },] }
    ];
    return ShapesStandardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 * @abstract
 */
var /**
 * Generic Angular Element Shape
 *
 * Contains extra angular element references for rendering capabilities
 *
 * @abstract
 */
AngularElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElementShape, _super);
    function AngularElementShape(parms) {
        var _this = _super.call(this, { id: parms.id, options: parms.options }) || this;
        parms.options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 }
        };
        return _this;
    }
    return AngularElementShape;
}(DiaElement));
/**
 * Generic Angular Link Shape
 * @abstract
 */
var /**
 * Generic Angular Link Shape
 * @abstract
 */
AngularLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularLinkShape, _super);
    function AngularLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AngularLinkShape;
}(DiaLink));
/**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 * @abstract
 */
var /**
 * Generic Angular Element Shapoe Component
 *
 * Contains Angular specific instances
 *
 * @abstract
 */
GenericAngularElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericAngularElementShapeComponent, _super);
    function GenericAngularElementShapeComponent(genericAngularElementService, genericNgElementRef) {
        var _this = _super.call(this, genericAngularElementService) || this;
        _this.genericAngularElementService = genericAngularElementService;
        _this.genericNgElementRef = genericNgElementRef;
        return _this;
    }
    Object.defineProperty(GenericAngularElementShapeComponent.prototype, "ngNode", {
        get: /**
         * @return {?}
         */
        function () { return this.genericNgElementRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    return GenericAngularElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var /**
 * @abstract
 */
GenericAngularLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericAngularLinkShapeComponent, _super);
    function GenericAngularLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericAngularLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// definition of angular content behaviour
/** @type {?} */
var _NODE_NAMES_ = ['BUTTON', 'INPUT', 'SELECT'];
/** @type {?} */
var _CONTENT_STYLE_ = 'pointer-events';
/** @type {?} */
var _STYLE_VALUE_ = 'auto';
/**
 * NgJoint Shapes Angular Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Shapes
 */
var ShapesAngularService = /** @class */ (function () {
    function ShapesAngularService(service, rendererFactory) {
        this.service = service;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    // set behaviour of html (and angular specific) content within angular element
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    ShapesAngularService.prototype._setNgContentStyles = 
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    function (contentNode) {
        var _this = this;
        contentNode.childNodes.forEach((/**
         * @param {?} childNode
         * @return {?}
         */
        function (childNode) {
            if (_NODE_NAMES_.find((/**
             * @param {?} nodeName
             * @return {?}
             */
            function (nodeName) { return nodeName === childNode.nodeName; }))) {
                _this.renderer.setStyle(childNode, _CONTENT_STYLE_, _STYLE_VALUE_);
            }
            // process child nodes (until no more)
            if (childNode.hasChildNodes) {
                _this._setNgContentStyles(childNode);
            }
        }));
    };
    // set NgStyle in DIV-container (first child node)
    // set NgStyle in DIV-container (first child node)
    /**
     * @private
     * @param {?} elementNode
     * @param {?} prop
     * @param {?} px
     * @return {?}
     */
    ShapesAngularService.prototype._setNgElPxStyleProp = 
    // set NgStyle in DIV-container (first child node)
    /**
     * @private
     * @param {?} elementNode
     * @param {?} prop
     * @param {?} px
     * @return {?}
     */
    function (elementNode, prop, px) {
        console.log('_setNgElPxStyleProp', elementNode.firstChild);
        this.renderer.setStyle(elementNode.firstChild, prop, px.toString() + 'px');
    };
    // render new angular element BBOX position
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    ShapesAngularService.prototype._positionNgElement = 
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    function (elementNode, x, y) {
        this._setNgElPxStyleProp(elementNode, 'left', x);
        this._setNgElPxStyleProp(elementNode, 'top', y);
    };
    // render new angular element BBOX position
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    ShapesAngularService.prototype._sizeNgElement = 
    // render new angular element BBOX position
    /**
     * @private
     * @param {?} elementNode
     * @param {?} width
     * @param {?} height
     * @return {?}
     */
    function (elementNode, width, height) {
        this._setNgElPxStyleProp(elementNode, 'width', width);
        this._setNgElPxStyleProp(elementNode, 'height', height);
    };
    // initialize initial component position and size
    // initialize initial component position and size
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._initComponent = 
    // initialize initial component position and size
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this._positionNgElement(component.ngNode, component.x, component.y);
        this._sizeNgElement(component.ngNode, component.width, component.height);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._positionComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var xShapeElement = shape.jointjsObject.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.jointjsObject.getBBox().y;
        /** @type {?} */
        var xChangeDetected = (component.x !== xShapeElement);
        /** @type {?} */
        var yChangedDetected = (component.y !== yShapeElement);
        if (xChangeDetected || yChangedDetected) {
            this._positionNgElement(component.ngNode, xShapeElement, yShapeElement);
        }
        if (xChangeDetected) {
            component.x = xShapeElement;
        }
        if (yChangedDetected) {
            component.y = yShapeElement;
        }
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype._resizeComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        /** @type {?} */
        var widthShapeElement = shape.jointjsObject.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.jointjsObject.getBBox().height;
        /** @type {?} */
        var widthChangeDetected = (component.width !== widthShapeElement);
        /** @type {?} */
        var heightChangedDetected = (component.height !== heightShapeElement);
        if (widthChangeDetected || heightChangedDetected) {
            this._sizeNgElement(component.ngNode, widthShapeElement, heightShapeElement);
        }
        if (widthChangeDetected) {
            component.width = widthShapeElement;
        }
        if (heightChangedDetected) {
            component.height = heightShapeElement;
        }
    };
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.setElementChanges = 
    // Bi-Directional processing of changes (moving and resizing jointjs and angular BOX in sync)
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        /** @type {?} */
        var shape = component.shapeInstance;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.jointjsObject.getBBox();
        // detect position change
        /** @type {?} */
        var positionChangeDetected = false;
        if (changes.x) {
            positionChangeDetected = (changes.x.currentValue !== bbox.x);
        }
        else if (changes.y) {
            positionChangeDetected = (changes.y.currentValue !== bbox.y);
        }
        // detect size change
        /** @type {?} */
        var sizeChangeDetected = false;
        if (changes.width) {
            sizeChangeDetected = (changes.width.currentValue !== bbox.width);
        }
        else if (changes.height) {
            sizeChangeDetected = (changes.height.currentValue !== bbox.height);
        }
        // process detected changes
        if (positionChangeDetected) {
            shape.jointjsObject.position(component.x, component.y);
            this._positionNgElement(component.ngNode, component.x, component.y);
        }
        if (sizeChangeDetected) {
            shape.jointjsObject.resize(component.width, component.height);
            this._sizeNgElement(component.ngNode, component.width, component.height);
        }
    };
    // Change Handler to move/resize angular element DIV-container
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.onElementEvents = 
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        this._initComponent(component);
        component.shapeInstance.jointjsObject
            .on('change:position', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this._positionComponent(component);
        }))
            .on('change:size', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this._resizeComponent(component);
        }));
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.elementShapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height }
        };
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.configElementShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addElement(component.shapeInstance);
        this._setNgContentStyles(component.ngNode);
    };
    ShapesAngularService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesAngularService.ctorParameters = function () { return [
        { type: ShapesService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ ShapesAngularService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ShapesAngularService_Factory() { return new ShapesAngularService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["RendererFactory2"])); }, token: ShapesAngularService, providedIn: "root" });
    return ShapesAngularService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Angular Element Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Angular Element Class
 */
AngularElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElement, _super);
    function AngularElement(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].basic.Rect(options);
        return _this;
    }
    return AngularElement;
}(AngularElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementService = /** @class */ (function () {
    function AngularElementService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    AngularElementService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new AngularElement(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    AngularElementService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularElementService.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    /** @nocollapse */ AngularElementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function AngularElementService_Factory() { return new AngularElementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesAngularService)); }, token: AngularElementService, providedIn: "root" });
    return AngularElementService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(AngularElementComponent, _super);
    // no additional inputs
    function AngularElementComponent(elementService, ngElementRef) {
        var _this = _super.call(this, elementService, ngElementRef) || this;
        _this.elementService = elementService;
        _this.ngElementRef = ngElementRef;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    AngularElementComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-angular-element',
                    template: "\n    <div class=\"angular-element\">\n      <ng-content></ng-content>\n    </div>\n    <!-- joint.shapes.angular.Element  -->\n  ",
                    styles: ["\n   .angular-element {\n     pointer-events: none;\n     -moz-user-select: none;\n     -ms-user-select: none;\n     user-select: none;\n     -webkit-user-select: none;\n     position: absolute;\n     z-index: 2\n   }\n  "]
                }] }
    ];
    /** @nocollapse */
    AngularElementComponent.ctorParameters = function () { return [
        { type: AngularElementService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    return AngularElementComponent;
}(GenericAngularElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesAngularComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesAngularComponent, _super);
    function ShapesAngularComponent(shapesAngularService) {
        var _this = _super.call(this, shapesAngularService) || this;
        _this.shapesAngularService = shapesAngularService;
        return _this;
    }
    ShapesAngularComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-shapes-angular',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesAngularComponent.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    ShapesAngularComponent.propDecorators = {
        angularElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [AngularElementComponent,] }]
    };
    return ShapesAngularComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var AngularElementModule = /** @class */ (function () {
    function AngularElementModule() {
    }
    AngularElementModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [AngularElementService],
                    declarations: [AngularElementComponent],
                    exports: [AngularElementComponent]
                },] }
    ];
    return AngularElementModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesAngularModule = /** @class */ (function () {
    function ShapesAngularModule() {
    }
    ShapesAngularModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesAngularService],
                    declarations: [ShapesAngularComponent],
                    exports: [ShapesAngularComponent, AngularElementModule],
                    imports: [AngularElementModule]
                },] }
    ];
    return ShapesAngularModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlElementShape, _super);
    function UmlElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UmlElementShape;
}(DiaElement));
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlLinkShape, _super);
    function UmlLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UmlLinkShape;
}(DiaLink));
/**
 * @abstract
 */
var GenericUmlElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericUmlElementShapeComponent, _super);
    function GenericUmlElementShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericUmlElementShapeComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        methods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        attrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return GenericUmlElementShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var /**
 * @abstract
 */
GenericUmlLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(GenericUmlLinkShapeComponent, _super);
    function GenericUmlLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericUmlLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlService = /** @class */ (function () {
    function ShapesUmlService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.initShapePluginComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.initShapePluginComponent(component);
    };
    /**
     * @private
     * @param {?=} stringArray
     * @return {?}
     */
    ShapesUmlService.prototype._formatUndefinedStringArray = /**
     * @private
     * @param {?=} stringArray
     * @return {?}
     */
    function (stringArray) {
        if (stringArray) {
            return stringArray;
        }
        else {
            return [];
        }
    };
    /**
     * @private
     * @param {?} name
     * @return {?}
     */
    ShapesUmlService.prototype._formatName = /**
     * @private
     * @param {?} name
     * @return {?}
     */
    function (name) {
        if (typeof name === 'string') {
            return [name];
        }
        else {
            return name;
        }
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.elementShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height },
            name: this._formatName(component.name),
            attributes: this._formatUndefinedStringArray(component.attributes),
            methods: this._formatUndefinedStringArray(component.methods),
            attrs: component.attrs
        };
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.configElementShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addElement(component.shapeInstance);
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.linkShapeOptions = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return undefined;
    };
    /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.configLinkShape = /**
     * @template T
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.addLink(component.shapeInstance);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.onElementEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.onLinkEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.setElementChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.setLinkChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    ShapesUmlService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesUmlService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesUmlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ShapesUmlService_Factory() { return new ShapesUmlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesService)); }, token: ShapesUmlService, providedIn: "root" });
    return ShapesUmlService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Implementation Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Implementation Class
 */
UmlImplementation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlImplementation, _super);
    function UmlImplementation(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Implementation(options);
        return _this;
    }
    return UmlImplementation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationService = /** @class */ (function () {
    function UmlImplementationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlImplementationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlImplementation(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlImplementationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlImplementationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlImplementationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlImplementationService_Factory() { return new UmlImplementationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlImplementationService, providedIn: "root" });
    return UmlImplementationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlImplementationComponent, _super);
    // no additional inputs
    function UmlImplementationComponent(implementationService) {
        var _this = _super.call(this, implementationService) || this;
        _this.implementationService = implementationService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlImplementationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-implementation',
                    template: "\n    <!-- joint.shapes.uml.Implementation  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlImplementationComponent.ctorParameters = function () { return [
        { type: UmlImplementationService }
    ]; };
    return UmlImplementationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Generalization Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Generalization Class
 */
UmlGeneralization = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlGeneralization, _super);
    function UmlGeneralization(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Generalization(options);
        return _this;
    }
    return UmlGeneralization;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationService = /** @class */ (function () {
    function UmlGeneralizationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlGeneralizationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlGeneralization(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlGeneralizationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlGeneralizationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlGeneralizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlGeneralizationService_Factory() { return new UmlGeneralizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlGeneralizationService, providedIn: "root" });
    return UmlGeneralizationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlGeneralizationComponent, _super);
    // no additional inputs
    function UmlGeneralizationComponent(generalizationService) {
        var _this = _super.call(this, generalizationService) || this;
        _this.generalizationService = generalizationService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlGeneralizationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-generalization',
                    template: "\n    <!-- joint.shapes.uml.Generalization  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlGeneralizationComponent.ctorParameters = function () { return [
        { type: UmlGeneralizationService }
    ]; };
    return UmlGeneralizationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Composition Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Composition Class
 */
UmlComposition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlComposition, _super);
    function UmlComposition(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Composition(options);
        return _this;
    }
    return UmlComposition;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionService = /** @class */ (function () {
    function UmlCompositionService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlCompositionService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlComposition(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlCompositionService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlCompositionService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlCompositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlCompositionService_Factory() { return new UmlCompositionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlCompositionService, providedIn: "root" });
    return UmlCompositionService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlCompositionComponent, _super);
    // no additional inputs
    function UmlCompositionComponent(compositionService) {
        var _this = _super.call(this, compositionService) || this;
        _this.compositionService = compositionService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlCompositionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-composition',
                    template: "\n    <!-- joint.shapes.uml.Composition  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlCompositionComponent.ctorParameters = function () { return [
        { type: UmlCompositionService }
    ]; };
    return UmlCompositionComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Aggregation Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Aggregation Class
 */
UmlAggregation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAggregation, _super);
    function UmlAggregation(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Aggregation(options);
        return _this;
    }
    return UmlAggregation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationService = /** @class */ (function () {
    function UmlAggregationService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.linkShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    UmlAggregationService.prototype.createLinkShape = /**
     * @param {?} id
     * @param {?} sourceId
     * @param {?} targetId
     * @param {?} options
     * @return {?}
     */
    function (id, sourceId, targetId, options) {
        return new UmlAggregation(id, sourceId, targetId, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configLinkShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onLinkEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    UmlAggregationService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAggregationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAggregationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlAggregationService_Factory() { return new UmlAggregationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlAggregationService, providedIn: "root" });
    return UmlAggregationService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAggregationComponent, _super);
    // no additional inputs
    function UmlAggregationComponent(aggregationService) {
        var _this = _super.call(this, aggregationService) || this;
        _this.aggregationService = aggregationService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlAggregationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-aggregation',
                    template: "\n    <!-- joint.shapes.uml.Aggregation  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlAggregationComponent.ctorParameters = function () { return [
        { type: UmlAggregationService }
    ]; };
    return UmlAggregationComponent;
}(GenericUmlLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Interface Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Interface Class
 */
UmlInterface = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlInterface, _super);
    function UmlInterface(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Interface(options);
        return _this;
    }
    return UmlInterface;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceService = /** @class */ (function () {
    function UmlInterfaceService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlInterfaceService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlInterface(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlInterfaceService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlInterfaceService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlInterfaceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlInterfaceService_Factory() { return new UmlInterfaceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlInterfaceService, providedIn: "root" });
    return UmlInterfaceService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlInterfaceComponent, _super);
    // no additional inputs
    function UmlInterfaceComponent(interfaceService) {
        var _this = _super.call(this, interfaceService) || this;
        _this.interfaceService = interfaceService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlInterfaceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-interface',
                    template: "\n    <!-- joint.shapes.uml.Interface  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlInterfaceComponent.ctorParameters = function () { return [
        { type: UmlInterfaceService }
    ]; };
    return UmlInterfaceComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Class Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Class Class
 */
UmlClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlClass, _super);
    function UmlClass(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Class(options);
        return _this;
    }
    return UmlClass;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassService = /** @class */ (function () {
    function UmlClassService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlClassService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlClass(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlClassService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlClassService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlClassService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlClassService_Factory() { return new UmlClassService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlClassService, providedIn: "root" });
    return UmlClassService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlClassComponent, _super);
    // no additional inputs
    function UmlClassComponent(classService) {
        var _this = _super.call(this, classService) || this;
        _this.classService = classService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlClassComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-class',
                    template: "\n    <!-- joint.shapes.uml.Class  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlClassComponent.ctorParameters = function () { return [
        { type: UmlClassService }
    ]; };
    return UmlClassComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Abstract Class
 */
var /**
 * Generated by \@dgwnu/ng-joint-schematics
 * Ng Joint Uml Abstract Class
 */
UmlAbstract = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAbstract, _super);
    function UmlAbstract(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["shapes"].uml.Abstract(options);
        return _this;
    }
    return UmlAbstract;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractService = /** @class */ (function () {
    function UmlAbstractService(service) {
        this.service = service;
    }
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.shapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
    };
    /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    UmlAbstractService.prototype.createElementShape = /**
     * @param {?} id
     * @param {?} options
     * @return {?}
     */
    function (id, options) {
        return new UmlAbstract(id, options);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.configShape = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.configElementShape(component);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.onEvents = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        this.service.onElementEvents(component);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.setChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setElementChanges(changes, component);
    };
    UmlAbstractService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAbstractService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAbstractService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function UmlAbstractService_Factory() { return new UmlAbstractService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesUmlService)); }, token: UmlAbstractService, providedIn: "root" });
    return UmlAbstractService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(UmlAbstractComponent, _super);
    // no additional inputs
    function UmlAbstractComponent(abstractService) {
        var _this = _super.call(this, abstractService) || this;
        _this.abstractService = abstractService;
        _this.shapePropertiesMetaData = [];
        return _this;
    }
    UmlAbstractComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-abstract',
                    template: "\n    <!-- joint.shapes.uml.Abstract  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlAbstractComponent.ctorParameters = function () { return [
        { type: UmlAbstractService }
    ]; };
    return UmlAbstractComponent;
}(GenericUmlElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ShapesUmlComponent, _super);
    function ShapesUmlComponent(shapesUmlService) {
        var _this = _super.call(this, shapesUmlService) || this;
        _this.shapesUmlService = shapesUmlService;
        return _this;
    }
    ShapesUmlComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-shapes-uml',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesUmlComponent.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    ShapesUmlComponent.propDecorators = {
        umlAbstracts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlAbstractComponent,] }],
        umlClasss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlClassComponent,] }],
        umlInterfaces: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlInterfaceComponent,] }],
        umlAggregations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlAggregationComponent,] }],
        umlCompositions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlCompositionComponent,] }],
        umlGeneralizations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlGeneralizationComponent,] }],
        umlImplementations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlImplementationComponent,] }]
    };
    return ShapesUmlComponent;
}(GenericShapePluginComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractModule = /** @class */ (function () {
    function UmlAbstractModule() {
    }
    UmlAbstractModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlAbstractService],
                    declarations: [UmlAbstractComponent],
                    exports: [UmlAbstractComponent]
                },] }
    ];
    return UmlAbstractModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassModule = /** @class */ (function () {
    function UmlClassModule() {
    }
    UmlClassModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlClassService],
                    declarations: [UmlClassComponent],
                    exports: [UmlClassComponent]
                },] }
    ];
    return UmlClassModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceModule = /** @class */ (function () {
    function UmlInterfaceModule() {
    }
    UmlInterfaceModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlInterfaceService],
                    declarations: [UmlInterfaceComponent],
                    exports: [UmlInterfaceComponent]
                },] }
    ];
    return UmlInterfaceModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationModule = /** @class */ (function () {
    function UmlAggregationModule() {
    }
    UmlAggregationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlAggregationService],
                    declarations: [UmlAggregationComponent],
                    exports: [UmlAggregationComponent]
                },] }
    ];
    return UmlAggregationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionModule = /** @class */ (function () {
    function UmlCompositionModule() {
    }
    UmlCompositionModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlCompositionService],
                    declarations: [UmlCompositionComponent],
                    exports: [UmlCompositionComponent]
                },] }
    ];
    return UmlCompositionModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationModule = /** @class */ (function () {
    function UmlGeneralizationModule() {
    }
    UmlGeneralizationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlGeneralizationService],
                    declarations: [UmlGeneralizationComponent],
                    exports: [UmlGeneralizationComponent]
                },] }
    ];
    return UmlGeneralizationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationModule = /** @class */ (function () {
    function UmlImplementationModule() {
    }
    UmlImplementationModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [UmlImplementationService],
                    declarations: [UmlImplementationComponent],
                    exports: [UmlImplementationComponent]
                },] }
    ];
    return UmlImplementationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlModule = /** @class */ (function () {
    function ShapesUmlModule() {
    }
    ShapesUmlModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesUmlService],
                    declarations: [ShapesUmlComponent],
                    exports: [ShapesUmlComponent, UmlAbstractModule, UmlClassModule, UmlInterfaceModule, UmlAggregationModule, UmlCompositionModule, UmlGeneralizationModule, UmlImplementationModule],
                    imports: [UmlAbstractModule, UmlClassModule, UmlInterfaceModule, UmlAggregationModule, UmlCompositionModule, UmlGeneralizationModule, UmlImplementationModule]
                },] }
    ];
    return ShapesUmlModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Component
 *
 * Container for ShapePlugin's within DiaGraphElement (ng-joint-dia-graph)
 *
 */
var ShapesComponent = /** @class */ (function () {
    function ShapesComponent(service) {
        this.service = service;
    }
    Object.defineProperty(ShapesComponent.prototype, "graphInstance", {
        /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         */
        set: /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         * @param {?} graphInstance
         * @return {?}
         */
        function (graphInstance) {
            this._graphInstance = graphInstance;
            this.service.activateShapePlugins([
                this.shapesStandard,
                this.shapesAngular,
                this.shapesUml
            ], this._graphInstance);
        },
        enumerable: true,
        configurable: true
    });
    ShapesComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-shapes',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesComponent.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    ShapesComponent.propDecorators = {
        shapesStandard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [ShapesStandardComponent,] }],
        shapesAngular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [ShapesAngularComponent,] }],
        shapesUml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [ShapesUmlComponent,] }]
    };
    return ShapesComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JointNg Graph Class
 */
var /**
 * JointNg Graph Class
 */
DiaGraph = /** @class */ (function () {
    /** @ignore */
    function DiaGraph() {
        /**
         * jointjs internal events subjects
         */
        this.jointEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._jointjsObject = new jointjs__WEBPACK_IMPORTED_MODULE_1__["dia"].Graph();
    }
    Object.defineProperty(DiaGraph.prototype, "jointjsObject", {
        /** jointjs graph object instance */
        get: /**
         * jointjs graph object instance
         * @return {?}
         */
        function () {
            return this._jointjsObject;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} element
     * @return {?}
     */
    DiaGraph.prototype.addElement = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.jointjsObject.addTo(this._jointjsObject);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    DiaGraph.prototype.addLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        link.jointjsObject.addTo(this._jointjsObject);
    };
    return DiaGraph;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaGraphService = /** @class */ (function () {
    function DiaGraphService() {
    }
    /**
     * @return {?}
     */
    DiaGraphService.prototype.createGraph = /**
     * @return {?}
     */
    function () {
        return new DiaGraph();
    };
    DiaGraphService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaGraphService.ctorParameters = function () { return []; };
    /** @nocollapse */ DiaGraphService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function DiaGraphService_Factory() { return new DiaGraphService(); }, token: DiaGraphService, providedIn: "root" });
    return DiaGraphService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaGraphElement (ng-joint-dia-paper) instance within a DiaPaperElement (ng-joint-dia-paper)
 *
 */
var DiaGraphComponent = /** @class */ (function () {
    function DiaGraphComponent(service) {
        this.service = service;
        this.graphInstance = this.service.createGraph();
    }
    /**
     * Trigger to add the Shapes to the Graph Instance
     */
    /**
     * Trigger to add the Shapes to the Graph Instance
     * @return {?}
     */
    DiaGraphComponent.prototype.addShapes = /**
     * Trigger to add the Shapes to the Graph Instance
     * @return {?}
     */
    function () {
        this.shapes.graphInstance = this.graphInstance;
    };
    DiaGraphComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-dia-graph',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    DiaGraphComponent.ctorParameters = function () { return [
        { type: DiaGraphService }
    ]; };
    DiaGraphComponent.propDecorators = {
        shapes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [ShapesComponent,] }]
    };
    return DiaGraphComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Dia Graph Component
 *
 * Creates DiaPaperElement (ng-joint-dia-paper)
 *
 * \@example
 *
 * <ng-joint-dia-paper
 *  [width]="800"
 *  [height]="600"
 *  [gridSize]="2"
 *  [drawGrid]="true">
 *
 * </ng-joint-dia-paper>
 *
 */
var DiaPaperComponent = /** @class */ (function () {
    function DiaPaperComponent(service, el) {
        this.service = service;
        this.el = el;
    }
    /**
     * @return {?}
     */
    DiaPaperComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        // work around (for problem 1st call ngAfterContentInit attributes are not initialized!)
        if (this.graph) {
            // console.log('offsetParent', this.el.nativeElement.offsetParent);
            this._createPaper();
        }
    };
    /**
     * @private
     * @return {?}
     */
    DiaPaperComponent.prototype._createPaper = /**
     * @private
     * @return {?}
     */
    function () {
        // console.log('graph', this.graph);
        this.paperInstance = this.service.createPaper({
            width: this.width,
            height: this.height,
            gridSize: this.gridSize,
            drawGrid: this.drawGrid,
            model: this.graph.graphInstance.jointjsObject,
            el: this.diaPaperElRef.nativeElement
        });
        // console.log('paperInstance', this.paperInstance);
        this.graph.addShapes();
        this.service.onPaperEvents(this);
    };
    DiaPaperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-dia-paper',
                    template: "<ng-content></ng-content>\n<div #dgwnudiapaper></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None
                }] }
    ];
    /** @nocollapse */
    DiaPaperComponent.ctorParameters = function () { return [
        { type: DiaPaperService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    DiaPaperComponent.propDecorators = {
        diaPaperElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"], args: ['dgwnudiapaper',] }],
        graph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"], args: [DiaGraphComponent,] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        gridSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        drawGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return DiaPaperComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaPaperModule = /** @class */ (function () {
    function DiaPaperModule() {
    }
    DiaPaperModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [DiaPaperService],
                    declarations: [DiaPaperComponent],
                    imports: [],
                    exports: [DiaPaperComponent]
                },] }
    ];
    return DiaPaperModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaGraphModule = /** @class */ (function () {
    function DiaGraphModule() {
    }
    DiaGraphModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [DiaGraphService],
                    declarations: [DiaGraphComponent],
                    imports: [],
                    exports: [DiaGraphComponent]
                },] }
    ];
    return DiaGraphModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesModule = /** @class */ (function () {
    function ShapesModule() {
    }
    ShapesModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesService],
                    declarations: [ShapesComponent],
                    exports: [ShapesComponent]
                },] }
    ];
    return ShapesModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgJointService = /** @class */ (function () {
    function NgJointService() {
        this._shapesCache = new node_cache__WEBPACK_IMPORTED_MODULE_3__();
    }
    /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    NgJointService.prototype.setCache = /**
     * @param {?} key
     * @param {?} data
     * @return {?}
     */
    function (key, data) {
        this._shapesCache.set(key, data);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    NgJointService.prototype.getCache = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._shapesCache.get(key);
    };
    NgJointService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgJointService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgJointService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function NgJointService_Factory() { return new NgJointService(); }, token: NgJointService, providedIn: "root" });
    return NgJointService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaModule = /** @class */ (function () {
    function DiaModule() {
    }
    DiaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    imports: [DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule],
                    exports: [DiaPaperModule, DiaGraphModule, DiaElementModule, DiaLinkModule],
                },] }
    ];
    return DiaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgJointModule = /** @class */ (function () {
    function NgJointModule() {
    }
    NgJointModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [NgJointService],
                    imports: [DiaModule, ShapesModule],
                    exports: [DiaModule, ShapesModule]
                },] }
    ];
    return NgJointModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=dgwnu-ng-joint.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app-material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var matModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"]
];
var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [matModules],
            exports: [matModules]
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.component */ "./src/app/overview.component.ts");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found.component.ts");





var appRoutes = [
    { path: '', component: _overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] },
    { path: '**', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: false } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"], _overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-toolbar color=\"primary\">\n    {{title}}\n</mat-toolbar>\n\n<div fxLayout=\"row\">\n\n    <mat-card class=\"accordion-container\">\n        <mat-card-content>\n            <mat-accordion>\n                <mat-expansion-panel>\n                        <mat-expansion-panel-header>\n                <a mat-button routerLink=\"/\" > Overview </a>\n                        </mat-expansion-panel-header>\n                </mat-expansion-panel>\n                <mat-expansion-panel *ngFor=\"let examples of examplesList\"\n                    (afterCollapse)=\"onOverview(examples.main)\"\n                    (afterExpand)=\"onOverview(examples.main)\"\n                >\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            {{getMainTitle(examples.main) | titlecase}}\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            (jointjs)\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n                    <mat-action-row *ngFor=\"let sub of examples.subs\">\n                        <a mat-button routerLink=\"/{{examples.main}}/{{sub}}\"> {{getSubTitle(sub) | titlecase}} </a>\n                    </mat-action-row>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"main-content\" fxFlex>\n        <mat-card-content *ngIf=\"initialized\">\n            <router-outlet></router-outlet>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/*! JointJS v2.2.1 (2018-11-12) - JavaScript diagramming library\n\n\nThis Source Code Form is subject to the terms of the Mozilla Public\nLicense, v. 2.0. If a copy of the MPL was not distributed with this\nfile, You can obtain one at http://mozilla.org/MPL/2.0/.\n*/\n/*\nA complete list of SVG properties that can be set through CSS is here:\nhttp://www.w3.org/TR/SVG/styling.html\n\nImportant note: Presentation attributes have a lower precedence over CSS style rules.\n*/\n/* .viewport is a <g> node wrapping all diagram elements in the paper */\n.joint-viewport {\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n.joint-paper > svg,\n.joint-paper-background,\n.joint-paper-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*\n1. IE can't handle paths without the `d` attribute for bounding box calculation\n2. IE can't even handle 'd' attribute as a css selector (e.g path[d]) so the following rule will\n   break the links rendering.\n\npath:not([d]) {\n    display: none;\n}\n\n*/\n/* magnet is an element that can be either source or a target of a link */\n[magnet=true]:not(.joint-element) {\n   cursor: crosshair;\n}\n[magnet=true]:not(.joint-element):hover {\n   opacity: .7;\n}\n/*\n\nElements have CSS classes named by their types. E.g. type: basic.Rect has a CSS class \"element basic Rect\".\nThis makes it possible to easilly style elements in CSS and have generic CSS rules applying to\nthe whole group of elements. Each plugin can provide its own stylesheet.\n\n*/\n.joint-element {\n   /* Give the user a hint that he can drag&drop the element. */\n   cursor: move;\n}\n.joint-element * {\n   user-drag: none;\n}\n.joint-element .scalable * {\n   /* The default behavior when scaling an element is not to scale the stroke in order to prevent the ugly effect of stroke with different proportions. */\n   vector-effect: non-scaling-stroke;\n}\n/*\n\nconnection-wrap is a <path> element of the joint.dia.Link that follows the .connection <path> of that link.\nIn other words, the `d` attribute of the .connection-wrap contains the same data as the `d` attribute of the\n.connection <path>. The advantage of using .connection-wrap is to be able to catch pointer events\nin the neighborhood of the .connection <path>. This is especially handy if the .connection <path> is\nvery thin.\n\n*/\n.marker-source,\n.marker-target {\n   /* This makes the arrowheads point to the border of objects even though the transform: scale() is applied on them. */\n   vector-effect: non-scaling-stroke;\n}\n/* Paper */\n.joint-paper {\n    position: relative;\n}\n/* Paper */\n/*  Highlighting  */\n.joint-highlight-opacity {\n    opacity: 0.3;\n}\n/*  Highlighting  */\n/*\n\nVertex markers are `<circle>` elements that appear at connection vertex positions.\n\n*/\n.joint-link .connection-wrap,\n.joint-link .connection {\n   fill: none;\n}\n/* <g> element wrapping .marker-vertex-group. */\n.marker-vertices {\n   opacity: 0;\n   cursor: move;\n}\n.marker-arrowheads {\n   opacity: 0;\n   cursor: move;\n   cursor: -webkit-grab;\n   cursor: -moz-grab;\n/*   display: none;   */   /* setting `display: none` on .marker-arrowheads effectivelly switches of links reconnecting */\n}\n.link-tools {\n   opacity: 0;\n   cursor: pointer;\n}\n.link-tools .tool-options {\n   display: none;       /* by default, we don't display link options tool */\n}\n.joint-link:hover .marker-vertices,\n.joint-link:hover .marker-arrowheads,\n.joint-link:hover .link-tools {\n   opacity: 1;\n}\n/* <circle> element used to remove a vertex */\n.marker-vertex-remove {\n   cursor: pointer;\n   opacity: .1;\n}\n.marker-vertex-group:hover .marker-vertex-remove {\n   opacity: 1;\n}\n.marker-vertex-remove-area {\n   opacity: .1;\n   cursor: pointer;\n}\n.marker-vertex-group:hover .marker-vertex-remove-area {\n   opacity: 1;\n}\n/*\nExample of custom changes (in pure CSS only!):\n\nDo not show marker vertices at all:  .marker-vertices { display: none; }\nDo not allow adding new vertices: .connection-wrap { pointer-events: none; }\n*/\n/* foreignObject inside the elements (i.e joint.shapes.basic.TextBlock) */\n.joint-element .fobj {\n    overflow: hidden;\n}\n.joint-element .fobj body {\n    background-color: transparent;\n    margin: 0px;\n    position: static;\n}\n.joint-element .fobj div {\n    text-align: center;\n    vertical-align: middle;\n    display: table-cell;\n    padding: 0px 5px 0px 5px;\n}\n/* Paper */\n.joint-paper.joint-theme-dark {\n    background-color: #18191b;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-dark .connection-wrap {\n    stroke: #8F8FF3;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-dark .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-dark .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove circle {\n    fill: #F33636;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove path {\n    fill: white;\n}\n.joint-link.joint-theme-dark .link-tools [event=\"link:options\"] circle {\n    fill: green;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-dark .marker-vertex {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-vertex:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n.joint-link.joint-theme-dark .marker-arrowhead {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-arrowhead:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-dark .marker-vertex-remove-area {\n    fill: green;\n    stroke: darkgreen;\n}\n.joint-link.joint-theme-dark .marker-vertex-remove {\n    fill: white;\n    stroke: white;\n}\n/*  Links  */\n/* Paper */\n.joint-paper.joint-theme-default {\n    background-color: #FFFFFF;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-default .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-default .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-default .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-default .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-default .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-default .marker-vertex-remove {\n    fill: #FFFFFF;\n}\n/*  Links  */\n@font-face {\n    font-family: 'lato-light';\n    src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n/*  Links  */\n.joint-link.joint-theme-material .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-material .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-material .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove circle {\n    fill: #C64242;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-material .marker-vertex {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-vertex:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n.joint-link.joint-theme-material .marker-arrowhead {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-arrowhead:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-material .marker-vertex-remove-area {\n    fill: #5fa9ee;\n}\n.joint-link.joint-theme-material .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n/*  Links  */\n.joint-link.joint-theme-modern .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-modern .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-modern .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-modern .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-modern .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-modern .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500; }\n.mat-card-header .mat-card-title {\n  font-size: 20px; }\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    -webkit-transform: translateY(-1.28122em) scale(0.75);\n            transform: translateY(-1.28122em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.28121em) scale(0.75);\n            transform: translateY(-1.28121em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.2812em) scale(0.75);\n            transform: translateY(-1.2812em) scale(0.75); } }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-sub-label-error {\n  font-weight: normal; }\n.mat-step-label-error {\n  font-size: 14px; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-base .mat-list-item {\n  font-size: 16px; }\n.mat-list-base .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-list-option {\n  font-size: 16px; }\n.mat-list-base .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden;\n  position: relative; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@-webkit-keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #3f51b5; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff4081; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #3f51b5; }\n@media (-ms-high-contrast: active) {\n    .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-accent .mat-badge-content {\n  background: #ff4081;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #2196f3; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-disabled .mat-badge-content {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38); }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #3f51b5; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #ff4081; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #2196f3; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: #3f51b5; }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: #ff4081; }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: #2196f3; }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n    opacity: 0.1;\n    background-color: currentColor; }\n.mat-button-focus-overlay {\n  background: black; }\n.mat-stroked-button:not([disabled]) {\n  border-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff4081; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #2196f3; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-stroked-button:not([class*='mat-elevation-z']), .mat-flat-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-raised-button[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([class*='mat-elevation-z']), .mat-mini-fab:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([disabled]):active:not([class*='mat-elevation-z']), .mat-mini-fab:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-fab[disabled]:not([class*='mat-elevation-z']), .mat-mini-fab[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  box-shadow: none; }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n  background: white; }\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n    background-color: black; }\n.mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(0, 0, 0, 0.12); }\n[dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n    color: rgba(0, 0, 0, 0.87); }\n.mat-button-toggle-disabled {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee; }\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n    background: white; }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-card.mat-card-flat:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(0, 0, 0, 0.54); }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-disabled {\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip::after {\n    background: black; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff4081;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #ff4081;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(255, 64, 129, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-datepicker-toggle-active {\n  color: #3f51b5; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #ff4081; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #2196f3; }\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #2196f3; }\n.mat-focused .mat-form-field-required-marker {\n  color: #ff4081; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #3f51b5; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #ff4081; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #2196f3; }\n.mat-error {\n  color: #2196f3; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #3f51b5; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff4081; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n.mat-icon.mat-accent {\n  color: #ff4081; }\n.mat-icon.mat-warn {\n  color: #2196f3; }\n.mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-input-element:disabled,\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #3f51b5; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #ff4081; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-list-base .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option:focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item:focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon-no-color,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #c5cae9; }\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #3f51b5; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff4081; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #2196f3; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle,\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #3f51b5; }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle,\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #ff4081; }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle,\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #2196f3; }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button .mat-ripple-element {\n  background-color: black; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel {\n  background: white; }\n.mat-select-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff4081; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer:not(.mat-drawer-side) {\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side {\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side.mat-drawer-end {\n    border-left: solid 1px rgba(0, 0, 0, 0.12);\n    border-right: none; }\n[dir='rtl'] .mat-drawer-side {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none; }\n[dir='rtl'] .mat-drawer-side.mat-drawer-end {\n    border-left: none;\n    border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 64, 129, 0.54); }\n.mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.54); }\n.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.54); }\n.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: black; }\n.mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none; } }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-step-header .mat-step-icon {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white; }\n.mat-step-header .mat-step-icon-selected,\n.mat-step-header .mat-step-icon-state-done,\n.mat-step-header .mat-step-icon-state-edit {\n  background-color: #3f51b5;\n  color: white; }\n.mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #2196f3; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-step-header .mat-step-label.mat-step-label-error {\n  color: #2196f3; }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-horizontal-stepper-header::before,\n.mat-horizontal-stepper-header::after,\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff4081; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff4081; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff4081;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-simple-snackbar-action {\n  color: #ff4081; }\n/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%; }\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.accordion-container {\n  background-color: #82b1ff; }\n.accordion-content {\n  background-color: #448aff; }\n.main-content {\n  background-color: #e8eaf6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbm5vL0dJVFMvZGd3bnUvbmctam9pbnQvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL190aGVtaW5nLnNjc3MiLCJub2RlX21vZHVsZXMvam9pbnRqcy9kaXN0L2pvaW50LmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL29ubm8vR0lUUy9kZ3dudS9uZy1qb2ludC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvb25uby9HSVRTL2Rnd251L25nLWpvaW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkxQ0Esa0NBQUE7QUFnaERBLDJDQUFBO0FBd0NBLHFCQUFBO0FBeGpEQSxrQ0FBQTtBQWdoREEsMkNBQUE7QUF3Q0EscUJBQUE7QUNqNUZBOzs7Ozs7Q0FNQztBQUNEOzs7OztDQUtDO0FBR0QsdUVBQXVFO0FBQ3ZFO0dBQ0cseUJBQXlCO0dBQ3pCLHNCQUFzQjtHQUN0QixxQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3BCO0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTs7Ozs7Ozs7O0NBU0M7QUFHRCx5RUFBeUU7QUFDekU7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUVBOzs7Ozs7Q0FNQztBQUVEO0dBQ0csNERBQTREO0dBQzVELFlBQVk7QUFDZjtBQUVBO0dBQ0csZUFBZTtBQUNsQjtBQUVBO0dBQ0csc0pBQXNKO0dBQ3RKLGlDQUFpQztBQUNwQztBQUNBOzs7Ozs7OztDQVFDO0FBRUQ7O0dBRUcsb0hBQW9IO0dBQ3BILGlDQUFpQztBQUNwQztBQUVBLFVBQVU7QUFDVjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLFVBQVU7QUFFVixtQkFBbUI7QUFDbkI7SUFDSSxZQUFZO0FBQ2hCO0FBQ0EsbUJBQW1CO0FBRW5COzs7O0NBSUM7QUFFRDs7R0FFRyxV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QkFoaEg2QjtFQWloSDdCLG1CQUE4RDtFQTNtSGhFLDJIQUVtRSxFQUFBO0FBOG1IbkU7RUFDRSxjQXIrR1csRUFBQTtBRy9pQmYsOEVBQUE7QUFFQTtFQUFhLFlBQVksRUFBQTtBQUN6QjtFQUFPLFNBQVM7RUFBRSxpREFBaUQsRUFBQTtBQ3BCbkU7RUFDSSx5Qkprc0JXLEVBQUE7QUkvckJmO0VBQ0UseUJKK3JCYSxFQUFBO0FJNXJCZjtFQUNFLHlCSitvQlcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydCBhbGwgdGhlIHRoZW1pbmcgZnVuY3Rpb25hbGl0eS5cbi8vIFdlIGNhbiB1c2UgcmVsYXRpdmUgaW1wb3J0cyBmb3IgaW1wb3J0cyBmcm9tIHRoZSBjZGsgYmVjYXVzZSB3ZSBidW5kbGUgZXZlcnl0aGluZ1xuLy8gdXAgaW50byBhIHNpbmdsZSBmbGF0IHNjc3MgZmlsZSBmb3IgbWF0ZXJpYWwuXG4vLyBXZSB3YW50IG92ZXJsYXlzIHRvIGFsd2F5cyBhcHBlYXIgb3ZlciB1c2VyIGNvbnRlbnQsIHNvIHNldCBhIGJhc2VsaW5lXG4vLyB2ZXJ5IGhpZ2ggei1pbmRleCBmb3IgdGhlIG92ZXJsYXkgY29udGFpbmVyLCB3aGljaCBpcyB3aGVyZSB3ZSBjcmVhdGUgdGhlIG5ld1xuLy8gc3RhY2tpbmcgY29udGV4dCBmb3IgYWxsIG92ZXJsYXlzLlxuJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyOiAxMDAwO1xuJGNkay16LWluZGV4LW92ZXJsYXk6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDogMTAwMDtcblxuLy8gQmFja2dyb3VuZCBjb2xvciBmb3IgYWxsIG9mIHRoZSBiYWNrZHJvcHNcbiRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7XG5cbi8vIERlZmF1bHQgYmFja2Ryb3AgYW5pbWF0aW9uIGlzIGJhc2VkIG9uIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3dpZnQtZWFzZS1vdXQuXG4kYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uOiA0MDBtcyAhZGVmYXVsdDtcbiRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcblxuXG5AbWl4aW4gY2RrLW92ZXJsYXkoKSB7XG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgLy8gRGlzYWJsZSBldmVudHMgZnJvbSBiZWluZyBjYXB0dXJlZCBvbiB0aGUgb3ZlcmxheSBjb250YWluZXIuXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAvLyBUaGUgY29udGFpbmVyIHNob3VsZCBiZSB0aGUgc2l6ZSBvZiB0aGUgdmlld3BvcnQuXG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLy8gVGhlIG92ZXJsYXktY29udGFpbmVyIGlzIGFuIGludmlzaWJsZSBlbGVtZW50IHdoaWNoIGNvbnRhaW5zIGFsbCBpbmRpdmlkdWFsIG92ZXJsYXlzLlxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXktY29udGFpbmVyO1xuXG4gICAgJjplbXB0eSB7XG4gICAgICAvLyBIaWRlIHRoZSBlbGVtZW50IHdoZW4gaXQgZG9lc24ndCBoYXZlIGFueSBjaGlsZCBub2Rlcy4gVGhpcyBkb2Vzbid0XG4gICAgICAvLyBpbmNsdWRlIG92ZXJsYXlzIHRoYXQgaGF2ZSBiZWVuIGRldGFjaGVkLCByYXRoZXIgdGhhbiBkaXNwb3NlZC5cbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLy8gV2UgdXNlIGFuIGV4dHJhIHdyYXBwZXIgZWxlbWVudCBpbiBvcmRlciB0byB1c2UgbWFrZSB0aGUgb3ZlcmxheSBpdHNlbGYgYSBmbGV4IGl0ZW0uXG4gIC8vIFRoaXMgbWFrZXMgY2VudGVyaW5nIHRoZSBvdmVybGF5IGVhc3kgd2l0aG91dCBydW5uaW5nIGludG8gdGhlIHN1YnBpeGVsIHJlbmRlcmluZ1xuICAvLyBwcm9ibGVtcyB0aWVkIHRvIHVzaW5nIGB0cmFuc2Zvcm1gIGFuZCB3aXRob3V0IGludGVyZmVyaW5nIHdpdGggdGhlIG90aGVyIHBvc2l0aW9uXG4gIC8vIHN0cmF0ZWdpZXMuXG4gIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG4gIH1cblxuICAvLyBBIHNpbmdsZSBvdmVybGF5IHBhbmUuXG4gIC5jZGstb3ZlcmxheS1wYW5lIHtcbiAgICAvLyBOb3RlOiBpdCdzIGltcG9ydGFudCBmb3IgdGhpcyBvbmUgdG8gc3RhcnQgb2ZmIGBhYnNvbHV0ZWAsXG4gICAgLy8gaW4gb3JkZXIgZm9yIHVzIHRvIGJlIGFibGUgdG8gbWVhc3VyZSBpdCBjb3JyZWN0bHkuXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgei1pbmRleDogJGNkay16LWluZGV4LW92ZXJsYXk7XG5cbiAgICAvLyBGb3IgY29ubmVjdGVkLXBvc2l0aW9uIG92ZXJsYXlzLCB3ZSBzZXQgYGRpc3BsYXk6IGZsZXhgIGluXG4gICAgLy8gb3JkZXIgdG8gZm9yY2UgYG1heC13aWR0aGAgYW5kIGBtYXgtaGVpZ2h0YCB0byB0YWtlIGVmZmVjdC5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICB9XG5cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgICAvLyBUT0RPKGplbGJvdXJuKTogcmV1c2Ugc2lkZW5hdiBmdWxsc2NyZWVuIG1peGluLlxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG5cbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1iYWNrZHJvcDtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgJGJhY2tkcm9wLWFuaW1hdGlvbi1kdXJhdGlvbiAkYmFja2Ryb3AtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgJi5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgIG9wYWNpdHk6IDE7XG5cbiAgICAgIC8vIEluIGhpZ2ggY29udHJhc3QgbW9kZSB0aGUgcmdiYSBiYWNrZ3JvdW5kIHdpbGwgYmVjb21lIHNvbGlkIHNvIHdlIG5lZWQgdG8gZmFsbCBiYWNrXG4gICAgICAvLyB0byBtYWtpbmcgaXQgb3BhcXVlIHVzaW5nIGBvcGFjaXR5YC4gTm90ZSB0aGF0IHdlIGNhbid0IHVzZSB0aGUgYGNkay1oaWdoLWNvbnRyYXN0YFxuICAgICAgLy8gbWl4aW4sIGJlY2F1c2Ugd2UgY2FuJ3Qgbm9ybWFsaXplIHRoZSBpbXBvcnQgcGF0aCB0byB0aGUgX2ExMXkuc2NzcyBib3RoIGZvciB0aGVcbiAgICAgIC8vIHNvdXJjZSBhbmQgd2hlbiB0aGlzIGZpbGUgaXMgZGlzdHJpYnV0ZWQuIFNlZSAjMTA5MDguXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQ6ICRjZGstb3ZlcmxheS1kYXJrLWJhY2tkcm9wLWJhY2tncm91bmQ7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3Age1xuICAgIC8vIE5vdGU6IGFzIG9mIEZpcmVmb3ggNTcsIGhhdmluZyB0aGUgYmFja2Ryb3AgYmUgYGJhY2tncm91bmQ6IG5vbmVgIHdpbGwgcHJldmVudCBpdCBmcm9tXG4gICAgLy8gY2FwdHVyaW5nIHRoZSB1c2VyJ3MgbW91c2Ugc2Nyb2xsIGV2ZW50cy4gU2luY2Ugd2UgYWxzbyBjYW4ndCB1c2Ugc29tZXRoaW5nIGxpa2VcbiAgICAvLyBgcmdiYSgwLCAwLCAwLCAwKWAsIHdlIHdvcmsgYXJvdW5kIHRoZSBpbmNvbnNpc3RlbmN5IGJ5IG5vdCBzZXR0aW5nIHRoZSBiYWNrZ3JvdW5kIGF0XG4gICAgLy8gYWxsIGFuZCB1c2luZyBgb3BhY2l0eWAgdG8gbWFrZSB0aGUgZWxlbWVudCB0cmFuc3BhcmVudC5cbiAgICAmLCAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cblxuICAvLyBPdmVybGF5IHBhcmVudCBlbGVtZW50IHVzZWQgd2l0aCB0aGUgY29ubmVjdGVkIHBvc2l0aW9uIHN0cmF0ZWd5LiBVc2VkIHRvIGNvbnN0cmFpbiB0aGVcbiAgLy8gb3ZlcmxheSBlbGVtZW50J3Mgc2l6ZSB0byBmaXQgd2l0aGluIHRoZSB2aWV3cG9ydC5cbiAgLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIFdlIHVzZSBgZGlzcGxheTogZmxleGAgb24gdGhpcyBlbGVtZW50IGV4Y2x1c2l2ZWx5IGZvciBjZW50ZXJpbmcgY29ubmVjdGVkIG92ZXJsYXlzLlxuICAgIC8vIFdoZW4gKm5vdCogY2VudGVyaW5nLCBhIHRvcC9sZWZ0L2JvdHRvbS9yaWdodCB3aWxsIGJlIHNldCB3aGljaCBvdmVycmlkZXMgdGhlIG5vcm1hbFxuICAgIC8vIGZsZXggbGF5b3V0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAvLyBXZSB1c2UgdGhlIGBjb2x1bW5gIGRpcmVjdGlvbiBoZXJlIHRvIGF2b2lkIHNvbWUgZmxleGJveCBpc3N1ZXMgaW4gRWRnZVxuICAgIC8vIHdoZW4gdXNpbmcgdGhlIFwiZ3JvdyBhZnRlciBvcGVuXCIgb3B0aW9ucy5cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLy8gQWRkIHNvbWUgZGltZW5zaW9ucyBzbyB0aGUgZWxlbWVudCBoYXMgYW4gYGlubmVyVGV4dGAgd2hpY2ggc29tZSBwZW9wbGUgZGVwZW5kIG9uIGluIHRlc3RzLlxuICAgIG1pbi13aWR0aDogMXB4O1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgfVxuXG4gIC8vIFVzZWQgd2hlbiBkaXNhYmxpbmcgZ2xvYmFsIHNjcm9sbGluZy5cbiAgLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcblxuICAgIC8vIE5lY2Vzc2FyeSBmb3IgdGhlIGNvbnRlbnQgbm90IHRvIGxvc2UgaXRzIHdpZHRoLiBOb3RlIHRoYXQgd2UncmUgdXNpbmcgMTAwJSwgaW5zdGVhZCBvZlxuICAgIC8vIDEwMHZ3LCBiZWNhdXNlIDEwMHZ3IGluY2x1ZGVzIHRoZSB3aWR0aCBwbHVzIHRoZSBzY3JvbGxiYXIsIHdoZXJlYXMgMTAwJSBpcyB0aGUgd2lkdGhcbiAgICAvLyB0aGF0IHRoZSBlbGVtZW50IGhhZCBiZWZvcmUgd2UgbWFkZSBpdCBgZml4ZWRgLlxuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLy8gTm90ZTogdGhpcyB3aWxsIGFsd2F5cyBhZGQgYSBzY3JvbGxiYXIgdG8gd2hhdGV2ZXIgZWxlbWVudCBpdCBpcyBvbiwgd2hpY2ggY2FuXG4gICAgLy8gcG90ZW50aWFsbHkgcmVzdWx0IGluIGRvdWJsZSBzY3JvbGxiYXJzLiBJdCBzaG91bGRuJ3QgYmUgYW4gaXNzdWUsIGJlY2F1c2Ugd2Ugd29uJ3RcbiAgICAvLyBibG9jayBzY3JvbGxpbmcgb24gYSBwYWdlIHRoYXQgZG9lc24ndCBoYXZlIGEgc2Nyb2xsYmFyIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIH1cbn1cblxuQG1peGluIGNkay1hMTF5IHtcbiAgLmNkay12aXN1YWxseS1oaWRkZW4ge1xuICAgIGJvcmRlcjogMDtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7XG5cbiAgICAvLyBBdm9pZCBicm93c2VycyByZW5kZXJpbmcgdGhlIGZvY3VzIHJpbmcgaW4gc29tZSBjYXNlcy5cbiAgICBvdXRsaW5lOiAwO1xuXG4gICAgLy8gQXZvaWQgc29tZSBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciB3aWxsIHN0aWxsIHJlbmRlciB0aGUgbmF0aXZlIGNvbnRyb2xzIChzZWUgIzkwNDkpLlxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBzdHlsZXMgZm9yIHVzZXJzIGluIGhpZ2ggY29udHJhc3QgbW9kZS4gTm90ZSB0aGF0IHRoaXMgb25seSBhcHBsaWVzXG4vLyB0byBNaWNyb3NvZnQgYnJvd3NlcnMuIENocm9tZSBjYW4gYmUgaW5jbHVkZWQgYnkgY2hlY2tpbmcgZm9yIHRoZSBgaHRtbFtoY11gXG4vLyBhdHRyaWJ1dGUsIGhvd2V2ZXIgQ2hyb21lIGhhbmRsZXMgaGlnaCBjb250cmFzdCBkaWZmZXJlbnRseS5cbi8vXG4vLyBAcGFyYW0gdGFyZ2V0IFdoaWNoIGtpbmQgb2YgaGlnaCBjb250cmFzdCBzZXR0aW5nIHRvIHRhcmdldC4gRGVmYXVsdHMgdG8gYGFjdGl2ZWAsIGNhbiBiZVxuLy8gICAgYHdoaXRlLW9uLWJsYWNrYCBvciBgYmxhY2stb24td2hpdGVgLlxuQG1peGluIGNkay1oaWdoLWNvbnRyYXN0KCR0YXJnZXQ6IGFjdGl2ZSkge1xuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiAkdGFyZ2V0KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBlbmFibGUgbW9uaXRvcmluZyBhdXRvZmlsbCBzdGF0ZSBvZiB0ZXh0IGZpZWxkcy5cbkBtaXhpbiBjZGstdGV4dC1maWVsZCB7XG4gIC8vIEtleWZyYW1lcyB0aGF0IGFwcGx5IG5vIHN0eWxlcywgYnV0IGFsbG93IHVzIHRvIG1vbml0b3Igd2hlbiBhbiB0ZXh0IGZpZWxkIGJlY29tZXMgYXV0b2ZpbGxlZFxuICAvLyBieSB3YXRjaGluZyBmb3IgdGhlIGFuaW1hdGlvbiBldmVudHMgdGhhdCBhcmUgZmlyZWQgd2hlbiB0aGV5IHN0YXJ0LiBOb3RlOiB0aGUgLyohKi8gY29tbWVudCBpc1xuICAvLyBuZWVkZWQgdG8gcHJldmVudCBMaWJTYXNzIGZyb20gc3RyaXBwaW5nIHRoZSBrZXlmcmFtZXMgb3V0LlxuICAvLyBCYXNlZCBvbjogaHR0cHM6Ly9tZWRpdW0uY29tL0BicnVubi9kZXRlY3RpbmctYXV0b2ZpbGxlZC1maWVsZHMtaW4tamF2YXNjcmlwdC1hZWQ1OThkMjVkYTdcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7LyohKi99XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHsvKiEqL31cblxuICAuY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDtcbiAgfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6bm90KDotd2Via2l0LWF1dG9maWxsKSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgcmVzaXplIGhhbmRsZSBvbiBhdXRvc2l6aW5nIHRleHRhcmVhcywgYmVjYXVzZSB3aGF0ZXZlciBoZWlnaHRcbiAgLy8gdGhlIHVzZXIgcmVzaXplZCB0byB3aWxsIGJlIG92ZXJ3cml0dGVuIG9uY2UgdGhleSBzdGFydCB0eXBpbmcgYWdhaW4uXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gICAgcmVzaXplOiBub25lO1xuICB9XG5cbiAgLy8gVGhpcyBjbGFzcyBpcyB0ZW1wb3JhcmlseSBhcHBsaWVkIHRvIHRoZSB0ZXh0YXJlYSB3aGVuIGl0IGlzIGJlaW5nIG1lYXN1cmVkLiBJdCBpcyBpbW1lZGlhdGVseVxuICAvLyByZW1vdmVkIHdoZW4gbWVhc3VyaW5nIGlzIGNvbXBsZXRlLiBXZSB1c2UgYCFpbXBvcnRhbnRgIHJ1bGVzIGhlcmUgdG8gbWFrZSBzdXJlIHVzZXItc3BlY2lmaWVkXG4gIC8vIHJ1bGVzIGRvIG5vdCBpbnRlcmZlcmUgd2l0aCB0aGUgbWVhc3VyZW1lbnQuXG4gIHRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZS1tZWFzdXJpbmcge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAvLyBIYXZpbmcgMnB4IHRvcCBhbmQgYm90dG9tIHBhZGRpbmcgc2VlbXMgdG8gZml4IGEgYnVnIHdoZXJlIENocm9tZSBnZXRzIGFuIGluY29ycmVjdFxuICAgIC8vIG1lYXN1cmVtZW50LiBXZSBqdXN0IGhhdmUgdG8gYWNjb3VudCBmb3IgaXQgbGF0ZXIgYW5kIHN1YnRyYWN0IGl0IG9mZiB0aGUgZmluYWwgcmVzdWx0LlxuICAgIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDtcbiAgfVxufVxuXG4vLyBVc2VkIHRvIGdlbmVyYXRlIFVJRHMgZm9yIGtleWZyYW1lcyB1c2VkIHRvIGNoYW5nZSB0aGUgdGV4dCBmaWVsZCBhdXRvZmlsbCBzdHlsZXMuXG4kY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6IDA7XG5cbi8vIE1peGluIHVzZWQgdG8gYXBwbHkgY3VzdG9tIGJhY2tncm91bmQgYW5kIGZvcmVncm91bmQgY29sb3JzIHRvIGFuIGF1dG9maWxsZWQgdGV4dCBmaWVsZC5cbi8vIEJhc2VkIG9uOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNzgxNTQ5L1xuLy8gcmVtb3ZpbmctaW5wdXQtYmFja2dyb3VuZC1jb2xvdXItZm9yLWNocm9tZS1hdXRvY29tcGxldGUjYW5zd2VyLTM3NDMyMjYwXG5AbWl4aW4gY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3IoJGJhY2tncm91bmQsICRmb3JlZ3JvdW5kOicnKSB7XG4gIEBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9IHtcbiAgICB0byB7XG4gICAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICAgIEBpZiAkZm9yZWdyb3VuZCAhPSAnJyB7IGNvbG9yOiAkZm9yZWdyb3VuZDsgfVxuICAgIH1cbiAgfVxuXG4gICY6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICB9XG5cbiAgJi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH07XG4gIH1cblxuICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQ6XG4gICAgICAkY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnQgKyAxICFnbG9iYWw7XG59XG5cblxuLy8gQ29yZSBzdHlsZXMgdGhhdCBjYW4gYmUgdXNlZCB0byBhcHBseSBtYXRlcmlhbCBkZXNpZ24gdHJlYXRtZW50cyB0byBhbnkgZWxlbWVudC5cbi8vIE1lZGlhIHF1ZXJpZXNcbi8vIFRPRE8oam9zZXBocGVycm90dCk6IENoYW5nZSAkbWF0LXhzbWFsbCBhbmQgJG1hdC1zbWFsbCB1c2FnZXMgdG8gcmVseSBvbiBCcmVha3BvaW50T2JzZXJ2ZXIsXG4kbWF0LXhzbWFsbDogJ21heC13aWR0aDogNTk5cHgnO1xuJG1hdC1zbWFsbDogJ21heC13aWR0aDogOTU5cHgnO1xuXG4vLyBUT0RPOiBSZXZpc2l0IGFsbCB6LWluZGljZXMgYmVmb3JlIGJldGFcbi8vIHotaW5kZXggbWFzdGVyIGxpc3RcblxuJHotaW5kZXgtZmFiOiAyMCAhZGVmYXVsdDtcbiR6LWluZGV4LWRyYXdlcjogMTAwICFkZWZhdWx0O1xuXG4vLyBHbG9iYWwgY29uc3RhbnRzXG4kcGk6IDMuMTQxNTkyNjU7XG5cbi8vIFBhZGRpbmcgYmV0d2VlbiBpbnB1dCB0b2dnbGVzIGFuZCB0aGVpciBsYWJlbHNcbiRtYXQtdG9nZ2xlLXBhZGRpbmc6IDhweCAhZGVmYXVsdDtcbi8vIFdpZHRoIGFuZCBoZWlnaHQgb2YgaW5wdXQgdG9nZ2xlc1xuJG1hdC10b2dnbGUtc2l6ZTogMjBweCAhZGVmYXVsdDtcblxuLy8gRWFzaW5nIEN1cnZlc1xuLy8gVE9ETyhqZWxib3Vybik6IGFsbCBvZiB0aGVzZSBuZWVkIHRvIGJlIHJldmlzaXRlZFxuXG4vLyBUaGUgZGVmYXVsdCBhbmltYXRpb24gY3VydmVzIHVzZWQgYnkgbWF0ZXJpYWwgZGVzaWduLlxuJG1hdC1saW5lYXItb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAwLjEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKSAhZGVmYXVsdDtcbiRtYXQtZmFzdC1vdXQtbGluZWFyLWluLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMSwgMSkgIWRlZmF1bHQ7XG5cbiRlYXNlLWluLW91dC1jdXJ2ZS1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMzUsIDAsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1vdXQtZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2Utb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb246IDMwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NSwgMCwgMC41NSwgMC4yKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLWluOiBhbGwgJHN3aWZ0LWVhc2UtaW4tZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb246IDUwMG1zICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbjogJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW4tb3V0OiBhbGwgJHN3aWZ0LWVhc2UtaW4tb3V0LWR1cmF0aW9uICRzd2lmdC1lYXNlLWluLW91dC10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1saW5lYXItZHVyYXRpb246IDgwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbjogbGluZWFyICFkZWZhdWx0O1xuJHN3aWZ0LWxpbmVhcjogYWxsICRzd2lmdC1saW5lYXItZHVyYXRpb24gJHN3aWZ0LWxpbmVhci10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cblxuXG4vLyBBIGNvbGxlY3Rpb24gb2YgbWl4aW5zIGFuZCBDU1MgY2xhc3NlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IGVsZXZhdGlvbiB0byBhIG1hdGVyaWFsXG4vLyBlbGVtZW50LlxuLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9lbnZpcm9ubWVudC9lbGV2YXRpb24uaHRtbFxuLy8gRXhhbXBsZXM6XG4vL1xuLy9cbi8vIC5tYXQtZm9vIHtcbi8vICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oMik7XG4vL1xuLy8gICAmOmFjdGl2ZSB7XG4vLyAgICAgQGluY2x1ZGUgJG1hdC1lbGV2YXRpb24oOCk7XG4vLyAgIH1cbi8vIH1cbi8vXG4vLyA8ZGl2IGlkPVwiZXh0ZXJuYWwtY2FyZFwiIGNsYXNzPVwibWF0LWVsZXZhdGlvbi16MlwiPjxwPlNvbWUgY29udGVudDwvcD48L2Rpdj5cbi8vXG4vLyBGb3IgYW4gZXhwbGFuYXRpb24gb2YgdGhlIGRlc2lnbiBiZWhpbmQgaG93IGVsZXZhdGlvbiBpcyBpbXBsZW1lbnRlZCwgc2VlIHRoZSBkZXNpZ24gZG9jIGF0XG4vLyBodHRwczovL2dvby5nbC9LcTBrOVouXG5cbi8vIENvbG9ycyBmb3IgdW1icmEsIHBlbnVtYnJhLCBhbmQgYW1iaWVudCBzaGFkb3dzLiBBcyBkZXNjcmliZWQgaW4gdGhlIGRlc2lnbiBkb2MsIGVhY2ggZWxldmF0aW9uXG4vLyBsZXZlbCBpcyBjcmVhdGVkIHVzaW5nIGEgc2V0IG9mIDMgc2hhZG93IHZhbHVlcywgb25lIGZvciB1bWJyYSAodGhlIHNoYWRvdyByZXByZXNlbnRpbmcgdGhlXG4vLyBzcGFjZSBjb21wbGV0ZWx5IG9ic2N1cmVkIGJ5IGFuIG9iamVjdCByZWxhdGl2ZSB0byBpdHMgbGlnaHQgc291cmNlKSwgb25lIGZvciBwZW51bWJyYSAodGhlXG4vLyBzcGFjZSBwYXJ0aWFsbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0KSwgYW5kIG9uZSBmb3IgYW1iaWVudCAodGhlIHNwYWNlIHdoaWNoIGNvbnRhaW5zIHRoZSBvYmplY3Rcbi8vIGl0c2VsZikuIEZvciBhIGZ1cnRoZXIgZXhwbGFuYXRpb24gb2YgdGhlc2UgdGVybXMgYW5kIHRoZWlyIG1lYW5pbmdzLCBzZWVcbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1VtYnJhLF9wZW51bWJyYV9hbmRfYW50dW1icmEuXG5cbi8vIE1hcHMgZm9yIHRoZSBkaWZmZXJlbnQgc2hhZG93IHNldHMgYW5kIHRoZWlyIHZhbHVlcyB3aXRoaW4gZWFjaCB6LXNwYWNlLiBUaGVzZSB2YWx1ZXMgd2VyZVxuLy8gY3JlYXRlZCBieSB0YWtpbmcgYSBmZXcgcmVmZXJlbmNlIHNoYWRvdyBzZXRzIGNyZWF0ZWQgYnkgR29vZ2xlJ3MgRGVzaWduZXJzIGFuZCBpbnRlcnBvbGF0aW5nXG4vLyBhbGwgb2YgdGhlIHZhbHVlcyBiZXR3ZWVuIHRoZW0uXG5cbkBmdW5jdGlvbiBfZ2V0LXVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4yKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMnB4IDFweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggM3B4IDFweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDNweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMnB4IDRweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggM3B4IDVweCAtMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggNHB4IDVweCAtMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggNXB4IDVweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggNXB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDZweCA2cHggLTNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA2cHggN3B4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDdweCA4cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA3cHggOXB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggOHB4IDlweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDhweCAxMHB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggOHB4IDExcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCA5cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDlweCAxMnB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMTBweCAxM3B4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjI6ICcwcHggMTBweCAxNHB4IC02cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMTFweCAxNHB4IC03cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMTFweCAxNXB4IC03cHggI3skc2hhZG93LWNvbG9yfSdcbiAgKTtcbn1cblxuQGZ1bmN0aW9uIF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjE0KSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDFweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAycHggMnB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDNweCA0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggNHB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCA1cHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDZweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDdweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDhweCAxMHB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDlweCAxMnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCAxMHB4IDE0cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDExcHggMTVweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggMTJweCAxN3B4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCAxM3B4IDE5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDE0cHggMjFweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggMTVweCAyMnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCAxNnB4IDI0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE3OiAnMHB4IDE3cHggMjZweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggMThweCAyOHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCAxOXB4IDI5cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIwOiAnMHB4IDIwcHggMzFweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggMjFweCAzM3B4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAyMnB4IDM1cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIzOiAnMHB4IDIzcHggMzZweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggMjRweCAzOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSB7XG4gICRzaGFkb3ctY29sb3I6IGlmKHR5cGUtb2YoJGNvbG9yKSA9PSBjb2xvciwgcmdiYSgkY29sb3IsICRvcGFjaXR5ICogMC4xMiksICRjb2xvcik7XG5cbiAgQHJldHVybiAoXG4gICAgMDogJzBweCAwcHggMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOiAnMHB4IDFweCAzcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI6ICcwcHggMXB4IDVweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAxcHggOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA0OiAnMHB4IDFweCAxMHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDFweCAxNHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA2OiAnMHB4IDFweCAxOHB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA3OiAnMHB4IDJweCAxNnB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA4OiAnMHB4IDNweCAxNHB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA5OiAnMHB4IDNweCAxNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMDogJzBweCA0cHggMThweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggNHB4IDIwcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEyOiAnMHB4IDVweCAyMnB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMzogJzBweCA1cHggMjRweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggNXB4IDI2cHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE1OiAnMHB4IDZweCAyOHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNjogJzBweCA2cHggMzBweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggNnB4IDMycHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDdweCAzNHB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxOTogJzBweCA3cHggMzZweCA2cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggOHB4IDM4cHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIxOiAnMHB4IDhweCA0MHB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCA4cHggNDJweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggOXB4IDQ0cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDI0OiAnMHB4IDlweCA0NnB4IDhweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG4vLyBUaGUgZGVmYXVsdCBkdXJhdGlvbiB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbjogMjgwbXMgIWRlZmF1bHQ7XG5cbi8vIFRoZSBkZWZhdWx0IGVhc2luZyB2YWx1ZSBmb3IgZWxldmF0aW9uIHRyYW5zaXRpb25zLlxuJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246ICRtYXQtZmFzdC1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb247XG5cbi8vIFRoZSBkZWZhdWx0IGNvbG9yIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLWNvbG9yOiBibGFjayAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgb3BhY2l0eSBzY2FsaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gc2hhZG93cy5cbiRtYXQtZWxldmF0aW9uLW9wYWNpdHk6IDEgIWRlZmF1bHQ7XG5cbi8vIFByZWZpeCBmb3IgZWxldmF0aW9uLXJlbGF0ZWQgc2VsZWN0b3JzLlxuJF9tYXQtZWxldmF0aW9uLXByZWZpeDogJ21hdC1lbGV2YXRpb24teic7XG5cbi8vIEFwcGxpZXMgdGhlIGNvcnJlY3QgY3NzIHJ1bGVzIHRvIGFuIGVsZW1lbnQgdG8gZ2l2ZSBpdCB0aGUgZWxldmF0aW9uIHNwZWNpZmllZCBieSAkelZhbHVlLlxuLy8gVGhlICR6VmFsdWUgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDI0LlxuQG1peGluIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgQGlmIHR5cGUtb2YoJHpWYWx1ZSkgIT0gbnVtYmVyIG9yIG5vdCB1bml0bGVzcygkelZhbHVlKSB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYSB1bml0bGVzcyBudW1iZXInO1xuICB9XG4gIEBpZiAkelZhbHVlIDwgMCBvciAkelZhbHVlID4gMjQge1xuICAgIEBlcnJvciAnJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQnO1xuICB9XG5cbiAgYm94LXNoYWRvdzogI3ttYXAtZ2V0KF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LXBlbnVtYnJhLW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9LFxuICAgICAgICAgICAgICAje21hcC1nZXQoX2dldC1hbWJpZW50LW1hcCgkY29sb3IsICRvcGFjaXR5KSwgJHpWYWx1ZSl9O1xufVxuXG5AbWl4aW4gX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZWxldmF0aW9uLWNvbG9yOiBtYXAtZ2V0KCRmb3JlZ3JvdW5kLCBlbGV2YXRpb24pO1xuICAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQ6IGlmKCRlbGV2YXRpb24tY29sb3IgPT0gbnVsbCwgJG1hdC1lbGV2YXRpb24tY29sb3IsICRlbGV2YXRpb24tY29sb3IpO1xuXG4gIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0LCAkb3BhY2l0eSk7XG59XG5cbi8vIEFwcGxpZXMgdGhlIGVsZXZhdGlvbiB0byBhbiBlbGVtZW50IGluIGEgbWFubmVyIHRoYXQgYWxsb3dzXG4vLyBjb25zdW1lcnMgdG8gb3ZlcnJpZGUgaXQgdmlhIHRoZSBNYXRlcmlhbCBlbGV2YXRpb24gY2xhc3Nlcy5cbkBtaXhpbiBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKFxuICAgICR6VmFsdWUsXG4gICAgJGNvbG9yOiAkbWF0LWVsZXZhdGlvbi1jb2xvcixcbiAgICAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICAmOm5vdChbY2xhc3MqPScjeyRfbWF0LWVsZXZhdGlvbi1wcmVmaXh9J10pIHtcbiAgICBAaW5jbHVkZSBtYXQtZWxldmF0aW9uKCR6VmFsdWUsICRjb2xvciwgJG9wYWNpdHkpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LW92ZXJyaWRhYmxlLWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGNhbiBiZSB1c2VkIGFzIHRoZSB2YWx1ZSBmb3IgYSB0cmFuc2l0aW9uIHByb3BlcnR5IGZvciBlbGV2YXRpb24uXG4vLyBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gZGlyZWN0bHkgaXMgdXNlZnVsIGluIHNpdHVhdGlvbnMgd2hlcmUgYSBjb21wb25lbnQgbmVlZHMgdG8gdHJhbnNpdGlvblxuLy8gbW9yZSB0aGFuIG9uZSBwcm9wZXJ0eS5cbi8vXG4vLyAuZm9vIHtcbi8vICAgdHJhbnNpdGlvbjogbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXByb3BlcnR5LXZhbHVlKCksIG9wYWNpdHkgMTAwbXMgZWFzZTtcbi8vIH1cbkBmdW5jdGlvbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIEByZXR1cm4gYm94LXNoYWRvdyAjeyRkdXJhdGlvbn0gI3skZWFzaW5nfTtcbn1cblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgbmVlZGVkIHRvIGhhdmUgYW4gZWxlbWVudCB0cmFuc2l0aW9uIGJldHdlZW4gZWxldmF0aW9ucy5cbi8vIFRoaXMgbWl4aW4gc2hvdWxkIGJlIGFwcGxpZWQgdG8gZWxlbWVudHMgd2hvc2UgZWxldmF0aW9uIHZhbHVlcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gdGhlaXJcbi8vIGNvbnRleHQgKGUuZy4gd2hlbiBhY3RpdmUgb3IgZGlzYWJsZWQpLlxuLy9cbi8vIE5PVEUodHJhdmlza2F1Zm1hbik6IEJvdGggdGhpcyBtaXhpbiBhbmQgdGhlIGFib3ZlIGZ1bmN0aW9uIHVzZSBkZWZhdWx0IHBhcmFtZXRlcnMgc28gdGhleSBjYW5cbi8vIGJlIHVzZWQgaW4gdGhlIHNhbWUgd2F5IGJ5IGNsaWVudHMuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uKFxuICAgICRkdXJhdGlvbjogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1kdXJhdGlvbixcbiAgICAkZWFzaW5nOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbikge1xuICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoJGR1cmF0aW9uLCAkZWFzaW5nKTtcbn1cblxuLy8gQ29sb3IgcGFsZXR0ZXMgZnJvbSB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG4vLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29sb3IvXG4vL1xuLy8gQ29udHJhc3QgY29sb3JzIGFyZSBoYXJkLWNvZGVkIGJlY2F1c2UgaXQgaXMgdG9vIGRpZmZpY3VsdCAocHJvYmFibHkgaW1wb3NzaWJsZSkgdG9cbi8vIGNhbGN1bGF0ZSB0aGVtLiBUaGVzZSBjb250cmFzdCBjb2xvcnMgYXJlIHB1bGxlZCBmcm9tIHRoZSBwdWJsaWMgTWF0ZXJpYWwgRGVzaWduIHNwZWMgc3dhdGNoZXMuXG4vLyBXaGlsZSB0aGUgY29udHJhc3QgY29sb3JzIGluIHRoZSBzcGVjIGFyZSBub3QgcHJlc2NyaXB0aXZlLCB3ZSB1c2UgdGhlbSBmb3IgY29udmVuaWVuY2UuXG5cblxuLy8gQGRlcHJlY2F0ZWQgcmVuYW1lZCB0byAkZGFyay1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stODctb3BhY2l0eTogcmdiYShibGFjaywgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRsaWdodC1wcmltYXJ5LXRleHQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtODctb3BhY2l0eTogcmdiYSh3aGl0ZSwgMC44Nyk7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGRhcmstW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay0xMi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS0xMi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjEyKTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTYtb3BhY2l0eTogcmdiYShibGFjaywgMC4wNik7XG4vLyBAZGVwcmVjYXRlZCB1c2UgJGxpZ2h0LVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kd2hpdGUtNi1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjA2KTtcblxuJGRhcmstcHJpbWFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjg3KTtcbiRkYXJrLXNlY29uZGFyeS10ZXh0OiByZ2JhKGJsYWNrLCAwLjU0KTtcbiRkYXJrLWRpc2FibGVkLXRleHQ6IHJnYmEoYmxhY2ssIDAuMzgpO1xuJGRhcmstZGl2aWRlcnM6IHJnYmEoYmxhY2ssIDAuMTIpO1xuJGRhcmstZm9jdXNlZDogcmdiYShibGFjaywgMC4xMik7XG4kbGlnaHQtcHJpbWFyeS10ZXh0OiB3aGl0ZTtcbiRsaWdodC1zZWNvbmRhcnktdGV4dDogcmdiYSh3aGl0ZSwgMC43KTtcbiRsaWdodC1kaXNhYmxlZC10ZXh0OiByZ2JhKHdoaXRlLCAwLjUpO1xuJGxpZ2h0LWRpdmlkZXJzOiByZ2JhKHdoaXRlLCAwLjEyKTtcbiRsaWdodC1mb2N1c2VkOiByZ2JhKHdoaXRlLCAwLjEyKTtcblxuJG1hdC1yZWQ6IChcbiAgNTA6ICNmZmViZWUsXG4gIDEwMDogI2ZmY2RkMixcbiAgMjAwOiAjZWY5YTlhLFxuICAzMDA6ICNlNTczNzMsXG4gIDQwMDogI2VmNTM1MCxcbiAgNTAwOiAjZjQ0MzM2LFxuICA2MDA6ICNlNTM5MzUsXG4gIDcwMDogI2QzMmYyZixcbiAgODAwOiAjYzYyODI4LFxuICA5MDA6ICNiNzFjMWMsXG4gIEExMDA6ICNmZjhhODAsXG4gIEEyMDA6ICNmZjUyNTIsXG4gIEE0MDA6ICNmZjE3NDQsXG4gIEE3MDA6ICNkNTAwMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1waW5rOiAoXG4gIDUwOiAjZmNlNGVjLFxuICAxMDA6ICNmOGJiZDAsXG4gIDIwMDogI2Y0OGZiMSxcbiAgMzAwOiAjZjA2MjkyLFxuICA0MDA6ICNlYzQwN2EsXG4gIDUwMDogI2U5MWU2MyxcbiAgNjAwOiAjZDgxYjYwLFxuICA3MDA6ICNjMjE4NWIsXG4gIDgwMDogI2FkMTQ1NyxcbiAgOTAwOiAjODgwZTRmLFxuICBBMTAwOiAjZmY4MGFiLFxuICBBMjAwOiAjZmY0MDgxLFxuICBBNDAwOiAjZjUwMDU3LFxuICBBNzAwOiAjYzUxMTYyLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtcHVycGxlOiAoXG4gIDUwOiAjZjNlNWY1LFxuICAxMDA6ICNlMWJlZTcsXG4gIDIwMDogI2NlOTNkOCxcbiAgMzAwOiAjYmE2OGM4LFxuICA0MDA6ICNhYjQ3YmMsXG4gIDUwMDogIzljMjdiMCxcbiAgNjAwOiAjOGUyNGFhLFxuICA3MDA6ICM3YjFmYTIsXG4gIDgwMDogIzZhMWI5YSxcbiAgOTAwOiAjNGExNDhjLFxuICBBMTAwOiAjZWE4MGZjLFxuICBBMjAwOiAjZTA0MGZiLFxuICBBNDAwOiAjZDUwMGY5LFxuICBBNzAwOiAjYWEwMGZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLXB1cnBsZTogKFxuICA1MDogI2VkZTdmNixcbiAgMTAwOiAjZDFjNGU5LFxuICAyMDA6ICNiMzlkZGIsXG4gIDMwMDogIzk1NzVjZCxcbiAgNDAwOiAjN2U1N2MyLFxuICA1MDA6ICM2NzNhYjcsXG4gIDYwMDogIzVlMzViMSxcbiAgNzAwOiAjNTEyZGE4LFxuICA4MDA6ICM0NTI3YTAsXG4gIDkwMDogIzMxMWI5MixcbiAgQTEwMDogI2IzODhmZixcbiAgQTIwMDogIzdjNGRmZixcbiAgQTQwMDogIzY1MWZmZixcbiAgQTcwMDogIzYyMDBlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtaW5kaWdvOiAoXG4gIDUwOiAjZThlYWY2LFxuICAxMDA6ICNjNWNhZTksXG4gIDIwMDogIzlmYThkYSxcbiAgMzAwOiAjNzk4NmNiLFxuICA0MDA6ICM1YzZiYzAsXG4gIDUwMDogIzNmNTFiNSxcbiAgNjAwOiAjMzk0OWFiLFxuICA3MDA6ICMzMDNmOWYsXG4gIDgwMDogIzI4MzU5MyxcbiAgOTAwOiAjMWEyMzdlLFxuICBBMTAwOiAjOGM5ZWZmLFxuICBBMjAwOiAjNTM2ZGZlLFxuICBBNDAwOiAjM2Q1YWZlLFxuICBBNzAwOiAjMzA0ZmZlLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ibHVlOiAoXG4gIDUwOiAjZTNmMmZkLFxuICAxMDA6ICNiYmRlZmIsXG4gIDIwMDogIzkwY2FmOSxcbiAgMzAwOiAjNjRiNWY2LFxuICA0MDA6ICM0MmE1ZjUsXG4gIDUwMDogIzIxOTZmMyxcbiAgNjAwOiAjMWU4OGU1LFxuICA3MDA6ICMxOTc2ZDIsXG4gIDgwMDogIzE1NjVjMCxcbiAgOTAwOiAjMGQ0N2ExLFxuICBBMTAwOiAjODJiMWZmLFxuICBBMjAwOiAjNDQ4YWZmLFxuICBBNDAwOiAjMjk3OWZmLFxuICBBNzAwOiAjMjk2MmZmLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtbGlnaHQtYmx1ZTogKFxuICA1MDogI2UxZjVmZSxcbiAgMTAwOiAjYjNlNWZjLFxuICAyMDA6ICM4MWQ0ZmEsXG4gIDMwMDogIzRmYzNmNyxcbiAgNDAwOiAjMjliNmY2LFxuICA1MDA6ICMwM2E5ZjQsXG4gIDYwMDogIzAzOWJlNSxcbiAgNzAwOiAjMDI4OGQxLFxuICA4MDA6ICMwMjc3YmQsXG4gIDkwMDogIzAxNTc5YixcbiAgQTEwMDogIzgwZDhmZixcbiAgQTIwMDogIzQwYzRmZixcbiAgQTQwMDogIzAwYjBmZixcbiAgQTcwMDogIzAwOTFlYSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1jeWFuOiAoXG4gIDUwOiAjZTBmN2ZhLFxuICAxMDA6ICNiMmViZjIsXG4gIDIwMDogIzgwZGVlYSxcbiAgMzAwOiAjNGRkMGUxLFxuICA0MDA6ICMyNmM2ZGEsXG4gIDUwMDogIzAwYmNkNCxcbiAgNjAwOiAjMDBhY2MxLFxuICA3MDA6ICMwMDk3YTcsXG4gIDgwMDogIzAwODM4ZixcbiAgOTAwOiAjMDA2MDY0LFxuICBBMTAwOiAjODRmZmZmLFxuICBBMjAwOiAjMThmZmZmLFxuICBBNDAwOiAjMDBlNWZmLFxuICBBNzAwOiAjMDBiOGQ0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtdGVhbDogKFxuICA1MDogI2UwZjJmMSxcbiAgMTAwOiAjYjJkZmRiLFxuICAyMDA6ICM4MGNiYzQsXG4gIDMwMDogIzRkYjZhYyxcbiAgNDAwOiAjMjZhNjlhLFxuICA1MDA6ICMwMDk2ODgsXG4gIDYwMDogIzAwODk3YixcbiAgNzAwOiAjMDA3OTZiLFxuICA4MDA6ICMwMDY5NWMsXG4gIDkwMDogIzAwNGQ0MCxcbiAgQTEwMDogI2E3ZmZlYixcbiAgQTIwMDogIzY0ZmZkYSxcbiAgQTQwMDogIzFkZTliNixcbiAgQTcwMDogIzAwYmZhNSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWdyZWVuOiAoXG4gIDUwOiAjZThmNWU5LFxuICAxMDA6ICNjOGU2YzksXG4gIDIwMDogI2E1ZDZhNyxcbiAgMzAwOiAjODFjNzg0LFxuICA0MDA6ICM2NmJiNmEsXG4gIDUwMDogIzRjYWY1MCxcbiAgNjAwOiAjNDNhMDQ3LFxuICA3MDA6ICMzODhlM2MsXG4gIDgwMDogIzJlN2QzMixcbiAgOTAwOiAjMWI1ZTIwLFxuICBBMTAwOiAjYjlmNmNhLFxuICBBMjAwOiAjNjlmMGFlLFxuICBBNDAwOiAjMDBlNjc2LFxuICBBNzAwOiAjMDBjODUzLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ncmVlbjogKFxuICA1MDogI2YxZjhlOSxcbiAgMTAwOiAjZGNlZGM4LFxuICAyMDA6ICNjNWUxYTUsXG4gIDMwMDogI2FlZDU4MSxcbiAgNDAwOiAjOWNjYzY1LFxuICA1MDA6ICM4YmMzNGEsXG4gIDYwMDogIzdjYjM0MixcbiAgNzAwOiAjNjg5ZjM4LFxuICA4MDA6ICM1NThiMmYsXG4gIDkwMDogIzMzNjkxZSxcbiAgQTEwMDogI2NjZmY5MCxcbiAgQTIwMDogI2IyZmY1OSxcbiAgQTQwMDogIzc2ZmYwMyxcbiAgQTcwMDogIzY0ZGQxNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saW1lOiAoXG4gIDUwOiAjZjlmYmU3LFxuICAxMDA6ICNmMGY0YzMsXG4gIDIwMDogI2U2ZWU5YyxcbiAgMzAwOiAjZGNlNzc1LFxuICA0MDA6ICNkNGUxNTcsXG4gIDUwMDogI2NkZGMzOSxcbiAgNjAwOiAjYzBjYTMzLFxuICA3MDA6ICNhZmI0MmIsXG4gIDgwMDogIzllOWQyNCxcbiAgOTAwOiAjODI3NzE3LFxuICBBMTAwOiAjZjRmZjgxLFxuICBBMjAwOiAjZWVmZjQxLFxuICBBNDAwOiAjYzZmZjAwLFxuICBBNzAwOiAjYWVlYTAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC15ZWxsb3c6IChcbiAgNTA6ICNmZmZkZTcsXG4gIDEwMDogI2ZmZjljNCxcbiAgMjAwOiAjZmZmNTlkLFxuICAzMDA6ICNmZmYxNzYsXG4gIDQwMDogI2ZmZWU1OCxcbiAgNTAwOiAjZmZlYjNiLFxuICA2MDA6ICNmZGQ4MzUsXG4gIDcwMDogI2ZiYzAyZCxcbiAgODAwOiAjZjlhODI1LFxuICA5MDA6ICNmNTdmMTcsXG4gIEExMDA6ICNmZmZmOGQsXG4gIEEyMDA6ICNmZmZmMDAsXG4gIEE0MDA6ICNmZmVhMDAsXG4gIEE3MDA6ICNmZmQ2MDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYW1iZXI6IChcbiAgNTA6ICNmZmY4ZTEsXG4gIDEwMDogI2ZmZWNiMyxcbiAgMjAwOiAjZmZlMDgyLFxuICAzMDA6ICNmZmQ1NGYsXG4gIDQwMDogI2ZmY2EyOCxcbiAgNTAwOiAjZmZjMTA3LFxuICA2MDA6ICNmZmIzMDAsXG4gIDcwMDogI2ZmYTAwMCxcbiAgODAwOiAjZmY4ZjAwLFxuICA5MDA6ICNmZjZmMDAsXG4gIEExMDA6ICNmZmU1N2YsXG4gIEEyMDA6ICNmZmQ3NDAsXG4gIEE0MDA6ICNmZmM0MDAsXG4gIEE3MDA6ICNmZmFiMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtb3JhbmdlOiAoXG4gIDUwOiAjZmZmM2UwLFxuICAxMDA6ICNmZmUwYjIsXG4gIDIwMDogI2ZmY2M4MCxcbiAgMzAwOiAjZmZiNzRkLFxuICA0MDA6ICNmZmE3MjYsXG4gIDUwMDogI2ZmOTgwMCxcbiAgNjAwOiAjZmI4YzAwLFxuICA3MDA6ICNmNTdjMDAsXG4gIDgwMDogI2VmNmMwMCxcbiAgOTAwOiAjZTY1MTAwLFxuICBBMTAwOiAjZmZkMTgwLFxuICBBMjAwOiAjZmZhYjQwLFxuICBBNDAwOiAjZmY5MTAwLFxuICBBNzAwOiAjZmY2ZDAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiBibGFjayxcbiAgKVxuKTtcblxuJG1hdC1kZWVwLW9yYW5nZTogKFxuICA1MDogI2ZiZTllNyxcbiAgMTAwOiAjZmZjY2JjLFxuICAyMDA6ICNmZmFiOTEsXG4gIDMwMDogI2ZmOGE2NSxcbiAgNDAwOiAjZmY3MDQzLFxuICA1MDA6ICNmZjU3MjIsXG4gIDYwMDogI2Y0NTExZSxcbiAgNzAwOiAjZTY0YTE5LFxuICA4MDA6ICNkODQzMTUsXG4gIDkwMDogI2JmMzYwYyxcbiAgQTEwMDogI2ZmOWU4MCxcbiAgQTIwMDogI2ZmNmU0MCxcbiAgQTQwMDogI2ZmM2QwMCxcbiAgQTcwMDogI2RkMmMwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtYnJvd246IChcbiAgNTA6ICNlZmViZTksXG4gIDEwMDogI2Q3Y2NjOCxcbiAgMjAwOiAjYmNhYWE0LFxuICAzMDA6ICNhMTg4N2YsXG4gIDQwMDogIzhkNmU2MyxcbiAgNTAwOiAjNzk1NTQ4LFxuICA2MDA6ICM2ZDRjNDEsXG4gIDcwMDogIzVkNDAzNyxcbiAgODAwOiAjNGUzNDJlLFxuICA5MDA6ICMzZTI3MjMsXG4gIEExMDA6ICNkN2NjYzgsXG4gIEEyMDA6ICNiY2FhYTQsXG4gIEE0MDA6ICM4ZDZlNjMsXG4gIEE3MDA6ICM1ZDQwMzcsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JleTogKFxuICA1MDogI2ZhZmFmYSxcbiAgMTAwOiAjZjVmNWY1LFxuICAyMDA6ICNlZWVlZWUsXG4gIDMwMDogI2UwZTBlMCxcbiAgNDAwOiAjYmRiZGJkLFxuICA1MDA6ICM5ZTllOWUsXG4gIDYwMDogIzc1NzU3NSxcbiAgNzAwOiAjNjE2MTYxLFxuICA4MDA6ICM0MjQyNDIsXG4gIDkwMDogIzIxMjEyMSxcbiAgQTEwMDogI2ZmZmZmZixcbiAgQTIwMDogI2VlZWVlZSxcbiAgQTQwMDogI2JkYmRiZCxcbiAgQTcwMDogIzYxNjE2MSxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4vLyBBbGlhcyBmb3IgYWx0ZXJuYXRlIHNwZWxsaW5nLlxuJG1hdC1ncmF5OiAkbWF0LWdyZXk7XG5cbiRtYXQtYmx1ZS1ncmV5OiAoXG4gIDUwOiAjZWNlZmYxLFxuICAxMDA6ICNjZmQ4ZGMsXG4gIDIwMDogI2IwYmVjNSxcbiAgMzAwOiAjOTBhNGFlLFxuICA0MDA6ICM3ODkwOWMsXG4gIDUwMDogIzYwN2Q4YixcbiAgNjAwOiAjNTQ2ZTdhLFxuICA3MDA6ICM0NTVhNjQsXG4gIDgwMDogIzM3NDc0ZixcbiAgOTAwOiAjMjYzMjM4LFxuICBBMTAwOiAjY2ZkOGRjLFxuICBBMjAwOiAjYjBiZWM1LFxuICBBNDAwOiAjNzg5MDljLFxuICBBNzAwOiAjNDU1YTY0LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWJsdWUtZ3JheTogJG1hdC1ibHVlLWdyZXk7XG5cblxuLy8gQmFja2dyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCAxMDApLFxuICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNTApLFxuICBob3ZlcjogICAgICByZ2JhKGJsYWNrLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgd2hpdGUsXG4gIGRpYWxvZzogICAgIHdoaXRlLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEoYmxhY2ssIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiB3aGl0ZSxcbiAgZm9jdXNlZC1idXR0b246ICRkYXJrLWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDQwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IG1hcF9nZXQoJG1hdC1ncmV5LCAyMDApLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCAzMDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4pO1xuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGRhcmsgdGhlbWVzLlxuJG1hdC1kYXJrLXRoZW1lLWJhY2tncm91bmQ6IChcbiAgc3RhdHVzLWJhcjogYmxhY2ssXG4gIGFwcC1iYXI6ICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBiYWNrZ3JvdW5kOiAjMzAzMDMwLFxuICBob3ZlcjogICAgICByZ2JhKHdoaXRlLCAwLjA0KSwgLy8gVE9ETyhrYXJhKTogY2hlY2sgc3R5bGUgd2l0aCBNYXRlcmlhbCBEZXNpZ24gVVhcbiAgY2FyZDogICAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpYWxvZzogICAgIG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b246IHJnYmEod2hpdGUsIDAuMTIpLFxuICByYWlzZWQtYnV0dG9uOiBtYXAtZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZm9jdXNlZC1idXR0b246ICRsaWdodC1mb2N1c2VkLFxuICBzZWxlY3RlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA5MDApLFxuICBzZWxlY3RlZC1kaXNhYmxlZC1idXR0b246IG1hcF9nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBkaXNhYmxlZC1idXR0b24tdG9nZ2xlOiBibGFjayxcbiAgdW5zZWxlY3RlZC1jaGlwOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNzAwKSxcbiAgZGlzYWJsZWQtbGlzdC1vcHRpb246IGJsYWNrLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBsaWdodCB0aGVtZXMuXG4kbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQ6IChcbiAgYmFzZTogICAgICAgICAgICAgIGJsYWNrLFxuICBkaXZpZGVyOiAgICAgICAgICAgJGRhcmstZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGRpc2FibGVkLWJ1dHRvbjogICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIGVsZXZhdGlvbjogICAgICAgICBibGFjayxcbiAgaGludC10ZXh0OiAgICAgICAgICRkYXJrLWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkZGFyay1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuNTQpLFxuICBpY29uczogICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIHRleHQ6ICAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjg3KSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYShibGFjaywgMC4yNiksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKGJsYWNrLCAwLjM4KSxcbik7XG5cbi8vIEZvcmVncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgd2hpdGUsXG4gIGRpdmlkZXI6ICAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpdmlkZXJzOiAgICAgICAgICAkbGlnaHQtZGl2aWRlcnMsXG4gIGRpc2FibGVkOiAgICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEod2hpdGUsIDAuMyksXG4gIGRpc2FibGVkLXRleHQ6ICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGxpZ2h0LWRpc2FibGVkLXRleHQsXG4gIHNlY29uZGFyeS10ZXh0OiAgICAkbGlnaHQtc2Vjb25kYXJ5LXRleHQsXG4gIGljb246ICAgICAgICAgICAgICB3aGl0ZSxcbiAgaWNvbnM6ICAgICAgICAgICAgIHdoaXRlLFxuICB0ZXh0OiAgICAgICAgICAgICAgd2hpdGUsXG4gIHNsaWRlci1taW46ICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW9mZjogICAgICAgIHJnYmEod2hpdGUsIDAuMyksXG4gIHNsaWRlci1vZmYtYWN0aXZlOiByZ2JhKHdoaXRlLCAwLjMpLFxuKTtcblxuXG5cbi8vIEZvciBhIGdpdmVuIGh1ZSBpbiBhIHBhbGV0dGUsIHJldHVybiB0aGUgY29udHJhc3QgY29sb3IgZnJvbSB0aGUgbWFwIG9mIGNvbnRyYXN0IHBhbGV0dGVzLlxuLy8gQHBhcmFtICRjb2xvci1tYXBcbi8vIEBwYXJhbSAkaHVlXG5AZnVuY3Rpb24gbWF0LWNvbnRyYXN0KCRwYWxldHRlLCAkaHVlKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRwYWxldHRlLCBjb250cmFzdCksICRodWUpO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBtYXAgb2YgaHVlcyB0byBjb2xvcnMgZm9yIGEgdGhlbWUuIFRoaXMgaXMgdXNlZCB0byBkZWZpbmUgYSB0aGVtZSBwYWxldHRlIGluIHRlcm1zXG4vLyBvZiB0aGUgTWF0ZXJpYWwgRGVzaWduIGh1ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRwcmltYXJ5XG4vLyBAcGFyYW0gJGxpZ2h0ZXJcbkBmdW5jdGlvbiBtYXQtcGFsZXR0ZSgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdDogNTAwLCAkbGlnaHRlcjogMTAwLCAkZGFya2VyOiA3MDApIHtcbiAgJHJlc3VsdDogbWFwX21lcmdlKCRiYXNlLXBhbGV0dGUsIChcbiAgICBkZWZhdWx0OiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0KSxcbiAgICBsaWdodGVyOiBtYXAtZ2V0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlciksXG5cbiAgICBkZWZhdWx0LWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkbGlnaHRlciksXG4gICAgZGFya2VyLWNvbnRyYXN0OiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGRhcmtlcilcbiAgKSk7XG5cbiAgLy8gRm9yIGVhY2ggaHVlIGluIHRoZSBwYWxldHRlLCBhZGQgYSBcIi1jb250cmFzdFwiIGNvbG9yIHRvIHRoZSBtYXAuXG4gIEBlYWNoICRodWUsICRjb2xvciBpbiAkYmFzZS1wYWxldHRlIHtcbiAgICAkcmVzdWx0OiBtYXBfbWVyZ2UoJHJlc3VsdCwgKFxuICAgICAgJyN7JGh1ZX0tY29udHJhc3QnOiBtYXQtY29udHJhc3QoJGJhc2UtcGFsZXR0ZSwgJGh1ZSlcbiAgICApKTtcbiAgfVxuXG4gIEByZXR1cm4gJHJlc3VsdDtcbn1cblxuXG4vLyBHZXRzIGEgY29sb3IgZnJvbSBhIHRoZW1lIHBhbGV0dGUgKHRoZSBvdXRwdXQgb2YgbWF0LXBhbGV0dGUpLlxuLy8gVGhlIGh1ZSBjYW4gYmUgb25lIG9mIHRoZSBzdGFuZGFyZCB2YWx1ZXMgKDUwMCwgQTQwMCwgZXRjLiksIG9uZSBvZiB0aGUgdGhyZWUgcHJlY29uZmlndXJlZFxuLy8gaHVlcyAoZGVmYXVsdCwgbGlnaHRlciwgZGFya2VyKSwgb3IgYW55IG9mIHRoZSBhZm9yZW1lbnRpb25lZCBwcmVmaXhlZCB3aXRoIFwiLWNvbnRyYXN0XCIuXG4vL1xuLy8gQHBhcmFtICRjb2xvci1tYXAgVGhlIHRoZW1lIHBhbGV0dGUgKG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBAcGFyYW0gJGh1ZSBUaGUgaHVlIGZyb20gdGhlIHBhbGV0dGUgdG8gdXNlLiBJZiB0aGlzIGlzIGEgdmFsdWUgYmV0d2VlbiAwIGFuZCAxLCBpdCB3aWxsXG4vLyAgICAgYmUgdHJlYXRlZCBhcyBvcGFjaXR5LlxuLy8gQHBhcmFtICRvcGFjaXR5IFRoZSBhbHBoYSBjaGFubmVsIHZhbHVlIGZvciB0aGUgY29sb3IuXG5AZnVuY3Rpb24gbWF0LWNvbG9yKCRwYWxldHRlLCAkaHVlOiBkZWZhdWx0LCAkb3BhY2l0eTogbnVsbCkge1xuICAvLyBJZiBodWVLZXkgaXMgYSBudW1iZXIgYmV0d2VlbiB6ZXJvIGFuZCBvbmUsIHRoZW4gaXQgYWN0dWFsbHkgY29udGFpbnMgYW5cbiAgLy8gb3BhY2l0eSB2YWx1ZSwgc28gcmVjYWxsIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgZGVmYXVsdCBodWUgYW5kIHRoYXQgZ2l2ZW4gb3BhY2l0eS5cbiAgQGlmIHR5cGUtb2YoJGh1ZSkgPT0gbnVtYmVyIGFuZCAkaHVlID49IDAgYW5kICRodWUgPD0gMSB7XG4gICAgQHJldHVybiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQsICRodWUpO1xuICB9XG5cbiAgJGNvbG9yOiBtYXAtZ2V0KCRwYWxldHRlLCAkaHVlKTtcblxuICBAaWYgKHR5cGUtb2YoJGNvbG9yKSAhPSBjb2xvcikge1xuICAgIC8vIElmIHRoZSAkY29sb3IgcmVzb2x2ZWQgdG8gc29tZXRoaW5nIGRpZmZlcmVudCBmcm9tIGEgY29sb3IgKGUuZy4gYSBDU1MgdmFyaWFibGUpLFxuICAgIC8vIHdlIGNhbid0IGFwcGx5IHRoZSBvcGFjaXR5IGFueXdheSBzbyB3ZSByZXR1cm4gdGhlIHZhbHVlIGFzIGlzLCBvdGhlcndpc2UgU2FzcyBjYW5cbiAgICAvLyB0aHJvdyBhbiBlcnJvciBvciBvdXRwdXQgc29tZXRoaW5nIGludmFsaWQuXG4gICAgQHJldHVybiAkY29sb3I7XG4gIH1cblxuICBAcmV0dXJuIHJnYmEoJGNvbG9yLCBpZigkb3BhY2l0eSA9PSBudWxsLCBvcGFjaXR5KCRjb2xvciksICRvcGFjaXR5KSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIGNvbnRhaW5lciBvYmplY3QgZm9yIGEgbGlnaHQgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1saWdodC10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogZmFsc2UsXG4gICAgZm9yZWdyb3VuZDogJG1hdC1saWdodC10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBkYXJrIHRoZW1lIHRvIGJlIGdpdmVuIHRvIGluZGl2aWR1YWwgY29tcG9uZW50IHRoZW1lIG1peGlucy5cbkBmdW5jdGlvbiBtYXQtZGFyay10aGVtZSgkcHJpbWFyeSwgJGFjY2VudCwgJHdhcm46IG1hdC1wYWxldHRlKCRtYXQtcmVkKSkge1xuICBAcmV0dXJuIChcbiAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICBhY2NlbnQ6ICRhY2NlbnQsXG4gICAgd2FybjogJHdhcm4sXG4gICAgaXMtZGFyazogdHJ1ZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtZm9yZWdyb3VuZCxcbiAgICBiYWNrZ3JvdW5kOiAkbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZCxcbiAgKTtcbn1cblxuXG5cbiRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk6IDAuMTtcblxuQG1peGluIG1hdC1yaXBwbGUoKSB7XG5cbiAgLy8gVGhlIGhvc3QgZWxlbWVudCBvZiBhbiBtYXQtcmlwcGxlIGRpcmVjdGl2ZSBzaG91bGQgYWx3YXlzIGhhdmUgYSBwb3NpdGlvbiBvZiBcImFic29sdXRlXCIgb3JcbiAgLy8gXCJyZWxhdGl2ZVwiIHNvIHRoYXQgdGhlIHJpcHBsZXMgaW5zaWRlIGFyZSBjb3JyZWN0bHkgcG9zaXRpb25lZCByZWxhdGl2ZWx5IHRvIHRoZSBjb250YWluZXIuXG4gIC5tYXQtcmlwcGxlIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLy8gQnkgZGVmYXVsdCwgZXZlcnkgcmlwcGxlIGNvbnRhaW5lciBzaG91bGQgaGF2ZSBwb3NpdGlvbjogcmVsYXRpdmUgaW4gZmF2b3Igb2YgY3JlYXRpbmcgYW5cbiAgICAvLyBlYXN5IEFQSSBmb3IgZGV2ZWxvcGVycyB1c2luZyB0aGUgTWF0UmlwcGxlIGRpcmVjdGl2ZS5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LXJpcHBsZS5tYXQtcmlwcGxlLXVuYm91bmRlZCB7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIH1cblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuXG4gICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByaXBwbGUgaXMgb3BhcXVlLCBjYXVzaW5nIGl0IHRvIG9ic3RydWN0IHRoZSBjb250ZW50LlxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG5cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG5AbWl4aW4gbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcF9nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQtYmFzZTogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgLy8gSWYgdGhlIHJpcHBsZSBjb2xvciBpcyByZXNvbHZlcyB0byBhIGNvbG9yICp0eXBlKiwgd2UgY2FuIHVzZSBpdCBkaXJlY3RseSwgb3RoZXJ3aXNlXG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpIHdlIGZhbGwgYmFjayB0byB1c2luZyB0aGUgY29sb3IgYW5kIHNldHRpbmcgYW4gb3BhY2l0eS5cbiAgICBAaWYgKHR5cGUtb2YoJGZvcmVncm91bmQtYmFzZSkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGZvcmVncm91bmQtYmFzZSwgJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmb3JlZ3JvdW5kLWJhc2U7XG4gICAgICBvcGFjaXR5OiAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5O1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gVXRpbGl0eSBmb3IgZmV0Y2hpbmcgYSBuZXN0ZWQgdmFsdWUgZnJvbSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCAkbmFtZSkge1xuICBAcmV0dXJuIG1hcC1nZXQobWFwLWdldCgkY29uZmlnLCAkbGV2ZWwpLCAkbmFtZSk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQgc2l6ZSBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC1zaXplKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXNpemUpO1xufVxuXG4vLyBHZXRzIHRoZSBsaW5lIGhlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGxpbmUtaGVpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCB3ZWlnaHQgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LXdlaWdodCk7XG59XG5cbi8vIEdldHMgdGhlIGxldHRlciBzcGFjaW5nIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGV0dGVyLXNwYWNpbmcpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250LWZhbWlseSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcgYW5kIHJlbW92ZXMgdGhlIHF1b3RlcyBhcm91bmQgaXQuXG5AZnVuY3Rpb24gbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsICRsZXZlbDogbnVsbCkge1xuICAkZm9udC1mYW1pbHk6IG1hcC1nZXQoJGNvbmZpZywgZm9udC1mYW1pbHkpO1xuXG4gIEBpZiAkbGV2ZWwgIT0gbnVsbCB7XG4gICAgJGZvbnQtZmFtaWx5OiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgZm9udC1mYW1pbHkpO1xuICB9XG5cbiAgLy8gR3VhcmQgYWdhaW5zdCB1bnF1b3Rpbmcgbm9uLXN0cmluZyB2YWx1ZXMsIGJlY2F1c2UgaXQncyBkZXByZWNhdGVkLlxuICBAcmV0dXJuIGlmKHR5cGUtb2YoJGZvbnQtZmFtaWx5KSA9PSBzdHJpbmcsIHVucXVvdGUoJGZvbnQtZmFtaWx5KSwgJGZvbnQtZmFtaWx5KTtcbn1cblxuLy8gT3V0cHV0cyB0aGUgc2hvcnRoYW5kIGBmb250YCBDU1MgcHJvcGVydHksIGJhc2VkIG9uIGEgc2V0IG9mIHR5cG9ncmFwaHkgdmFsdWVzLiBGYWxscyBiYWNrIHRvXG4vLyB0aGUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzIGlmIGEgdmFsdWUgdGhhdCBpc24ndCBhbGxvd2VkIGluIHRoZSBzaG9ydGhhbmQgaXMgcGFzc2VkIGluLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpIHtcbiAgLy8gSWYgYW55IG9mIHRoZSB2YWx1ZXMgYXJlIHNldCB0byBgaW5oZXJpdGAsIHdlIGNhbid0IHVzZSB0aGUgc2hvcnRoYW5kXG4gIC8vIHNvIHdlIGZhbGwgYmFjayB0byBwYXNzaW5nIGluIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMuXG4gIEBpZiAoJGZvbnQtc2l6ZSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IGluaGVyaXQgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtc2l6ZSA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtd2VpZ2h0ID09IG51bGwgb3JcbiAgICAgICAkbGluZS1oZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRmb250LWZhbWlseSA9PSBudWxsKSB7XG5cbiAgICBmb250LXNpemU6ICRmb250LXNpemU7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodDtcbiAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cbiAgQGVsc2Uge1xuICAgIC8vIE90aGVyd2lzZSB1c2UgdGhlIHNob3J0aGFuZCBgZm9udGAsIGJlY2F1c2UgaXQncyB0aGUgbGVhc3QgYW1vdW50IG9mIGJ5dGVzLiBOb3RlXG4gICAgLy8gdGhhdCB3ZSBuZWVkIHRvIHVzZSBpbnRlcnBvbGF0aW9uIGZvciBgZm9udC1zaXplL2xpbmUtaGVpZ2h0YCBpbiBvcmRlciB0byBwcmV2ZW50XG4gICAgLy8gU2FzcyBmcm9tIGRpdmlkaW5nIHRoZSB0d28gdmFsdWVzLlxuICAgIGZvbnQ6ICRmb250LXdlaWdodCAjeyRmb250LXNpemV9LyN7JGxpbmUtaGVpZ2h0fSAkZm9udC1mYW1pbHk7XG4gIH1cbn1cblxuLy8gQ29udmVydHMgYSB0eXBvZ3JhcGh5IGxldmVsIGludG8gQ1NTIHN0eWxlcy5cbkBtaXhpbiBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgJGxldmVsKSB7XG4gICRmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgJGxldmVsKTtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsKTtcblxuICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZCgkZm9udC1zaXplLCAkZm9udC13ZWlnaHQsICRsaW5lLWhlaWdodCwgJGZvbnQtZmFtaWx5KTtcbiAgbGV0dGVyLXNwYWNpbmc6IG1hdC1sZXR0ZXItc3BhY2luZygkY29uZmlnLCAkbGV2ZWwpO1xufVxuXG5cbkBtaXhpbiBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LW9wdGlvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksXG4gICAgJjpmb2N1czpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIEluIG11bHRpcGxlIG1vZGUgdGhlcmUgaXMgYSBjaGVja2JveCB0byBzaG93IHRoYXQgdGhlIG9wdGlvbiBpcyBzZWxlY3RlZC5cbiAgICAmLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWN0aXZlIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgJi5tYXQtb3B0aW9uLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRpb24ge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTIpO1xuICB9XG59XG5cblxuXG5AbWl4aW4gbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuICAkY29sb3JlZC1ib3gtc2VsZWN0b3I6ICcubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlJztcblxuICAubWF0LXBzZXVkby1jaGVja2JveCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCksIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlZmF1bHQgdG8gdGhlIGFjY2VudCBjb2xvci4gTm90ZSB0aGF0IHRoZSBwc2V1ZG8gY2hlY2tib3hlcyBhcmUgbWVhbnQgdG8gaW5oZXJpdCB0aGVcbiAgLy8gdGhlbWUgZnJvbSB0aGVpciBwYXJlbnQsIHJhdGhlciB0aGFuIGltcGxlbWVudGluZyB0aGVpciBvd24gdGhlbWluZywgd2hpY2ggaXMgd2h5IHdlXG4gIC8vIGRvbid0IGF0dGFjaCB0byB0aGUgYG1hdC0qYCBjbGFzc2VzLlxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcbiAgfVxuXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gIH1cblxuICAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuICAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICAmLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICAgYmFja2dyb3VuZDogJGRpc2FibGVkLWNvbG9yO1xuICAgIH1cbiAgfVxufVxuXG5cblxuLy8gUmVwcmVzZW50cyBhIHR5cG9ncmFwaHkgbGV2ZWwgZnJvbSB0aGUgTWF0ZXJpYWwgZGVzaWduIHNwZWMuXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktbGV2ZWwoXG4gICRmb250LXNpemUsXG4gICRsaW5lLWhlaWdodDogJGZvbnQtc2l6ZSxcbiAgJGZvbnQtd2VpZ2h0OiA0MDAsXG4gICRmb250LWZhbWlseTogbnVsbCxcbiAgJGxldHRlci1zcGFjaW5nOiBudWxsKSB7XG5cbiAgQHJldHVybiAoXG4gICAgZm9udC1zaXplOiAkZm9udC1zaXplLFxuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQsXG4gICAgZm9udC13ZWlnaHQ6ICRmb250LXdlaWdodCxcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5LFxuICAgIGxldHRlci1zcGFjaW5nOiAkbGV0dGVyLXNwYWNpbmdcbiAgKTtcbn1cblxuLy8gUmVwcmVzZW50cyBhIGNvbGxlY3Rpb24gb2YgdHlwb2dyYXBoeSBsZXZlbHMuXG4vLyBEZWZhdWx0cyBjb21lIGZyb20gaHR0cHM6Ly9tYXRlcmlhbC5pby9ndWlkZWxpbmVzL3N0eWxlL3R5cG9ncmFwaHkuaHRtbFxuQGZ1bmN0aW9uIG1hdC10eXBvZ3JhcGh5LWNvbmZpZyhcbiAgJGZvbnQtZmFtaWx5OiAgICdSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXG4gICRkaXNwbGF5LTQ6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMTJweCwgMTEycHgsIDMwMCksXG4gICRkaXNwbGF5LTM6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg1NnB4LCA1NnB4LCA0MDApLFxuICAkZGlzcGxheS0yOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoNDVweCwgNDhweCwgNDAwKSxcbiAgJGRpc3BsYXktMTogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDM0cHgsIDQwcHgsIDQwMCksXG4gICRoZWFkbGluZTogICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyNHB4LCAzMnB4LCA0MDApLFxuICAkdGl0bGU6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMjBweCwgMzJweCwgNTAwKSxcbiAgJHN1YmhlYWRpbmctMjogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE2cHgsIDI4cHgsIDQwMCksXG4gICRzdWJoZWFkaW5nLTE6ICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNXB4LCAyNHB4LCA0MDApLFxuICAkYm9keS0yOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjRweCwgNTAwKSxcbiAgJGJvZHktMTogICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE0cHgsIDIwcHgsIDQwMCksXG4gICRjYXB0aW9uOiAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxMnB4LCAyMHB4LCA0MDApLFxuICAkYnV0dG9uOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMTRweCwgNTAwKSxcbiAgLy8gTGluZS1oZWlnaHQgbXVzdCBiZSB1bml0LWxlc3MgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZS5cbiAgJGlucHV0OiAgICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKGluaGVyaXQsIDEuMTI1LCA0MDApXG4pIHtcblxuICAvLyBEZWNsYXJlIGFuIGluaXRpYWwgbWFwIHdpdGggYWxsIG9mIHRoZSBsZXZlbHMuXG4gICRjb25maWc6IChcbiAgICBkaXNwbGF5LTQ6ICAgICAgJGRpc3BsYXktNCxcbiAgICBkaXNwbGF5LTM6ICAgICAgJGRpc3BsYXktMyxcbiAgICBkaXNwbGF5LTI6ICAgICAgJGRpc3BsYXktMixcbiAgICBkaXNwbGF5LTE6ICAgICAgJGRpc3BsYXktMSxcbiAgICBoZWFkbGluZTogICAgICAgJGhlYWRsaW5lLFxuICAgIHRpdGxlOiAgICAgICAgICAkdGl0bGUsXG4gICAgc3ViaGVhZGluZy0yOiAgICRzdWJoZWFkaW5nLTIsXG4gICAgc3ViaGVhZGluZy0xOiAgICRzdWJoZWFkaW5nLTEsXG4gICAgYm9keS0yOiAgICAgICAgICRib2R5LTIsXG4gICAgYm9keS0xOiAgICAgICAgICRib2R5LTEsXG4gICAgY2FwdGlvbjogICAgICAgICRjYXB0aW9uLFxuICAgIGJ1dHRvbjogICAgICAgICAkYnV0dG9uLFxuICAgIGlucHV0OiAgICAgICAgICAkaW5wdXQsXG4gICk7XG5cbiAgLy8gTG9vcCB0aHJvdWdoIHRoZSBsZXZlbHMgYW5kIHNldCB0aGUgYGZvbnQtZmFtaWx5YCBvZiB0aGUgb25lcyB0aGF0IGRvbid0IGhhdmUgb25lIHRvIHRoZSBiYXNlLlxuICAvLyBOb3RlIHRoYXQgU2FzcyBjYW4ndCBtb2RpZnkgbWFwcyBpbiBwbGFjZSwgd2hpY2ggbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG1lcmdlIGFuZCByZS1hc3NpZ24uXG4gIEBlYWNoICRrZXksICRsZXZlbCBpbiAkY29uZmlnIHtcbiAgICBAaWYgbWFwLWdldCgkbGV2ZWwsIGZvbnQtZmFtaWx5KSA9PSBudWxsIHtcbiAgICAgICRuZXctbGV2ZWw6IG1hcC1tZXJnZSgkbGV2ZWwsIChmb250LWZhbWlseTogJGZvbnQtZmFtaWx5KSk7XG4gICAgICAkY29uZmlnOiBtYXAtbWVyZ2UoJGNvbmZpZywgKCRrZXk6ICRuZXctbGV2ZWwpKTtcbiAgICB9XG4gIH1cblxuICAvLyBBZGQgdGhlIGJhc2UgZm9udCBmYW1pbHkgdG8gdGhlIGNvbmZpZy5cbiAgQHJldHVybiBtYXAtbWVyZ2UoJGNvbmZpZywgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbn1cblxuLy8gQWRkcyB0aGUgYmFzZSB0eXBvZ3JhcGh5IHN0eWxlcywgYmFzZWQgb24gYSBjb25maWcuXG5AbWl4aW4gbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnLCAkc2VsZWN0b3I6ICcubWF0LXR5cG9ncmFwaHknKSB7XG4gIC5tYXQtaDEsIC5tYXQtaGVhZGxpbmUsICN7JHNlbGVjdG9yfSBoMSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGhlYWRsaW5lKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oMiwgLm1hdC10aXRsZSwgI3skc2VsZWN0b3J9IGgyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgzLCAubWF0LXN1YmhlYWRpbmctMiwgI3skc2VsZWN0b3J9IGgzIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsICN7JHNlbGVjdG9yfSBoNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoZSBzcGVjIGRvZXNuJ3QgaGF2ZSBhbnl0aGluZyB0aGF0IHdvdWxkIGNvcnJlc3BvbmQgdG8gaDUgYW5kIGg2LCBidXQgd2UgYWRkIHRoZXNlIGZvclxuICAvLyBjb25zaXN0ZW5jeS4gVGhlIGZvbnQgc2l6ZXMgY29tZSBmcm9tIHRoZSBDaHJvbWUgdXNlciBhZ2VudCBzdHlsZXMgd2hpY2ggaGF2ZSBoNSBhdCAwLjgzZW1cbiAgLy8gYW5kIGg2IGF0IDAuNjdlbS5cbiAgLm1hdC1oNSwgI3skc2VsZWN0b3J9IGg1IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuODMsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtaDYsICN7JHNlbGVjdG9yfSBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoXG4gICAgICBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkgKiAwLjY3LFxuICAgICAgbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpXG4gICAgKTtcblxuICAgIG1hcmdpbjogMCAwIDEycHg7XG4gIH1cblxuICAubWF0LWJvZHktc3Ryb25nLCAubWF0LWJvZHktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWJvZHksIC5tYXQtYm9keS0xLCAjeyRzZWxlY3Rvcn0ge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDAgMCAxMnB4O1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGNhcHRpb24pO1xuICB9XG5cbiAgLy8gTm90ZTogVGhlIHNwZWMgZG9lc24ndCBtZW50aW9uIGxldHRlciBzcGFjaW5nLiBUaGUgdmFsdWUgY29tZXMgZnJvbVxuICAvLyBleWViYWxsaW5nIGl0IHVudGlsIGl0IGxvb2tlZCBleGFjdGx5IGxpa2UgdGhlIHNwZWMgZXhhbXBsZXMuXG4gIC5tYXQtZGlzcGxheS00LCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTQpO1xuICAgIG1hcmdpbjogMCAwIDU2cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMywgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0zIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0zKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtO1xuICB9XG5cbiAgLm1hdC1kaXNwbGF5LTIsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktMiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktMik7XG4gICAgbWFyZ2luOiAwIDAgNjRweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMSwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0xIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0xKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICB9XG59XG5cblxuXG5cbkBtaXhpbiBtYXQtYXV0b2NvbXBsZXRlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAvLyBTZWxlY3RlZCBvcHRpb25zIGluIGF1dG9jb21wbGV0ZXMgc2hvdWxkIG5vdCBiZSBncmF5LCBidXQgd2VcbiAgICAvLyBvbmx5IHdhbnQgdG8gb3ZlcnJpZGUgdGhlIGJhY2tncm91bmQgZm9yIHNlbGVjdGVkIG9wdGlvbnMgaWZcbiAgICAvLyB0aGV5IGFyZSAqbm90KiBpbiBob3ZlciBvciBmb2N1cyBzdGF0ZS4gVGhpcyBjaGFuZ2UgaGFzIHRvIGJlXG4gICAgLy8gbWFkZSBoZXJlIGJlY2F1c2UgYmFzZSBvcHRpb24gc3R5bGVzIGFyZSBzaGFyZWQgYmV0d2VlbiB0aGVcbiAgICAvLyBhdXRvY29tcGxldGUgYW5kIHRoZSBzZWxlY3QuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgICAgJjpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuLy8gVGhpcyBjb250YWlucyBhbGwgb2YgdGhlIHN0eWxlcyBmb3IgdGhlIGJhZGdlXG4vLyByYXRoZXIgdGhhbiBqdXN0IHRoZSBjb2xvci90aGVtZSBiZWNhdXNlIG9mXG4vLyBubyBzdHlsZSBzaGVldCBzdXBwb3J0IGZvciBkaXJlY3RpdmVzLlxuXG5cblxuXG5cbiRtYXQtYmFkZ2UtZm9udC1zaXplOiAxMnB4O1xuJG1hdC1iYWRnZS1mb250LXdlaWdodDogNjAwO1xuJG1hdC1iYWRnZS1kZWZhdWx0LXNpemU6IDIycHggIWRlZmF1bHQ7XG4kbWF0LWJhZGdlLXNtYWxsLXNpemU6ICRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplIC0gNjtcbiRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgKyA2O1xuXG4vLyBNaXhpbiBmb3IgYnVpbGRpbmcgb2Zmc2V0IGdpdmVuIGRpZmZlcmVudCBzaXplc1xuQG1peGluIF9tYXQtYmFkZ2Utc2l6ZSgkc2l6ZSkge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHdpZHRoOiAkc2l6ZTtcbiAgICBoZWlnaHQ6ICRzaXplO1xuICAgIGxpbmUtaGVpZ2h0OiAkc2l6ZTtcbiAgfVxuXG4gICYubWF0LWJhZGdlLWFib3ZlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgdG9wOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlbG93IHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgYm90dG9tOiAtJHNpemUgLyAyO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBsZWZ0OiBhdXRvO1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiAtJHNpemU7XG4gICAgfVxuICB9XG5cbiAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICAmLm1hdC1iYWRnZS1vdmVybGFwIHtcbiAgICAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1iZWZvcmUge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgW2Rpcj0ncnRsJ10gJi5tYXQtYmFkZ2UtYWZ0ZXIge1xuICAgICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICAgIGxlZnQ6IC0kc2l6ZSAvIDI7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKSB7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1hY2NlbnQge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Utd2FybiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4sIGRlZmF1bHQtY29udHJhc3QpO1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cblxuICAubWF0LWJhZGdlLWhpZGRlbiB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS1kaXNhYmxlZCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgICRhcHAtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnYmFja2dyb3VuZCcpO1xuICAgICAgJGJhZGdlLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG5cbiAgICAgIC8vIFRoZSBkaXNhYmxlZCBjb2xvciB1c3VhbGx5IGhhcyBzb21lIGtpbmQgb2Ygb3BhY2l0eSwgYnV0IGJlY2F1c2UgdGhlIGJhZGdlIGlzIG92ZXJsYXllZFxuICAgICAgLy8gb24gdG9wIG9mIHNvbWV0aGluZyBlbHNlLCBpdCB3b24ndCBsb29rIGdvb2QgaWYgaXQncyBvcGFxdWUuIElmIGl0IGlzIGEgY29sb3IgKnR5cGUqLFxuICAgICAgLy8gd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kIHVzaW5nXG4gICAgICAvLyB0aGUgdmFsdWUgdG8gZGV0ZXJtaW5lIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBiYWNrZ3JvdW5kIHRvIHB1dCBpbnRvIGZvcmVncm91bmQgd2hlblxuICAgICAgLy8gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuXG4gICAgICBAaWYgKHR5cGUtb2YoJGJhZGdlLWNvbG9yKSA9PSBjb2xvciBhbmQgdHlwZS1vZigkYXBwLWJhY2tncm91bmQpID09IGNvbG9yKSB7XG4gICAgICAgICRiYWRnZS1vcGFjaXR5OiBvcGFjaXR5KCRiYWRnZS1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IG1peCgkYXBwLWJhY2tncm91bmQsIHJnYmEoJGJhZGdlLWNvbG9yLCAxKSwgKDEgLSAkYmFkZ2Utb3BhY2l0eSkgKiAxMDAlKTtcbiAgICAgIH1cbiAgICAgIEBlbHNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogJGJhZGdlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC8vIFRoZSBhY3RpdmUgY2xhc3MgaXMgYWRkZWQgYWZ0ZXIgdGhlIGVsZW1lbnQgaXMgYWRkZWRcbiAgLy8gc28gaXQgY2FuIGFuaW1hdGUgc2NhbGUgdG8gZGVmYXVsdFxuICAubWF0LWJhZGdlLWNvbnRlbnQubWF0LWJhZGdlLWFjdGl2ZSB7XG4gICAgLy8gU2NhbGUgdG8gYG5vbmVgIGluc3RlYWQgb2YgYDFgIHRvIGF2b2lkIGJsdXJyeSB0ZXh0IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG5cbiAgLm1hdC1iYWRnZS1zbWFsbCB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2Utc21hbGwtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1tZWRpdW0ge1xuICAgIEBpbmNsdWRlIF9tYXQtYmFkZ2Utc2l6ZSgkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSk7XG4gIH1cbiAgLm1hdC1iYWRnZS1sYXJnZSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtbGFyZ2Utc2l6ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXdlaWdodDogJG1hdC1iYWRnZS1mb250LXdlaWdodDtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplO1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAvIDI7XG4gIH1cblxuICAubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgZm9udC1zaXplOiAkbWF0LWJhZGdlLWZvbnQtc2l6ZSAqIDI7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDE2LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cbiRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTogMC4xO1xuXG4vLyBBcHBsaWVzIGEgZm9jdXMgc3R5bGUgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgJi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gICZbZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1yaXBwbGUtY29sb3IoJHRoZW1lLCAkaHVlLCAkb3BhY2l0eTogJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5KSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gICYubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCAkaHVlLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuLy8gQXBwbGllcyBhIHByb3BlcnR5IHRvIGFuIG1hdC1idXR0b24gZWxlbWVudCBmb3IgZWFjaCBvZiB0aGUgc3VwcG9ydGVkIHBhbGV0dGVzLlxuQG1peGluIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJHByb3BlcnR5LCAkaHVlKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICYubWF0LXByaW1hcnkge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwcmltYXJ5LCAkaHVlKTtcbiAgfVxuICAmLm1hdC1hY2NlbnQge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRhY2NlbnQsICRodWUpO1xuICB9XG4gICYubWF0LXdhcm4ge1xuICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCR3YXJuLCAkaHVlKTtcbiAgfVxuXG4gICYubWF0LXByaW1hcnksICYubWF0LWFjY2VudCwgJi5tYXQtd2FybiwgJltkaXNhYmxlZF0ge1xuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICRwYWxldHRlOiBpZigkcHJvcGVydHkgPT0gJ2NvbG9yJywgJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKTtcbiAgICAgICN7JHByb3BlcnR5fTogbWF0LWNvbG9yKCRwYWxldHRlLCBkaXNhYmxlZC1idXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICAgIC8vIEJ1dHRvbnMgd2l0aG91dCBhIGJhY2tncm91bmQgY29sb3Igc2hvdWxkIGluaGVyaXQgdGhlIGZvbnQgY29sb3IuIFRoaXMgaXMgbmVjZXNzYXJ5IHRvXG4gICAgLy8gZW5zdXJlIHRoYXQgdGhlIGJ1dHRvbiBpcyByZWFkYWJsZSBvbiBjdXN0b20gYmFja2dyb3VuZCBjb2xvcnMuIEl0J3Mgd3JvbmcgdG8gYWx3YXlzIGFzc3VtZVxuICAgIC8vIHRoYXQgdGhvc2UgYnV0dG9ucyBhcmUgYWx3YXlzIHBsYWNlZCBpbnNpZGUgb2YgY29udGFpbmVycyB3aXRoIHRoZSBkZWZhdWx0IGJhY2tncm91bmRcbiAgICAvLyBjb2xvciBvZiB0aGUgdGhlbWUgKGUuZy4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tZm9jdXMtb3ZlcmxheS1jb2xvcigkdGhlbWUpO1xuXG4gICAgLy8gU2V0dXAgdGhlIHJpcHBsZSBjb2xvciB0byBiZSBiYXNlZCBvbiB0aGUgdGV4dCBjb2xvci4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHJpcHBsZXNcbiAgICAvLyBhcmUgbWF0Y2hpbmcgd2l0aCB0aGUgY3VycmVudCB0aGVtZSBwYWxldHRlIGFuZCBhcmUgaW4gY29udHJhc3QgdG8gdGhlIGJhY2tncm91bmQgY29sb3JcbiAgICAvLyAoZS5nIGluIHRoZW1lZCB0b29sYmFycykuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHk7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZDogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gIH1cblxuICAvLyBOb3RlOiB0aGlzIG5lZWRzIGEgYml0IGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHdlJ3JlIG5vdCBndWFyYW50ZWVkIHRoZSBpbmNsdXNpb25cbiAgLy8gb3JkZXIgb2YgdGhlIHRoZW1lIHN0eWxlcyBhbmQgdGhlIGJ1dHRvbiByZXNldCBtYXkgZW5kIHVwIHJlc2V0dGluZyB0aGlzIGFzIHdlbGwuXG4gIC5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICAvLyBEZWZhdWx0IGZvbnQgYW5kIGJhY2tncm91bmQgY29sb3Igd2hlbiBub3QgdXNpbmcgYW55IGNvbG9yIHBhbGV0dGUuXG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCByYWlzZWQtYnV0dG9uKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXRoZW1lLXByb3BlcnR5KCR0aGVtZSwgJ2NvbG9yJywgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnYmFja2dyb3VuZC1jb2xvcicsIGRlZmF1bHQpO1xuICAgIEBpbmNsdWRlIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbiwgLm1hdC1mbGF0LWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig4LCAkdGhlbWUpO1xuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG5cbiAgICAmOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMTIsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtaWNvbi1idXR0b24sIC5tYXQtc3Ryb2tlZC1idXR0b24sXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGRpdmlkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgLm1hdC1idXR0b24tdG9nZ2xlLWZvY3VzLW92ZXJsYXkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBmb2N1c2VkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uLCAxKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwge1xuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBzZWxlY3RlZC1idXR0b24pO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24tdG9nZ2xlKTtcblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIH1cblxuICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJvcmRlcjogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2FyZC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWNhcmQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDEsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIE5lZWRzIGV4dHJhIHNwZWNpZmljaXR5IHRvIGJlIGFibGUgdG8gb3ZlcnJpZGUgdGhlIGVsZXZhdGlvbiBzZWxlY3RvcnMuXG4gICAgJi5tYXQtY2FyZC1mbGF0IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhcmQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgdGl0bGUpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FyZC1oZWFkZXIgLm1hdC1jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgdGl0bGUpO1xuICB9XG5cbiAgLm1hdC1jYXJkLXN1YnRpdGxlLFxuICAubWF0LWNhcmQtY29udGVudCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG5cbiAgLy8gVGhlIGNvbG9yIG9mIHRoZSBjaGVja2JveCdzIGNoZWNrbWFyayAvIG1peGVkbWFyay5cbiAgJGNoZWNrYm94LW1hcmstY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG5cbiAgLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogV2hpbGUgdGhlIHNwZWMgY2FsbHMgZm9yIHRyYW5zbHVjZW50IGJsYWNrcy93aGl0ZXMgZm9yIGRpc2FibGVkIGNvbG9ycyxcbiAgLy8gdGhpcyBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBlbGVtZW50cyBsYXllcmVkIG9uIHRvcCBvZiBvbmUgYW5vdGhlci4gVG8gZ2V0IGFyb3VuZCB0aGlzIHdlXG4gIC8vIGJsZW5kIHRoZSBjb2xvcnMgdG9nZXRoZXIgYmFzZWQgb24gdGhlIGJhc2UgY29sb3IgYW5kIHRoZSB0aGVtZSBiYWNrZ3JvdW5kLlxuICAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrOiAjNjg2ODY4O1xuICAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodDogI2IwYjBiMDtcbiAgJGRpc2FibGVkLWNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJHdoaXRlLTMwcGN0LW9wYWNpdHktb24tZGFyaywgJGJsYWNrLTI2cGN0LW9wYWNpdHktb24tbGlnaHQpO1xuXG4gIC5tYXQtY2hlY2tib3gtZnJhbWUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyayB7XG4gICAgZmlsbDogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAvLyAhaW1wb3J0YW50IGlzIG5lZWRlZCBoZXJlIGJlY2F1c2UgYSBzdHJva2UgbXVzdCBiZSBzZXQgYXMgYW5cbiAgICAvLyBhdHRyaWJ1dGUgb24gdGhlIFNWRyBpbiBvcmRlciBmb3IgbGluZSBhbmltYXRpb24gdG8gd29yayBwcm9wZXJseS5cbiAgICBzdHJva2U6ICRjaGVja2JveC1tYXJrLWNvbG9yICFpbXBvcnRhbnQ7XG5cbiAgICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdChibGFjay1vbi13aGl0ZSkge1xuICAgICAgLy8gSGF2aW5nIHRoZSBvbmUgYWJvdmUgYmUgIWltcG9ydGFudCBlbmRzIHVwIG92ZXJyaWRpbmcgdGhlIGJyb3dzZXIncyBhdXRvbWF0aWNcbiAgICAgIC8vIGNvbG9yIGludmVyc2lvbiBzbyB3ZSBuZWVkIHRvIHJlLWludmVydCBpdCBvdXJzZWx2ZXMgZm9yIGJsYWNrLW9uLXdoaXRlLlxuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjaGVja2JveC1tYXJrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLCAubWF0LWNoZWNrYm94LWNoZWNrZWQge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICAmLm1hdC1jaGVja2JveC1jaGVja2VkLFxuICAgICYubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkge1xuICAgICAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0IHtcbiAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICB9XG4gIH1cblxuICAvLyBUaGlzIG9uZSBpcyBtb3ZlZCBkb3duIGhlcmUgc28gaXQgY2FuIHRhcmdldCBib3RoXG4gIC8vIHRoZSB0aGVtZSBjb2xvcnMgYW5kIHRoZSBkaXNhYmxlZCBzdGF0ZS5cbiAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICAvLyBOZWVkcyB0byBiZSByZW1vdmVkIGJlY2F1c2UgaXQgaGlkZXMgdGhlIGNoZWNrYm94IG91dGxpbmUuXG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpIHtcbiAgICAmLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hlY2tib3gtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2hlY2tib3gge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAvLyBUT0RPKGthcmEpOiBSZW1vdmUgdGhpcyBzdHlsZSB3aGVuIGZpeGluZyB2ZXJ0aWNhbCBiYXNlbGluZVxuICAubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgICBsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cblxuXG5cbiRtYXQtY2hpcC1yZW1vdmUtZm9udC1zaXplOiAxOHB4O1xuXG5AbWl4aW4gbWF0LWNoaXBzLWNvbG9yKCRmb3JlZ3JvdW5kLCAkYmFja2dyb3VuZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuXG4gIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiAkZm9yZWdyb3VuZDtcbiAgICBvcGFjaXR5OiAwLjQ7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkcGFsZXR0ZSkge1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtY29sb3IobWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KSwgbWF0LWNvbG9yKCRwYWxldHRlKSk7XG5cbiAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjEpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICR1bnNlbGVjdGVkLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgdW5zZWxlY3RlZC1jaGlwKTtcbiAgJHVuc2VsZWN0ZWQtZm9yZWdyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICAgIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcigkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kLCAkdW5zZWxlY3RlZC1iYWNrZ3JvdW5kKTtcblxuICAgICY6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCkge1xuICAgICAgJjphY3RpdmUge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigzLCAkdGhlbWUpO1xuICAgICAgfVxuXG4gICAgICAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC41NDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jaGlwcy10aGVtZS1jb2xvcigkYWNjZW50KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGlwIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG5cbiAgICAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgICAubWF0LWNoaXAtcmVtb3ZlLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRhYmxlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxuICBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIFttYXQtaGVhZGVyLXJvd10sIFttYXQtcm93XSwgW21hdC1mb290ZXItcm93XSxcbiAgLm1hdC10YWJsZS1zdGlja3kge1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIH1cblxuICBtYXQtcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LWZvb3Rlci1yb3csXG4gIHRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJsZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWJsZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtaGVhZGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMik7XG4gIH1cblxuICAubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuXG5cbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoOiAxcHg7XG4kbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQ6IDAuNjtcbiRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDogMC4yO1xuJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTogMTNweCAhZGVmYXVsdDtcbiRtYXQtY2FsZW5kYXItd2Vla2RheS10YWJsZS1mb250LXNpemU6IDExcHggIWRlZmF1bHQ7XG5cbkBtaXhpbiBfbWF0LWRhdGVwaWNrZXItY29sb3IoJHBhbGV0dGUpIHtcbiAgLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICAkYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGZhZGUtb3V0KCRiYWNrZ3JvdW5kLCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRvIGJhY2tncm91bmQgdG8gYSBjb2xvciAoZS5nLiBpdCdzIGEgQ1NTIHZhcmlhYmxlKSxcbiAgICAgIC8vIGZhbGwgYmFjayB0byBmYWRpbmcgdGhlIGNvbnRlbnQgb3V0IHZpYSBgb3BhY2l0eWAuXG4gICAgICBvcGFjaXR5OiAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQ7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAkbWF0LWRhdGVwaWNrZXItc2VsZWN0ZWQtdG9kYXktYm94LXNoYWRvdy13aWR0aFxuICAgICAgICAgICAgICAgIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAvLyBUaGUgcHJldi9uZXh0IGJ1dHRvbnMgbmVlZCBhIGJpdCBtb3JlIHNwZWNpZmljaXR5IHRvXG4gIC8vIGF2b2lkIGJlaW5nIG92ZXJ3cml0dGVuIGJ5IHRoZSAubWF0LWljb24tYnV0dG9uLlxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuICAubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaWNvbik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkKTpob3ZlcixcbiAgLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUsXG4gIC5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUge1xuICAgICYgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gICAgLy8gTm90ZTogdGhvdWdoIGl0J3Mgbm90IHRleHQsIHRoZSBib3JkZXIgaXMgYSBoaW50IGFib3V0IHRoZSBmYWN0IHRoYXQgdGhpcyBpcyB0b2RheSdzIGRhdGUsXG4gICAgLy8gc28gd2UgdXNlIHRoZSBoaW50IGNvbG9yLlxuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAkY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcblxuICAgIEBpZiAodHlwZS1vZigkY29sb3IpID09IGNvbG9yKSB7XG4gICAgICBib3JkZXItY29sb3I6IGZhZGUtb3V0KCRjb2xvciwgJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIGNvbG9yIGRpZG4ndCByZXNvbHZlIHRvIGEgY29sb3IgdmFsdWUsIGJ1dCBzb21ldGhpbmcgbGlrZSBhIENTUyB2YXJpYWJsZSwgd2UgY2FuJ3RcbiAgICAgIC8vIGZhZGUgaXQgb3V0IHNvIHdlIGZhbGwgYmFjayB0byByZWR1Y2luZyB0aGUgZWxlbWVudCBvcGFjaXR5LiBOb3RlIHRoYXQgd2UgZG9uJ3QgdXNlIHRoZVxuICAgICAgLy8gJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50LCBiZWNhdXNlIGhpbnQgdGV4dCB1c3VhbGx5IGhhcyBzb21lIG9wYWNpdHkgYXBwbGllZFxuICAgICAgLy8gdG8gaXQgYWxyZWFkeSBhbmQgd2UgZG9uJ3Qgd2FudCB0aGVtIHRvIHN0YWNrIG9uIHRvcCBvZiBlYWNoIG90aGVyLlxuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZGF0ZXBpY2tlci1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHByaW1hcnkpKTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNhbGVuZGFyIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgICBmb250LXNpemU6ICRtYXQtY2FsZW5kYXItYm9keS1mb250LXNpemU7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwsXG4gIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMjQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtZGlhbG9nLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWRpYWxvZy10aXRsZSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDIsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtYWN0aW9uLXJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgICY6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pIHtcbiAgICAgICYuY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gICAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gRGlzYWJsZSB0aGUgaG92ZXIgb24gdG91Y2ggZGV2aWNlcyBzaW5jZSBpdCBjYW4gYXBwZWFyIGxpa2UgaXQgaXMgc3R1Y2suIFdlIGNhbid0IHVzZVxuICAvLyBgQG1lZGlhIChob3ZlcilgIGFib3ZlLCBiZWNhdXNlIHRoZSBkZXNrdG9wIHN1cHBvcnQgYnJvd3NlciBzdXBwb3J0IGlzbid0IGdyZWF0LlxuICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuICAgICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbiAgLm1hdC1leHBhbnNpb24taW5kaWNhdG9yOjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBzdWJoZWFkaW5nLTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cbi8vIFRoaXMgbWl4aW4gd2lsbCBlbnN1cmUgdGhhdCBsaW5lcyB0aGF0IG92ZXJmbG93IHRoZSBjb250YWluZXIgd2lsbCBoaWRlIHRoZSBvdmVyZmxvdyBhbmRcbi8vIHRydW5jYXRlIG5lYXRseSB3aXRoIGFuIGVsbGlwc2lzLlxuQG1peGluIG1hdC10cnVuY2F0ZS1saW5lKCkge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLy8gTWl4aW4gdG8gcHJvdmlkZSBhbGwgbWF0LWxpbmUgc3R5bGVzLCBjaGFuZ2luZyBzZWNvbmRhcnkgZm9udCBzaXplIGJhc2VkIG9uIHdoZXRoZXIgdGhlIGxpc3Rcbi8vIGlzIGluIGRlbnNlIG1vZGUuXG5AbWl4aW4gbWF0LWxpbmUtYmFzZSgkc2Vjb25kYXJ5LWZvbnQtc2l6ZSkge1xuICAubWF0LWxpbmUge1xuICAgIEBpbmNsdWRlIG1hdC10cnVuY2F0ZS1saW5lKCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIC8vIGFsbCBsaW5lcyBidXQgdGhlIHRvcCBsaW5lIHNob3VsZCBoYXZlIHNtYWxsZXIgdGV4dFxuICAgICY6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAkc2Vjb25kYXJ5LWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVGhpcyBtaXhpbiBub3JtYWxpemVzIGRlZmF1bHQgZWxlbWVudCBzdHlsZXMsIGUuZy4gZm9udCB3ZWlnaHQgZm9yIGhlYWRpbmcgdGV4dC5cbkBtaXhpbiBtYXQtbm9ybWFsaXplLXRleHQoKSB7XG4gICYgPiAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIHByb3ZpZGVzIGJhc2Ugc3R5bGVzIGZvciB0aGUgd3JhcHBlciBhcm91bmQgbWF0LWxpbmUgZWxlbWVudHMgaW4gYSBsaXN0LlxuQG1peGluIG1hdC1saW5lLXdyYXBwZXItYmFzZSgpIHtcbiAgQGluY2x1ZGUgbWF0LW5vcm1hbGl6ZS10ZXh0KCk7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgLy8gTXVzdCByZW1vdmUgd3JhcHBlciB3aGVuIGxpbmVzIGFyZSBlbXB0eSBvciBpdCB0YWtlcyB1cCBob3Jpem9udGFsXG4gIC8vIHNwYWNlIGFuZCBwdXNoZXMgb3RoZXIgZWxlbWVudHMgdG8gdGhlIHJpZ2h0LlxuICAmOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpIHsgfVxuXG5AbWl4aW4gbWF0LWdyaWQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIge1xuICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gSW5jbHVkZSB0aGlzIGVtcHR5IG1peGluIGZvciBjb25zaXN0ZW5jeSB3aXRoIHRoZSBvdGhlciBjb21wb25lbnRzLlxuQG1peGluIG1hdC1pY29uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWljb24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuLy8gUmVuZGVycyBhIGdyYWRpZW50IGZvciBzaG93aW5nIHRoZSBkYXNoZWQgbGluZSB3aGVuIHRoZSBpbnB1dCBpcyBkaXNhYmxlZC5cbi8vIFVubGlrZSB1c2luZyBhIGJvcmRlciwgYSBncmFkaWVudCBhbGxvd3MgdXMgdG8gYWRqdXN0IHRoZSBzcGFjaW5nIG9mIHRoZSBkb3R0ZWQgbGluZVxuLy8gdG8gbWF0Y2ggdGhlIE1hdGVyaWFsIERlc2lnbiBzcGVjLlxuQG1peGluIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkY29sb3IpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkY29sb3IgMCUsICRjb2xvciAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xufVxuXG4vLyBGaWd1cmVzIG91dCB0aGUgY29sb3Igb2YgdGhlIHBsYWNlaG9sZGVyIGZvciBhIGZvcm0gY29udHJvbC5cbi8vIFVzZWQgcHJpbWFyaWx5IHRvIHByZXZlbnQgdGhlIHZhcmlvdXMgZm9ybSBjb250cm9scyBmcm9tXG4vLyBiZWNvbWluZyBvdXQgb2Ygc3luYyBzaW5jZSB0aGVzZSBjb2xvcnMgYXJlbid0IGluIGEgcGFsZXR0ZS5cbkBmdW5jdGlvbiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gIEByZXR1cm4gbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xufVxuXG5cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG5AbWl4aW4gdXNlci1zZWxlY3QoJHZhbHVlKSB7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgLW1vei11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbXMtdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbiAgdXNlci1zZWxlY3Q6ICR2YWx1ZTtcbn1cblxuQG1peGluIGlucHV0LXBsYWNlaG9sZGVyIHtcbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWIge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuXG5AbWl4aW4gY3Vyc29yLWdyYWJiaW5nIHtcbiAgY3Vyc29yOiAtd2Via2l0LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuXG5AbWl4aW4gYmFja2ZhY2UtdmlzaWJpbGl0eSgkdmFsdWUpIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiAkdmFsdWU7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbn1cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cblxuXG5cbkBtaXhpbiBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgY29sb3I6IF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpO1xuICAgIH1cblxuICAgIC8vIE9uIGRhcmsgdGhlbWVzIHdlIHNldCB0aGUgbmF0aXZlIGBzZWxlY3RgIGNvbG9yIHRvIHNvbWUgc2hhZGUgb2Ygd2hpdGUsXG4gICAgLy8gaG93ZXZlciB0aGUgY29sb3IgcHJvcGFnYXRlcyB0byBhbGwgb2YgdGhlIGBvcHRpb25gIGVsZW1lbnRzLCB3aGljaCBhcmVcbiAgICAvLyBhbHdheXMgb24gYSB3aGl0ZSBiYWNrZ3JvdW5kIGluc2lkZSB0aGUgZHJvcGRvd24sIGNhdXNpbmcgdGhlbSB0byBibGVuZCBpbi5cbiAgICAvLyBTaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgYmFja2dyb3VuZCBvZiB0aGUgZHJvcGRvd24sIHdlIG5lZWQgdG8gZXhwbGljaXRseVxuICAgIC8vIHJlc2V0IHRoZSBjb2xvciBvZiB0aGUgb3B0aW9ucyB0byBzb21ldGhpbmcgZGFyay5cbiAgICBAaWYgKG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKSkge1xuICAgICAgb3B0aW9uIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLXByaW1hcnktdGV4dDtcbiAgICAgIH1cblxuICAgICAgb3B0aW9uOmRpc2FibGVkIHtcbiAgICAgICAgY29sb3I6ICRkYXJrLWRpc2FibGVkLXRleHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbiAgLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC8vIFRoZSBhbW91bnQgb2Ygc3BhY2UgYmV0d2VlbiB0aGUgdG9wIG9mIHRoZSBsaW5lIGFuZCB0aGUgdG9wIG9mIHRoZSBhY3R1YWwgdGV4dFxuICAvLyAoYXMgYSBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplKS5cbiAgJGxpbmUtc3BhY2luZzogKCRsaW5lLWhlaWdodCAtIDEpIC8gMjtcblxuICAvLyA8aW5wdXQ+IGVsZW1lbnRzIHNlZW0gdG8gaGF2ZSB0aGVpciBoZWlnaHQgc2V0IHNsaWdodGx5IHRvbyBsYXJnZSBvbiBTYWZhcmkgY2F1c2luZyB0aGUgdGV4dCB0b1xuICAvLyBiZSBtaXNhbGlnbmVkIHcuci50LiB0aGUgcGxhY2Vob2xkZXIuIEFkZGluZyB0aGlzIG1hcmdpbiBjb3JyZWN0cyBpdC5cbiAgaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIG1hcmdpbi10b3A6IC0kbGluZS1zcGFjaW5nICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtbGlzdC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlzYWJsZWQtbGlzdC1vcHRpb24pO1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbixcbiAgLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbSB7XG4gICAgJjpob3ZlciwgJjpmb2N1cyB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gICRmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuXG4gIC5tYXQtbGlzdC1pdGVtIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuXG4gIC8vIERlZmF1bHQgbGlzdFxuICAubWF0LWxpc3QtYmFzZSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSk7XG4gICAgfVxuXG4gICAgLm1hdC1saXN0LW9wdGlvbiB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMik7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cblxuICAvLyBEZW5zZSBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSB7XG4gICAgLm1hdC1saXN0LWl0ZW0ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKSk7XG4gICAgfVxuXG4gICAgLm1hdC1zdWJoZWFkZXIge1xuICAgICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1tZW51LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbWVudS1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ3RleHQnKTtcblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICYsICY6OmFmdGVyIHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuICAubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1tZW51LWl0ZW06aG92ZXIsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZCB7XG4gICAgJjpub3QoW2Rpc2FibGVkXSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnaG92ZXInKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW1lbnUtaXRlbSB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAubWF0LXBhZ2luYXRvciB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvci1maXJzdCxcbiAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIHtcbiAgICAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50LFxuICAgIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAgIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICAgICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdkaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXBhZ2luYXRvci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1wYWdpbmF0b3IsXG4gIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgIGZpbGw6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgbGlnaHRlcik7XG4gIH1cblxuICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCRhY2NlbnQsIGxpZ2h0ZXIpO1xuICAgIH1cblxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIHtcbiAgICAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgICAgIGZpbGw6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkd2FybiwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1zcGlubmVyLCAubWF0LXNwaW5uZXIge1xuICAgIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIGNpcmNsZSB7XG4gICAgICBzdHJva2U6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXJhZGlvLWNvbG9yKCRwYWxldHRlKSB7XG4gICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgfVxuXG4gIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuICAmOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAvLyBUaGlzIG5lZWRzIGV4dHJhIHNwZWNpZmljaXR5LCBiZWNhdXNlIHRoZSBjbGFzc2VzIGFib3ZlIGFyZSBjb21iaW5lZFxuICAgIC8vIChlLmcuIGAubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50YCkgd2hpY2ggaW5jcmVhc2VzIHRoZWlyIHNwZWNpZmljaXR5IGEgbG90LlxuICAgIC8vIFRPRE86IGNvbnNpZGVyIG1ha2luZyB0aGUgc2VsZWN0b3JzIGludG8gZGVzY2VuZGFudHMgKGAubWF0LXByaW1hcnkgLm1hdC1yYWRpby1idXR0b25gKS5cbiAgICAmLm1hdC1yYWRpby1kaXNhYmxlZCB7XG4gICAgICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlLFxuICAgICAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50LFxuICAgICAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgICAgIH1cblxuICAgICAgLm1hdC1yYWRpby1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFN3aXRjaCB0aGlzIHRvIGEgc29saWQgY29sb3Igc2luY2Ugd2UncmUgdXNpbmcgYG9wYWNpdHlgXG4gICAgLy8gdG8gY29udHJvbCBob3cgb3BhcXVlIHRoZSByaXBwbGUgc2hvdWxkIGJlLlxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWFwX2dldCgkZm9yZWdyb3VuZCwgYmFzZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGFuZWwge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNCwgJHRoZW1lKTtcblxuICAgIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIsIDAuMTIpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZCB7XG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAmLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LWFjY2VudCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWludmFsaWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1kaXNhYmxlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAubWF0LXNlbGVjdCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yOiAgbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZGlhbG9nKTtcbiAgJGRyYXdlci1zaWRlLWJvcmRlcjogc29saWQgMXB4IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG5cbiAgLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZHJhd2VyLWNvbnRhaW5lci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1kcmF3ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItYmFja2dyb3VuZC1jb2xvcjtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWRyYXdlci1wdXNoIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItcHVzaC1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtZHJhd2VyLXNpZGUpIHtcbiAgICAgIC8vIFRoZSBlbGV2YXRpb24gb2Ygei0xNiBpcyBub3RlZCBpbiB0aGUgZGVzaWduIHNwZWNpZmljYXRpb25zLlxuICAgICAgLy8gU2VlIGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2NvbXBvbmVudHMvbmF2aWdhdGlvbi1kcmF3ZXIuaHRtbFxuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItc2lkZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuXG4gICAgJi5tYXQtZHJhd2VyLWVuZCB7XG4gICAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItbGVmdDogJGRyYXdlci1zaWRlLWJvcmRlcjtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xuICAgICRvcGFjaXR5OiAwLjY7XG4gICAgJGJhY2tkcm9wLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQsICRvcGFjaXR5KTtcblxuICAgIEBpZiAodHlwZS1vZigkYmFja2Ryb3AtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAvLyBXZSB1c2UgaW52ZXJ0KCkgaGVyZSB0byBoYXZlIHRoZSBkYXJrZW4gdGhlIGJhY2tncm91bmQgY29sb3IgZXhwZWN0ZWQgdG8gYmUgdXNlZC4gSWYgdGhlXG4gICAgICAvLyBiYWNrZ3JvdW5kIGlzIGxpZ2h0LCB3ZSB1c2UgYSBkYXJrIGJhY2tkcm9wLiBJZiB0aGUgYmFja2dyb3VuZCBpcyBkYXJrLFxuICAgICAgLy8gd2UgdXNlIGEgbGlnaHQgYmFja2Ryb3AuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbnZlcnQoJGJhY2tkcm9wLWNvbG9yKTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgLy8gSWYgd2UgY291bGRuJ3QgcmVzb2x2ZSB0aGUgYmFja2Ryb3AgY29sb3IgdG8gYSBjb2xvciB2YWx1ZSwgZmFsbCBiYWNrIHRvIHVzaW5nXG4gICAgICAvLyBgb3BhY2l0eWAgdG8gbWFrZSBpdCBvcGFxdWUgc2luY2UgaXRzIGVuZCB2YWx1ZSBjb3VsZCBiZSBhIHNvbGlkIGNvbG9yLlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tkcm9wLWNvbG9yO1xuICAgICAgb3BhY2l0eTogJG9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSkge1xuICAmLm1hdC1jaGVja2VkIHtcbiAgICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgICAgIC8vIE9wYWNpdHkgaXMgZGV0ZXJtaW5lZCBmcm9tIHRoZSBzcGVjcyBmb3IgdGhlIHNlbGVjdGlvbiBjb250cm9scy5cbiAgICAgIC8vIFNlZTogaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzcGVjc1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUsIDAuNTQpO1xuICAgIH1cblxuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgLy8gU2V0IG5vIG9wYWNpdHkgZm9yIHRoZSByaXBwbGVzIGJlY2F1c2UgdGhlIHJpcHBsZSBvcGFjaXR5IHdpbGwgYmUgYWRqdXN0ZWQgZHluYW1pY2FsbHlcbiAgICAgIC8vIGJhc2VkIG9uIHRoZSB0eXBlIG9mIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlLXRvZ2dsZSAoZS5nLiBmb3IgaG92ZXIsIGZvY3VzKVxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcms6IG1hcF9nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLy8gQ29sb3IgaHVlcyBhcmUgYmFzZWQgb24gdGhlIHNwZWNzIHdoaWNoIGJyaWVmbHkgc2hvdyB0aGUgaHVlcyB0aGF0IGFyZSBhcHBsaWVkIHRvIGEgc3dpdGNoLlxuICAvLyBUaGUgMjAxOCBzcGVjcyBubyBsb25nZXIgZGVzY3JpYmUgaG93IGRhcmsgc3dpdGNoZXMgc2hvdWxkIGxvb2sgbGlrZS4gRHVlIHRvIHRoZSBsYWNrIG9mXG4gIC8vIGluZm9ybWF0aW9uIGZvciBkYXJrIHRoZW1lZCBzd2l0Y2hlcywgd2UgcGFydGlhbGx5IGtlZXAgdGhlIG9sZCBiZWhhdmlvciB0aGF0IGlzIGJhc2VkIG9uXG4gIC8vIHRoZSBwcmV2aW91cyBzcGVjaWZpY2F0aW9ucy4gRm9yIHRoZSBjaGVja2VkIGNvbG9yIHdlIGFsd2F5cyB1c2UgdGhlIGBkZWZhdWx0YCBodWUgYmVjYXVzZVxuICAvLyB0aGF0IGZvbGxvd3MgTURDIGFuZCBhbHNvIG1ha2VzIGl0IGVhc2llciBmb3IgcGVvcGxlIHRvIGNyZWF0ZSBhIGN1c3RvbSB0aGVtZSB3aXRob3V0IG5lZWRpbmdcbiAgLy8gdG8gc3BlY2lmeSBlYWNoIGh1ZSBpbmRpdmlkdWFsbHkuXG4gICR0aHVtYi11bmNoZWNrZWQtaHVlOiBpZigkaXMtZGFyaywgNDAwLCA1MCk7XG4gICR0aHVtYi1jaGVja2VkLWh1ZTogZGVmYXVsdDtcblxuICAkYmFyLXVuY2hlY2tlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UpO1xuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCRhY2NlbnQsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHByaW1hcnksICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXNsaWRlLXRvZ2dsZS1jaGVja2VkKCR3YXJuLCAkdGh1bWItY2hlY2tlZC1odWUpO1xuICAgIH1cblxuICAgICY6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcmlwcGxlLXVuY2hlY2tlZC1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG1hdC1ncmV5LCAkdGh1bWItdW5jaGVja2VkLWh1ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXItdW5jaGVja2VkLWNvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHBhbGV0dGUpIHtcbiAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgLm1hdC1zbGlkZXItdGh1bWIsXG4gIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICRtYXQtc2xpZGVyLW9mZi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZi1hY3RpdmUpO1xuICAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW1pbik7XG4gICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdCwgMC4yKTtcbiAgJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC4xMik7XG4gICRtYXQtc2xpZGVyLXRpY2stY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgMC43KTtcbiAgJG1hdC1zbGlkZXItdGljay1zaXplOiAycHg7XG5cbiAgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1wcmltYXJ5IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRwcmltYXJ5KTtcbiAgfVxuXG4gIC5tYXQtYWNjZW50IHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCRhY2NlbnQpO1xuICB9XG5cbiAgLm1hdC13YXJuIHtcbiAgICBAaW5jbHVkZSBfbWF0LXNsaWRlci1pbm5lci1jb250ZW50LXRoZW1lKCR3YXJuKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlcjpob3ZlcixcbiAgLmNkay1mb2N1c2VkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWRpc2FibGVkIHtcbiAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4gICAgLm1hdC1zbGlkZXItdGh1bWIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItbWluLXZhbHVlIHtcbiAgICAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctbWluLXZhbHVlLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLFxuICAgICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSB7XG4gICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWNvbG9yO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlcixcbiAgICAgICYuY2RrLWZvY3VzZWQge1xuICAgICAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjtcbiAgICAgICAgfVxuXG4gICAgICAgICYubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGVyLWhhcy10aWNrcyAubWF0LXNsaWRlci13cmFwcGVyOjphZnRlciB7XG4gICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci10aWNrLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgICAvLyBGaXJlZm94IGRvZXNuJ3QgZHJhdyB0aGUgZ3JhZGllbnQgY29ycmVjdGx5IHdpdGggJ3RvIHJpZ2h0J1xuICAgIC8vIChzZWUgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTMxNDMxOSkuXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLW1vei1yZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KDAuMDAwMWRlZywgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgJG1hdC1zbGlkZXItdGljay1jb2xvcixcbiAgICAgICAgJG1hdC1zbGlkZXItdGljay1jb2xvciAkbWF0LXNsaWRlci10aWNrLXNpemUsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zdGVwLWhlYWRlciB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQsXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzIHRoZSA6aG92ZXIgc3RhdGUgd2lsbCBsaW5nZXIgb24gdGhlIGVsZW1lbnQgYWZ0ZXIgYSB0YXAuXG4gICAgLy8gUmVzZXQgaXQgdmlhIGBAbWVkaWFgIGFmdGVyIHRoZSBkZWNsYXJhdGlvbiwgYmVjYXVzZSB0aGUgbWVkaWEgcXVlcnkgaXNuJ3RcbiAgICAvLyBzdXBwb3J0ZWQgYnkgYWxsIGJyb3dzZXJzIHlldC5cbiAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwsXG4gICAgLm1hdC1zdGVwLW9wdGlvbmFsIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uIHtcbiAgICAgIC8vIFRPRE8oam9zZXBocGVycm90dCk6IFVwZGF0ZSB0byB1c2luZyBhIGNvcnJlY3RlZCBkaXNhYmxlZC10ZXh0IGNvbnRyYXN0XG4gICAgICAvLyBpbnN0ZWFkIG9mIHNlY29uZGFyeS10ZXh0LlxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbiAgICAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1kb25lLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2Fybik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgfVxuXG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4gIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4gIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsLWxpbmUge1xuICAgIGJvcmRlci10b3AtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpO1xuICAgIH07XG4gIH1cblxuICAubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1sYWJlbC1zZWxlY3RlZCB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgICB9O1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgICAkdGFibGUtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICAgICR0ZXh0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcblxuICAgIC8vIEJlY2F1c2UgdGhlIGFycm93IGlzIG1hZGUgdXAgb2YgbXVsdGlwbGUgZWxlbWVudHMgdGhhdCBhcmUgc3RhY2tlZCBvbiB0b3Agb2YgZWFjaCBvdGhlcixcbiAgICAvLyB3ZSBjYW4ndCB1c2UgdGhlIHNlbWktdHJhc3BhcmVudCBjb2xvciBmcm9tIHRoZSB0aGVtZSBkaXJlY3RseS4gSWYgdGhlIHZhbHVlIGlzIGEgY29sb3JcbiAgICAvLyAqdHlwZSosIHdlIGNvbnZlcnQgaXQgaW50byBhIHNvbGlkIGNvbG9yIGJ5IHRha2luZyB0aGUgb3BhY2l0eSBmcm9tIHRoZSByZ2JhIHZhbHVlIGFuZFxuICAgIC8vIHVzaW5nIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZFxuICAgIC8vIHdoZW4gbWl4aW5nIHRoZSBjb2xvcnMgdG9nZXRoZXIuIE90aGVyd2lzZSwgaWYgaXQgcmVzb2x2ZXMgdG8gc29tZXRoaW5nIGRpZmZlcmVudFxuICAgIC8vIChlLmcuIGl0IHJlc29sdmVzIHRvIGEgQ1NTIHZhcmlhYmxlKSwgd2UgdXNlIHRoZSBjb2xvciBkaXJlY3RseS5cbiAgICBAaWYgKHR5cGUtb2YoJHRhYmxlLWJhY2tncm91bmQpID09IGNvbG9yIGFuZCB0eXBlLW9mKCR0ZXh0LWNvbG9yKSA9PSBjb2xvcikge1xuICAgICAgJHRleHQtb3BhY2l0eTogb3BhY2l0eSgkdGV4dC1jb2xvcik7XG4gICAgICBjb2xvcjogbWl4KCR0YWJsZS1iYWNrZ3JvdW5kLCByZ2JhKCR0ZXh0LWNvbG9yLCAxKSwgKDEgLSAkdGV4dC1vcGFjaXR5KSAqIDEwMCUpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc29ydC10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtdGFicy10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRoZWFkZXItYm9yZGVyOiAxcHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LXRhYi1uYXYtYmFyLFxuICAubWF0LXRhYi1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206ICRoZWFkZXItYm9yZGVyO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIHtcbiAgICAubWF0LXRhYi1uYXYtYmFyLFxuICAgIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgICBib3JkZXItdG9wOiAkaGVhZGVyLWJvcmRlcjtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBoZWFkZXIgYm9yZGVyIHdoZW4gdGhlcmUgaXMgYSBiYWNrZ3JvdW5kIGNvbG9yXG4gIC5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuICAubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgfVxuXG4gIC5tYXQtdGFiLWdyb3VwLCAubWF0LXRhYi1uYXYtYmFyIHtcbiAgICAkdGhlbWUtY29sb3JzOiAoXG4gICAgICBwcmltYXJ5OiAkcHJpbWFyeSxcbiAgICAgIGFjY2VudDogJGFjY2VudCxcbiAgICAgIHdhcm46ICR3YXJuXG4gICAgKTtcblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgdGhlIGZvcmVncm91bmQgY29sb3Igb2YgdGhlIHRhYnNcbiAgICAgICYubWF0LSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvcik7XG5cbiAgICAgICAgLy8gT3ZlcnJpZGUgaW5rIGJhciB3aGVuIGJhY2tncm91bmQgY29sb3IgaXMgdGhlIHNhbWVcbiAgICAgICAgJi5tYXQtYmFja2dyb3VuZC0jeyRuYW1lfSB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1pbmstYmFyKCRjb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJGNvbG9yIGluICR0aGVtZS1jb2xvcnMge1xuICAgICAgLy8gU2V0IGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHRhYnMgYW5kIG92ZXJyaWRlIGZvY3VzIGNvbG9yXG4gICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWItbGFiZWwtZm9jdXMoJGNvbG9yKTtcbiAgICAgICAgQGluY2x1ZGUgX21hdC10YWJzLWJhY2tncm91bmQoJGNvbG9yKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtaW5rLWJhcigkY29sb3IsICRodWU6IGRlZmF1bHQpIHtcbiAgLm1hdC1pbmstYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGNvbG9yLCAkaHVlKTtcbiAgfVxufVxuXG5AbWl4aW4gX21hdC10YWItbGFiZWwtZm9jdXMoJHRhYi1mb2N1cy1jb2xvcikge1xuICAubWF0LXRhYi1sYWJlbCxcbiAgLm1hdC10YWItbGluayB7XG4gICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAmLmNkay1wcm9ncmFtLWZvY3VzZWQge1xuICAgICAgJjpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR0YWItZm9jdXMtY29sb3IsIGxpZ2h0ZXIsIDAuMyk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYnMtYmFja2dyb3VuZCgkYmFja2dyb3VuZC1jb2xvcikge1xuICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBmb3IgdGhlIHRhYiBncm91cFxuICAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWxpbmtzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IpO1xuICB9XG5cbiAgLy8gU2V0IGxhYmVscyB0byBjb250cmFzdCBhZ2FpbnN0IGJhY2tncm91bmRcbiAgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QpO1xuXG4gICAgJi5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHBhZ2luYXRpb24gY2hldnJvbnMgdG8gY29udHJhc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgfVxuXG4gIC8vIFNldCByaXBwbGVzIGNvbG9yIHRvIGJlIHRoZSBjb250cmFzdCBjb2xvciBvZiB0aGUgbmV3IGJhY2tncm91bmQuIE90aGVyd2lzZSB0aGUgcmlwcGxlXG4gIC8vIGNvbG9yIHdpbGwgYmUgYmFzZWQgb24gdGhlIGFwcCBiYWNrZ3JvdW5kIGNvbG9yLlxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQtY29sb3IsIGRlZmF1bHQtY29udHJhc3QsIDAuMTIpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdGFicy10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10YWItZ3JvdXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYnV0dG9uKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC10b29sYmFyLWNvbG9yKCRwYWxldHRlKSB7XG4gIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIGNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpO1xufVxuXG5AbWl4aW4gX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzIHtcbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtc2VsZWN0LWFycm93LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgICBjYXJldC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10b29sYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGFwcC1iYXIpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJGFjY2VudCk7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRvb2xiYXItY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1mb3JtLWZpZWxkLW92ZXJyaWRlcztcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdG9vbGJhcixcbiAgLm1hdC10b29sYmFyIGgxLFxuICAubWF0LXRvb2xiYXIgaDIsXG4gIC5tYXQtdG9vbGJhciBoMyxcbiAgLm1hdC10b29sYmFyIGg0LFxuICAubWF0LXRvb2xiYXIgaDUsXG4gIC5tYXQtdG9vbGJhciBoNiB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIHRpdGxlKTtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuXG5cblxuXG4kbWF0LXRvb2x0aXAtdGFyZ2V0LWhlaWdodDogMjJweDtcbiRtYXQtdG9vbHRpcC1mb250LXNpemU6IDEwcHg7XG4kbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZzogKCRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWZvbnQtc2l6ZSkgLyAyO1xuXG4kbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0OiAzMHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplOiAxNHB4O1xuJG1hdC10b29sdGlwLWhhbmRzZXQtdmVydGljYWwtcGFkZGluZzpcbiAgICAoJG1hdC10b29sdGlwLWhhbmRzZXQtdGFyZ2V0LWhlaWdodCAtICRtYXQtdG9vbHRpcC1oYW5kc2V0LWZvbnQtc2l6ZSkgLyAyO1xuXG5AbWl4aW4gbWF0LXRvb2x0aXAtdGhlbWUoJHRoZW1lKSB7XG4gIC5tYXQtdG9vbHRpcCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRtYXQtZ3JleSwgNzAwLCAwLjkpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWZvbnQtc2l6ZTtcbiAgICBwYWRkaW5nLXRvcDogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICAgIGZvbnQtc2l6ZTogJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICAgIHBhZGRpbmctYm90dG9tOiAkbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nO1xuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKSB7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuXG4gIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gICAgLy8gVXNlIHRoZSBwcmltYXJ5IHRleHQgb24gdGhlIGRhcmsgdGhlbWUsIGV2ZW4gdGhvdWdoIHRoZSBsaWdodGVyIG9uZSB1c2VzXG4gICAgLy8gYSBzZWNvbmRhcnksIGJlY2F1c2UgdGhlIGNvbnRyYXN0IG9uIHRoZSBsaWdodCBwcmltYXJ5IHRleHQgaXMgcG9vci5cbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsICRkYXJrLXByaW1hcnktdGV4dCwgJGxpZ2h0LXNlY29uZGFyeS10ZXh0KTtcbiAgICBiYWNrZ3JvdW5kOiBpZigkaXMtZGFyay10aGVtZSwgbWFwLWdldCgkbWF0LWdyZXksIDUwKSwgIzMyMzIzMik7XG5cbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbig2LCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBjb2xvcjogaWYoJGlzLWRhcmstdGhlbWUsIGluaGVyaXQsIG1hdC1jb2xvcigkYWNjZW50KSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBpbmhlcml0O1xuICAgICAgc2l6ZTogaW5oZXJpdDtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgZmlsbCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcblxuICAkZmlsbC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjEsIDAuMDQpKTtcbiAgJGZpbGwtZGlzYWJsZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCBpZigkaXMtZGFyay10aGVtZSwgMC4wNSwgMC4wMikpO1xuICAkdW5kZXJsaW5lLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjUsIDAuNDIpKTtcbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBvbiB0b3Agb2YgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy10b3A6IDAuMjVlbTtcbiAgLy8gVGhlIHBhZGRpbmcgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZy1ib3R0b206IDAuNzVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIGZpbGwgYXBwZWFyYW5jZS5cbiAgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmctdG9wIDAgJGluZml4LXBhZGRpbmctYm90dG9tIDA7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZy10b3A7XG4gICAgICBtYXJnaW4tdG9wOiAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1maWxsLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmctdG9wICsgJGZpbGwtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIGxlZ2FjeSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1oaW50IHtcbiAgICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY29udHJvbC1kaXNhYmxlZC11bmRlcmxpbmUoJHVuZGVybGluZS1jb2xvcik7XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gV2UgdXNlIHBlcnNwZWN0aXZlIHRvIGZpeCB0aGUgdGV4dCBibHVycmluZXNzIGFzIGRlc2NyaWJlZCBoZXJlOlxuICAvLyBodHRwOi8vd3d3LnVzZXJhZ2VudG1hbi5jb20vYmxvZy8yMDE0LzA1LzA0L2ZpeGluZy10eXBvZ3JhcGh5LWluc2lkZS1vZi0yLWQtY3NzLXRyYW5zZm9ybXMvXG4gIC8vIFRoaXMgcmVzdWx0cyBpbiBhIHNtYWxsIGppdHRlciBhZnRlciB0aGUgbGFiZWwgZmxvYXRzIG9uIEZpcmVmb3gsIHdoaWNoIHRoZVxuICAvLyB0cmFuc2xhdGVaIGZpeGVzLlxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcpIHNjYWxlKCRmb250LXNjYWxlKSBwZXJzcGVjdGl2ZSgxMDBweClcbiAgdHJhbnNsYXRlWigwLjAwMXB4ICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG5cbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuLy8gU2FtZSBhcyBtaXhpbiBhYm92ZSwgYnV0IG9taXRzIHRoZSB0cmFuc2xhdGVaIGZvciBwcmludGluZyBwdXJwb3Nlcy5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KCRmb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApIHtcbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlKVxuICAgICAgICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICAvLyBUaGUgdHJpY2tzIGFib3ZlIHVzZWQgdG8gc21vb3RoIG91dCB0aGUgYW5pbWF0aW9uIG9uIGNocm9tZSBhbmQgZmlyZWZveCBhY3R1YWxseSBtYWtlIHRoaW5nc1xuICAvLyB3b3JzZSBvbiBJRSwgc28gd2UgZG9uJ3QgaW5jbHVkZSB0aGVtIGluIHRoZSBJRSB2ZXJzaW9uLlxuICAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgc2VlbSB0byBtZWFzdXJlIGZyb20gdGhlIGVkZ2VcbiAgLy8gb2YgdGhlIHRleHQgaXRzZWxmLCBub3QgdGhlIGVkZ2Ugb2YgdGhlIGxpbmU7IHRoZXJlZm9yZSB3ZSBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZy5cbiAgJGluZml4LXBhZGRpbmc6IDAuNWVtIC0gJGxpbmUtc3BhY2luZztcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuIFdlIGFnYWluIG5lZWQgdG8gc3VidHJhY3Qgb2ZmIHRoZSBsaW5lIHNwYWNpbmcgc2luY2UgdGhlIG1vY2tzIG1lYXN1cmUgdG8gdGhlIGVkZ2Ugb2YgdGhlXG4gIC8vIHRleHQsIG5vdCB0aGUgIGVkZ2Ugb2YgdGhlIGxpbmUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgLSAoJGxpbmUtc3BhY2luZyAqIDIpO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDA7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cblxuICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgICAgYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgICAvLyBXZSB3YW50IHRoZSBzdWJzY3JpcHQgdG8gc3RhcnQgYXQgdGhlIGVuZCBvZiB0aGUgY29udGVudCBib3gsIG5vdCB0aGUgcGFkZGluZyBib3gsXG4gICAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgICB9XG4gIH1cblxuICAvLyB0cmFuc2xhdGVaIGNhdXNlcyB0aGUgbGFiZWwgdG8gbm90IGFwcGVhciB3aGlsZSBwcmludGluZywgc28gd2Ugb3ZlcnJpZGUgaXQgdG8gbm90XG4gIC8vIGFwcGx5IHRyYW5zbGF0ZVogd2hpbGUgcHJpbnRpbmdcbiAgQG1lZGlhIHByaW50IHtcbiAgICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMCB3aWxsIHJlbHkgb24gQXV0b2ZpbGxNb25pdG9yIGluc3RlYWQuXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nLXByaW50KFxuICAgICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IG9ubHkgYXBwbHkgdG8gdGhlIG91dGxpbmUgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRsYWJlbC1kaXNhYmxlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgJG91dGxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMywgMC4xMikpO1xuICAkb3V0bGluZS1jb2xvci1ob3ZlcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkb3V0bGluZS1jb2xvci1wcmltYXJ5OiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAkb3V0bGluZS1jb2xvci1hY2NlbnQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgJG91dGxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMTUsIDAuMDYpKTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWhvdmVyO1xuICAgIH1cblxuICAgICYubWF0LWZvY3VzZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItcHJpbWFyeTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLWFjY2VudDtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIENsYXNzIHJlcGVhdGVkIHNvIHRoYXQgcnVsZSBpcyBzcGVjaWZpYyBlbm91Z2ggdG8gb3ZlcnJpZGUgZm9jdXNlZCBhY2NlbnQgY29sb3IgY2FzZS5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQge1xuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgY29sb3I6ICRsYWJlbC1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItZGlzYWJsZWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlOiAwO1xuXG4vLyBBcHBsaWVzIGEgZmxvYXRpbmcgbGFiZWwgYWJvdmUgdGhlIGZvcm0gZmllbGQgY29udHJvbCBpdHNlbGYuXG5AbWl4aW4gX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGUpXG4gIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIHBhZGRpbmcgYWJvdmUgYW5kIGJlbG93IHRoZSBpbmZpeC5cbiAgJGluZml4LXBhZGRpbmc6IDFlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIGFtb3VudCB3ZSBvZmZzZXQgdGhlIGxhYmVsIGZyb20gdGhlIGlucHV0IHRleHQgaW4gdGhlIG91dGxpbmUgYXBwZWFyYW5jZS5cbiAgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ6IC0wLjI1ZW07XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICAgIHBhZGRpbmc6ICRpbmZpeC1wYWRkaW5nIDAgJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgICAgbWFyZ2luLXRvcDogJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQ7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQge1xuICAgICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXJ2ZXItc2lkZSByZW5kZXJlZCBtYXRJbnB1dCB3aXRoIGEgbGFiZWwgYXR0cmlidXRlIGJ1dCBsYWJlbCBub3Qgc2hvd25cbiAgICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLW91dGxpbmUtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZyArICRvdXRsaW5lLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgc3RhbmRhcmQgYXBwZWFyYW5jZSBvZiB0aGUgZm9ybS1maWVsZC5cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNywgMC40MikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXR5cG9ncmFwaHkoJGNvbmZpZykge31cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBhcHBseSB0byBhbGwgYXBwZWFyYW5jZXMgb2YgdGhlIGZvcm0tZmllbGQuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gIC8vIExhYmVsIGNvbG9ycy4gUmVxdWlyZWQgaXMgdXNlZCBmb3IgdGhlIGAqYCBzdGFyIHNob3duIGluIHRoZSBsYWJlbC5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjYpKTtcbiAgJGZvY3VzZWQtbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRyZXF1aXJlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuXG4gIC8vIFVuZGVybGluZSBjb2xvcnMuXG4gICR1bmRlcmxpbmUtY29sb3ItYmFzZTogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMSwgMC44NykpO1xuICAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkdW5kZXJsaW5lLWNvbG9yLXdhcm46IG1hdC1jb2xvcigkd2Fybik7XG4gICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWhpbnQge1xuICAgIGNvbG9yOiAkbGFiZWwtY29sb3I7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICBjb2xvcjogJGZvY3VzZWQtbGFiZWwtY29sb3I7XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICRyZXF1aXJlZC1sYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYmFzZTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWZvY3VzZWQtY29sb3I7XG5cbiAgICAgICYubWF0LWFjY2VudCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgfVxuICB9XG5cbiAgLy8gU3R5bGluZyBmb3IgdGhlIGVycm9yIHN0YXRlIG9mIHRoZSBmb3JtIGZpZWxkLiBOb3RlIHRoYXQgd2hpbGUgdGhlIHNhbWUgY2FuIGJlXG4gIC8vIGFjaGlldmVkIHdpdGggdGhlIG5nLSogY2xhc3Nlcywgd2UgdXNlIHRoaXMgYXBwcm9hY2ggaW4gb3JkZXIgdG8gZW5zdXJlIHRoYXQgdGhlIHNhbWVcbiAgLy8gbG9naWMgaXMgdXNlZCB0byBzdHlsZSB0aGUgZXJyb3Igc3RhdGUgYW5kIHRvIHNob3cgdGhlIGVycm9yIG1lc3NhZ2VzLlxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG5cbiAgICAgICYubWF0LWFjY2VudCxcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtYWNjZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAubWF0LWVycm9yIHtcbiAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtbGVnYWN5LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXN0YW5kYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWZpbGwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpO1xufVxuXG4vLyBVc2VkIHRvIG1ha2UgaW5zdGFuY2VzIG9mIHRoZSBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcgbWl4aW4gbmVnbGlnaWJseSBkaWZmZXJlbnQsXG4vLyBhbmQgcHJldmVudCBHb29nbGUncyBDU1MgT3B0aW1pemVyIGZyb20gY29sbGFwc2luZyB0aGUgZGVjbGFyYXRpb25zLiBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHNvbWVcbi8vIG9mIHRoZSBzZWxlY3RvcnMgY29udGFpbiBwc2V1ZG8tY2xhc3NlcyBub3QgcmVjb2duaXplZCBpbiBhbGwgYnJvd3NlcnMuIElmIGEgYnJvd3NlciBlbmNvdW50ZXJzXG4vLyBhbiB1bmtub3duIHBzZXVkby1jbGFzcyBpdCB3aWxsIGRpc2NhcmQgdGhlIGVudGlyZSBydWxlIHNldC5cbiRtYXQtZm9ybS1maWVsZC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtZGVkdXBlKVxuICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcbiAgd2lkdGg6IDEwMCUgLyAkZm9udC1zY2FsZSArICRtYXQtZm9ybS1maWVsZC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsIGFuZCBzdWJzY3JpcHQuXG4gICRzdWJzY3JpcHQtZm9udC1zY2FsZTogMC43NTtcbiAgLy8gVGhlIGFtb3VudCB0byBzY2FsZSB0aGUgZm9udCBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGU6IDEuNTtcblxuICAvLyBUaGUgcGFkZGluZyBvbiB0aGUgaW5maXguIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW07XG4gIC8vIFRoZSBtYXJnaW4gYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC1pbmZpeCB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgZmxvYXRpbmcgbGFiZWwuXG4gICRpbmZpeC1tYXJnaW4tdG9wOiAxZW0gKiAkbGluZS1oZWlnaHQgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBsYWJlbCBhbmQgc3Vic2NyaXB0IHRleHQuXG4gICRzdWJzY3JpcHQtZm9udC1zaXplOiAkc3Vic2NyaXB0LWZvbnQtc2NhbGUgKiAxMDAlO1xuICAvLyBGb250IHNpemUgdG8gdXNlIGZvciB0aGUgZm9yIHRoZSBwcmVmaXggYW5kIHN1ZmZpeCBpY29ucy5cbiAgJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIFRoZSBzcGFjZSBiZXR3ZWVuIHRoZSBib3R0b20gb2YgdGhlIC5tYXQtZm9ybS1maWVsZC1mbGV4IGFyZWEgYW5kIHRoZSBzdWJzY3JpcHQgd3JhcHBlci5cbiAgLy8gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCB0aGlzIG1hcmdpbiBpcyBhcHBsaWVkIHRvIGFuIGVsZW1lbnQgd2l0aCB0aGUgc3Vic2NyaXB0XG4gIC8vIHRleHQgZm9udCBzaXplLCBzbyB3ZSBuZWVkIHRvIGRpdmlkZSBieSB0aGUgc2NhbGUgZmFjdG9yIHRvIG1ha2UgaXQgaGFsZiBvZiB0aGUgb3JpZ2luYWwgdGV4dFxuICAvLyBzaXplLlxuICAkc3Vic2NyaXB0LW1hcmdpbi10b3A6IDAuNWVtIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgcGFkZGluZyBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLXdyYXBwZXIgdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIHN1YnNjcmlwdCwgc2luY2UgaXQnc1xuICAvLyBhYnNvbHV0ZWx5IHBvc2l0aW9uZWQuIFRoaXMgaXMgYSBjb21iaW5hdGlvbiBvZiB0aGUgc3Vic2NyaXB0J3MgbWFyZ2luIGFuZCBsaW5lLWhlaWdodCwgYnV0IHdlXG4gIC8vIG5lZWQgdG8gbXVsdGlwbHkgYnkgdGhlIHN1YnNjcmlwdCBmb250IHNjYWxlIGZhY3RvciBzaW5jZSB0aGUgd3JhcHBlciBoYXMgYSBsYXJnZXIgZm9udCBzaXplLlxuICAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTogKCRzdWJzY3JpcHQtbWFyZ2luLXRvcCArICRsaW5lLWhlaWdodCkgKiAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaW5wdXQpO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXgsXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXgge1xuICAgIC8vIEFsbG93IGljb25zIGluIGEgcHJlZml4IG9yIHN1ZmZpeCB0byBhZGFwdCB0byB0aGUgY29ycmVjdCBzaXplLlxuICAgIC5tYXQtaWNvbiB7XG4gICAgICBmb250LXNpemU6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zaXplO1xuICAgICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodDtcbiAgICB9XG5cbiAgICAvLyBBbGxvdyBpY29uIGJ1dHRvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uLWJ1dHRvbiB7XG4gICAgICBoZWlnaHQ6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcbiAgICAgIHdpZHRoOiAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2NhbGUgKiAxZW07XG5cbiAgICAgIC5tYXQtaWNvbiB7XG4gICAgICAgIGhlaWdodDogJGxpbmUtaGVpZ2h0ICogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICAvLyBUaHJvd3Mgb2ZmIHRoZSBiYXNlbGluZSBpZiB3ZSBkbyBpdCBhcyBhIHJlYWwgbWFyZ2luLCBzbyB3ZSBkbyBpdCBhcyBhIGJvcmRlciBpbnN0ZWFkLlxuICAgIGJvcmRlci10b3A6ICRpbmZpeC1tYXJnaW4tdG9wIHNvbGlkIHRyYW5zcGFyZW50O1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgJi5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cblxuICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgIC8vICh1c2VkIGFzIGEgcHVyZSBDU1Mgc3RhbmQtaW4gZm9yIG1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCkuXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgICB0b3A6IC0kaW5maXgtbWFyZ2luLXRvcDtcbiAgICBwYWRkaW5nLXRvcDogJGluZml4LW1hcmdpbi10b3A7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRvcDogJGluZml4LW1hcmdpbi10b3AgKyAkaW5maXgtcGFkZGluZztcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgIC8vIFdlIHdhbnQgdGhlIHVuZGVybGluZSB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudC5cbiAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgICBmb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zaXplO1xuICAgIG1hcmdpbi10b3A6ICRzdWJzY3JpcHQtbWFyZ2luLXRvcDtcblxuICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAvLyBzbyB3ZSBtb3ZlIGl0IHVwIGJ5IHRoZSBwYWRkaW5nIGFtb3VudCAoYWRqdXN0ZWQgZm9yIHRoZSBzbWFsbGVyIGZvbnQgc2l6ZSk7XG4gICAgdG9wOiBjYWxjKDEwMCUgLSAjeyR3cmFwcGVyLXBhZGRpbmctYm90dG9tIC8gJHN1YnNjcmlwdC1mb250LXNjYWxlfSk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG59XG5cblxuXG5cblxuQG1peGluIG1hdC10cmVlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdHJlZSB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCAnY2FyZCcpO1xuICB9XG5cbiAgLm1hdC10cmVlLW5vZGUsXG4gIC5tYXQtbmVzdGVkLXRyZWUtbm9kZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10cmVlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRyZWUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBmb250LXdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGVzIGFsbCBvZiB0aGUgdHlwb2dyYXBoaWMgc3R5bGVzLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkY29uZmlnOiBudWxsKSB7XG4gIEBpZiAkY29uZmlnID09IG51bGwge1xuICAgICRjb25maWc6IG1hdC10eXBvZ3JhcGh5LWNvbmZpZygpO1xuICB9XG5cbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1iYXNlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1vcHRpb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGdyb3VwLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGFyZSBub3QgdGhlbWUtZGVwZW5kZW50LlxuQG1peGluIG1hdC1jb3JlKCR0eXBvZ3JhcGh5LWNvbmZpZzogbnVsbCkge1xuICBAaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXR5cG9ncmFwaHkoJHR5cG9ncmFwaHktY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZSgpO1xuICBAaW5jbHVkZSBjZGstYTExeSgpO1xuICBAaW5jbHVkZSBjZGstb3ZlcmxheSgpO1xuICBAaW5jbHVkZSBjZGstdGV4dC1maWVsZCgpO1xufVxuXG4vLyBNaXhpbiB0aGF0IHJlbmRlcnMgYWxsIG9mIHRoZSBjb3JlIHN0eWxlcyB0aGF0IGRlcGVuZCBvbiB0aGUgdGhlbWUuXG5AbWl4aW4gbWF0LWNvcmUtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1yaXBwbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBzZXVkby1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuXG4gIC8vIFByb3ZpZGVzIGV4dGVybmFsIENTUyBjbGFzc2VzIGZvciBlYWNoIGVsZXZhdGlvbiB2YWx1ZS4gRWFjaCBDU1MgY2xhc3MgaXMgZm9ybWF0dGVkIGFzXG4gIC8vIGBtYXQtZWxldmF0aW9uLXokelZhbHVlYCB3aGVyZSBgJHpWYWx1ZWAgY29ycmVzcG9uZHMgdG8gdGhlIHotc3BhY2UgdG8gd2hpY2ggdGhlIGVsZW1lbnQgaXNcbiAgLy8gZWxldmF0ZWQuXG4gIEBmb3IgJHpWYWx1ZSBmcm9tIDAgdGhyb3VnaCAyNCB7XG4gICAgLiN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0jeyR6VmFsdWV9IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gV3JhcHBlciBlbGVtZW50IHRoYXQgcHJvdmlkZXMgdGhlIHRoZW1lIGJhY2tncm91bmQgd2hlbiB0aGUgdXNlcidzIGNvbnRlbnQgaXNuJ3RcbiAgLy8gaW5zaWRlIG9mIGEgYG1hdC1zaWRlbmF2LWNvbnRhaW5lcmAuIE5vdGUgdGhhdCB3ZSBuZWVkIHRvIGV4Y2x1ZGUgdGhlIGFtcGVyc2FuZFxuICAvLyBzZWxlY3RvciBpbiBjYXNlIHRoZSBtaXhpbiBpcyBpbmNsdWRlZCBhdCB0aGUgdG9wIGxldmVsLlxuICAubWF0LWFwcC1iYWNrZ3JvdW5kI3tpZigmLCAnLCAmLm1hdC1hcHAtYmFja2dyb3VuZCcsICcnKX0ge1xuICAgICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAvLyBNYXJrZXIgdGhhdCBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSB1c2VyIGhhcyBhZGRlZCBhIHRoZW1lIHRvIHRoZWlyIHBhZ2UuXG4gIEBhdC1yb290IHtcbiAgICAubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtZGl2aWRlciB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIENyZWF0ZSBhIHRoZW1lLlxuQG1peGluIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJHRoZW1lKSB7XG4gIEBpbmNsdWRlIG1hdC1jb3JlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJhZGdlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1ib3R0b20tc2hlZXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2FyZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hlY2tib3gtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGF0ZXBpY2tlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZGlhbG9nLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaXZpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1leHBhbnNpb24tcGFuZWwtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWdyaWQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaWNvbi10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtaW5wdXQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LW1lbnUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXBhZ2luYXRvci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3MtYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2VsZWN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zaWRlbmF2LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZS10b2dnbGUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc29ydC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdGFicy10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbGJhci10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc25hY2stYmFyLXRoZW1lKCR0aGVtZSk7XG59XG4iLCIvKiEgSm9pbnRKUyB2Mi4yLjEgKDIwMTgtMTEtMTIpIC0gSmF2YVNjcmlwdCBkaWFncmFtbWluZyBsaWJyYXJ5XG5cblxuVGhpcyBTb3VyY2UgQ29kZSBGb3JtIGlzIHN1YmplY3QgdG8gdGhlIHRlcm1zIG9mIHRoZSBNb3ppbGxhIFB1YmxpY1xuTGljZW5zZSwgdi4gMi4wLiBJZiBhIGNvcHkgb2YgdGhlIE1QTCB3YXMgbm90IGRpc3RyaWJ1dGVkIHdpdGggdGhpc1xuZmlsZSwgWW91IGNhbiBvYnRhaW4gb25lIGF0IGh0dHA6Ly9tb3ppbGxhLm9yZy9NUEwvMi4wLy5cbiovXG4vKlxuQSBjb21wbGV0ZSBsaXN0IG9mIFNWRyBwcm9wZXJ0aWVzIHRoYXQgY2FuIGJlIHNldCB0aHJvdWdoIENTUyBpcyBoZXJlOlxuaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHL3N0eWxpbmcuaHRtbFxuXG5JbXBvcnRhbnQgbm90ZTogUHJlc2VudGF0aW9uIGF0dHJpYnV0ZXMgaGF2ZSBhIGxvd2VyIHByZWNlZGVuY2Ugb3ZlciBDU1Mgc3R5bGUgcnVsZXMuXG4qL1xuXG5cbi8qIC52aWV3cG9ydCBpcyBhIDxnPiBub2RlIHdyYXBwaW5nIGFsbCBkaWFncmFtIGVsZW1lbnRzIGluIHRoZSBwYXBlciAqL1xuLmpvaW50LXZpZXdwb3J0IHtcbiAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5qb2ludC1wYXBlciA+IHN2Zyxcbi5qb2ludC1wYXBlci1iYWNrZ3JvdW5kLFxuLmpvaW50LXBhcGVyLWdyaWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLypcbjEuIElFIGNhbid0IGhhbmRsZSBwYXRocyB3aXRob3V0IHRoZSBgZGAgYXR0cmlidXRlIGZvciBib3VuZGluZyBib3ggY2FsY3VsYXRpb25cbjIuIElFIGNhbid0IGV2ZW4gaGFuZGxlICdkJyBhdHRyaWJ1dGUgYXMgYSBjc3Mgc2VsZWN0b3IgKGUuZyBwYXRoW2RdKSBzbyB0aGUgZm9sbG93aW5nIHJ1bGUgd2lsbFxuICAgYnJlYWsgdGhlIGxpbmtzIHJlbmRlcmluZy5cblxucGF0aDpub3QoW2RdKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuKi9cblxuXG4vKiBtYWduZXQgaXMgYW4gZWxlbWVudCB0aGF0IGNhbiBiZSBlaXRoZXIgc291cmNlIG9yIGEgdGFyZ2V0IG9mIGEgbGluayAqL1xuW21hZ25ldD10cnVlXTpub3QoLmpvaW50LWVsZW1lbnQpIHtcbiAgIGN1cnNvcjogY3Jvc3NoYWlyO1xufVxuW21hZ25ldD10cnVlXTpub3QoLmpvaW50LWVsZW1lbnQpOmhvdmVyIHtcbiAgIG9wYWNpdHk6IC43O1xufVxuXG4vKlxuXG5FbGVtZW50cyBoYXZlIENTUyBjbGFzc2VzIG5hbWVkIGJ5IHRoZWlyIHR5cGVzLiBFLmcuIHR5cGU6IGJhc2ljLlJlY3QgaGFzIGEgQ1NTIGNsYXNzIFwiZWxlbWVudCBiYXNpYyBSZWN0XCIuXG5UaGlzIG1ha2VzIGl0IHBvc3NpYmxlIHRvIGVhc2lsbHkgc3R5bGUgZWxlbWVudHMgaW4gQ1NTIGFuZCBoYXZlIGdlbmVyaWMgQ1NTIHJ1bGVzIGFwcGx5aW5nIHRvXG50aGUgd2hvbGUgZ3JvdXAgb2YgZWxlbWVudHMuIEVhY2ggcGx1Z2luIGNhbiBwcm92aWRlIGl0cyBvd24gc3R5bGVzaGVldC5cblxuKi9cblxuLmpvaW50LWVsZW1lbnQge1xuICAgLyogR2l2ZSB0aGUgdXNlciBhIGhpbnQgdGhhdCBoZSBjYW4gZHJhZyZkcm9wIHRoZSBlbGVtZW50LiAqL1xuICAgY3Vyc29yOiBtb3ZlO1xufVxuXG4uam9pbnQtZWxlbWVudCAqIHtcbiAgIHVzZXItZHJhZzogbm9uZTtcbn1cblxuLmpvaW50LWVsZW1lbnQgLnNjYWxhYmxlICoge1xuICAgLyogVGhlIGRlZmF1bHQgYmVoYXZpb3Igd2hlbiBzY2FsaW5nIGFuIGVsZW1lbnQgaXMgbm90IHRvIHNjYWxlIHRoZSBzdHJva2UgaW4gb3JkZXIgdG8gcHJldmVudCB0aGUgdWdseSBlZmZlY3Qgb2Ygc3Ryb2tlIHdpdGggZGlmZmVyZW50IHByb3BvcnRpb25zLiAqL1xuICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xufVxuLypcblxuY29ubmVjdGlvbi13cmFwIGlzIGEgPHBhdGg+IGVsZW1lbnQgb2YgdGhlIGpvaW50LmRpYS5MaW5rIHRoYXQgZm9sbG93cyB0aGUgLmNvbm5lY3Rpb24gPHBhdGg+IG9mIHRoYXQgbGluay5cbkluIG90aGVyIHdvcmRzLCB0aGUgYGRgIGF0dHJpYnV0ZSBvZiB0aGUgLmNvbm5lY3Rpb24td3JhcCBjb250YWlucyB0aGUgc2FtZSBkYXRhIGFzIHRoZSBgZGAgYXR0cmlidXRlIG9mIHRoZVxuLmNvbm5lY3Rpb24gPHBhdGg+LiBUaGUgYWR2YW50YWdlIG9mIHVzaW5nIC5jb25uZWN0aW9uLXdyYXAgaXMgdG8gYmUgYWJsZSB0byBjYXRjaCBwb2ludGVyIGV2ZW50c1xuaW4gdGhlIG5laWdoYm9yaG9vZCBvZiB0aGUgLmNvbm5lY3Rpb24gPHBhdGg+LiBUaGlzIGlzIGVzcGVjaWFsbHkgaGFuZHkgaWYgdGhlIC5jb25uZWN0aW9uIDxwYXRoPiBpc1xudmVyeSB0aGluLlxuXG4qL1xuXG4ubWFya2VyLXNvdXJjZSxcbi5tYXJrZXItdGFyZ2V0IHtcbiAgIC8qIFRoaXMgbWFrZXMgdGhlIGFycm93aGVhZHMgcG9pbnQgdG8gdGhlIGJvcmRlciBvZiBvYmplY3RzIGV2ZW4gdGhvdWdoIHRoZSB0cmFuc2Zvcm06IHNjYWxlKCkgaXMgYXBwbGllZCBvbiB0aGVtLiAqL1xuICAgdmVjdG9yLWVmZmVjdDogbm9uLXNjYWxpbmctc3Ryb2tlO1xufVxuXG4vKiBQYXBlciAqL1xuLmpvaW50LXBhcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4vKiBQYXBlciAqL1xuXG4vKiAgSGlnaGxpZ2h0aW5nICAqL1xuLmpvaW50LWhpZ2hsaWdodC1vcGFjaXR5IHtcbiAgICBvcGFjaXR5OiAwLjM7XG59XG4vKiAgSGlnaGxpZ2h0aW5nICAqL1xuXG4vKlxuXG5WZXJ0ZXggbWFya2VycyBhcmUgYDxjaXJjbGU+YCBlbGVtZW50cyB0aGF0IGFwcGVhciBhdCBjb25uZWN0aW9uIHZlcnRleCBwb3NpdGlvbnMuXG5cbiovXG5cbi5qb2ludC1saW5rIC5jb25uZWN0aW9uLXdyYXAsXG4uam9pbnQtbGluayAuY29ubmVjdGlvbiB7XG4gICBmaWxsOiBub25lO1xufVxuXG4vKiA8Zz4gZWxlbWVudCB3cmFwcGluZyAubWFya2VyLXZlcnRleC1ncm91cC4gKi9cbi5tYXJrZXItdmVydGljZXMge1xuICAgb3BhY2l0eTogMDtcbiAgIGN1cnNvcjogbW92ZTtcbn1cbi5tYXJrZXItYXJyb3doZWFkcyB7XG4gICBvcGFjaXR5OiAwO1xuICAgY3Vyc29yOiBtb3ZlO1xuICAgY3Vyc29yOiAtd2Via2l0LWdyYWI7XG4gICBjdXJzb3I6IC1tb3otZ3JhYjtcbi8qICAgZGlzcGxheTogbm9uZTsgICAqLyAgIC8qIHNldHRpbmcgYGRpc3BsYXk6IG5vbmVgIG9uIC5tYXJrZXItYXJyb3doZWFkcyBlZmZlY3RpdmVsbHkgc3dpdGNoZXMgb2YgbGlua3MgcmVjb25uZWN0aW5nICovXG59XG4ubGluay10b29scyB7XG4gICBvcGFjaXR5OiAwO1xuICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmxpbmstdG9vbHMgLnRvb2wtb3B0aW9ucyB7XG4gICBkaXNwbGF5OiBub25lOyAgICAgICAvKiBieSBkZWZhdWx0LCB3ZSBkb24ndCBkaXNwbGF5IGxpbmsgb3B0aW9ucyB0b29sICovXG59XG4uam9pbnQtbGluazpob3ZlciAubWFya2VyLXZlcnRpY2VzLFxuLmpvaW50LWxpbms6aG92ZXIgLm1hcmtlci1hcnJvd2hlYWRzLFxuLmpvaW50LWxpbms6aG92ZXIgLmxpbmstdG9vbHMge1xuICAgb3BhY2l0eTogMTtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCB1c2VkIHRvIHJlbW92ZSBhIHZlcnRleCAqL1xuLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbiAgIG9wYWNpdHk6IC4xO1xufVxuXG4ubWFya2VyLXZlcnRleC1ncm91cDpob3ZlciAubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgb3BhY2l0eTogMTtcbn1cblxuLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlLWFyZWEge1xuICAgb3BhY2l0eTogLjE7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubWFya2VyLXZlcnRleC1ncm91cDpob3ZlciAubWFya2VyLXZlcnRleC1yZW1vdmUtYXJlYSB7XG4gICBvcGFjaXR5OiAxO1xufVxuXG4vKlxuRXhhbXBsZSBvZiBjdXN0b20gY2hhbmdlcyAoaW4gcHVyZSBDU1Mgb25seSEpOlxuXG5EbyBub3Qgc2hvdyBtYXJrZXIgdmVydGljZXMgYXQgYWxsOiAgLm1hcmtlci12ZXJ0aWNlcyB7IGRpc3BsYXk6IG5vbmU7IH1cbkRvIG5vdCBhbGxvdyBhZGRpbmcgbmV3IHZlcnRpY2VzOiAuY29ubmVjdGlvbi13cmFwIHsgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiovXG5cbi8qIGZvcmVpZ25PYmplY3QgaW5zaWRlIHRoZSBlbGVtZW50cyAoaS5lIGpvaW50LnNoYXBlcy5iYXNpYy5UZXh0QmxvY2spICovXG4uam9pbnQtZWxlbWVudCAuZm9iaiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5qb2ludC1lbGVtZW50IC5mb2JqIGJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG59XG4uam9pbnQtZWxlbWVudCAuZm9iaiBkaXYge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gICAgcGFkZGluZzogMHB4IDVweCAwcHggNXB4O1xufVxuXG4vKiBQYXBlciAqL1xuLmpvaW50LXBhcGVyLmpvaW50LXRoZW1lLWRhcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODE5MWI7XG59XG4vKiBQYXBlciAqL1xuXG4vKiAgTGlua3MgICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5jb25uZWN0aW9uLXdyYXAge1xuICAgIHN0cm9rZTogIzhGOEZGMztcbiAgICBzdHJva2Utd2lkdGg6IDE1O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAuY29ubmVjdGlvbi13cmFwOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBzdHJva2Utb3BhY2l0eTogLjQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5jb25uZWN0aW9uIHtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubGluay10b29scyAudG9vbC1yZW1vdmUgY2lyY2xlIHtcbiAgICBmaWxsOiAjRjMzNjM2O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubGluay10b29scyAudG9vbC1yZW1vdmUgcGF0aCB7XG4gICAgZmlsbDogd2hpdGU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5saW5rLXRvb2xzIFtldmVudD1cImxpbms6b3B0aW9uc1wiXSBjaXJjbGUge1xuICAgIGZpbGw6IGdyZWVuO1xufVxuLyogPGNpcmNsZT4gZWxlbWVudCBpbnNpZGUgLm1hcmtlci12ZXJ0ZXgtZ3JvdXAgPGc+IGVsZW1lbnQgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci12ZXJ0ZXgge1xuICAgIGZpbGw6ICM1NjUyREI7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItdmVydGV4OmhvdmVyIHtcbiAgICBmaWxsOiAjOEU4Q0UxO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci1hcnJvd2hlYWQge1xuICAgIGZpbGw6ICM1NjUyREI7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItYXJyb3doZWFkOmhvdmVyIHtcbiAgICBmaWxsOiAjOEU4Q0UxO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cbi8qIDxjaXJjbGU+IGVsZW1lbnQgdXNlZCB0byByZW1vdmUgYSB2ZXJ0ZXggKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlLWFyZWEge1xuICAgIGZpbGw6IGdyZWVuO1xuICAgIHN0cm9rZTogZGFya2dyZWVuO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgIGZpbGw6IHdoaXRlO1xuICAgIHN0cm9rZTogd2hpdGU7XG59XG4vKiAgTGlua3MgICovXG4vKiBQYXBlciAqL1xuLmpvaW50LXBhcGVyLmpvaW50LXRoZW1lLWRlZmF1bHQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG4vKiBQYXBlciAqL1xuXG4vKiAgTGlua3MgICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5jb25uZWN0aW9uLXdyYXAge1xuICAgIHN0cm9rZTogIzAwMDAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDE1O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAuY29ubmVjdGlvbi13cmFwOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBzdHJva2Utb3BhY2l0eTogLjQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5jb25uZWN0aW9uIHtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubGluay10b29scyAudG9vbC1yZW1vdmUgY2lyY2xlIHtcbiAgICBmaWxsOiAjRkYwMDAwO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubGluay10b29scyAudG9vbC1yZW1vdmUgcGF0aCB7XG4gICAgZmlsbDogI0ZGRkZGRjtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCBpbnNpZGUgLm1hcmtlci12ZXJ0ZXgtZ3JvdXAgPGc+IGVsZW1lbnQgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLm1hcmtlci12ZXJ0ZXgge1xuICAgIGZpbGw6ICMxQUJDOUM7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5tYXJrZXItdmVydGV4OmhvdmVyIHtcbiAgICBmaWxsOiAjMzQ0OTVFO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubWFya2VyLWFycm93aGVhZCB7XG4gICAgZmlsbDogIzFBQkM5Qztcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLm1hcmtlci1hcnJvd2hlYWQ6aG92ZXIge1xuICAgIGZpbGw6ICNGMzlDMTI7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IHVzZWQgdG8gcmVtb3ZlIGEgdmVydGV4ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICAgZmlsbDogI0ZGRkZGRjtcbn1cbi8qICBMaW5rcyAgKi9cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvLWxpZ2h0JztcbiAgICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBSGhnQUJNQUFBQUEzSHdBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBQnFBQUFBQndBQUFBY2FMZTlLRWRFUlVZQUFBSEVBQUFBSGdBQUFDQUJGZ0FFUjFCUFV3QUFBZVFBQUFvMUFBQVJ3dEtYMEJKSFUxVkNBQUFNSEFBQUFDd0FBQUF3dVArNC9rOVRMeklBQUF4SUFBQUFXUUFBQUdEWDBuZXJZMjFoY0FBQURLUUFBQUdKQUFBQjRoY0pkV0pqZG5RZ0FBQU9NQUFBQURvQUFBQTZEdm9JdG1ad1oyMEFBQTVzQUFBQnNRQUFBbVZUdEMrbloyRnpjQUFBRUNBQUFBQUlBQUFBQ0FBQUFCQm5iSGxtQUFBUUtBQUFYTW9BQUszRXNFL0FzV2hsWVdRQUFHejBBQUFBTWdBQUFEWU9DQ0hJYUdobFlRQUFiU2dBQUFBZ0FBQUFKQTloQ0JOb2JYUjRBQUJ0U0FBQUFrRUFBQU9rbjlaaDZXeHZZMkVBQUcrTUFBQUJ5QUFBQWRUa3ZnMTRiV0Y0Y0FBQWNWUUFBQUFnQUFBQUlBSUdBZXR1WVcxbEFBQnhkQUFBQkRBQUFBeEdZcUZpWVhCdmMzUUFBSFdrQUFBQjd3QUFBdHBURm9JTmNISmxjQUFBZDVRQUFBREJBQUFCT1VWbkNYaDNaV0ptQUFCNFdBQUFBQVlBQUFBR3VjbFhLUUFBQUFFQUFBQUF6RDJpendBQUFBREpLckFRQUFBQUFOTlBha2g0Mm1OZ1pHQmc0QU5pQ1FZUVlHSmdCTUlYUU13QzVqRUFBQTVDQVJzQUFIamFmZGRyakZUbEhjZnhQK0tDQWwxWGJLTGhSV25xVW1wcDFZYmE0R1hWMWt0WEsyMWRieTBlclp1bWlXbUZaTHVOTWFRUUVsZ1dKMDBtdE54UlFNWExjbnR6M0dVSWpzWWNOaUVtRTVQTmhvRmwyR1Fnekt2SnZPbkxKazQvTTREaUd6TDU3di9zekp6bi9QNi81M2VlODB6TWlJZzVjWGM4R05jOSt2aFR6MGJuYS8zL1dCVUw0bnJ2UjdNWnJjK3ZQcDd4dDcvOGZWWGMwRHBxYzMxYzE2NDN4SXl1L2UxdnZocFRNVFdqSGxQWC9YWG1iWGkzbzd0amJOWS9PN3BudlR2N2xkbTdidmg5Ui9lTkt6cTY1OFNjMzg1K1plYTdjOSthdld2ZW5zN2JadFE3eGpxL3VPbDZyK2ZWTFoxZlhQNXZ1cXVyNjk4M2JlbnFhbzA1ODdhTzd0YmY5dEhZTjYvVytOKzhYS2Y5bXJlbm83czF6cFZYZTd6MjYrcmpTNjk1ZTJiZTFocTNwZnZTMzliLzdYY2VqVG5OdnVocWRzVE56WjZZcjk3aS8rN21sN0ZJWGF3dXdWTGNnL3RpV2R5UEhpNCtyRDdXL0R4KzNSeUpYanlCWi9BY1ZobHJOZFppdlhFMllBZ2JNWXhOZUJNNVkyN0ZObXpIRHV6RWJ1eHpqZmVNdngvdjR3TjhpSTh3Z2dPdWN4Q0hjQmhIa0dJVVl6aUtBbzdoT0RKam5sREhqWHVLcmpLbTlIc08wNDZyT0krRnVpL3J2S3p6c3M3TE9pL3JzcWJMbWk1cnVxenBza1o5bWZveTlXWHF5OVNYcVM5VFg2YXVSbDJOdWhwMU5lcHExTldvcTFGWG82NUdYWTI2R25VMTZzclUxV0pKektKbkxqcmJjekpJelRnMTQ5U01Vek5Pelhnc2EvYkdmYmkvbVkrZTV1dnhzT01WelhYeFlyTVVMNmtybmJ2S3VZUHFhbldOdWxiTk9YY3J0bUU3ZG1BbmRtT2ZjVEoxWEQzbHUyV2NkdDRabkVXbDdkTWdud2I1TkJnWC9mOERhbnNrcUVKeEQ4VTlralFvUllOU1ZKR2d5bVdsV3lpdHhRUE5rOVFtOFdCemt1SXRWUFpRMkVOZEt5VVZLYWxJU1VWS0tsSlNrWktLbEZRb1M2aEtxT21ocGpWcmd4VDFVTlJqOWxwS2V1S1ZtQ1dQYzVwN1k2N2FpYTdtSS96YlFzMGoxT3lON3pWSFl5RnVsOTd1NWdSMWUvazZ3ZGVKdUxQNUdtOG5lRHNoMDV2TjltYXp2ZGxzYjQ0bm05WDRUZk9OZU5xNWZYakdlOCtxejZuUHF5ODB0OGNmcVB5ajR4WE42VWdjdjZTKzNDekVTanBXMFRDb3Z1SHoxWTdYT0Y2cnJuZjlEUmpDUmd4akU5NUVqbzZ0MklidDJJR2QySTMzWEhjLzNzY0grQkFmWVFRSGNCQ0hjQmhIa09KajF4NVZ4M0FVQlJ6RGNYemlzeUkreFdmSVhPT0U5MC9SV01acGVzOWdpbzluVlhQSzlVZGtZWXNzYkpHRkxYSFJlOTJ5OEtVWnFNckNsL0VkZWU1VXV5UnFQbTd4L2lJc2F3N0p3NFFzVkdYaGlDeWtzakFSdi9UOWZxeDB6aURXWUwzdmJNQVFObUlZbS9BbTlqbDNIS2Q5N3d5bVhPT3NXc0U1eHhmVm4xSFVSMDBmSlgyeVVJbmJ2ZHZ0N01WWWdqdTlscXIzdEpYbDRsNW4zc2YvKzVzWmRRT1U3VFduQmZOcExvMnh5aGlENm1wMWpicFd6VGwzSzdaaE8zWmdKM2JqTGVPOWpUM1kyNzdIQnZoYnBYeUF2eFgrVm5UUXA0TSs2dnVvNytOcmhhOFZ2bFowMFJjM1V0N3Z5djJ1MnUrSy9jN3NkMmEvYi9iN1pyOXY5c2Rkbk05eHU1ZmJ2ZHpPeVhzbTc1bThMK1I4VHNidmtPdFVybE81VHVVNWsrZE1ubE41enVRNWxlZE1qak5aemJpZjQzNk8rem51NTdpZjQzNk8rems1UytVc2xiTlV6bEk1UytVc2xiTk16bEk1UytVc2xiTlV6bEk1UytVc2s3Tk16akk1eTJRc05XdTlacXZYL1RxSE8xMVdyL200eGZFaXJNY0dER0VqaHJFSmIyTEs5ODdocDl3NSthMDV2VEtmdjI1ZTBPc0Z2VjV3RDAvbzg0SWVMN2hYQytaMDNGbzVibDdIT1h1U3N5YzVlL0thYzNuQXVRZHhDSWR4QkNsR01ZYWpLT0FZanFNMXp5ZlVVOFl0WXhwVm5NZXZZdFpYRXpFWG5laUtlM1N4TU9hcnQrdXBXNjRYWXdtVzRoNHNhNzRnbVgyUyticGtMcFBNUGgxTzYzQmFoOU82bTliZHRNN2UwZGtSbmIwVEs0Mjl5cmlENm1wMWpicFd6Zmw4SzdaaE8zWmdKM1pqbjdFUEdPY2dEdUV3amlERktNWndGQVVjdzNGa3pqdWhqanYzbFBITE9PMWFaekNscDdOcUJlY2NUL3VzaXZPNDZMMDd6UHl3bWIvVnpOOXE1b2ZOL0xDczlsbUhTenFzNnJDcXc2b09xenFzU3NXd1ZBeEx4YkJVREV2RnNGUU1TOFd3dGJGa2JTeFpHMHZXeHBLMXNXUnRMRmtiUzdxcTZxcXFxNnF1cXJxcTZxcXFxNnF1cXJxcTZxcXFxNnF1V25OWGxiSmJwWXd1Y3pKcFRpYk55YVE1bVRRbmsrWmt3b3BSNWVja1B5ZjVPY25QU1g1TzhuT1NuNU5XZ0tvVm9Hb0ZxRm9CcXJ5YWpHZSt2bGR2L3RiOW1yaGZFMWNhYXQrdmk5VWx1TE81MUJXSFhIRW9IdnZxZnp6cDVrazNUN285bCs1MUh5ZnU0NFEvM2U3amhFZmQ3dVBFYytraDkzSWlFYjBTTWVDNTlHZXA2UFZjR3BLS1h2ZDRJaFc5RXRGN3pYczk1L3Ric1EzYnNRTTdzUnZ2MGJNZjcrTURmSWlQTUlJRGRCekVJUnpHRWFUNDJIVkgxVEVjUlFISGNCeWYrS3lJVC9FWk10YzQ0ZjFUTkpaeFpiMllSaFhuOGZEbEozL3hxaWQvbnJNMXp1WTVXN1FDL3BDalJVN3VsNnBSRHRZNVdPZGduWU83T1ZmbldwMWpaeTQvc1d2dEovWnE5ZExUdXNhaElvZUtIQ3B5cU1paElvZUtIQ3BLM2FqVWpVcmRxTlNOU3QybzFJMUszU2dYNmx5b2M2SE9oVG9YNmx5b2M2RE9nVG9INmh5b2M2RE9nYnB1NjdxdDZiWjIxWk0zZjlXVE42LzdtdTVydXErMW43d3ZjMkFCQndZNHNJQURDemp3T2djU0Ryek9nUUhaeXN0V3Z1MUVhM1ZaNUwwcks4eWxmRjFhWlM3dGZSTHVKTnhKdVBPQ2ZPWGxLOCtsUkw3eW5FcmtLOCt0ZjhsWFhyNTJ5ZGVJZksyVHIxMGNYTURCaElNTFpDelB4WVNMQzdpWWNIR0Fpd05jSE9EaUFCY0h1RGpBeFlGcnJrclgzdk1rSEU0NG5IQTQ0WERDNFVUTzhseE91Snh3T2VGeXd1V0V5NG1jNWVVc0wyZDVPY3RmWHNFU3ppZWN0OU9rOXd5bStIZFdyZUNjNDJtZlZYRWVGNzMzRXk2bmwxMHRjTFRBMFFJM0M5d3NjTExFeVJJblM5d3JjYTdFdFRMSEpqalZXcHRUN3FTY1NYVmYwSDFCOXdYZEYzUmYwSDFCOXdVZGxuUlkwbUZKaHlVZGxuUlkwbDFKZHlYZGxYUlgwbDFKZHlYZEZIUlQwazJxbTVUcWxPcVU2bFE2WnJYdUZIUmloUVM5MlB3dk5UWDdtNks5VGRHK3BtaFBVclFuS2RxVEZPMUppdlloeGZpdU0wZWNPV0p2VjNQMmlPZlJacytqdW1mUlp2dTNtdEVhVXBBWnJXRXYxeHB4eElnalJod3g0b2dSUjR3NFlzUVJJNDdFVFhLN1hHYVhVN1c4bmRsV1hsYzZIc1Fhbk1ZWlhKcUg1ZVpoZVhzZUxxcnorWnZ4TitOdmF4ZlQyc0Zrdk1wNGxmRXE0MVhHcTR4WHJWMUp4cXVNVnhtdk1sNWx2R3J0UXJLWTU5cnJYSHRkKzVsenJXZklsTytjdy9mZGJZV3Z6N3JGOGFMMmZEZm9hZERUb0tkQlQwUGlDeEpma1BpQ3hCY2t2aUR4QllsdnpXdUQxZ2F0RFZvYnREWm9iZERhb0xWQmE0UFdCcTBOV2h1ME5yNVdjUDNYdTZVck82RVo4U28vNStxbTA0N2ladjU0YXNXaVdCdy9paC9iNTk0VmQ4ZlMrTGxuOEMrc0dmZjZMWDkvUE9DMzBJUHhrRFgwc1hnOG5vZ240Nm40WFR3ZGZaNVJ6OGJ6c1NKZWpDUmVpaitabFZVeFlGNVdtNWUxc1Q0MnhGQnNERS9leU1WL1ltdHNpKzJ4STNiR1cvRjI3SW05ZnIyL0UrL0YvbmcvUG9nUDQ2UHdXejBPeGVFNEVoL0hhSXpGMFNqRXNUZ2VuOGNKdjhoUFJkbGNuN0ZiT0d1T3o4VjBWT044WFB3L2ZwcHdpZ0FBQUhqYVkyQmtZR0RnWXRCaDBHTmdjbkh6Q1dIZ3kwa3N5V09RWUdBQmlqUDgvdzhrRUN3Z0FBQ2V5Z2RyZU5wallHWVJadFJoWUdWZ1laM0Zhc3pBd0NnUG9aa3ZNcmd4TVhBd00vRXpNekV4c1RBek1UY3dNS3gzWUVqd1lvQ0Nrc29BSHlERis1dUpyZkJmSVFNRHV3YmpVZ1dnQVNBNTV0K3NLNEdVQWdNVEFCdkNETUlBQUFCNDJtTmdZR0JtZ0dBWkJrWUdFTGdENURHQytTd01CNEMwRG9NQ2tNVURaUEV5MURIOFp3eG1yR0E2eG5SSGdVdEJSRUZLUVU1QlNVRk5RVi9CU2lGZVlZMmlrdXFmMzB6Ly80UE40UVhxVzhBWUJGWE5vQ0NnSUtFZ0ExVnRDVmZOQ0ZUTi9QL3IveWYvRC84di9PLzdqK0h2NndjbkhoeCtjT0RCL2dkN0h1eDhzUEhCaWdjdER5enVINzcxaXZVWjFJVkVBMFkyaU5mQWJDWWd3WVN1Z0lHQmhaV05uWU9UaTV1SGw0OWZRRkJJV0VSVVRGeENVa3BhUmxaT1hrRlJTVmxGVlUxZFExTkxXMGRYVDkvQTBNall4TlRNM01MU3l0ckcxczdld2RISjJjWFZ6ZDNEMDh2Yng5ZlBQeUF3S0Rna05DdzhJaklxT2lZMkxqNGhNWW1odmFPclo4ck0rVXNXTDEyK2JNV3FOYXZYcnR1d2Z1T21MZHUyYnQrNVkrK2VmZnNaaWxQVHN1NVZMaXJNZVZxZXpkQTVtNkdFZ1NHakF1eTYzRnFHbGJ1YlV2SkI3THk2KzhuTmJUTU9IN2wyL2ZhZEd6ZDNNUnc2eXZEazRhUG5MeGlxYnQxbGFPMXQ2ZXVlTUhGUy83VHBERlBuenB2RGNPeDRFVkJUTlJBREFFWFlpbzhBQUFBQUFBUDdCYWtBVndBK0FFTUFTUUJOQUZFQVV3QmJBRjhBdEFCaEFFZ0FUUUJWQUZzQVlRQm9BR3dBdFFCUEFFQUFaUUJaQURzQVl3VVJBQUI0MmwxUnUwNWJRUkRkRFE4RGdjVFlJRG5hRkxPWmtNWjdvUVVKeE5XTlltUTdoZVVJYVRkeWtZdHhBUjlBZ1VRTjJxOFpvS0drU0pzR0lSZElmRUkrSVJJemE0aWlORHM3czNQT21UTkx5cEdxZCtscnoxUG5KSkRDM1FiTk52MU9TTFd6QVBlazYrdU5qTFNEQjFwc1p2VEtkZnYrQ3dhYjBaUTdhZ0RsUFc4cER4bE5PNEZhdEtmKzBmd0todnY4SC9NN0dMUTAwL1RVT2ducElRVG1tM0ZMZys4WnpickxEL3FDMWVGaU1EQ2ttS2JpTGorbVV2NjNOT2RxeTdDMWtkRzhnek1SK2NrMFFGTnJiUVNhL3RRaDFmTnhGRXVReTZheE5waVlzdjRrRThHRnlYUlZVN1hNK05yQlhiS3o2R0NES3MyQkI5akRWbmtNSGc0UEpoVFN0eVRLTEEwUjltS3J4QWdSa3h3S09lWGN5ZjZrUVBsSUVzYThTVW83NDRhMUJzYVIxOENnTmsrei96eWJUVzF2SGNMNFdSekJkNzhaU3pyNHlJYmFHQkZpTzJJcGdBbEVRa1pWK1lZYXo3MHNCdVJTKzg5QWxJRGw4WTkvblFpMDd0aEVQSmUxZFE0eFZnaDZmdHZjOHN1S3UxYTV6b3RDZDIrcWFxalNLYzM3WHM2K3h3T2VIZ3ZEUVdQQm04Lzcva3FCK2p3c3JqUm9EZ1JEZWpkNi82SzE2b2lydkJjK3NpZlR2N0ZhQUFBQUFBRUFBZi8vQUE5NDJzUjlCMkFiMTVIMnZsMHNPaGE3NkFCSmdDZ0VTSUlFU0lBRUNQWXFpazJrU0ZFaXFTNVJuYXEyYk1uZGxudk5KVTdjMjduS2pwTmRrTzdsWlB0SzJ1WFNMT2Z1a2x4eXlkMGYzTzljN0RnWFJ4SUovZlBlQWlSRlN5NzNOOWtrdG9EWWVUUHpacjZaTjI5QTBWUW5SZEdUN0NqRlVDb3FJaUVxMnBoV0tkamZ4U1FsKzdQR05FUERJU1V4K0RLTEw2ZFZ5c0xaeGpUQzErT0NWeWp4Q3Q1T3VqZ2JRUGRtZDdLanA1L3JWUHc5QlI5SnZYLzJRM1NjUFU0SmxJZGFRYVdORkJXV1dIMG1iYWFwTUJLTG95SjFVdEphTS9objJxcWwxR0hKWk1pSXBxaFlFSmVzY09TS1NWNFVscXdtd1NRWjJWU0trc3lzWUJKZHFhcnFaRTB6SFkrNWFhdUZvLzIrb0ZtSUMzQ2s4a2VZOXptbnoycjJ1NHhHbDk5Y21vaHRwQmtsMHdFLzlHRCtxc1huNGhKTUhkMDc5MkprZUhSREtyVmhkQmpUK3pMek9wMEFlcldVbGFxaVlJQlVXTlRIWjFSNlNxTUlpNllZRW0yRVpvYlBpQXd2NllBMmpzOUlkaFNtcXFveENTb09BVEdoa29YRGwwYzFOR2ZpZUJwNWNrZU00aW9VenI3N2tHQ3hDQS9OSHhGK2pWR1VZalU4UDBIVm95RXFIUU4raVNYeHRCSG9rSGh6UEQ1VG80Z1pEZUZwMXBPc0M5ampVbzB5TXgyb3FJd0g3TEVacllyY1VycFQ5ZmlXRm03cEJKTVRiaUd4SVNxV25aUktqSmwwU1prMlBOMWE0dFBBQi9PU0dRWmdNMmFrUmhRV0U2NVhteC83d3c4cGExZ3J4aUtjcUQ4aFJkU25XSkUvOFdyemJYK1lJdGROY0IzK0xJeXZtM2pKcVQ0bHh2aHBOcVkzdzRQSmJ4MytMVWI0YVNIQ20vRXpwdDBsVHJqdUliOEQrTGNZNXFjcndpYjViWlhrYmZBaDhmd2ZKc2tWZUU4ZGZzOTBLdi9PZW55ZG9kTDZjQVQrb1ZZcnE5VHBlUmloMnhNSVYxUkdZdkZrWGFvK2NyNS9ZcXNMeTZjUnRhQzQyWnRNMk9QbVp0U0FHSzg1SHJOYVZFeGNwUXo1R1RoV2VSbVFXVzFOMHV4bE9CUkdaamdyOFpxOVl6VHpMNnV5YzBwRitUK05LNXltOEdaVXZUbGNqTWIvWGNtV3ZiSHFmM2pZN0g5dEt1Zk1hQ3o3RDJPc1V3aHZlbzBUVUFKVnI4citBL29OcTlYeTZLNlFENkdIelpac0Evb2JqMXFSM1E3bjJZT3V5bXk5SUtnVTZMN3NWcnNKL2EyaEh0MUZ3U3g4TUh0SzRWY2VveHFvWmRSSzZtK3B0QlZySWt5S2RrMUdESUpBaDZNaWYxSnFGREppSXkvVmdSUnJPQkIzVFowNlBMT1NvNHBCV1VNeHNZYVgrdUZXUk1oSUk3S0FXLzVqOWhrc1NJVVlBa202VGtodDdDblJkb0tkdHJiWmdNc2hmcm9nNUFLbUIvRnZzWTJmYnNmWEdXcmE1Z3ExRWJhL2FMVzVDb0p0N1F1Y2xScEJDS0l5SmVucTRGV2JrbGJXd0d0M1N1d1hSSDlLakpna3J4dG1ibFYxQzByQWhGWFl6UkdtRmladkM4SXlVTG1SWGFYMCt5SjBpSEd6ZURJYkVlWjhNb0xNRmpkdE4zTU1hb2Izdy8wSEMvU0NwakJVMnoyUjhpNjdma2RyN2M1N3RtaVEwVmlpMy9GZ20xM0w2OHRhTjNhNHE3YU05OWNWTis1L2ZLY2VHUTBsK21QdmpGYXUySjRxV25IeGloQktEbCt6cHJKbTlmN201MHVOTmw5cHdNWFF0OWxxUjQ2dTd6NjJzNFg1T21mK3ZtcWcxUzk0eTRMczNFdEdYMW50OGcxTll3OWUwczMrMUdEK3MzS1MrWDNMMnRhSWhhNVZWQTlzT2ZQWGJOM2FJMTJkNjlzcnpCVEZVdU5uZjg5K20zMkZNbE1oc0IyZE1KZS9US1ZMWVFhblc3SFo2MlV6NlFxUVlwckZrOW5QWm1aV0pWcFpRMWhhQllkT0l6bDBzaGtramhNTFl6Rm1SQXN2dVVGK1dqalU4bEkxSEhiQllSY3ZEY0poQTB6YkNYaDFXd1JUMnNpV3BsSXBhYkFMamhPdGxTbHNLVmYxZ3RGc3FJYkxmaWNjYWFrVVdFM3pPVll6UWllQngvRllNNDBaN1BkeHRKa0lCU245NkRQZU9CNGRQdERTc24ra3FuclZ2dWFXQThQUndVRFRjQ1F5MGhJSXRJeEVJc05OZ1RLRlVXbml1czc4M21DalYxYXRQTkFLNzQ1V2oreHZham00c21wRm9IazRHaGxwQ2dTYTROMGp6UUhGd01RdGF5T1J0YmRNak4rTVgyOGVIenpRN2ZOMUh4Z2NQTkRqOC9VY09EUEozcVBXbnQ1bFFtTVR0NnlMUk5iaGQwNUVJaFB3enYzTHZkN2wrd2NIRHkzMytaWWZBanU2OSt3SDdHR1FSU3MxVEYxSHBlTllDbzFZQ3N0VW1iUUJDOEFOQjI0RDJFTEtiZE9BTHhvaFhHOERuOVBHUzJyZ3F4L21saDlNSEJ5YXdOcUR0U3ZIY3dtcy9TcDRkZm9GMDR5QmJWeTJJbUJQaVNaQjdFdUo1YVowcURwSmVPOWVCcmNwZFhVUzM1YTVEZ3BkbStPcFhZazFQaGlLTUppVFZvdk5EbHhQWXNaelNJV2RSaFJ4ekdLbUoxRXd4REY3YTlkZDNkdlRVN1A1eHBHdXk5WW1hVTd2TUtnNVJ1VnZIRzlzMnJhOGRQVmE5SzFJVWszcjlTbTZxd1ZWcnpVNStCOUY5bDM3bFpVRFg3MWsrZGJHellmcmwxOTlZSDBvVzY1a08vZjJsNkdMZW0vY1AxWTRmUC9ZOHNzbTR0R2hYU2xHd1JwMEJWM040V0RYaHJwVjk0OWxtM29mN1RNWU4zMXZmZlpkdGZIdmF5ZmFBdkd0ZjdGbDhQQmd5TnN3V0kzK25sVVZEVzArQ0s2TFF0aDNJZ1B4blg3WmMrYmNKaEoxZVo5SmZ2UkxuZVc4aDF6a0YrSHp2cEg5a0ViS0Fzb0pNd3FKTHZJWkJ2ajdBdm52TVV2dE5yRGVTdUNnQ1I4WlVZVDVocnR0YWpCc1VGMTJ4UldYcTdqdzRGU2JtNzdoeUwvKzh0ZEhDMVJHcmU1dnNtdi8vZCt5YS85YXB6V3FYVWYvOVplL2d1ZE1aajlFTDVIbkpPVG5hRStLVkd6R0lKdFJBeSt4c2dyZ0Iwc0dMY3d3V20wSEtZdXNJRExZcnRscmtnbFRiUTBkQ29acVdwQ2J3Vk5HRlFwT3FpKy8vSXFqS3NTRlYweTFGeFcxVDYwSWM3L1E2djRhUGZsdi80NmUvQnVkbGxNWEhQMzFMLy8xeUpGZi9mTFhSMXdxek1Pcm1Idm9OSHVLcXFXU2xGZ1NuZEhvS1JYbVlDSXFscHlVMUxGWWJDWkE2SkswOWxoTVNnSkZnUkxCTk0xeXhXV2dhWmd2U1R0WTFBaHFRbkdyUmFscUJwZG5CejZEbWZVZ1ZTaUNRbTVVaFB5MU5Za2toNHdvQkZvSGlobTZxdUF0M3NLcFZiV3NXbS9sMzNLZE1CYVlUQzcrTGVjN1JxdEJpUy9yYk1ZVHJyYzRsOW5zNHRpQnlFR3QyV1IybS83NW4weHVzMkRSSElnYzBHaHBScU0rRUQyb0VRUlRnZkRQL3lRVUNFWkJzNy95Z0ZyRE1GbzEwWkVEMUN1S2FzVmZVanFZbHlJVkZWVnhDU2t6SWh0TFV3ampFa3FyQ2FjUmhROFJnNmVsbm9pRGpra2FzSHlLV0ZxanhmYzBLbmliVm9NUHRaUUdwQ0tyUkswWGxNcHI5UXArNFFCNmVRaTlrdTBlb20vcFE5L1B4dnF5VmVnSHNwNGV6TTZoSVBVTnFvQ0tVMmtuTmdxTUhzeHVJVll3a1FQSUMzZ1UveFFCYzVVVXVESWJUR2pHU1h3Y2hwM2d4R3c1RVdNMk5qTkpvc1lIcTBzcnFteGxLYjlSclZSb2k0dWRDcVZSRTZ4YUU0ZzNWcGVQamF6d0d0VmFWcXZRbGliYlNtZzZMdE95blU3UUhmUXQ0UEY5bUI4UzBtVHdEeElWVVlsQzRSbkdpbWNRMWtCNWZOYnQ2T2QwWW1RRS8rMFVZT3N5R0lkQWxTMUMxdmtEaEZIMEFyckdTSS82QkdpZU9oY3Bud3VQNFJsbno1eDlsdjVIOWtlVW1qSlNJaE5Gb2lZcWFja25xVkFDL0FTTW5LV3ZOSmFXejEydjlncXJsWFR3TkdXeFVBVEw5cDM5VURHZTg0ZWRPUXFkbWt6Ty82bUJ3bExaMHhrV1BKMDVJNVhsZkZvTzc1L2p1MHpOQ0toSEpxdUZ4anlQb0UrNHBiNlZkN3crTmZYR0hjUERkN3k1WityMU8xWk9kaDY2ZDlXcWV3OTE1bC9wZDk5RTloZkh4MS9NWnQ1OE01dkJSOGorcG5UcWtlWExIemtsaWFjZjZlbDU1RFRtN3l4ZzhSRDdUWXFuQUlrck1mVXFGYUQrR0xGdDA1d1NxVUUvaGFpb0J0Tm15S1FaTlZaSGhnWE5WRFA0VUswRXpUVEJhQmcxNkE2Q3NTQU9EblI0Sklqb0tlaHJUUko4clM4MGl4N3ZRMDF6VmpUQVpOL1N3clJSTktGRHB4L3E3MWZjNHc5bGZ3Tm1BRkhYQXoxaDRHZU1XaytsS1V4UHBUYVQ5bUJ1R3JIS3hLT2lTK1ptZVN6dHNtQVNYREE1TUcrMTJFNFlNbElONWpIbUxldkJ2SzBFN1pZVTVXREtqTUkwYTNNRmlMT0tZNjNPWVM3TVV1S3IvS0ZtSnE4NEt2QldjVy9NVm9TdTEyblFmemJ0R3Fpb0hiKzR0ZXVpOFhxOTFrTXI2V3I5d09IN3hrZnV1YWdqdHZwUWM3YmUyeDJnRC9JV3Y4NmhSdi9WZlBqU0s3cUhMdWtQbFBmdWJBb2c5Zm92VDlaVWJmN3kxdUhicjcyc0pWdXRWcHY1RkprYjE1LzlRQkdGOFM2bmJxZlNuWGk4SEdnUDE0a0h4b0Z4U01lSUlta0FQVGs2WTNuMDFCTVZLMDlLcGNDRlVsbW5raUFiZHhML2tkc0IzSER6b3JuNHBDQzFBRHQ2NFhacEpmQ0FVUU1QM01JMEYydnN4R1pVY29Da0pLb0Zyam9Gc1RFbCtrM3A4a3JzMnJHQnhRYkFnOXpzdk43Vm5zdXNLRnJFS3pmS0k2anJRM3E5enNLcWxiWkE3Y0RPam5XM3JZK1ViM25za2cxZjJsUWRYMzFSYzlkRll3MmMycTFpWTRiK3cvZVBqM3psUUd2RndNNm1SeDlmZnVYeHlTdWUzTjJBdGdpczFtZ3hKZXNiSW9WTkd5OUpkbHcwWEwyTWpnenRieDg0Mk9zcjY5blprbU1ueGtiZGgxYlhHOTJ2M1RGKzcvN205ajNYdzN4c0EvMDV5ajRIK215amVxbTBEbU1pNHFZTmdnNFp3aUlUbHd5ZzRHcUlMdXhSVVhjU3dsMUpDOGdIaks4RDY0MHVwOFdDQVE2b2xJZ0VzSXg1WGJZb3d3ak1yaGZjZVJLME9wRnNvMys2Qm1rTXh0K056WTBhQldZenZaZG0wRytaZDJZN0VqcERkaE42MUtCTDBIOFNTaTFFMXZlQ3JCV0FIYUxVUDFIcE1KYTFtc21rN1ZqQVJkck1qTmNVdGdPRjVyamtWV2ZFWXFDd0tpb2FUa3BCRUdKMUxuU2QreU9KYkVRN0JEWVEwVWhGbWxPYzZEN3hxdUZYYjkySWI3QmljVVJ5RjZuaEdpdVpiWERUZWtLMDh0TVdxOWtjZmxYN2xSTy9nbmZwUUQrbVBlNWljemdOdjR0dkxiN1Zyd1JWU0tYaFhmQkN6Vmh0Ym9zbklnZWdHcXZOWHVRMld6ekZpd05OQkZTQjhqaWNlSWFaWU9xbktTWklORWVPZnhhWks2VXFaTWFzODNzWll0am13ZmE5aFZxTElUWTQxYjNxeTN1YUl1dnYybFIvZlUvcklmcTJBdmZjSDlkMFhWWjM4T3NYTnd6ZC9PS094cjJiaGc2V0dqMGw3c1QyZXphdU9MYStCcHZHNjhvdGhka2l3ZGg2OGFNYkxucmg2ZzVySUlydDhXM0E0eXJnY1NGRUoyRFJISmpMUG5VbXJjUTZ3RlU0bERDRk9DVk1vV3BpbG90Z0NoWHhVZ2hFYndZMngrQTFWQVJRUThjNVZHU09WUGp3Mk13NmVWWmdteUY3Qk5XNVkxbHFvVzlidlJYZEp2aFhaNGVLYTIyTlQyOVovL0NoMXU0cnBWM2Juam5TdmpHKzdvYVJzVHNtYTJzMkhSdWF1SE5MRGZyNzBaTTMwQmJIM1BmS2V3UE4zVTBISHQ2NjVhbWpIVzJYUzJNcmI5bWFURzYrY1hEa3h2WHhscTFYeS83MEJ0RHhIcEp2Y2kzU2NNbW9KZjR3NXdTeEh3Vm9STUpNbEVpQ3p0N0EvTFZLT2JkVFhXaHZweDh5bUdiZjBQSHM3cFlLd2FVNS9UUGV5bm9LckR6K2ZJYTZISGhZQmpZcEJKSDVJUFVtbGZZVE93eXhCRW5SOUNrek0yMUp2eEYwdFM0dXRhbmdxVU9FbWJJOUVodXg1ZEhDc1RZcU5jb21DdlBWYmNoTVc5d3hOWVFuY0hGWkZCdHhhYVdzMThMemIxK0oxWmNUV1Y3c09DR2w3S2RFSndUc2RTa25DY3haWjZxRHFPTU02NnlURDBsUXZxd1JaR1gwVnlhSnJKTFl5cm5CaTBwOWJYQmswYWJtb3hLbWRoRW1VTW5vOWJ5UjRaTHp5eU9yTHU1cTJkcnVyOS83d09aTkQreHQ4SGR1YVZsMjBhcm9zaXVlMzduekc1Y3ZtNnpkY3N2SXlNMWJFc3YySG10cXVuNXFXVFE0ZE5tcWtjdUdTc0xEUndZR2pvNkUwZFZEVjY1cjRrMnRZM3VhQjI2YVRLVW1iKzV2bWhwck5SbWIxMTA1dE83dW5jbmt6cnZYOTF3eUdvMk9YdEt6OGVyKzR1TCtxK21kOVh0SFk3SFJxWWJtcWFIS3lxRXByTnNpeUQwR2NuR0Rkd1RkTmxQNU9EdWl6c3k0QW1ZY1hMdFVzcE1FY1hpQXpSNmVRQTF0emkyV2VUQ010cnZNaEYrUkFPaTJscktubHNiTUtnU0dEa2RyQkg5OGdrbGkxK1hISnpjOWRuR3JQZEplbnIzZTZCOURYL2ZVV0J1T2J4cS9aMi96NXRqNFZmMXJidGxRRlY5M1ZkL1FqUnNUQ3VYNlJ3NjN0eDE1ZW52ZGp1MVRUWE0vZHRDcnd3T0I5dVVOVS9kTkRsMHpIbTNjZEtScEVLWjFmTjAxQkZQZERaaHZtUGtGNkxlZnFseEFmYUkzS3RreDVnc1FFSXNOdHpVakZwSVhxZVI4eUU4NDkvUnU0MklnbUR6M2JFbldkR3dKU2lSMEFhYVc2YXFrT25JVzNBcDBHYU15Rm8xRVJkTkppU3FHbU1VQmxHbkppeFFGdmp0TTgra0xTcktHd2JVNFBwR21DSm92QkxxWDBLMDhQd1pucmo2SDVEbnFVekg1RThqSVBLRVlCRDlKbVdzUnNSUktGWVRvT0hCNmdxSDAvTngzZktWaEQ1MHdHdWdIeXRHdEhUcGVrLzFYUWF2aHM3OVVDN29Pekk5bjBYOHlwNWpMU0Q3ZEpTTjdDSE1BMUxOWUNkVlJTVE52aVJEOFBNc016a3JNSVByUHZqN1UydDlQNklCL1JnV1M2VUFFa2lWd3BJYUNUUWhaRWRJYjZXUnhtU1VnekgyN2dLR1FzVU5uVXFGaVhzTnlhdVRtYkIzWlM4cUJEdC9aRCtrZndMd29wZXFwS1NwZGgrVVMwZWN3dUJkajhJYW9hRDRwbVRpYzRaaTJtK0ljVEFXUVVGbFVpbHRKMXFNUVR4S0JwSWdsa3hsUEVtK2tEaWM5NG9MSXA4UkNBT3JFMVhramNJL1Ntb0p5eG1NZUFpbU15QjhDRzZQSXp4R0F1MHZFNnl2c0d0bFN2L3lxVFhWVnZhdjdhbWg5QjF2ZE05cFRIZTdkVk51NXBUT2tNcXBmNUZ6ZVJaRUtHeTZNbDlyRFF4Y3RYM0ZndEsydTN2Zk1OOW55bHNhbWdjbXU1Sm9tajc4aW9EOHpjQjQ5M1g5V3J5eGxSNmdWMUdicTI1VFlHNVZhMkV5NnBSZkR3NVpPZ0lmR3FHaU5TMkZGUmx3VkU5ZEhKUStiRVd0QmJCaGFiaUcyb3g1WVZjOUxMbURISU1Ta2d6ekcrRE5CT1ZzUTVLVXF6Qzh1STIyVjdYZFQ1dmZma3UzM09DOU9uSkQ4eWxPaTd3UTE3Zk9QVHhDN1BYOUVzSU5wVURDOXlGbzl0UzI5NjRHUlVsVVFUNC8yYmpJOWpDMGtzU3F0aDJueWdwWnltYXJxYytrbFV5S3dpSjhoMlRqSmh0MW1aempRNG5Qc0ZNSXBFNXNpSGt0Z01PdEJTb1hmRndqU0pmbDBrem1Dc0tUMkgva2hzajl5eSt4YkZ6ZnN2RzF3WWkyZCtvdFZxVlYxQmUzWHZIWkpZbE53dlY1dkQxYTc2dmNNVjIxOTd0ZlgzRDc3eG9HTC93NXB2bnJ2bWUwcUhhZmtMOHErLzh6eDdNLys4VXIwbnFXc3NheGtzS2ZGTnV5czhhKzdaMWM5SFhzT2xieDMyZWp4MDA4ZWVQbjZubzNqRzBkTHV6WWsxM3p6OWpHVEtmdFF0TTlkV2VmVk5SMzZ5OGw3Ly9WclBWUHZaRDk2N0lYcys2OXNYTmJPY3NIKzRhbnZvNG8xWmQxeHQ3TjEzeWhxVXFuN2puNE55eGNNSXVzQy8yOEFqRnNoUjBtQWEyV1lxK0VvZ0xtU0JzOUFleFJqMmx4RVpzWkJENHFUWEJTRDgvNStzeGZCVkFNb1k2Ulg3cUpYcnVUTTdITnpkYzhxTE1ZUDZWdXlQMVZ4YWhXbllvK2ZYbU0wb0NlemEzVUN6ZEUvRXlxZFRwd0p4ampoUGZCSFh3TTZMSlNIS3FmMjVPSTFLOFF2QkkrVVE5QlM3Q0hrRkdOeXdrU3pyR2FNYlFHVGtxU2owWnlaVmhtZEFBcUNjRDBZbFZRUUhGZkFqYUFWYU5hRE9uandnVEVsRmd0d0twYWJSQlVlaU9CZEVucVVlR01KSW5lSU40a0tCUDNlOTlCalY3eHdhWDFwLzk3dTUxNXB2L0xGaTdOZlJsTi85VTdObGkrdHpYNEZOVXpldFRiODZsdlp2Mk9QVjIrOGRVMXF6MFM3eWZYTnYxajNsUjJKVlU5K3RXdGZmOWxBZk5XZXVpL2ZRK3psMVdjL1lDTWtMbzFUNlFnZXAxdWJzekFXN2J6TGRWcUluNlVraTFzd3pXZ3BRN0RzWE4yVlZ3RVVja1kwcDRjWVNYcmtYQ2lpcjk3eE9tSWZIangyY0Z0VnNkcWtLYXBvWG4ydysvcGZQREl4L3NCUHJsaHgyZmF4TUt0VmFsVmxsYnV2dW1maW50TXprL1M3VHlMK3IvZllLOXJERWIyMU9GaHNYWHY4dzYvZS8rSFQ0NkNPSVlWU1ZWRTFrQ3phOVRZeUVkc0FNbU1mQUpucEtTZFZsNU9ZZ2NsSnpNbGs1bk9RSUE2RHZIU21zc2pwU01tSlk2SjU5dWNURkNYZS9KVHp2a2Z6RDJSZjNMYnR4ZXdEMlFuMDFMR2Y0bVRFVDQ5bEo5amprMjlrLy9qME05ay92akU1dXZxSjM5MTM3KytlV0UzNGluV29BZWpSVWQwNWFqUjVhaFJNWm9aVkUvMWhNV0Y2UXBqR0xLZklTUHBNb3dOclJzZmtYRmt1UVNZbngrU2Y5NWpKT1NWOTJkeU45R24yK0pxNUYwZm5ubGhEbmZOY0RkVXFQM2ZobVdxV1BGT05uNms5enpNaEtzODlVTGZrZ2ZMajdwNmJ3Zzk3Wk0zY2RtcGVkN2FDN3RSUSs2bDBGZEVkWmtGM1prcktxakJ5SzhHT3FqYXZScUtUbC96QS9EQUU5djR3ZnE2L0ZKNll3RGw3SjFoTGdhM0MyZG13SUJtMDJHcVdnTUtKNFpSa0tTTU95dUE4ajk3TnArSnppb2NEMlNia0ZiRHFnV0c4ZXZzYnlQRDB5TzFIZDFVVmFnU04ydGl3OVd1Nzcvak5vMlBqRC8vTGpYMlg3ZDVZbGYwUEhZKytsRGg4dzMzckhzcG1YOTFPdi9zTUV0N2VaYXRvSzY4MEtwU1YxYUdKWno2ODUvNlBqazhZUFJVRjZDWk9rNXFiQ3phVVduUHFKL09kclNYeWJzbFpMcFZzdVVRMlBzTm9DZWNaMWJ5MGRXWWNtb3M2c2xvQk1pRDJJUzludkNnZngvRzQ4TjV1NXJaZHUyWVBzOGZuMXRGUG5GNUR2empYS3o5dkRuNXRoK2N4bEhlUm5ISHFrV1RyNGRQd0R6di9pWE83c01XVC8zYnQyUS9vNzhMZnVpQU9raU5KSFpNQldrUWxqbkFvaUNvRjhsa0ZaSm5TREo5VGlLZUpEcWRUbVpTb0ZFUUZ6cVdTVlkvNW1GaGV3UWNydkpabUVLM25OSzVBeEwzaXlySEk3cWI5ajAxR05ocTRJcU9HVTZsVjFkc2UyTWw4YTdiK3NsZXZidVVJUFg4QzN2blk1eWdmbGNyeHpwYmpuUUY0NTVWNWg3WElUd2JuSTd5VEFwZ214Z3MwbVZMeUdPWEZGcklFUm5MbWR1SVVVSVFKSStGUE8xZWJpeHdXUGIyY0w3U096dDFrZHB0dFBvRitjTFRBWnBoN1FHZTJlNTNyd1Uxc1pyU2NqaDdudWJsTExLQmJMdXZjY2dDS2gzU0NqcDFibHBNejgzdmdIWnYzVUJLVG05ZElWT1o1bjJhb2ZEcFJVaTBJMWZyZVRsb0VNWWpqOHpxajNBK2Y1Y25QVlZISWpkc1l6OWRYZUFRUzdPQk1wQUE0RHRkVG1DRFlFZFU0STRremdPckNsRHg4d0FySVpnZWhFQTZBK3VEc1pCajVRc2htRmQ1Ynpna2FlcmxScnpSbzZKUmE0SHJXSytiK2hpdmdYY2E1RnhuMnVOSXd5eGQ1ZVMvSC9ONmdQTDFHOGVPQ29sbDlRUUh6WCs2Q001V0w5ZHVVdDY2aUxrZXJCbWcxRTFwTkFzR2NlUDFOQjdSYWlJL0dOQ3FOaTJnTVlsWHg1OGlLQTFuTXM4eTZtSU9iSFFZNlZQb3pEaytoNHNUcE5SYkZmM2dLempSaTIzN1YyUS9aWHkvTlJlZTlsRis3a0l1MkxPU2lMZis3dWVpcnRyMlV2UmVzL3VRa1dQMzc1bDdhdG1mMGdaUFhIbnZ2dmxXcjdudnYyTFVuSHhpbDMzMGFyTVR1WGU5a2Z3OGU0UGR2N3dKcklEeHozd2ZQakkwOTg4Rjk5Mzc0elBqNE14OWkra0cvRmZ1SWI3SlQ3WXV0c2gyUWhNNUE5RnVIazhBT01ndzlkbEV4VVM5N0tSYW1ueE56MG82OUZDdDdxV0lGQVFkZUo1b0hCWDlDbDFCbkVkTjl3MTlkbXYwRDRqYmRzN3Z1KzkvTi9vRTkvaS8vc1BIUmkxdm5YcVlmck4xd1RmL1RNektXdmlyN2x0SURQTVg1cE1GOFBpblAwd3J0UWlMSk1wOUl3anlkVHlTeFZvZVJCTnMrQjVCbFRZa1ZRbHBycEZKTDJZdURiaklMUDR2TkZjT0hlOUhSTVl0UG4vMXUyMTFEbjhueGZXODlmbTBrdTFmSG9SVUZoZWZuZko3M1B3ZmUyOEc2ck0xcHJrSFdYTWtIN0xjNUNQdHRxbm56WWdmMk8yS2lYVllrelA0QVZpUTdhSTlKS3k4Y0NqakpiQ1AxRXFKUHlBc2xGK1BhOG1ZSGhaRVR4UmZrYy9ETW4xTlQ5Mnh5bXRGSGEzbUhMbHNsbEphL09idnB2bDExMzMwNyt6RjcvTzNYUm03WjJhNDF1dWJ1Z1Bpd3oyNmFPMGovUExMNmFQOERYNVh0eGZqWkQ1aDNRV1pOMUQ0cTNZQWxwZ1hibzIwZ0syazRwMTZFUjFVSzEwcUw4TFZTUDE2RWE0NktqcE5TcFNFalZ2S1NFWWFTTUdTa0ZuaXRkSkJWTWRFb3ZLQzFGSlhFR25CY21EQ0p4VEM2VWkxMnQ0N2lCSEczdWRxUG5OeVUrZEJFcFZUNVpDbUM2MVhtd3BmeElqMnZLU3FyNzl2YXZQcW1EZFV0MjYrNzVib2R6Y25kRDAwZW5PNTFhZ1JEK2ZLcHdjRkxWNVkzN3lCM21pLzkrdjY3L3VINVNxTWpVQjV3MUV4YzBUMnd0YjB5bkJpK1lrUFBqVHVidTN1akFncEdRcFVydHRmMWJ1cU1WQ2FHajR5dmZlelN6bTB5VHdJZzMxdEF2aXFJa2NrNmp5eGFpc0dMUFRoWUY1VW5zUkRUckJLemhNVnNVckw0VUluWEhoY2llYnp1R0ZCc3l6STcyYUh4OGRNaU8wUSsvenRuZjgrYTRmT2RWSkpLVzBsdVd5dmJlNUdMNTBFbG1IeGNVQWIrVytMTnVhVm1oa3lMM0ZxNVpZbVRqTkRmMmRWMDhLbWRPNSs4cUhGbjMxM2Z2ZnJxNzkzWlQ1Y3gxOHhldSsyYjEvVXN2MWJjQnNmWEhQbkIvV05qOS84QTA0RmpJeWZRd1dOL3orTnhVcktEeEt0WTJEMVFFc1huWUt3NTV3c1NPV2ZvTjQ1QURJVCswMnpRbWREdldMTnhlTzdaRGV4eG8rSE1pbWh0c2xLUjFna0FEY0JTVTVUcXgvQ01FUFZ6S2gzQ3ovQVVCK1B4T0htVXhMbmpjV3hwc1YzRnNmSGJINzkvZ3VUc3FRZ25LbmlSNGlYR2NZcUZReW5rT1BWcTQrL2UzMFZ1QjNIVjJRbEp5NThTZFNkZWZjZjNmaXFmME9kRTd3bkpyRDBsbWs2ODJsVHh1eXI1dWdmWE52SFk2VGwxOEhFdW1JZTZVd3dGR3E3UTZreG1wOHRic2xBYmhscDVLbi9kN1NuMmxnUkQ1eXNmazZnUVlFdVZ6Uy9icDNnTUo0VG1mV1hNZHM0cDhxTmdTQWxtUzFqalZxTjlTZzNMNmxUb2ZvV0ZLOEpzdkYrbFkxbTFDdTFsYk54UXRtNURkcFZhcWRSa1I5YXp4d3ZQakZ1aUxsZlVvbmhhSndCN3h5MlZMbWVFbklGUHpUZ0xDNTFuN0xMZUFxOFZyNUI4Zm5EQjk5TjV0U3FLWXVORFNUVDJuaW9iOFo0YVJNU2FwMUlqV3htU0NmY0x0RDZyMzhGeExIcVpVYlBvdUpMVFRXWjF0R1lISjdEWnBFS2JiVldaOWZUL29OL1dhK1p1VkJ2VjlJU2FtK3VjTXdNbWVNREl6VjJuRVRCTkxxQXBUZUxlcWx3V2xzcURFYXVjYUFMbHR1VXlTUVNCVVBKQlh1VVdNeEdtazJzdGVIZjBNR2RWcTYwY2VsaHA1dGJOWlhhenh3Mkd1UjJPQ3BzOTdLRHYweGxubjU5N2xsNk5uMzhKUFA5cEV2KzdjOWdLY0NsWjRaQURKUzZLN1JkRkZqbVR5SXNYQWxUSWE3MUV6OXcvZTdIQ3pzM3VaQjRPbWsyc2FrM0Faams5dXdaLzVqUTR3MU5LQVQ0elNqSjVhallqcXFJU1lzbm40Y21yNWpOcE5jRnJhZ09KdW5JUE1lY1h4dUo0c1hRYUxUTnhQLzR4WjhyK1FlVUpHSVJUMjNoRENZWE8vdm5zcy9USi9Cbzd0WGlObmNGYWhtV2tMaTgxMGxlV0NsNDErNlBncWF6Wml1bmFCM1NsODNRWm9oSURkQ25oVDNOMEtRQUdBRjBLUGFaTGdlblM1T215MXlRd3ZKTkRITzgrSGxQRm84N3M2eGtEcjN5QTV3Si94blV4UDJEaXpMY0lYc3ZYODFDa0dvVllSWE4wQVp6bGw3VGxCSXFjT01GWmxCK2c5VTFvd3pLZGlmMVl3N0VzcC9rVHl4dVlPSDNKM0syY0ZyMHBlQVMrV01pMnEzbFpuNm5zYjVuUTJRakVJM1pjYXlCUmJBYi9rRm9JT1FxeGdvMWxRclAvK0NPQ284Y1VUNkt2Z0MvVGdGOG1hamFqMUZOR1hDMURRdE1aMWtvWkZQbEkxRXpXYkRHQll4dWNEdjJqU2IxSnpiN0NtZjZvMG1JZnZ3Lzg0aHFGSHV4V2tycUJTaGZnMmVTTjUxWjMyRXphZ2lpU09VcHJ5THE2aHRPRVo5aTQzNElEY0V4aTNhSlZIb3h3UkRZbXVYRDlNaThWR1RONE1xYndXak5tbHBBU1kwS2FzMkJESWhhWlJEZE1namhlbnFIY3FaU2tZY2xiNUh4OUVydDlrakdOb3R5aW1vQ1BseFNIUVpTNnIrZWhqNSsvN0Vqdmp1V1ZSb3RPR0JMM0QxKytzaXprVVhIbEl4TzdtbXUyOWtVMitKSzlwUTFiUjNzRGYvSGptMXMvYnRzM1hLM1ljOGU5WmRWbDVxS2g0WnJOdDQ3TzdTeTZycXk5MHU1dTNkb2I3NnV5dXlJdEpVaXJDRFNQRWh3a252MUl3WUtlV2tBZlZsSnBEdk9JaWtzTzRJb1NzNmRZbFJGUk5MY0dnYXUzSlZxSWtYUVdycVRSR01oS2hGUmt4V2lldzNDNkdOQkRXaU13cVJ5MEYvQVlUYmtZTUFSaGVkSTlEMzU4U3BXNHBUTjk0TFVmMVI5NmNzL3UrK3VVakNOWWYrZTZpWnZYUnA1NWFOc1RiZXlQNWk2ZDJKbWR5ODRlZU92TzRaR1ZWN3ArTWRiZGZ1VHB5VitmM0xtZTZOZkUyWStZdlFvZFJGMU5jbDJtVkFDa3M1aDBBUTRFNHRJRlBRWThsV1FJTmlBNWdwVmNLQUFvbzZhSy9mUEZmQVM3eUZuV3hYbUQrV3dWUGRGOCtMbjlXeDlJT1ZtdFdodG9HRzhkdTNsOUxMN3UyRkR2MXRhZ3pxQXVjQ3lmMkZXLytiR0wybEQyOEluYkJsb1NmbFpkNkMxb1B2elVqcWtuRHpYNnkveGFyNmMyWkYxMjR6dkErM0dnL1JzNTNxK2gwaVk1ZWlLOEp3UHdBTzgxaTNtUDJZNUJoSnFMeFNSZGp2Y0ZtUGVzQ2ZST0o0aEduRUhFRXFEVXhrWExYRFk3aWEyaUJHM1Rab3NOSjRrRk9SODhEcnlmMm5GUDNaYUVTNkh0Zk9IZ2F6K2FKTHh2dUd0aTRxYTFVWFFHczM2Z2gxNTNPbEx3NkxvcHBFQUt6SDNhdGFhNzdjalRXSWV3REY0RUdaU0FmNWlrMGw0c0JVdCtFQlhLekV5UTgrS01UMUF4SHo0WURiamlXVFRtSWdnK0YwRVlnWExXNHNXVFNDdEl6a0tzVUJ3dWhhWHdjVW9NQ2dDdEZ5OGtLZjNlVDRvcDZjMEZFUk10aDUvYnUvckxVNDBHYnM2VDJITGI2b0dEL1pVNmc2ckF1WExyb2RUT3IxL2VNVWsvV2psOGFObmdsV3ZyYU5PK1YyN3NiemowMUI0N2I3bm8rVXNhdk9VK0xLMmdiZm50My83SjhIVVQxYkYxMXhLZDg4Q2dyMlJmZzljMktsMklwUVp3cnlndTJaVXdWMklZZDZsVkdVbUhSd3ZCZWlHcGRDdUFBZHRpNllKQ3JJOEZUb0NZM2h6RWpDK0d6Y1F5RkNFWmRvYUNudWNyaHk5YVZ0enFaSkJaWCs2SmpUYjVVRi8ycGMxZmNqUFRwZGV1dVg2c1FxZU40cHhHKzY2QnEzcG05ekZmMHRKeXJub2dlejN6TTdCOTlkUVFOWW5pNExleE1EWXBNOU4yOHlaMVdISXBNbUlpS3JVQ3lYMVJxUUkwTFJ5RFFFZGFqUTNmTmlLakJqNGpOdkNTVWdjMmppY3IzU3R4SG9pRGFCNDg3a3FCbU1XMU9BYUNRemN2ZGNGaHRaQkpWM2ZoTVZZN1lJemJaVWo0cHc5T1BDa3ZsL1R6NHZJVFVybjZsQmc1d1U2SHl5UG04S3VuekNjMjRTcU42VXA4Q20rWjd1bGZiZzZuNFhSUnJRWmN3N1VhTC9TWFYwYVc5K1JRM292OTVlR0ZVM214WlcycFlHclZNR2FiWDVkb1hiMEpCeTl1UVN3QVRlcHJCVTJxYnNEQktJU2xPR1hsQjZ0VkNtZXJCVWxYQXE4dTB6VG5Ycm1XV0FUd3A3bnEzdmtpWDV2ZGl3dFM4OVUvSWJJRW96elAycm9peERGTGw5WUhkcStQTi9MZWlLZG5aYzJtbTRZN0RsWWl0dWorSW5mdHhodFdqaTBQVnpkdHYrN0c2N1kxdHg1NWR0ZlVZL3VTYXlMajE2NWFjZVBXVkh6VjNpTkhhMEx0VmE2V2t1N3RiZTNidXdJbHk3YTN0bTN2THBsYWViaFlhSyszUlNObGZQbHRHM292WFIwdGR2dGN0QzYwT2RsN1pEUmE0T3owVkVSdFNwVTVNdExaY3NsRW9xSnZTMGZsUUozWDN6SldVOVhnTlFCQU5aYkdHaGtxdGJHenBLUnpRNzM4dWxIMjNVK0JJdjBkMkNjcjFaWERvdnE0N0JXRW5GZXd6VnNtbXZnRUhPbm9EV1RyakdTd2tqQVNESzJjSDF6d0JzVGpDYkw5RjU3YTNQM0N3VlhYckFwdk9YYlQ1TmM3d2VKZnZtWkg3ZVNkNDNPSDZkdnVlbnpIeEp3QzI1ajdnYUJCOWdYS0REaWltVXBiNW1zQmpQcE0yb3B3bXMxeHpzWWpDOWw0WkRlUUxJbGtuOC8zZkxKYUhnZGk5M1BPWXJQSjYrQjVoOWRrOGpxNXNzM3NoTW5uNURpbnoyUXF4cS9GcDE5bXpzeXlGSDMyNzdNMzVtZ0o0YXl1azZTYmdBd3R3bkFkTUpzR01GdU1aSjgwSnpFL3B1MGFDd2Z6eENvbm4vUWFJTWJwSjhRd3BQQU16UEZDb25RcGZYRVdHZFJ1MThqUVprL2oybVozOUtXbHRHWWZyTmFySjBZVVY1NDVWanZSRWRRcXY3T0VjcENsQ0xKOEUyVHBucytsV3VKcEhSQTh3eFJST3B4SVpXV1JlZ2dYM1VTa1VqSEpwUmFCL1BqNVhHcmlmS2xVQkhoWTNGTEZPWGwwcjg1aFhwMXQxcHAxdkYyUGZqcksyZlRaVlVLUk84cithUFppdFJGZHJ6Tm1SN1VtcGRwdW1NdnFET2c3Sm00dVMvVHRIZmdWQUJvWnNLd3lqWmlnWE9ZYUJJbC9GakxYNzJ4bWYzUTZrdE5UOW9jRUErekx4UWNPUDBTbkNFWW55OFFVbDBwQlk0dGllUkJRWWNBTEhHSUZUM0k0ZnNQOHBnQ0hqQTZrQ29vazFjUUFkamhnSmtRREtSbzA0UlFJanIxWVF6NXo2U0YxZ1RaN2JtazhwOWpjT1NwZVc2RFF1RHNHMWxRZHVNRmg2bGk5cmJiLzZHamxsbXVQMUc3cHE5aDg2Y0dSTzVQTUdkZFh5cnZpQmRkZDFMS3VxU2kyNVV2cnNQcC83Y0hnd0VYOStPanVoN2VPeldiemN4TEdhcWNHY2p6aWNpTlY0NGxwVnMybkMrM3lHTzF5Y29mTFQ0VGN3SXdDQ2RUTTFIenlrQXpsRTdNVGs3N3NsVU1MRXhRb3ZXOXN6NUlKS21PWjAwRFhPYm5ZUEFid3E4NWJGMno0OUZ6c1oyeFZhYm4wK1gzN25yK2twZVVTL0hwcHkyUjA3YzFyMThyYlRQQnJGR1dQdkhWcmIrK3RieDA1Y3VMV25wNWJUeHpaL3VUaGxwYkRUMjdmOWhUK3M2ZXdYWGtxZXkvUXJRY2JGNkRHcWJTUXA1dXdWSU9KOTRMbTRBQ3VaQjRCc3pZWkFidHoxaTZJTnpOU2N0TE1MVWdhZ1ZSTzRGVXJ2VVVwb3pDQlJDcm5RR0VuT2djSVAxVnJFSkFHOE5mclAydzQ4T1RVem51VDlYZXR4UURzNlllM1BkbWF2WmZkcWpNK3RHNHFPeXRqNGI2K3JKSHVIbHN1ZytGZEcvQll4bUVzMzRDeFlEdzVMdU5KQWlieE5GOUFsTnhTUk1saElGOEFpTktRUTVUY1BLSTB5RnB5WGtTWkpPR21jQ0ZFdWV1QnBBWVZKYlowVHUvUEk4cmtsOWN1SU1xaGdVT3Uwdy9SUlJNNzV4Rmx3YW9lZ2loemM1citQWXpGZ2EyOW5CbWZsNGhGbHdFYnloZWZpTW8xMGs0eUdwaTZKRURESnN0SVZoZnM4NnNMTXVzWE1wTllzK01DajlUVlR4eUpyUEJ6aktDMCs2cUxMNzQ3d3B6aFRPOWRjYnZaM01FampWWjkxMDF6dS9Kcll3d0wrdDFJL1pCSzE1TjFXeVVFanZVa2NGUm93dWxDVEZrSXJvVUl4QXY1Y01qUkZCWHRZRzBBSDFYSWZLNFZNbEt6RElyZW4zekhJb01pTXk4S0o2U284NVJZZlFKT3BrMW1BWEJRbEordWlsWUREb0xmaTNBUTNDUTRTRENabzFYVk9SeDB6aGxCUVJVNEw2MVVnQXc1WVZwVEdNQTFKV0t0U2ZMNHNIS0dORGlOYS9mVTV0SzRpOWJyenNuaitqK1p4MTNyWVBVNlEybnorcTYyTFcyKzZxRnRVOXVHcXFOcnJseXgva3ROTnBWUlYxSS8ycFJjMXhxQU8zdmdUdFhhRzBhbkhwanlxVFhlb0RmUVBCS0pkMFM5M2xERGFHdGlzcit5TnVrRDkrUXFydTBPVmJWV0ZudExHMWMzZFJ4YVZkMUplRjU3OWdQNlFYWVQ1YU1PeWRHN0hOSVZrSkRPcGduakxVaWV1S1Ftc0R1dDF1WHI4MG5HM2swOHI2aUtwZlZ1ZkVPUE42RzRTZDdFalF2bzliekVjQm1ja3NBdWdNSEx5VFJ3Umlma2k5VnFrMlE3S1Zub3p0a2VIR0ZnaDFlTDB5eTEzM0FpZ3o2Q1dyTW5yTUc0dTZRMjVPRFZCYUVqYlRzdS9yTE95RHdiMUtPOUdpNTdlYy9jUUhsanlHeHpXYlhoY00yaEkvVExCaGpiN2FCUDMyRE95SGJjZ1BVYko5WWtaYzcwaU5wNDNvNkQxOE5KWkExb2pURkc3QTIyNHhxRzFMaUllbHl2UlVsSW1mUFJKS3NzVDhhRmlDOUMzNzcxMkkxYnY5NjFKVkdFTk4ydkhCcTllbFVZSGFCdm16dDgxeFBiSitqc0xGdHd6OWh1TU9wVUx0L0hmQTlvTStHY3NvbmsrMUF1MzVmUEVGR21DeWI0L0s1K3pxUkFRMW9keStvMGFKZzE2WHV6dzZ1Wk0wYnQ3TThjNVRaYmhZMEo2RGhBVXZoWmR2RGQvd0FJcjV6Nk01VXV4LzZzTUU0ZUozRUZPSzhjanVMeUdEeGYzdEcrZjJ3K3I4eVN2TExDY0lxRlE2bmNjT3JWdDMvNHU1UThuWHk4NkRraENjcFRvdVhFcTQzWjl4K1M4OGVGOEdjT1hpemtKVHZlNk95QVVGcDk2dFYzeXQ4dkppWGlBc3c3d1FMenpzZFBGL3M4NXZDMEYvOU93OFZGc3cvdXdJdm9UVkd0T2dVcm1DeDJoNmZZNjRzc3pqd2JxZHlkZ2tKUGNmazVOL1BURXhoWWp0ZG8vYW1sTEFTakdzdXYxK0xLYTd3Z0tpZmY4S0t0dlpjek13aXBOQXBXcjBZbWxiWFVya0lHbzFhaFVTTmFYYkE4Kzl4eVhwWDlMYXRtR0RXYi9YZWx1WE9CN1dFN0U3YmJaOStOaEcwVmRpYmduR1Z0VElQUlk0VC9aLy9HbGxzellXNER1UmZNNTU3NWVKcEd1ZVdFd2loTytlUnp6OWJGdWVmRWVWTFBBWFFnKy9CNm5Ib09LemhrWjNudFJQWkJkR2c5emp4L2w5Vm0zMVB4T2xxRC9xRFhaSWNFQzdwVlk4aWE1LzRnYU5EYkZtTjJvOGFJZFFQODJmZUJIaHZCZzdJS2l0Ym9RcUVYWmIyZ0ZwSjkzdlloSTJqaUdxVld3ZXFVYUlRMTYvcm1YbFJhVE10bUNGdCtheXdXK0dLZWNlaTQwMjl3Sm5RblBLTWZlTEFDbnJrbzE1eFBoWkVxend2a212dU45RFZ6WDZGL2FadzdSaDhLQ1ZabTgwQ1pUWmo5eXdITTE3YnNIOUFacFVBdFI0Y29zVDRxMWJBWlVqd0tJYmd0S3ZHNURTNHRFTHUwZ2hlTzhobXBNQktMcFZ1aXBJQVJhY0xUbmRFV0NHWlVIZkc0VkE2M1BXRzRYVTcyekpTbndKWUpNYnpyaFd5WWVPT2pkZkpXOE5hSUdBWmQ0NldJNXBRWTVxVU96YWxYMzFyMWtZWk1JVzFFOUVUdzl1TkN1T25oSlJXK1dmeEhBNWtKV241YXJWWEJCTkRnM3pCaHBvc0s4WHh3NDkrdk5zLys4WEh5dGdnL1hSRUp3L1ZLL0J1ZU5OM1cyZ0duN2ZoM0dvNFhwbzNZbmtyRHUvQlJSU29Objdib2xqdVZodWZnSTBBYXJieEtyZEVXRnJrOWVPOS9hMXQ3eDlKVkcvU1NXbFBrcnFpYzM2dWVuMDgxb0pYbGVHOFBCQ0lsS2RGbWtuVEZaSGJWNWtBajltb05pS1R1YzhtOVJiWHgrQlF2K0JUTjExamlQMmtMTkpUYnpIWnpxR2Vxczg2azlsVXNyM0diN0NabmViTEluU2gzd3FHN1pubUZUMjJxNjV6cUNjRWJiZVdOOUpZV1czbktXN2RuejU3NjVqMHJLc0k2dlNjMUhLdmZQN1VuR1d5SkZxdVV4VlhOd2NUVTNuMzFzZUdVUjY4TFZ3enVia25CMit0OGRlVjRIaUo5OWw0MER2ckN5RlhHOHlHUU1VTis1QkFJZ1gxSCtvSHN2YXFqZjc1SnhreFQyVC9RSlVUUHJxUEU1ZkxhUVYxVVNvS2UrYU5TS0tkbkVKSnFDMEhQMmtHUkltMmdTTzFreTJWN0hlaFpVN3RHVFpwZllEMDNPRUhkbXVCZDFjM3dMcTZKYk5GYUR1b1dYRkMzYjM5MGo2eHV6b2dJb25EeVVqVm9WSVFvMXF0dlJULzZLNkp1aG9qWUZzSGxkYzF3czQyWHRQaW00WThYRVQweThOTTZneFlVUjQ5L3Y5cjg0Ujkzayt0T2Z0cmxMSVRyQmZpM1dNMVBSNnNqY0ZxRmY3LzZWdGxIUHlkdmErYW5XNXJiNEhvci9wMkdQMW1rWEFXcE5Md2RIMFZUYVhqYm9sdXRxYlFlNy90TmlUcXNkMXFkM3VCMEZSUkdBRVkxdDdTMmZWTHZkSHBYUWJTcXBmVmN2YXNEUHl4eDdhQjNTUUg3WTc5SmNsU21Vcm5sbUVXcWw5dVRnVTlCQVlOTjg5dHBTUDdTdWtnbHcyaUsxL2dxZW1yY1pwdlpXWjV3WTEyRFEzZE5UNFZQdzlkMTd1a05XV3dXZTNsOUlGQmZib2ZEVU85VVI5MnZaVVZMN2Q4TGl0WmNWYXhVRlVkYlN4SlRVL3NhOG9xMllrOXphbXJQN2hSV05OQlNVRGhRdTFUem5zRUtvajkzb2RjVkZub09yTzFxQ3V5c3BGVm4wbGF5TmRlS0VaTXJLckZ3aFhXUkJYTmVNOS9yeFdNa3RVZzR6T1NOY2kyUzBZTkRDQ3ZHbWk0dDluU094VEVkQVpyeFhHQkhOdGpkNVcwZVQ5WHUyNzJ0SXRnY2Rnd1dOMCtrYXZidDJWWVJhZ3c3RUhxOWJ2UHlzdExxMG9McXp0SzZ6ZDM0c0JBT1NTOGFtQ3ZIQVpkelZDSFk3alNERGJWZW53RnZoVmRMeVRxZU5ZTi9wZ3ZVT0NGVWFNRDNSRXVjWkdTdE1STEVGUlFDaVhvR1U2dUhROUVpNzMzQ3BDNmtaSkp4TUJXQy8vMUU2YUl1TlBOTmFEWXl6NWNtT0pldkZPN1Z6UzJiN3o4VG1aTjc1anllbldQT0tMSlVsS3FuYnBMM1VvZ2xjYWtXQWpKN0xGMUxLaDVyQ3pWeW5JWlhBUklxbkRBbXBmd3dpQ29ndGtwdVZoQUUxRnBiZkZJUXczSEpEc2RCWGxMSzFlbGlBdWRuYlhDZ2k1SEsvbUNDUlBlU0hhUERFaGhkb2had1AwY0p4Zk5ySG92NmRYQ0k5T3NnNlF5Y1NzKzM3R0NTdVpZZGo3ZGQ5ZkpoSFRKeUpmcnhXeE1PVm1QeTFRMm5LZ1oyZHBYcTFHcUYwN0ZzWWsrRGZIL0xYeDV1MlZTMTlwcWh5ZzFmbnF4QjJZdis2dFpCK2tjR3k1L1VEVkVmcTNhNEM5alphMmwvcVZmQkZydGpRVHY5SG03RjBYL0RhNWRPUG5Lb1RjVmN5YlJlL0FUV3lTNktVa3l4THdQWExwSTdQa2lWVEVZK0FEZWExdUhjbTB1VG1hRVVjWjBoTEJiSDhlcWlXQ0l6TG5VU1I0UWh2QzhvbGc2bDhuRlpPaFhDaHlrS0Y3YW00cG93WmhZbFZlSU9KK1VweWFVQWJlRE5zdk1naTZyNURnK0xpMG9GZVkrZlFMYmp4K1VUdkdWVTZESUx4eE83SHRtNTR0THhWbHRJWXhBNFM3UmxySG5vMHVFeTlCK0NJVnZUMjJvUE81aWcwenJyOGJmSGkraWJ2RVlycXR6NHhKSE9ZTnRZdFowVmlwdWlCYlViYjF5Wi9YR3B6cFQ5OXRvcktoU0tNbU5SaDZHc1lhZ1dyWkQxQ1ZFUU5tK0FTRDlKcmFBd0lpcURNQ2dPVTFRcHIxd1duNVFDb0FrQm51U3pPQzVERml2eEZxaVhhTFZnY1JYNWRhUk9LMTRHVjlRNmNvV1cxU0pwbDZQbHBKMVVteXRWZGxWSWJ1cWdDcEZjZUNLcFdwS05lVHoyY09SQVc4dUJ5TU94aDByQzVTVVB4eCtPSEd5QjgwZGlENWVVbDVXd0ZYM2JVNm50ZlJYNVYwVjUvR0Y0WStDaCtFTzVQNHlUTno2Y1AvOTVhbHR2UlVYdk5uaDNmMFZGLzNiUWhUV2dDKzNzY2FxWXVsaXVUTXZYdXN5NENoeVV2SlVVcjJ0WVl6TnVEN2xnakV0dXVDQ0FPbmh4dVJQZVBZWHpZcVpZMnU3QU9tQzNnbUhqWTJtSEhaODVYSGd2Y1V6eTRVU1pnMVROQUxMd0xKVFBFSXlaVDRCNnJlUS9YSkJiUy81YnM3TEFnTGFvT1ZZam9DMjRuQ2E3QWsxbWIwR1habS9aTEwvQTVlT3V1VFdXZ09BTDBjZDF4dG52Tng1cHpCNUZOOEVMcVV0YjVQdFZNRTdpL2RWays1Y2locDIvcUl4SktyQ3htbmtNd01nNFlBQ1FBRk13KzIrSzlVemg3Ry9rR3JjN3oxN0dYRVAyV3ErakhxSGt1V0pUWnRJMkVpbmJCQmhzTkNvMXdKVUdBalViRXRpbXJ5Y0dwNGZQVEN0N3NNVXNBRFRRdytOZVExSUFMcFlIUnVCaUsxeHNqV0l3aXBzcmJNZzNWWWlseEI1QlRJRGpOWWwxNEdPRlZyM096SGhDMFlhdXdhSHhDWnlER0RHUk1qbGJnMkI2UWNtVng0WW1jcllvc1dpWlpXbm1RVG0vNHpvWVNwNmJyQURqcEFCOWxSZGQwSjBiZHRWMUw4cEdCQnBHbTFJYjJnTHhWWHYyNzFrVlg3MHEyVVV5RWc4MjJWbUR6aEJxM2JDc1pXdUh2M2Jzd01YN3h4SnJTcnNtdG15UDlMU1VOSStzMjFTeHRwLys1OEdyZ3NGdC9jbXRBNVdKaE4vZzlMaUtFOHRMbzh2cW90V3A3azB0bzFjRlFwUGRKR05SNTFlcnZjRmlYL05JVmMyS3h1cFliZmZhdnZMMlJDUmM0Zkp1YVk0c1QxV1dsOXBEbTdGY1NoVS9wS1BzRVlpdlM2Z2FDdTlPOHNYSmhqOUhETDlJakMwR0NodU1pb2dzWjJDY2JpR0w3Qm04V2dweU41MmJHMFdCSmVlbEJrY1JSRFoyanJNWDg3emJnVllhSE83NUM0TGJ3WnA4SG56aUVYaTMzV0N3RjUxN0N0cTM1dXdmbEVWZ2R3dkFZNjNEUFk5SWpadFhrVW1yY0ZGR1dFRUZGT0dac1g2cnloQ1d4a0NGK3Nld0N2V3Z4Q2pTcWxLSFoycmJ5YjFhYkkrSVRzMFV5dHVwQ3VYdFZOMUNSdXptY2ZKMGhwTzduMkExQ25hRE9iSjZWZUhhK3RFeFlxQ2ErZ1hUaTF4aHNJcnFIc1VLMUM2STliTHpVdURpUTd3WkRXOHhXWm9mdGk4MjJvc1g5Qk81cmY1eVltUk43YWFibm5oOSsvWTNucnhwWXlLeDhhWW5YOSt4N1kwbmJ0cFUyN2o3NVkvdnVPUFVLN3Qzdi9Mbk8rLzQrT1hkSDNSZC91eTIydkgrZG85RHhXbDlEZXVYamQ0Mm1VaHN2bjV3elZWSnZZN1YwTVdOVDE2eTVhbkQ3ZlM3Mjk3RUg0RS8rczF0MjkvSUg3K3gvYzVUcis3ZS9lcXBPKzg4OWRxZVBhK2R1bVA3czVkMThrWGxoVDVkZ2FjZ3NlMnU4WFZmMmxwVERuZ2FQbXQ1eDlGbjVYbThseG1tTzBBV1FkQ1dxNm0wQmM5ampXSngyWXJvaTg1VUVKR0lzZWdNUzQ3eW15dEM0QVZDY3FNcEZ1TitCN2dDdkswaWhPTjRUZ0RrV2kzQVIvbndxcWpESkJibE5vRkxUb0JzWWt5UXFLTEZGU3ptODFTdzJIQUJ5eWZiRzlWeWFHOTQ0ejFUeS9vcUdzc0tkVWFWb1hwdjE0NDlYcDJPMWJwaWlaYUFyemxhdU16aURUdDhxVmlGN2VzUE1MOHJhWThWMHpVclZ0cWRkczVlSGJsMFcvWnF0YjdMRVhBYVRNR0dpc0pTbDg3bzlGdnVaSmNSdmp4QzNVSi9oM21ZektNZ2xac3hNeTRycFFZK0ZNZElhWUVMNGFKa3M2TW8xMGluMW15MzJTMHFCbS8rTk1PUkVTMjVoQmQ0SC9uWXpTUDFhd2FOVnYrYUNnbHVEcCtyWHNmbnI2c0VOMjNnMERGZWE5VHJzeit4YU5XVzdJOTFCcU9XUjllZjk3SWNtejJEMWpLbjZKOVFMRldWM3ptYTc0NmowTWg3QkJTa20xSmFRZnFNS0tqNVBRSzRBNDVmZUlaWnVZcStwUzk3RTRxQUd6eG5maTZqQnFrbkx6QkR1N3JKTE93Q3JOVFZqVCs0cXdyVXBURTJVejFJYmxTeitlM3NTNmJuTWpEdDNURnhHUy8xNGJ3MW5OV2VNMWxYd3RXK1pXREVyZDZ3cW8zc0hhMFZJS29TZ3lheEVYU291MHN3emNDMHBjaXRRVUdzL1J5VGxoVFZ5ZVorU2JWMEFuUXVqRDcvYkVWZm5Ydm8wZXVQNkMwYUZCaldHcFhaLzZsMkZSeTg5NHFqKzQ0Kzlibm41OXp6ekcyWEhOMStURkNaamRtYlZGcTBROGRsOTZNZlRhN2ZzQnBrYW1GcG1KZGRDMzErMkl4Y1FMalE1MGQ5VHA4ZkM1aDl1b1BzSlY3UGpORi95NzVLMXN2YXFmbjJjWGh2TmVsNGtsc3Q0eFpXeTdqL25kV3k5VlVqQjF2YkRvNVV3V3RiMjRHUnFwNlNsdFhWMVd1YVMwcWFWOGVxVjdlVUtHNXBPVEFTalk3c3h4M2Q0RzM3Vy9CVjhxN1ZiU1VsYmF0bFczU0FHbFpVS3g2Q01SdXBqWXYyUU9PUUJhQ25xSW1sRmFUbVNzSGhZRVpCWWtVVjFuQStLbkluTVg0eEdIRS9rclNCdy9jTURLaWpOcGJtRENTOWdPTk1RRHFDdkx0ZDNraTkwUDZKZVd1MkpkOENhcml2ajk3VWh4N05idXJMYmtNUDREbTJsYm1mN2xGZVJWVlN2WVN5TXVDbkpTcHE0NWlyQlFwNXg3cjJwRlRNWmRMYTR2aytVMUVNL3N0STE1d2dtRHlMSUNsWjNEMEhWN3pMSVVETGZPTWN1Y2ZiZk9FZWFXeEkrdVlVb2ExS3pRZEZzYUROVVZwYjFOSnJWVmxvQStQbXJ0NVlPZFRnZFlicjNUOHhsMXFSMDhuYzcxQUxxbytLVXZWTjNrQ3QzOVNUTWlQRWJ0bFZFT3VyTGx2VzF1aDVqMlVkWVdJekpwbS9vUHRnUEMzVVNnckNHY2tBVU5ZZW5YSElocjRFTUg0VWIycEdnTVJFMDBteElDWWxBQnBXZ2FLMDVUZUdwQ2xGZ2hoMlFZeW5wT0lTR0dSQmxkendobGh1RDNJeml6cmVvUGxScWhhcUV4ZWhyd2c5NlZHb1dMV1JZUlNXa3NaSWVXdVp6UmJ0UzY1Zlp5K3RjYmYxbXBSbUZlL2tybHBmdVNKVjNOUGNOeGhzSDZ0dUdrbDVGU3NNTksxV3EvWGxKVVVGRmJWT1gyM1FHcU1IV3YxeEg5L2VhRUdNWXNzdVYxVm5SZWU0UlZqZFdUMVk1L0hVZEdFZS9FVHhKQzNrNjBFVnVYclZDOWFEa25aN3VFcjFKNC9wbkk1TlAxY0xCc1dUZnpSeDJUbXRTcmJEdCtNMVV1WU1WWVJYU00xeVRRdkllMzdWUlN3QXhPMG1rODhsa0xJVzF6bHJMeDdzVStUK1lhS0daSHowcHZrVkdJbTNwUzYwQmhNTUFST3huMXk4RkxQOEd6c25idzZ5VExYRmtYMkhyVnU4SERPeFliQ25ZcUlrSzlrSTNjbXpUWXBmUWV4anhyVTR4RnJvTmZMcUZwbHRlbzZVQWlPczd4enBxQ2NhK0JsS2RvVlVGT2ZlY0xzb0RaK1JyUE9kOWlCcTlaUHRoSDRCbTR5V2k1L1pUZi9idjYvSmltTzdqbC9jb21nYnZtRkRmTldwM3lvZHAzN0wzSldhdkFYVGNSejlHUjJodndWMFJEQnluV0gxbEFYY2pQeENIZzlDMFZySlJmbGw4UU1YV2FqamZHR0p4UllxRklUQ2tNMVNVc2pURytiUGdvVThENTREUCsrbTdOM29wK0ExaTZpakZNaG1SazJVUDYwbWk0QnEwazBPcENXY25ESEozc3NrOSsvRjdXODl1YjM2c2Q5MXlqbEtJY0tKL0FtRlpIS2Q0a1R6Q1dxYUYweG1rdHlEY0QrL1ZWL0EyYW9DYkY3VkJhUWxVcTQ1RklHT3BHTnBNcjRRamR5a1ZXbFpvYkRNWFZQdmlyV1hocHZkYXpjV3hyckt5b2V5ZjFXazF4bDBsU0dYMTJaZ2I5bkNOemQ2cW4xbUI0enBQckJUSGNxallFRjdLSEQ4TXlwNVFqTzRBek1lbGdybDdLV2FKSDB2MElSTVdOU0VETk1ZRitKV2IyMWNTT0xKRzdydnB3MzNaSy80UzhWWDFHcWRtbjM5amJtUldJd3VDMTZyUkZwaXg4ZVpRZm9KOWlXUW8yZmUveFFwaVAreDV3b1hGL3FWdXVSK3BTU3o1MXJ3UDBYMlQvRS9OdGxuZ3pFWkx4MllXdFk1MVY5YTJqL1Z1V3hxb0hURm5uMjdwNloyNzl1ak9OWjljR1U0dlBKZ2QvNzE4UFhYSDc3NGhodGtYek1EK082WGdPOHNWQmtnUENTV2swQllHNXNKeW80MWpPTUZtSXRwSlc5TmtXcXFaQTFldE1VZE5aaGdiVTBMTWx1WlVMQmswY1ZRL3VLTTZuVWxYcUJVdnE0eXVULysyQzBnaGZvMStRcEFQdm5TdEU2UEtuVUdCY3ZwVUlYT3dHdjQ3SlZjOWdwZUkxem9CcVpiUWNGRVliL01QZy95ZFZLbDRJMGVsM2ZtaVA3Y3praExYQXJ5dUh4QjlNWm55bVRoRjhYU1pVRXMyN0pDVFhoR3BlU1JJYnlnR01SemZabzI0QlhpQU9oN2VXekduNE54TWRLSkphY2hZa0JJdXdyS3NDdndrLzFIVWxtUXROekd1M1lyVTB2MEJ6Znp5QytqK1VzUXZtTUpJNnUvMXVzampjQ1N0L3kwOFd2Wks3RjJhWFNxeDVpNDFtVUp6MzVYVjJoQ1o5Q3V6bXVGQTYzWmFRZmRqa29ZeFlldno2dWU1a3lVdlVFd243N1V4SjFDdjg1NlMvaHZmWXN2UVdzY1JYTE5LdWJiVkk1djNkUmpWTm9scjBGS0hXd216N21ac2xvWDNwaFhCamkzckpZd0xFSVk1bHJDc09XZmkyRlNQYndoUUtvNEFpNllWRDNuc0d6YUdxdHRKVUZvaHd1M1dtb0Y5cFVKYVUrc1B0YzA3a0k4OHk0RkRhb0xnSVp6R0htQXFkRTZyVElqNlFHbCtrT0FFMVk3aGhOOUZxV1Z0dElPN2hxQUUvVStnQk9lbjVqTExNamx2QUIvbldxZVlJeG1qREdFOWhZem9tbkZscDB1RERLNlc1c0FaQ2lkWWF5cm8wUlgwMVFiMVVkTkFLSjdqVXEzWTY2UHh0T1ZtT1BMNGxLeElpT050Uk45SFluUHJKVlpQQmhMcnlVUi85b1Z3SDVEVTNzbENBVUF5b3pEamc5eklBV0ptNkppd1VtUmowa3gzSXdHNTZmcjRDREdTNnRCVzlmRlprWmxiVjBSa3pZRDYxZlh3V3p1SDFpTDlYUlVFTHVCODJ2SFFCcjlLYkZKRURlbThwaW1Mb2RwYWxOaXNTbGRVaDVMZlM1TVU0NlgwcytIYWo1ZDIwZm5NWSs1cENsUzNsSU9tS2Mvc1g2dERUQlBTNzlaQmJaRGF6SVMxRlBuN1czcVcxR0NVYytxT2w5bVlXWUk2QTlMWmdaelhRNFNsUVdMQ3NPMUxvQkVGb0JFYmY2NFYraEpXRUJnekpaZHptcU1pY3pDbW83cXdaVGJYZHM1Ky9pRnBoQklLM3M3L1k4S0hWakxCbW9UbFk3aXRaQ1VQZ05JVWJMamJmS05TM2RqYTdqTXRGMWR6b1dsR210R2FvSXI1YmduUDJzRTdxb0ZYTTZtTVUzYlM2SXBNZ2RTZGx3MHBDNHN6cFZITnl0YVVOeU9RN21GRW54YnZnYi8zRTdUd1hCMXorcitHbHJYb1lRRDBnT29wbnR6ZTRsV28xRzRTSitnN3FzMzFTRWY1L0paRmxaWDJsYnNHNnlQSi94UGY0TU5OeVVTM1JzN2ttT054WUdLZ0VwWldoZ3ZkWlFQSGxMVWZxSWZFQ1AzaTFGWlNMK1k0ay90R09PTjRsenZaM2VNUWZNYmpUNnRkMHoyUHk5MjJybi82TkVMMnZPM2thSERHc09QRmVyL096UXlCUHl5Y09uVGFCekxjRTdIUmRsM3RTYjkrV2xFN1Q4MmFINnVZdk0wS2o4bU5JWStsVVo1OStmbjRHTXliaWZ4RTV6aTVhVlBKVFU3KytHNkQvdlVGdFZ4V2tHcm5sV1oxUmVpK0h2Zlk5a2JZTUt3TjdBTGRQK0MwQjJqRGw2UWJnd283SEhKQzJGaU5Db1Z3a3NnUmpyYjJFL094R1M3RkNOZVlxWkV6bm5nbG5LQm1HQjZBWm5vUW5NNW1SVzVJVXRSTDh3Y0QxbjZ2WkNBNWxjL0U4bUZ4VS9scDdZaitqZHpTY0xuYjA3VkZvWXJVZExrVC9oOVRmV0p3bkFGZlFGZURQaWJJMDV2aWJldUl0QVljWG1EM3Zvd3dTUXlUK1lJVDhxcFJtcnN3bHdKUm5HZncwSXdISkZZdm9UUmE4MklYcDRncnJpVmxEQktZUmp3TkcxQzVzVnN1TERrbHdERUVubDVOWC82cVhyd2tjSHU1bms1UTgzakREVjZ0dHJIdXgwR2c4UE5DM0IrQVY2YzREMzRQZmh2YkFhRHpjMzdZb3ZPcUFXK3FFcHpmRWw4bXJZRW96TVIyZm5WUkdjS2MvNHRTYlFsTEd0TG1LUlpaN3l5dHVBdmNLakdUYjJBU1lYQmM5Z2sxVVJBVzd6Mno2RXQ1MFBVbjhhdEx4VkdtdjMrbGtoaFlhVEZEOHBRbUdpdmliZTN4MnZhTDhDbEIvMk5ZYWN6M09nUE5JUWRqbkJEQUw4YmZnZ0dQL3M3aWxMK2h2VGV0Rk5mb2RMNjNQN0F4VTJMUkV0c2hqUHBrYndBeDZsd2w0b1pWcTJmYjJUa2lPS1NSUnlMbmJqMjR6T2tJc1FTRVRVUkhGb29DazZKR2w3U3c0dUNuMllWR25ONFdvMS93ODFwZ3dWLytZZ1ovMlplVXJCcWpkNWd0cHo3OVI5K3ZBeG56djBBQzVWd0FmaW9NalBGekh1emIvYlNSK2ErTWtBL09xZXBuM3M0WTNDakZycHlTbTNSelhkSFFtOWx4MTAweC9RVlJPMmtkMUgyYnRMM2FwQzZsRXIzNGRGRzR1ZTBMd0tKejdUTFFXZzdhVURjM29TanRhSEZqWXp3VHFpWWtYVDdsTHFjZUR1U2hYVkhvc242M2o2aUJlMUowSUw2bE5nbmlMSFVmNnQzMXNJbXBHQm9TWFFhb1Q5L1U2MGRWOXk5eHA2UFdBdk9qV1ZMYnM4OHRlNnp1MjFGKzVOdU5KQ1BiczJMZzk1TDFBZmVRbW9xMzRkTDBRRCtUa2RaUDd2emxlMnpPbC9aUDlINWFzRkRMK3FCTlZlK3lDSG5CSzZ5NUh6dy93T2E1ajN5WXBwK3M5Z0Q1NGhTaG5OT2Q0Rlg0SGQxVk9GbjAxWDBXWFM1ejBQWEVpKzhtTHk2VHpyZGVTS1grRm1aemptZzAwTlZVenMrblZMY05hb3lMZ25nVnZ6Z1ZtSVhKSnVZQTV6Q0FaZGo0L0VXSktuVVNoYSs0NThjeWFkN2xjWGppbjYyRThtUDgvaG4rZzJhd2wvczhEam9qZ1k4UnhHVjF1SnFCQjNwOXNTUkhMUEJuTW4zQzVqWFRMeFVyNXJYeU1TdW5DcWUralpwd1VWVGI4RUhyL3Q4bnptdldmZ3ozMXJRS1AydXZDcWRlamZYMklzRzdhYm9FZEFubm1SU3lCNlh0SWw4cmhXbnppUkxybjJEUmNCZmc0RjBjaTdGdkZSTGNGclR1bFE3SHR4MXJsck1QeGIwUTQvSEEvcUI5K3lWNFY1V1pOY2UrZElqWXhSWFArRTE3NEpZTHJHemVLa2I5OXF4ODZSRGVUSEFqZkI1TTRpWUh2TzVBdGN2RmZLSHU0Yk9sZkluaEh0cUJ5WlllZnc4TW80Qk52aHhycmZLanR5ZUpnRzBteUhKTXRCdVJCa1p1ZWdJQVhoMHcwaDhVZEZJOXZzS1pyemZMQzBZeVdhRllrMDRiUlR3b1JHdmNBZzgyU0dwc1dSd3o3dGNNeXlOWGE0NE9xZlpvRmN3TDdRYnhFb2Yremt0UEREMzB1VGtTOW43NTM2L0d6MTk3RDNjZFBDOVk5bHg5SEIyQy8xR08vM3NRdTlCK28yNWUvUHRCK2VlYTgvMVE2d0ZiR3lpSXRRVm4ralloYkVmK1BBaUdFMDRLamxZdVMxN2RISGNhQWFBRTVIaFRvVE16aHpjd2ZBdzMrRUxyeDhXWTRUakNLWlNpM3A5U2VFaXZBQlJkb0d1WCtZTEFPUWwzY0JPZlFvbS9rU2ZNR1hpZklDWWtYdUh3VnpENjIvVjJNcWVwM3RZN0h6ZHcrSzVOYmhwSTF0YVNiejVGMndndHVDcFBydVZHQ3FjTnhlZnE2c1k4N1RzM1A2L2ptL2VObjJPOFoxY01GMmZhNEQwbS9PT01qZEdzR3Q0akhVWEdHUHFmR09zWHpURzhIOXZqRXRzNCtjWWF2bFMwL2s1QjN5TzAxMDA3bCtRY1hkUXg4NHpibHo4V0JxWFlpeXAwcXJFN1k1aEhuY3U1a1Vwek53T2VlWjI4Rkl0bkNYa3M4UUNuekNPcmUyQUNNYm85RmV5RGVkeVNtcUZTRmlxYXY3Y1BMdkE3UDRjck91NTRJei9mRHo4OXZsc2dDTEh4em5DeHdacWdOcDlQazVDZ05jVGx5ckJVN1VBQzFjc1lhRVVzNUpzSnE2MjdZVER6Z1htNGE5emE0eGhKWFA2MmYrV2tuMDZ1UGtjZlBOK0Z1YjVmRWFsOFRQeEVLSWVvazRyR01VR3dJS1VXWU9TR21UWElKVUdQWVN1eXQ2VVFFZlJwWW5zemVqS211eDEyV3RSRkYyTmppYXpONklqeWV3dDJXTzE2TXJzdGJKZTM4MyttbjBmdkcwbGxhSTJVR2tibGtaMVhocGxlRDdYeTYwK1FRQStucFF4Q2NEcUJuajE0VVZaZDBwTUNDK3BXWnVUOHdRanVQQkV3RnUzS2Ftc1dqQzlSSEdDMDZNdVNlWERyRnlWS3ltQXR1VUZFUXlweU42aElJNjQ3VWplMFdxZTM2b3JHKzByM2gwOXBEZFo2NDd2T0lTNWY4bDNSMjQwK0lUS04vWWYzYk41RFQzYjg5SmV6UC8vMmYzTjdWZ2VZME01UG5lMjNjY2JmN01sKytzWnd1em0raG1CcDg1dVFTV3ZQWEZtbFlLdGJ3WnV6L1hVSkREekgveG9GY1lncE04YzJIRW41Y2RkV1QvWmFTNXd2azV6SmJsT2MybXJ5NU5EYytmdE5yZUFUYy9UZCs3akJkOXpvUTUwN0ZiWjMvemZwblBCcDV5SFRpUXRjaUlYb2xSeFdkNXg1R2dGditHa3lzOVBhL2g4dEZZczBGcjA2YlF1OFEzbkkxbjVDV2R3WWNLWE9BQW1SLzhjMEY5SnRWRHJQamtDc1N3cU5zUWxEeGl0NmhncEQxa1lEbDdMRFZqbkM4TVRjSmhZR0dSYnJrWmNzcW8vVFcwKzNUS2RaOEJ6bjJtSkxqaitQMytHOWFIbC9uU2dleGJLL2NrT2RaNzVEblhGbjc5RDNVSXUvZnk5NnBvWHgvRG5hMXZIdkR1UFV4YjZ2SElnc2I1RmZWNW5ERVlTSFJzMG1SbkdLYmN6MXN4M0pPZUFaTm9ZaTRrY2owc29TQ2RvdVMyNWNiNHQrUVZhdnU1RTNQbDd2bVovTG5kOXpmNHpPa3E2dms1ajIvMjlzeDhvMnRqWHFGN3E4aHgxeFpUY3VRa2dnNlRFQmJ4OWhLUmVRMGJzbGIrWmxueWpzMXhWV2lCa3BuVUYxZXF3MUFJaFFrdVVoQUQ0SzJycjhIZVZsdmxUK0tzMEpXVW52TFlBbExBVlY5UTJFbi9ZV1lHL2VhakFINUsvb1d6UnQ1Y29GbTA0WDFMd3JWajhyUk5XNFhzZFI1N2VzdWJtZGRHcW5sVTlWYjY2N3I1bEtWL051bXNIZDN5MXljWnlPa093ZVcxcjQ4WTJiK1BFcm9uRzZyN1ZmZFZGcmJ2NmVxN2VuRlNnSFU4ZWFxd1oyUjV2MmRpVHFtc01sc1JLM0w3eTV0SEdaUmV2aW5UVzVmYXN0NnlxNmhxdURjWDcyMks5TFkxZG8vWEZ2VzNoaW9rN05zMGltSXVreHh6NTdxQWsxVWJkZlo0dWMzWDQ2MkUvcTlWYysyZTJtdXM0cDlYY0RHZngxelZoQjNlaFpuTlNIUUJjc2VrTE41MWJjQWxmdVAzY2p2a21mRitzRVozaTVsekx2cy9GejhiL1QveHN4UHlzKytMOG5LOUorOEw4L1BWOEVkc1g0eWR6Y2I3a0xjL1A0NFNmeTZrSHpzUFAxT2ZoWjg5bjhyUDNISDYrZ1BsWjN6YlBVTkVsaUEzblpXdnF2OHRXN0dXaitDdDBFZkd5WDVpN1ZmK3k1aGZ0dlA1UkpVc3I2Y2RZVHZNRm1YekY3S3orYVlWYW9hU2ZabFdMZFBkV3d1c1I2dDB2M0hFU1c5bTZ1TlFPZG5jb0tqWEJoUzd3M3FzV3N4NU03OHlJSEtlTkxCYkU5REpYVEIyZTZaSnZkVVZubHNsSEMvSVpYU1NmT2tIa1VsTFhDRVIyRm45bGt3YXZTa2hGTWVGQ3FqL1VEbGRhVjZTK3VKUXVFUE45WVdFbExLRTZuNzhwVVZOUVVZa2F6Y0drMzlkWVYxTVFycVMvb05TZUxXbUx1bndoWDExVlNXdTB3RmZxYTRpUWRVQlpka2VJN0hxcDlkVGJYMXg2M1ZGeElpNDFBZWdhQXJGdFdDdzJ2UFd1SFpCVyt6a3lHOFV5ay9yaGVqL0l4N3A0Tm0xY0pLMFVscGJZYnBJcXNTdnRGeVNMQnUvTU1FbERFM0taelArUlpxT2Z0YWZvQzRzcytWbWJrTDZnNUg3MTZWdVc1bVg0Y3lMRFBtck5lV2ZnS01aZFRmTDYzYWZMYzJhd20yc3loR2NHY3l1OVkwdm5ZYjg4eGZwNWFSak8ydVd6OWd1WXgvR2wwMC9zTjRuK2xEZ3N6RmdxbTdvMW56RURSd2ZoU252ZGYzOEdubThaK1F1TDlOYkNxdFpBb0xXcXFFaCtMV3pJcnkxL1FZZXZLR211Y0Rvcm1rdEtHaXVkenNyR2tuaGJXMzdObWRoUnBWR2hwOXFwWVppSklwVnV4bEpNeEtYbE1NdktZcVRkbjFnUUo0dnk0N0cweGpvdnZaRkFzOVVRRmxmRXBSRUY3Z2FWbjRZZElJc09YaHFRSlJNQW1Eb1N3eEVRL3RMM1lqNURwbHNIUmI0eVJCd1EwcHkxR1JlWUJVeVNBNyt1RXRJRlphU012dGdrUmFweFNqdXdITmRDd1RIWjBpaUl4YmhVU2pMTjczSmZFRkN1N3M5bW42ODc4M3VYZEN6Rlh3Ty9XRzVOY0JYbGU1Z3VGcExPeUFxRHorMjk5bTU3MVNzM0R0eXdwVTdMemEycm5yaDZSYy8yWlNFdHAzWTYrdGJ0ckwzeDdTckxtdjMvcTdkekQ0NnF1dVA0ZmU0eis3alpaN0o1YlRiSjVyM1plNU1zZVVNQ2hJUWtCQkxBUEFSREVSR0NnQmdFWDRoQ0swbEZLeWhpMjlGU0ZlaFV1M2ZKak5iYTZZQlYyMDcvY3FhMFUxdW40OVJPTStOTXkxaW5MVWpvK1oxejk1bDlKTlgyRDJEdkpzeTl2OTg1OTV6Zk9lZjMrM3dmV29hYXhMZWx1RzFZWEhuL2lBVE54NXhndGxmMDdHenZQVGdzMHByT0F5TUJydnZKRnlyRVNyMEdOZG14ZSs5OXZPM2c2L2M2ekFkZW0ycHhseGZyQ2dGKyt1UTMxMDJ1ekM5Y3VXdGQwM29wcDJiemtmWEgrWXF1TWRxd2VYcXIxSGpIQ1dEd3pwL0dETjV1NmlnVjZvSzJLcE5rbHlvcGhqZm84ODAyazlldkdSZWROamZBOGZtYU1Kc1hqdnh3SXBwcERpZGp0dG5oK0Z6Z1hXVmVuOWpaaGRjTnpUNVNhdG9sUUxuMjBqaStkTHFUY3pZajRMZjJoNU01WTNma2lhc3JLZ2R6ZFNvZG41MVhrVi9mNHZKM2xwZU9uTnJWbEliNzJ6TElyVTk2VEg1WTFYLzhKOUR2TVVjWHhiN0EwY1gxN2hHU3JwOEpFOXdTY2JvdEtYQzZyUXBPZDVhM3V2MmcxcEFHcUN2N1laUnBYQUpZTjdwSVdCSmlkeWF5UUZnVWJKZmxvK3VDMUw1cCtOLzZwZ0Y4NDErQ2IraEl3TDhrMzlEcVNMUy9LT2ZRMTJMcVdzTCt1WWo5c3lMT1AySksvM1NtOEU5WHJIL3FNL2hIWEtwL0ZrVHVTM0xUY0dMVXZqaG4vVHMrV09jVWZ4M0MvdXFpTmxIVDZiblZzSWMySk1tTktManJRYlBLNWdUUEFieTZ4WVp4eVhCbU1vQStEa1Q5ZVJ1a0FiV2dVY3Jxcm9hVEFGbm5oZnJhTDB1M3poU3hMY212WTVtaXRVWDVtZG1TUGtoaktCU0kwVnR3UFplQnFsUnlIR0N2RGtNcUk0a09CcExvSUZONkJVOGFuMFRoaVl3ajdSTUs3LzlHTDRiektuWEJGUDJIaEh0d0tlL0I2U05sUHVFWEYrN3hZdVIxdEU5RWFzaHVqSkc3TUxjK2hSdmgzQUFyMWFqa1ZNQ2VYaWliamttc01NUWxWbWl4M2llZHJkeVBUWHdSOEdacll2OCtOY0c5RnR0NWJ3d3BockszUGtOMlhzY2NBVHZKcjhBN24xYWE1RmVVa2Z5S1BKSmZFVVVKZ0hpVU10RkNmb1U3a2wvQkpQUWZlSnpFUG1aSTZDYnZUTlJrUUF2YzBNUHpKbjZMMjJuczFqL1l2L012SXYvMUFydEhoUGV2VlkyMXNqRnJqV3c2QnRDekJzeXdNdzBLd3pYSzN1S0tBRnE4NnZuYzBuSVJ4d1NnakIyaWFuUngyczZPV3RxTHRZVTdZRE1lazBzNllLczM0TUJsM2d0bHNRTUU3akxXdXYvVlhZMTdkdHptTmoyOS80S2d6anJhZG1LdFRrQk5NajQ3K0IwTGI3eHZ4ZTUxVlMzM3lWTzNmLytCMVJOTkU0OTJqNTdZSXJHbTF0SERBNk5Qak5mU0gyeDcvYkcxZWMyamJULytWOS9wZkkxT2w3VzN1TTdNbUl5c25iTWEyOFNaQW8xR2I5aFI5L0M1OXc4OStaZFhSam9ma3ZkdWZXNUg0K3BqUDd1L2Z1Y0dxVzNQTTZRdkV3YjNOT1dnSk9wa0N1SXZuRmM0SmJsWU5SZXM4K0hrRGVEZjFDZFFnRkZqejBwa2tTS1o0ZVFsUnQ0MlRBaHVpQktDNVZJSjRxcDhDemtnVjBEQmNoMmdBWXBxbTFJamcxT3QrUmVpaEwwcEYvWEpJTVBjaDBtWDdtanV3K3hoUlFmT1R3M0gwSWZMSTNNZlJoQ0x5UkRFYVJJZTVIS1kzR29XVVY4ZEhaOHljNG0vSFJtOU1oS0syVTBrQWtwblkvV1h0TEVhYkN4ZmhJM1J3R1lSN0dWSFpQak1hQ1RUR1lsa3duWmVWSEk2WXUyc2lMZXpLWm1kYVJJNzVJckYycmtnUU1sczd2YkVVVHV6MGIwSjI0Y1IyNmNUOHpwaUtOcmh2QTVWc3J3T3crTHlPZ3hMeXV2STRLb1U3M3BtaisxSytlNW5kdDJoRkh0NHhIK0hzUCthWS9NNVlqMFk4QVY3U1Q3SDhtZytCM0ZkUlh3K3h5cjBjVlhVYVJueU9kSTdLbE9zbHRsaHV6TUZhSm45OXFNTU8yalFCL2RSSDNOK0RqVHVMU2hXcTZWQXowQ2ROUmNHUGJoOXNpTnJEcC9tYzFlRFZsSE9za0dJQWRPSndyaWdZOCtDeTRTNHEzM3M1WnVYWS9sNXNaK1pFMnZYenI5WnZzeWNVMkt4ZW5KTUFaYU91U0R2eHlYT3dIWGdlcWxHYXFPU0grSUxielNVdzBGbEFOY0k1NHV5MjRBclZxQmtSMEN0QjJlVzlXNUFuZkYycDdHZ2xJeUM1VDZTRnVJczBKUTB4dTBmQkJRc25xTDBvU1lvUERvMko4Uk9HcGlNK0tPbmxvM29yUmJwNmJibDBJU3YzRE5rOEFqZTZkWGRXK3RFaHFzOTNEODJ2Y1gzMU1qMDJQVHR2ZzJrcWNUYSswM0d5NnV1SEliMldyOVBNTCsxNmxlUDdiclF3cnhSVmJ2aTRQbDVkL2Z5cVZkMy9Id0t4d0dZRjQzR2Z3ZmxoaFAvZUdLMGsxSDQ2QmdiWFp3Q0crMVJzTkVoaXhNU0dCTFEwVkJPbVo4YUlCMmQ0SktncE4rTnptakpvTkxjdWZBNlBvTWRlVitGSFhrQzRYY250eU02aVNWRFlxK0l6bHJKREdGUHhxeTV3N2FBaG1qNVFsdHk0bXlwU0dGTFpkUVdWeEpiY3RMYXNtQ2lTbUxTeVFVelUxTERub3VmalZqRnRrUEl0a3FxRFhoN1NSbmxRYTh2MkN6SitXaUFxQk94cEdqVVNxQ1VGOXR3bmhha3pqVFlNRUVveG5iUUdzV2tLWXNLelRvZ2lySW9sSG1tb1RTSkU1N05PSFltZGNxTmpPTWxReGpWcUQ5REZTZGFhN3FZS0MwZG82ckQxWnNLcWpyb0VvS08xTUJxTnRJN1U2T3JoVWdmVFE2eDVvNUVPNm1pYjhGL2dGbnVpcjRiaU5vU29uVUJscmJBS2l2a1pjc0dmVGVMS0VKcWgwdlJkNFBYelpVZDBYY3JzTWZvdTFrUzlkMFNSUzBtVm9iMnBSQzBVRGZmUERoNmQxamJiYkIvWGhPdlo4RXF2ajJFVjdldDFFQXNBeHdTMVp0SWthS1BGQ2s2NDRvVTY1VWlSYmVpUWx3bHlCbzdQSDRtWkRpVG9YZWxicGVmWnVwa0tacnIwd3k5REhTdVA5UGNqZnBZRVZWUFBhRW9qdGtrdVl5ZEMxcEVnblUwaGl2VTZ0aTVXVk4ySG14Ym1hQThpRERnM0Zic0dVREEyS3RFRWRaNndNQTBZcml2RVJpWVdTTDZJR2lyY0U2bERtcFplYncvbFEyWUNBZm94WVFvZHhVTVVjWnNaWmVLWkxBeWpwaDZITGVBOTZpU3lEbVB2ZnpubWEzblovYVVzU1Boa3B3dnpwZnRtVG0vZGZxVGw4ZDI5ODljbVRwNGVicXZiL3J5d2Frck0vMUt3cVIvL05nd3ZURmNxcmRwK05oWTNjNHJ0UG5DMld2blIwYk9YenY3L0xXTG82TVhyNUhZV2ZVSXA2ZEVhalhxNTZlcFVDMTRDY1hLeTlSUVkwS3d1Z1pKN2tTWC9lSnN0NzBXWE5RTjI2QWJzSXNrNUJLSm5EM0E3a2kzQ0Jza2F5RFR5VHlINFpkdGFEMHMxd0laeW80NkUzSkZjRTEyeU9BcWJ5TDVUVVdnNXlUYmw2R29taXJ5VkVrNG1hUWJKSU9DblVxUFUwSUxSU2tvK1VFUW5TeDY1TU5iZmlNdCs4N2RlZXI5S3V1YU94N283Zi82MTVicFRUZHY5NDhkR1ZoMTUrcEtmWmJHNWV3YnY2dHgrcjNhcWw4OHYvMmxmUzNiS3pjZTJUajh5SEJsSmZvTGZheGtWY3lkRld0M3R2ZE9EWXNrQ3ZudXpNckpnY3FZZzUvd3R0N3p6NTE4S1VrVWFRbWYrN0FrNzA1MWs3S2krYStaR29yUHZJTVFzVkdTYzlFYldrMW92TGFyY3FFTms2SXRPQk1QSjVCQnpPMjNrVDM1eFNibnBjOCtUSjZ4dDRnYTRtUjVmTnpRSW5LZjNkeHJUQVBlQzZ5SmFxb0tDb2RFd0VRa0JRV1hIVkZYMVRhRks2eGk1bTkzNG1RZHYvVUg5L0p5djJNQ2FJM29vdnFvb01VSHRiZzZGSmM3ZlRnRndTQ0NUZ1BjMEVVV2ZTNmMyaGxtOW9Ga3A4RUY3N1lGT3FzVGs3bnQ4V1R1K0lWYzZpMmFwTnN4TkxXRGFXUzZHT2dkRkt3R2R0Qi9aQnFIaG9pZi90dWZuV0dxMmJlWkthSWhTeFlpOENkR1F4Yit5eG0ybEtudTZTRy96NytmK2ZmNU91WDNqM1BOZEFQL09lckh6VlF3MnpmTFpsRTZqbXppb29GQmI1b0w2WEdCb2g2NE1aUjUxbVNsSk9STjJOblZrME5qaWdCc1lWdFJEYUtBWkgreGxqNCswSjZuVVhtbEV0NjAzRzdsZmpONHFzMmkwcWhWOVhjRldqczBXcVBLNWUwbk51N25hbWszLzFmMERHMzRHYktpejhCZmxVMm11YURKUEt2Rk53NXFmU0V0cml2VEFyNE9Ic01FZXh0WjVERUNRRHdobTU2RTN1d3QyMDhlb2NOaEhlaklVM1ByTkNwcFo2Q2xRNk14cW5POWZkN0IwNjBXRlR6RC9IWGFUYzErNldkd1pINkdUeFkrUXJZSzVqclVGa3dQYm9zS3RCWkZUeEgwU2txREJKMlJVc0ZVYlJMVWsxelpJdlR6SXB3V1VPUkNQN2VaWjB1c1ZMMkNqRkxhVExhWlVQZG5JWmVtU0FoNlU3WmhhZWFHcGEzOUhYQlpEd2FtYW1kdmlzWm5vTzJaZXR6MkZkVHVzTTNFK1VFM3NUbTkvK0VJQ3VkMUk3TnpTK0RiWEJ1d3pYTUx0TVJrcFcwZ0M4OExlUTBnWUpPaXI1U0d2L1NtYkR6YWdpNDlQRzF1UjlmdCtTazZsQ1pwTDhQMnpsOW42bkUvKy8vYTYvaUs3RTNhZWJYSmV6VG9lWlRTeTloSDJHL2htc3VnRVRQejFJU1pwNGJYeTRJSGJLME5mMG4rd1NKTGRYNm9BSXFaMmVoUzM0YkpoL1p1OFBrMjdHMXYyN1BCeDJ4cjN3dk16bnM2MmliaDIwbXloek41NnhwdnAxNm5CTXBETlFBdkVPK0N1U1VKbndqSmpncFJKRi94c0pYVEdGdDhpeVlvT1ErMmRBZ2RxeGJOekFIQzRvem4rWlNtdlp3MDVoVGJvanM3OU9lbW5HS3JwU1RIYk03eFdOSDFQekhuSjNLOUxvN2hVNTdtaW95VkwxSW42SGN4OTlkTmhkMW5zbEZHRG1mM1FQMHc2TCtoS0RVNThEZVI3cHNDNTB2dU5ZdnU5U0ZtME1HOWJHRUNuWUJ2aDhjOWdTai9wYUxQTFFETlhVb0RqNk9wb2x2WHVHbitEYlRhT1VhRmVxQ1JtclZ6SVJPRTlvVW90S2ZvSHBPaEt1aVRaSXFiQzlhTHMxb04vcUpDQWlJMDV0ZXN3MitQYmdDRitkV1dPYm1rQWJWMk5jNi9xZmJEUzFKZEJtRFdhZ3htaFhkSkk4cURlSVhhakliREZTdlJVcndROUVtdFRxVWNHWTdOQXA0R2lZU3RTbUlOcGxLb2llcUJ5bWJGd3Jqb0l3WnZjZEd6YW0vUjkyaUdPM2ZCUEg3eXJmMmRlN2NPbFJWeE9xM0c3aEZYamJXTXYzQmZuNG5aYVJKdWhsaWFaZ1N6YWQ1aTZEMXdkcnhqVzI5RGFhNVdweTByM2JUendUWDN2VDI5eWNoMHQxckw3YUsvOVJ1L2ZYYlFVZE5WWGNLcmJZVmxoYmJsRDc5NXVGQ2ZYU2ZadmJiQ0xPSEk1YU1ybkdYVlpUazZqNjgva0Q5NDlxT244SmpUeTQ3enBTaEdVNk4zNGdDSjBtU3RUU0orWk1Vd2l4bkFpaHFIaUJaRFZBSGtKYUVnVm5WVjVvMW9kWVhSakR5TG5LZkMzbFNCODNoUzlPd3hZZ1ZST0dKemtGQUxLcHVjSGtBbDVwTkNtZ1lDMjhTRVk0ZkYwYWlveTNtRUFPcWFubUl2NnhCNjZZOS92WVkrM2F6VHFUL1M4OXJmODFwZHkzTCtUeG9oUzlCOG91TDN0TGJlL0Jzam9ELzluR1orcHNCc3BLYzAzTTFMOUhzMTh3K2FhWUYrdkdxK0dmb1FEQUkzMkJ0b0pQREdhQ2NxTWtJUWlzSkFRLzVSNGlHLzRCYmd2OERCTXRhM1poL2xmNG4rM2Fxc05oMlNJbkZ0aTBwY3F4TGxyYTBpaEp0d3B1d3d6SVVWRlNpaWRDMDdVZGdaMGdpWUxTQnJRR1JQMzVTZ2Z1MEI5V3RWUHUxV21LUWdmeDNZZFdhaXVNZkowUVo5ZGZHNUlMTngyN3lKcUY5djNuTG03cVlzblYrbmZ2VUh3MStVc3MrRTFhL0o4MS9pMzZHS1FZMjhrTUxMa1pBQldseEFNYkpnaG1lZnpjMHYxSkRhL1Z4c0V4WU5MTVRHZ1BodGpoZ3FLTVJpZ1htZ0NXR1d6VENzR09id3NHZ3VRTWJvTlZhbERDeHNCRWhJb2VjbTI4T3hJdDROTzg1dTg2enRiclAxVGdRZThQY2ZIcXFtdmZNZkVqdTZSbC9ZdjV4WGNkZjcrSDJNcG03czZHQlhSTWo3UDYxeS9WY0FBSGphWTJCa1lHQmdaT28vLzdEWks1N2Y1aXVEUEFjRENGejJ6L0tBMGYvUC9tdmh5R1RYQUhJNUdKaEFvZ0JybkF4M0FBQjQybU5nWkdCZzEvZ1h6Y0RBOGVMLzJmL1BPRElaZ0NJbzRDVUFvZ29IaG5qYWJaTmZTSk5SR01hZjcvejVWakQ2QTZiUWpjdFdDbEZnRVYxTGlWUjJGVEhuTUNqWHJ1WS9oQ0NDUmRDd1VBcHlZRVd5WkRVc0tLVXNwSnVJNk1ZS3VnZ0dJbDVFa3k0V1hnUWphckdlOTJ1TEpYN3c0em5uUGQ4NTV6M3ZjNDRxNEFocVBtY1VVQ2tVMUNybVRRWmQ1SzdiaExDOWlqN25MZVpWREU5SVZCOUFnbU9EVGdwRGFob3hhbHd0bG44eGRweVV5SlVLYmVRV0dTVkpjcEhNT2l0SUNXemZKNDlNeG5GVUVVM3VUUXpZWm15MkFlVHNQVnh5NjVBekw4azQreVgyL2NpcEtIN3JLVVJzQjRxbUFUbGZPM0lTZDg4d3AxY29pbG8veC9ZaGJCNGphSmV4SUd2Njh0aHEzbmxzdDF0d251ZDRwcGJLUDZqOXpPR2ozczJ6aDlDbHY3Qi9Hck02ZzI1cTJOU2pXNDJqMFd6RUNYTVNXZVo5eC9sYy9xQlh2WE84Y1h1UWxUZ0ptdzRxNStpOXlPcEJSTlFpRGpJK3B2UGNNNDhHUFlPZ0ZwMUVKL2R0VXpISFQ0MXoveHRTZjZrOTJ4blNYdEdRL0dNVXJqTzNGbmVZL1JuMDZRVFNISnVXT1Y0c2hEb2RSSTk0b2g2Z2wwUVoreVI3MjAwNHBBSjR5UDRJNDdkVmlma2xNR2VmNHBySEM1eGk3ZmQ0ZFY4SFgyLzVtM2poK1ZBRGZmQ1IxMlFiOGJ1ZDJGLzFZUzNNYTlMelJieW9RYndRejh3VTNrdmQxOE1kb0lvWDlmL0QydThrYVdlbFhDRGZ6VkZFL3Ztd0Z0YWwwaDZyUmJ3UXowUTNmR1d1eS95SE9iRldPMGl6VGdHK0ZxQ3E2aXpmeUFKcC9RdnkxSDdxT1k3eEhWVGgyaE84RnhOOEYwbDVJNVYza2lTaVE3enZ1K3hseEdXdXVvQTBtWk4xbVdmQVBzY3gvWlB0dzd4ekkyajhBeVYyNU9BQUFBQjQybU5nWU5DQnd4YUdJNHdubUJZeFo3QW9zWGl4MUxFY1lUVmhMV1BkdzNxTGpZZE5pNjJMN1JLN0Yvc25EZ2VPVDV3cG5GTzRFcml1Y0N0d3QzR3Y0RDdGL1lhbmhEZUZkd1dmSEY4VDN5bCtObjRiL2tQOHZ3UWtCQklFdGduY0VUUVNMQkM4SUNRbDFDZjBSYmhPZUozd0p4RVZrVnVpS3FJcG9uMmkrMFJ2aVhHSk9ZbEZpVFdJQzRrWGlWK1FNSkZZSS9GUFNrRXFUV3FOTkp0MGhIU0o5Q3NaTTVsSk1qOWs0MlNYeVNYSW5aT1hrUTlTa0ZCSVVKaWxjRVR4anVJUFpRbmxJaUE4cHBLazhrNDFRL1dXR29QYUdYVTU5U2NhQlJySE5ONXB2TlBjb0hsT1MwdXJRdXVCZHBKMmwvWXpIUzJkSkowenVueTZDYnA3OUNMMGhmUi9HTlFZbkROVU1Ld3hZak9hWkt4a1BNdkV6V1NDeVIxVEE5TjFwamZNV013Y3pCYVljNW4zbWYrektMQjRZem5CeXN3cXd1cVJ0Wmwxai9VYm14S2JJN1lpdHB2c291eVo3SGM0VEhPc2NJcHhObkcrNFpMbThzMjF6ODNMcmNadG5kc0g5d0QzUng0bEhzODhvenh2ZUZWNFMzbG5lRC96OGZMWjRDdm51OG1QeVMvQjc0bC9XWUJCd0phQVY0RldPS0JIWUZoZ1NtQk40SlRBYTBFU1FWRkJWNEo5Z284RS93bkpBY0pGSWJkQ2JvVzJoZjRKa3dtckNYc0VBT0kwbTZFQUFRQUFBT2tBWlFBRkFBQUFBQUFDQUFFQUFnQVdBQUFCQUFHQ0FBQUFBSGphMVZiTmJ1TmtGTDFPTzVCSlN3VUl6WUxGeUtwWXRGSkpVOVJCcUt3UWFNUkkvR2tHMFNXVDJFNWlOWWt6c2QxTUVRc2VnU1VQd0JLeFlzV0NOVDliTnJ3RGo4Q0NjOCs5anBPbXcweVJXS0FvOXZYMzNkL3puWHR0RWJrVjdNaUdCSnMzUllKdEVaY0RlUVZQSmpka0p3aGQzcEQ3UWR2bFRYa3QrTXJsRy9KKzhLM0x6OEgyVDVlZmw0ZU55bWRUT28ySEx0K1UyNDJ2WFc3ZCtMSHh2Y3RiMG1rT1hkNld1UG1OeXk4RVh6Yi9jbmxIamx1UFhYNVJtcTN2WEg1SldxMGZYUDVaYnJWK2N2a1g2YlIrZC9sWDJkbmFkUGszMmQ1NjJlUS9OdVRWcmR2eXJtUXlsUXVaU1NvREdVb2hvZXhKSlB1NHZ5RWRPY0kvbEI0MFF1eGR5Q2ZRSDBsWEpoSmo1UU1wNVF4UHVYeUJwL2R3VFNYQmp0NGpyTXh4TCtBMWxQdFl6L0dmeVRrMVFya0xUeFBHK3dnZXhsZ05aUmNldTFqTElMWHBYLzBrME12ZHFtUms5UlBTczFvOWtIdlFET1ZqVktLNnk3NVhQUnhnNVROYTUxalBxSHVFU0VjZXpXS2JsYUdoZVE4UVZXdWVQUVdCeS9XZlBNSG55UksyVisySGw2SmVsYkZadjQyblV5SmJVRWQzSS9oUXF5Nmt3cEhTMm90RnJOZVhZdFh4VTJpRmVGSmMxVnBSSHRQVEdkWXk2ZjhMQnJTdmJmRzAzZlZzYzNvMmJxV0xMSlVKZldLZ0RPbVRZU215VUI3SFJFd1JtRGlyVWlKWDg2bUU5dGl4dTl3RnA4UkVvODZCWkkrNW1wZFZ2N05uNkkrOUZjYUhqR25WYUM4czU3Rzd5TkxRMVBxSDZGTGw3VDF5cG1EOUNXME5vNGlaS2c3S0pLdGQ4N1d6TUdSeWFGcnZUU0VWN0pRQ2Zyb0xpNGlzNnpObXhMMEpLbFQ5R1JrNVk0OWI1Qk5tV2REdkVIc2FOM2IrS1p0Q2VZUzFsSEcwUW1PYTFqdjFYRFg2TGlmSDBIdTVYT0JyOWZmZ04vWjVsTWhqUnV0QnE2QlZIVE1tUmxOV2U3RlNhZWJUVHYxcG5SWGpOYS84SDJOYlB3NFdYWlhpSkxWdVBZVlBuVDBSdFhMdVJ1NWZzY3FJOEl4WVphejVnRHRkWDRzVy9XNjRuelAvRkxXTjZIZVZveVVzcDh3amNnYXFONjNwblB1VjNvaWRiM09nei9oajFsaDNSTXFZb1UrTk1YTzdZRzladnliME1WaHdSbXQ5eHhrM2RBNVY4MXZyR0hzdUZabzU3Uk5Pa2ZWZUhTRmV4ajJkTldmTzM0VFZ4ODZIT2xMZnA1cXRkSDNDVnpOaFRpU2UzTjlWSng5NGhHU0JxTEptd1BlVXNUZkdpbVV5WVZlRXhHN0ViT2VPamZWR2lVcG1TM21hSEs4d0lpZjNVMHlMR1NQWkc2eWFHQVdaTjJLMGFzcXVuMTIrY3JwMXpWM21sdkNVcXM0MEwzTS9UL1YyNEt4T25VdjF5UlhNeWV6c3FTVENKU3VwbUZ1ZFJ1NWFYYkRTdUZPc2NLVTYyWXlkTTZHRmRjZVFsVXd4SVE3eG0vUFg5a2xkdngzYW5EWmphRnhYLy9Mc3piRzJQSDAvWDV1K2gvL3h0OC9ldFd2WS8xOTlNYTFYbU1OT3NaeXk4OXUwR09HZWNXWWVJdHBkZU4rL2dnL1BabGxWV24rOTZMZFBqNzFwdWR1WDBhbFgvcUZQL2xDTzhlL2dlaUozNUMxY2ozR3R6dmhOb3FPVFJlZHZRWGFYN0lOOENaVUgvdWF5YmgvOURlZWlGTko0Mm0zUVYweFRjUlRIOGUrQjBrTFplK1BlcS9lV010d3Q1YnIzd0swbzBGWVJzRmdWRnhyQnJkR1krS1p4dmFoeHoyalVCelh1RlVmVUI1L2Q4VUY5MWNMOSsrWjUrZVQzLytlY25Cd2lhSzgvRlpUenYvb0VFaUdSWWlFU0MxRllzUkZOREhaaWlTT2VCQkpKSXBrVVVra2puUXd5eVNLYkhITEpJNThDT3RDUlRuU21DMTNwUm5kNjBKTmU5S1lQZmVsSGZ3YmdRRVBIU1NFdWlpaW1oRklHTW9qQkRHRW93eGlPR3c5bGVNTTdHb3hnSktNWXpSakdNbzd4VEdBaWs1ak1GS1l5amVsVU1JT1p6R0kyYzVqTFBPYXpnRXFKNGlndHRIS0QvWHhrTTd2WndRR09jMHlzYk9jOW05Z25Ob2xtbDhTd2xkdDhFRHNIT2NFdmZ2S2JJNXppQWZjNHpVSVdzWWNxSGxITmZSN3lqTWM4NFduNFRqVzg1RGt2T0lPUEgremxEYTk0alo4dmZHTWJpd213aEtYVVVzY2g2bGxHQTBFYUNiR2NGYXprTTZ0WVRSTnJXTWRhcm5LWVp0YXpnWTE4NVR2WE9NczVydk9XZHhJcmNSSXZDWklvU1pJc0taSXFhWkl1R1pJcFdaem5BcGU1d2gwdWNvbTdiT0drWkhPVFc1SWp1ZXlVUE1tWEFxdXZ0cW5CcjlsQ2RRR0h3K0UxbzlPTWJvZlNhK3JSbGVyZjQxS1d0cW1IKzVXYVVsYzZsWVZLbDdKSVdhd3NVZjZiNXpiVjFGeE5zOWNFZktGZ2RWVmxvOTk4MGcxVGwyRXBEd1hyMjRQTEtHdlQ4Smg3aE5YL0F0Yk9uSEVBZU5wRnpxc093a0FRQmREZGxyN3B1NlNLcE9qVkNJS2xOVFVFVEp1UTRKRUlMQmdrV0J6Zk1Fc1FoQS9pTjhxVWJoYzM1MDdtWmw2ME9RTzlrQkxNWmNVcHZkYTgwRmsxZ2FBdUlWbmhjS3JIb0xOTlJVRE5jbERaQXF3c2Z4T1Yra1JoUDV0Wi9yQzRnSUV3ZHdJNndsZ0xhQWg5TGpCQWFCOEJ1eXYwK2tJSGwvWk5ZSWh3MGc0VVhQRkRpS243VkJoWGl3TXlRSVpiU1I4WlRDVzl0dCtuTXlLVHFFM2NZL05QWWp5SjdwSUpNdDVManBCSjJyT0doSDBCczNWWDdRQUFBQUFCVnltNXlBQUEpIGZvcm1hdCgnd29mZicpO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG4vKiAgTGlua3MgICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAuY29ubmVjdGlvbi13cmFwIHtcbiAgICBzdHJva2U6ICMwMDAwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAxNTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogbW92ZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5jb25uZWN0aW9uLXdyYXA6aG92ZXIge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuNDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5jb25uZWN0aW9uIHtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIGNpcmNsZSB7XG4gICAgZmlsbDogI0M2NDI0Mjtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBwYXRoIHtcbiAgICBmaWxsOiAjRkZGRkZGO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IGluc2lkZSAubWFya2VyLXZlcnRleC1ncm91cCA8Zz4gZWxlbWVudCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci12ZXJ0ZXgge1xuICAgIGZpbGw6ICNkMGQ4ZTg7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLXZlcnRleDpob3ZlciB7XG4gICAgZmlsbDogIzVmYTllZTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItYXJyb3doZWFkIHtcbiAgICBmaWxsOiAjZDBkOGU4O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci1hcnJvd2hlYWQ6aG92ZXIge1xuICAgIGZpbGw6ICM1ZmE5ZWU7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IHVzZWQgdG8gcmVtb3ZlIGEgdmVydGV4ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLXZlcnRleC1yZW1vdmUtYXJlYSB7XG4gICAgZmlsbDogIzVmYTllZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICAgZmlsbDogd2hpdGU7XG59XG4vKiAgTGlua3MgICovXG5cbi8qICBMaW5rcyAgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAuY29ubmVjdGlvbi13cmFwIHtcbiAgICBzdHJva2U6ICMwMDAwMDA7XG4gICAgc3Ryb2tlLXdpZHRoOiAxNTtcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogbW92ZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAuY29ubmVjdGlvbi13cmFwOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAuNDtcbiAgICBzdHJva2Utb3BhY2l0eTogLjQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLmNvbm5lY3Rpb24ge1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tb2Rlcm4gLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIGNpcmNsZSB7XG4gICAgZmlsbDogI0ZGMDAwMDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubGluay10b29scyAudG9vbC1yZW1vdmUgcGF0aCB7XG4gICAgZmlsbDogI0ZGRkZGRjtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCBpbnNpZGUgLm1hcmtlci12ZXJ0ZXgtZ3JvdXAgPGc+IGVsZW1lbnQgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubWFya2VyLXZlcnRleCB7XG4gICAgZmlsbDogIzFBQkM5Qztcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubWFya2VyLXZlcnRleDpob3ZlciB7XG4gICAgZmlsbDogIzM0NDk1RTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubWFya2VyLWFycm93aGVhZCB7XG4gICAgZmlsbDogIzFBQkM5Qztcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubWFya2VyLWFycm93aGVhZDpob3ZlciB7XG4gICAgZmlsbDogI0YzOUMxMjtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgdXNlZCB0byByZW1vdmUgYSB2ZXJ0ZXggKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgIGZpbGw6IHdoaXRlO1xufVxuLyogIExpbmtzICAqL1xuIiwiLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbi8qIHN0eWxlbGludC1kaXNhYmxlIG1hdGVyaWFsL25vLXByZWZpeGVzICovXG4vKiBzdHlsZWxpbnQtZW5hYmxlICovXG4vKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbkBpbXBvcnQgdXJsKH5qb2ludGpzL2Rpc3Qvam9pbnQuY3NzKTtcbi5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC1zaXplOiA2cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDI0cHg7IH1cblxuLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgLm1hdC10eXBvZ3JhcGh5IGgxIHtcbiAgZm9udDogNDAwIDI0cHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTZweDsgfVxuXG4ubWF0LWgyLCAubWF0LXRpdGxlLCAubWF0LXR5cG9ncmFwaHkgaDIge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxNnB4OyB9XG5cbi5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAubWF0LXR5cG9ncmFwaHkgaDMge1xuICBmb250OiA0MDAgMTZweC8yOHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxNnB4OyB9XG5cbi5tYXQtaDQsIC5tYXQtc3ViaGVhZGluZy0xLCAubWF0LXR5cG9ncmFwaHkgaDQge1xuICBmb250OiA0MDAgMTVweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxNnB4OyB9XG5cbi5tYXQtaDUsIC5tYXQtdHlwb2dyYXBoeSBoNSB7XG4gIGZvbnQ6IDQwMCAxMS42MnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7IH1cblxuLm1hdC1oNiwgLm1hdC10eXBvZ3JhcGh5IGg2IHtcbiAgZm9udDogNDAwIDkuMzhweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxMnB4OyB9XG5cbi5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgZm9udDogNTAwIDE0cHgvMjRweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWJvZHksIC5tYXQtYm9keS0xLCAubWF0LXR5cG9ncmFwaHkge1xuICBmb250OiA0MDAgMTRweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG4gIC5tYXQtYm9keSBwLCAubWF0LWJvZHktMSBwLCAubWF0LXR5cG9ncmFwaHkgcCB7XG4gICAgbWFyZ2luOiAwIDAgMTJweDsgfVxuXG4ubWF0LXNtYWxsLCAubWF0LWNhcHRpb24ge1xuICBmb250OiA0MDAgMTJweC8yMHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtZGlzcGxheS00LCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTQge1xuICBmb250OiAzMDAgMTEycHgvMTEycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDU2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wNWVtOyB9XG5cbi5tYXQtZGlzcGxheS0zLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTMge1xuICBmb250OiA0MDAgNTZweC81NnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCA2NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTsgfVxuXG4ubWF0LWRpc3BsYXktMiwgLm1hdC10eXBvZ3JhcGh5IC5tYXQtZGlzcGxheS0yIHtcbiAgZm9udDogNDAwIDQ1cHgvNDhweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgNjRweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAwNWVtOyB9XG5cbi5tYXQtZGlzcGxheS0xLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTEge1xuICBmb250OiA0MDAgMzRweC80MHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCA2NHB4OyB9XG5cbi5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7IH1cblxuLm1hdC1jYXJkLXN1YnRpdGxlLFxuLm1hdC1jYXJkLWNvbnRlbnQge1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1jaGVja2JveCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWNoZWNrYm94LWxheW91dCAubWF0LWNoZWNrYm94LWxhYmVsIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cblxuLm1hdC1jaGlwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG4gIC5tYXQtY2hpcCAubWF0LWNoaXAtdHJhaWxpbmctaWNvbi5tYXQtaWNvbixcbiAgLm1hdC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDsgfVxuXG4ubWF0LXRhYmxlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtY2FsZW5kYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5IHtcbiAgZm9udC1zaXplOiAxM3B4OyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbi5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB0aCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4ubWF0LWRpYWxvZy10aXRsZSB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xMjU7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmctYm90dG9tOiAxLjM0Mzc1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24sXG4ubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTUwJTtcbiAgbGluZS1oZWlnaHQ6IDEuMTI1OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTsgfVxuICAubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uLFxuICAubWF0LWZvcm0tZmllbGQtc3VmZml4IC5tYXQtaWNvbi1idXR0b24gLm1hdC1pY29uIHtcbiAgICBoZWlnaHQ6IDEuMTI1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIGJvcmRlci10b3A6IDAuODQzNzVlbSBzb2xpZCB0cmFuc3BhcmVudDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjM0Mzc1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIHtcbiAgdG9wOiAtMC44NDM3NWVtO1xuICBwYWRkaW5nLXRvcDogMC44NDM3NWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS4zNDM3NWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMzQzNzVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBmb250LXNpemU6IDc1JTtcbiAgbWFyZ2luLXRvcDogMC42NjY2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNzkxNjY2NjdlbSk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMjVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC40Mzc1ZW0gMDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxcHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzMzMzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDFweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNWVtKSBzY2FsZSgwLjc1KSBwZXJzcGVjdGl2ZSgxMDBweCkgdHJhbnNsYXRlWigwLjAwMTAycHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIzZW0pIHNjYWxlKDAuNzUpO1xuICB3aWR0aDogMTMzLjMzMzM1MzMzJTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjI4MTI1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDEuMjVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHtcbiAgbWFyZ2luLXRvcDogMC41NDE2NjY2N2VtO1xuICB0b3A6IGNhbGMoMTAwJSAtIDEuNjY2NjY2NjdlbSk7IH1cblxuQG1lZGlhIHByaW50IHtcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjJlbSkgc2NhbGUoMC43NSk7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWZvcm0tZmllbGQtYXV0b2ZpbGwtY29udHJvbDotd2Via2l0LWF1dG9maWxsICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTIxZW0pIHNjYWxlKDAuNzUpOyB9XG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTJlbSkgc2NhbGUoMC43NSk7IH0gfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwIDAuNzVlbSAwOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjA5Mzc1ZW07XG4gIG1hcmdpbi10b3A6IC0wLjVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuNTkzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMWVtIDAgMWVtIDA7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuODQzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdC5tYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNTkzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNTkzNzRlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzQzMzMlOyB9XG5cbi5tYXQtZ3JpZC10aWxlLWhlYWRlcixcbi5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIgLm1hdC1saW5lLFxuICAubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMiksXG4gICAgLm1hdC1ncmlkLXRpbGUtZm9vdGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6IDEycHg7IH1cblxuaW5wdXQubWF0LWlucHV0LWVsZW1lbnQge1xuICBtYXJnaW4tdG9wOiAtMC4wNjI1ZW07IH1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4ubWF0LXBhZ2luYXRvcixcbi5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEycHg7IH1cblxuLm1hdC1yYWRpby1idXR0b24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1zZWxlY3Qge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGhlaWdodDogMS4xMjVlbTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwsIC5tYXQtc3RlcHBlci1ob3Jpem9udGFsIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtc3RlcC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4ubWF0LXN0ZXAtc3ViLWxhYmVsLWVycm9yIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxuXG4ubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtdGFiLWdyb3VwIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC10b29sYmFyLFxuLm1hdC10b29sYmFyIGgxLFxuLm1hdC10b29sYmFyIGgyLFxuLm1hdC10b29sYmFyIGgzLFxuLm1hdC10b29sYmFyIGg0LFxuLm1hdC10b29sYmFyIGg1LFxuLm1hdC10b29sYmFyIGg2IHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwOyB9XG5cbi5tYXQtdG9vbHRpcCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLXRvcDogNnB4O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4OyB9XG5cbi5tYXQtdG9vbHRpcC1oYW5kc2V0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOHB4OyB9XG5cbi5tYXQtbGlzdC1pdGVtIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtbGlzdC1vcHRpb24ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDE2cHg7IH1cbiAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuICAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7IH1cbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGluZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4ubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1zdWJoZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG5cbi5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICBmb250OiA1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC10cmVlIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtdHJlZS1ub2RlLFxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG5cbi5tYXQtcmlwcGxlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7IH1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtIDBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwKTsgfVxuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxuXG4uY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gIGJvcmRlcjogMDtcbiAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1hcmdpbjogLTFweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMXB4O1xuICBvdXRsaW5lOiAwO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTsgfVxuXG4uY2RrLW92ZXJsYXktY29udGFpbmVyLCAuY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDA7IH1cbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lcjplbXB0eSB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuXG4uY2RrLWdsb2JhbC1vdmVybGF5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7IH1cblxuLmNkay1vdmVybGF5LXBhbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxuLmNkay1vdmVybGF5LWJhY2tkcm9wIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQwMG1zIGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpO1xuICBvcGFjaXR5OiAwOyB9XG4gIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICBvcGFjaXR5OiAxOyB9XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgICAgIC5jZGstb3ZlcmxheS1iYWNrZHJvcC5jZGstb3ZlcmxheS1iYWNrZHJvcC1zaG93aW5nIHtcbiAgICAgICAgb3BhY2l0eTogMC42OyB9IH1cblxuLmNkay1vdmVybGF5LWRhcmstYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzIpOyB9XG5cbi5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCwgLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICBvcGFjaXR5OiAwOyB9XG5cbi5jZGstb3ZlcmxheS1jb25uZWN0ZWQtcG9zaXRpb24tYm91bmRpbmctYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4td2lkdGg6IDFweDtcbiAgbWluLWhlaWdodDogMXB4OyB9XG5cbi5jZGstZ2xvYmFsLXNjcm9sbGJsb2NrIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsOyB9XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQge1xuICAvKiEqLyB9XG5cbkBrZXlmcmFtZXMgY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kIHtcbiAgLyohKi8gfVxuXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOi13ZWJraXQtYXV0b2ZpbGwge1xuICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQ7IH1cblxuLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWVuZDsgfVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUge1xuICByZXNpemU6IG5vbmU7IH1cblxudGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDJweCAwICFpbXBvcnRhbnQ7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94ICFpbXBvcnRhbnQ7IH1cblxuLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTsgfVxuXG4ubWF0LW9wdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtb3B0aW9uOmhvdmVyOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCksIC5tYXQtb3B0aW9uOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cbiAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuICAubWF0LW9wdGlvbi5tYXQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtb3B0aW9uLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtYWNjZW50IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC13YXJuIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtb3B0Z3JvdXAtZGlzYWJsZWQgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3g6OmFmdGVyIHtcbiAgICBjb2xvcjogI2ZhZmFmYTsgfVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC1wc2V1ZG8tY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSxcbi5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LWFjY2VudCAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogI2ZmNDA4MTsgfVxuXG4ubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogIzNmNTFiNTsgfVxuXG4ubWF0LXdhcm4gLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgYmFja2dyb3VuZDogIzIxOTZmMzsgfVxuXG4ubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wc2V1ZG8tY2hlY2tib3gtZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjYjBiMGIwOyB9XG5cbi5tYXQtZWxldmF0aW9uLXowIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejMge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo0IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejUge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDVweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16NiB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNnB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMThweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16NyB7XG4gIGJveC1zaGFkb3c6IDBweCA0cHggNXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggN3B4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16OSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOXB4IDEycHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTZweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTAge1xuICBib3gtc2hhZG93OiAwcHggNnB4IDZweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEwcHggMTRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDRweCAxOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxMSB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTFweCAxNXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDIwcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejEyIHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA4cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMnB4IDE3cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTMge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEzcHggMTlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxNCB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOXB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTRweCAyMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI2cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE1IHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCA5cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNXB4IDIycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMjhweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTYge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTcge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxN3B4IDI2cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTgge1xuICBib3gtc2hhZG93OiAwcHggOXB4IDExcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOHB4IDI4cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTkge1xuICBib3gtc2hhZG93OiAwcHggOXB4IDEycHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxOXB4IDI5cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA3cHggMzZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MjAge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjBweCAzMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDM4cHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejIxIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTNweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIxcHggMzNweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MHB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyMiB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDE0cHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMnB4IDM1cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggNDJweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MjMge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNHB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjNweCAzNnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejI0IHtcbiAgYm94LXNoYWRvdzogMHB4IDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDI0cHggMzhweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYXBwLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXRoZW1lLWxvYWRlZC1tYXJrZXIge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAgIC5tYXQtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1hY3RpdmUpOm5vdCg6aG92ZXIpOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1OyB9XG4gIEBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBvdXRsaW5lOiBzb2xpZCAxcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAwOyB9IH1cblxuLm1hdC1iYWRnZS1hY2NlbnQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtYmFkZ2Utd2FybiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMyMTk2ZjM7IH1cblxuLm1hdC1iYWRnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4ubWF0LWJhZGdlLWhpZGRlbiAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBub25lOyB9XG5cbi5tYXQtYmFkZ2UtZGlzYWJsZWQgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2I5YjliOTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC42KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBub25lOyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtOHB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlbG93IC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGJvdHRvbTogLThweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTE2cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMTZweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTE2cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xNnB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtOHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLThweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLThweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLThweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMjJweDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBsaW5lLWhlaWdodDogMjJweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTFweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtMTFweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0yMnB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yMnB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTIycHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMjJweDsgfVxuXG4ubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xMXB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xMXB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTExcHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTFweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyOHB4O1xuICBoZWlnaHQ6IDI4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFib3ZlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHRvcDogLTE0cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtMTRweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTI4cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtMjhweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogLTI4cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yOHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTRweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xNHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTRweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE0cHg7IH1cblxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSB7XG4gICAgY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQge1xuICAgIGNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIHtcbiAgICBjb2xvcjogIzIxOTZmMzsgfVxuICAubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cbiAgLm1hdC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cbiAgLm1hdC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b25bZGlzYWJsZWRdIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG4gIC5tYXQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtaWNvbi1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1zdHJva2VkLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBvcGFjaXR5OiAwLjE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yOyB9XG5cbi5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICBiYWNrZ3JvdW5kOiBibGFjazsgfVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZsYXQtYnV0dG9uLCAubWF0LXJhaXNlZC1idXR0b24sIC5tYXQtZmFiLCAubWF0LW1pbmktZmFiIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm4sIC5tYXQtZmFiLm1hdC13YXJuLCAubWF0LW1pbmktZmFiLm1hdC13YXJuIHtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXByaW1hcnksIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1mYWIubWF0LXByaW1hcnksIC5tYXQtbWluaS1mYWIubWF0LXByaW1hcnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1mYWIubWF0LWFjY2VudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZsYXQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtZmFiLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiW2Rpc2FibGVkXVtkaXNhYmxlZF0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuXG4ubWF0LXN0cm9rZWQtYnV0dG9uOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSksIC5tYXQtZmxhdC1idXR0b246bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1yYWlzZWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mYWI6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSwgLm1hdC1taW5pLWZhYjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSwgLm1hdC1taW5pLWZhYjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pLCAubWF0LW1pbmktZmFiW2Rpc2FibGVkXTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICBib3gtc2hhZG93OiBub25lOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZSAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1idXR0b24tdG9nZ2xlLXZlcnRpY2FsIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gIGJvcmRlci1sZWZ0OiBub25lO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7IH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRiZGJkOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJvcmRlcjogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtY2FyZDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtY2FyZC5tYXQtY2FyZC1mbGF0Om5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWNhcmQtc3VidGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgZmlsbDogI2ZhZmFmYTsgfVxuXG4ubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgc3Ryb2tlOiAjZmFmYWZhICFpbXBvcnRhbnQ7IH1cbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYmxhY2stb24td2hpdGUpIHtcbiAgICAubWF0LWNoZWNrYm94LWNoZWNrbWFyay1wYXRoIHtcbiAgICAgIHN0cm9rZTogIzAwMCAhaW1wb3J0YW50OyB9IH1cblxuLm1hdC1jaGVja2JveC1taXhlZG1hcmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhOyB9XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtYWNjZW50IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LXdhcm4gLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1jaGVja2VkIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1kaXNhYmxlZC5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjBiMGIwOyB9XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQ6bm90KC5tYXQtY2hlY2tib3gtY2hlY2tlZCkgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gIGJvcmRlci1jb2xvcjogI2IwYjBiMDsgfVxuXG4ubWF0LWNoZWNrYm94LWRpc2FibGVkIC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLm1hdC1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC41OyB9IH1cblxuQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgfSB9XG5cbi5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtY2hlY2tib3g6bm90KC5tYXQtY2hlY2tib3gtZGlzYWJsZWQpLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXdhcm4gLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwIC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXA6bm90KC5tYXQtY2hpcC1kaXNhYmxlZCk6YWN0aXZlIHtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDNweCA0cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSAubWF0LWNoaXAtcmVtb3ZlOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjU0OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC40OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IGJsYWNrOyB9XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtYWNjZW50IC5tYXQtY2hpcC1yZW1vdmUge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvcGFjaXR5OiAwLjQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYmxlIHRoZWFkLCAubWF0LXRhYmxlIHRib2R5LCAubWF0LXRhYmxlIHRmb290LFxubWF0LWhlYWRlci1yb3csIG1hdC1yb3csIG1hdC1mb290ZXItcm93LFxuW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuLm1hdC10YWJsZS1zdGlja3kge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0OyB9XG5cbm1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtY2FsZW5kYXItYXJyb3cge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLW5leHQtYnV0dG9uLFxuLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQgLm1hdC1jYWxlbmRhci1wcmV2aW91cy1idXR0b24ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWNhbGVuZGFyLXRhYmxlLWhlYWRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyLWRpdmlkZXI6OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSxcbi5jZGsta2V5Ym9hcmQtZm9jdXNlZCAubWF0LWNhbGVuZGFyLWJvZHktYWN0aXZlID4gLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwtY29udGVudDpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSxcbi5jZGstcHJvZ3JhbS1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTgpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjQpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTsgfVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC40KTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LWRpc2FibGVkID4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAxNTAsIDI0MywgMC40KTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB3aGl0ZTsgfVxuXG4ubWF0LWRhdGVwaWNrZXItY29udGVudC10b3VjaCB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC1hY2NlbnQge1xuICAgIGNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlLm1hdC13YXJuIHtcbiAgICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWRpYWxvZy1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWRpdmlkZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZGl2aWRlci12ZXJ0aWNhbCB7XG4gIGJvcmRlci1yaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYWN0aW9uLXJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkuY2RrLWtleWJvYXJkLWZvY3VzZWQsIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG5AbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdCgubWF0LWV4cGFuZGVkKTpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSlcbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7IH0gfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24sXG4ubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IGluaGVyaXQ7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxuXG4ubWF0LWhpbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLm1hdC1hY2NlbnQge1xuICAgIGNvbG9yOiAjZmY0MDgxOyB9XG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LXdhcm4ge1xuICAgIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LXdhcm4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKS5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCxcbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICAgIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZXJyb3Ige1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLXN0YW5kYXJkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC40MikgMCUsIHJnYmEoMCwgMCwgMCwgMC40MikgMzMlLCB0cmFuc3BhcmVudCAwJSk7XG4gIGJhY2tncm91bmQtc2l6ZTogNHB4IDEwMCU7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmU6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDYpOyB9XG5cbi5tYXQtaWNvbi5tYXQtcHJpbWFyeSB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtaWNvbi5tYXQtYWNjZW50IHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1pY29uLm1hdC13YXJuIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtaW5wdXQtZWxlbWVudDpkaXNhYmxlZCxcbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWlucHV0LWVsZW1lbnQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuICAubWF0LWlucHV0LWVsZW1lbnQ6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG4gIC5tYXQtaW5wdXQtZWxlbWVudDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cbiAgLm1hdC1pbnB1dC1lbGVtZW50Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cblxuLm1hdC1hY2NlbnQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCxcbi5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtbGlzdC1iYXNlIC5tYXQtc3ViaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1saXN0LWl0ZW0tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlOyB9XG5cbi5tYXQtbGlzdC1vcHRpb246aG92ZXIsIC5tYXQtbGlzdC1vcHRpb246Zm9jdXMsXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmhvdmVyLFxuLm1hdC1uYXYtbGlzdCAubWF0LWxpc3QtaXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuLm1hdC1tZW51LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgLm1hdC1tZW51LXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtbWVudS1pdGVtIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtbWVudS1pdGVtW2Rpc2FibGVkXSwgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdOjphZnRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1tZW51LWl0ZW0gLm1hdC1pY29uLW5vLWNvbG9yLFxuLm1hdC1tZW51LWl0ZW0tc3VibWVudS10cmlnZ2VyOjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtbWVudS1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSxcbi5tYXQtbWVudS1pdGVtLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KFtkaXNhYmxlZF0pLFxuLm1hdC1tZW51LWl0ZW0taGlnaGxpZ2h0ZWQ6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG4ubWF0LXBhZ2luYXRvciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4ubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LXBhZ2luYXRvci1maXJzdCxcbi5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1kZWNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4ubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXSAubWF0LXBhZ2luYXRvci1maXJzdCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWxhc3Qge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNjNWNhZTk7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M1Y2FlOTsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogI2ZmODBhYjsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgwYWI7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gIGZpbGw6ICNiYmRlZmI7IH1cblxuLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4gLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiZGVmYjsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1wcm9ncmVzcy1zcGlubmVyIGNpcmNsZSwgLm1hdC1zcGlubmVyIGNpcmNsZSB7XG4gIHN0cm9rZTogIzNmNTFiNTsgfVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LWFjY2VudCBjaXJjbGUsIC5tYXQtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSB7XG4gIHN0cm9rZTogI2ZmNDA4MTsgfVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlLCAubWF0LXNwaW5uZXIubWF0LXdhcm4gY2lyY2xlIHtcbiAgc3Ryb2tlOiAjMjE5NmYzOyB9XG5cbi5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeS5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnk6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50OmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2FybiAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4ubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuOmFjdGl2ZSAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IH1cblxuLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXNlbGVjdC1wbGFjZWhvbGRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG5cbi5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LXNlbGVjdC1wYW5lbCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gIC5tYXQtc2VsZWN0LXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNHB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtc2VsZWN0LXBhbmVsIC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tbXVsdGlwbGUpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtcHJpbWFyeSAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC13YXJuIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZCAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1kcmF3ZXItY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1kcmF3ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1kcmF3ZXIubWF0LWRyYXdlci1wdXNoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWRyYXdlcjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZHJhd2VyLXNpZGUge1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmQge1xuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJpZ2h0OiBub25lOyB9XG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUubWF0LWRyYXdlci1lbmQge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDY0LCAxMjksIDAuNTQpOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDYzLCA4MSwgMTgxLCAwLjU0KTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtcHJpbWFyeS5tYXQtY2hlY2tlZCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMywgMTUwLCAyNDMsIDAuNTQpOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlOm5vdCgubWF0LWNoZWNrZWQpIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XG4gIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUtYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtYWNjZW50IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC4yKTsgfVxuXG4ubWF0LXNsaWRlcjpob3ZlciAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kLFxuLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG5cbi5tYXQtc2xpZGVyLWRpc2FibGVkOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZSAubWF0LXNsaWRlci1mb2N1cy1yaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZyk6aG92ZXIgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3Zlci5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iLCAubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpLmNkay1mb2N1c2VkLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cblxuLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IH1cblxuLm1hdC1zbGlkZXItaG9yaXpvbnRhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTsgfVxuXG4ubWF0LXNsaWRlci12ZXJ0aWNhbCAubWF0LXNsaWRlci10aWNrcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNyksIHJnYmEoMCwgMCwgMCwgMC43KSAycHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50KTsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyLmNkay1rZXlib2FyZC1mb2N1c2VkLCAubWF0LXN0ZXAtaGVhZGVyLmNkay1wcm9ncmFtLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogbm9uZTsgfSB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLFxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVkaXQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1O1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1hY3RpdmUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtc3RlcHBlci1ob3Jpem9udGFsLCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXN0ZXBwZXItdmVydGljYWwtbGluZTo6YmVmb3JlIHtcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjpiZWZvcmUsXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmFmdGVyLFxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gIGNvbG9yOiAjNzU3NTc1OyB9XG5cbi5tYXQtdGFiLW5hdi1iYXIsXG4ubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIgLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1oZWFkZXIge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxuXG4ubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtdGFiLWdyb3VwW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10gLm1hdC10YWItaGVhZGVyLFxuLm1hdC10YWItbmF2LWJhcltjbGFzcyo9J21hdC1iYWNrZ3JvdW5kLSddIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgYm9yZGVyLXRvcDogbm9uZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCAyMDIsIDIzMywgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeS5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjgsIDE3MSwgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIyMiwgMjUxLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuIC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDIwMiwgMjMzLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxMjgsIDE3MSwgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGlua3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAyMjIsIDI1MSwgMC4zKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rcywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmssIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQge1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpOyB9XG5cbi5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHdoaXRlc21va2U7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZDogIzNmNTFiNTtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10b29sYmFyLm1hdC1hY2NlbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZjQwODE7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdG9vbGJhci5tYXQtd2FybiB7XG4gICAgYmFja2dyb3VuZDogIzIxOTZmMztcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUsXG4gIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjsgfVxuICAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXRvb2xiYXIgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgLm1hdC10b29sYmFyIC5tYXQtc2VsZWN0LXZhbHVlLFxuICAubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgIGNvbG9yOiBpbmhlcml0OyB9XG4gIC5tYXQtdG9vbGJhciAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7IH1cblxuLm1hdC10b29sdGlwIHtcbiAgYmFja2dyb3VuZDogcmdiYSg5NywgOTcsIDk3LCAwLjkpOyB9XG5cbi5tYXQtdHJlZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbi5tYXQtdHJlZS1ub2RlLFxuLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43KTtcbiAgYmFja2dyb3VuZDogIzMyMzIzMjtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbmh0bWwsIGJvZHkge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5hY2NvcmRpb24tY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjFmZjsgfVxuXG4uYWNjb3JkaW9uLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4YWZmOyB9XG5cbi5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWY2OyB9XG4iLCJcbi8vIEN1c3RvbSBUaGVtaW5nIGZvciBBbmd1bGFyIE1hdGVyaWFsXG4vLyBGb3IgbW9yZSBpbmZvcm1hdGlvbjogXG4vLyAtIGh0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9ndWlkZS90aGVtaW5nXG4vLyAtIGh0dHBzOi8vbWVkaXVtLmNvbS9AdG9tYXN0cmFqYW4vdGhlLWNvbXBsZXRlLWd1aWRlLXRvLWFuZ3VsYXItbWF0ZXJpYWwtdGhlbWVzLTRkMTY1YTlkMjRkMVxuLy9cbkBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nJztcbi8vIFBsdXMgaW1wb3J0cyBmb3Igb3RoZXIgY29tcG9uZW50cyBpbiB5b3VyIGFwcC5cblxuLy8gSW5jbHVkZSB0aGUgY29tbW9uIHN0eWxlcyBmb3IgQW5ndWxhciBNYXRlcmlhbC4gV2UgaW5jbHVkZSB0aGlzIGhlcmUgc28gdGhhdCB5b3Ugb25seVxuLy8gaGF2ZSB0byBsb2FkIGEgc2luZ2xlIGNzcyBmaWxlIGZvciBBbmd1bGFyIE1hdGVyaWFsIGluIHlvdXIgYXBwLlxuLy8gQmUgc3VyZSB0aGF0IHlvdSBvbmx5IGV2ZXIgaW5jbHVkZSB0aGlzIG1peGluIG9uY2UhXG5AaW5jbHVkZSBtYXQtY29yZSgpO1xuXG4vLyBpbXBvcnQgYXBwIHRoZW1lXG5AaW1wb3J0ICd0aGVtZS5zY3NzJztcblxuLy8gSW5jbHVkZSB0aGVtZSBzdHlsZXMgZm9yIGNvcmUgYW5kIGVhY2ggY29tcG9uZW50IHVzZWQgaW4geW91ciBhcHAuXG4vLyBBbHRlcm5hdGl2ZWx5LCB5b3UgY2FuIGltcG9ydCBhbmQgQGluY2x1ZGUgdGhlIHRoZW1lIG1peGlucyBmb3IgZWFjaCBjb21wb25lbnRcbi8vIHRoYXQgeW91IGFyZSB1c2luZy5cbkBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdGhlbWUoJG5nLWpvaW50LWFwcC10aGVtZSk7XG5cbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cblxuaHRtbCwgYm9keSB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7IG1hcmdpbjogMDsgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi8vIGpvaW50anMgbGlicmFyeSBzdHlsZXMgaW1wb3J0XG5AaW1wb3J0ICd+am9pbnRqcy9kaXN0L2pvaW50LmNzcyc7ICIsIi8vIEltcG9ydCBhbmd1bGFyIG1hdHJpYWwgdGhlbWluZyBmdW5jdGlvbnNcbkBpbXBvcnQgJ35AYW5ndWxhci9tYXRlcmlhbC90aGVtaW5nJztcbi8vIEltcG9ydCBhcHAgY3VzdG9tIHRoZW1lXG5AaW1wb3J0ICcuLi9zdHlsZXMuc2Nzcyc7XG5cbi5hY2NvcmRpb24tY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC13YXJuLCBBMTAwKTtcbn1cblxuLmFjY29yZGlvbi1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRuZy1qb2ludC1hcHAtd2FybiwgQTIwMCk7XG59XG5cbi5tYWluLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC1wcmltYXJ5LCA1MCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.initialized = false;
        this.title = 'ng-jointjs';
        this.examplesList = [
            {
                main: 'shapes-standard-examples',
                subs: [
                    'standard-elements',
                    'standard-links'
                ]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.initialized = true;
    };
    AppComponent.prototype.onOverview = function (main) {
        this.router.navigate([main]);
    };
    AppComponent.prototype.getMainTitle = function (main) {
        return main.split('-')[0];
    };
    AppComponent.prototype.getSubTitle = function (sub) {
        return sub.split('-')[1];
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes-standard-examples */ "./src/app/shapes-standard-examples/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_7__["AppMaterialModule"],
                _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_8__["ShapesStandardExamplesModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/overview.component.html":
/*!*****************************************!*\
  !*** ./src/app/overview.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  overview works!\n</p>\n"

/***/ }),

/***/ "./src/app/overview.component.scss":
/*!*****************************************!*\
  !*** ./src/app/overview.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/overview.component.ts":
/*!***************************************!*\
  !*** ./src/app/overview.component.ts ***!
  \***************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OverviewComponent = /** @class */ (function () {
    function OverviewComponent() {
    }
    OverviewComponent.prototype.ngOnInit = function () {
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found.component.ts":
/*!*********************************************!*\
  !*** ./src/app/page-not-found.component.ts ***!
  \*********************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: "\n    <p>\n      page-not-found works!\n    </p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shapes-standard-examples/index.ts ***!
  \***************************************************/
/*! exports provided: ShapesStandardExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes_standard_examples_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes-standard-examples.module */ "./src/app/shapes-standard-examples/shapes-standard-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesModule", function() { return _shapes_standard_examples_module__WEBPACK_IMPORTED_MODULE_0__["ShapesStandardExamplesModule"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ShapesStandardExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesRoutingModule", function() { return ShapesStandardExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-standard-examples.component */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts");
/* harmony import */ var _standard_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./standard-elements */ "./src/app/shapes-standard-examples/standard-elements/index.ts");
/* harmony import */ var _standard_links__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard-links */ "./src/app/shapes-standard-examples/standard-links/index.ts");






var demoModuleRoutes = [
    { path: 'shapes-standard-examples', component: _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardExamplesComponent"],
        children: [
            { path: 'standard-elements', component: _standard_elements__WEBPACK_IMPORTED_MODULE_4__["StandardElementsComponent"] },
            { path: 'standard-links', component: _standard_links__WEBPACK_IMPORTED_MODULE_5__["StandardLinksComponent"] }
        ]
    }
];
var ShapesStandardExamplesRoutingModule = /** @class */ (function () {
    function ShapesStandardExamplesRoutingModule() {
    }
    ShapesStandardExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesStandardExamplesRoutingModule);
    return ShapesStandardExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shapes-standard-examples works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zaGFwZXMtc3RhbmRhcmQtZXhhbXBsZXMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.component.ts ***!
  \********************************************************************************/
/*! exports provided: ShapesStandardExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesComponent", function() { return ShapesStandardExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShapesStandardExamplesComponent = /** @class */ (function () {
    function ShapesStandardExamplesComponent() {
    }
    ShapesStandardExamplesComponent.prototype.ngOnInit = function () {
    };
    ShapesStandardExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-standard-examples',
            template: __webpack_require__(/*! ./shapes-standard-examples.component.html */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-standard-examples.component.scss */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShapesStandardExamplesComponent);
    return ShapesStandardExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/shapes-standard-examples.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/shapes-standard-examples.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ShapesStandardExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardExamplesModule", function() { return ShapesStandardExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shapes-standard-examples.component */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts");
/* harmony import */ var _standard_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./standard-elements */ "./src/app/shapes-standard-examples/standard-elements/index.ts");
/* harmony import */ var _standard_links__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard-links */ "./src/app/shapes-standard-examples/standard-links/index.ts");
/* harmony import */ var _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes-standard-examples-routing.module */ "./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts");








var ShapesStandardExamplesModule = /** @class */ (function () {
    function ShapesStandardExamplesModule() {
    }
    ShapesStandardExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_4__["ShapesStandardExamplesComponent"],
                _standard_elements__WEBPACK_IMPORTED_MODULE_5__["StandardElementsComponent"],
                _standard_links__WEBPACK_IMPORTED_MODULE_6__["StandardLinksComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardModule"],
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesStandardExamplesRoutingModule"]
            ],
            exports: [
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesStandardExamplesRoutingModule"]
            ]
        })
    ], ShapesStandardExamplesModule);
    return ShapesStandardExamplesModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/index.ts ***!
  \*********************************************************************/
/*! exports provided: StandardElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-elements.component */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardElementsComponent", function() { return _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__["StandardElementsComponent"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Based on https://resources.jointjs.com/docs/jointjs/v2.2/demo/shapes/shapes.standard.js -->\n<ng-joint-dia-paper\n    [width]=\"650\"\n    [height]=\"800\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph>\n\n      <ng-joint-shapes>\n\n        <ng-joint-shapes-standard>\n\n          <ng-joint-standard-bordered-image\n            [id]=\"'bordered-image'\"\n            [x]=\"225\" [y]=\"410\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.BorderedImage' }\"\n            [label]=\"{ text: 'Bordered\\nImage' }\"\n            [border]=\"{ rx: '5' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-bordered-image>\n\n          <ng-joint-standard-circle (elementPointerClick)=\"onElementPointerClick('circle')\"\n            [id]=\"'circle'\"\n            [x]=\"200\" [y]=\"10\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Circle' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Circle' }\">\n          </ng-joint-standard-circle>\n\n          <ng-joint-standard-cylinder\n            [id]=\"'cylinder'\"\n            [x]=\"525\" [y]=\"75\"\n            [width]=\"100\" [height]=\"200\"\n            [root]=\"{ title: 'standard.Cylinder', tabindex: '7' }\"\n            [body]=\"{ fill: 'fe854f', fillOpacity: '0.5' }\"\n            [top]=\"{ fill: 'fe854f', fillOpacity: '0.8' }\"\n            [label]=\"{ text: 'Cylinder' }\"\n            [topRy]=\"'10%'\">\n          </ng-joint-standard-cylinder>\n\n          <ng-joint-standard-ellipse\n            [id]=\"'ellipse'\"\n            [x]=\"350\" [y]=\"10\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Ellipse' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Ellipse' }\">\n          </ng-joint-standard-ellipse>\n\n          <ng-joint-standard-embedded-image\n            [id]=\"'embedded-image'\"\n            [x]=\"425\" [y]=\"340\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.EmbededImage' }\"\n            [label]=\"{ text: 'Embedded\\nImage' }\"\n            [body]=\"{ fill: '#fe854f', fillOpacity: '0.5', stroke: '#fe854f' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-embedded-image>\n\n          <ng-joint-standard-headered-rectangle\n            [id]=\"'headered-rectangle'\"\n            [x]=\"25\" [y]=\"610\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.HeaderedRectangle' }\"\n            [header]=\"{ fill: '#000000', fillOpacity: '0.1' }\"\n            [headerText]=\"{ text: 'Header' }\"\n            [body]=\"{ fill: '#fe854f', fillOpacity: '0.5' }\"\n            [bodyText]=\"{ text: 'Headered\\nRectangle' }\">\n          </ng-joint-standard-headered-rectangle>\n\n          <ng-joint-standard-image\n            [id]=\"'image'\"\n            [x]=\"25\" [y]=\"410\"\n            [width]=\"150\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Image' }\"\n            [label]=\"{ text: 'Image' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\">\n          </ng-joint-standard-image>\n\n          <ng-joint-standard-inscribed-image\n            [id]=\"'inscribed-image'\"\n            [x]=\"450\" [y]=\"450\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Image' }\"\n            [image]=\"{ xlinkHref: 'assets/image.png' }\"\n            [border]=\"{ strokeWidth: '5' }\"\n            [background]=\"{ fill: 'lightgray' }\"\n            [label]=\"{ text: 'Inscribed Image' }\">\n          </ng-joint-standard-inscribed-image>\n          \n          <ng-joint-standard-path\n            [id]=\"'path'\"\n            [x]=\"50\" [y]=\"210\"\n            [width]=\"100\"\n            [height]=\"100\"\n            [root]=\"{ title: 'standard.Path' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5', refD: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z' }\"\n            [label]=\"{ text: 'Path' }\">\n          </ng-joint-standard-path>\n\n          <ng-joint-standard-polygon\n            [id]=\"'polygon'\"\n            [x]=\"200\" [y]=\"210\" \n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Polygon' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,10 10,0 20,10 10,20' }\"\n            [label]=\"{ text: 'Polygon' }\">\n          </ng-joint-standard-polygon>\n\n          <ng-joint-standard-polyline\n            [id]=\"'polyline'\"\n            [x]=\"375\" [y]=\"210\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Polyline' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,0 0,10 10,10 10,0' }\"\n            [label]=\"{ text: 'Polyline' }\">\n          </ng-joint-standard-polyline>\n\n          <ng-joint-standard-rectangle\n            [id]=\"'rectangle'\"\n            [x]=\"50\" [y]=\"10\"\n            [width]=\"100\" [height]=\"100\"\n            [root]=\"{ title: 'standard.Rectangle' }\"\n            [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n            [label]=\"{ text: 'Rectangle' }\">\n          </ng-joint-standard-rectangle>\n\n        </ng-joint-shapes-standard>\n\n      </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1lbGVtZW50cy9zdGFuZGFyZC1lbGVtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: StandardElementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardElementsComponent", function() { return StandardElementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardElementsComponent = /** @class */ (function () {
    function StandardElementsComponent() {
    }
    StandardElementsComponent.prototype.ngOnInit = function () {
    };
    StandardElementsComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick.id', id);
    };
    StandardElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-elements',
            template: __webpack_require__(/*! ./standard-elements.component.html */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html"),
            styles: [__webpack_require__(/*! ./standard-elements.component.scss */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardElementsComponent);
    return StandardElementsComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/index.ts ***!
  \******************************************************************/
/*! exports provided: StandardLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-links.component */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardLinksComponent", function() { return _standard_links_component__WEBPACK_IMPORTED_MODULE_0__["StandardLinksComponent"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  standard-links works!\n</p>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1saW5rcy9zdGFuZGFyZC1saW5rcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.ts ***!
  \*************************************************************************************/
/*! exports provided: StandardLinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinksComponent", function() { return StandardLinksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardLinksComponent = /** @class */ (function () {
    function StandardLinksComponent() {
    }
    StandardLinksComponent.prototype.ngOnInit = function () {
    };
    StandardLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-links',
            template: __webpack_require__(/*! ./standard-links.component.html */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html"),
            styles: [__webpack_require__(/*! ./standard-links.component.scss */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardLinksComponent);
    return StandardLinksComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/onno/GITS/dgwnu/ng-joint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map