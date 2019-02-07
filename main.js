(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js":
/*!***********************************************!*\
  !*** ./dist/ng-joint/fesm5/dgwnu-ng-joint.js ***!
  \***********************************************/
/*! exports provided: NgJointService, DiaPaperComponent, DiaGraphComponent, ShapesComponent, GenericElementShapeComponent, GenericLinkShapeComponent, NgJointModule, ShapesStandardComponent, StandardRectangleComponent, StandardLinkComponent, ShapesStandardModule, ShapesUmlComponent, UmlAbstractComponent, UmlClassComponent, UmlInterfaceComponent, UmlAggregationComponent, UmlCompositionComponent, UmlGeneralizationComponent, UmlImplementationComponent, GenericUmlClassShapeComponent, GenericUmlLinkShapeComponent, ShapesUmlModule, ShapesAngularComponent, AngularElementComponent, ShapesAngularModule, ɵq, ɵr, ɵs, ɵbd, ɵg, ɵh, ɵt, ɵe, ɵv, ɵf, ɵu, ɵc, ɵa, ɵb, ɵd, ɵw, ɵi, ɵbc, ɵm, ɵx, ɵk, ɵba, ɵn, ɵz, ɵo, ɵbb, ɵp, ɵy, ɵl, ɵj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointService", function() { return NgJointService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaPaperComponent", function() { return DiaPaperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiaGraphComponent", function() { return DiaGraphComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesComponent", function() { return ShapesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericElementShapeComponent", function() { return GenericElementShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericLinkShapeComponent", function() { return GenericLinkShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgJointModule", function() { return NgJointModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardComponent", function() { return ShapesStandardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardRectangleComponent", function() { return StandardRectangleComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinkComponent", function() { return StandardLinkComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesStandardModule", function() { return ShapesStandardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlComponent", function() { return ShapesUmlComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAbstractComponent", function() { return UmlAbstractComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassComponent", function() { return UmlClassComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlInterfaceComponent", function() { return UmlInterfaceComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlAggregationComponent", function() { return UmlAggregationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlCompositionComponent", function() { return UmlCompositionComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlGeneralizationComponent", function() { return UmlGeneralizationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlImplementationComponent", function() { return UmlImplementationComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericUmlClassShapeComponent", function() { return GenericUmlClassShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenericUmlLinkShapeComponent", function() { return GenericUmlLinkShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlModule", function() { return ShapesUmlModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularComponent", function() { return ShapesAngularComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementComponent", function() { return AngularElementComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularModule", function() { return ShapesAngularModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return DiaGraphService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return DiaPaperService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return DiaModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return AngularElementModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return AngularElementService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return ShapesAngularService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return ShapesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return ShapesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return StandardLinkModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return StandardLinkService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return StandardRectangleModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return StandardRectangleService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GenericStandardElementShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return GenericStandardLinkShapeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return ShapesStandardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return UmlAbstractModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return UmlAbstractService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return UmlAggregationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return UmlAggregationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return UmlClassModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return UmlClassService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return UmlCompositionModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return UmlCompositionService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return UmlGeneralizationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return UmlGeneralizationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return UmlImplementationModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return UmlImplementationService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return UmlInterfaceModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return UmlInterfaceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return ShapesUmlService; });
/* harmony import */ var node_cache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-cache */ "./node_modules/node-cache/index.js");
/* harmony import */ var node_cache__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_cache__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jointjs */ "./node_modules/jointjs/dist/joint.min.js");
/* harmony import */ var jointjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jointjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgJointService = /** @class */ (function () {
    function NgJointService() {
        this._shapesCache = new node_cache__WEBPACK_IMPORTED_MODULE_0__();
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Indexable Holder of Joint Paper Object
 */
var /**
 * Indexable Holder of Joint Paper Object
 */
DiaPaperElement = /** @class */ (function () {
    function DiaPaperElement(options) {
        this._paper = new jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].Paper(options);
    }
    Object.defineProperty(DiaPaperElement.prototype, "paper", {
        get: /**
         * @return {?}
         */
        function () {
            return this._paper;
        },
        enumerable: true,
        configurable: true
    });
    return DiaPaperElement;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular Joint Dia Paper Service:
 */
var DiaPaperService = /** @class */ (function () {
    function DiaPaperService() {
        this._paperArray = [];
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
        return new DiaPaperElement(options);
    };
    /**
     * jointjs internal dia.Paper.event handling
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     */
    /**
     * jointjs internal dia.Paper.event handling
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     * @param {?} component
     * @return {?}
     */
    DiaPaperService.prototype.onPaperEvents = /**
     * jointjs internal dia.Paper.event handling
     * see https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.paperElement.paper
            .on('element:pointerclick', function (context) {
            component.graph.graphElement.jointEvent.next({
                cid: context.model.cid,
                eventSource: 'element',
                eventType: 'pointerclick'
            });
        });
    };
    DiaPaperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaPaperService.ctorParameters = function () { return []; };
    /** @nocollapse */ DiaPaperService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function DiaPaperService_Factory() { return new DiaPaperService(); }, token: DiaPaperService, providedIn: "root" });
    return DiaPaperService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Generic Element Shape Class
 * @abstract
 */
var /**
 * Generic Element Shape Class
 * @abstract
 */
ElementShape = /** @class */ (function () {
    function ElementShape(parms) {
        this._id = parms.id;
    }
    Object.defineProperty(ElementShape.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ElementShape.prototype, "element", {
        get: /**
         * @return {?}
         */
        function () { return this._element; },
        enumerable: true,
        configurable: true
    });
    return ElementShape;
}());
/**
 * Generic Link Shape Class
 * @abstract
 */
var /**
 * Generic Link Shape Class
 * @abstract
 */
LinkShape = /** @class */ (function () {
    function LinkShape(parms) {
        this._id = parms.id;
        this._sourceId = parms.sourceId;
        this._targetId = parms.targetId;
    }
    Object.defineProperty(LinkShape.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkShape.prototype, "sourceId", {
        get: /**
         * @return {?}
         */
        function () { return this._sourceId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkShape.prototype, "targetId", {
        get: /**
         * @return {?}
         */
        function () { return this.targetId; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkShape.prototype, "link", {
        get: /**
         * @return {?}
         */
        function () { return this._link; },
        enumerable: true,
        configurable: true
    });
    return LinkShape;
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
     * @param {?} graphElement
     * @return {?}
     */
    GenericElementShapeComponent.prototype.createShape = /**
     * Create Shape Element Instance and initialize event handlers
     * @param {?} graphElement
     * @return {?}
     */
    function (graphElement) {
        this.graph = graphElement;
        this.shape = this.service.createElementShape(this.graph, this);
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
    /**
     * Emit Id of current Clicked JointJs Element
     */
    /**
     * Emit Id of current Clicked JointJs Element
     * @return {?}
     */
    GenericElementShapeComponent.prototype.emitElementPointerClick = /**
     * Emit Id of current Clicked JointJs Element
     * @return {?}
     */
    function () {
        this.elementPointerClick.emit(this.id);
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
            this.shape.link.source(source.element);
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
            this.shape.link.target(target.element);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} graphElement
     * @return {?}
     */
    GenericLinkShapeComponent.prototype.createShape = /**
     * @param {?} graphElement
     * @return {?}
     */
    function (graphElement) {
        this.shape = this.service.createLinkShape(graphElement, this);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @param {?} graphElement
     * @return {?}
     */
    ShapesService.prototype.activateShapePlugins = /**
     * Activate Ng Joint JS Shape Plugins (Standard, Angular, ...)
     * @param {?} shapePlugins
     * @param {?} graphElement
     * @return {?}
     */
    function (shapePlugins, graphElement) {
        var e_1, _a;
        try {
            for (var shapePlugins_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(shapePlugins), shapePlugins_1_1 = shapePlugins_1.next(); !shapePlugins_1_1.done; shapePlugins_1_1 = shapePlugins_1.next()) {
                var shapePlugin = shapePlugins_1_1.value;
                if (shapePlugin) {
                    shapePlugin.graphElement = graphElement;
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
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     */
    /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    ShapesService.prototype.createShapes = /**
     * Create Ng Joint Js Shapes (Elements and Links) for Declared Components
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    function (elements, links, graph) {
        var e_2, _a, e_3, _b;
        try {
            // Firstly, create elements
            for (var elements_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                element.forEach(function (elementShape) {
                    elementShape.createShape(graph);
                });
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
            for (var links_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(links), links_1_1 = links_1.next(); !links_1_1.done; links_1_1 = links_1.next()) {
                var link = links_1_1.value;
                link.forEach(function (linkShape) {
                    var e_4, _a;
                    // create link shape
                    linkShape.createShape(graph);
                    try {
                        // connect link to elements
                        for (var elements_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__values"])(elements), elements_2_1 = elements_2.next(); !elements_2_1.done; elements_2_1 = elements_2.next()) {
                            var element = elements_2_1.value;
                            // connect source element
                            /** @type {?} */
                            var source = element.find(function (elementShape) { return elementShape.id === linkShape.sourceId; });
                            if (source) {
                                linkShape.sourceShape = source.shape;
                            }
                            // connect target element
                            /** @type {?} */
                            var target = element.find(function (elementShape) { return elementShape.id === linkShape.targetId; });
                            if (target) {
                                linkShape.targetShape = target.shape;
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
                });
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
        var shape = component.shape;
        /** @type {?} */
        var xShapeElement = shape.element.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.element.getBBox().y;
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
        var shape = component.shape;
        /** @type {?} */
        var widthShapeElement = shape.element.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.element.getBBox().height;
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
        component.shape.element
            .on('change:position', function (context) { _this._positionComponent(component); })
            .on('change:size', function (context) { _this._sizeComponent(component); });
        // jointjs internal paper event handling
        // emit events on element level to seperate event-sources (element instances)
        component.graph.jointEvent.subscribe(function (event) {
            if (event.eventSource === 'element') {
                if (event.eventType === 'pointerclick') {
                    if ((event.cid === component.shape.element.cid)) {
                        component.elementPointerClick.emit(event.cid);
                    }
                }
            }
        });
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
        component.shape.link
            .on('change:source', function (context) { })
            .on('change:target', function (context) { });
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
        var diaShape;
        if (shape instanceof ElementShape) {
            diaShape = shape.element;
        }
        else {
            diaShape = shape.link;
        }
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
        var shape = component.shape;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.element.getBBox();
        /** @type {?} */
        var element = component.shape.element;
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
        this._setAttrChanges(changes, component.shape);
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
        var shape = component.shape;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var link = component.shape.link;
        // process attrs changes
        this._setAttrChanges(changes, component.shape);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardService = /** @class */ (function () {
    function ShapesStandardService(service) {
        this.service = service;
    }
    /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    ShapesStandardService.prototype.createShapes = /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    function (elements, links, graph) {
        this.service.createShapes(elements, links, graph);
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
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    ShapesStandardService.prototype.setAttrProp = /**
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    function (diaShape, prop, currentValue) {
        this.service.setAttrProp(diaShape, prop, currentValue);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardElementShape, _super);
    function StandardElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardElementShape;
}(ElementShape));
/**
 * @abstract
 */
var /**
 * @abstract
 */
StandardLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardLinkShape, _super);
    function StandardLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardLinkShape;
}(LinkShape));
/**
 * @abstract
 */
var GenericStandardElementShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GenericStandardElementShapeComponent, _super);
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GenericStandardLinkShapeComponent, _super);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Ng Joint Standard Rectangle Shape Class
 */
var /**
 * Ng Joint Standard Rectangle Shape Class
 */
StandardRectangle = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardRectangle, _super);
    function StandardRectangle(id, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        _this._element = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].standard.Rectangle(options);
        return _this;
    }
    return StandardRectangle;
}(StandardElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleService = /** @class */ (function () {
    function StandardRectangleService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    StandardRectangleService.prototype.createElementShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var rectangleShape = new StandardRectangle(component.id, {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height },
            attrs: {
                root: component.root,
                body: component.body,
                label: component.label
            }
        });
        graphElement.addElementShape(rectangleShape);
        return rectangleShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardRectangleComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardRectangleComponent, _super);
    function StandardRectangleComponent(standardRectangleService) {
        var _this = _super.call(this, standardRectangleService) || this;
        _this.standardRectangleService = standardRectangleService;
        return _this;
    }
    StandardRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-rectangle',
                    template: "\n    <!-- joint.shapes.standard.Rectangle  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLink = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardLink, _super);
    function StandardLink(id, sourceId, targetId, options) {
        var _this = _super.call(this, { id: id, sourceId: sourceId, targetId: targetId, options: options }) || this;
        _this._link = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].standard.Link(options);
        return _this;
    }
    Object.defineProperty(StandardLink.prototype, "standardLink", {
        get: /**
         * @return {?}
         */
        function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    return StandardLink;
}(StandardLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var StandardLinkService = /** @class */ (function () {
    function StandardLinkService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    StandardLinkService.prototype.createLinkShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var linkShape = new StandardLink(component.id, component.sourceId, component.targetId);
        this.service.setAttrProp(linkShape.link, 'line', component.line);
        graphElement.addLinkShape(linkShape);
        return linkShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Standard Link Component
 *
 * JointJs Standard Link
 *
 * Container for Standard Link (joint.shapes.standard.Link) Instance
 *
 * ```html
 * <ng-joint-paper
 * [width]="800"
 * [height]="600"
 * [gridSize]="2"
 * [drawGrid]="true">
 * </ng-joint-dia-graph>
 * <ng-joint-shapes>
 * <ng-joint-shapes-standard>
 * <dgwnu-standard-rectangle (elementPointerClick)="onElementPointerClick($event)"
 * [id]="'rect'"
 * [x]="10" [y]="30"
 * [width]="100" [height]="40">
 * </dgwnu-standard-rectangle>
 * <dgwnu-standard-rectangle
 * [id]="'rect2'"
 * [x]="310" [y]="30"
 * [width]="100" [height]="40">
 * </dgwnu-standard-rectangle>
 * <dgwnu-standard-link
 * [id]="'link'"
 * [sourceId]="'rect'"
 * [targetId]="'rect2'">
 * </dgwnu-standard-link>
 * </ng-joint-shapes-standard>
 * </ng-joint-shapes>
 * </ng-joint-dia-graph>
 * </ng-joint-paper>
 * ```
 */
var StandardLinkComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(StandardLinkComponent, _super);
    function StandardLinkComponent(standardLinkService) {
        var _this = _super.call(this, standardLinkService) || this;
        _this.standardLinkService = standardLinkService;
        return _this;
    }
    StandardLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-standard-link',
                    template: "\n    <!-- joint.shapes.standard.Link  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Standard Component
 *
 * ShapePlugin Element for JointJs Standard Shapes
 *
 * Container for jointjs standard shapes (jointjs.shapes.Standard)
 *
 * ```
 * <ng-joint-paper
 * width=800
 * height=600
 * gridSize=2
 * drawGrid=true>
 * </ng-joint-dia-graph>
 * <ng-joint-shapes>
 * <ng-joint-shapes-standard>
 * </ng-joint-shapes-standard>
 * </ng-joint-shapes>
 * </ng-joint-dia-graph>
 * </ng-joint-paper>
 * ```
 */
var ShapesStandardComponent = /** @class */ (function () {
    function ShapesStandardComponent(service) {
        this.service = service;
    }
    Object.defineProperty(ShapesStandardComponent.prototype, "graphElement", {
        /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
         */
        set: /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._graphElement = value;
            this.service.createShapes([this.standardRectangles], [this.standardLinks], this._graphElement);
        },
        enumerable: true,
        configurable: true
    });
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
        standardRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardRectangleComponent,] }],
        standardLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [StandardLinkComponent,] }]
    };
    return ShapesStandardComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Angular Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Shapes
 */
var ShapesAngularService = /** @class */ (function () {
    function ShapesAngularService(service) {
        this.service = service;
    }
    /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    ShapesAngularService.prototype.createShapes = /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    function (elements, links, graph) {
        this.service.createShapes(elements, links, graph);
    };
    /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    ShapesAngularService.prototype.setElementChanges = /**
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
    ShapesAngularService.prototype.setLinkChanges = /**
     * @param {?} changes
     * @param {?} component
     * @return {?}
     */
    function (changes, component) {
        this.service.setLinkChanges(changes, component);
    };
    /**
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    ShapesAngularService.prototype.setAttrProp = /**
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    function (diaShape, prop, currentValue) {
        this.service.setAttrProp(diaShape, prop, currentValue);
    };
    ShapesAngularService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesAngularService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesAngularService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function ShapesAngularService_Factory() { return new ShapesAngularService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesService)); }, token: ShapesAngularService, providedIn: "root" });
    return ShapesAngularService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
AngularElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AngularElementShape, _super);
    function AngularElementShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AngularElementShape;
}(ElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Constructor Angular Element
 */
var /**
 * Constructor Angular Element
 */
AngularElement = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AngularElement, _super);
    function AngularElement(id, ngElementRef, options) {
        var _this = _super.call(this, { id: id, options: options }) || this;
        options.attrs = {
            rect: { stroke: 'none', 'fill-opacity': 0 },
        };
        _this._element = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].basic.Rect(options);
        _this._ngElementRef = ngElementRef;
        return _this;
    }
    Object.defineProperty(AngularElement.prototype, "ngNode", {
        get: /**
         * @return {?}
         */
        function () { return this._ngElementRef.nativeElement; },
        enumerable: true,
        configurable: true
    });
    return AngularElement;
}(AngularElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Angular Element Service Class
 *
 * \@comment Manages LifeCycle, Events and Bi-Directional Data-Binding Angular Elements
 */
var AngularElementService = /** @class */ (function () {
    function AngularElementService(service, rendererFactory) {
        this.service = service;
        this.rendererFactory = rendererFactory;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
    // set behaviour of html (and angular specific) content within angular element
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    AngularElementService.prototype._setNgContentStyles = 
    // set behaviour of html (and angular specific) content within angular element
    /**
     * @private
     * @param {?} contentNode
     * @return {?}
     */
    function (contentNode) {
        var _this = this;
        contentNode.childNodes.forEach(function (childNode) {
            switch (childNode.nodeName) {
                case 'BUTTON': {
                    _this.renderer.setStyle(childNode, 'pointer-events', 'auto');
                    break;
                }
                case 'INPUT': {
                    _this.renderer.setStyle(childNode, 'pointer-events', 'auto');
                    break;
                }
                case 'SELECT': {
                    _this.renderer.setStyle(childNode, 'pointer-events', 'auto');
                    break;
                }
            }
            // process child nodes (until no more)
            if (childNode.hasChildNodes) {
                _this._setNgContentStyles(childNode);
            }
        });
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
    AngularElementService.prototype._setNgElPxStyleProp = 
    // set NgStyle in DIV-container (first child node)
    /**
     * @private
     * @param {?} elementNode
     * @param {?} prop
     * @param {?} px
     * @return {?}
     */
    function (elementNode, prop, px) {
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
    AngularElementService.prototype._positionNgElement = 
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
    AngularElementService.prototype._sizeNgElement = 
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
    AngularElementService.prototype._initComponent = 
    // initialize initial component position and size
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var elementNode = component.shape.ngNode;
        this._positionNgElement(elementNode, component.x, component.y);
        this._sizeNgElement(elementNode, component.width, component.height);
    };
    /**
     * @private
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype._positionComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shape;
        /** @type {?} */
        var xShapeElement = shape.element.getBBox().x;
        /** @type {?} */
        var yShapeElement = shape.element.getBBox().y;
        /** @type {?} */
        var xChangeDetected = (component.x !== xShapeElement);
        /** @type {?} */
        var yChangedDetected = (component.y !== yShapeElement);
        if (xChangeDetected || yChangedDetected) {
            this._positionNgElement(shape.ngNode, xShapeElement, yShapeElement);
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
    AngularElementService.prototype._resizeComponent = /**
     * @private
     * @param {?} component
     * @return {?}
     */
    function (component) {
        /** @type {?} */
        var shape = component.shape;
        /** @type {?} */
        var widthShapeElement = shape.element.getBBox().width;
        /** @type {?} */
        var heightShapeElement = shape.element.getBBox().height;
        /** @type {?} */
        var widthChangeDetected = (component.width !== widthShapeElement);
        /** @type {?} */
        var heightChangedDetected = (component.height !== heightShapeElement);
        if (widthChangeDetected || heightChangedDetected) {
            this._sizeNgElement(shape.ngNode, widthShapeElement, heightShapeElement);
        }
        if (widthChangeDetected) {
            component.width = widthShapeElement;
        }
        if (heightChangedDetected) {
            component.height = heightShapeElement;
        }
    };
    // Change Handler to move/resize angular element DIV-container
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.onEvents = 
    // Change Handler to move/resize angular element DIV-container
    /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        var _this = this;
        this._initComponent(component);
        component.shape.element
            .on('change:position', function (context) {
            _this._positionComponent(component);
        })
            .on('change:size', function (context) {
            _this._resizeComponent(component);
        });
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
        /** @type {?} */
        var shape = component.shape;
        if (!shape) {
            return;
        } // first time changes is before shape is created
        // first time changes is before shape is created
        /** @type {?} */
        var bbox = shape.element.getBBox();
        // detect position change
        /** @type {?} */
        var positionChangeDetected = false;
        if (changes.x) {
            if (changes.x.currentValue !== bbox.x) {
                positionChangeDetected = true;
            }
        }
        else if (changes.y) {
            if (changes.y.currentValue !== bbox.y) {
                positionChangeDetected = true;
            }
        }
        // detect size change
        /** @type {?} */
        var sizeChangeDetected = false;
        if (changes.width) {
            if (changes.width.currentValue !== bbox.width) {
                sizeChangeDetected = true;
            }
        }
        else if (changes.height) {
            if (changes.height.currentValue !== bbox.height) {
                sizeChangeDetected = true;
            }
        }
        // process detected changes
        if (positionChangeDetected) {
            component.shape.element.position(component.x, component.y);
            this._positionNgElement(shape.ngNode, component.x, component.y);
        }
        if (sizeChangeDetected) {
            component.shape.element.resize(component.width, component.height);
            this._sizeNgElement(shape.ngNode, component.width, component.height);
        }
    };
    /**
     * create new Angular Element (that renders Angular Element in joinjs BBOX)
     */
    /**
     * create new Angular Element (that renders Angular Element in joinjs BBOX)
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    AngularElementService.prototype.createElementShape = /**
     * create new Angular Element (that renders Angular Element in joinjs BBOX)
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var elementShape = new AngularElement(component.id, component.ngElementRef, {
            position: { x: component.x, y: component.y },
            size: { width: component.width, height: component.height }
        });
        graphElement.addElementShape(elementShape);
        this._setNgContentStyles(elementShape.ngNode);
        return elementShape;
    };
    AngularElementService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularElementService.ctorParameters = function () { return [
        { type: ShapesAngularService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ AngularElementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["defineInjectable"])({ factory: function AngularElementService_Factory() { return new AngularElementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(ShapesAngularService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_4__["RendererFactory2"])); }, token: AngularElementService, providedIn: "root" });
    return AngularElementService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Angular Component
 *
 * Angular Element Shape
 *
 * Element Shape that is able to contain Angular based Content (structural directives, angular material, etc.)
 *
 * Examples:
 *
 * <example-url>http://www.plan-k.nl/diensten</example-url>
 *
 */
var AngularElementComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(AngularElementComponent, _super);
    function AngularElementComponent(angularElementService, ngElementRef) {
        var _this = _super.call(this, angularElementService) || this;
        _this.angularElementService = angularElementService;
        _this.ngElementRef = ngElementRef;
        return _this;
    }
    AngularElementComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-angular-element',
                    template: "<div class=\"angular-element\">\n    <ng-content></ng-content>\n</div>\n",
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
                    styles: [".angular-element{pointer-events:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;position:absolute;z-index:2}"]
                }] }
    ];
    /** @nocollapse */
    AngularElementComponent.ctorParameters = function () { return [
        { type: AngularElementService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"] }
    ]; };
    return AngularElementComponent;
}(GenericElementShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * NgJoint Shapes Angular Component
 *
 * ShapePlugin Element for Angular based Shapes
 *
 * Plugin's to enable the use of Angular 7.x features inside jointjs shapes
 *
 * \@example
 *
 * <ng-joint-dia-paper
 *  [width]="800"
 *  [height]="600"
 *  [gridSize]="2"
 *  [drawGrid]="true">
 *
 *  </ng-joint-dia-graph>
 *
 *   <ng-joint-shapes-angular>
 *
 *   </ng-joint-shapes-angular>
 *
 *  </ng-joint-dia-graph>
 *
 * </ng-joint-dia-paper>
 *
 */
var ShapesAngularComponent = /** @class */ (function () {
    function ShapesAngularComponent(service) {
        this.service = service;
    }
    Object.defineProperty(ShapesAngularComponent.prototype, "graphElement", {
        /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
         */
        set: /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and create Plugin Shapes
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._graphElement = value;
            this.service.createShapes([this.angularElements], [], this._graphElement);
        },
        enumerable: true,
        configurable: true
    });
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
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlService = /** @class */ (function () {
    function ShapesUmlService(service) {
        this.service = service;
    }
    /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    ShapesUmlService.prototype.createShapes = /**
     * @param {?} elements
     * @param {?} links
     * @param {?} graph
     * @return {?}
     */
    function (elements, links, graph) {
        this.service.createShapes(elements, links, graph);
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
     * @param {?} component
     * @return {?}
     */
    ShapesUmlService.prototype.umlClassAttributes = /**
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
    /**
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    ShapesUmlService.prototype.setAttrProp = /**
     * @param {?} diaShape
     * @param {?} prop
     * @param {?} currentValue
     * @return {?}
     */
    function (diaShape, prop, currentValue) {
        this.service.setAttrProp(diaShape, prop, currentValue);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlElementShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlElementShape, _super);
    function UmlElementShape(id, options, extraOptions) {
        return _super.call(this, { id: id, options: options }) || this;
    }
    return UmlElementShape;
}(ElementShape));
/**
 * @abstract
 */
var /**
 * @abstract
 */
UmlLinkShape = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlLinkShape, _super);
    function UmlLinkShape() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return UmlLinkShape;
}(LinkShape));
/**
 * @abstract
 */
var GenericUmlClassShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GenericUmlClassShapeComponent, _super);
    function GenericUmlClassShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericUmlClassShapeComponent.propDecorators = {
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        methods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }],
        attrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"] }]
    };
    return GenericUmlClassShapeComponent;
}(GenericElementShapeComponent));
/**
 * @abstract
 */
var  /**
 * @abstract
 */
GenericUmlLinkShapeComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(GenericUmlLinkShapeComponent, _super);
    function GenericUmlLinkShapeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return GenericUmlLinkShapeComponent;
}(GenericLinkShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Ng Joint UML Abstract Shape Class
 */
var /**
 * Ng Joint UML Abstract Shape Class
 */
UmlAbstract = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlAbstract, _super);
    function UmlAbstract(id, options, extraOptions) {
        var _this = _super.call(this, id, options, extraOptions) || this;
        _this._element = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Abstract(options, extraOptions);
        return _this;
    }
    return UmlAbstract;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractService = /** @class */ (function () {
    function UmlAbstractService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlAbstractService.prototype.createElementShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var abstractShape = new UmlAbstract(component.id, this.service.umlClassAttributes(component));
        graphElement.addElementShape(abstractShape);
        return abstractShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAbstractComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlAbstractComponent, _super);
    function UmlAbstractComponent(umlAbstractService) {
        var _this = _super.call(this, umlAbstractService) || this;
        _this.umlAbstractService = umlAbstractService;
        return _this;
    }
    UmlAbstractComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-abstract',
                    template: "\n  <!-- joint.shapes.uml.Abstract  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlAbstractComponent.ctorParameters = function () { return [
        { type: UmlAbstractService }
    ]; };
    return UmlAbstractComponent;
}(GenericUmlClassShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Ng Joint UML Class Shape Class
 */
var /**
 * Ng Joint UML Class Shape Class
 */
UmlClass = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlClass, _super);
    function UmlClass(id, options, extraOptions) {
        var _this = _super.call(this, id, options, extraOptions) || this;
        _this._element = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Class(options, extraOptions);
        return _this;
    }
    return UmlClass;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassService = /** @class */ (function () {
    function UmlClassService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlClassService.prototype.createElementShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var classShape = new UmlClass(component.id, this.service.umlClassAttributes(component));
        graphElement.addElementShape(classShape);
        return classShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlClassComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlClassComponent, _super);
    function UmlClassComponent(umlClassService) {
        var _this = _super.call(this, umlClassService) || this;
        _this.umlClassService = umlClassService;
        return _this;
    }
    UmlClassComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-class',
                    template: "\n  <!-- joint.shapes.uml.Class  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlClassComponent.ctorParameters = function () { return [
        { type: UmlClassService }
    ]; };
    return UmlClassComponent;
}(GenericUmlClassShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Ng Joint UML Interface Shape Class
 */
var /**
 * Ng Joint UML Interface Shape Class
 */
UmlInterface = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlInterface, _super);
    function UmlInterface(id, options, extraOptions) {
        var _this = _super.call(this, id, options, extraOptions) || this;
        _this._element = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Interface(options, extraOptions);
        return _this;
    }
    return UmlInterface;
}(UmlElementShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceService = /** @class */ (function () {
    function UmlInterfaceService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlInterfaceService.prototype.createElementShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var interfaceShape = new UmlInterface(component.id, this.service.umlClassAttributes(component));
        graphElement.addElementShape(interfaceShape);
        return interfaceShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlInterfaceComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlInterfaceComponent, _super);
    function UmlInterfaceComponent(umlInterfaceService) {
        var _this = _super.call(this, umlInterfaceService) || this;
        _this.umlInterfaceService = umlInterfaceService;
        return _this;
    }
    UmlInterfaceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-interface',
                    template: "\n  <!-- joint.shapes.uml.Interface  -->\n  "
                }] }
    ];
    /** @nocollapse */
    UmlInterfaceComponent.ctorParameters = function () { return [
        { type: UmlInterfaceService }
    ]; };
    return UmlInterfaceComponent;
}(GenericUmlClassShapeComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlAggregation, _super);
    function UmlAggregation(id, sourceId, targetId, options) {
        var _this = this;
        /** @type {?} */
        var diaLinkAttributes = { id: id, sourceId: sourceId, targetId: targetId, options: options };
        _this = _super.call(this, diaLinkAttributes) || this;
        _this._link = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Aggregation(diaLinkAttributes);
        return _this;
    }
    Object.defineProperty(UmlAggregation.prototype, "umlAggregation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    return UmlAggregation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationService = /** @class */ (function () {
    function UmlAggregationService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlAggregationService.prototype.createLinkShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var aggregationShape = new UmlAggregation(component.id, component.sourceId, component.targetId);
        graphElement.addLinkShape(aggregationShape);
        return aggregationShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlAggregationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlAggregationComponent, _super);
    function UmlAggregationComponent(umlAggregationService) {
        var _this = _super.call(this, umlAggregationService) || this;
        _this.umlAggregationService = umlAggregationService;
        return _this;
    }
    UmlAggregationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-aggregation',
                    template: "\n    <!-- joint.shapes.uml.Aggregation  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlComposition = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlComposition, _super);
    function UmlComposition(id, sourceId, targetId, options) {
        var _this = this;
        /** @type {?} */
        var diaLinkAttributes = { id: id, sourceId: sourceId, targetId: targetId, options: options };
        _this = _super.call(this, diaLinkAttributes) || this;
        _this._link = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Composition(diaLinkAttributes);
        return _this;
    }
    Object.defineProperty(UmlComposition.prototype, "umlComposition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    return UmlComposition;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionService = /** @class */ (function () {
    function UmlCompositionService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlCompositionService.prototype.createLinkShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var compositionShape = new UmlComposition(component.id, component.sourceId, component.targetId);
        graphElement.addLinkShape(compositionShape);
        return compositionShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlCompositionComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlCompositionComponent, _super);
    function UmlCompositionComponent(umlCompositionService) {
        var _this = _super.call(this, umlCompositionService) || this;
        _this.umlCompositionService = umlCompositionService;
        return _this;
    }
    UmlCompositionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-composition',
                    template: "\n    <!-- joint.shapes.uml.Composition  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralization = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlGeneralization, _super);
    function UmlGeneralization(id, sourceId, targetId, options) {
        var _this = this;
        /** @type {?} */
        var diaLinkAttributes = { id: id, sourceId: sourceId, targetId: targetId, options: options };
        _this = _super.call(this, diaLinkAttributes) || this;
        _this._link = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Generalization(diaLinkAttributes);
        return _this;
    }
    Object.defineProperty(UmlGeneralization.prototype, "umlGeneralization", {
        get: /**
         * @return {?}
         */
        function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    return UmlGeneralization;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationService = /** @class */ (function () {
    function UmlGeneralizationService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlGeneralizationService.prototype.createLinkShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var generalizationShape = new UmlGeneralization(component.id, component.sourceId, component.targetId);
        graphElement.addLinkShape(generalizationShape);
        return generalizationShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlGeneralizationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlGeneralizationComponent, _super);
    function UmlGeneralizationComponent(umlGeneralizationService) {
        var _this = _super.call(this, umlGeneralizationService) || this;
        _this.umlGeneralizationService = umlGeneralizationService;
        return _this;
    }
    UmlGeneralizationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-generalization',
                    template: "\n    <!-- joint.shapes.uml.Generalization  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementation = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlImplementation, _super);
    function UmlImplementation(id, sourceId, targetId, options) {
        var _this = this;
        /** @type {?} */
        var diaLinkAttributes = { id: id, sourceId: sourceId, targetId: targetId, options: options };
        _this = _super.call(this, diaLinkAttributes) || this;
        _this._link = new jointjs__WEBPACK_IMPORTED_MODULE_2__["shapes"].uml.Implementation(diaLinkAttributes);
        return _this;
    }
    Object.defineProperty(UmlImplementation.prototype, "umlImplementation", {
        get: /**
         * @return {?}
         */
        function () {
            return this._link;
        },
        enumerable: true,
        configurable: true
    });
    return UmlImplementation;
}(UmlLinkShape));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationService = /** @class */ (function () {
    function UmlImplementationService(service) {
        this.service = service;
    }
    /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    UmlImplementationService.prototype.createLinkShape = /**
     * @param {?} graphElement
     * @param {?} component
     * @return {?}
     */
    function (graphElement, component) {
        /** @type {?} */
        var generalizationShape = new UmlImplementation(component.id, component.sourceId, component.targetId);
        graphElement.addLinkShape(generalizationShape);
        return generalizationShape;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var UmlImplementationComponent = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_1__["__extends"])(UmlImplementationComponent, _super);
    function UmlImplementationComponent(umlImplementationService) {
        var _this = _super.call(this, umlImplementationService) || this;
        _this.umlImplementationService = umlImplementationService;
        return _this;
    }
    UmlImplementationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"], args: [{
                    selector: 'ng-joint-uml-implementation',
                    template: "\n    <!-- joint.shapes.uml.Implementation  -->\n    "
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlComponent = /** @class */ (function () {
    function ShapesUmlComponent(service) {
        this.service = service;
    }
    Object.defineProperty(ShapesUmlComponent.prototype, "graphElement", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._graphElement = value;
            this.service.createShapes([this.umlAbstract, this.umlClass, this.umlInterface], [this.umlAggregation, this.umlComposition, this.umlGeneralization, this.umlImplementation], this._graphElement);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} cid
     * @return {?}
     */
    ShapesUmlComponent.prototype.onElementPointerClick = /**
     * @param {?} cid
     * @return {?}
     */
    function (cid) {
    };
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
        umlAbstract: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlAbstractComponent,] }],
        umlClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlClassComponent,] }],
        umlInterface: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlInterfaceComponent,] }],
        umlAggregation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlAggregationComponent,] }],
        umlComposition: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlCompositionComponent,] }],
        umlGeneralization: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlGeneralizationComponent,] }],
        umlImplementation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChildren"], args: [UmlImplementationComponent,] }]
    };
    return ShapesUmlComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    Object.defineProperty(ShapesComponent.prototype, "graphElement", {
        /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         */
        set: /**
         * Set Parent DiaGraphElement (ng-joint-dia-graph) and activate declared Plugin Shapes
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._graphElement = value;
            this.service.activateShapePlugins([
                this.shapesStandard,
                this.shapesAngular,
                this.shapesUml
            ], this._graphElement);
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * JointNg Graph Class
 */
var /**
 * JointNg Graph Class
 */
DiaGraphElement = /** @class */ (function () {
    /** @ignore */
    function DiaGraphElement() {
        /**
         * jointjs internal events subjects
         */
        this.jointEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._graph = new jointjs__WEBPACK_IMPORTED_MODULE_2__["dia"].Graph();
    }
    Object.defineProperty(DiaGraphElement.prototype, "graph", {
        /** jointjs graph object instance */
        get: /**
         * jointjs graph object instance
         * @return {?}
         */
        function () {
            return this._graph;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} elementShape
     * @return {?}
     */
    DiaGraphElement.prototype.addElementShape = /**
     * @param {?} elementShape
     * @return {?}
     */
    function (elementShape) {
        elementShape.element.addTo(this._graph);
    };
    /**
     * @param {?} linkShape
     * @return {?}
     */
    DiaGraphElement.prototype.addLinkShape = /**
     * @param {?} linkShape
     * @return {?}
     */
    function (linkShape) {
        linkShape.link.addTo(this._graph);
    };
    return DiaGraphElement;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaGraphService = /** @class */ (function () {
    function DiaGraphService() {
        this._graphArray = [];
    }
    /**
     * @return {?}
     */
    DiaGraphService.prototype.createGraphElement = /**
     * @return {?}
     */
    function () {
        return new DiaGraphElement();
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.graphElement = this.service.createGraphElement();
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
        this.shapes.graphElement = this.graphElement;
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    function DiaPaperComponent(service) {
        this.service = service;
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
        this.paperElement = this.service.createPaper({
            width: this.width,
            height: this.height,
            gridSize: this.gridSize,
            drawGrid: this.drawGrid,
            model: this.graph.graphElement.graph,
            el: this.diaPaperElRef.nativeElement
        });
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
        { type: DiaPaperService }
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DiaModule = /** @class */ (function () {
    function DiaModule() {
    }
    DiaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    declarations: [DiaPaperComponent, DiaGraphComponent],
                    providers: [DiaPaperService, DiaGraphService],
                    exports: [DiaPaperComponent, DiaGraphComponent],
                },] }
    ];
    return DiaModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesStandardModule = /** @class */ (function () {
    function ShapesStandardModule() {
    }
    ShapesStandardModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesStandardService],
                    declarations: [ShapesStandardComponent],
                    imports: [
                        StandardRectangleModule,
                        StandardLinkModule
                    ],
                    exports: [
                        ShapesStandardComponent,
                        StandardRectangleModule,
                        StandardLinkModule
                    ]
                },] }
    ];
    return ShapesStandardModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesUmlModule = /** @class */ (function () {
    function ShapesUmlModule() {
    }
    ShapesUmlModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesUmlService],
                    declarations: [ShapesUmlComponent],
                    imports: [
                        UmlAbstractModule,
                        UmlClassModule,
                        UmlInterfaceModule,
                        UmlGeneralizationModule,
                        UmlCompositionModule,
                        UmlImplementationModule,
                        UmlAggregationModule
                    ],
                    exports: [
                        ShapesUmlComponent,
                        UmlAbstractModule,
                        UmlClassModule,
                        UmlInterfaceModule,
                        UmlGeneralizationModule,
                        UmlCompositionModule,
                        UmlImplementationModule,
                        UmlAggregationModule
                    ]
                },] }
    ];
    return ShapesUmlModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ShapesAngularModule = /** @class */ (function () {
    function ShapesAngularModule() {
    }
    ShapesAngularModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"], args: [{
                    providers: [ShapesAngularService],
                    declarations: [ShapesAngularComponent],
                    imports: [
                        AngularElementModule
                    ],
                    exports: [
                        ShapesAngularComponent,
                        AngularElementModule
                    ]
                },] }
    ];
    return ShapesAngularModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

/***/ "./src/app/angular-elements-demo/angular-elements-demo-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/angular-elements-demo/angular-elements-demo-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: AngularElementsDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementsDemoRoutingModule", function() { return AngularElementsDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_elements_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./angular-elements-demo.component */ "./src/app/angular-elements-demo/angular-elements-demo.component.ts");




var demoModuleRoutes = [
    { path: 'angular-elements-demo', component: _angular_elements_demo_component__WEBPACK_IMPORTED_MODULE_3__["AngularElementsDemoComponent"] }
];
var AngularElementsDemoRoutingModule = /** @class */ (function () {
    function AngularElementsDemoRoutingModule() {
    }
    AngularElementsDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(demoModuleRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AngularElementsDemoRoutingModule);
    return AngularElementsDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/angular-elements-demo/angular-elements-demo.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/angular-elements-demo/angular-elements-demo.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"1200\"\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n                <ng-joint-angular-element\n                    [id]=\"'ng1'\"\n                    [x]=\"400\"\n                    [y]=\"100\"\n                    [width]=\"250\"\n                    [height]=\"200\">\n                    <h1>Standard Angular HTML</h1>\n                    <button>Standard Button</button>\n                    <input type=\"text\" name=\"fname\">\n                </ng-joint-angular-element>\n                <ng-joint-angular-element\n                    [id]=\"'mat1'\"\n                    [x]=\"700\"\n                    [y]=\"50\"\n                    [width]=\"200\"\n                    [height]=\"150\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                Angular Material \n                            </mat-card-title>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\">\n                                FAB\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n            </ng-joint-shapes-angular>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/angular-elements-demo/angular-elements-demo.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/angular-elements-demo/angular-elements-demo.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItZWxlbWVudHMtZGVtby9hbmd1bGFyLWVsZW1lbnRzLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/angular-elements-demo/angular-elements-demo.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/angular-elements-demo/angular-elements-demo.component.ts ***!
  \**************************************************************************/
/*! exports provided: AngularElementsDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementsDemoComponent", function() { return AngularElementsDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularElementsDemoComponent = /** @class */ (function () {
    function AngularElementsDemoComponent() {
    }
    AngularElementsDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-elements-demo',
            template: __webpack_require__(/*! ./angular-elements-demo.component.html */ "./src/app/angular-elements-demo/angular-elements-demo.component.html"),
            styles: [__webpack_require__(/*! ./angular-elements-demo.component.scss */ "./src/app/angular-elements-demo/angular-elements-demo.component.scss")]
        })
    ], AngularElementsDemoComponent);
    return AngularElementsDemoComponent;
}());



/***/ }),

/***/ "./src/app/angular-elements-demo/angular-elements-demo.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/angular-elements-demo/angular-elements-demo.module.ts ***!
  \***********************************************************************/
/*! exports provided: AngularElementsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularElementsDemoModule", function() { return AngularElementsDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _angular_elements_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-elements-demo.component */ "./src/app/angular-elements-demo/angular-elements-demo.component.ts");
/* harmony import */ var _angular_elements_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-elements-demo-routing.module */ "./src/app/angular-elements-demo/angular-elements-demo-routing.module.ts");






var AngularElementsDemoModule = /** @class */ (function () {
    function AngularElementsDemoModule() {
    }
    AngularElementsDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_angular_elements_demo_component__WEBPACK_IMPORTED_MODULE_4__["AngularElementsDemoComponent"]],
            imports: [
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesAngularModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_elements_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["AngularElementsDemoRoutingModule"]
            ],
            exports: [_angular_elements_demo_component__WEBPACK_IMPORTED_MODULE_4__["AngularElementsDemoComponent"]]
        })
    ], AngularElementsDemoModule);
    return AngularElementsDemoModule;
}());



/***/ }),

/***/ "./src/app/angular-elements-demo/index.ts":
/*!************************************************!*\
  !*** ./src/app/angular-elements-demo/index.ts ***!
  \************************************************/
/*! exports provided: AngularElementsDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_elements_demo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-elements-demo.module */ "./src/app/angular-elements-demo/angular-elements-demo.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularElementsDemoModule", function() { return _angular_elements_demo_module__WEBPACK_IMPORTED_MODULE_0__["AngularElementsDemoModule"]; });




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
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n\n    <mat-tab label=\"Hello World Demo\">\n        <ng-template matTabContent>\n            <app-hello-world-demo></app-hello-world-demo>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Angular Elements Demo\">\n        <ng-template matTabContent>\n            <app-angular-elements-demo></app-angular-elements-demo>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Structural Directives Demo\">\n        <ng-template matTabContent>\n            <app-struct-dir-demo></app-struct-dir-demo>\n        </ng-template>\n    </mat-tab>\n    \n    <mat-tab label=\"UML Class Diagram Demo\">\n        <ng-template matTabContent>\n            <app-uml-class-diagram-demo></app-uml-class-diagram-demo>\n        </ng-template>\n    </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-jointjs';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _hello_world_demo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hello-world-demo */ "./src/app/hello-world-demo/index.ts");
/* harmony import */ var _angular_elements_demo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-elements-demo */ "./src/app/angular-elements-demo/index.ts");
/* harmony import */ var _struct_dir_demo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./struct-dir-demo */ "./src/app/struct-dir-demo/index.ts");
/* harmony import */ var _uml_class_diagram_demo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uml-class-diagram-demo */ "./src/app/uml-class-diagram-demo/index.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _hello_world_demo__WEBPACK_IMPORTED_MODULE_6__["HelloWorldDemoModule"],
                _angular_elements_demo__WEBPACK_IMPORTED_MODULE_7__["AngularElementsDemoModule"],
                _struct_dir_demo__WEBPACK_IMPORTED_MODULE_8__["StructDirDemoModule"],
                _uml_class_diagram_demo__WEBPACK_IMPORTED_MODULE_9__["UmlClassDiagramDemoModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/hello-world-demo/hello-world-demo-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/hello-world-demo/hello-world-demo-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HelloWorldDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldDemoRoutingModule", function() { return HelloWorldDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _hello_world_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world-demo.component */ "./src/app/hello-world-demo/hello-world-demo.component.ts");




var demoModuleRoutes = [
    { path: 'hello-world-demo', component: _hello_world_demo_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldDemoComponent"] }
];
var HelloWorldDemoRoutingModule = /** @class */ (function () {
    function HelloWorldDemoRoutingModule() {
    }
    HelloWorldDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(demoModuleRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], HelloWorldDemoRoutingModule);
    return HelloWorldDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/hello-world-demo/hello-world-demo.component.html":
/*!******************************************************************!*\
  !*** ./src/app/hello-world-demo/hello-world-demo.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"1200\"\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-standard>\n                <ng-joint-standard-rectangle (elementPointerClick)=\"onElementPointerClick($event)\"\n                    [id]=\"'rect'\"\n                    [x]=\"10\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'blue' }\"\n                    [label]=\"{ text: 'Hello', fill: 'white' }\">\n                </ng-joint-standard-rectangle>\n                <ng-joint-standard-rectangle \n                    [id]=\"'rect2'\"\n                    [x]=\"310\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'blue' }\"\n                    [label]=\"{ text: 'World!', fill: 'white' }\">\n                </ng-joint-standard-rectangle>\n                <ng-joint-standard-link\n                    [id]=\"'link'\"\n                    [sourceId]=\"'rect'\"\n                    [targetId]=\"'rect2'\">\n                    <!-- link(rect => rec2)  -->\n                </ng-joint-standard-link>\n            </ng-joint-shapes-standard>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/hello-world-demo/hello-world-demo.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/hello-world-demo/hello-world-demo.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlbGxvLXdvcmxkLWRlbW8vaGVsbG8td29ybGQtZGVtby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/hello-world-demo/hello-world-demo.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/hello-world-demo/hello-world-demo.component.ts ***!
  \****************************************************************/
/*! exports provided: HelloWorldDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldDemoComponent", function() { return HelloWorldDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Angular Component supported by NgJoint Library: JointJs HelloWorld Demo
 * Based on @see https://resources.jointjs.com/tutorial/hello-world
 */

var HelloWorldDemoComponent = /** @class */ (function () {
    function HelloWorldDemoComponent() {
    }
    HelloWorldDemoComponent.prototype.ngOnInit = function () {
    };
    HelloWorldDemoComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick(id: ' + id + ')');
    };
    HelloWorldDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hello-world-demo',
            template: __webpack_require__(/*! ./hello-world-demo.component.html */ "./src/app/hello-world-demo/hello-world-demo.component.html"),
            styles: [__webpack_require__(/*! ./hello-world-demo.component.scss */ "./src/app/hello-world-demo/hello-world-demo.component.scss")]
        })
    ], HelloWorldDemoComponent);
    return HelloWorldDemoComponent;
}());



/***/ }),

/***/ "./src/app/hello-world-demo/hello-world-demo.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/hello-world-demo/hello-world-demo.module.ts ***!
  \*************************************************************/
/*! exports provided: HelloWorldDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloWorldDemoModule", function() { return HelloWorldDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _hello_world_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hello-world-demo.component */ "./src/app/hello-world-demo/hello-world-demo.component.ts");
/* harmony import */ var _hello_world_demo_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hello-world-demo-routing.module */ "./src/app/hello-world-demo/hello-world-demo-routing.module.ts");





var HelloWorldDemoModule = /** @class */ (function () {
    function HelloWorldDemoModule() {
    }
    HelloWorldDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_hello_world_demo_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldDemoComponent"]],
            imports: [_dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_2__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_2__["ShapesStandardModule"],
                _hello_world_demo_routing_module__WEBPACK_IMPORTED_MODULE_4__["HelloWorldDemoRoutingModule"]
            ],
            exports: [_hello_world_demo_component__WEBPACK_IMPORTED_MODULE_3__["HelloWorldDemoComponent"]]
        })
    ], HelloWorldDemoModule);
    return HelloWorldDemoModule;
}());



/***/ }),

/***/ "./src/app/hello-world-demo/index.ts":
/*!*******************************************!*\
  !*** ./src/app/hello-world-demo/index.ts ***!
  \*******************************************/
/*! exports provided: HelloWorldDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hello_world_demo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hello-world-demo.module */ "./src/app/hello-world-demo/hello-world-demo.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelloWorldDemoModule", function() { return _hello_world_demo_module__WEBPACK_IMPORTED_MODULE_0__["HelloWorldDemoModule"]; });




/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"1200\"\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph>\n\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n\n                <ng-joint-angular-element *ngFor=\"let customNgEl of customNgEls\"\n                    [id]=\"customNgEl.id\"\n                    [(x)]=\"customNgEl.x\"\n                    [(y)]=\"customNgEl.y\"\n                    [(width)]=\"customNgEl.width\"\n                    [(height)]=\"customNgEl.height\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                ({{ customNgEl.id }}): {{ customNgEl.testFieldA }} \n                            </mat-card-title>\n                            <mat-card-subtitle>\n                                ({{ customNgEl.x }}, {{ customNgEl.y }})\n                            </mat-card-subtitle>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonXPlus10(customNgEl)\">\n                                x + 10\n                            </button>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonYPlus10(customNgEl)\">\n                                y + 10\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n\n            </ng-joint-shapes-angular>\n\n        </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>"

/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdC1kaXItZGVtby9iaS1kaXItYmluZC1uZy1lbGVtZW50LWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BiDirBindNgElementExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiDirBindNgElementExampleComponent", function() { return BiDirBindNgElementExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BiDirBindNgElementExampleComponent = /** @class */ (function () {
    function BiDirBindNgElementExampleComponent() {
        this.customNgEls = [
            {
                id: 'Element 1',
                x: 100,
                y: 100,
                height: 10,
                width: 200,
                testFieldA: 'TestField1'
            },
            {
                id: 'Element 2',
                x: 200,
                y: 350,
                height: 10,
                width: 200,
                testFieldA: 'TestField2'
            }
        ];
    }
    // example how to use events inside Angular Elements
    BiDirBindNgElementExampleComponent.prototype.onClickMatButtonXPlus10 = function (customNgEl) {
        customNgEl.x = customNgEl.x + 10;
    };
    // example how to use events inside Angular Elements
    BiDirBindNgElementExampleComponent.prototype.onClickMatButtonYPlus10 = function (customNgEl) {
        customNgEl.y = customNgEl.y + 10;
    };
    // you can handle paper:elementpointerclick events
    // (other events will be added in later versions of this Library)
    BiDirBindNgElementExampleComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick(id: ' + id + ')');
    };
    BiDirBindNgElementExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bi-dir-bind-ng-element-example',
            template: __webpack_require__(/*! ./bi-dir-bind-ng-element-example.component.html */ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.html"),
            styles: [__webpack_require__(/*! ./bi-dir-bind-ng-element-example.component.scss */ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.scss")]
        })
    ], BiDirBindNgElementExampleComponent);
    return BiDirBindNgElementExampleComponent;
}());



/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"1200\"\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph>\n\n        <ng-joint-shapes>\n\n            <ng-joint-shapes-standard>\n\n                <ng-joint-standard-rectangle *ngFor=\"let rect of rects\"\n                    (elementPointerClick)=\"onElementPointerClick($event)\"\n                    [id]=\"rect.id\"\n                    [x]=\"rect.x\"\n                    [y]=\"rect.y\"\n                    [width]=\"rect.width\"\n                    [height]=\"rect.height\"\n                    [body]=\"rect.body\"\n                    [label]=\"rect.label\">\n                </ng-joint-standard-rectangle>\n\n                <ng-joint-standard-link *ngFor=\"let link of links\"\n                    [id]=\"link.id\"\n                    [sourceId]=\"link.sourceId\"\n                    [targetId]=\"link.targetId\"\n                    [line]=\"link.line\">\n                </ng-joint-standard-link>\n\n            </ng-joint-shapes-standard>\n\n        </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdC1kaXItZGVtby9iaS1kaXItYmluZC1zdGFuZGFyZC1zaGFwZXMtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.ts ***!
  \**********************************************************************************/
/*! exports provided: BiDirBindStandardShapesExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiDirBindStandardShapesExampleComponent", function() { return BiDirBindStandardShapesExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BiDirBindStandardShapesExampleComponent = /** @class */ (function () {
    function BiDirBindStandardShapesExampleComponent() {
        this.rects = [
            {
                id: 'rect',
                x: 10,
                y: 30,
                width: 100,
                height: 40,
                body: { fill: 'blue' },
                label: { text: 'Hello', fill: 'white' }
            },
            {
                id: 'rect1',
                x: 310,
                y: 30,
                width: 100,
                height: 40,
                body: { fill: 'blue' },
                label: { text: 'World!', fill: 'white' }
            },
            {
                id: 'rect2',
                x: 610,
                y: 30,
                width: 100,
                height: 40,
                body: { fill: 'blue' },
                label: { text: 'And Universe!', fill: 'green' }
            }
        ];
        this.links = [
            { id: 'link1', sourceId: 'rect', targetId: 'rect1', line: { stroke: '#fe854f' } },
            { id: 'link2', sourceId: 'rect1', targetId: 'rect2', line: { strokeWidth: 8 } }
        ];
    }
    BiDirBindStandardShapesExampleComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick(id: ' + id + ')');
    };
    BiDirBindStandardShapesExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bi-dir-bind-standard-shapes-example',
            template: __webpack_require__(/*! ./bi-dir-bind-standard-shapes-example.component.html */ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.html"),
            styles: [__webpack_require__(/*! ./bi-dir-bind-standard-shapes-example.component.scss */ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BiDirBindStandardShapesExampleComponent);
    return BiDirBindStandardShapesExampleComponent;
}());



/***/ }),

/***/ "./src/app/struct-dir-demo/index.ts":
/*!******************************************!*\
  !*** ./src/app/struct-dir-demo/index.ts ***!
  \******************************************/
/*! exports provided: StructDirDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _struct_dir_demo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./struct-dir-demo.module */ "./src/app/struct-dir-demo/struct-dir-demo.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StructDirDemoModule", function() { return _struct_dir_demo_module__WEBPACK_IMPORTED_MODULE_0__["StructDirDemoModule"]; });




/***/ }),

/***/ "./src/app/struct-dir-demo/struct-dir-demo-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/struct-dir-demo/struct-dir-demo-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: StructDirDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructDirDemoRoutingModule", function() { return StructDirDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _struct_dir_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./struct-dir-demo.component */ "./src/app/struct-dir-demo/struct-dir-demo.component.ts");




var demoModuleRoutes = [
    { path: 'struct-dir-demo', component: _struct_dir_demo_component__WEBPACK_IMPORTED_MODULE_3__["StructDirDemoComponent"] }
];
var StructDirDemoRoutingModule = /** @class */ (function () {
    function StructDirDemoRoutingModule() {
    }
    StructDirDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(demoModuleRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], StructDirDemoRoutingModule);
    return StructDirDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/struct-dir-demo/struct-dir-demo.component.html":
/*!****************************************************************!*\
  !*** ./src/app/struct-dir-demo/struct-dir-demo.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group>\n\n    <mat-tab label=\"Bi-Diectional Binding Angular Element Example\">\n        <ng-template matTabContent>\n            <app-bi-dir-bind-ng-element-example></app-bi-dir-bind-ng-element-example>\n        </ng-template>\n    </mat-tab>\n\n    <mat-tab label=\"Bi-Diectional Binding Standard Shapes Example\">\n        <ng-template matTabContent>\n            <app-bi-dir-bind-standard-shapes-example></app-bi-dir-bind-standard-shapes-example>\n        </ng-template>\n    </mat-tab>\n\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/struct-dir-demo/struct-dir-demo.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/struct-dir-demo/struct-dir-demo.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0cnVjdC1kaXItZGVtby9zdHJ1Y3QtZGlyLWRlbW8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/struct-dir-demo/struct-dir-demo.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/struct-dir-demo/struct-dir-demo.component.ts ***!
  \**************************************************************/
/*! exports provided: StructDirDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructDirDemoComponent", function() { return StructDirDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StructDirDemoComponent = /** @class */ (function () {
    function StructDirDemoComponent() {
    }
    StructDirDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-struct-dir-demo',
            template: __webpack_require__(/*! ./struct-dir-demo.component.html */ "./src/app/struct-dir-demo/struct-dir-demo.component.html"),
            styles: [__webpack_require__(/*! ./struct-dir-demo.component.scss */ "./src/app/struct-dir-demo/struct-dir-demo.component.scss")]
        })
    ], StructDirDemoComponent);
    return StructDirDemoComponent;
}());



/***/ }),

/***/ "./src/app/struct-dir-demo/struct-dir-demo.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/struct-dir-demo/struct-dir-demo.module.ts ***!
  \***********************************************************/
/*! exports provided: StructDirDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructDirDemoModule", function() { return StructDirDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _struct_dir_demo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./struct-dir-demo.component */ "./src/app/struct-dir-demo/struct-dir-demo.component.ts");
/* harmony import */ var _struct_dir_demo_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./struct-dir-demo-routing.module */ "./src/app/struct-dir-demo/struct-dir-demo-routing.module.ts");
/* harmony import */ var _bi_dir_bind_ng_element_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bi-dir-bind-ng-element-example.component */ "./src/app/struct-dir-demo/bi-dir-bind-ng-element-example.component.ts");
/* harmony import */ var _bi_dir_bind_standard_shapes_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bi-dir-bind-standard-shapes-example.component */ "./src/app/struct-dir-demo/bi-dir-bind-standard-shapes-example.component.ts");









var StructDirDemoModule = /** @class */ (function () {
    function StructDirDemoModule() {
    }
    StructDirDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _struct_dir_demo_component__WEBPACK_IMPORTED_MODULE_5__["StructDirDemoComponent"],
                _bi_dir_bind_ng_element_example_component__WEBPACK_IMPORTED_MODULE_7__["BiDirBindNgElementExampleComponent"],
                _bi_dir_bind_standard_shapes_example_component__WEBPACK_IMPORTED_MODULE_8__["BiDirBindStandardShapesExampleComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["ShapesStandardModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["ShapesAngularModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
                _struct_dir_demo_routing_module__WEBPACK_IMPORTED_MODULE_6__["StructDirDemoRoutingModule"]
            ],
            exports: [_struct_dir_demo_component__WEBPACK_IMPORTED_MODULE_5__["StructDirDemoComponent"]]
        })
    ], StructDirDemoModule);
    return StructDirDemoModule;
}());



/***/ }),

/***/ "./src/app/uml-class-diagram-demo/index.ts":
/*!*************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/index.ts ***!
  \*************************************************/
/*! exports provided: UmlClassDiagramDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uml_class_diagram_demo_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uml-class-diagram-demo.module */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramDemoModule", function() { return _uml_class_diagram_demo_module__WEBPACK_IMPORTED_MODULE_0__["UmlClassDiagramDemoModule"]; });




/***/ }),

/***/ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/uml-class-diagram-demo-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: UmlClassDiagramDemoRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramDemoRoutingModule", function() { return UmlClassDiagramDemoRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _uml_class_diagram_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uml-class-diagram-demo.component */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.ts");




var demoModuleRoutes = [
    { path: 'uml-class-diagram-demo', component: _uml_class_diagram_demo_component__WEBPACK_IMPORTED_MODULE_3__["UmlClassDiagramDemoComponent"] }
];
var UmlClassDiagramDemoRoutingModule = /** @class */ (function () {
    function UmlClassDiagramDemoRoutingModule() {
    }
    UmlClassDiagramDemoRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(demoModuleRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], UmlClassDiagramDemoRoutingModule);
    return UmlClassDiagramDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  {{ umlClasses[0].name }}({{ umlClasses[0].x }}, {{ umlClasses[0].y }})\n</div>\n\n<ng-joint-dia-paper\n  [width]=\"1200\"\n  [height]=\"600\"\n  [gridSize]=\"10\"\n  [drawGrid]=\"true\">\n\n  <ng-joint-dia-graph>\n\n    <ng-joint-shapes>\n\n      <ng-joint-shapes-uml>\n\n        <ng-joint-uml-interface *ngFor=\"let umlInterface of umlInterfaces\"\n          [id]=\"umlInterface.id\"\n          [x]=\"umlInterface.x\"\n          [y]=\"umlInterface.y\"\n          [width]=\"umlInterface.width\"\n          [height]=\"umlInterface.height\"\n          [name]=\"umlInterface.name\"\n          [attributes]=\"umlInterface.attributes\"\n          [methods]=\"umlInterface.methods\"\n          [attrs]=\"umlInterface.attrs\">\n        </ng-joint-uml-interface>\n\n        <ng-joint-uml-abstract *ngFor=\"let umlAbstract of umlAbstracts\"\n          [id]=\"umlAbstract.id\"\n          [x]=\"umlAbstract.x\"\n          [y]=\"umlAbstract.y\"\n          [width]=\"umlAbstract.width\"\n          [height]=\"umlAbstract.height\"\n          [name]=\"umlAbstract.name\"\n          [attributes]=\"umlAbstract.attributes\"\n          [methods]=\"umlAbstract.methods\"\n          [attrs]=\"umlAbstract.attrs\">\n        </ng-joint-uml-abstract>\n\n        <ng-joint-uml-class *ngFor=\"let umlClass of umlClasses\"\n          [id]=\"umlClass.id\"\n          [(x)]=\"umlClass.x\"\n          [(y)]=\"umlClass.y\"\n          [width]=\"umlClass.width\"\n          [height]=\"umlClass.height\"\n          [name]=\"umlClass.name\"\n          [attributes]=\"umlClass.attributes\"\n          [methods]=\"umlClass.methods\"\n          [attrs]=\"umlClass.attrs\">\n        </ng-joint-uml-class>\n\n        <ng-joint-uml-generalization *ngFor=\"let umlGeneralization of umlGeneralizations\"\n          [id]=\"umlGeneralization.id\"\n          [sourceId]=\"umlGeneralization.sourceId\"\n          [targetId]=\"umlGeneralization.targetId\">\n        </ng-joint-uml-generalization>\n\n        <ng-joint-uml-implementation *ngFor=\"let umlImplementation of umlImplementations\"\n          [id]=\"umlImplementation.id\"\n          [sourceId]=\"umlImplementation.sourceId\"\n          [targetId]=\"umlImplementation.targetId\">\n        </ng-joint-uml-implementation>\n\n        <ng-joint-uml-aggregation *ngFor=\"let umlAggregation of umlAggregations\"\n          [id]=\"umlAggregation.id\"\n          [sourceId]=\"umlAggregation.sourceId\"\n          [targetId]=\"umlAggregation.targetId\">\n        </ng-joint-uml-aggregation>\n\n        <ng-joint-uml-composition *ngFor=\"let umlComposition of umlCompositions\"\n          [id]=\"umlComposition.id\"\n          [sourceId]=\"umlComposition.sourceId\"\n          [targetId]=\"umlComposition.targetId\">\n        </ng-joint-uml-composition>\n\n      </ng-joint-shapes-uml>\n\n    </ng-joint-shapes>\n\n  </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VtbC1jbGFzcy1kaWFncmFtLWRlbW8vdW1sLWNsYXNzLWRpYWdyYW0tZGVtby5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.ts ***!
  \****************************************************************************/
/*! exports provided: UmlClassDiagramDemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramDemoComponent", function() { return UmlClassDiagramDemoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");

/**
 * Angular Component supported by NgJoint Library: JointJs UML Class Diagram Demo
 * Based on @see https://resources.jointjs.com/demos/joint/demo/umlcd/src/umlcd.js
 */


var UmlClassDiagramDemoComponent = /** @class */ (function () {
    function UmlClassDiagramDemoComponent(service) {
        this.service = service;
        this.umlInterfaces = [
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
        this.umlAbstracts = [
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
        this.umlClasses = [
            {
                id: 'bloodgroup',
                x: 20, y: 190,
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
                x: 450, y: 500,
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
        this.umlGeneralizations = [
            { id: 'gen1', sourceId: 'man', targetId: 'person' },
            { id: 'gen2', sourceId: 'woman', targetId: 'person' }
        ];
        this.umlImplementations = [
            { id: 'impl1', sourceId: 'person', targetId: 'mammal' }
        ];
        this.umlAggregations = [
            { id: 'aggr1', sourceId: 'person', targetId: 'address' }
        ];
        this.umlCompositions = [
            { id: 'comp1', sourceId: 'person', targetId: 'bloodgroup' }
        ];
        this._cacheData = {
            umlInterfaces: this.umlInterfaces,
            umlAbstracts: this.umlAbstracts,
            umlClasses: this.umlClasses,
            umlGeneralizations: this.umlGeneralizations,
            umlImplementations: this.umlImplementations,
            umlAggregations: this.umlAggregations,
            umlCompositions: this.umlCompositions
        };
    }
    UmlClassDiagramDemoComponent.prototype.ngOnInit = function () {
        var data = this.service.getCache(this.constructor.name);
        if (data) {
            this._cacheData = data;
        }
    };
    UmlClassDiagramDemoComponent.prototype.ngOnDestroy = function () {
        this.service.setCache(this.constructor.name, this._cacheData);
    };
    UmlClassDiagramDemoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uml-class-diagram-demo',
            template: __webpack_require__(/*! ./uml-class-diagram-demo.component.html */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.html"),
            styles: [__webpack_require__(/*! ./uml-class-diagram-demo.component.scss */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_2__["NgJointService"]])
    ], UmlClassDiagramDemoComponent);
    return UmlClassDiagramDemoComponent;
}());



/***/ }),

/***/ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/uml-class-diagram-demo/uml-class-diagram-demo.module.ts ***!
  \*************************************************************************/
/*! exports provided: UmlClassDiagramDemoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramDemoModule", function() { return UmlClassDiagramDemoModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _uml_class_diagram_demo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uml-class-diagram-demo.component */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo.component.ts");
/* harmony import */ var _uml_class_diagram_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uml-class-diagram-demo-routing.module */ "./src/app/uml-class-diagram-demo/uml-class-diagram-demo-routing.module.ts");






var UmlClassDiagramDemoModule = /** @class */ (function () {
    function UmlClassDiagramDemoModule() {
    }
    UmlClassDiagramDemoModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_uml_class_diagram_demo_component__WEBPACK_IMPORTED_MODULE_4__["UmlClassDiagramDemoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesUmlModule"],
                _uml_class_diagram_demo_routing_module__WEBPACK_IMPORTED_MODULE_5__["UmlClassDiagramDemoRoutingModule"]
            ],
            exports: [_uml_class_diagram_demo_component__WEBPACK_IMPORTED_MODULE_4__["UmlClassDiagramDemoComponent"]]
        })
    ], UmlClassDiagramDemoModule);
    return UmlClassDiagramDemoModule;
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