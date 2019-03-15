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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





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
var NgJointService = /** @class */ (function () {
    function NgJointService() {
        /**
         * jointjs internal events subjects
         */
        this.jointEventSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     */
    /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     * @param {?} jointjsPaperObject
     * @return {?}
     */
    NgJointService.prototype.onDiaPaperEvents = /**
     * jointjs internal dia.Paper.event subject handling
     *
     * Based on: https://resources.jointjs.com/docs/jointjs/v2.2/joint.html#dia.Paper.events
     *
     *    onDiaPaperEvents()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             V
     *    NgJointService.jointEventSubject.next()
     *             |
     *             ? -> DiaGPaperComponent -> emit()
     *             |
     *             ? -> DiaGraphComponent -> emit()
     *             |
     *             + -> ShapeService
     *                     |
     *                     + onElementEvents()
     *                     |    |
     *                     |    ?-> GenericElementShapeComponent -> emit()
     *                     |
     *                     + onLinkEvents(..)
     *                          |
     *                          ? -> GenericLinkShapeComponent -> emit()
     *
     * @param {?} jointjsPaperObject
     * @return {?}
     */
    function (jointjsPaperObject) {
        var _this = this;
        jointjsPaperObject
            .on('element:pointerclick', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this.jointEventSubject.next({ cid: context.model.cid, eventSource: 'element', eventType: 'pointerclick' });
        }))
            .on('link:pointerclick', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) {
            _this.jointEventSubject.next({ cid: context.model.cid, eventSource: 'link', eventType: 'pointerclick' });
        }));
    };
    NgJointService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgJointService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgJointService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function NgJointService_Factory() { return new NgJointService(); }, token: NgJointService, providedIn: "root" });
    return NgJointService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Angular Joint Dia Paper Service:
 */
var DiaPaperService = /** @class */ (function () {
    function DiaPaperService(service) {
        this.service = service;
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
     * NgJoint Component Event handling
     */
    /**
     * NgJoint Component Event handling
     * @param {?} component
     * @return {?}
     */
    DiaPaperService.prototype.onEvents = /**
     * NgJoint Component Event handling
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // handling of internal joinjs dia.Paper object events => Angular Emitors
        this.service.onDiaPaperEvents(component.paperInstance.jointjsObject);
    };
    DiaPaperService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaPaperService.ctorParameters = function () { return [
        { type: NgJointService }
    ]; };
    /** @nocollapse */ DiaPaperService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DiaPaperService_Factory() { return new DiaPaperService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(NgJointService)); }, token: DiaPaperService, providedIn: "root" });
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
        this.xChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.yChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.widthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * @ignore
         */
        this.heightChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Paper event (element:pointer:click)
         */
        this.elementPointerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        x: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        xChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        y: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        yChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        widthChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        heightChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        elementPointerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
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
        /**
         * jointjs.dia.Paper event (link:pointer:click)
         */
        this.linkPointerClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
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
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        sourceId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        targetId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        linkPointerClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
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
    function ShapesService(service) {
        this.service = service;
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
            if (component[key] instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["QueryList"]) {
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
        // console.log('elements', elements);
        // console.log('links', links);
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
        // emit events on element level. Does seperate event-sources (element instances)
        // on the angular HTML-template
        this.service.jointEventSubject.subscribe((/**
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
        // jointjs internal link event handling
        // bi-directional data changes
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
        // jointjs internal paper event handling
        // emit events on link level. Does seperate event-sources (element instances)
        // on the angular HTML-template
        this.service.jointEventSubject.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            if (event.eventSource === 'link') {
                if (event.eventType === 'pointerclick') {
                    if ((event.cid === component.shapeInstance.jointjsObject.cid)) {
                        component.linkPointerClick.emit(event.cid);
                    }
                }
            }
        }));
    };
    /**
     * returns al generic dia element options
     */
    /**
     * returns al generic dia element options
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.elementShapeOptions = /**
     * returns al generic dia element options
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
     * configure al generic dia shape (element or link) settings
     */
    /**
     * configure al generic dia shape (element or link) settings
     * @param {?} component
     * @return {?}
     */
    ShapesService.prototype.configShapeAttrs = /**
     * configure al generic dia shape (element or link) settings
     * @param {?} component
     * @return {?}
     */
    function (component) {
        // shape attrs config
        /** @type {?} */
        var shape = component.shapeInstance.jointjsObject;
        for (var prop in shape.attributes.attrs) {
            if (component[prop]) {
                this.setAttrProp(shape, prop, component[prop]);
            }
        }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesService.ctorParameters = function () { return [
        { type: NgJointService }
    ]; };
    /** @nocollapse */ ShapesService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesService_Factory() { return new ShapesService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(NgJointService)); }, token: ShapesService, providedIn: "root" });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        line: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
     * @param {?} component
     * @return {?}
     */
    ShapesStandardService.prototype.elementShapeOptions = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        return this.service.elementShapeOptions(component);
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
        // shape attrs config
        this.service.configShapeAttrs(component);
        // Cylinder shape extra config
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesStandardService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesStandardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesStandardService_Factory() { return new ShapesStandardService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService)); }, token: ShapesStandardService, providedIn: "root" });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardLinkService_Factory() { return new StandardLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardLinkService, providedIn: "root" });
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
        return _this;
    }
    StandardLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardDoubleLinkService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardDoubleLinkService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardDoubleLinkService_Factory() { return new StandardDoubleLinkService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardDoubleLinkService, providedIn: "root" });
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
        return _this;
    }
    StandardDoubleLinkComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-double-link',
                    template: "\n    <!-- joint.shapes.standard.DoubleLink  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardDoubleLinkComponent.ctorParameters = function () { return [
        { type: StandardDoubleLinkService }
    ]; };
    StandardDoubleLinkComponent.propDecorators = {
        outline: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardRectangleService_Factory() { return new StandardRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardRectangleService, providedIn: "root" });
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
        return _this;
    }
    StandardRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-rectangle',
                    template: "\n    <!-- joint.shapes.standard.Rectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardRectangleComponent.ctorParameters = function () { return [
        { type: StandardRectangleService }
    ]; };
    StandardRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolylineService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolylineService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPolylineService_Factory() { return new StandardPolylineService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPolylineService, providedIn: "root" });
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
        return _this;
    }
    StandardPolylineComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-polyline',
                    template: "\n    <!-- joint.shapes.standard.Polyline  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolylineComponent.ctorParameters = function () { return [
        { type: StandardPolylineService }
    ]; };
    StandardPolylineComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPolygonService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPolygonService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPolygonService_Factory() { return new StandardPolygonService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPolygonService, providedIn: "root" });
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
        return _this;
    }
    StandardPolygonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-polygon',
                    template: "\n    <!-- joint.shapes.standard.Polygon  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPolygonComponent.ctorParameters = function () { return [
        { type: StandardPolygonService }
    ]; };
    StandardPolygonComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardPathService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardPathService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardPathService_Factory() { return new StandardPathService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardPathService, providedIn: "root" });
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
        return _this;
    }
    StandardPathComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-path',
                    template: "\n    <!-- joint.shapes.standard.Path  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardPathComponent.ctorParameters = function () { return [
        { type: StandardPathService }
    ]; };
    StandardPathComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardInscribedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardInscribedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardInscribedImageService_Factory() { return new StandardInscribedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardInscribedImageService, providedIn: "root" });
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
        return _this;
    }
    StandardInscribedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-inscribed-image',
                    template: "\n    <!-- joint.shapes.standard.InscribedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardInscribedImageComponent.ctorParameters = function () { return [
        { type: StandardInscribedImageService }
    ]; };
    StandardInscribedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardImageService_Factory() { return new StandardImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardImageService, providedIn: "root" });
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
        return _this;
    }
    StandardImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-image',
                    template: "\n    <!-- joint.shapes.standard.Image  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardImageComponent.ctorParameters = function () { return [
        { type: StandardImageService }
    ]; };
    StandardImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardHeaderedRectangleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardHeaderedRectangleService_Factory() { return new StandardHeaderedRectangleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardHeaderedRectangleService, providedIn: "root" });
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
        return _this;
    }
    StandardHeaderedRectangleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-headered-rectangle',
                    template: "\n    <!-- joint.shapes.standard.HeaderedRectangle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardHeaderedRectangleComponent.ctorParameters = function () { return [
        { type: StandardHeaderedRectangleService }
    ]; };
    StandardHeaderedRectangleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        header: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        headerText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        bodyText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEmbeddedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardEmbeddedImageService_Factory() { return new StandardEmbeddedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardEmbeddedImageService, providedIn: "root" });
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
        return _this;
    }
    StandardEmbeddedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-embedded-image',
                    template: "\n    <!-- joint.shapes.standard.EmbeddedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEmbeddedImageComponent.ctorParameters = function () { return [
        { type: StandardEmbeddedImageService }
    ]; };
    StandardEmbeddedImageComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardEllipseService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardEllipseService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardEllipseService_Factory() { return new StandardEllipseService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardEllipseService, providedIn: "root" });
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
        return _this;
    }
    StandardEllipseComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-ellipse',
                    template: "\n    <!-- joint.shapes.standard.Ellipse  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardEllipseComponent.ctorParameters = function () { return [
        { type: StandardEllipseService }
    ]; };
    StandardEllipseComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCylinderService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCylinderService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardCylinderService_Factory() { return new StandardCylinderService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardCylinderService, providedIn: "root" });
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
        return _this;
    }
    StandardCylinderComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-cylinder',
                    template: "\n    <!-- joint.shapes.standard.Cylinder  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCylinderComponent.ctorParameters = function () { return [
        { type: StandardCylinderService }
    ]; };
    StandardCylinderComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        top: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        topRy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardCircleService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardCircleService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardCircleService_Factory() { return new StandardCircleService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardCircleService, providedIn: "root" });
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
        return _this;
    }
    StandardCircleComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-circle',
                    template: "\n    <!-- joint.shapes.standard.Circle  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardCircleComponent.ctorParameters = function () { return [
        { type: StandardCircleService }
    ]; };
    StandardCircleComponent.propDecorators = {
        body: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StandardBorderedImageService.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    /** @nocollapse */ StandardBorderedImageService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function StandardBorderedImageService_Factory() { return new StandardBorderedImageService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesStandardService)); }, token: StandardBorderedImageService, providedIn: "root" });
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
        return _this;
    }
    StandardBorderedImageComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-standard-bordered-image',
                    template: "\n    <!-- joint.shapes.standard.BorderedImage  -->\n  "
                }] }
    ];
    /** @nocollapse */
    StandardBorderedImageComponent.ctorParameters = function () { return [
        { type: StandardBorderedImageService }
    ]; };
    StandardBorderedImageComponent.propDecorators = {
        image: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        border: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        background: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        label: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-standard',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesStandardComponent.ctorParameters = function () { return [
        { type: ShapesStandardService }
    ]; };
    ShapesStandardComponent.propDecorators = {
        standardBorderedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardBorderedImageComponent,] }],
        standardCircles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardCircleComponent,] }],
        standardCylinders: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardCylinderComponent,] }],
        standardEllipses: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardEllipseComponent,] }],
        standardEmbeddedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardEmbeddedImageComponent,] }],
        standardHeaderedRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardHeaderedRectangleComponent,] }],
        standardImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardImageComponent,] }],
        standardInscribedImages: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardInscribedImageComponent,] }],
        standardPaths: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPathComponent,] }],
        standardPolygons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPolygonComponent,] }],
        standardPolylines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardPolylineComponent,] }],
        standardRectangles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardRectangleComponent,] }],
        standardDoubleLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardDoubleLinkComponent,] }],
        standardLinks: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [StandardLinkComponent,] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        return this.service.elementShapeOptions(component);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesAngularService.ctorParameters = function () { return [
        { type: ShapesService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"] }
    ]; };
    /** @nocollapse */ ShapesAngularService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesAngularService_Factory() { return new ShapesAngularService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["RendererFactory2"])); }, token: ShapesAngularService, providedIn: "root" });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    AngularElementService.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    /** @nocollapse */ AngularElementService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function AngularElementService_Factory() { return new AngularElementService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesAngularService)); }, token: AngularElementService, providedIn: "root" });
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
        return _this;
    }
    AngularElementComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-angular-element',
                    template: "\n    <div class=\"angular-element\">\n      <ng-content></ng-content>\n    </div>\n    <!-- joint.shapes.angular.Element  -->\n  ",
                    styles: ["\n   .angular-element {\n     pointer-events: none;\n     -moz-user-select: none;\n     -ms-user-select: none;\n     user-select: none;\n     -webkit-user-select: none;\n     position: absolute;\n     z-index: 2\n   }\n  "]
                }] }
    ];
    /** @nocollapse */
    AngularElementComponent.ctorParameters = function () { return [
        { type: AngularElementService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-angular',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesAngularComponent.ctorParameters = function () { return [
        { type: ShapesAngularService }
    ]; };
    ShapesAngularComponent.propDecorators = {
        angularElements: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [AngularElementComponent,] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        name: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        attributes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        methods: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        attrs: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ShapesUmlService.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    /** @nocollapse */ ShapesUmlService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function ShapesUmlService_Factory() { return new ShapesUmlService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesService)); }, token: ShapesUmlService, providedIn: "root" });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlImplementationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlImplementationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlImplementationService_Factory() { return new UmlImplementationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlImplementationService, providedIn: "root" });
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
        return _this;
    }
    UmlImplementationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlGeneralizationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlGeneralizationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlGeneralizationService_Factory() { return new UmlGeneralizationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlGeneralizationService, providedIn: "root" });
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
        return _this;
    }
    UmlGeneralizationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlCompositionService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlCompositionService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlCompositionService_Factory() { return new UmlCompositionService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlCompositionService, providedIn: "root" });
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
        return _this;
    }
    UmlCompositionComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAggregationService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAggregationService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlAggregationService_Factory() { return new UmlAggregationService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlAggregationService, providedIn: "root" });
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
        return _this;
    }
    UmlAggregationComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlInterfaceService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlInterfaceService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlInterfaceService_Factory() { return new UmlInterfaceService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlInterfaceService, providedIn: "root" });
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
        return _this;
    }
    UmlInterfaceComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlClassService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlClassService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlClassService_Factory() { return new UmlClassService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlClassService, providedIn: "root" });
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
        return _this;
    }
    UmlClassComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    UmlAbstractService.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    /** @nocollapse */ UmlAbstractService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function UmlAbstractService_Factory() { return new UmlAbstractService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(ShapesUmlService)); }, token: UmlAbstractService, providedIn: "root" });
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
        return _this;
    }
    UmlAbstractComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes-uml',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesUmlComponent.ctorParameters = function () { return [
        { type: ShapesUmlService }
    ]; };
    ShapesUmlComponent.propDecorators = {
        umlAbstracts: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlAbstractComponent,] }],
        umlClasss: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlClassComponent,] }],
        umlInterfaces: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlInterfaceComponent,] }],
        umlAggregations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlAggregationComponent,] }],
        umlCompositions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlCompositionComponent,] }],
        umlGeneralizations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlGeneralizationComponent,] }],
        umlImplementations: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [UmlImplementationComponent,] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-shapes',
                    template: "\n    <ng-content></ng-content>\n    "
                }] }
    ];
    /** @nocollapse */
    ShapesComponent.ctorParameters = function () { return [
        { type: ShapesService }
    ]; };
    ShapesComponent.propDecorators = {
        shapesStandard: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesStandardComponent,] }],
        shapesAngular: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesAngularComponent,] }],
        shapesUml: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesUmlComponent,] }]
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
    /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     */
    /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     * @param {?} component
     * @return {?}
     */
    DiaGraphService.prototype.onEvents = /**
     * handling jointjs.dia.Graph events on Angular Component HTML-template
     * @param {?} component
     * @return {?}
     */
    function (component) {
        component.graphInstance.jointjsObject
            .on('change', (/**
         * @param {?} context
         * @return {?}
         */
        function (context) { return component.anyChange.emit(context); }))
            .on('add', (/**
         * @param {?} cell
         * @return {?}
         */
        function (cell) { return component.cellAdd.emit(cell.cid); }))
            .on('remove', (/**
         * @param {?} cell
         * @return {?}
         */
        function (cell) { return component.cellRemove.emit(cell.cid); }));
    };
    DiaGraphService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    DiaGraphService.ctorParameters = function () { return []; };
    /** @nocollapse */ DiaGraphService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DiaGraphService_Factory() { return new DiaGraphService(); }, token: DiaGraphService, providedIn: "root" });
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
        /**
         * jointjs.dia.Graph event (change)
         */
        this.anyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Graph event (add)
         */
        this.cellAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * jointjs.dia.Graph event (remove)
         */
        this.cellRemove = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.graphInstance = this.service.createGraph();
        this.service.onEvents(this);
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-dia-graph',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    DiaGraphComponent.ctorParameters = function () { return [
        { type: DiaGraphService }
    ]; };
    DiaGraphComponent.propDecorators = {
        shapes: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [ShapesComponent,] }],
        anyChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cellAdd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
        cellRemove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }]
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
        this.service.onEvents(this);
    };
    DiaPaperComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"], args: [{
                    selector: 'ng-joint-dia-paper',
                    template: "<ng-content></ng-content>\n<div #dgwnudiapaper></div>",
                    encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None
                }] }
    ];
    /** @nocollapse */
    DiaPaperComponent.ctorParameters = function () { return [
        { type: DiaPaperService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }
    ]; };
    DiaPaperComponent.propDecorators = {
        diaPaperElRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['dgwnudiapaper',] }],
        graph: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [DiaGraphComponent,] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        gridSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        drawGrid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
var DiaModule = /** @class */ (function () {
    function DiaModule() {
    }
    DiaModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
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

/***/ "./src/app/app-generic.service.ts":
/*!****************************************!*\
  !*** ./src/app/app-generic.service.ts ***!
  \****************************************/
/*! exports provided: AppGenericService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppGenericService", function() { return AppGenericService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppGenericService = /** @class */ (function () {
    function AppGenericService() {
        this.mainTitle = 'ng-joint';
        this.subTitle = '<<not initialzied>>';
        this._appSourceUrl = 'https://raw.githubusercontent.com/dgwnu/ng-joint/master/src/app';
        this.shapesStandardExamplesSourceUrl = this._appSourceUrl + '/shapes-standard-examples';
    }
    AppGenericService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppGenericService);
    return AppGenericService;
}());



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
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");




var matModules = [
    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");




var appRoutes = [
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
    { path: '**', redirectTo: '/page-not-found', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].traceRoutes } // <-- debugging purposes only
                )
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
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

module.exports = "<mat-toolbar color=\"primary\">\n    {{service.mainTitle}} {{service.subTitle}} \n</mat-toolbar>\n\n<div fxLayout=\"row\">\n\n    <mat-card class=\"menu-card\">\n        <mat-card-content>\n\n            <mat-accordion\n                [displayMode]=\"accordionDisplayMode\"\n                [hideToggle]=\"accordionHideToggle\"\n                [multi]=\"accordionMulti\"\n                #accordion=\"matAccordion\"\n            >\n\n                <mat-expansion-panel *ngFor=\"let menuOption of menuOptions\"\n                    [expanded]=\"expansionPanelExpanded\"\n                    (afterCollapse)=\"afterCollapse(menuOption)\"\n                    (afterExpand)=\"afterExpand(menuOption)\"\n                >\n                    <mat-expansion-panel-header\n                        [collapsedHeight]=\"expensionPanelHeaderCollapsedHeight\"\n                        [expandedHeight]=\"expensionPanelHeaderExpandedHeight\"\n                    >\n                        <mat-panel-title>\n                            {{menuOption.title}}\n                        </mat-panel-title>\n                        <mat-panel-description>\n                            ({{menuOption.description}})\n                        </mat-panel-description>\n                    </mat-expansion-panel-header>\n\n                    <mat-action-row *ngFor=\"let child of menuOption.childs\">\n                        <a mat-button routerLink=\"/{{menuOption.path}}/{{child.path}}\">\n                            {{child.title}}\n                        </a>\n                    </mat-action-row>\n\n                </mat-expansion-panel>\n\n            </mat-accordion>\n\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card class=\"main-card\" fxFlex>\n        <mat-card-content>\n            <router-outlet></router-outlet>\n        </mat-card-content>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/* Theme for the ripple elements.*/\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/*! JointJS v2.2.1 (2018-11-12) - JavaScript diagramming library\n\n\nThis Source Code Form is subject to the terms of the Mozilla Public\nLicense, v. 2.0. If a copy of the MPL was not distributed with this\nfile, You can obtain one at http://mozilla.org/MPL/2.0/.\n*/\n/*\nA complete list of SVG properties that can be set through CSS is here:\nhttp://www.w3.org/TR/SVG/styling.html\n\nImportant note: Presentation attributes have a lower precedence over CSS style rules.\n*/\n/* .viewport is a <g> node wrapping all diagram elements in the paper */\n.joint-viewport {\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none;\n}\n.joint-paper > svg,\n.joint-paper-background,\n.joint-paper-grid {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n/*\n1. IE can't handle paths without the `d` attribute for bounding box calculation\n2. IE can't even handle 'd' attribute as a css selector (e.g path[d]) so the following rule will\n   break the links rendering.\n\npath:not([d]) {\n    display: none;\n}\n\n*/\n/* magnet is an element that can be either source or a target of a link */\n[magnet=true]:not(.joint-element) {\n   cursor: crosshair;\n}\n[magnet=true]:not(.joint-element):hover {\n   opacity: .7;\n}\n/*\n\nElements have CSS classes named by their types. E.g. type: basic.Rect has a CSS class \"element basic Rect\".\nThis makes it possible to easilly style elements in CSS and have generic CSS rules applying to\nthe whole group of elements. Each plugin can provide its own stylesheet.\n\n*/\n.joint-element {\n   /* Give the user a hint that he can drag&drop the element. */\n   cursor: move;\n}\n.joint-element * {\n   user-drag: none;\n}\n.joint-element .scalable * {\n   /* The default behavior when scaling an element is not to scale the stroke in order to prevent the ugly effect of stroke with different proportions. */\n   vector-effect: non-scaling-stroke;\n}\n/*\n\nconnection-wrap is a <path> element of the joint.dia.Link that follows the .connection <path> of that link.\nIn other words, the `d` attribute of the .connection-wrap contains the same data as the `d` attribute of the\n.connection <path>. The advantage of using .connection-wrap is to be able to catch pointer events\nin the neighborhood of the .connection <path>. This is especially handy if the .connection <path> is\nvery thin.\n\n*/\n.marker-source,\n.marker-target {\n   /* This makes the arrowheads point to the border of objects even though the transform: scale() is applied on them. */\n   vector-effect: non-scaling-stroke;\n}\n/* Paper */\n.joint-paper {\n    position: relative;\n}\n/* Paper */\n/*  Highlighting  */\n.joint-highlight-opacity {\n    opacity: 0.3;\n}\n/*  Highlighting  */\n/*\n\nVertex markers are `<circle>` elements that appear at connection vertex positions.\n\n*/\n.joint-link .connection-wrap,\n.joint-link .connection {\n   fill: none;\n}\n/* <g> element wrapping .marker-vertex-group. */\n.marker-vertices {\n   opacity: 0;\n   cursor: move;\n}\n.marker-arrowheads {\n   opacity: 0;\n   cursor: move;\n   cursor: -webkit-grab;\n   cursor: -moz-grab;\n/*   display: none;   */   /* setting `display: none` on .marker-arrowheads effectivelly switches of links reconnecting */\n}\n.link-tools {\n   opacity: 0;\n   cursor: pointer;\n}\n.link-tools .tool-options {\n   display: none;       /* by default, we don't display link options tool */\n}\n.joint-link:hover .marker-vertices,\n.joint-link:hover .marker-arrowheads,\n.joint-link:hover .link-tools {\n   opacity: 1;\n}\n/* <circle> element used to remove a vertex */\n.marker-vertex-remove {\n   cursor: pointer;\n   opacity: .1;\n}\n.marker-vertex-group:hover .marker-vertex-remove {\n   opacity: 1;\n}\n.marker-vertex-remove-area {\n   opacity: .1;\n   cursor: pointer;\n}\n.marker-vertex-group:hover .marker-vertex-remove-area {\n   opacity: 1;\n}\n/*\nExample of custom changes (in pure CSS only!):\n\nDo not show marker vertices at all:  .marker-vertices { display: none; }\nDo not allow adding new vertices: .connection-wrap { pointer-events: none; }\n*/\n/* foreignObject inside the elements (i.e joint.shapes.basic.TextBlock) */\n.joint-element .fobj {\n    overflow: hidden;\n}\n.joint-element .fobj body {\n    background-color: transparent;\n    margin: 0px;\n    position: static;\n}\n.joint-element .fobj div {\n    text-align: center;\n    vertical-align: middle;\n    display: table-cell;\n    padding: 0px 5px 0px 5px;\n}\n/* Paper */\n.joint-paper.joint-theme-dark {\n    background-color: #18191b;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-dark .connection-wrap {\n    stroke: #8F8FF3;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-dark .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-dark .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove circle {\n    fill: #F33636;\n}\n.joint-link.joint-theme-dark .link-tools .tool-remove path {\n    fill: white;\n}\n.joint-link.joint-theme-dark .link-tools [event=\"link:options\"] circle {\n    fill: green;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-dark .marker-vertex {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-vertex:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n.joint-link.joint-theme-dark .marker-arrowhead {\n    fill: #5652DB;\n}\n.joint-link.joint-theme-dark .marker-arrowhead:hover {\n    fill: #8E8CE1;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-dark .marker-vertex-remove-area {\n    fill: green;\n    stroke: darkgreen;\n}\n.joint-link.joint-theme-dark .marker-vertex-remove {\n    fill: white;\n    stroke: white;\n}\n/*  Links  */\n/* Paper */\n.joint-paper.joint-theme-default {\n    background-color: #FFFFFF;\n}\n/* Paper */\n/*  Links  */\n.joint-link.joint-theme-default .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-default .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-default .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-default .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-default .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-default .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-default .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-default .marker-vertex-remove {\n    fill: #FFFFFF;\n}\n/*  Links  */\n@font-face {\n    font-family: 'lato-light';\n    src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n    font-weight: normal;\n    font-style: normal;\n}\n/*  Links  */\n.joint-link.joint-theme-material .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-material .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-material .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove circle {\n    fill: #C64242;\n}\n.joint-link.joint-theme-material .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-material .marker-vertex {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-vertex:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n.joint-link.joint-theme-material .marker-arrowhead {\n    fill: #d0d8e8;\n}\n.joint-link.joint-theme-material .marker-arrowhead:hover {\n    fill: #5fa9ee;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-material .marker-vertex-remove-area {\n    fill: #5fa9ee;\n}\n.joint-link.joint-theme-material .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n/*  Links  */\n.joint-link.joint-theme-modern .connection-wrap {\n    stroke: #000000;\n    stroke-width: 15;\n    stroke-linecap: round;\n    stroke-linejoin: round;\n    opacity: 0;\n    cursor: move;\n}\n.joint-link.joint-theme-modern .connection-wrap:hover {\n    opacity: .4;\n    stroke-opacity: .4;\n}\n.joint-link.joint-theme-modern .connection {\n    stroke-linejoin: round;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove circle {\n    fill: #FF0000;\n}\n.joint-link.joint-theme-modern .link-tools .tool-remove path {\n    fill: #FFFFFF;\n}\n/* <circle> element inside .marker-vertex-group <g> element */\n.joint-link.joint-theme-modern .marker-vertex {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-vertex:hover {\n    fill: #34495E;\n    stroke: none;\n}\n.joint-link.joint-theme-modern .marker-arrowhead {\n    fill: #1ABC9C;\n}\n.joint-link.joint-theme-modern .marker-arrowhead:hover {\n    fill: #F39C12;\n    stroke: none;\n}\n/* <circle> element used to remove a vertex */\n.joint-link.joint-theme-modern .marker-vertex-remove {\n    fill: white;\n}\n/*  Links  */\n.mat-badge-content {\n  font-weight: 600;\n  font-size: 12px;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-badge-small .mat-badge-content {\n  font-size: 6px; }\n.mat-badge-large .mat-badge-content {\n  font-size: 24px; }\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n.mat-h5, .mat-typography h5 {\n  font: 400 11.62px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-h6, .mat-typography h6 {\n  font: 400 9.38px/20px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 12px; }\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n.mat-bottom-sheet-container {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-button, .mat-raised-button, .mat-icon-button, .mat-stroked-button,\n.mat-flat-button, .mat-fab, .mat-mini-fab {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 500; }\n.mat-card-header .mat-card-title {\n  font-size: 20px; }\n.mat-card-subtitle,\n.mat-card-content {\n  font-size: 14px; }\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n.mat-chip {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-chip .mat-chip-trailing-icon.mat-icon,\n  .mat-chip .mat-chip-remove.mat-icon {\n    font-size: 18px; }\n.mat-table {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n.mat-cell, .mat-footer-cell {\n  font-size: 14px; }\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-calendar-body {\n  font-size: 13px; }\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-expansion-panel-header {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  font-weight: 400; }\n.mat-expansion-panel-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field {\n  font-size: inherit;\n  font-weight: 400;\n  line-height: 1.125;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-form-field-wrapper {\n  padding-bottom: 1.34375em; }\n.mat-form-field-prefix .mat-icon,\n.mat-form-field-suffix .mat-icon {\n  font-size: 150%;\n  line-height: 1.125; }\n.mat-form-field-prefix .mat-icon-button,\n.mat-form-field-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n.mat-form-field-prefix .mat-icon-button .mat-icon,\n  .mat-form-field-suffix .mat-icon-button .mat-icon {\n    height: 1.125em;\n    line-height: 1.125; }\n.mat-form-field-infix {\n  padding: 0.5em 0;\n  border-top: 0.84375em solid transparent; }\n.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.34375em) scale(0.75);\n          transform: translateY(-1.34375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.34374em) scale(0.75);\n          transform: translateY(-1.34374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-label-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n.mat-form-field-label {\n  top: 1.34375em; }\n.mat-form-field-underline {\n  bottom: 1.34375em; }\n.mat-form-field-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.66666667em;\n  top: calc(100% - 1.79166667em); }\n.mat-form-field-appearance-legacy .mat-form-field-wrapper {\n  padding-bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-infix {\n  padding: 0.4375em 0; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00101px);\n  -ms-transform: translateY(-1.28124em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n          transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.00102px);\n  -ms-transform: translateY(-1.28123em) scale(0.75);\n  width: 133.33335333%; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  top: 1.28125em; }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  bottom: 1.25em; }\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper {\n  margin-top: 0.54166667em;\n  top: calc(100% - 1.66666667em); }\n@media print {\n  .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n    -webkit-transform: translateY(-1.28122em) scale(0.75);\n            transform: translateY(-1.28122em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.28121em) scale(0.75);\n            transform: translateY(-1.28121em) scale(0.75); }\n  .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n    -webkit-transform: translateY(-1.2812em) scale(0.75);\n            transform: translateY(-1.2812em) scale(0.75); } }\n.mat-form-field-appearance-fill .mat-form-field-infix {\n  padding: 0.25em 0 0.75em 0; }\n.mat-form-field-appearance-fill .mat-form-field-label {\n  top: 1.09375em;\n  margin-top: -0.5em; }\n.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-0.59375em) scale(0.75);\n          transform: translateY(-0.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-0.59374em) scale(0.75);\n          transform: translateY(-0.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-form-field-appearance-outline .mat-form-field-infix {\n  padding: 1em 0 1em 0; }\n.mat-form-field-appearance-outline .mat-form-field-label {\n  top: 1.84375em;\n  margin-top: -0.25em; }\n.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label {\n  -webkit-transform: translateY(-1.59375em) scale(0.75);\n          transform: translateY(-1.59375em) scale(0.75);\n  width: 133.33333333%; }\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown) + .mat-form-field-label-wrapper\n.mat-form-field-label {\n  -webkit-transform: translateY(-1.59374em) scale(0.75);\n          transform: translateY(-1.59374em) scale(0.75);\n  width: 133.33334333%; }\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n.mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\ninput.mat-input-element {\n  margin-top: -0.0625em; }\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 400; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-select-trigger {\n  height: 1.125em; }\n.mat-slide-toggle-content {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-slider-thumb-label-text {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-stepper-vertical, .mat-stepper-horizontal {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-step-label {\n  font-size: 14px;\n  font-weight: 400; }\n.mat-step-sub-label-error {\n  font-weight: normal; }\n.mat-step-label-error {\n  font-size: 14px; }\n.mat-step-label-selected {\n  font-size: 14px;\n  font-weight: 500; }\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n.mat-tooltip-handset {\n  font-size: 14px;\n  padding-top: 8px;\n  padding-bottom: 8px; }\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-list-base .mat-list-item {\n  font-size: 16px; }\n.mat-list-base .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-list-option {\n  font-size: 16px; }\n.mat-list-base .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n.mat-list-base .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n.mat-list-base[dense] .mat-list-item {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-list-option {\n  font-size: 12px; }\n.mat-list-base[dense] .mat-list-option .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n.mat-list-base[dense] .mat-subheader {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px;\n  font-weight: 500; }\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n.mat-tree {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  font-weight: 400;\n  font-size: 14px; }\n.mat-ripple {\n  overflow: hidden;\n  position: relative; }\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  -webkit-transform: scale(0);\n          transform: scale(0); }\n@media (-ms-high-contrast: active) {\n    .mat-ripple-element {\n      display: none; } }\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n  outline: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n.cdk-overlay-container:empty {\n    display: none; }\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000;\n  display: flex;\n  max-width: 100%;\n  max-height: 100%; }\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 1; }\n@media screen and (-ms-high-contrast: active) {\n      .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n        opacity: 0.6; } }\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.32); }\n.cdk-overlay-transparent-backdrop, .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing {\n  opacity: 0; }\n.cdk-overlay-connected-position-bounding-box {\n  position: absolute;\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  min-width: 1px;\n  min-height: 1px; }\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n@-webkit-keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-start {\n  /*!*/ }\n@-webkit-keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n@keyframes cdk-text-field-autofill-end {\n  /*!*/ }\n.cdk-text-field-autofill-monitored:-webkit-autofill {\n  -webkit-animation-name: cdk-text-field-autofill-start;\n          animation-name: cdk-text-field-autofill-start; }\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill) {\n  -webkit-animation-name: cdk-text-field-autofill-end;\n          animation-name: cdk-text-field-autofill-end; }\ntextarea.cdk-textarea-autosize {\n  resize: none; }\ntextarea.cdk-textarea-autosize-measuring {\n  height: auto !important;\n  overflow: hidden !important;\n  padding: 2px 0 !important;\n  box-sizing: content-box !important; }\n.mat-ripple-element {\n  background-color: rgba(0, 0, 0, 0.1); }\n.mat-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-option:hover:not(.mat-option-disabled), .mat-option:focus:not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled) {\n    background: rgba(0, 0, 0, 0.04); }\n.mat-option.mat-active {\n    background: rgba(0, 0, 0, 0.04);\n    color: rgba(0, 0, 0, 0.87); }\n.mat-option.mat-option-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #3f51b5; }\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #ff4081; }\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #2196f3; }\n.mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-optgroup-disabled .mat-optgroup-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-pseudo-checkbox {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-pseudo-checkbox::after {\n    color: #fafafa; }\n.mat-pseudo-checkbox-checked,\n.mat-pseudo-checkbox-indeterminate,\n.mat-accent .mat-pseudo-checkbox-checked,\n.mat-accent .mat-pseudo-checkbox-indeterminate {\n  background: #ff4081; }\n.mat-primary .mat-pseudo-checkbox-checked,\n.mat-primary .mat-pseudo-checkbox-indeterminate {\n  background: #3f51b5; }\n.mat-warn .mat-pseudo-checkbox-checked,\n.mat-warn .mat-pseudo-checkbox-indeterminate {\n  background: #2196f3; }\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,\n.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n  background: #b0b0b0; }\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n.mat-app-background {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-theme-loaded-marker {\n  display: none; }\n.mat-autocomplete-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-autocomplete-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n    background: white; }\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled) {\n      color: rgba(0, 0, 0, 0.87); }\n.mat-badge-content {\n  color: white;\n  background: #3f51b5; }\n@media (-ms-high-contrast: active) {\n    .mat-badge-content {\n      outline: solid 1px;\n      border-radius: 0; } }\n.mat-badge-accent .mat-badge-content {\n  background: #ff4081;\n  color: white; }\n.mat-badge-warn .mat-badge-content {\n  color: white;\n  background: #2196f3; }\n.mat-badge {\n  position: relative; }\n.mat-badge-hidden .mat-badge-content {\n  display: none; }\n.mat-badge-disabled .mat-badge-content {\n  background: #b9b9b9;\n  color: rgba(0, 0, 0, 0.38); }\n.mat-badge-content {\n  position: absolute;\n  text-align: center;\n  display: inline-block;\n  border-radius: 50%;\n  transition: -webkit-transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out;\n  transition: transform 200ms ease-in-out, -webkit-transform 200ms ease-in-out;\n  -webkit-transform: scale(0.6);\n          transform: scale(0.6);\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  pointer-events: none; }\n.mat-badge-content.mat-badge-active {\n  -webkit-transform: none;\n          transform: none; }\n.mat-badge-small .mat-badge-content {\n  width: 16px;\n  height: 16px;\n  line-height: 16px; }\n.mat-badge-small.mat-badge-above .mat-badge-content {\n  top: -8px; }\n.mat-badge-small.mat-badge-below .mat-badge-content {\n  bottom: -8px; }\n.mat-badge-small.mat-badge-before .mat-badge-content {\n  left: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -16px; }\n.mat-badge-small.mat-badge-after .mat-badge-content {\n  right: -16px; }\n[dir='rtl'] .mat-badge-small.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -16px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -8px; }\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -8px; }\n[dir='rtl'] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -8px; }\n.mat-badge-medium .mat-badge-content {\n  width: 22px;\n  height: 22px;\n  line-height: 22px; }\n.mat-badge-medium.mat-badge-above .mat-badge-content {\n  top: -11px; }\n.mat-badge-medium.mat-badge-below .mat-badge-content {\n  bottom: -11px; }\n.mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -22px; }\n.mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: -22px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -22px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -11px; }\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -11px; }\n[dir='rtl'] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -11px; }\n.mat-badge-large .mat-badge-content {\n  width: 28px;\n  height: 28px;\n  line-height: 28px; }\n.mat-badge-large.mat-badge-above .mat-badge-content {\n  top: -14px; }\n.mat-badge-large.mat-badge-below .mat-badge-content {\n  bottom: -14px; }\n.mat-badge-large.mat-badge-before .mat-badge-content {\n  left: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -28px; }\n.mat-badge-large.mat-badge-after .mat-badge-content {\n  right: -28px; }\n[dir='rtl'] .mat-badge-large.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -28px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content {\n  left: auto;\n  right: -14px; }\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: -14px; }\n[dir='rtl'] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content {\n  right: auto;\n  left: -14px; }\n.mat-bottom-sheet-container {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-button, .mat-icon-button, .mat-stroked-button {\n  color: inherit;\n  background: transparent; }\n.mat-button.mat-primary, .mat-icon-button.mat-primary, .mat-stroked-button.mat-primary {\n    color: #3f51b5; }\n.mat-button.mat-accent, .mat-icon-button.mat-accent, .mat-stroked-button.mat-accent {\n    color: #ff4081; }\n.mat-button.mat-warn, .mat-icon-button.mat-warn, .mat-stroked-button.mat-warn {\n    color: #2196f3; }\n.mat-button.mat-primary[disabled], .mat-button.mat-accent[disabled], .mat-button.mat-warn[disabled], .mat-button[disabled][disabled], .mat-icon-button.mat-primary[disabled], .mat-icon-button.mat-accent[disabled], .mat-icon-button.mat-warn[disabled], .mat-icon-button[disabled][disabled], .mat-stroked-button.mat-primary[disabled], .mat-stroked-button.mat-accent[disabled], .mat-stroked-button.mat-warn[disabled], .mat-stroked-button[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-button.mat-primary .mat-button-focus-overlay, .mat-icon-button.mat-primary .mat-button-focus-overlay, .mat-stroked-button.mat-primary .mat-button-focus-overlay {\n    background-color: #3f51b5; }\n.mat-button.mat-accent .mat-button-focus-overlay, .mat-icon-button.mat-accent .mat-button-focus-overlay, .mat-stroked-button.mat-accent .mat-button-focus-overlay {\n    background-color: #ff4081; }\n.mat-button.mat-warn .mat-button-focus-overlay, .mat-icon-button.mat-warn .mat-button-focus-overlay, .mat-stroked-button.mat-warn .mat-button-focus-overlay {\n    background-color: #2196f3; }\n.mat-button[disabled] .mat-button-focus-overlay, .mat-icon-button[disabled] .mat-button-focus-overlay, .mat-stroked-button[disabled] .mat-button-focus-overlay {\n    background-color: transparent; }\n.mat-button .mat-ripple-element, .mat-icon-button .mat-ripple-element, .mat-stroked-button .mat-ripple-element {\n    opacity: 0.1;\n    background-color: currentColor; }\n.mat-button-focus-overlay {\n  background: black; }\n.mat-stroked-button:not([disabled]) {\n  border-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button, .mat-raised-button, .mat-fab, .mat-mini-fab {\n  color: rgba(0, 0, 0, 0.87);\n  background-color: white; }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    color: white; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    color: white; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    color: white; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    color: rgba(0, 0, 0, 0.26); }\n.mat-flat-button.mat-primary, .mat-raised-button.mat-primary, .mat-fab.mat-primary, .mat-mini-fab.mat-primary {\n    background-color: #3f51b5; }\n.mat-flat-button.mat-accent, .mat-raised-button.mat-accent, .mat-fab.mat-accent, .mat-mini-fab.mat-accent {\n    background-color: #ff4081; }\n.mat-flat-button.mat-warn, .mat-raised-button.mat-warn, .mat-fab.mat-warn, .mat-mini-fab.mat-warn {\n    background-color: #2196f3; }\n.mat-flat-button.mat-primary[disabled], .mat-flat-button.mat-accent[disabled], .mat-flat-button.mat-warn[disabled], .mat-flat-button[disabled][disabled], .mat-raised-button.mat-primary[disabled], .mat-raised-button.mat-accent[disabled], .mat-raised-button.mat-warn[disabled], .mat-raised-button[disabled][disabled], .mat-fab.mat-primary[disabled], .mat-fab.mat-accent[disabled], .mat-fab.mat-warn[disabled], .mat-fab[disabled][disabled], .mat-mini-fab.mat-primary[disabled], .mat-mini-fab.mat-accent[disabled], .mat-mini-fab.mat-warn[disabled], .mat-mini-fab[disabled][disabled] {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-flat-button.mat-primary .mat-ripple-element, .mat-raised-button.mat-primary .mat-ripple-element, .mat-fab.mat-primary .mat-ripple-element, .mat-mini-fab.mat-primary .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-accent .mat-ripple-element, .mat-raised-button.mat-accent .mat-ripple-element, .mat-fab.mat-accent .mat-ripple-element, .mat-mini-fab.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-flat-button.mat-warn .mat-ripple-element, .mat-raised-button.mat-warn .mat-ripple-element, .mat-fab.mat-warn .mat-ripple-element, .mat-mini-fab.mat-warn .mat-ripple-element {\n    background-color: rgba(255, 255, 255, 0.1); }\n.mat-stroked-button:not([class*='mat-elevation-z']), .mat-flat-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-raised-button:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n.mat-raised-button[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([class*='mat-elevation-z']), .mat-mini-fab:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-fab:not([disabled]):active:not([class*='mat-elevation-z']), .mat-mini-fab:not([disabled]):active:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n.mat-fab[disabled]:not([class*='mat-elevation-z']), .mat-mini-fab[disabled]:not([class*='mat-elevation-z']) {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone,\n.mat-button-toggle-group {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  box-shadow: none; }\n.mat-button-toggle {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-button-toggle .mat-button-toggle-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-appearance-standard {\n  color: rgba(0, 0, 0, 0.87);\n  background: white; }\n.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {\n    background-color: black; }\n.mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: solid 1px rgba(0, 0, 0, 0.12); }\n[dir='rtl'] .mat-button-toggle-group-appearance-standard .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle + .mat-button-toggle {\n  border-left: none;\n  border-right: none;\n  border-top: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-button-toggle-checked {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.54); }\n.mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n    color: rgba(0, 0, 0, 0.87); }\n.mat-button-toggle-disabled {\n  color: rgba(0, 0, 0, 0.26);\n  background-color: #eeeeee; }\n.mat-button-toggle-disabled.mat-button-toggle-appearance-standard {\n    background: white; }\n.mat-button-toggle-disabled.mat-button-toggle-checked {\n    background-color: #bdbdbd; }\n.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,\n.mat-button-toggle-group-appearance-standard {\n  border: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-card {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-card:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n.mat-card.mat-card-flat:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-card-subtitle {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-frame {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-checkbox-checkmark {\n  fill: #fafafa; }\n.mat-checkbox-checkmark-path {\n  stroke: #fafafa !important; }\n@media (-ms-high-contrast: black-on-white) {\n    .mat-checkbox-checkmark-path {\n      stroke: #000 !important; } }\n.mat-checkbox-mixedmark {\n  background-color: #fafafa; }\n.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n  background-color: #3f51b5; }\n.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n  background-color: #ff4081; }\n.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n  background-color: #2196f3; }\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n  background-color: #b0b0b0; }\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n  border-color: #b0b0b0; }\n.mat-checkbox-disabled .mat-checkbox-label {\n  color: rgba(0, 0, 0, 0.54); }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-disabled {\n    opacity: 0.5; } }\n@media (-ms-high-contrast: active) {\n  .mat-checkbox-background {\n    background: none; } }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-chip.mat-standard-chip {\n  background-color: #e0e0e0;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-chip.mat-standard-chip .mat-chip-remove {\n    color: rgba(0, 0, 0, 0.87);\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled):active {\n    box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n.mat-chip.mat-standard-chip:not(.mat-chip-disabled) .mat-chip-remove:hover {\n    opacity: 0.54; }\n.mat-chip.mat-standard-chip.mat-chip-disabled {\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip::after {\n    background: black; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary {\n  background-color: #3f51b5;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn {\n  background-color: #2196f3;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent {\n  background-color: #ff4081;\n  color: white; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove {\n    color: white;\n    opacity: 0.4; }\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-ripple-element {\n    background: rgba(255, 255, 255, 0.1); }\n.mat-table {\n  background: white; }\n.mat-table thead, .mat-table tbody, .mat-table tfoot,\nmat-header-row, mat-row, mat-footer-row,\n[mat-header-row], [mat-row], [mat-footer-row],\n.mat-table-sticky {\n  background: inherit; }\nmat-row, mat-header-row, mat-footer-row,\nth.mat-header-cell, td.mat-cell, td.mat-footer-cell {\n  border-bottom-color: rgba(0, 0, 0, 0.12); }\n.mat-header-cell {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-cell, .mat-footer-cell {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-calendar-arrow {\n  border-top-color: rgba(0, 0, 0, 0.54); }\n.mat-datepicker-toggle,\n.mat-datepicker-content .mat-calendar-next-button,\n.mat-datepicker-content .mat-calendar-previous-button {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-table-header {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-table-header-divider::after {\n  background: rgba(0, 0, 0, 0.12); }\n.mat-calendar-body-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-calendar-body-cell-content {\n  color: rgba(0, 0, 0, 0.87);\n  border-color: transparent; }\n.mat-calendar-body-disabled > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n.cdk-program-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n  border-color: rgba(0, 0, 0, 0.18); }\n.mat-calendar-body-selected {\n  background-color: #3f51b5;\n  color: white; }\n.mat-calendar-body-disabled > .mat-calendar-body-selected {\n  background-color: rgba(63, 81, 181, 0.4); }\n.mat-calendar-body-today.mat-calendar-body-selected {\n  box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected {\n    background-color: #ff4081;\n    color: white; }\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(255, 64, 129, 0.4); }\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected {\n    background-color: #2196f3;\n    color: white; }\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(33, 150, 243, 0.4); }\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n.mat-datepicker-content-touch {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n.mat-datepicker-toggle-active {\n  color: #3f51b5; }\n.mat-datepicker-toggle-active.mat-accent {\n    color: #ff4081; }\n.mat-datepicker-toggle-active.mat-warn {\n    color: #2196f3; }\n.mat-dialog-container {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12);\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-divider {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-divider-vertical {\n  border-right-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel {\n  background: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n.mat-action-row {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-keyboard-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']).cdk-program-focused, .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled='true']):hover {\n  background: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-expansion-panel:not(.mat-expanded):not([aria-disabled='true'])\n.mat-expansion-panel-header:hover {\n    background: white; } }\n.mat-expansion-panel-header-title {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-expansion-panel-header-description,\n.mat-expansion-indicator::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-expansion-panel-header[aria-disabled='true'] {\n  color: rgba(0, 0, 0, 0.26); }\n.mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-title,\n  .mat-expansion-panel-header[aria-disabled='true'] .mat-expansion-panel-header-description {\n    color: inherit; }\n.mat-form-field-label {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-hint {\n  color: rgba(0, 0, 0, 0.6); }\n.mat-form-field.mat-focused .mat-form-field-label {\n  color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent {\n    color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn {\n    color: #2196f3; }\n.mat-focused .mat-form-field-required-marker {\n  color: #ff4081; }\n.mat-form-field-ripple {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #3f51b5; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent {\n    background-color: #ff4081; }\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn {\n    background-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid) .mat-form-field-infix::after {\n  color: #3f51b5; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-accent .mat-form-field-infix::after {\n  color: #ff4081; }\n.mat-form-field-type-mat-native-select.mat-focused:not(.mat-form-field-invalid).mat-warn .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label {\n  color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent,\n  .mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker {\n    color: #2196f3; }\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent {\n  background-color: #2196f3; }\n.mat-error {\n  color: #2196f3; }\n.mat-form-field-appearance-legacy .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-hint {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-form-field-appearance-legacy .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-standard .mat-form-field-underline {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.42) 33%, transparent 0%);\n  background-size: 4px 100%;\n  background-repeat: repeat-x; }\n.mat-form-field-appearance-fill .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.04); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex {\n  background-color: rgba(0, 0, 0, 0.02); }\n.mat-form-field-appearance-fill .mat-form-field-underline::before {\n  background-color: rgba(0, 0, 0, 0.42); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before {\n  background-color: transparent; }\n.mat-form-field-appearance-outline .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.12); }\n.mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #3f51b5; }\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick {\n  color: #ff4081; }\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #2196f3; }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline {\n  color: rgba(0, 0, 0, 0.06); }\n.mat-icon.mat-primary {\n  color: #3f51b5; }\n.mat-icon.mat-accent {\n  color: #ff4081; }\n.mat-icon.mat-warn {\n  color: #2196f3; }\n.mat-form-field-type-mat-native-select .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-input-element:disabled,\n.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix::after {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-input-element {\n  caret-color: #3f51b5; }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-moz-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-input-element:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.42); }\n.mat-accent .mat-input-element {\n  caret-color: #ff4081; }\n.mat-warn .mat-input-element,\n.mat-form-field-invalid .mat-input-element {\n  caret-color: #2196f3; }\n.mat-form-field-type-mat-native-select.mat-form-field-invalid .mat-form-field-infix::after {\n  color: #2196f3; }\n.mat-list-base .mat-list-item {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-list-option {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-list-base .mat-subheader {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-list-item-disabled {\n  background-color: #eeeeee; }\n.mat-list-option:hover, .mat-list-option:focus,\n.mat-nav-list .mat-list-item:hover,\n.mat-nav-list .mat-list-item:focus {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-menu-panel {\n  background: white; }\n.mat-menu-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-menu-item {\n  background: transparent;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-menu-item[disabled], .mat-menu-item[disabled]::after {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-menu-item .mat-icon-no-color,\n.mat-menu-item-submenu-trigger::after {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-menu-item:hover:not([disabled]),\n.mat-menu-item.cdk-program-focused:not([disabled]),\n.mat-menu-item.cdk-keyboard-focused:not([disabled]),\n.mat-menu-item-highlighted:not([disabled]) {\n  background: rgba(0, 0, 0, 0.04); }\n.mat-paginator {\n  background: white; }\n.mat-paginator,\n.mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-paginator-decrement,\n.mat-paginator-increment {\n  border-top: 2px solid rgba(0, 0, 0, 0.54);\n  border-right: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-paginator-first,\n.mat-paginator-last {\n  border-top: 2px solid rgba(0, 0, 0, 0.54); }\n.mat-icon-button[disabled] .mat-paginator-decrement,\n.mat-icon-button[disabled] .mat-paginator-increment,\n.mat-icon-button[disabled] .mat-paginator-first,\n.mat-icon-button[disabled] .mat-paginator-last {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-progress-bar-background {\n  fill: #c5cae9; }\n.mat-progress-bar-buffer {\n  background-color: #c5cae9; }\n.mat-progress-bar-fill::after {\n  background-color: #3f51b5; }\n.mat-progress-bar.mat-accent .mat-progress-bar-background {\n  fill: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n  background-color: #ff80ab; }\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n  background-color: #ff4081; }\n.mat-progress-bar.mat-warn .mat-progress-bar-background {\n  fill: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n  background-color: #bbdefb; }\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n  background-color: #2196f3; }\n.mat-progress-spinner circle, .mat-spinner circle {\n  stroke: #3f51b5; }\n.mat-progress-spinner.mat-accent circle, .mat-spinner.mat-accent circle {\n  stroke: #ff4081; }\n.mat-progress-spinner.mat-warn circle, .mat-spinner.mat-warn circle {\n  stroke: #2196f3; }\n.mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.54); }\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #3f51b5; }\n.mat-radio-button.mat-primary .mat-radio-inner-circle,\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-primary:active .mat-radio-persistent-ripple {\n  background-color: #3f51b5; }\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #ff4081; }\n.mat-radio-button.mat-accent .mat-radio-inner-circle,\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-accent:active .mat-radio-persistent-ripple {\n  background-color: #ff4081; }\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #2196f3; }\n.mat-radio-button.mat-warn .mat-radio-inner-circle,\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element:not(.mat-radio-persistent-ripple),\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-persistent-ripple,\n.mat-radio-button.mat-warn:active .mat-radio-persistent-ripple {\n  background-color: #2196f3; }\n.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle,\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element,\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-radio-button .mat-ripple-element {\n  background-color: black; }\n.mat-select-value {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-select-placeholder {\n  color: rgba(0, 0, 0, 0.42); }\n.mat-select-disabled .mat-select-value {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-select-arrow {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-select-panel {\n  background: white; }\n.mat-select-panel:not([class*='mat-elevation-z']) {\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple) {\n    background: rgba(0, 0, 0, 0.12); }\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow {\n  color: #3f51b5; }\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow {\n  color: #ff4081; }\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow {\n  color: #2196f3; }\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow {\n  color: rgba(0, 0, 0, 0.38); }\n.mat-drawer-container {\n  background-color: #fafafa;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer {\n  background-color: white;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-drawer.mat-drawer-push {\n    background-color: white; }\n.mat-drawer:not(.mat-drawer-side) {\n    box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side {\n  border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-side.mat-drawer-end {\n    border-left: solid 1px rgba(0, 0, 0, 0.12);\n    border-right: none; }\n[dir='rtl'] .mat-drawer-side {\n  border-left: solid 1px rgba(0, 0, 0, 0.12);\n  border-right: none; }\n[dir='rtl'] .mat-drawer-side.mat-drawer-end {\n    border-left: none;\n    border-right: solid 1px rgba(0, 0, 0, 0.12); }\n.mat-drawer-backdrop.mat-drawer-shown {\n  background-color: rgba(0, 0, 0, 0.6); }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(255, 64, 129, 0.54); }\n.mat-slide-toggle.mat-checked .mat-ripple-element {\n  background-color: #ff4081; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-thumb {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-primary.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(63, 81, 181, 0.54); }\n.mat-slide-toggle.mat-primary.mat-checked .mat-ripple-element {\n  background-color: #3f51b5; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-thumb {\n  background-color: #2196f3; }\n.mat-slide-toggle.mat-warn.mat-checked .mat-slide-toggle-bar {\n  background-color: rgba(33, 150, 243, 0.54); }\n.mat-slide-toggle.mat-warn.mat-checked .mat-ripple-element {\n  background-color: #2196f3; }\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n  background-color: black; }\n.mat-slide-toggle-thumb {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n  background-color: #fafafa; }\n.mat-slide-toggle-bar {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-primary .mat-slider-track-fill,\n.mat-primary .mat-slider-thumb,\n.mat-primary .mat-slider-thumb-label {\n  background-color: #3f51b5; }\n.mat-primary .mat-slider-thumb-label-text {\n  color: white; }\n.mat-accent .mat-slider-track-fill,\n.mat-accent .mat-slider-thumb,\n.mat-accent .mat-slider-thumb-label {\n  background-color: #ff4081; }\n.mat-accent .mat-slider-thumb-label-text {\n  color: white; }\n.mat-warn .mat-slider-track-fill,\n.mat-warn .mat-slider-thumb,\n.mat-warn .mat-slider-thumb-label {\n  background-color: #2196f3; }\n.mat-warn .mat-slider-thumb-label-text {\n  color: white; }\n.mat-slider-focus-ring {\n  background-color: rgba(255, 64, 129, 0.2); }\n.mat-slider:hover .mat-slider-track-background,\n.cdk-focused .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-disabled .mat-slider-track-background,\n.mat-slider-disabled .mat-slider-track-fill,\n.mat-slider-disabled .mat-slider-thumb {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-disabled:hover .mat-slider-track-background {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value .mat-slider-focus-ring {\n  background-color: rgba(0, 0, 0, 0.12); }\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.87); }\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n  background-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26);\n  background-color: transparent; }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n  border-color: rgba(0, 0, 0, 0.26); }\n.mat-slider-has-ticks .mat-slider-wrapper::after {\n  border-color: rgba(0, 0, 0, 0.7); }\n.mat-slider-horizontal .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n  background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-slider-vertical .mat-slider-ticks {\n  background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n.mat-step-header.cdk-keyboard-focused, .mat-step-header.cdk-program-focused, .mat-step-header:hover {\n  background-color: rgba(0, 0, 0, 0.04); }\n@media (hover: none) {\n  .mat-step-header:hover {\n    background: none; } }\n.mat-step-header .mat-step-label,\n.mat-step-header .mat-step-optional {\n  color: rgba(0, 0, 0, 0.54); }\n.mat-step-header .mat-step-icon {\n  background-color: rgba(0, 0, 0, 0.54);\n  color: white; }\n.mat-step-header .mat-step-icon-selected,\n.mat-step-header .mat-step-icon-state-done,\n.mat-step-header .mat-step-icon-state-edit {\n  background-color: #3f51b5;\n  color: white; }\n.mat-step-header .mat-step-icon-state-error {\n  background-color: transparent;\n  color: #2196f3; }\n.mat-step-header .mat-step-label.mat-step-label-active {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-step-header .mat-step-label.mat-step-label-error {\n  color: #2196f3; }\n.mat-stepper-horizontal, .mat-stepper-vertical {\n  background-color: white; }\n.mat-stepper-vertical-line::before {\n  border-left-color: rgba(0, 0, 0, 0.12); }\n.mat-horizontal-stepper-header::before,\n.mat-horizontal-stepper-header::after,\n.mat-stepper-horizontal-line {\n  border-top-color: rgba(0, 0, 0, 0.12); }\n.mat-sort-header-arrow {\n  color: #757575; }\n.mat-tab-nav-bar,\n.mat-tab-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.mat-tab-group-inverted-header .mat-tab-nav-bar,\n.mat-tab-group-inverted-header .mat-tab-header {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  border-bottom: none; }\n.mat-tab-label, .mat-tab-link {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-tab-label.mat-tab-disabled, .mat-tab-link.mat-tab-disabled {\n    color: rgba(0, 0, 0, 0.38); }\n.mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.87); }\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(0, 0, 0, 0.38); }\n.mat-tab-group[class*='mat-background-'] .mat-tab-header,\n.mat-tab-nav-bar[class*='mat-background-'] {\n  border-bottom: none;\n  border-top: none; }\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary .mat-ink-bar {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar, .mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent .mat-ink-bar {\n  background-color: #ff4081; }\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar, .mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn .mat-ink-bar {\n  background-color: #2196f3; }\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar, .mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar {\n  background-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(197, 202, 233, 0.3); }\n.mat-tab-group.mat-background-primary .mat-tab-header, .mat-tab-group.mat-background-primary .mat-tab-links, .mat-tab-nav-bar.mat-background-primary .mat-tab-header, .mat-tab-nav-bar.mat-background-primary .mat-tab-links {\n  background-color: #3f51b5; }\n.mat-tab-group.mat-background-primary .mat-tab-label, .mat-tab-group.mat-background-primary .mat-tab-link, .mat-tab-nav-bar.mat-background-primary .mat-tab-label, .mat-tab-nav-bar.mat-background-primary .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-primary .mat-ripple-element, .mat-tab-nav-bar.mat-background-primary .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(255, 128, 171, 0.3); }\n.mat-tab-group.mat-background-accent .mat-tab-header, .mat-tab-group.mat-background-accent .mat-tab-links, .mat-tab-nav-bar.mat-background-accent .mat-tab-header, .mat-tab-nav-bar.mat-background-accent .mat-tab-links {\n  background-color: #ff4081; }\n.mat-tab-group.mat-background-accent .mat-tab-label, .mat-tab-group.mat-background-accent .mat-tab-link, .mat-tab-nav-bar.mat-background-accent .mat-tab-label, .mat-tab-nav-bar.mat-background-accent .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-accent .mat-ripple-element, .mat-tab-nav-bar.mat-background-accent .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled), .mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),\n.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled) {\n  background-color: rgba(187, 222, 251, 0.3); }\n.mat-tab-group.mat-background-warn .mat-tab-header, .mat-tab-group.mat-background-warn .mat-tab-links, .mat-tab-nav-bar.mat-background-warn .mat-tab-header, .mat-tab-nav-bar.mat-background-warn .mat-tab-links {\n  background-color: #2196f3; }\n.mat-tab-group.mat-background-warn .mat-tab-label, .mat-tab-group.mat-background-warn .mat-tab-link, .mat-tab-nav-bar.mat-background-warn .mat-tab-label, .mat-tab-nav-bar.mat-background-warn .mat-tab-link {\n  color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled, .mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled {\n    color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron {\n  border-color: white; }\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron, .mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron {\n  border-color: rgba(255, 255, 255, 0.4); }\n.mat-tab-group.mat-background-warn .mat-ripple-element, .mat-tab-nav-bar.mat-background-warn .mat-ripple-element {\n  background-color: rgba(255, 255, 255, 0.12); }\n.mat-toolbar {\n  background: whitesmoke;\n  color: rgba(0, 0, 0, 0.87); }\n.mat-toolbar.mat-primary {\n    background: #3f51b5;\n    color: white; }\n.mat-toolbar.mat-accent {\n    background: #ff4081;\n    color: white; }\n.mat-toolbar.mat-warn {\n    background: #2196f3;\n    color: white; }\n.mat-toolbar .mat-form-field-underline,\n  .mat-toolbar .mat-form-field-ripple,\n  .mat-toolbar .mat-focused .mat-form-field-ripple {\n    background-color: currentColor; }\n.mat-toolbar .mat-form-field-label,\n  .mat-toolbar .mat-focused .mat-form-field-label,\n  .mat-toolbar .mat-select-value,\n  .mat-toolbar .mat-select-arrow,\n  .mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {\n    color: inherit; }\n.mat-toolbar .mat-input-element {\n    caret-color: currentColor; }\n.mat-tooltip {\n  background: rgba(97, 97, 97, 0.9); }\n.mat-tree {\n  background: white; }\n.mat-tree-node,\n.mat-nested-tree-node {\n  color: rgba(0, 0, 0, 0.87); }\n.mat-snack-bar-container {\n  color: rgba(255, 255, 255, 0.7);\n  background: #323232;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n.mat-simple-snackbar-action {\n  color: #ff4081; }\n/* You can add global styles to this file, and also import other style files */\nbody {\n  margin: 0;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n/**\n * prism.js default theme for JavaScript, CSS and HTML\n * Based on dabblet (http://dabblet.com)\n * @author Lea Verou\n */\ncode[class*=\"language-\"],\npre[class*=\"language-\"] {\n  color: black;\n  background: none;\n  text-shadow: 0 1px white;\n  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;\n  text-align: left;\n  white-space: pre;\n  word-spacing: normal;\n  word-break: normal;\n  word-wrap: normal;\n  line-height: 1.5;\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n  tab-size: 4;\n  -webkit-hyphens: none;\n  -ms-hyphens: none;\n  hyphens: none; }\npre[class*=\"language-\"]::-moz-selection, pre[class*=\"language-\"] ::-moz-selection,\ncode[class*=\"language-\"]::-moz-selection, code[class*=\"language-\"] ::-moz-selection {\n  text-shadow: none;\n  background: #b3d4fc; }\npre[class*=\"language-\"]::selection, pre[class*=\"language-\"] ::selection,\ncode[class*=\"language-\"]::selection, code[class*=\"language-\"] ::selection {\n  text-shadow: none;\n  background: #b3d4fc; }\n@media print {\n  code[class*=\"language-\"],\n  pre[class*=\"language-\"] {\n    text-shadow: none; } }\n/* Code blocks */\npre[class*=\"language-\"] {\n  padding: 1em;\n  margin: .5em 0;\n  overflow: auto; }\n:not(pre) > code[class*=\"language-\"],\npre[class*=\"language-\"] {\n  background: #f5f2f0; }\n/* Inline code */\n:not(pre) > code[class*=\"language-\"] {\n  padding: .1em;\n  border-radius: .3em;\n  white-space: normal; }\n.token.comment,\n.token.prolog,\n.token.doctype,\n.token.cdata {\n  color: slategray; }\n.token.punctuation {\n  color: #999; }\n.namespace {\n  opacity: .7; }\n.token.property,\n.token.tag,\n.token.boolean,\n.token.number,\n.token.constant,\n.token.symbol,\n.token.deleted {\n  color: #905; }\n.token.selector,\n.token.attr-name,\n.token.string,\n.token.char,\n.token.builtin,\n.token.inserted {\n  color: #690; }\n.token.operator,\n.token.entity,\n.token.url,\n.language-css .token.string,\n.style .token.string {\n  color: #9a6e3a;\n  background: rgba(255, 255, 255, 0.5); }\n.token.atrule,\n.token.attr-value,\n.token.keyword {\n  color: #07a; }\n.token.function,\n.token.class-name {\n  color: #DD4A68; }\n.token.regex,\n.token.important,\n.token.variable {\n  color: #e90; }\n.token.important,\n.token.bold {\n  font-weight: bold; }\n.token.italic {\n  font-style: italic; }\n.token.entity {\n  cursor: help; }\n.menu-card {\n  background-color: #82b1ff; }\n.main-card {\n  background-color: #e8eaf6; }\n/deep/ .mat-expansion-panel-header {\n  background-color: #82b1ff; }\n/deep/ .mat-expansion-panel-content {\n  background-color: #e3f2fd; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9vbm5vL0dJVFMvZGd3bnUvbmctam9pbnQvbm9kZV9tb2R1bGVzL0Bhbmd1bGFyL21hdGVyaWFsL190aGVtaW5nLnNjc3MiLCJub2RlX21vZHVsZXMvam9pbnRqcy9kaXN0L2pvaW50LmNzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL29ubm8vR0lUUy9kZ3dudS9uZy1qb2ludC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvb25uby9HSVRTL2Rnd251L25nLWpvaW50L25vZGVfbW9kdWxlcy9wcmlzbWpzL3RoZW1lcy9wcmlzbS5jc3MiLCIvVXNlcnMvb25uby9HSVRTL2Rnd251L25nLWpvaW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXkxQ0Esa0NBQUE7QUFnaERBLDJDQUFBO0FBd0NBLHFCQUFBO0FBeGpEQSxrQ0FBQTtBQWdoREEsMkNBQUE7QUF3Q0EscUJBQUE7QUNqNUZBOzs7Ozs7Q0FNQztBQUNEOzs7OztDQUtDO0FBR0QsdUVBQXVFO0FBQ3ZFO0dBQ0cseUJBQXlCO0dBQ3pCLHNCQUFzQjtHQUN0QixxQkFBaUI7T0FBakIsaUJBQWlCO0FBQ3BCO0FBRUE7OztFQUdFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7QUFFQTs7Ozs7Ozs7O0NBU0M7QUFHRCx5RUFBeUU7QUFDekU7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtHQUNHLFdBQVc7QUFDZDtBQUVBOzs7Ozs7Q0FNQztBQUVEO0dBQ0csNERBQTREO0dBQzVELFlBQVk7QUFDZjtBQUVBO0dBQ0csZUFBZTtBQUNsQjtBQUVBO0dBQ0csc0pBQXNKO0dBQ3RKLGlDQUFpQztBQUNwQztBQUNBOzs7Ozs7OztDQVFDO0FBRUQ7O0dBRUcsb0hBQW9IO0dBQ3BILGlDQUFpQztBQUNwQztBQUVBLFVBQVU7QUFDVjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLFVBQVU7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QUNDLGtCQUFrQixFQUFBO0FBR25CO0VBQ0MsWUFBWSxFQUFBO0FDbkliO0VBQ0kseUJMa3NCVyxFQUFBO0FLL3JCZjtFQUNFLHlCTG1wQlcsRUFBQTtBS2hwQmI7RUFDRSx5QkwwckJhLEVBQUE7QUt2ckJmO0VBQ0UseUJMNHFCVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGFsbCB0aGUgdGhlbWluZyBmdW5jdGlvbmFsaXR5LlxuLy8gV2UgY2FuIHVzZSByZWxhdGl2ZSBpbXBvcnRzIGZvciBpbXBvcnRzIGZyb20gdGhlIGNkayBiZWNhdXNlIHdlIGJ1bmRsZSBldmVyeXRoaW5nXG4vLyB1cCBpbnRvIGEgc2luZ2xlIGZsYXQgc2NzcyBmaWxlIGZvciBtYXRlcmlhbC5cbi8vIFdlIHdhbnQgb3ZlcmxheXMgdG8gYWx3YXlzIGFwcGVhciBvdmVyIHVzZXIgY29udGVudCwgc28gc2V0IGEgYmFzZWxpbmVcbi8vIHZlcnkgaGlnaCB6LWluZGV4IGZvciB0aGUgb3ZlcmxheSBjb250YWluZXIsIHdoaWNoIGlzIHdoZXJlIHdlIGNyZWF0ZSB0aGUgbmV3XG4vLyBzdGFja2luZyBjb250ZXh0IGZvciBhbGwgb3ZlcmxheXMuXG4kY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI6IDEwMDA7XG4kY2RrLXotaW5kZXgtb3ZlcmxheTogMTAwMDtcbiRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wOiAxMDAwO1xuXG4vLyBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhbGwgb2YgdGhlIGJhY2tkcm9wc1xuJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjMyKTtcblxuLy8gRGVmYXVsdCBiYWNrZHJvcCBhbmltYXRpb24gaXMgYmFzZWQgb24gdGhlIE1hdGVyaWFsIERlc2lnbiBzd2lmdC1lYXNlLW91dC5cbiRiYWNrZHJvcC1hbmltYXRpb24tZHVyYXRpb246IDQwMG1zICFkZWZhdWx0O1xuJGJhY2tkcm9wLWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjI1LCAwLjgsIDAuMjUsIDEpICFkZWZhdWx0O1xuXG5cbkBtaXhpbiBjZGstb3ZlcmxheSgpIHtcbiAgLmNkay1vdmVybGF5LWNvbnRhaW5lciwgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICAvLyBEaXNhYmxlIGV2ZW50cyBmcm9tIGJlaW5nIGNhcHR1cmVkIG9uIHRoZSBvdmVybGF5IGNvbnRhaW5lci5cbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgIC8vIFRoZSBjb250YWluZXIgc2hvdWxkIGJlIHRoZSBzaXplIG9mIHRoZSB2aWV3cG9ydC5cbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAvLyBUaGUgb3ZlcmxheS1jb250YWluZXIgaXMgYW4gaW52aXNpYmxlIGVsZW1lbnQgd2hpY2ggY29udGFpbnMgYWxsIGluZGl2aWR1YWwgb3ZlcmxheXMuXG4gIC5jZGstb3ZlcmxheS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheS1jb250YWluZXI7XG5cbiAgICAmOmVtcHR5IHtcbiAgICAgIC8vIEhpZGUgdGhlIGVsZW1lbnQgd2hlbiBpdCBkb2Vzbid0IGhhdmUgYW55IGNoaWxkIG5vZGVzLiBUaGlzIGRvZXNuJ3RcbiAgICAgIC8vIGluY2x1ZGUgb3ZlcmxheXMgdGhhdCBoYXZlIGJlZW4gZGV0YWNoZWQsIHJhdGhlciB0aGFuIGRpc3Bvc2VkLlxuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAvLyBXZSB1c2UgYW4gZXh0cmEgd3JhcHBlciBlbGVtZW50IGluIG9yZGVyIHRvIHVzZSBtYWtlIHRoZSBvdmVybGF5IGl0c2VsZiBhIGZsZXggaXRlbS5cbiAgLy8gVGhpcyBtYWtlcyBjZW50ZXJpbmcgdGhlIG92ZXJsYXkgZWFzeSB3aXRob3V0IHJ1bm5pbmcgaW50byB0aGUgc3VicGl4ZWwgcmVuZGVyaW5nXG4gIC8vIHByb2JsZW1zIHRpZWQgdG8gdXNpbmcgYHRyYW5zZm9ybWAgYW5kIHdpdGhvdXQgaW50ZXJmZXJpbmcgd2l0aCB0aGUgb3RoZXIgcG9zaXRpb25cbiAgLy8gc3RyYXRlZ2llcy5cbiAgLmNkay1nbG9iYWwtb3ZlcmxheS13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcbiAgfVxuXG4gIC8vIEEgc2luZ2xlIG92ZXJsYXkgcGFuZS5cbiAgLmNkay1vdmVybGF5LXBhbmUge1xuICAgIC8vIE5vdGU6IGl0J3MgaW1wb3J0YW50IGZvciB0aGlzIG9uZSB0byBzdGFydCBvZmYgYGFic29sdXRlYCxcbiAgICAvLyBpbiBvcmRlciBmb3IgdXMgdG8gYmUgYWJsZSB0byBtZWFzdXJlIGl0IGNvcnJlY3RseS5cbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB6LWluZGV4OiAkY2RrLXotaW5kZXgtb3ZlcmxheTtcblxuICAgIC8vIEZvciBjb25uZWN0ZWQtcG9zaXRpb24gb3ZlcmxheXMsIHdlIHNldCBgZGlzcGxheTogZmxleGAgaW5cbiAgICAvLyBvcmRlciB0byBmb3JjZSBgbWF4LXdpZHRoYCBhbmQgYG1heC1oZWlnaHRgIHRvIHRha2UgZWZmZWN0LlxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gIH1cblxuICAuY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICAgIC8vIFRPRE8oamVsYm91cm4pOiByZXVzZSBzaWRlbmF2IGZ1bGxzY3JlZW4gbWl4aW4uXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcblxuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5LWJhY2tkcm9wO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAkYmFja2Ryb3AtYW5pbWF0aW9uLWR1cmF0aW9uICRiYWNrZHJvcC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uO1xuICAgIG9wYWNpdHk6IDA7XG5cbiAgICAmLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgb3BhY2l0eTogMTtcblxuICAgICAgLy8gSW4gaGlnaCBjb250cmFzdCBtb2RlIHRoZSByZ2JhIGJhY2tncm91bmQgd2lsbCBiZWNvbWUgc29saWQgc28gd2UgbmVlZCB0byBmYWxsIGJhY2tcbiAgICAgIC8vIHRvIG1ha2luZyBpdCBvcGFxdWUgdXNpbmcgYG9wYWNpdHlgLiBOb3RlIHRoYXQgd2UgY2FuJ3QgdXNlIHRoZSBgY2RrLWhpZ2gtY29udHJhc3RgXG4gICAgICAvLyBtaXhpbiwgYmVjYXVzZSB3ZSBjYW4ndCBub3JtYWxpemUgdGhlIGltcG9ydCBwYXRoIHRvIHRoZSBfYTExeS5zY3NzIGJvdGggZm9yIHRoZVxuICAgICAgLy8gc291cmNlIGFuZCB3aGVuIHRoaXMgZmlsZSBpcyBkaXN0cmlidXRlZC4gU2VlICMxMDkwOC5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZDogJGNkay1vdmVybGF5LWRhcmstYmFja2Ryb3AtYmFja2dyb3VuZDtcbiAgfVxuXG4gIC5jZGstb3ZlcmxheS10cmFuc3BhcmVudC1iYWNrZHJvcCB7XG4gICAgLy8gTm90ZTogYXMgb2YgRmlyZWZveCA1NywgaGF2aW5nIHRoZSBiYWNrZHJvcCBiZSBgYmFja2dyb3VuZDogbm9uZWAgd2lsbCBwcmV2ZW50IGl0IGZyb21cbiAgICAvLyBjYXB0dXJpbmcgdGhlIHVzZXIncyBtb3VzZSBzY3JvbGwgZXZlbnRzLiBTaW5jZSB3ZSBhbHNvIGNhbid0IHVzZSBzb21ldGhpbmcgbGlrZVxuICAgIC8vIGByZ2JhKDAsIDAsIDAsIDApYCwgd2Ugd29yayBhcm91bmQgdGhlIGluY29uc2lzdGVuY3kgYnkgbm90IHNldHRpbmcgdGhlIGJhY2tncm91bmQgYXRcbiAgICAvLyBhbGwgYW5kIHVzaW5nIGBvcGFjaXR5YCB0byBtYWtlIHRoZSBlbGVtZW50IHRyYW5zcGFyZW50LlxuICAgICYsICYuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuXG4gIC8vIE92ZXJsYXkgcGFyZW50IGVsZW1lbnQgdXNlZCB3aXRoIHRoZSBjb25uZWN0ZWQgcG9zaXRpb24gc3RyYXRlZ3kuIFVzZWQgdG8gY29uc3RyYWluIHRoZVxuICAvLyBvdmVybGF5IGVsZW1lbnQncyBzaXplIHRvIGZpdCB3aXRoaW4gdGhlIHZpZXdwb3J0LlxuICAuY2RrLW92ZXJsYXktY29ubmVjdGVkLXBvc2l0aW9uLWJvdW5kaW5nLWJveCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6ICRjZGstei1pbmRleC1vdmVybGF5O1xuXG4gICAgLy8gV2UgdXNlIGBkaXNwbGF5OiBmbGV4YCBvbiB0aGlzIGVsZW1lbnQgZXhjbHVzaXZlbHkgZm9yIGNlbnRlcmluZyBjb25uZWN0ZWQgb3ZlcmxheXMuXG4gICAgLy8gV2hlbiAqbm90KiBjZW50ZXJpbmcsIGEgdG9wL2xlZnQvYm90dG9tL3JpZ2h0IHdpbGwgYmUgc2V0IHdoaWNoIG92ZXJyaWRlcyB0aGUgbm9ybWFsXG4gICAgLy8gZmxleCBsYXlvdXQuXG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC8vIFdlIHVzZSB0aGUgYGNvbHVtbmAgZGlyZWN0aW9uIGhlcmUgdG8gYXZvaWQgc29tZSBmbGV4Ym94IGlzc3VlcyBpbiBFZGdlXG4gICAgLy8gd2hlbiB1c2luZyB0aGUgXCJncm93IGFmdGVyIG9wZW5cIiBvcHRpb25zLlxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAvLyBBZGQgc29tZSBkaW1lbnNpb25zIHNvIHRoZSBlbGVtZW50IGhhcyBhbiBgaW5uZXJUZXh0YCB3aGljaCBzb21lIHBlb3BsZSBkZXBlbmQgb24gaW4gdGVzdHMuXG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgbWluLWhlaWdodDogMXB4O1xuICB9XG5cbiAgLy8gVXNlZCB3aGVuIGRpc2FibGluZyBnbG9iYWwgc2Nyb2xsaW5nLlxuICAuY2RrLWdsb2JhbC1zY3JvbGxibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgLy8gTmVjZXNzYXJ5IGZvciB0aGUgY29udGVudCBub3QgdG8gbG9zZSBpdHMgd2lkdGguIE5vdGUgdGhhdCB3ZSdyZSB1c2luZyAxMDAlLCBpbnN0ZWFkIG9mXG4gICAgLy8gMTAwdncsIGJlY2F1c2UgMTAwdncgaW5jbHVkZXMgdGhlIHdpZHRoIHBsdXMgdGhlIHNjcm9sbGJhciwgd2hlcmVhcyAxMDAlIGlzIHRoZSB3aWR0aFxuICAgIC8vIHRoYXQgdGhlIGVsZW1lbnQgaGFkIGJlZm9yZSB3ZSBtYWRlIGl0IGBmaXhlZGAuXG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAvLyBOb3RlOiB0aGlzIHdpbGwgYWx3YXlzIGFkZCBhIHNjcm9sbGJhciB0byB3aGF0ZXZlciBlbGVtZW50IGl0IGlzIG9uLCB3aGljaCBjYW5cbiAgICAvLyBwb3RlbnRpYWxseSByZXN1bHQgaW4gZG91YmxlIHNjcm9sbGJhcnMuIEl0IHNob3VsZG4ndCBiZSBhbiBpc3N1ZSwgYmVjYXVzZSB3ZSB3b24ndFxuICAgIC8vIGJsb2NrIHNjcm9sbGluZyBvbiBhIHBhZ2UgdGhhdCBkb2Vzbid0IGhhdmUgYSBzY3JvbGxiYXIgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgfVxufVxuXG5AbWl4aW4gY2RrLWExMXkge1xuICAuY2RrLXZpc3VhbGx5LWhpZGRlbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWFyZ2luOiAtMXB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDFweDtcblxuICAgIC8vIEF2b2lkIGJyb3dzZXJzIHJlbmRlcmluZyB0aGUgZm9jdXMgcmluZyBpbiBzb21lIGNhc2VzLlxuICAgIG91dGxpbmU6IDA7XG5cbiAgICAvLyBBdm9pZCBzb21lIGNhc2VzIHdoZXJlIHRoZSBicm93c2VyIHdpbGwgc3RpbGwgcmVuZGVyIHRoZSBuYXRpdmUgY29udHJvbHMgKHNlZSAjOTA0OSkuXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIHN0eWxlcyBmb3IgdXNlcnMgaW4gaGlnaCBjb250cmFzdCBtb2RlLiBOb3RlIHRoYXQgdGhpcyBvbmx5IGFwcGxpZXNcbi8vIHRvIE1pY3Jvc29mdCBicm93c2Vycy4gQ2hyb21lIGNhbiBiZSBpbmNsdWRlZCBieSBjaGVja2luZyBmb3IgdGhlIGBodG1sW2hjXWBcbi8vIGF0dHJpYnV0ZSwgaG93ZXZlciBDaHJvbWUgaGFuZGxlcyBoaWdoIGNvbnRyYXN0IGRpZmZlcmVudGx5LlxuLy9cbi8vIEBwYXJhbSB0YXJnZXQgV2hpY2gga2luZCBvZiBoaWdoIGNvbnRyYXN0IHNldHRpbmcgdG8gdGFyZ2V0LiBEZWZhdWx0cyB0byBgYWN0aXZlYCwgY2FuIGJlXG4vLyAgICBgd2hpdGUtb24tYmxhY2tgIG9yIGBibGFjay1vbi13aGl0ZWAuXG5AbWl4aW4gY2RrLWhpZ2gtY29udHJhc3QoJHRhcmdldDogYWN0aXZlKSB7XG4gIEBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6ICR0YXJnZXQpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGVuYWJsZSBtb25pdG9yaW5nIGF1dG9maWxsIHN0YXRlIG9mIHRleHQgZmllbGRzLlxuQG1peGluIGNkay10ZXh0LWZpZWxkIHtcbiAgLy8gS2V5ZnJhbWVzIHRoYXQgYXBwbHkgbm8gc3R5bGVzLCBidXQgYWxsb3cgdXMgdG8gbW9uaXRvciB3aGVuIGFuIHRleHQgZmllbGQgYmVjb21lcyBhdXRvZmlsbGVkXG4gIC8vIGJ5IHdhdGNoaW5nIGZvciB0aGUgYW5pbWF0aW9uIGV2ZW50cyB0aGF0IGFyZSBmaXJlZCB3aGVuIHRoZXkgc3RhcnQuIE5vdGU6IHRoZSAvKiEqLyBjb21tZW50IGlzXG4gIC8vIG5lZWRlZCB0byBwcmV2ZW50IExpYlNhc3MgZnJvbSBzdHJpcHBpbmcgdGhlIGtleWZyYW1lcyBvdXQuXG4gIC8vIEJhc2VkIG9uOiBodHRwczovL21lZGl1bS5jb20vQGJydW5uL2RldGVjdGluZy1hdXRvZmlsbGVkLWZpZWxkcy1pbi1qYXZhc2NyaXB0LWFlZDU5OGQyNWRhN1xuICBAa2V5ZnJhbWVzIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0IHsvKiEqL31cbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQgey8qISovfVxuXG4gIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLXN0YXJ0O1xuICB9XG5cbiAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDpub3QoOi13ZWJraXQtYXV0b2ZpbGwpIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kO1xuICB9XG5cbiAgLy8gUmVtb3ZlIHRoZSByZXNpemUgaGFuZGxlIG9uIGF1dG9zaXppbmcgdGV4dGFyZWFzLCBiZWNhdXNlIHdoYXRldmVyIGhlaWdodFxuICAvLyB0aGUgdXNlciByZXNpemVkIHRvIHdpbGwgYmUgb3ZlcndyaXR0ZW4gb25jZSB0aGV5IHN0YXJ0IHR5cGluZyBhZ2Fpbi5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplIHtcbiAgICByZXNpemU6IG5vbmU7XG4gIH1cblxuICAvLyBUaGlzIGNsYXNzIGlzIHRlbXBvcmFyaWx5IGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHdoZW4gaXQgaXMgYmVpbmcgbWVhc3VyZWQuIEl0IGlzIGltbWVkaWF0ZWx5XG4gIC8vIHJlbW92ZWQgd2hlbiBtZWFzdXJpbmcgaXMgY29tcGxldGUuIFdlIHVzZSBgIWltcG9ydGFudGAgcnVsZXMgaGVyZSB0byBtYWtlIHN1cmUgdXNlci1zcGVjaWZpZWRcbiAgLy8gcnVsZXMgZG8gbm90IGludGVyZmVyZSB3aXRoIHRoZSBtZWFzdXJlbWVudC5cbiAgdGV4dGFyZWEuY2RrLXRleHRhcmVhLWF1dG9zaXplLW1lYXN1cmluZyB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgIC8vIEhhdmluZyAycHggdG9wIGFuZCBib3R0b20gcGFkZGluZyBzZWVtcyB0byBmaXggYSBidWcgd2hlcmUgQ2hyb21lIGdldHMgYW4gaW5jb3JyZWN0XG4gICAgLy8gbWVhc3VyZW1lbnQuIFdlIGp1c3QgaGF2ZSB0byBhY2NvdW50IGZvciBpdCBsYXRlciBhbmQgc3VidHJhY3QgaXQgb2ZmIHRoZSBmaW5hbCByZXN1bHQuXG4gICAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi8vIFVzZWQgdG8gZ2VuZXJhdGUgVUlEcyBmb3Iga2V5ZnJhbWVzIHVzZWQgdG8gY2hhbmdlIHRoZSB0ZXh0IGZpZWxkIGF1dG9maWxsIHN0eWxlcy5cbiRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDogMDtcblxuLy8gTWl4aW4gdXNlZCB0byBhcHBseSBjdXN0b20gYmFja2dyb3VuZCBhbmQgZm9yZWdyb3VuZCBjb2xvcnMgdG8gYW4gYXV0b2ZpbGxlZCB0ZXh0IGZpZWxkLlxuLy8gQmFzZWQgb246IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI3ODE1NDkvXG4vLyByZW1vdmluZy1pbnB1dC1iYWNrZ3JvdW5kLWNvbG91ci1mb3ItY2hyb21lLWF1dG9jb21wbGV0ZSNhbnN3ZXItMzc0MzIyNjBcbkBtaXhpbiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvcigkYmFja2dyb3VuZCwgJGZvcmVncm91bmQ6JycpIHtcbiAgQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci0jeyRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudH0ge1xuICAgIHRvIHtcbiAgICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgICAgQGlmICRmb3JlZ3JvdW5kICE9ICcnIHsgY29sb3I6ICRmb3JlZ3JvdW5kOyB9XG4gICAgfVxuICB9XG5cbiAgJjotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItI3skY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtY29sb3ItZnJhbWUtY291bnR9O1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG4gIH1cblxuICAmLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsLW1vbml0b3JlZDotd2Via2l0LWF1dG9maWxsIHtcbiAgICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLSN7JGNkay10ZXh0LWZpZWxkLWF1dG9maWxsLWNvbG9yLWZyYW1lLWNvdW50fTtcbiAgfVxuXG4gICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudDpcbiAgICAgICRjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1jb2xvci1mcmFtZS1jb3VudCArIDEgIWdsb2JhbDtcbn1cblxuXG4vLyBDb3JlIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIHRvIGFwcGx5IG1hdGVyaWFsIGRlc2lnbiB0cmVhdG1lbnRzIHRvIGFueSBlbGVtZW50LlxuLy8gTWVkaWEgcXVlcmllc1xuLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogQ2hhbmdlICRtYXQteHNtYWxsIGFuZCAkbWF0LXNtYWxsIHVzYWdlcyB0byByZWx5IG9uIEJyZWFrcG9pbnRPYnNlcnZlcixcbiRtYXQteHNtYWxsOiAnbWF4LXdpZHRoOiA1OTlweCc7XG4kbWF0LXNtYWxsOiAnbWF4LXdpZHRoOiA5NTlweCc7XG5cbi8vIFRPRE86IFJldmlzaXQgYWxsIHotaW5kaWNlcyBiZWZvcmUgYmV0YVxuLy8gei1pbmRleCBtYXN0ZXIgbGlzdFxuXG4kei1pbmRleC1mYWI6IDIwICFkZWZhdWx0O1xuJHotaW5kZXgtZHJhd2VyOiAxMDAgIWRlZmF1bHQ7XG5cbi8vIEdsb2JhbCBjb25zdGFudHNcbiRwaTogMy4xNDE1OTI2NTtcblxuLy8gUGFkZGluZyBiZXR3ZWVuIGlucHV0IHRvZ2dsZXMgYW5kIHRoZWlyIGxhYmVsc1xuJG1hdC10b2dnbGUtcGFkZGluZzogOHB4ICFkZWZhdWx0O1xuLy8gV2lkdGggYW5kIGhlaWdodCBvZiBpbnB1dCB0b2dnbGVzXG4kbWF0LXRvZ2dsZS1zaXplOiAyMHB4ICFkZWZhdWx0O1xuXG4vLyBFYXNpbmcgQ3VydmVzXG4vLyBUT0RPKGplbGJvdXJuKTogYWxsIG9mIHRoZXNlIG5lZWQgdG8gYmUgcmV2aXNpdGVkXG5cbi8vIFRoZSBkZWZhdWx0IGFuaW1hdGlvbiBjdXJ2ZXMgdXNlZCBieSBtYXRlcmlhbCBkZXNpZ24uXG4kbWF0LWxpbmVhci1vdXQtc2xvdy1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLCAwLCAwLjIsIDAuMSkgIWRlZmF1bHQ7XG4kbWF0LWZhc3Qtb3V0LXNsb3ctaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpICFkZWZhdWx0O1xuJG1hdC1mYXN0LW91dC1saW5lYXItaW4tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAxLCAxKSAhZGVmYXVsdDtcblxuJGVhc2UtaW4tb3V0LWN1cnZlLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSkgIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbjogNDAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjI1LCAxKSAhZGVmYXVsdDtcbiRzd2lmdC1lYXNlLW91dDogYWxsICRzd2lmdC1lYXNlLW91dC1kdXJhdGlvbiAkc3dpZnQtZWFzZS1vdXQtdGltaW5nLWZ1bmN0aW9uICFkZWZhdWx0O1xuXG4kc3dpZnQtZWFzZS1pbi1kdXJhdGlvbjogMzAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1LCAwLCAwLjU1LCAwLjIpICFkZWZhdWx0O1xuJHN3aWZ0LWVhc2UtaW46IGFsbCAkc3dpZnQtZWFzZS1pbi1kdXJhdGlvbiAkc3dpZnQtZWFzZS1pbi10aW1pbmctZnVuY3Rpb24gIWRlZmF1bHQ7XG5cbiRzd2lmdC1lYXNlLWluLW91dC1kdXJhdGlvbjogNTAwbXMgIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQtdGltaW5nLWZ1bmN0aW9uOiAkZWFzZS1pbi1vdXQtY3VydmUtZnVuY3Rpb24gIWRlZmF1bHQ7XG4kc3dpZnQtZWFzZS1pbi1vdXQ6IGFsbCAkc3dpZnQtZWFzZS1pbi1vdXQtZHVyYXRpb24gJHN3aWZ0LWVhc2UtaW4tb3V0LXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuJHN3aWZ0LWxpbmVhci1kdXJhdGlvbjogODBtcyAhZGVmYXVsdDtcbiRzd2lmdC1saW5lYXItdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXIgIWRlZmF1bHQ7XG4kc3dpZnQtbGluZWFyOiBhbGwgJHN3aWZ0LWxpbmVhci1kdXJhdGlvbiAkc3dpZnQtbGluZWFyLXRpbWluZy1mdW5jdGlvbiAhZGVmYXVsdDtcblxuXG5cbi8vIEEgY29sbGVjdGlvbiBvZiBtaXhpbnMgYW5kIENTUyBjbGFzc2VzIHRoYXQgY2FuIGJlIHVzZWQgdG8gYXBwbHkgZWxldmF0aW9uIHRvIGEgbWF0ZXJpYWxcbi8vIGVsZW1lbnQuXG4vLyBTZWU6IGh0dHBzOi8vbWF0ZXJpYWwuaW8vZGVzaWduL2Vudmlyb25tZW50L2VsZXZhdGlvbi5odG1sXG4vLyBFeGFtcGxlczpcbi8vXG4vL1xuLy8gLm1hdC1mb28ge1xuLy8gICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbigyKTtcbi8vXG4vLyAgICY6YWN0aXZlIHtcbi8vICAgICBAaW5jbHVkZSAkbWF0LWVsZXZhdGlvbig4KTtcbi8vICAgfVxuLy8gfVxuLy9cbi8vIDxkaXYgaWQ9XCJleHRlcm5hbC1jYXJkXCIgY2xhc3M9XCJtYXQtZWxldmF0aW9uLXoyXCI+PHA+U29tZSBjb250ZW50PC9wPjwvZGl2PlxuLy9cbi8vIEZvciBhbiBleHBsYW5hdGlvbiBvZiB0aGUgZGVzaWduIGJlaGluZCBob3cgZWxldmF0aW9uIGlzIGltcGxlbWVudGVkLCBzZWUgdGhlIGRlc2lnbiBkb2MgYXRcbi8vIGh0dHBzOi8vZ29vLmdsL0txMGs5Wi5cblxuLy8gQ29sb3JzIGZvciB1bWJyYSwgcGVudW1icmEsIGFuZCBhbWJpZW50IHNoYWRvd3MuIEFzIGRlc2NyaWJlZCBpbiB0aGUgZGVzaWduIGRvYywgZWFjaCBlbGV2YXRpb25cbi8vIGxldmVsIGlzIGNyZWF0ZWQgdXNpbmcgYSBzZXQgb2YgMyBzaGFkb3cgdmFsdWVzLCBvbmUgZm9yIHVtYnJhICh0aGUgc2hhZG93IHJlcHJlc2VudGluZyB0aGVcbi8vIHNwYWNlIGNvbXBsZXRlbHkgb2JzY3VyZWQgYnkgYW4gb2JqZWN0IHJlbGF0aXZlIHRvIGl0cyBsaWdodCBzb3VyY2UpLCBvbmUgZm9yIHBlbnVtYnJhICh0aGVcbi8vIHNwYWNlIHBhcnRpYWxseSBvYnNjdXJlZCBieSBhbiBvYmplY3QpLCBhbmQgb25lIGZvciBhbWJpZW50ICh0aGUgc3BhY2Ugd2hpY2ggY29udGFpbnMgdGhlIG9iamVjdFxuLy8gaXRzZWxmKS4gRm9yIGEgZnVydGhlciBleHBsYW5hdGlvbiBvZiB0aGVzZSB0ZXJtcyBhbmQgdGhlaXIgbWVhbmluZ3MsIHNlZVxuLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVW1icmEsX3BlbnVtYnJhX2FuZF9hbnR1bWJyYS5cblxuLy8gTWFwcyBmb3IgdGhlIGRpZmZlcmVudCBzaGFkb3cgc2V0cyBhbmQgdGhlaXIgdmFsdWVzIHdpdGhpbiBlYWNoIHotc3BhY2UuIFRoZXNlIHZhbHVlcyB3ZXJlXG4vLyBjcmVhdGVkIGJ5IHRha2luZyBhIGZldyByZWZlcmVuY2Ugc2hhZG93IHNldHMgY3JlYXRlZCBieSBHb29nbGUncyBEZXNpZ25lcnMgYW5kIGludGVycG9sYXRpbmdcbi8vIGFsbCBvZiB0aGUgdmFsdWVzIGJldHdlZW4gdGhlbS5cblxuQGZ1bmN0aW9uIF9nZXQtdW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjIpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAycHggMXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAzcHggMXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMzogJzBweCAzcHggM3B4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCAycHggNHB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNTogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNjogJzBweCAzcHggNXB4IC0xcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNzogJzBweCA0cHggNXB4IC0ycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgODogJzBweCA1cHggNXB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgOTogJzBweCA1cHggNnB4IC0zcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTA6ICcwcHggNnB4IDZweCAtM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDExOiAnMHB4IDZweCA3cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCA3cHggOHB4IC00cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTM6ICcwcHggN3B4IDhweCAtNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE0OiAnMHB4IDdweCA5cHggLTRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCA4cHggOXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTY6ICcwcHggOHB4IDEwcHggLTVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA4cHggMTFweCAtNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE4OiAnMHB4IDlweCAxMXB4IC01cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTk6ICcwcHggOXB4IDEycHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAxMHB4IDEzcHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMjogJzBweCAxMHB4IDE0cHggLTZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCAxMXB4IDE0cHggLTdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAxMXB4IDE1cHggLTdweCAjeyRzaGFkb3ctY29sb3J9J1xuICApO1xufVxuXG5AZnVuY3Rpb24gX2dldC1wZW51bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSkge1xuICAkc2hhZG93LWNvbG9yOiBpZih0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IsIHJnYmEoJGNvbG9yLCAkb3BhY2l0eSAqIDAuMTQpLCAkY29sb3IpO1xuXG4gIEByZXR1cm4gKFxuICAgIDA6ICcwcHggMHB4IDBweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTogJzBweCAxcHggMXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyOiAnMHB4IDJweCAycHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDM6ICcwcHggM3B4IDRweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgNDogJzBweCA0cHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICA1OiAnMHB4IDVweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggNnB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggN3B4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggOHB4IDEwcHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggOXB4IDEycHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDEwcHggMTRweCAxcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTE6ICcwcHggMTFweCAxNXB4IDFweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMjogJzBweCAxMnB4IDE3cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDEzcHggMTlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTQ6ICcwcHggMTRweCAyMXB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNTogJzBweCAxNXB4IDIycHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDE2cHggMjRweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTc6ICcwcHggMTdweCAyNnB4IDJweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxODogJzBweCAxOHB4IDI4cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDE5cHggMjlweCAycHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjA6ICcwcHggMjBweCAzMXB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMTogJzBweCAyMXB4IDMzcHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDIycHggMzVweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjM6ICcwcHggMjNweCAzNnB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyNDogJzBweCAyNHB4IDM4cHggM3B4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbkBmdW5jdGlvbiBfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpIHtcbiAgJHNoYWRvdy1jb2xvcjogaWYodHlwZS1vZigkY29sb3IpID09IGNvbG9yLCByZ2JhKCRjb2xvciwgJG9wYWNpdHkgKiAwLjEyKSwgJGNvbG9yKTtcblxuICBAcmV0dXJuIChcbiAgICAwOiAnMHB4IDBweCAwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE6ICcwcHggMXB4IDNweCAwcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjogJzBweCAxcHggNXB4IDBweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAzOiAnMHB4IDFweCA4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDQ6ICcwcHggMXB4IDEwcHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDU6ICcwcHggMXB4IDE0cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDY6ICcwcHggMXB4IDE4cHggMHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDc6ICcwcHggMnB4IDE2cHggMXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDg6ICcwcHggM3B4IDE0cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDk6ICcwcHggM3B4IDE2cHggMnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEwOiAnMHB4IDRweCAxOHB4IDNweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxMTogJzBweCA0cHggMjBweCAzcHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTI6ICcwcHggNXB4IDIycHggNHB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDEzOiAnMHB4IDVweCAyNHB4IDRweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNDogJzBweCA1cHggMjZweCA0cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTU6ICcwcHggNnB4IDI4cHggNXB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE2OiAnMHB4IDZweCAzMHB4IDVweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAxNzogJzBweCA2cHggMzJweCA1cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMTg6ICcwcHggN3B4IDM0cHggNnB4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDE5OiAnMHB4IDdweCAzNnB4IDZweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMDogJzBweCA4cHggMzhweCA3cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjE6ICcwcHggOHB4IDQwcHggN3B4ICN7JHNoYWRvdy1jb2xvcn0nLFxuICAgIDIyOiAnMHB4IDhweCA0MnB4IDdweCAjeyRzaGFkb3ctY29sb3J9JyxcbiAgICAyMzogJzBweCA5cHggNDRweCA4cHggI3skc2hhZG93LWNvbG9yfScsXG4gICAgMjQ6ICcwcHggOXB4IDQ2cHggOHB4ICN7JHNoYWRvdy1jb2xvcn0nXG4gICk7XG59XG5cbi8vIFRoZSBkZWZhdWx0IGR1cmF0aW9uIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uOiAyODBtcyAhZGVmYXVsdDtcblxuLy8gVGhlIGRlZmF1bHQgZWFzaW5nIHZhbHVlIGZvciBlbGV2YXRpb24gdHJhbnNpdGlvbnMuXG4kbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogJG1hdC1mYXN0LW91dC1zbG93LWluLXRpbWluZy1mdW5jdGlvbjtcblxuLy8gVGhlIGRlZmF1bHQgY29sb3IgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tY29sb3I6IGJsYWNrICFkZWZhdWx0O1xuXG4vLyBUaGUgZGVmYXVsdCBvcGFjaXR5IHNjYWxpbmcgdmFsdWUgZm9yIGVsZXZhdGlvbiBzaGFkb3dzLlxuJG1hdC1lbGV2YXRpb24tb3BhY2l0eTogMSAhZGVmYXVsdDtcblxuLy8gUHJlZml4IGZvciBlbGV2YXRpb24tcmVsYXRlZCBzZWxlY3RvcnMuXG4kX21hdC1lbGV2YXRpb24tcHJlZml4OiAnbWF0LWVsZXZhdGlvbi16JztcblxuLy8gQXBwbGllcyB0aGUgY29ycmVjdCBjc3MgcnVsZXMgdG8gYW4gZWxlbWVudCB0byBnaXZlIGl0IHRoZSBlbGV2YXRpb24gc3BlY2lmaWVkIGJ5ICR6VmFsdWUuXG4vLyBUaGUgJHpWYWx1ZSBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMjQuXG5AbWl4aW4gbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkb3BhY2l0eTogJG1hdC1lbGV2YXRpb24tb3BhY2l0eSkge1xuICBAaWYgdHlwZS1vZigkelZhbHVlKSAhPSBudW1iZXIgb3Igbm90IHVuaXRsZXNzKCR6VmFsdWUpIHtcbiAgICBAZXJyb3IgJyR6VmFsdWUgbXVzdCBiZSBhIHVuaXRsZXNzIG51bWJlcic7XG4gIH1cbiAgQGlmICR6VmFsdWUgPCAwIG9yICR6VmFsdWUgPiAyNCB7XG4gICAgQGVycm9yICckelZhbHVlIG11c3QgYmUgYmV0d2VlbiAwIGFuZCAyNCc7XG4gIH1cblxuICBib3gtc2hhZG93OiAje21hcC1nZXQoX2dldC11bWJyYS1tYXAoJGNvbG9yLCAkb3BhY2l0eSksICR6VmFsdWUpfSxcbiAgICAgICAgICAgICAgI3ttYXAtZ2V0KF9nZXQtcGVudW1icmEtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX0sXG4gICAgICAgICAgICAgICN7bWFwLWdldChfZ2V0LWFtYmllbnQtbWFwKCRjb2xvciwgJG9wYWNpdHkpLCAkelZhbHVlKX07XG59XG5cbkBtaXhpbiBfbWF0LXRoZW1lLWVsZXZhdGlvbigkelZhbHVlLCAkdGhlbWUsICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRlbGV2YXRpb24tY29sb3I6IG1hcC1nZXQoJGZvcmVncm91bmQsIGVsZXZhdGlvbik7XG4gICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdDogaWYoJGVsZXZhdGlvbi1jb2xvciA9PSBudWxsLCAkbWF0LWVsZXZhdGlvbi1jb2xvciwgJGVsZXZhdGlvbi1jb2xvcik7XG5cbiAgQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigkelZhbHVlLCAkZWxldmF0aW9uLWNvbG9yLW9yLWRlZmF1bHQsICRvcGFjaXR5KTtcbn1cblxuLy8gQXBwbGllcyB0aGUgZWxldmF0aW9uIHRvIGFuIGVsZW1lbnQgaW4gYSBtYW5uZXIgdGhhdCBhbGxvd3Ncbi8vIGNvbnN1bWVycyB0byBvdmVycmlkZSBpdCB2aWEgdGhlIE1hdGVyaWFsIGVsZXZhdGlvbiBjbGFzc2VzLlxuQG1peGluIG1hdC1vdmVycmlkYWJsZS1lbGV2YXRpb24oXG4gICAgJHpWYWx1ZSxcbiAgICAkY29sb3I6ICRtYXQtZWxldmF0aW9uLWNvbG9yLFxuICAgICRvcGFjaXR5OiAkbWF0LWVsZXZhdGlvbi1vcGFjaXR5KSB7XG4gICY6bm90KFtjbGFzcyo9JyN7JF9tYXQtZWxldmF0aW9uLXByZWZpeH0nXSkge1xuICAgIEBpbmNsdWRlIG1hdC1lbGV2YXRpb24oJHpWYWx1ZSwgJGNvbG9yLCAkb3BhY2l0eSk7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICR0aGVtZSwgJG9wYWNpdHk6ICRtYXQtZWxldmF0aW9uLW9wYWNpdHkpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGVsZXZhdGlvbi1jb2xvcjogbWFwLWdldCgkZm9yZWdyb3VuZCwgZWxldmF0aW9uKTtcbiAgJGVsZXZhdGlvbi1jb2xvci1vci1kZWZhdWx0OiBpZigkZWxldmF0aW9uLWNvbG9yID09IG51bGwsICRtYXQtZWxldmF0aW9uLWNvbG9yLCAkZWxldmF0aW9uLWNvbG9yKTtcblxuICBAaW5jbHVkZSBtYXQtb3ZlcnJpZGFibGUtZWxldmF0aW9uKCR6VmFsdWUsICRlbGV2YXRpb24tY29sb3Itb3ItZGVmYXVsdCwgJG9wYWNpdHkpO1xufVxuXG4vLyBSZXR1cm5zIGEgc3RyaW5nIHRoYXQgY2FuIGJlIHVzZWQgYXMgdGhlIHZhbHVlIGZvciBhIHRyYW5zaXRpb24gcHJvcGVydHkgZm9yIGVsZXZhdGlvbi5cbi8vIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBkaXJlY3RseSBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSBhIGNvbXBvbmVudCBuZWVkcyB0byB0cmFuc2l0aW9uXG4vLyBtb3JlIHRoYW4gb25lIHByb3BlcnR5LlxuLy9cbi8vIC5mb28ge1xuLy8gICB0cmFuc2l0aW9uOiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tcHJvcGVydHktdmFsdWUoKSwgb3BhY2l0eSAxMDBtcyBlYXNlO1xuLy8gfVxuQGZ1bmN0aW9uIG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZShcbiAgICAkZHVyYXRpb246ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tZHVyYXRpb24sXG4gICAgJGVhc2luZzogJG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24pIHtcbiAgQHJldHVybiBib3gtc2hhZG93ICN7JGR1cmF0aW9ufSAjeyRlYXNpbmd9O1xufVxuXG4vLyBBcHBsaWVzIHRoZSBjb3JyZWN0IGNzcyBydWxlcyBuZWVkZWQgdG8gaGF2ZSBhbiBlbGVtZW50IHRyYW5zaXRpb24gYmV0d2VlbiBlbGV2YXRpb25zLlxuLy8gVGhpcyBtaXhpbiBzaG91bGQgYmUgYXBwbGllZCB0byBlbGVtZW50cyB3aG9zZSBlbGV2YXRpb24gdmFsdWVzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB0aGVpclxuLy8gY29udGV4dCAoZS5nLiB3aGVuIGFjdGl2ZSBvciBkaXNhYmxlZCkuXG4vL1xuLy8gTk9URSh0cmF2aXNrYXVmbWFuKTogQm90aCB0aGlzIG1peGluIGFuZCB0aGUgYWJvdmUgZnVuY3Rpb24gdXNlIGRlZmF1bHQgcGFyYW1ldGVycyBzbyB0aGV5IGNhblxuLy8gYmUgdXNlZCBpbiB0aGUgc2FtZSB3YXkgYnkgY2xpZW50cy5cbkBtaXhpbiBtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24oXG4gICAgJGR1cmF0aW9uOiAkbWF0LWVsZXZhdGlvbi10cmFuc2l0aW9uLWR1cmF0aW9uLFxuICAgICRlYXNpbmc6ICRtYXQtZWxldmF0aW9uLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uKSB7XG4gIHRyYW5zaXRpb246IG1hdC1lbGV2YXRpb24tdHJhbnNpdGlvbi1wcm9wZXJ0eS12YWx1ZSgkZHVyYXRpb24sICRlYXNpbmcpO1xufVxuXG4vLyBDb2xvciBwYWxldHRlcyBmcm9tIHRoZSBNYXRlcmlhbCBEZXNpZ24gc3BlYy5cbi8vIFNlZSBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb2xvci9cbi8vXG4vLyBDb250cmFzdCBjb2xvcnMgYXJlIGhhcmQtY29kZWQgYmVjYXVzZSBpdCBpcyB0b28gZGlmZmljdWx0IChwcm9iYWJseSBpbXBvc3NpYmxlKSB0b1xuLy8gY2FsY3VsYXRlIHRoZW0uIFRoZXNlIGNvbnRyYXN0IGNvbG9ycyBhcmUgcHVsbGVkIGZyb20gdGhlIHB1YmxpYyBNYXRlcmlhbCBEZXNpZ24gc3BlYyBzd2F0Y2hlcy5cbi8vIFdoaWxlIHRoZSBjb250cmFzdCBjb2xvcnMgaW4gdGhlIHNwZWMgYXJlIG5vdCBwcmVzY3JpcHRpdmUsIHdlIHVzZSB0aGVtIGZvciBjb252ZW5pZW5jZS5cblxuXG4vLyBAZGVwcmVjYXRlZCByZW5hbWVkIHRvICRkYXJrLXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiRibGFjay04Ny1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHJlbmFtZWQgdG8gJGxpZ2h0LXByaW1hcnktdGV4dC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS04Ny1vcGFjaXR5OiByZ2JhKHdoaXRlLCAwLjg3KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkZGFyay1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJGJsYWNrLTEyLW9wYWNpdHk6IHJnYmEoYmxhY2ssIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRsaWdodC1bc2Vjb25kYXJ5LXRleHQsZGlzYWJsZWQtdGV4dCxkaXZpZGVycyxmb2N1c2VkXSBpbnN0ZWFkLlxuLy8gQGJyZWFraW5nLWNoYW5nZSA4LjAuMFxuJHdoaXRlLTEyLW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMTIpO1xuLy8gQGRlcHJlY2F0ZWQgdXNlICRkYXJrLVtzZWNvbmRhcnktdGV4dCxkaXNhYmxlZC10ZXh0LGRpdmlkZXJzLGZvY3VzZWRdIGluc3RlYWQuXG4vLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wXG4kYmxhY2stNi1vcGFjaXR5OiByZ2JhKGJsYWNrLCAwLjA2KTtcbi8vIEBkZXByZWNhdGVkIHVzZSAkbGlnaHQtW3NlY29uZGFyeS10ZXh0LGRpc2FibGVkLXRleHQsZGl2aWRlcnMsZm9jdXNlZF0gaW5zdGVhZC5cbi8vIEBicmVha2luZy1jaGFuZ2UgOC4wLjBcbiR3aGl0ZS02LW9wYWNpdHk6IHJnYmEod2hpdGUsIDAuMDYpO1xuXG4kZGFyay1wcmltYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuODcpO1xuJGRhcmstc2Vjb25kYXJ5LXRleHQ6IHJnYmEoYmxhY2ssIDAuNTQpO1xuJGRhcmstZGlzYWJsZWQtdGV4dDogcmdiYShibGFjaywgMC4zOCk7XG4kZGFyay1kaXZpZGVyczogcmdiYShibGFjaywgMC4xMik7XG4kZGFyay1mb2N1c2VkOiByZ2JhKGJsYWNrLCAwLjEyKTtcbiRsaWdodC1wcmltYXJ5LXRleHQ6IHdoaXRlO1xuJGxpZ2h0LXNlY29uZGFyeS10ZXh0OiByZ2JhKHdoaXRlLCAwLjcpO1xuJGxpZ2h0LWRpc2FibGVkLXRleHQ6IHJnYmEod2hpdGUsIDAuNSk7XG4kbGlnaHQtZGl2aWRlcnM6IHJnYmEod2hpdGUsIDAuMTIpO1xuJGxpZ2h0LWZvY3VzZWQ6IHJnYmEod2hpdGUsIDAuMTIpO1xuXG4kbWF0LXJlZDogKFxuICA1MDogI2ZmZWJlZSxcbiAgMTAwOiAjZmZjZGQyLFxuICAyMDA6ICNlZjlhOWEsXG4gIDMwMDogI2U1NzM3MyxcbiAgNDAwOiAjZWY1MzUwLFxuICA1MDA6ICNmNDQzMzYsXG4gIDYwMDogI2U1MzkzNSxcbiAgNzAwOiAjZDMyZjJmLFxuICA4MDA6ICNjNjI4MjgsXG4gIDkwMDogI2I3MWMxYyxcbiAgQTEwMDogI2ZmOGE4MCxcbiAgQTIwMDogI2ZmNTI1MixcbiAgQTQwMDogI2ZmMTc0NCxcbiAgQTcwMDogI2Q1MDAwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXBpbms6IChcbiAgNTA6ICNmY2U0ZWMsXG4gIDEwMDogI2Y4YmJkMCxcbiAgMjAwOiAjZjQ4ZmIxLFxuICAzMDA6ICNmMDYyOTIsXG4gIDQwMDogI2VjNDA3YSxcbiAgNTAwOiAjZTkxZTYzLFxuICA2MDA6ICNkODFiNjAsXG4gIDcwMDogI2MyMTg1YixcbiAgODAwOiAjYWQxNDU3LFxuICA5MDA6ICM4ODBlNGYsXG4gIEExMDA6ICNmZjgwYWIsXG4gIEEyMDA6ICNmZjQwODEsXG4gIEE0MDA6ICNmNTAwNTcsXG4gIEE3MDA6ICNjNTExNjIsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1wdXJwbGU6IChcbiAgNTA6ICNmM2U1ZjUsXG4gIDEwMDogI2UxYmVlNyxcbiAgMjAwOiAjY2U5M2Q4LFxuICAzMDA6ICNiYTY4YzgsXG4gIDQwMDogI2FiNDdiYyxcbiAgNTAwOiAjOWMyN2IwLFxuICA2MDA6ICM4ZTI0YWEsXG4gIDcwMDogIzdiMWZhMixcbiAgODAwOiAjNmExYjlhLFxuICA5MDA6ICM0YTE0OGMsXG4gIEExMDA6ICNlYTgwZmMsXG4gIEEyMDA6ICNlMDQwZmIsXG4gIEE0MDA6ICNkNTAwZjksXG4gIEE3MDA6ICNhYTAwZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWRlZXAtcHVycGxlOiAoXG4gIDUwOiAjZWRlN2Y2LFxuICAxMDA6ICNkMWM0ZTksXG4gIDIwMDogI2IzOWRkYixcbiAgMzAwOiAjOTU3NWNkLFxuICA0MDA6ICM3ZTU3YzIsXG4gIDUwMDogIzY3M2FiNyxcbiAgNjAwOiAjNWUzNWIxLFxuICA3MDA6ICM1MTJkYTgsXG4gIDgwMDogIzQ1MjdhMCxcbiAgOTAwOiAjMzExYjkyLFxuICBBMTAwOiAjYjM4OGZmLFxuICBBMjAwOiAjN2M0ZGZmLFxuICBBNDAwOiAjNjUxZmZmLFxuICBBNzAwOiAjNjIwMGVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1pbmRpZ286IChcbiAgNTA6ICNlOGVhZjYsXG4gIDEwMDogI2M1Y2FlOSxcbiAgMjAwOiAjOWZhOGRhLFxuICAzMDA6ICM3OTg2Y2IsXG4gIDQwMDogIzVjNmJjMCxcbiAgNTAwOiAjM2Y1MWI1LFxuICA2MDA6ICMzOTQ5YWIsXG4gIDcwMDogIzMwM2Y5ZixcbiAgODAwOiAjMjgzNTkzLFxuICA5MDA6ICMxYTIzN2UsXG4gIEExMDA6ICM4YzllZmYsXG4gIEEyMDA6ICM1MzZkZmUsXG4gIEE0MDA6ICMzZDVhZmUsXG4gIEE3MDA6ICMzMDRmZmUsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWJsdWU6IChcbiAgNTA6ICNlM2YyZmQsXG4gIDEwMDogI2JiZGVmYixcbiAgMjAwOiAjOTBjYWY5LFxuICAzMDA6ICM2NGI1ZjYsXG4gIDQwMDogIzQyYTVmNSxcbiAgNTAwOiAjMjE5NmYzLFxuICA2MDA6ICMxZTg4ZTUsXG4gIDcwMDogIzE5NzZkMixcbiAgODAwOiAjMTU2NWMwLFxuICA5MDA6ICMwZDQ3YTEsXG4gIEExMDA6ICM4MmIxZmYsXG4gIEEyMDA6ICM0NDhhZmYsXG4gIEE0MDA6ICMyOTc5ZmYsXG4gIEE3MDA6ICMyOTYyZmYsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1saWdodC1ibHVlOiAoXG4gIDUwOiAjZTFmNWZlLFxuICAxMDA6ICNiM2U1ZmMsXG4gIDIwMDogIzgxZDRmYSxcbiAgMzAwOiAjNGZjM2Y3LFxuICA0MDA6ICMyOWI2ZjYsXG4gIDUwMDogIzAzYTlmNCxcbiAgNjAwOiAjMDM5YmU1LFxuICA3MDA6ICMwMjg4ZDEsXG4gIDgwMDogIzAyNzdiZCxcbiAgOTAwOiAjMDE1NzliLFxuICBBMTAwOiAjODBkOGZmLFxuICBBMjAwOiAjNDBjNGZmLFxuICBBNDAwOiAjMDBiMGZmLFxuICBBNzAwOiAjMDA5MWVhLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWN5YW46IChcbiAgNTA6ICNlMGY3ZmEsXG4gIDEwMDogI2IyZWJmMixcbiAgMjAwOiAjODBkZWVhLFxuICAzMDA6ICM0ZGQwZTEsXG4gIDQwMDogIzI2YzZkYSxcbiAgNTAwOiAjMDBiY2Q0LFxuICA2MDA6ICMwMGFjYzEsXG4gIDcwMDogIzAwOTdhNyxcbiAgODAwOiAjMDA4MzhmLFxuICA5MDA6ICMwMDYwNjQsXG4gIEExMDA6ICM4NGZmZmYsXG4gIEEyMDA6ICMxOGZmZmYsXG4gIEE0MDA6ICMwMGU1ZmYsXG4gIEE3MDA6ICMwMGI4ZDQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC10ZWFsOiAoXG4gIDUwOiAjZTBmMmYxLFxuICAxMDA6ICNiMmRmZGIsXG4gIDIwMDogIzgwY2JjNCxcbiAgMzAwOiAjNGRiNmFjLFxuICA0MDA6ICMyNmE2OWEsXG4gIDUwMDogIzAwOTY4OCxcbiAgNjAwOiAjMDA4OTdiLFxuICA3MDA6ICMwMDc5NmIsXG4gIDgwMDogIzAwNjk1YyxcbiAgOTAwOiAjMDA0ZDQwLFxuICBBMTAwOiAjYTdmZmViLFxuICBBMjAwOiAjNjRmZmRhLFxuICBBNDAwOiAjMWRlOWI2LFxuICBBNzAwOiAjMDBiZmE1LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbiRtYXQtZ3JlZW46IChcbiAgNTA6ICNlOGY1ZTksXG4gIDEwMDogI2M4ZTZjOSxcbiAgMjAwOiAjYTVkNmE3LFxuICAzMDA6ICM4MWM3ODQsXG4gIDQwMDogIzY2YmI2YSxcbiAgNTAwOiAjNGNhZjUwLFxuICA2MDA6ICM0M2EwNDcsXG4gIDcwMDogIzM4OGUzYyxcbiAgODAwOiAjMmU3ZDMyLFxuICA5MDA6ICMxYjVlMjAsXG4gIEExMDA6ICNiOWY2Y2EsXG4gIEEyMDA6ICM2OWYwYWUsXG4gIEE0MDA6ICMwMGU2NzYsXG4gIEE3MDA6ICMwMGM4NTMsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpZ2h0LWdyZWVuOiAoXG4gIDUwOiAjZjFmOGU5LFxuICAxMDA6ICNkY2VkYzgsXG4gIDIwMDogI2M1ZTFhNSxcbiAgMzAwOiAjYWVkNTgxLFxuICA0MDA6ICM5Y2NjNjUsXG4gIDUwMDogIzhiYzM0YSxcbiAgNjAwOiAjN2NiMzQyLFxuICA3MDA6ICM2ODlmMzgsXG4gIDgwMDogIzU1OGIyZixcbiAgOTAwOiAjMzM2OTFlLFxuICBBMTAwOiAjY2NmZjkwLFxuICBBMjAwOiAjYjJmZjU5LFxuICBBNDAwOiAjNzZmZjAzLFxuICBBNzAwOiAjNjRkZDE3LFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNzAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LWxpbWU6IChcbiAgNTA6ICNmOWZiZTcsXG4gIDEwMDogI2YwZjRjMyxcbiAgMjAwOiAjZTZlZTljLFxuICAzMDA6ICNkY2U3NzUsXG4gIDQwMDogI2Q0ZTE1NyxcbiAgNTAwOiAjY2RkYzM5LFxuICA2MDA6ICNjMGNhMzMsXG4gIDcwMDogI2FmYjQyYixcbiAgODAwOiAjOWU5ZDI0LFxuICA5MDA6ICM4Mjc3MTcsXG4gIEExMDA6ICNmNGZmODEsXG4gIEEyMDA6ICNlZWZmNDEsXG4gIEE0MDA6ICNjNmZmMDAsXG4gIEE3MDA6ICNhZWVhMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA5MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEEyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICApXG4pO1xuXG4kbWF0LXllbGxvdzogKFxuICA1MDogI2ZmZmRlNyxcbiAgMTAwOiAjZmZmOWM0LFxuICAyMDA6ICNmZmY1OWQsXG4gIDMwMDogI2ZmZjE3NixcbiAgNDAwOiAjZmZlZTU4LFxuICA1MDA6ICNmZmViM2IsXG4gIDYwMDogI2ZkZDgzNSxcbiAgNzAwOiAjZmJjMDJkLFxuICA4MDA6ICNmOWE4MjUsXG4gIDkwMDogI2Y1N2YxNyxcbiAgQTEwMDogI2ZmZmY4ZCxcbiAgQTIwMDogI2ZmZmYwMCxcbiAgQTQwMDogI2ZmZWEwMCxcbiAgQTcwMDogI2ZmZDYwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1hbWJlcjogKFxuICA1MDogI2ZmZjhlMSxcbiAgMTAwOiAjZmZlY2IzLFxuICAyMDA6ICNmZmUwODIsXG4gIDMwMDogI2ZmZDU0ZixcbiAgNDAwOiAjZmZjYTI4LFxuICA1MDA6ICNmZmMxMDcsXG4gIDYwMDogI2ZmYjMwMCxcbiAgNzAwOiAjZmZhMDAwLFxuICA4MDA6ICNmZjhmMDAsXG4gIDkwMDogI2ZmNmYwMCxcbiAgQTEwMDogI2ZmZTU3ZixcbiAgQTIwMDogI2ZmZDc0MCxcbiAgQTQwMDogI2ZmYzQwMCxcbiAgQTcwMDogI2ZmYWIwMCxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDUwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDgwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1vcmFuZ2U6IChcbiAgNTA6ICNmZmYzZTAsXG4gIDEwMDogI2ZmZTBiMixcbiAgMjAwOiAjZmZjYzgwLFxuICAzMDA6ICNmZmI3NGQsXG4gIDQwMDogI2ZmYTcyNixcbiAgNTAwOiAjZmY5ODAwLFxuICA2MDA6ICNmYjhjMDAsXG4gIDcwMDogI2Y1N2MwMCxcbiAgODAwOiAjZWY2YzAwLFxuICA5MDA6ICNlNjUxMDAsXG4gIEExMDA6ICNmZmQxODAsXG4gIEEyMDA6ICNmZmFiNDAsXG4gIEE0MDA6ICNmZjkxMDAsXG4gIEE3MDA6ICNmZjZkMDAsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA1MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA2MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6IGJsYWNrLFxuICApXG4pO1xuXG4kbWF0LWRlZXAtb3JhbmdlOiAoXG4gIDUwOiAjZmJlOWU3LFxuICAxMDA6ICNmZmNjYmMsXG4gIDIwMDogI2ZmYWI5MSxcbiAgMzAwOiAjZmY4YTY1LFxuICA0MDA6ICNmZjcwNDMsXG4gIDUwMDogI2ZmNTcyMixcbiAgNjAwOiAjZjQ1MTFlLFxuICA3MDA6ICNlNjRhMTksXG4gIDgwMDogI2Q4NDMxNSxcbiAgOTAwOiAjYmYzNjBjLFxuICBBMTAwOiAjZmY5ZTgwLFxuICBBMjAwOiAjZmY2ZTQwLFxuICBBNDAwOiAjZmYzZDAwLFxuICBBNzAwOiAjZGQyYzAwLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1icm93bjogKFxuICA1MDogI2VmZWJlOSxcbiAgMTAwOiAjZDdjY2M4LFxuICAyMDA6ICNiY2FhYTQsXG4gIDMwMDogI2ExODg3ZixcbiAgNDAwOiAjOGQ2ZTYzLFxuICA1MDA6ICM3OTU1NDgsXG4gIDYwMDogIzZkNGM0MSxcbiAgNzAwOiAjNWQ0MDM3LFxuICA4MDA6ICM0ZTM0MmUsXG4gIDkwMDogIzNlMjcyMyxcbiAgQTEwMDogI2Q3Y2NjOCxcbiAgQTIwMDogI2JjYWFhNCxcbiAgQTQwMDogIzhkNmU2MyxcbiAgQTcwMDogIzVkNDAzNyxcbiAgY29udHJhc3Q6IChcbiAgICA1MDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDEwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIDMwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuJG1hdC1ncmV5OiAoXG4gIDUwOiAjZmFmYWZhLFxuICAxMDA6ICNmNWY1ZjUsXG4gIDIwMDogI2VlZWVlZSxcbiAgMzAwOiAjZTBlMGUwLFxuICA0MDA6ICNiZGJkYmQsXG4gIDUwMDogIzllOWU5ZSxcbiAgNjAwOiAjNzU3NTc1LFxuICA3MDA6ICM2MTYxNjEsXG4gIDgwMDogIzQyNDI0MixcbiAgOTAwOiAjMjEyMTIxLFxuICBBMTAwOiAjZmZmZmZmLFxuICBBMjAwOiAjZWVlZWVlLFxuICBBNDAwOiAjYmRiZGJkLFxuICBBNzAwOiAjNjE2MTYxLFxuICBjb250cmFzdDogKFxuICAgIDUwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgMzAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNDAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgNjAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA4MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgOTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIEExMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICBBMjAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTQwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gIClcbik7XG5cbi8vIEFsaWFzIGZvciBhbHRlcm5hdGUgc3BlbGxpbmcuXG4kbWF0LWdyYXk6ICRtYXQtZ3JleTtcblxuJG1hdC1ibHVlLWdyZXk6IChcbiAgNTA6ICNlY2VmZjEsXG4gIDEwMDogI2NmZDhkYyxcbiAgMjAwOiAjYjBiZWM1LFxuICAzMDA6ICM5MGE0YWUsXG4gIDQwMDogIzc4OTA5YyxcbiAgNTAwOiAjNjA3ZDhiLFxuICA2MDA6ICM1NDZlN2EsXG4gIDcwMDogIzQ1NWE2NCxcbiAgODAwOiAjMzc0NzRmLFxuICA5MDA6ICMyNjMyMzgsXG4gIEExMDA6ICNjZmQ4ZGMsXG4gIEEyMDA6ICNiMGJlYzUsXG4gIEE0MDA6ICM3ODkwOWMsXG4gIEE3MDA6ICM0NTVhNjQsXG4gIGNvbnRyYXN0OiAoXG4gICAgNTA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAxMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAyMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICAzMDA6ICRkYXJrLXByaW1hcnktdGV4dCxcbiAgICA0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgNTAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDYwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICA3MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgODAwOiAkbGlnaHQtcHJpbWFyeS10ZXh0LFxuICAgIDkwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgICBBMTAwOiAkZGFyay1wcmltYXJ5LXRleHQsXG4gICAgQTIwMDogJGRhcmstcHJpbWFyeS10ZXh0LFxuICAgIEE0MDA6ICRsaWdodC1wcmltYXJ5LXRleHQsXG4gICAgQTcwMDogJGxpZ2h0LXByaW1hcnktdGV4dCxcbiAgKVxuKTtcblxuLy8gQWxpYXMgZm9yIGFsdGVybmF0ZSBzcGVsbGluZy5cbiRtYXQtYmx1ZS1ncmF5OiAkbWF0LWJsdWUtZ3JleTtcblxuXG4vLyBCYWNrZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDEwMCksXG4gIGJhY2tncm91bmQ6IG1hcF9nZXQoJG1hdC1ncmV5LCA1MCksXG4gIGhvdmVyOiAgICAgIHJnYmEoYmxhY2ssIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICB3aGl0ZSxcbiAgZGlhbG9nOiAgICAgd2hpdGUsXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYShibGFjaywgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IHdoaXRlLFxuICBmb2N1c2VkLWJ1dHRvbjogJGRhcmstZm9jdXNlZCxcbiAgc2VsZWN0ZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMzAwKSxcbiAgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgNDAwKSxcbiAgZGlzYWJsZWQtYnV0dG9uLXRvZ2dsZTogbWFwX2dldCgkbWF0LWdyZXksIDIwMCksXG4gIHVuc2VsZWN0ZWQtY2hpcDogbWFwX2dldCgkbWF0LWdyZXksIDMwMCksXG4gIGRpc2FibGVkLWxpc3Qtb3B0aW9uOiBtYXBfZ2V0KCRtYXQtZ3JleSwgMjAwKSxcbik7XG5cbi8vIEJhY2tncm91bmQgcGFsZXR0ZSBmb3IgZGFyayB0aGVtZXMuXG4kbWF0LWRhcmstdGhlbWUtYmFja2dyb3VuZDogKFxuICBzdGF0dXMtYmFyOiBibGFjayxcbiAgYXBwLWJhcjogICAgbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIGJhY2tncm91bmQ6ICMzMDMwMzAsXG4gIGhvdmVyOiAgICAgIHJnYmEod2hpdGUsIDAuMDQpLCAvLyBUT0RPKGthcmEpOiBjaGVjayBzdHlsZSB3aXRoIE1hdGVyaWFsIERlc2lnbiBVWFxuICBjYXJkOiAgICAgICBtYXBfZ2V0KCRtYXQtZ3JleSwgODAwKSxcbiAgZGlhbG9nOiAgICAgbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbjogcmdiYSh3aGl0ZSwgMC4xMiksXG4gIHJhaXNlZC1idXR0b246IG1hcC1nZXQoJG1hdC1ncmV5LCA4MDApLFxuICBmb2N1c2VkLWJ1dHRvbjogJGxpZ2h0LWZvY3VzZWQsXG4gIHNlbGVjdGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDkwMCksXG4gIHNlbGVjdGVkLWRpc2FibGVkLWJ1dHRvbjogbWFwX2dldCgkbWF0LWdyZXksIDgwMCksXG4gIGRpc2FibGVkLWJ1dHRvbi10b2dnbGU6IGJsYWNrLFxuICB1bnNlbGVjdGVkLWNoaXA6IG1hcF9nZXQoJG1hdC1ncmV5LCA3MDApLFxuICBkaXNhYmxlZC1saXN0LW9wdGlvbjogYmxhY2ssXG4pO1xuXG4vLyBGb3JlZ3JvdW5kIHBhbGV0dGUgZm9yIGxpZ2h0IHRoZW1lcy5cbiRtYXQtbGlnaHQtdGhlbWUtZm9yZWdyb3VuZDogKFxuICBiYXNlOiAgICAgICAgICAgICAgYmxhY2ssXG4gIGRpdmlkZXI6ICAgICAgICAgICAkZGFyay1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRkYXJrLWRpdmlkZXJzLFxuICBkaXNhYmxlZDogICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZGlzYWJsZWQtYnV0dG9uOiAgIHJnYmEoYmxhY2ssIDAuMjYpLFxuICBkaXNhYmxlZC10ZXh0OiAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgZWxldmF0aW9uOiAgICAgICAgIGJsYWNrLFxuICBoaW50LXRleHQ6ICAgICAgICAgJGRhcmstZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRkYXJrLXNlY29uZGFyeS10ZXh0LFxuICBpY29uOiAgICAgICAgICAgICAgcmdiYShibGFjaywgMC41NCksXG4gIGljb25zOiAgICAgICAgICAgICByZ2JhKGJsYWNrLCAwLjU0KSxcbiAgdGV4dDogICAgICAgICAgICAgIHJnYmEoYmxhY2ssIDAuODcpLFxuICBzbGlkZXItbWluOiAgICAgICAgcmdiYShibGFjaywgMC44NyksXG4gIHNsaWRlci1vZmY6ICAgICAgICByZ2JhKGJsYWNrLCAwLjI2KSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEoYmxhY2ssIDAuMzgpLFxuKTtcblxuLy8gRm9yZWdyb3VuZCBwYWxldHRlIGZvciBkYXJrIHRoZW1lcy5cbiRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kOiAoXG4gIGJhc2U6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgZGl2aWRlcjogICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGl2aWRlcnM6ICAgICAgICAgICRsaWdodC1kaXZpZGVycyxcbiAgZGlzYWJsZWQ6ICAgICAgICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBkaXNhYmxlZC1idXR0b246ICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgZGlzYWJsZWQtdGV4dDogICAgICRsaWdodC1kaXNhYmxlZC10ZXh0LFxuICBlbGV2YXRpb246ICAgICAgICAgYmxhY2ssXG4gIGhpbnQtdGV4dDogICAgICAgICAkbGlnaHQtZGlzYWJsZWQtdGV4dCxcbiAgc2Vjb25kYXJ5LXRleHQ6ICAgICRsaWdodC1zZWNvbmRhcnktdGV4dCxcbiAgaWNvbjogICAgICAgICAgICAgIHdoaXRlLFxuICBpY29uczogICAgICAgICAgICAgd2hpdGUsXG4gIHRleHQ6ICAgICAgICAgICAgICB3aGl0ZSxcbiAgc2xpZGVyLW1pbjogICAgICAgIHdoaXRlLFxuICBzbGlkZXItb2ZmOiAgICAgICAgcmdiYSh3aGl0ZSwgMC4zKSxcbiAgc2xpZGVyLW9mZi1hY3RpdmU6IHJnYmEod2hpdGUsIDAuMyksXG4pO1xuXG5cblxuLy8gRm9yIGEgZ2l2ZW4gaHVlIGluIGEgcGFsZXR0ZSwgcmV0dXJuIHRoZSBjb250cmFzdCBjb2xvciBmcm9tIHRoZSBtYXAgb2YgY29udHJhc3QgcGFsZXR0ZXMuXG4vLyBAcGFyYW0gJGNvbG9yLW1hcFxuLy8gQHBhcmFtICRodWVcbkBmdW5jdGlvbiBtYXQtY29udHJhc3QoJHBhbGV0dGUsICRodWUpIHtcbiAgQHJldHVybiBtYXAtZ2V0KG1hcC1nZXQoJHBhbGV0dGUsIGNvbnRyYXN0KSwgJGh1ZSk7XG59XG5cblxuLy8gQ3JlYXRlcyBhIG1hcCBvZiBodWVzIHRvIGNvbG9ycyBmb3IgYSB0aGVtZS4gVGhpcyBpcyB1c2VkIHRvIGRlZmluZSBhIHRoZW1lIHBhbGV0dGUgaW4gdGVybXNcbi8vIG9mIHRoZSBNYXRlcmlhbCBEZXNpZ24gaHVlcy5cbi8vIEBwYXJhbSAkY29sb3ItbWFwXG4vLyBAcGFyYW0gJHByaW1hcnlcbi8vIEBwYXJhbSAkbGlnaHRlclxuQGZ1bmN0aW9uIG1hdC1wYWxldHRlKCRiYXNlLXBhbGV0dGUsICRkZWZhdWx0OiA1MDAsICRsaWdodGVyOiAxMDAsICRkYXJrZXI6IDcwMCkge1xuICAkcmVzdWx0OiBtYXBfbWVyZ2UoJGJhc2UtcGFsZXR0ZSwgKFxuICAgIGRlZmF1bHQ6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGRlZmF1bHQpLFxuICAgIGxpZ2h0ZXI6IG1hcC1nZXQoJGJhc2UtcGFsZXR0ZSwgJGxpZ2h0ZXIpLFxuICAgIGRhcmtlcjogbWFwLWdldCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKSxcblxuICAgIGRlZmF1bHQtY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGVmYXVsdCksXG4gICAgbGlnaHRlci1jb250cmFzdDogbWF0LWNvbnRyYXN0KCRiYXNlLXBhbGV0dGUsICRsaWdodGVyKSxcbiAgICBkYXJrZXItY29udHJhc3Q6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkZGFya2VyKVxuICApKTtcblxuICAvLyBGb3IgZWFjaCBodWUgaW4gdGhlIHBhbGV0dGUsIGFkZCBhIFwiLWNvbnRyYXN0XCIgY29sb3IgdG8gdGhlIG1hcC5cbiAgQGVhY2ggJGh1ZSwgJGNvbG9yIGluICRiYXNlLXBhbGV0dGUge1xuICAgICRyZXN1bHQ6IG1hcF9tZXJnZSgkcmVzdWx0LCAoXG4gICAgICAnI3skaHVlfS1jb250cmFzdCc6IG1hdC1jb250cmFzdCgkYmFzZS1wYWxldHRlLCAkaHVlKVxuICAgICkpO1xuICB9XG5cbiAgQHJldHVybiAkcmVzdWx0O1xufVxuXG5cbi8vIEdldHMgYSBjb2xvciBmcm9tIGEgdGhlbWUgcGFsZXR0ZSAodGhlIG91dHB1dCBvZiBtYXQtcGFsZXR0ZSkuXG4vLyBUaGUgaHVlIGNhbiBiZSBvbmUgb2YgdGhlIHN0YW5kYXJkIHZhbHVlcyAoNTAwLCBBNDAwLCBldGMuKSwgb25lIG9mIHRoZSB0aHJlZSBwcmVjb25maWd1cmVkXG4vLyBodWVzIChkZWZhdWx0LCBsaWdodGVyLCBkYXJrZXIpLCBvciBhbnkgb2YgdGhlIGFmb3JlbWVudGlvbmVkIHByZWZpeGVkIHdpdGggXCItY29udHJhc3RcIi5cbi8vXG4vLyBAcGFyYW0gJGNvbG9yLW1hcCBUaGUgdGhlbWUgcGFsZXR0ZSAob3V0cHV0IG9mIG1hdC1wYWxldHRlKS5cbi8vIEBwYXJhbSAkaHVlIFRoZSBodWUgZnJvbSB0aGUgcGFsZXR0ZSB0byB1c2UuIElmIHRoaXMgaXMgYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEsIGl0IHdpbGxcbi8vICAgICBiZSB0cmVhdGVkIGFzIG9wYWNpdHkuXG4vLyBAcGFyYW0gJG9wYWNpdHkgVGhlIGFscGhhIGNoYW5uZWwgdmFsdWUgZm9yIHRoZSBjb2xvci5cbkBmdW5jdGlvbiBtYXQtY29sb3IoJHBhbGV0dGUsICRodWU6IGRlZmF1bHQsICRvcGFjaXR5OiBudWxsKSB7XG4gIC8vIElmIGh1ZUtleSBpcyBhIG51bWJlciBiZXR3ZWVuIHplcm8gYW5kIG9uZSwgdGhlbiBpdCBhY3R1YWxseSBjb250YWlucyBhblxuICAvLyBvcGFjaXR5IHZhbHVlLCBzbyByZWNhbGwgdGhpcyBmdW5jdGlvbiB3aXRoIHRoZSBkZWZhdWx0IGh1ZSBhbmQgdGhhdCBnaXZlbiBvcGFjaXR5LlxuICBAaWYgdHlwZS1vZigkaHVlKSA9PSBudW1iZXIgYW5kICRodWUgPj0gMCBhbmQgJGh1ZSA8PSAxIHtcbiAgICBAcmV0dXJuIG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdCwgJGh1ZSk7XG4gIH1cblxuICAkY29sb3I6IG1hcC1nZXQoJHBhbGV0dGUsICRodWUpO1xuXG4gIEBpZiAodHlwZS1vZigkY29sb3IpICE9IGNvbG9yKSB7XG4gICAgLy8gSWYgdGhlICRjb2xvciByZXNvbHZlZCB0byBzb21ldGhpbmcgZGlmZmVyZW50IGZyb20gYSBjb2xvciAoZS5nLiBhIENTUyB2YXJpYWJsZSksXG4gICAgLy8gd2UgY2FuJ3QgYXBwbHkgdGhlIG9wYWNpdHkgYW55d2F5IHNvIHdlIHJldHVybiB0aGUgdmFsdWUgYXMgaXMsIG90aGVyd2lzZSBTYXNzIGNhblxuICAgIC8vIHRocm93IGFuIGVycm9yIG9yIG91dHB1dCBzb21ldGhpbmcgaW52YWxpZC5cbiAgICBAcmV0dXJuICRjb2xvcjtcbiAgfVxuXG4gIEByZXR1cm4gcmdiYSgkY29sb3IsIGlmKCRvcGFjaXR5ID09IG51bGwsIG9wYWNpdHkoJGNvbG9yKSwgJG9wYWNpdHkpKTtcbn1cblxuXG4vLyBDcmVhdGVzIGEgY29udGFpbmVyIG9iamVjdCBmb3IgYSBsaWdodCB0aGVtZSB0byBiZSBnaXZlbiB0byBpbmRpdmlkdWFsIGNvbXBvbmVudCB0aGVtZSBtaXhpbnMuXG5AZnVuY3Rpb24gbWF0LWxpZ2h0LXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiBmYWxzZSxcbiAgICBmb3JlZ3JvdW5kOiAkbWF0LWxpZ2h0LXRoZW1lLWZvcmVncm91bmQsXG4gICAgYmFja2dyb3VuZDogJG1hdC1saWdodC10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cbi8vIENyZWF0ZXMgYSBjb250YWluZXIgb2JqZWN0IGZvciBhIGRhcmsgdGhlbWUgdG8gYmUgZ2l2ZW4gdG8gaW5kaXZpZHVhbCBjb21wb25lbnQgdGhlbWUgbWl4aW5zLlxuQGZ1bmN0aW9uIG1hdC1kYXJrLXRoZW1lKCRwcmltYXJ5LCAkYWNjZW50LCAkd2FybjogbWF0LXBhbGV0dGUoJG1hdC1yZWQpKSB7XG4gIEByZXR1cm4gKFxuICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgIGFjY2VudDogJGFjY2VudCxcbiAgICB3YXJuOiAkd2FybixcbiAgICBpcy1kYXJrOiB0cnVlLFxuICAgIGZvcmVncm91bmQ6ICRtYXQtZGFyay10aGVtZS1mb3JlZ3JvdW5kLFxuICAgIGJhY2tncm91bmQ6ICRtYXQtZGFyay10aGVtZS1iYWNrZ3JvdW5kLFxuICApO1xufVxuXG5cblxuJG1hdC1yaXBwbGUtY29sb3Itb3BhY2l0eTogMC4xO1xuXG5AbWl4aW4gbWF0LXJpcHBsZSgpIHtcblxuICAvLyBUaGUgaG9zdCBlbGVtZW50IG9mIGFuIG1hdC1yaXBwbGUgZGlyZWN0aXZlIHNob3VsZCBhbHdheXMgaGF2ZSBhIHBvc2l0aW9uIG9mIFwiYWJzb2x1dGVcIiBvclxuICAvLyBcInJlbGF0aXZlXCIgc28gdGhhdCB0aGUgcmlwcGxlcyBpbnNpZGUgYXJlIGNvcnJlY3RseSBwb3NpdGlvbmVkIHJlbGF0aXZlbHkgdG8gdGhlIGNvbnRhaW5lci5cbiAgLm1hdC1yaXBwbGUge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAvLyBCeSBkZWZhdWx0LCBldmVyeSByaXBwbGUgY29udGFpbmVyIHNob3VsZCBoYXZlIHBvc2l0aW9uOiByZWxhdGl2ZSBpbiBmYXZvciBvZiBjcmVhdGluZyBhblxuICAgIC8vIGVhc3kgQVBJIGZvciBkZXZlbG9wZXJzIHVzaW5nIHRoZSBNYXRSaXBwbGUgZGlyZWN0aXZlLlxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLm1hdC1yaXBwbGUtdW5ib3VuZGVkIHtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG5cbiAgICAvLyBJbiBoaWdoIGNvbnRyYXN0IG1vZGUgdGhlIHJpcHBsZSBpcyBvcGFxdWUsIGNhdXNpbmcgaXQgdG8gb2JzdHJ1Y3QgdGhlIGNvbnRlbnQuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuLyogVGhlbWUgZm9yIHRoZSByaXBwbGUgZWxlbWVudHMuKi9cbkBtaXhpbiBtYXQtcmlwcGxlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwX2dldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkZm9yZWdyb3VuZC1iYXNlOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAvLyBJZiB0aGUgcmlwcGxlIGNvbG9yIGlzIHJlc29sdmVzIHRvIGEgY29sb3IgKnR5cGUqLCB3ZSBjYW4gdXNlIGl0IGRpcmVjdGx5LCBvdGhlcndpc2VcbiAgICAvLyAoZS5nLiBpdCByZXNvbHZlcyB0byBhIENTUyB2YXJpYWJsZSkgd2UgZmFsbCBiYWNrIHRvIHVzaW5nIHRoZSBjb2xvciBhbmQgc2V0dGluZyBhbiBvcGFjaXR5LlxuICAgIEBpZiAodHlwZS1vZigkZm9yZWdyb3VuZC1iYXNlKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZm9yZWdyb3VuZC1iYXNlLCAkbWF0LXJpcHBsZS1jb2xvci1vcGFjaXR5KTtcbiAgICB9XG4gICAgQGVsc2Uge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZvcmVncm91bmQtYmFzZTtcbiAgICAgIG9wYWNpdHk6ICRtYXQtcmlwcGxlLWNvbG9yLW9wYWNpdHk7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBVdGlsaXR5IGZvciBmZXRjaGluZyBhIG5lc3RlZCB2YWx1ZSBmcm9tIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsICRuYW1lKSB7XG4gIEByZXR1cm4gbWFwLWdldChtYXAtZ2V0KCRjb25maWcsICRsZXZlbCksICRuYW1lKTtcbn1cblxuLy8gR2V0cyB0aGUgZm9udCBzaXplIGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1mb250LXNpemUoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtc2l6ZSk7XG59XG5cbi8vIEdldHMgdGhlIGxpbmUgaGVpZ2h0IGZvciBhIGxldmVsIGluc2lkZSBhIHR5cG9ncmFwaHkgY29uZmlnLlxuQGZ1bmN0aW9uIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpIHtcbiAgQHJldHVybiBfbWF0LWdldC10eXBlLXZhbHVlKCRjb25maWcsICRsZXZlbCwgbGluZS1oZWlnaHQpO1xufVxuXG4vLyBHZXRzIHRoZSBmb250IHdlaWdodCBmb3IgYSBsZXZlbCBpbnNpZGUgYSB0eXBvZ3JhcGh5IGNvbmZpZy5cbkBmdW5jdGlvbiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgJGxldmVsKSB7XG4gIEByZXR1cm4gX21hdC1nZXQtdHlwZS12YWx1ZSgkY29uZmlnLCAkbGV2ZWwsIGZvbnQtd2VpZ2h0KTtcbn1cblxuLy8gR2V0cyB0aGUgbGV0dGVyIHNwYWNpbmcgZm9yIGEgbGV2ZWwgaW5zaWRlIGEgdHlwb2dyYXBoeSBjb25maWcuXG5AZnVuY3Rpb24gbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCkge1xuICBAcmV0dXJuIF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBsZXR0ZXItc3BhY2luZyk7XG59XG5cbi8vIEdldHMgdGhlIGZvbnQtZmFtaWx5IGZyb20gYSB0eXBvZ3JhcGh5IGNvbmZpZyBhbmQgcmVtb3ZlcyB0aGUgcXVvdGVzIGFyb3VuZCBpdC5cbkBmdW5jdGlvbiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgJGxldmVsOiBudWxsKSB7XG4gICRmb250LWZhbWlseTogbWFwLWdldCgkY29uZmlnLCBmb250LWZhbWlseSk7XG5cbiAgQGlmICRsZXZlbCAhPSBudWxsIHtcbiAgICAkZm9udC1mYW1pbHk6IF9tYXQtZ2V0LXR5cGUtdmFsdWUoJGNvbmZpZywgJGxldmVsLCBmb250LWZhbWlseSk7XG4gIH1cblxuICAvLyBHdWFyZCBhZ2FpbnN0IHVucXVvdGluZyBub24tc3RyaW5nIHZhbHVlcywgYmVjYXVzZSBpdCdzIGRlcHJlY2F0ZWQuXG4gIEByZXR1cm4gaWYodHlwZS1vZigkZm9udC1mYW1pbHkpID09IHN0cmluZywgdW5xdW90ZSgkZm9udC1mYW1pbHkpLCAkZm9udC1mYW1pbHkpO1xufVxuXG4vLyBPdXRwdXRzIHRoZSBzaG9ydGhhbmQgYGZvbnRgIENTUyBwcm9wZXJ0eSwgYmFzZWQgb24gYSBzZXQgb2YgdHlwb2dyYXBoeSB2YWx1ZXMuIEZhbGxzIGJhY2sgdG9cbi8vIHRoZSBpbmRpdmlkdWFsIHByb3BlcnRpZXMgaWYgYSB2YWx1ZSB0aGF0IGlzbid0IGFsbG93ZWQgaW4gdGhlIHNob3J0aGFuZCBpcyBwYXNzZWQgaW4uXG5AbWl4aW4gbWF0LXR5cG9ncmFwaHktZm9udC1zaG9ydGhhbmQoJGZvbnQtc2l6ZSwgJGZvbnQtd2VpZ2h0LCAkbGluZS1oZWlnaHQsICRmb250LWZhbWlseSkge1xuICAvLyBJZiBhbnkgb2YgdGhlIHZhbHVlcyBhcmUgc2V0IHRvIGBpbmhlcml0YCwgd2UgY2FuJ3QgdXNlIHRoZSBzaG9ydGhhbmRcbiAgLy8gc28gd2UgZmFsbCBiYWNrIHRvIHBhc3NpbmcgaW4gdGhlIGluZGl2aWR1YWwgcHJvcGVydGllcy5cbiAgQGlmICgkZm9udC1zaXplID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gaW5oZXJpdCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBpbmhlcml0IG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IGluaGVyaXQgb3JcbiAgICAgICAkZm9udC1zaXplID09IG51bGwgb3JcbiAgICAgICAkZm9udC13ZWlnaHQgPT0gbnVsbCBvclxuICAgICAgICRsaW5lLWhlaWdodCA9PSBudWxsIG9yXG4gICAgICAgJGZvbnQtZmFtaWx5ID09IG51bGwpIHtcblxuICAgIGZvbnQtc2l6ZTogJGZvbnQtc2l6ZTtcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0O1xuICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgZm9udC1mYW1pbHk6ICRmb250LWZhbWlseTtcbiAgfVxuICBAZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlIHVzZSB0aGUgc2hvcnRoYW5kIGBmb250YCwgYmVjYXVzZSBpdCdzIHRoZSBsZWFzdCBhbW91bnQgb2YgYnl0ZXMuIE5vdGVcbiAgICAvLyB0aGF0IHdlIG5lZWQgdG8gdXNlIGludGVycG9sYXRpb24gZm9yIGBmb250LXNpemUvbGluZS1oZWlnaHRgIGluIG9yZGVyIHRvIHByZXZlbnRcbiAgICAvLyBTYXNzIGZyb20gZGl2aWRpbmcgdGhlIHR3byB2YWx1ZXMuXG4gICAgZm9udDogJGZvbnQtd2VpZ2h0ICN7JGZvbnQtc2l6ZX0vI3skbGluZS1oZWlnaHR9ICRmb250LWZhbWlseTtcbiAgfVxufVxuXG4vLyBDb252ZXJ0cyBhIHR5cG9ncmFwaHkgbGV2ZWwgaW50byBDU1Mgc3R5bGVzLlxuQG1peGluIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCAkbGV2ZWwpIHtcbiAgJGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCAkbGV2ZWwpO1xuICAkZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCAkbGV2ZWwpO1xuXG4gIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKCRmb250LXNpemUsICRmb250LXdlaWdodCwgJGxpbmUtaGVpZ2h0LCAkZm9udC1mYW1pbHkpO1xuICBsZXR0ZXItc3BhY2luZzogbWF0LWxldHRlci1zcGFjaW5nKCRjb25maWcsICRsZXZlbCk7XG59XG5cblxuQG1peGluIG1hdC1vcHRpb24tdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuXG4gIC5tYXQtb3B0aW9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICY6aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSxcbiAgICAmOmZvY3VzOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuXG4gICAgLy8gSW4gbXVsdGlwbGUgbW9kZSB0aGVyZSBpcyBhIGNoZWNrYm94IHRvIHNob3cgdGhhdCB0aGUgb3B0aW9uIGlzIHNlbGVjdGVkLlxuICAgICYubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSk6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAmLm1hdC1vcHRpb24tZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgaGludC10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtb3B0aW9uLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LW9wdGlvbiB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIHN1YmhlYWRpbmctMik7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuQG1peGluIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LW9wdGdyb3VwLWRpc2FibGVkIC5tYXQtb3B0Z3JvdXAtbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1vcHRncm91cC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMik7XG4gIH1cbn1cblxuXG5cbkBtaXhpbiBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG4gICRjb2xvcmVkLWJveC1zZWxlY3RvcjogJy5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUnO1xuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKSwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYmFja2dyb3VuZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gRGVmYXVsdCB0byB0aGUgYWNjZW50IGNvbG9yLiBOb3RlIHRoYXQgdGhlIHBzZXVkbyBjaGVja2JveGVzIGFyZSBtZWFudCB0byBpbmhlcml0IHRoZVxuICAvLyB0aGVtZSBmcm9tIHRoZWlyIHBhcmVudCwgcmF0aGVyIHRoYW4gaW1wbGVtZW50aW5nIHRoZWlyIG93biB0aGVtaW5nLCB3aGljaCBpcyB3aHkgd2VcbiAgLy8gZG9uJ3QgYXR0YWNoIHRvIHRoZSBgbWF0LSpgIGNsYXNzZXMuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KSk7XG4gIH1cblxuICAubWF0LXByaW1hcnkgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbiAgLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuICB9XG5cbiAgLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIHdhcm4pKTtcbiAgfVxuXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICAgICYubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgfVxuICB9XG59XG5cblxuXG4vLyBSZXByZXNlbnRzIGEgdHlwb2dyYXBoeSBsZXZlbCBmcm9tIHRoZSBNYXRlcmlhbCBkZXNpZ24gc3BlYy5cbkBmdW5jdGlvbiBtYXQtdHlwb2dyYXBoeS1sZXZlbChcbiAgJGZvbnQtc2l6ZSxcbiAgJGxpbmUtaGVpZ2h0OiAkZm9udC1zaXplLFxuICAkZm9udC13ZWlnaHQ6IDQwMCxcbiAgJGZvbnQtZmFtaWx5OiBudWxsLFxuICAkbGV0dGVyLXNwYWNpbmc6IG51bGwpIHtcblxuICBAcmV0dXJuIChcbiAgICBmb250LXNpemU6ICRmb250LXNpemUsXG4gICAgbGluZS1oZWlnaHQ6ICRsaW5lLWhlaWdodCxcbiAgICBmb250LXdlaWdodDogJGZvbnQtd2VpZ2h0LFxuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHksXG4gICAgbGV0dGVyLXNwYWNpbmc6ICRsZXR0ZXItc3BhY2luZ1xuICApO1xufVxuXG4vLyBSZXByZXNlbnRzIGEgY29sbGVjdGlvbiBvZiB0eXBvZ3JhcGh5IGxldmVscy5cbi8vIERlZmF1bHRzIGNvbWUgZnJvbSBodHRwczovL21hdGVyaWFsLmlvL2d1aWRlbGluZXMvc3R5bGUvdHlwb2dyYXBoeS5odG1sXG5AZnVuY3Rpb24gbWF0LXR5cG9ncmFwaHktY29uZmlnKFxuICAkZm9udC1mYW1pbHk6ICAgJ1JvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcbiAgJGRpc3BsYXktNDogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDExMnB4LCAxMTJweCwgMzAwKSxcbiAgJGRpc3BsYXktMzogICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDU2cHgsIDU2cHgsIDQwMCksXG4gICRkaXNwbGF5LTI6ICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCg0NXB4LCA0OHB4LCA0MDApLFxuICAkZGlzcGxheS0xOiAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMzRweCwgNDBweCwgNDAwKSxcbiAgJGhlYWRsaW5lOiAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDI0cHgsIDMycHgsIDQwMCksXG4gICR0aXRsZTogICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgyMHB4LCAzMnB4LCA1MDApLFxuICAkc3ViaGVhZGluZy0yOiAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTZweCwgMjhweCwgNDAwKSxcbiAgJHN1YmhlYWRpbmctMTogIG1hdC10eXBvZ3JhcGh5LWxldmVsKDE1cHgsIDI0cHgsIDQwMCksXG4gICRib2R5LTI6ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAyNHB4LCA1MDApLFxuICAkYm9keS0xOiAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoMTRweCwgMjBweCwgNDAwKSxcbiAgJGNhcHRpb246ICAgICAgIG1hdC10eXBvZ3JhcGh5LWxldmVsKDEycHgsIDIwcHgsIDQwMCksXG4gICRidXR0b246ICAgICAgICBtYXQtdHlwb2dyYXBoeS1sZXZlbCgxNHB4LCAxNHB4LCA1MDApLFxuICAvLyBMaW5lLWhlaWdodCBtdXN0IGJlIHVuaXQtbGVzcyBmcmFjdGlvbiBvZiB0aGUgZm9udC1zaXplLlxuICAkaW5wdXQ6ICAgICAgICAgbWF0LXR5cG9ncmFwaHktbGV2ZWwoaW5oZXJpdCwgMS4xMjUsIDQwMClcbikge1xuXG4gIC8vIERlY2xhcmUgYW4gaW5pdGlhbCBtYXAgd2l0aCBhbGwgb2YgdGhlIGxldmVscy5cbiAgJGNvbmZpZzogKFxuICAgIGRpc3BsYXktNDogICAgICAkZGlzcGxheS00LFxuICAgIGRpc3BsYXktMzogICAgICAkZGlzcGxheS0zLFxuICAgIGRpc3BsYXktMjogICAgICAkZGlzcGxheS0yLFxuICAgIGRpc3BsYXktMTogICAgICAkZGlzcGxheS0xLFxuICAgIGhlYWRsaW5lOiAgICAgICAkaGVhZGxpbmUsXG4gICAgdGl0bGU6ICAgICAgICAgICR0aXRsZSxcbiAgICBzdWJoZWFkaW5nLTI6ICAgJHN1YmhlYWRpbmctMixcbiAgICBzdWJoZWFkaW5nLTE6ICAgJHN1YmhlYWRpbmctMSxcbiAgICBib2R5LTI6ICAgICAgICAgJGJvZHktMixcbiAgICBib2R5LTE6ICAgICAgICAgJGJvZHktMSxcbiAgICBjYXB0aW9uOiAgICAgICAgJGNhcHRpb24sXG4gICAgYnV0dG9uOiAgICAgICAgICRidXR0b24sXG4gICAgaW5wdXQ6ICAgICAgICAgICRpbnB1dCxcbiAgKTtcblxuICAvLyBMb29wIHRocm91Z2ggdGhlIGxldmVscyBhbmQgc2V0IHRoZSBgZm9udC1mYW1pbHlgIG9mIHRoZSBvbmVzIHRoYXQgZG9uJ3QgaGF2ZSBvbmUgdG8gdGhlIGJhc2UuXG4gIC8vIE5vdGUgdGhhdCBTYXNzIGNhbid0IG1vZGlmeSBtYXBzIGluIHBsYWNlLCB3aGljaCBtZWFucyB0aGF0IHdlIG5lZWQgdG8gbWVyZ2UgYW5kIHJlLWFzc2lnbi5cbiAgQGVhY2ggJGtleSwgJGxldmVsIGluICRjb25maWcge1xuICAgIEBpZiBtYXAtZ2V0KCRsZXZlbCwgZm9udC1mYW1pbHkpID09IG51bGwge1xuICAgICAgJG5ldy1sZXZlbDogbWFwLW1lcmdlKCRsZXZlbCwgKGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHkpKTtcbiAgICAgICRjb25maWc6IG1hcC1tZXJnZSgkY29uZmlnLCAoJGtleTogJG5ldy1sZXZlbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgYmFzZSBmb250IGZhbWlseSB0byB0aGUgY29uZmlnLlxuICBAcmV0dXJuIG1hcC1tZXJnZSgkY29uZmlnLCAoZm9udC1mYW1pbHk6ICRmb250LWZhbWlseSkpO1xufVxuXG4vLyBBZGRzIHRoZSBiYXNlIHR5cG9ncmFwaHkgc3R5bGVzLCBiYXNlZCBvbiBhIGNvbmZpZy5cbkBtaXhpbiBtYXQtYmFzZS10eXBvZ3JhcGh5KCRjb25maWcsICRzZWxlY3RvcjogJy5tYXQtdHlwb2dyYXBoeScpIHtcbiAgLm1hdC1oMSwgLm1hdC1oZWFkbGluZSwgI3skc2VsZWN0b3J9IGgxIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgaGVhZGxpbmUpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWgyLCAubWF0LXRpdGxlLCAjeyRzZWxlY3Rvcn0gaDIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCB0aXRsZSk7XG4gICAgbWFyZ2luOiAwIDAgMTZweDtcbiAgfVxuXG4gIC5tYXQtaDMsIC5tYXQtc3ViaGVhZGluZy0yLCAjeyRzZWxlY3Rvcn0gaDMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgIG1hcmdpbjogMCAwIDE2cHg7XG4gIH1cblxuICAubWF0LWg0LCAubWF0LXN1YmhlYWRpbmctMSwgI3skc2VsZWN0b3J9IGg0IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xuICB9XG5cbiAgLy8gTm90ZTogdGhlIHNwZWMgZG9lc24ndCBoYXZlIGFueXRoaW5nIHRoYXQgd291bGQgY29ycmVzcG9uZCB0byBoNSBhbmQgaDYsIGJ1dCB3ZSBhZGQgdGhlc2UgZm9yXG4gIC8vIGNvbnNpc3RlbmN5LiBUaGUgZm9udCBzaXplcyBjb21lIGZyb20gdGhlIENocm9tZSB1c2VyIGFnZW50IHN0eWxlcyB3aGljaCBoYXZlIGg1IGF0IDAuODNlbVxuICAvLyBhbmQgaDYgYXQgMC42N2VtLlxuICAubWF0LWg1LCAjeyRzZWxlY3Rvcn0gaDUge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWZvbnQtc2hvcnRoYW5kKFxuICAgICAgbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpICogMC44MyxcbiAgICAgIG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGJvZHktMSksXG4gICAgICBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0xKVxuICAgICk7XG5cbiAgICBtYXJnaW46IDAgMCAxMnB4O1xuICB9XG5cbiAgLm1hdC1oNiwgI3skc2VsZWN0b3J9IGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1mb250LXNob3J0aGFuZChcbiAgICAgIG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKSAqIDAuNjcsXG4gICAgICBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKSxcbiAgICAgIG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBib2R5LTEpLFxuICAgICAgbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSlcbiAgICApO1xuXG4gICAgbWFyZ2luOiAwIDAgMTJweDtcbiAgfVxuXG4gIC5tYXQtYm9keS1zdHJvbmcsIC5tYXQtYm9keS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtYm9keSwgLm1hdC1ib2R5LTEsICN7JHNlbGVjdG9yfSB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHg7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbWFsbCwgLm1hdC1jYXB0aW9uIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgY2FwdGlvbik7XG4gIH1cblxuICAvLyBOb3RlOiBUaGUgc3BlYyBkb2Vzbid0IG1lbnRpb24gbGV0dGVyIHNwYWNpbmcuIFRoZSB2YWx1ZSBjb21lcyBmcm9tXG4gIC8vIGV5ZWJhbGxpbmcgaXQgdW50aWwgaXQgbG9va2VkIGV4YWN0bHkgbGlrZSB0aGUgc3BlYyBleGFtcGxlcy5cbiAgLm1hdC1kaXNwbGF5LTQsICN7JHNlbGVjdG9yfSAubWF0LWRpc3BsYXktNCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGRpc3BsYXktNCk7XG4gICAgbWFyZ2luOiAwIDAgNTZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0zLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTMge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTMpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIH1cblxuICAubWF0LWRpc3BsYXktMiwgI3skc2VsZWN0b3J9IC5tYXQtZGlzcGxheS0yIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgZGlzcGxheS0yKTtcbiAgICBtYXJnaW46IDAgMCA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMDVlbTtcbiAgfVxuXG4gIC5tYXQtZGlzcGxheS0xLCAjeyRzZWxlY3Rvcn0gLm1hdC1kaXNwbGF5LTEge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBkaXNwbGF5LTEpO1xuICAgIG1hcmdpbjogMCAwIDY0cHg7XG4gIH1cbn1cblxuXG5cblxuQG1peGluIG1hdC1hdXRvY29tcGxldGUtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgIC8vIFNlbGVjdGVkIG9wdGlvbnMgaW4gYXV0b2NvbXBsZXRlcyBzaG91bGQgbm90IGJlIGdyYXksIGJ1dCB3ZVxuICAgIC8vIG9ubHkgd2FudCB0byBvdmVycmlkZSB0aGUgYmFja2dyb3VuZCBmb3Igc2VsZWN0ZWQgb3B0aW9ucyBpZlxuICAgIC8vIHRoZXkgYXJlICpub3QqIGluIGhvdmVyIG9yIGZvY3VzIHN0YXRlLiBUaGlzIGNoYW5nZSBoYXMgdG8gYmVcbiAgICAvLyBtYWRlIGhlcmUgYmVjYXVzZSBiYXNlIG9wdGlvbiBzdHlsZXMgYXJlIHNoYXJlZCBiZXR3ZWVuIHRoZVxuICAgIC8vIGF1dG9jb21wbGV0ZSBhbmQgdGhlIHNlbGVjdC5cbiAgICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtYWN0aXZlKTpub3QoOmhvdmVyKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuXG4gICAgICAmOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuXG5AbWl4aW4gbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG4vLyBUaGlzIGNvbnRhaW5zIGFsbCBvZiB0aGUgc3R5bGVzIGZvciB0aGUgYmFkZ2Vcbi8vIHJhdGhlciB0aGFuIGp1c3QgdGhlIGNvbG9yL3RoZW1lIGJlY2F1c2Ugb2Zcbi8vIG5vIHN0eWxlIHNoZWV0IHN1cHBvcnQgZm9yIGRpcmVjdGl2ZXMuXG5cblxuXG5cblxuJG1hdC1iYWRnZS1mb250LXNpemU6IDEycHg7XG4kbWF0LWJhZGdlLWZvbnQtd2VpZ2h0OiA2MDA7XG4kbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZTogMjJweCAhZGVmYXVsdDtcbiRtYXQtYmFkZ2Utc21hbGwtc2l6ZTogJG1hdC1iYWRnZS1kZWZhdWx0LXNpemUgLSA2O1xuJG1hdC1iYWRnZS1sYXJnZS1zaXplOiAkbWF0LWJhZGdlLWRlZmF1bHQtc2l6ZSArIDY7XG5cbi8vIE1peGluIGZvciBidWlsZGluZyBvZmZzZXQgZ2l2ZW4gZGlmZmVyZW50IHNpemVzXG5AbWl4aW4gX21hdC1iYWRnZS1zaXplKCRzaXplKSB7XG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgd2lkdGg6ICRzaXplO1xuICAgIGhlaWdodDogJHNpemU7XG4gICAgbGluZS1oZWlnaHQ6ICRzaXplO1xuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYWJvdmUge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICB0b3A6IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVsb3cge1xuICAgIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgICBib3R0b206IC0kc2l6ZSAvIDI7XG4gICAgfVxuICB9XG5cbiAgJi5tYXQtYmFkZ2UtYmVmb3JlIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgICByaWdodDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLWFmdGVyIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgcmlnaHQ6IC0kc2l6ZTtcbiAgICB9XG4gIH1cblxuICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLSRzaXplO1xuICAgIH1cbiAgfVxuXG4gICYubWF0LWJhZGdlLW92ZXJsYXAge1xuICAgICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiAtJHNpemUgLyAyO1xuICAgICAgfVxuICAgIH1cblxuICAgIFtkaXI9J3J0bCddICYubWF0LWJhZGdlLWJlZm9yZSB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBbZGlyPSdydGwnXSAmLm1hdC1iYWRnZS1hZnRlciB7XG4gICAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgICByaWdodDogYXV0bztcbiAgICAgICAgbGVmdDogLSRzaXplIC8gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1iYWRnZS10aGVtZSgkdGhlbWUpIHtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3V0bGluZTogc29saWQgMXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWFjY2VudCB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1iYWRnZS13YXJuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkd2FybiwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtaGlkZGVuIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJhZGdlLWRpc2FibGVkIHtcbiAgICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgICAgJGFwcC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdiYWNrZ3JvdW5kJyk7XG4gICAgICAkYmFkZ2UtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcblxuICAgICAgLy8gVGhlIGRpc2FibGVkIGNvbG9yIHVzdWFsbHkgaGFzIHNvbWUga2luZCBvZiBvcGFjaXR5LCBidXQgYmVjYXVzZSB0aGUgYmFkZ2UgaXMgb3ZlcmxheWVkXG4gICAgICAvLyBvbiB0b3Agb2Ygc29tZXRoaW5nIGVsc2UsIGl0IHdvbid0IGxvb2sgZ29vZCBpZiBpdCdzIG9wYXF1ZS4gSWYgaXQgaXMgYSBjb2xvciAqdHlwZSosXG4gICAgICAvLyB3ZSBjb252ZXJ0IGl0IGludG8gYSBzb2xpZCBjb2xvciBieSB0YWtpbmcgdGhlIG9wYWNpdHkgZnJvbSB0aGUgcmdiYSB2YWx1ZSBhbmQgdXNpbmdcbiAgICAgIC8vIHRoZSB2YWx1ZSB0byBkZXRlcm1pbmUgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIGJhY2tncm91bmQgdG8gcHV0IGludG8gZm9yZWdyb3VuZCB3aGVuXG4gICAgICAvLyBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci5cbiAgICAgIEBpZiAodHlwZS1vZigkYmFkZ2UtY29sb3IpID09IGNvbG9yIGFuZCB0eXBlLW9mKCRhcHAtYmFja2dyb3VuZCkgPT0gY29sb3IpIHtcbiAgICAgICAgJGJhZGdlLW9wYWNpdHk6IG9wYWNpdHkoJGJhZGdlLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbWl4KCRhcHAtYmFja2dyb3VuZCwgcmdiYSgkYmFkZ2UtY29sb3IsIDEpLCAoMSAtICRiYWRnZS1vcGFjaXR5KSAqIDEwMCUpO1xuICAgICAgfVxuICAgICAgQGVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiAkYmFkZ2UtY29sb3I7XG4gICAgICB9XG5cbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLy8gVGhlIGFjdGl2ZSBjbGFzcyBpcyBhZGRlZCBhZnRlciB0aGUgZWxlbWVudCBpcyBhZGRlZFxuICAvLyBzbyBpdCBjYW4gYW5pbWF0ZSBzY2FsZSB0byBkZWZhdWx0XG4gIC5tYXQtYmFkZ2UtY29udGVudC5tYXQtYmFkZ2UtYWN0aXZlIHtcbiAgICAvLyBTY2FsZSB0byBgbm9uZWAgaW5zdGVhZCBvZiBgMWAgdG8gYXZvaWQgYmx1cnJ5IHRleHQgaW4gc29tZSBicm93c2Vycy5cbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAubWF0LWJhZGdlLXNtYWxsIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1zbWFsbC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLW1lZGl1bSB7XG4gICAgQGluY2x1ZGUgX21hdC1iYWRnZS1zaXplKCRtYXQtYmFkZ2UtZGVmYXVsdC1zaXplKTtcbiAgfVxuICAubWF0LWJhZGdlLWxhcmdlIHtcbiAgICBAaW5jbHVkZSBfbWF0LWJhZGdlLXNpemUoJG1hdC1iYWRnZS1sYXJnZS1zaXplKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJhZGdlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJhZGdlLWNvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiAkbWF0LWJhZGdlLWZvbnQtd2VpZ2h0O1xuICAgIGZvbnQtc2l6ZTogJG1hdC1iYWRnZS1mb250LXNpemU7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtYmFkZ2Utc21hbGwgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplIC8gMjtcbiAgfVxuXG4gIC5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICBmb250LXNpemU6ICRtYXQtYmFkZ2UtZm9udC1zaXplICogMjtcbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtYm90dG9tLXNoZWV0LWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oMTYsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBib2R5LTEpO1xuICB9XG59XG5cblxuXG5cblxuJF9tYXQtYnV0dG9uLXJpcHBsZS1vcGFjaXR5OiAwLjE7XG5cbi8vIEFwcGxpZXMgYSBmb2N1cyBzdHlsZSB0byBhbiBtYXQtYnV0dG9uIGVsZW1lbnQgZm9yIGVhY2ggb2YgdGhlIHN1cHBvcnRlZCBwYWxldHRlcy5cbkBtaXhpbiBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAmLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gIH1cblxuICAmLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgJltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cbn1cblxuQG1peGluIF9tYXQtYnV0dG9uLXJpcHBsZS1jb2xvcigkdGhlbWUsICRodWUsICRvcGFjaXR5OiAkX21hdC1idXR0b24tcmlwcGxlLW9wYWNpdHkpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgJi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksICRodWUsICRvcGFjaXR5KTtcbiAgfVxuXG4gICYubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSwgJG9wYWNpdHkpO1xuICB9XG5cbiAgJi5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4sICRodWUsICRvcGFjaXR5KTtcbiAgfVxufVxuXG4vLyBBcHBsaWVzIGEgcHJvcGVydHkgdG8gYW4gbWF0LWJ1dHRvbiBlbGVtZW50IGZvciBlYWNoIG9mIHRoZSBzdXBwb3J0ZWQgcGFsZXR0ZXMuXG5AbWl4aW4gX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAkcHJvcGVydHksICRodWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJi5tYXQtcHJpbWFyeSB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHByaW1hcnksICRodWUpO1xuICB9XG4gICYubWF0LWFjY2VudCB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJGFjY2VudCwgJGh1ZSk7XG4gIH1cbiAgJi5tYXQtd2FybiB7XG4gICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHdhcm4sICRodWUpO1xuICB9XG5cbiAgJi5tYXQtcHJpbWFyeSwgJi5tYXQtYWNjZW50LCAmLm1hdC13YXJuLCAmW2Rpc2FibGVkXSB7XG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJHBhbGV0dGU6IGlmKCRwcm9wZXJ0eSA9PSAnY29sb3InLCAkZm9yZWdyb3VuZCwgJGJhY2tncm91bmQpO1xuICAgICAgI3skcHJvcGVydHl9OiBtYXQtY29sb3IoJHBhbGV0dGUsIGRpc2FibGVkLWJ1dHRvbik7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gICAgLy8gQnV0dG9ucyB3aXRob3V0IGEgYmFja2dyb3VuZCBjb2xvciBzaG91bGQgaW5oZXJpdCB0aGUgZm9udCBjb2xvci4gVGhpcyBpcyBuZWNlc3NhcnkgdG9cbiAgICAvLyBlbnN1cmUgdGhhdCB0aGUgYnV0dG9uIGlzIHJlYWRhYmxlIG9uIGN1c3RvbSBiYWNrZ3JvdW5kIGNvbG9ycy4gSXQncyB3cm9uZyB0byBhbHdheXMgYXNzdW1lXG4gICAgLy8gdGhhdCB0aG9zZSBidXR0b25zIGFyZSBhbHdheXMgcGxhY2VkIGluc2lkZSBvZiBjb250YWluZXJzIHdpdGggdGhlIGRlZmF1bHQgYmFja2dyb3VuZFxuICAgIC8vIGNvbG9yIG9mIHRoZSB0aGVtZSAoZS5nLiB0aGVtZWQgdG9vbGJhcnMpLlxuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LWNvbG9yKCR0aGVtZSk7XG5cbiAgICAvLyBTZXR1cCB0aGUgcmlwcGxlIGNvbG9yIHRvIGJlIGJhc2VkIG9uIHRoZSB0ZXh0IGNvbG9yLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgcmlwcGxlc1xuICAgIC8vIGFyZSBtYXRjaGluZyB3aXRoIHRoZSBjdXJyZW50IHRoZW1lIHBhbGV0dGUgYW5kIGFyZSBpbiBjb250cmFzdCB0byB0aGUgYmFja2dyb3VuZCBjb2xvclxuICAgIC8vIChlLmcgaW4gdGhlbWVkIHRvb2xiYXJzKS5cbiAgICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIG9wYWNpdHk6ICRfbWF0LWJ1dHRvbi1yaXBwbGUtb3BhY2l0eTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgfVxuXG4gIC8vIE5vdGU6IHRoaXMgbmVlZHMgYSBiaXQgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2Ugd2UncmUgbm90IGd1YXJhbnRlZWQgdGhlIGluY2x1c2lvblxuICAvLyBvcmRlciBvZiB0aGUgdGhlbWUgc3R5bGVzIGFuZCB0aGUgYnV0dG9uIHJlc2V0IG1heSBlbmQgdXAgcmVzZXR0aW5nIHRoaXMgYXMgd2VsbC5cbiAgLm1hdC1zdHJva2VkLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxuXG4gIC5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIC8vIERlZmF1bHQgZm9udCBhbmQgYmFja2dyb3VuZCBjb2xvciB3aGVuIG5vdCB1c2luZyBhbnkgY29sb3IgcGFsZXR0ZS5cbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHJhaXNlZC1idXR0b24pO1xuXG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tdGhlbWUtcHJvcGVydHkoJHRoZW1lLCAnY29sb3InLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICBAaW5jbHVkZSBfbWF0LWJ1dHRvbi10aGVtZS1wcm9wZXJ0eSgkdGhlbWUsICdiYWNrZ3JvdW5kLWNvbG9yJywgZGVmYXVsdCk7XG4gICAgQGluY2x1ZGUgX21hdC1idXR0b24tcmlwcGxlLWNvbG9yKCR0aGVtZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LXN0cm9rZWQtYnV0dG9uLCAubWF0LWZsYXQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuXG4gICAgJjpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtb3ZlcnJpZGFibGUtZWxldmF0aW9uKDgsICR0aGVtZSk7XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWZhYiwgLm1hdC1taW5pLWZhYiB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oNiwgJHRoZW1lKTtcblxuICAgICY6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigxMiwgJHRoZW1lKTtcbiAgICB9XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbigwLCAkdGhlbWUpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWJ1dHRvbi10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1pY29uLWJ1dHRvbiwgLm1hdC1zdHJva2VkLWJ1dHRvbixcbiAgLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJ1dHRvbik7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZGl2aWRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZSxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyLCAkdGhlbWUpO1xuICB9XG5cbiAgLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbiAgLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG5cbiAgICAubWF0LWJ1dHRvbi10b2dnbGUtZm9jdXMtb3ZlcmxheSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGZvY3VzZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcblxuICAgIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgZm9jdXNlZC1idXR0b24sIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCAkZGl2aWRlci1jb2xvcjtcbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZSArIC5tYXQtYnV0dG9uLXRvZ2dsZSB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZC5tYXQtYnV0dG9uLXRvZ2dsZS12ZXJ0aWNhbCB7XG4gICAgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkaXZpZGVyLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIHNlbGVjdGVkLWJ1dHRvbik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1kaXNhYmxlZCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtYnV0dG9uKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpc2FibGVkLWJ1dHRvbi10b2dnbGUpO1xuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCk7XG4gICAgfVxuXG4gICAgJi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgc2VsZWN0ZWQtZGlzYWJsZWQtYnV0dG9uKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWJ1dHRvbi10b2dnbGUtc3RhbmRhbG9uZS5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkLFxuICAubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggJGRpdmlkZXItY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1idXR0b24tdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWJ1dHRvbi10b2dnbGUge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtY2FyZCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMSwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgLy8gTmVlZHMgZXh0cmEgc3BlY2lmaWNpdHkgdG8gYmUgYWJsZSB0byBvdmVycmlkZSB0aGUgZWxldmF0aW9uIHNlbGVjdG9ycy5cbiAgICAmLm1hdC1jYXJkLWZsYXQge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMCwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FyZCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtY2FyZC10aXRsZSB7XG4gICAgZm9udDoge1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBoZWFkbGluZSk7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCB0aXRsZSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYXJkLWhlYWRlciAubWF0LWNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCB0aXRsZSk7XG4gIH1cblxuICAubWF0LWNhcmQtc3VidGl0bGUsXG4gIC5tYXQtY2FyZC1jb250ZW50IHtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cblxuICAvLyBUaGUgY29sb3Igb2YgdGhlIGNoZWNrYm94J3MgY2hlY2ttYXJrIC8gbWl4ZWRtYXJrLlxuICAkY2hlY2tib3gtbWFyay1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcblxuICAvLyBOT1RFKHRyYXZpc2thdWZtYW4pOiBXaGlsZSB0aGUgc3BlYyBjYWxscyBmb3IgdHJhbnNsdWNlbnQgYmxhY2tzL3doaXRlcyBmb3IgZGlzYWJsZWQgY29sb3JzLFxuICAvLyB0aGlzIGRvZXMgbm90IHdvcmsgd2VsbCB3aXRoIGVsZW1lbnRzIGxheWVyZWQgb24gdG9wIG9mIG9uZSBhbm90aGVyLiBUbyBnZXQgYXJvdW5kIHRoaXMgd2VcbiAgLy8gYmxlbmQgdGhlIGNvbG9ycyB0b2dldGhlciBiYXNlZCBvbiB0aGUgYmFzZSBjb2xvciBhbmQgdGhlIHRoZW1lIGJhY2tncm91bmQuXG4gICR3aGl0ZS0zMHBjdC1vcGFjaXR5LW9uLWRhcms6ICM2ODY4Njg7XG4gICRibGFjay0yNnBjdC1vcGFjaXR5LW9uLWxpZ2h0OiAjYjBiMGIwO1xuICAkZGlzYWJsZWQtY29sb3I6IGlmKCRpcy1kYXJrLXRoZW1lLCAkd2hpdGUtMzBwY3Qtb3BhY2l0eS1vbi1kYXJrLCAkYmxhY2stMjZwY3Qtb3BhY2l0eS1vbi1saWdodCk7XG5cbiAgLm1hdC1jaGVja2JveC1mcmFtZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrIHtcbiAgICBmaWxsOiAkY2hlY2tib3gtbWFyay1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgIC8vICFpbXBvcnRhbnQgaXMgbmVlZGVkIGhlcmUgYmVjYXVzZSBhIHN0cm9rZSBtdXN0IGJlIHNldCBhcyBhblxuICAgIC8vIGF0dHJpYnV0ZSBvbiB0aGUgU1ZHIGluIG9yZGVyIGZvciBsaW5lIGFuaW1hdGlvbiB0byB3b3JrIHByb3Blcmx5LlxuICAgIHN0cm9rZTogJGNoZWNrYm94LW1hcmstY29sb3IgIWltcG9ydGFudDtcblxuICAgIEBpbmNsdWRlIGNkay1oaWdoLWNvbnRyYXN0KGJsYWNrLW9uLXdoaXRlKSB7XG4gICAgICAvLyBIYXZpbmcgdGhlIG9uZSBhYm92ZSBiZSAhaW1wb3J0YW50IGVuZHMgdXAgb3ZlcnJpZGluZyB0aGUgYnJvd3NlcidzIGF1dG9tYXRpY1xuICAgICAgLy8gY29sb3IgaW52ZXJzaW9uIHNvIHdlIG5lZWQgdG8gcmUtaW52ZXJ0IGl0IG91cnNlbHZlcyBmb3IgYmxhY2stb24td2hpdGUuXG4gICAgICBzdHJva2U6ICMwMDAgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNoZWNrYm94LW1hcmstY29sb3I7XG4gIH1cblxuICAubWF0LWNoZWNrYm94LWluZGV0ZXJtaW5hdGUsIC5tYXQtY2hlY2tib3gtY2hlY2tlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hlY2tib3gtZGlzYWJsZWQge1xuICAgICYubWF0LWNoZWNrYm94LWNoZWNrZWQsXG4gICAgJi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZSB7XG4gICAgICAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSB7XG4gICAgICAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZGlzYWJsZWQtY29sb3I7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgY2RrLWhpZ2gtY29udHJhc3Qge1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgIH1cbiAgfVxuXG4gIC8vIFRoaXMgb25lIGlzIG1vdmVkIGRvd24gaGVyZSBzbyBpdCBjYW4gdGFyZ2V0IGJvdGhcbiAgLy8gdGhlIHRoZW1lIGNvbG9ycyBhbmQgdGhlIGRpc2FibGVkIHN0YXRlLlxuICBAaW5jbHVkZSBjZGstaGlnaC1jb250cmFzdCB7XG4gICAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICAgIC8vIE5lZWRzIHRvIGJlIHJlbW92ZWQgYmVjYXVzZSBpdCBoaWRlcyB0aGUgY2hlY2tib3ggb3V0bGluZS5cbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkge1xuICAgICYubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtY2hlY2tib3gtcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGVja2JveC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1jaGVja2JveCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC8vIFRPRE8oa2FyYSk6IFJlbW92ZSB0aGlzIHN0eWxlIHdoZW4gZml4aW5nIHZlcnRpY2FsIGJhc2VsaW5lXG4gIC5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxufVxuXG5cblxuXG5cblxuJG1hdC1jaGlwLXJlbW92ZS1mb250LXNpemU6IDE4cHg7XG5cbkBtaXhpbiBtYXQtY2hpcHMtY29sb3IoJGZvcmVncm91bmQsICRiYWNrZ3JvdW5kKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICBjb2xvcjogJGZvcmVncm91bmQ7XG5cbiAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6ICRmb3JlZ3JvdW5kO1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRwYWxldHRlKSB7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy1jb2xvcihtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QpLCBtYXQtY29sb3IoJHBhbGV0dGUpKTtcblxuICAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUsIGRlZmF1bHQtY29udHJhc3QsIDAuMSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1jaGlwcy10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJHVuc2VsZWN0ZWQtYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCB1bnNlbGVjdGVkLWNoaXApO1xuICAkdW5zZWxlY3RlZC1mb3JlZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcCB7XG4gICAgQGluY2x1ZGUgbWF0LWNoaXBzLWNvbG9yKCR1bnNlbGVjdGVkLWZvcmVncm91bmQsICR1bnNlbGVjdGVkLWJhY2tncm91bmQpO1xuXG4gICAgJjpub3QoLm1hdC1jaGlwLWRpc2FibGVkKSB7XG4gICAgICAmOmFjdGl2ZSB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDMsICR0aGVtZSk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAwLjU0O1xuICAgICAgfVxuICAgIH1cblxuICAgICYubWF0LWNoaXAtZGlzYWJsZWQge1xuICAgICAgb3BhY2l0eTogMC40O1xuICAgIH1cblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hcF9nZXQoJGZvcmVncm91bmQsIGJhc2UpO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZCB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUtY29sb3IoJHByaW1hcnkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgbWF0LWNoaXBzLXRoZW1lLWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWNoaXBzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWNoaXAge1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcblxuICAgIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAgIC5tYXQtY2hpcC1yZW1vdmUubWF0LWljb24ge1xuICAgICAgZm9udC1zaXplOiAkbWF0LWNoaXAtcmVtb3ZlLWZvbnQtc2l6ZTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtdGFibGUge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG4gIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgW21hdC1oZWFkZXItcm93XSwgW21hdC1yb3ddLCBbbWF0LWZvb3Rlci1yb3ddLFxuICAubWF0LXRhYmxlLXN0aWNreSB7XG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgfVxuXG4gIG1hdC1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtZm9vdGVyLXJvdyxcbiAgdGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRhYmxlLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYmxlIHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0yKTtcbiAgfVxuXG4gIC5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuJG1hdC1kYXRlcGlja2VyLXNlbGVjdGVkLXRvZGF5LWJveC1zaGFkb3ctd2lkdGg6IDFweDtcbiRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudDogMC42O1xuJG1hdC1kYXRlcGlja2VyLXRvZGF5LWZhZGUtYW1vdW50OiAwLjI7XG4kbWF0LWNhbGVuZGFyLWJvZHktZm9udC1zaXplOiAxM3B4ICFkZWZhdWx0O1xuJG1hdC1jYWxlbmRhci13ZWVrZGF5LXRhYmxlLWZvbnQtc2l6ZTogMTFweCAhZGVmYXVsdDtcblxuQG1peGluIF9tYXQtZGF0ZXBpY2tlci1jb2xvcigkcGFsZXR0ZSkge1xuICAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgICRiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZ3JvdW5kKSA9PSBjb2xvcikge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogZmFkZS1vdXQoJGJhY2tncm91bmQsICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC1mYWRlLWFtb3VudCk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIC8vIElmIHdlIGNvdWxkbid0IHJlc29sdmUgdG8gYmFja2dyb3VuZCB0byBhIGNvbG9yIChlLmcuIGl0J3MgYSBDU1MgdmFyaWFibGUpLFxuICAgICAgLy8gZmFsbCBiYWNrIHRvIGZhZGluZyB0aGUgY29udGVudCBvdXQgdmlhIGBvcGFjaXR5YC5cbiAgICAgIG9wYWNpdHk6ICRtYXQtZGF0ZXBpY2tlci10b2RheS1mYWRlLWFtb3VudDtcbiAgICB9XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXkubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwICRtYXQtZGF0ZXBpY2tlci1zZWxlY3RlZC10b2RheS1ib3gtc2hhZG93LXdpZHRoXG4gICAgICAgICAgICAgICAgbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG5cbiAgLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC8vIFRoZSBwcmV2L25leHQgYnV0dG9ucyBuZWVkIGEgYml0IG1vcmUgc3BlY2lmaWNpdHkgdG9cbiAgLy8gYXZvaWQgYmVpbmcgb3ZlcndyaXR0ZW4gYnkgdGhlIC5tYXQtaWNvbi1idXR0b24uXG4gIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUsXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItcHJldmlvdXMtYnV0dG9uIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBpY29uKTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuICB9XG5cbiAgLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktbGFiZWwge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1jZWxsOm5vdCgubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQpOmhvdmVyLFxuICAuY2RrLWtleWJvYXJkLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSxcbiAgLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSB7XG4gICAgJiA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3Zlcik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgICAvLyBOb3RlOiB0aG91Z2ggaXQncyBub3QgdGV4dCwgdGhlIGJvcmRlciBpcyBhIGhpbnQgYWJvdXQgdGhlIGZhY3QgdGhhdCB0aGlzIGlzIHRvZGF5J3MgZGF0ZSxcbiAgICAvLyBzbyB3ZSB1c2UgdGhlIGhpbnQgY29sb3IuXG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGhpbnQtdGV4dCk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICAgICRjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBoaW50LXRleHQpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRjb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIGJvcmRlci1jb2xvcjogZmFkZS1vdXQoJGNvbG9yLCAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgY29sb3IgZGlkbid0IHJlc29sdmUgdG8gYSBjb2xvciB2YWx1ZSwgYnV0IHNvbWV0aGluZyBsaWtlIGEgQ1NTIHZhcmlhYmxlLCB3ZSBjYW4ndFxuICAgICAgLy8gZmFkZSBpdCBvdXQgc28gd2UgZmFsbCBiYWNrIHRvIHJlZHVjaW5nIHRoZSBlbGVtZW50IG9wYWNpdHkuIE5vdGUgdGhhdCB3ZSBkb24ndCB1c2UgdGhlXG4gICAgICAvLyAkbWF0LWRhdGVwaWNrZXItdG9kYXktZmFkZS1hbW91bnQsIGJlY2F1c2UgaGludCB0ZXh0IHVzdWFsbHkgaGFzIHNvbWUgb3BhY2l0eSBhcHBsaWVkXG4gICAgICAvLyB0byBpdCBhbHJlYWR5IGFuZCB3ZSBkb24ndCB3YW50IHRoZW0gdG8gc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIuXG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgfVxuICB9XG5cbiAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KSk7XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDQsICR0aGVtZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBAaW5jbHVkZSBfbWF0LWRhdGVwaWNrZXItY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgQGluY2x1ZGUgX21hdC1kYXRlcGlja2VyLWNvbG9yKG1hcC1nZXQoJHRoZW1lLCB3YXJuKSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQtdG91Y2gge1xuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDAsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LWRhdGVwaWNrZXItdG9nZ2xlLWFjdGl2ZSB7XG4gICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSkpO1xuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IobWFwLWdldCgkdGhlbWUsIGFjY2VudCkpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4ge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcihtYXAtZ2V0KCR0aGVtZSwgd2FybikpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtY2FsZW5kYXIge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LWNhbGVuZGFyLWJvZHkge1xuICAgIGZvbnQtc2l6ZTogJG1hdC1jYWxlbmRhci1ib2R5LWZvbnQtc2l6ZTtcbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCxcbiAgLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJ1dHRvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBidXR0b24pO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiAkbWF0LWNhbGVuZGFyLXdlZWtkYXktdGFibGUtZm9udC1zaXplO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigyNCwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1kaWFsb2ctdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICB9XG59XG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpIHtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gICAgQGluY2x1ZGUgX21hdC10aGVtZS1vdmVycmlkYWJsZS1lbGV2YXRpb24oMiwgJHRoZW1lKTtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1hY3Rpb24tcm93IHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgJjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkge1xuICAgICAgJi5jZGsta2V5Ym9hcmQtZm9jdXNlZCxcbiAgICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGhvdmVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBEaXNhYmxlIHRoZSBob3ZlciBvbiB0b3VjaCBkZXZpY2VzIHNpbmNlIGl0IGNhbiBhcHBlYXIgbGlrZSBpdCBpcyBzdHVjay4gV2UgY2FuJ3QgdXNlXG4gIC8vIGBAbWVkaWEgKGhvdmVyKWAgYWJvdmUsIGJlY2F1c2UgdGhlIGRlc2t0b3Agc3VwcG9ydCBicm93c2VyIHN1cHBvcnQgaXNuJ3QgZ3JlYXQuXG4gIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCk6bm90KFthcmlhLWRpc2FibGVkPSd0cnVlJ10pXG4gICAgICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uLFxuICAubWF0LWV4cGFuc2lvbi1pbmRpY2F0b3I6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC1idXR0b24pO1xuXG4gICAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuICAgIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1leHBhbnNpb24tcGFuZWwtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gICAgZm9udDoge1xuICAgICAgZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIHN1YmhlYWRpbmctMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gICAgQGluY2x1ZGUgbWF0LXR5cG9ncmFwaHktbGV2ZWwtdG8tc3R5bGVzKCRjb25maWcsIGJvZHktMSk7XG4gIH1cbn1cblxuXG5cblxuLy8gVGhpcyBtaXhpbiB3aWxsIGVuc3VyZSB0aGF0IGxpbmVzIHRoYXQgb3ZlcmZsb3cgdGhlIGNvbnRhaW5lciB3aWxsIGhpZGUgdGhlIG92ZXJmbG93IGFuZFxuLy8gdHJ1bmNhdGUgbmVhdGx5IHdpdGggYW4gZWxsaXBzaXMuXG5AbWl4aW4gbWF0LXRydW5jYXRlLWxpbmUoKSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4vLyBNaXhpbiB0byBwcm92aWRlIGFsbCBtYXQtbGluZSBzdHlsZXMsIGNoYW5naW5nIHNlY29uZGFyeSBmb250IHNpemUgYmFzZWQgb24gd2hldGhlciB0aGUgbGlzdFxuLy8gaXMgaW4gZGVuc2UgbW9kZS5cbkBtaXhpbiBtYXQtbGluZS1iYXNlKCRzZWNvbmRhcnktZm9udC1zaXplKSB7XG4gIC5tYXQtbGluZSB7XG4gICAgQGluY2x1ZGUgbWF0LXRydW5jYXRlLWxpbmUoKTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLy8gYWxsIGxpbmVzIGJ1dCB0aGUgdG9wIGxpbmUgc2hvdWxkIGhhdmUgc21hbGxlciB0ZXh0XG4gICAgJjpudGgtY2hpbGQobisyKSB7XG4gICAgICBmb250LXNpemU6ICRzZWNvbmRhcnktZm9udC1zaXplO1xuICAgIH1cbiAgfVxufVxuXG4vLyBUaGlzIG1peGluIG5vcm1hbGl6ZXMgZGVmYXVsdCBlbGVtZW50IHN0eWxlcywgZS5nLiBmb250IHdlaWdodCBmb3IgaGVhZGluZyB0ZXh0LlxuQG1peGluIG1hdC1ub3JtYWxpemUtdGV4dCgpIHtcbiAgJiA+ICoge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICB9XG59XG5cbi8vIFRoaXMgbWl4aW4gcHJvdmlkZXMgYmFzZSBzdHlsZXMgZm9yIHRoZSB3cmFwcGVyIGFyb3VuZCBtYXQtbGluZSBlbGVtZW50cyBpbiBhIGxpc3QuXG5AbWl4aW4gbWF0LWxpbmUtd3JhcHBlci1iYXNlKCkge1xuICBAaW5jbHVkZSBtYXQtbm9ybWFsaXplLXRleHQoKTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAvLyBNdXN0IHJlbW92ZSB3cmFwcGVyIHdoZW4gbGluZXMgYXJlIGVtcHR5IG9yIGl0IHRha2VzIHVwIGhvcml6b250YWxcbiAgLy8gc3BhY2UgYW5kIHB1c2hlcyBvdGhlciBlbGVtZW50cyB0byB0aGUgcmlnaHQuXG4gICY6ZW1wdHkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuXG5cbi8vIEluY2x1ZGUgdGhpcyBlbXB0eSBtaXhpbiBmb3IgY29uc2lzdGVuY3kgd2l0aCB0aGUgb3RoZXIgY29tcG9uZW50cy5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSkgeyB9XG5cbkBtaXhpbiBtYXQtZ3JpZC1saXN0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LWdyaWQtdGlsZS1oZWFkZXIsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciB7XG4gICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuXG4vLyBJbmNsdWRlIHRoaXMgZW1wdHkgbWl4aW4gZm9yIGNvbnNpc3RlbmN5IHdpdGggdGhlIG90aGVyIGNvbXBvbmVudHMuXG5AbWl4aW4gbWF0LWljb24tdGhlbWUoJHRoZW1lKSB7XG4gICRwcmltYXJ5OiBtYXAtZ2V0KCR0aGVtZSwgcHJpbWFyeSk7XG4gICRhY2NlbnQ6IG1hcC1nZXQoJHRoZW1lLCBhY2NlbnQpO1xuICAkd2FybjogbWFwLWdldCgkdGhlbWUsIHdhcm4pO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtaWNvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKSB7IH1cblxuXG5cblxuXG4vLyBSZW5kZXJzIGEgZ3JhZGllbnQgZm9yIHNob3dpbmcgdGhlIGRhc2hlZCBsaW5lIHdoZW4gdGhlIGlucHV0IGlzIGRpc2FibGVkLlxuLy8gVW5saWtlIHVzaW5nIGEgYm9yZGVyLCBhIGdyYWRpZW50IGFsbG93cyB1cyB0byBhZGp1c3QgdGhlIHNwYWNpbmcgb2YgdGhlIGRvdHRlZCBsaW5lXG4vLyB0byBtYXRjaCB0aGUgTWF0ZXJpYWwgRGVzaWduIHNwZWMuXG5AbWl4aW4gbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCRjb2xvcikge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICRjb2xvciAwJSwgJGNvbG9yIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG59XG5cbi8vIEZpZ3VyZXMgb3V0IHRoZSBjb2xvciBvZiB0aGUgcGxhY2Vob2xkZXIgZm9yIGEgZm9ybSBjb250cm9sLlxuLy8gVXNlZCBwcmltYXJpbHkgdG8gcHJldmVudCB0aGUgdmFyaW91cyBmb3JtIGNvbnRyb2xzIGZyb21cbi8vIGJlY29taW5nIG91dCBvZiBzeW5jIHNpbmNlIHRoZXNlIGNvbG9ycyBhcmVuJ3QgaW4gYSBwYWxldHRlLlxuQGZ1bmN0aW9uIF9tYXQtY29udHJvbC1wbGFjZWhvbGRlci1jb2xvcigkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgQHJldHVybiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0LCBpZigkaXMtZGFyay10aGVtZSwgMC41LCAwLjQyKSk7XG59XG5cblxuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbkBtaXhpbiB1c2VyLXNlbGVjdCgkdmFsdWUpIHtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogJHZhbHVlO1xuICAtbW96LXVzZXItc2VsZWN0OiAkdmFsdWU7XG4gIC1tcy11c2VyLXNlbGVjdDogJHZhbHVlO1xuICB1c2VyLXNlbGVjdDogJHZhbHVlO1xufVxuXG5AbWl4aW4gaW5wdXQtcGxhY2Vob2xkZXIge1xuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cblxuICAmOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICBAY29udGVudDtcbiAgfVxuXG4gICY6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG5cbiAgJjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYiB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbkBtaXhpbiBjdXJzb3ItZ3JhYmJpbmcge1xuICBjdXJzb3I6IC13ZWJraXQtZ3JhYmJpbmc7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbkBtaXhpbiBiYWNrZmFjZS12aXNpYmlsaXR5KCR2YWx1ZSkge1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6ICR2YWx1ZTtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogJHZhbHVlO1xufVxuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuXG5cblxuQG1peGluIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuICB9XG5cbiAgLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuICAubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG5cbiAgICBAaW5jbHVkZSBpbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICBjb2xvcjogX21hdC1jb250cm9sLXBsYWNlaG9sZGVyLWNvbG9yKCR0aGVtZSk7XG4gICAgfVxuXG4gICAgLy8gT24gZGFyayB0aGVtZXMgd2Ugc2V0IHRoZSBuYXRpdmUgYHNlbGVjdGAgY29sb3IgdG8gc29tZSBzaGFkZSBvZiB3aGl0ZSxcbiAgICAvLyBob3dldmVyIHRoZSBjb2xvciBwcm9wYWdhdGVzIHRvIGFsbCBvZiB0aGUgYG9wdGlvbmAgZWxlbWVudHMsIHdoaWNoIGFyZVxuICAgIC8vIGFsd2F5cyBvbiBhIHdoaXRlIGJhY2tncm91bmQgaW5zaWRlIHRoZSBkcm9wZG93biwgY2F1c2luZyB0aGVtIHRvIGJsZW5kIGluLlxuICAgIC8vIFNpbmNlIHdlIGNhbid0IGNoYW5nZSBiYWNrZ3JvdW5kIG9mIHRoZSBkcm9wZG93biwgd2UgbmVlZCB0byBleHBsaWNpdGx5XG4gICAgLy8gcmVzZXQgdGhlIGNvbG9yIG9mIHRoZSBvcHRpb25zIHRvIHNvbWV0aGluZyBkYXJrLlxuICAgIEBpZiAobWFwLWdldCgkdGhlbWUsIGlzLWRhcmspKSB7XG4gICAgICBvcHRpb24ge1xuICAgICAgICBjb2xvcjogJGRhcmstcHJpbWFyeS10ZXh0O1xuICAgICAgfVxuXG4gICAgICBvcHRpb246ZGlzYWJsZWQge1xuICAgICAgICBjb2xvcjogJGRhcmstZGlzYWJsZWQtdGV4dDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuICAubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG5cbiAgLy8gVGhlIGFtb3VudCBvZiBzcGFjZSBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIGxpbmUgYW5kIHRoZSB0b3Agb2YgdGhlIGFjdHVhbCB0ZXh0XG4gIC8vIChhcyBhIGZyYWN0aW9uIG9mIHRoZSBmb250LXNpemUpLlxuICAkbGluZS1zcGFjaW5nOiAoJGxpbmUtaGVpZ2h0IC0gMSkgLyAyO1xuXG4gIC8vIDxpbnB1dD4gZWxlbWVudHMgc2VlbSB0byBoYXZlIHRoZWlyIGhlaWdodCBzZXQgc2xpZ2h0bHkgdG9vIGxhcmdlIG9uIFNhZmFyaSBjYXVzaW5nIHRoZSB0ZXh0IHRvXG4gIC8vIGJlIG1pc2FsaWduZWQgdy5yLnQuIHRoZSBwbGFjZWhvbGRlci4gQWRkaW5nIHRoaXMgbWFyZ2luIGNvcnJlY3RzIGl0LlxuICBpbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgbWFyZ2luLXRvcDogLSRsaW5lLXNwYWNpbmcgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cblxuQG1peGluIG1hdC1saXN0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICB9XG4gIH1cblxuICAubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaXNhYmxlZC1saXN0LW9wdGlvbik7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uLFxuICAubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtIHtcbiAgICAmOmhvdmVyLCAmOmZvY3VzIHtcbiAgICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2hvdmVyJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtbGlzdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgJGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG5cbiAgLm1hdC1saXN0LWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XG4gIH1cblxuICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICB9XG5cbiAgLy8gRGVmYXVsdCBsaXN0XG4gIC5tYXQtbGlzdC1iYXNlIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgc3ViaGVhZGluZy0yKTtcbiAgICAgIEBpbmNsdWRlIG1hdC1saW5lLWJhc2UobWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpKTtcbiAgICB9XG5cbiAgICAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBzdWJoZWFkaW5nLTIpO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSkpO1xuICAgIH1cblxuICAgIC5tYXQtc3ViaGVhZGVyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZywgYm9keS0yKTtcbiAgICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIERlbnNlIGxpc3RcbiAgLm1hdC1saXN0LWJhc2VbZGVuc2VdIHtcbiAgICAubWF0LWxpc3QtaXRlbSB7XG4gICAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICBAaW5jbHVkZSBtYXQtbGluZS1iYXNlKG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbikpO1xuICAgIH1cblxuICAgIC5tYXQtbGlzdC1vcHRpb24ge1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgQGluY2x1ZGUgbWF0LWxpbmUtYmFzZShtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pKTtcbiAgICB9XG5cbiAgICAubWF0LXN1YmhlYWRlciB7XG4gICAgICBmb250LWZhbWlseTogJGZvbnQtZmFtaWx5O1xuICAgICAgZm9udC1zaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgZm9udC13ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LW1lbnUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1tZW51LXBhbmVsIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgJ2NhcmQnKTtcbiAgfVxuXG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAndGV4dCcpO1xuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgJiwgJjo6YWZ0ZXIge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnZGlzYWJsZWQnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4gIC5tYXQtbWVudS1pdGVtLXN1Ym1lbnUtdHJpZ2dlcjo6YWZ0ZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsICdpY29uJyk7XG4gIH1cblxuICAubWF0LW1lbnUtaXRlbTpob3ZlcixcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgLm1hdC1tZW51LWl0ZW0uY2RrLWtleWJvYXJkLWZvY3VzZWQsXG4gIC5tYXQtbWVudS1pdGVtLWhpZ2hsaWdodGVkIHtcbiAgICAmOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdob3ZlcicpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LW1lbnUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtbWVudS1pdGVtIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTEpO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuXG4gIC5tYXQtcGFnaW5hdG9yIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgLm1hdC1wYWdpbmF0b3ItaW5jcmVtZW50IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2ljb24nKTtcbiAgfVxuXG4gIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuICAubWF0LXBhZ2luYXRvci1sYXN0IHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCAnaWNvbicpO1xuICB9XG5cbiAgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbiAgICAubWF0LXBhZ2luYXRvci1pbmNyZW1lbnQsXG4gICAgLm1hdC1wYWdpbmF0b3ItZmlyc3QsXG4gICAgLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gICAgICBib3JkZXItY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtcGFnaW5hdG9yLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXBhZ2luYXRvcixcbiAgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGNhcHRpb24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBjYXB0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgZmlsbDogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5LCBsaWdodGVyKTtcbiAgfVxuXG4gIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LWFjY2VudCB7XG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYmFja2dyb3VuZCB7XG4gICAgICBmaWxsOiBtYXQtY29sb3IoJGFjY2VudCwgbGlnaHRlcik7XG4gICAgfVxuXG4gICAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1wcm9ncmVzcy1iYXIubWF0LXdhcm4ge1xuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICAgICAgZmlsbDogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCR3YXJuLCBsaWdodGVyKTtcbiAgICB9XG5cbiAgICAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHsgfVxuXG5cblxuXG5cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXByb2dyZXNzLXNwaW5uZXIsIC5tYXQtc3Bpbm5lciB7XG4gICAgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAgIH1cblxuICAgICYubWF0LXdhcm4gY2lyY2xlIHtcbiAgICAgIHN0cm9rZTogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1wcm9ncmVzcy1zcGlubmVyLXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIF9tYXQtcmFkaW8tY29sb3IoJHBhbGV0dGUpIHtcbiAgJi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUpO1xuICB9XG5cbiAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4gIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQ6bm90KC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUpLFxuICAmLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4gICY6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgJi5tYXQtcHJpbWFyeSB7XG4gICAgICBAaW5jbHVkZSBfbWF0LXJhZGlvLWNvbG9yKCRwcmltYXJ5KTtcbiAgICB9XG5cbiAgICAmLm1hdC1hY2NlbnQge1xuICAgICAgQGluY2x1ZGUgX21hdC1yYWRpby1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtcmFkaW8tY29sb3IoJHdhcm4pO1xuICAgIH1cblxuICAgIC8vIFRoaXMgbmVlZHMgZXh0cmEgc3BlY2lmaWNpdHksIGJlY2F1c2UgdGhlIGNsYXNzZXMgYWJvdmUgYXJlIGNvbWJpbmVkXG4gICAgLy8gKGUuZy4gYC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnRgKSB3aGljaCBpbmNyZWFzZXMgdGhlaXIgc3BlY2lmaWNpdHkgYSBsb3QuXG4gICAgLy8gVE9ETzogY29uc2lkZXIgbWFraW5nIHRoZSBzZWxlY3RvcnMgaW50byBkZXNjZW5kYW50cyAoYC5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLWJ1dHRvbmApLlxuICAgICYubWF0LXJhZGlvLWRpc2FibGVkIHtcbiAgICAgICYubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUsXG4gICAgICAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG5cbiAgICAgIC5tYXQtcmFkaW8tcmlwcGxlIC5tYXQtcmlwcGxlLWVsZW1lbnQsXG4gICAgICAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQpO1xuICAgICAgfVxuXG4gICAgICAubWF0LXJhZGlvLWxhYmVsLWNvbnRlbnQge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU3dpdGNoIHRoaXMgdG8gYSBzb2xpZCBjb2xvciBzaW5jZSB3ZSdyZSB1c2luZyBgb3BhY2l0eWBcbiAgICAvLyB0byBjb250cm9sIGhvdyBvcGFxdWUgdGhlIHJpcHBsZSBzaG91bGQgYmUuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXBfZ2V0KCRmb3JlZ3JvdW5kLCBiYXNlKTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1yYWRpby10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNlbGVjdC10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG5cbiAgLm1hdC1zZWxlY3QtdmFsdWUge1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtcGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiBfbWF0LWNvbnRyb2wtcGxhY2Vob2xkZXItY29sb3IoJHRoZW1lKTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXNhYmxlZC10ZXh0KTtcbiAgfVxuXG4gIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gIH1cblxuICAubWF0LXNlbGVjdC1wYW5lbCB7XG4gICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBjYXJkKTtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLW92ZXJyaWRhYmxlLWVsZXZhdGlvbig0LCAkdGhlbWUpO1xuXG4gICAgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgICAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBob3ZlciwgMC4xMik7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkIHtcbiAgICAmLm1hdC1mb2N1c2VkIHtcbiAgICAgICYubWF0LXByaW1hcnkgLm1hdC1zZWxlY3QtYXJyb3cge1xuICAgICAgICBjb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtYWNjZW50IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgICAgY29sb3I6IG1hdC1jb2xvcigkYWNjZW50KTtcbiAgICAgIH1cblxuICAgICAgJi5tYXQtd2FybiAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHdhcm4pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtaW52YWxpZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXNlbGVjdC5tYXQtc2VsZWN0LWRpc2FibGVkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuXG4gIC5tYXQtc2VsZWN0IHtcbiAgICBmb250LWZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcpO1xuICB9XG5cbiAgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc2lkZW5hdi10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGRpYWxvZyk7XG4gICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I6ICBtYXQtY29sb3IoJGJhY2tncm91bmQsIGJhY2tncm91bmQpO1xuICAkZHJhd2VyLXB1c2gtYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBkaWFsb2cpO1xuICAkZHJhd2VyLXNpZGUtYm9yZGVyOiBzb2xpZCAxcHggbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcblxuICAubWF0LWRyYXdlci1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRkcmF3ZXItY29udGFpbmVyLWJhY2tncm91bmQtY29sb3I7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG4gIH1cblxuICAubWF0LWRyYXdlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1iYWNrZ3JvdW5kLWNvbG9yO1xuICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuXG4gICAgJi5tYXQtZHJhd2VyLXB1c2gge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRyYXdlci1wdXNoLWJhY2tncm91bmQtY29sb3I7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1kcmF3ZXItc2lkZSkge1xuICAgICAgLy8gVGhlIGVsZXZhdGlvbiBvZiB6LTE2IGlzIG5vdGVkIGluIHRoZSBkZXNpZ24gc3BlY2lmaWNhdGlvbnMuXG4gICAgICAvLyBTZWUgaHR0cHM6Ly9tYXRlcmlhbC5pby9kZXNpZ24vY29tcG9uZW50cy9uYXZpZ2F0aW9uLWRyYXdlci5odG1sXG4gICAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxNiwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAubWF0LWRyYXdlci1zaWRlIHtcbiAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG5cbiAgICAmLm1hdC1kcmF3ZXItZW5kIHtcbiAgICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIFtkaXI9J3J0bCddIC5tYXQtZHJhd2VyLXNpZGUge1xuICAgIGJvcmRlci1sZWZ0OiAkZHJhd2VyLXNpZGUtYm9yZGVyO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTtcblxuICAgICYubWF0LWRyYXdlci1lbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQ6ICRkcmF3ZXItc2lkZS1ib3JkZXI7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1kcmF3ZXItYmFja2Ryb3AubWF0LWRyYXdlci1zaG93biB7XG4gICAgJG9wYWNpdHk6IDAuNjtcbiAgICAkYmFja2Ryb3AtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgY2FyZCwgJG9wYWNpdHkpO1xuXG4gICAgQGlmICh0eXBlLW9mKCRiYWNrZHJvcC1jb2xvcikgPT0gY29sb3IpIHtcbiAgICAgIC8vIFdlIHVzZSBpbnZlcnQoKSBoZXJlIHRvIGhhdmUgdGhlIGRhcmtlbiB0aGUgYmFja2dyb3VuZCBjb2xvciBleHBlY3RlZCB0byBiZSB1c2VkLiBJZiB0aGVcbiAgICAgIC8vIGJhY2tncm91bmQgaXMgbGlnaHQsIHdlIHVzZSBhIGRhcmsgYmFja2Ryb3AuIElmIHRoZSBiYWNrZ3JvdW5kIGlzIGRhcmssXG4gICAgICAvLyB3ZSB1c2UgYSBsaWdodCBiYWNrZHJvcC5cbiAgICAgIGJhY2tncm91bmQtY29sb3I6IGludmVydCgkYmFja2Ryb3AtY29sb3IpO1xuICAgIH1cbiAgICBAZWxzZSB7XG4gICAgICAvLyBJZiB3ZSBjb3VsZG4ndCByZXNvbHZlIHRoZSBiYWNrZHJvcCBjb2xvciB0byBhIGNvbG9yIHZhbHVlLCBmYWxsIGJhY2sgdG8gdXNpbmdcbiAgICAgIC8vIGBvcGFjaXR5YCB0byBtYWtlIGl0IG9wYXF1ZSBzaW5jZSBpdHMgZW5kIHZhbHVlIGNvdWxkIGJlIGEgc29saWQgY29sb3IuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2Ryb3AtY29sb3I7XG4gICAgICBvcGFjaXR5OiAkb3BhY2l0eTtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zaWRlbmF2LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKSB7XG4gICYubWF0LWNoZWNrZWQge1xuICAgIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICAgICAgLy8gT3BhY2l0eSBpcyBkZXRlcm1pbmVkIGZyb20gdGhlIHNwZWNzIGZvciB0aGUgc2VsZWN0aW9uIGNvbnRyb2xzLlxuICAgICAgLy8gU2VlOiBodHRwczovL21hdGVyaWFsLmlvL2Rlc2lnbi9jb21wb25lbnRzL3NlbGVjdGlvbi1jb250cm9scy5odG1sI3NwZWNzXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSwgMC41NCk7XG4gICAgfVxuXG4gICAgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgICAvLyBTZXQgbm8gb3BhY2l0eSBmb3IgdGhlIHJpcHBsZXMgYmVjYXVzZSB0aGUgcmlwcGxlIG9wYWNpdHkgd2lsbCBiZSBhZGp1c3RlZCBkeW5hbWljYWxseVxuICAgICAgLy8gYmFzZWQgb24gdGhlIHR5cGUgb2YgaW50ZXJhY3Rpb24gd2l0aCB0aGUgc2xpZGUtdG9nZ2xlIChlLmcuIGZvciBob3ZlciwgZm9jdXMpXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHBhbGV0dGUsICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGUtdG9nZ2xlLXRoZW1lKCR0aGVtZSkge1xuICAkaXMtZGFyazogbWFwX2dldCgkdGhlbWUsIGlzLWRhcmspO1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAvLyBDb2xvciBodWVzIGFyZSBiYXNlZCBvbiB0aGUgc3BlY3Mgd2hpY2ggYnJpZWZseSBzaG93IHRoZSBodWVzIHRoYXQgYXJlIGFwcGxpZWQgdG8gYSBzd2l0Y2guXG4gIC8vIFRoZSAyMDE4IHNwZWNzIG5vIGxvbmdlciBkZXNjcmliZSBob3cgZGFyayBzd2l0Y2hlcyBzaG91bGQgbG9vayBsaWtlLiBEdWUgdG8gdGhlIGxhY2sgb2ZcbiAgLy8gaW5mb3JtYXRpb24gZm9yIGRhcmsgdGhlbWVkIHN3aXRjaGVzLCB3ZSBwYXJ0aWFsbHkga2VlcCB0aGUgb2xkIGJlaGF2aW9yIHRoYXQgaXMgYmFzZWQgb25cbiAgLy8gdGhlIHByZXZpb3VzIHNwZWNpZmljYXRpb25zLiBGb3IgdGhlIGNoZWNrZWQgY29sb3Igd2UgYWx3YXlzIHVzZSB0aGUgYGRlZmF1bHRgIGh1ZSBiZWNhdXNlXG4gIC8vIHRoYXQgZm9sbG93cyBNREMgYW5kIGFsc28gbWFrZXMgaXQgZWFzaWVyIGZvciBwZW9wbGUgdG8gY3JlYXRlIGEgY3VzdG9tIHRoZW1lIHdpdGhvdXQgbmVlZGluZ1xuICAvLyB0byBzcGVjaWZ5IGVhY2ggaHVlIGluZGl2aWR1YWxseS5cbiAgJHRodW1iLXVuY2hlY2tlZC1odWU6IGlmKCRpcy1kYXJrLCA0MDAsIDUwKTtcbiAgJHRodW1iLWNoZWNrZWQtaHVlOiBkZWZhdWx0O1xuXG4gICRiYXItdW5jaGVja2VkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkKTtcbiAgJHJpcHBsZS11bmNoZWNrZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSk7XG5cbiAgLm1hdC1zbGlkZS10b2dnbGUge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJGFjY2VudCwgJHRodW1iLWNoZWNrZWQtaHVlKTtcblxuICAgICYubWF0LXByaW1hcnkge1xuICAgICAgQGluY2x1ZGUgX21hdC1zbGlkZS10b2dnbGUtY2hlY2tlZCgkcHJpbWFyeSwgJHRodW1iLWNoZWNrZWQtaHVlKTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtc2xpZGUtdG9nZ2xlLWNoZWNrZWQoJHdhcm4sICR0aHVtYi1jaGVja2VkLWh1ZSk7XG4gICAgfVxuXG4gICAgJjpub3QoLm1hdC1jaGVja2VkKSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICAgIC8vIFNldCBubyBvcGFjaXR5IGZvciB0aGUgcmlwcGxlcyBiZWNhdXNlIHRoZSByaXBwbGUgb3BhY2l0eSB3aWxsIGJlIGFkanVzdGVkIGR5bmFtaWNhbGx5XG4gICAgICAvLyBiYXNlZCBvbiB0aGUgdHlwZSBvZiBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZS10b2dnbGUgKGUuZy4gZm9yIGhvdmVyLCBmb2N1cylcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRyaXBwbGUtdW5jaGVja2VkLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgICBAaW5jbHVkZSBfbWF0LXRoZW1lLWVsZXZhdGlvbigxLCAkdGhlbWUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbWF0LWdyZXksICR0aHVtYi11bmNoZWNrZWQtaHVlKTtcbiAgfVxuXG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhci11bmNoZWNrZWQtY29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC1zbGlkZS10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gX21hdC1zbGlkZXItaW5uZXItY29udGVudC10aGVtZSgkcGFsZXR0ZSkge1xuICAubWF0LXNsaWRlci10cmFjay1maWxsLFxuICAubWF0LXNsaWRlci10aHVtYixcbiAgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSk7XG4gIH1cblxuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRwYWxldHRlLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNsaWRlci10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgJG1hdC1zbGlkZXItb2ZmLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1vZmYtZm9jdXNlZC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItb2ZmLWFjdGl2ZSk7XG4gICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNsaWRlci1vZmYpO1xuICAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzbGlkZXItbWluKTtcbiAgJG1hdC1zbGlkZXItbGFiZWxlZC1taW4tdmFsdWUtdGh1bWItbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2xpZGVyLW9mZik7XG4gICRtYXQtc2xpZGVyLWZvY3VzLXJpbmctY29sb3I6IG1hdC1jb2xvcigkYWNjZW50LCBkZWZhdWx0LCAwLjIpO1xuICAkbWF0LXNsaWRlci1mb2N1cy1yaW5nLW1pbi12YWx1ZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjEyKTtcbiAgJG1hdC1zbGlkZXItdGljay1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBiYXNlLCAwLjcpO1xuICAkbWF0LXNsaWRlci10aWNrLXNpemU6IDJweDtcblxuICAubWF0LXNsaWRlci10cmFjay1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gIH1cblxuICAubWF0LXByaW1hcnkge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHByaW1hcnkpO1xuICB9XG5cbiAgLm1hdC1hY2NlbnQge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJGFjY2VudCk7XG4gIH1cblxuICAubWF0LXdhcm4ge1xuICAgIEBpbmNsdWRlIF9tYXQtc2xpZGVyLWlubmVyLWNvbnRlbnQtdGhlbWUoJHdhcm4pO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtc2xpZGVyOmhvdmVyLFxuICAuY2RrLWZvY3VzZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItb2ZmLWZvY3VzZWQtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItZGlzYWJsZWQge1xuICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4gICAgLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbiAgICAubWF0LXNsaWRlci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1kaXNhYmxlZC1jb2xvcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAubWF0LXNsaWRlci1taW4tdmFsdWUge1xuICAgIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG1hdC1zbGlkZXItZm9jdXMtcmluZy1taW4tdmFsdWUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcge1xuICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYXQtc2xpZGVyLWxhYmVsZWQtbWluLXZhbHVlLXRodW1iLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmNkay1mb2N1c2VkIHtcbiAgICAgICAgLm1hdC1zbGlkZXItdGh1bWIsXG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWF0LXNsaWRlci1sYWJlbGVkLW1pbi12YWx1ZS10aHVtYi1sYWJlbC1jb2xvcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICY6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpIHtcbiAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkbWF0LXNsaWRlci1vZmYtY29sb3I7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyLFxuICAgICAgJi5jZGstZm9jdXNlZCB7XG4gICAgICAgIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLW9mZi1mb2N1c2VkLWNvbG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRodW1iIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLWRpc2FibGVkLWNvbG9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zbGlkZXItaGFzLXRpY2tzIC5tYXQtc2xpZGVyLXdyYXBwZXI6OmFmdGVyIHtcbiAgICBib3JkZXItY29sb3I6ICRtYXQtc2xpZGVyLXRpY2stY29sb3I7XG4gIH1cblxuICAubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICAgIC8vIEZpcmVmb3ggZG9lc24ndCBkcmF3IHRoZSBncmFkaWVudCBjb3JyZWN0bHkgd2l0aCAndG8gcmlnaHQnXG4gICAgLy8gKHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzE0MzE5KS5cbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LXJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoMC4wMDAxZGVnLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgLm1hdC1zbGlkZXItdmVydGljYWwgLm1hdC1zbGlkZXItdGlja3Mge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAkbWF0LXNsaWRlci10aWNrLWNvbG9yLFxuICAgICAgICAkbWF0LXNsaWRlci10aWNrLWNvbG9yICRtYXQtc2xpZGVyLXRpY2stc2l6ZSwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtc2xpZGVyLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXNsaWRlci10aHVtYi1sYWJlbC10ZXh0IHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgY2FwdGlvbik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cbkBtaXhpbiBtYXQtc3RlcHBlci10aGVtZSgkdGhlbWUpIHtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcblxuICAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCxcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgaG92ZXIpO1xuICAgIH1cblxuICAgIC8vIE9uIHRvdWNoIGRldmljZXMgdGhlIDpob3ZlciBzdGF0ZSB3aWxsIGxpbmdlciBvbiB0aGUgZWxlbWVudCBhZnRlciBhIHRhcC5cbiAgICAvLyBSZXNldCBpdCB2aWEgYEBtZWRpYWAgYWZ0ZXIgdGhlIGRlY2xhcmF0aW9uLCBiZWNhdXNlIHRoZSBtZWRpYSBxdWVyeSBpc24ndFxuICAgIC8vIHN1cHBvcnRlZCBieSBhbGwgYnJvd3NlcnMgeWV0LlxuICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbCxcbiAgICAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBzZWNvbmRhcnktdGV4dCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24ge1xuICAgICAgLy8gVE9ETyhqb3NlcGhwZXJyb3R0KTogVXBkYXRlIHRvIHVzaW5nIGEgY29ycmVjdGVkIGRpc2FibGVkLXRleHQgY29udHJhc3RcbiAgICAgIC8vIGluc3RlYWQgb2Ygc2Vjb25kYXJ5LXRleHQuXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnksIGRlZmF1bHQtY29udHJhc3QpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkLFxuICAgIC5tYXQtc3RlcC1pY29uLXN0YXRlLWRvbmUsXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkcHJpbWFyeSwgZGVmYXVsdC1jb250cmFzdCk7XG4gICAgfVxuXG4gICAgLm1hdC1zdGVwLWljb24tc3RhdGUtZXJyb3Ige1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG5cbiAgICAubWF0LXN0ZXAtbGFiZWwubWF0LXN0ZXAtbGFiZWwtYWN0aXZlIHtcbiAgICAgIGNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICAgIH1cblxuICAgIC5tYXQtc3RlcC1sYWJlbC5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gICAgICBjb2xvcjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgICB9XG4gIH1cblxuICAubWF0LXN0ZXBwZXItaG9yaXpvbnRhbCwgLm1hdC1zdGVwcGVyLXZlcnRpY2FsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJGJhY2tncm91bmQsIGNhcmQpO1xuICB9XG5cbiAgLm1hdC1zdGVwcGVyLXZlcnRpY2FsLWxpbmU6OmJlZm9yZSB7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cblxuICAubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbiAgLm1hdC1ob3Jpem9udGFsLXN0ZXBwZXItaGVhZGVyOjphZnRlcixcbiAgLm1hdC1zdGVwcGVyLWhvcml6b250YWwtbGluZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwge1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgICAgIHdlaWdodDogbWF0LWZvbnQtd2VpZ2h0KCRjb25maWcsIGJvZHktMSk7XG4gICAgfTtcbiAgfVxuXG4gIC5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAubWF0LXN0ZXAtbGFiZWwtZXJyb3Ige1xuICAgIGZvbnQtc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBib2R5LTIpO1xuICB9XG5cbiAgLm1hdC1zdGVwLWxhYmVsLXNlbGVjdGVkIHtcbiAgICBmb250OiB7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMik7XG4gICAgICB3ZWlnaHQ6IG1hdC1mb250LXdlaWdodCgkY29uZmlnLCBib2R5LTIpO1xuICAgIH07XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSkge1xuICAkYmFja2dyb3VuZDogbWFwLWdldCgkdGhlbWUsIGJhY2tncm91bmQpO1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICAgICR0YWJsZS1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gICAgJHRleHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQpO1xuXG4gICAgLy8gQmVjYXVzZSB0aGUgYXJyb3cgaXMgbWFkZSB1cCBvZiBtdWx0aXBsZSBlbGVtZW50cyB0aGF0IGFyZSBzdGFja2VkIG9uIHRvcCBvZiBlYWNoIG90aGVyLFxuICAgIC8vIHdlIGNhbid0IHVzZSB0aGUgc2VtaS10cmFzcGFyZW50IGNvbG9yIGZyb20gdGhlIHRoZW1lIGRpcmVjdGx5LiBJZiB0aGUgdmFsdWUgaXMgYSBjb2xvclxuICAgIC8vICp0eXBlKiwgd2UgY29udmVydCBpdCBpbnRvIGEgc29saWQgY29sb3IgYnkgdGFraW5nIHRoZSBvcGFjaXR5IGZyb20gdGhlIHJnYmEgdmFsdWUgYW5kXG4gICAgLy8gdXNpbmcgdGhlIHZhbHVlIHRvIGRldGVybWluZSB0aGUgcGVyY2VudGFnZSBvZiB0aGUgYmFja2dyb3VuZCB0byBwdXQgaW50byBmb3JlZ3JvdW5kXG4gICAgLy8gd2hlbiBtaXhpbmcgdGhlIGNvbG9ycyB0b2dldGhlci4gT3RoZXJ3aXNlLCBpZiBpdCByZXNvbHZlcyB0byBzb21ldGhpbmcgZGlmZmVyZW50XG4gICAgLy8gKGUuZy4gaXQgcmVzb2x2ZXMgdG8gYSBDU1MgdmFyaWFibGUpLCB3ZSB1c2UgdGhlIGNvbG9yIGRpcmVjdGx5LlxuICAgIEBpZiAodHlwZS1vZigkdGFibGUtYmFja2dyb3VuZCkgPT0gY29sb3IgYW5kIHR5cGUtb2YoJHRleHQtY29sb3IpID09IGNvbG9yKSB7XG4gICAgICAkdGV4dC1vcGFjaXR5OiBvcGFjaXR5KCR0ZXh0LWNvbG9yKTtcbiAgICAgIGNvbG9yOiBtaXgoJHRhYmxlLWJhY2tncm91bmQsIHJnYmEoJHRleHQtY29sb3IsIDEpLCAoMSAtICR0ZXh0LW9wYWNpdHkpICogMTAwJSk7XG4gICAgfVxuICAgIEBlbHNlIHtcbiAgICAgIGNvbG9yOiAkdGV4dC1jb2xvcjtcbiAgICB9XG4gIH1cbn1cblxuQG1peGluIG1hdC1zb3J0LXR5cG9ncmFwaHkoJGNvbmZpZykgeyB9XG5cblxuXG5cblxuQG1peGluIG1hdC10YWJzLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcbiAgJGhlYWRlci1ib3JkZXI6IDFweCBzb2xpZCBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuXG4gIC5tYXQtdGFiLW5hdi1iYXIsXG4gIC5tYXQtdGFiLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogJGhlYWRlci1ib3JkZXI7XG4gIH1cblxuICAubWF0LXRhYi1ncm91cC1pbnZlcnRlZC1oZWFkZXIge1xuICAgIC5tYXQtdGFiLW5hdi1iYXIsXG4gICAgLm1hdC10YWItaGVhZGVyIHtcbiAgICAgIGJvcmRlci10b3A6ICRoZWFkZXItYm9yZGVyO1xuICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHRleHQpO1xuICB9XG5cbiAgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gICAgYm9yZGVyLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICB9XG5cbiAgLy8gUmVtb3ZlIGhlYWRlciBib3JkZXIgd2hlbiB0aGVyZSBpcyBhIGJhY2tncm91bmQgY29sb3JcbiAgLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4gIC5tYXQtdGFiLW5hdi1iYXJbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG5cbiAgLm1hdC10YWItZ3JvdXAsIC5tYXQtdGFiLW5hdi1iYXIge1xuICAgICR0aGVtZS1jb2xvcnM6IChcbiAgICAgIHByaW1hcnk6ICRwcmltYXJ5LFxuICAgICAgYWNjZW50OiAkYWNjZW50LFxuICAgICAgd2FybjogJHdhcm5cbiAgICApO1xuXG4gICAgQGVhY2ggJG5hbWUsICRjb2xvciBpbiAkdGhlbWUtY29sb3JzIHtcbiAgICAgIC8vIFNldCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZiB0aGUgdGFic1xuICAgICAgJi5tYXQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yKTtcblxuICAgICAgICAvLyBPdmVycmlkZSBpbmsgYmFyIHdoZW4gYmFja2dyb3VuZCBjb2xvciBpcyB0aGUgc2FtZVxuICAgICAgICAmLm1hdC1iYWNrZ3JvdW5kLSN7JG5hbWV9IHtcbiAgICAgICAgICBAaW5jbHVkZSBfbWF0LWluay1iYXIoJGNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkY29sb3IgaW4gJHRoZW1lLWNvbG9ycyB7XG4gICAgICAvLyBTZXQgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgdGFicyBhbmQgb3ZlcnJpZGUgZm9jdXMgY29sb3JcbiAgICAgICYubWF0LWJhY2tncm91bmQtI3skbmFtZX0ge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYi1sYWJlbC1mb2N1cygkY29sb3IpO1xuICAgICAgICBAaW5jbHVkZSBfbWF0LXRhYnMtYmFja2dyb3VuZCgkY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gX21hdC1pbmstYmFyKCRjb2xvciwgJGh1ZTogZGVmYXVsdCkge1xuICAubWF0LWluay1iYXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkY29sb3IsICRodWUpO1xuICB9XG59XG5cbkBtaXhpbiBfbWF0LXRhYi1sYWJlbC1mb2N1cygkdGFiLWZvY3VzLWNvbG9yKSB7XG4gIC5tYXQtdGFiLWxhYmVsLFxuICAubWF0LXRhYi1saW5rIHtcbiAgICAmLmNkay1rZXlib2FyZC1mb2N1c2VkLFxuICAgICYuY2RrLXByb2dyYW0tZm9jdXNlZCB7XG4gICAgICAmOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJHRhYi1mb2N1cy1jb2xvciwgbGlnaHRlciwgMC4zKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1peGluIF9tYXQtdGFicy1iYWNrZ3JvdW5kKCRiYWNrZ3JvdW5kLWNvbG9yKSB7XG4gIC8vIFNldCBiYWNrZ3JvdW5kIGNvbG9yIGZvciB0aGUgdGFiIGdyb3VwXG4gIC5tYXQtdGFiLWhlYWRlciwgLm1hdC10YWItbGlua3Mge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvcik7XG4gIH1cblxuICAvLyBTZXQgbGFiZWxzIHRvIGNvbnRyYXN0IGFnYWluc3QgYmFja2dyb3VuZFxuICAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItbGluayB7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCk7XG5cbiAgICAmLm1hdC10YWItZGlzYWJsZWQge1xuICAgICAgY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC40KTtcbiAgICB9XG4gIH1cblxuICAvLyBTZXQgcGFnaW5hdGlvbiBjaGV2cm9ucyB0byBjb250cmFzdCBiYWNrZ3JvdW5kXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0KTtcbiAgfVxuXG4gIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICAgIGJvcmRlci1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLWNvbG9yLCBkZWZhdWx0LWNvbnRyYXN0LCAwLjQpO1xuICB9XG5cbiAgLy8gU2V0IHJpcHBsZXMgY29sb3IgdG8gYmUgdGhlIGNvbnRyYXN0IGNvbG9yIG9mIHRoZSBuZXcgYmFja2dyb3VuZC4gT3RoZXJ3aXNlIHRoZSByaXBwbGVcbiAgLy8gY29sb3Igd2lsbCBiZSBiYXNlZCBvbiB0aGUgYXBwIGJhY2tncm91bmQgY29sb3IuXG4gIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkYmFja2dyb3VuZC1jb2xvciwgZGVmYXVsdC1jb250cmFzdCwgMC4xMik7XG4gIH1cbn1cblxuQG1peGluIG1hdC10YWJzLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRhYi1ncm91cCB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgc2l6ZTogbWF0LWZvbnQtc2l6ZSgkY29uZmlnLCBidXR0b24pO1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItY29sb3IoJHBhbGV0dGUpIHtcbiAgYmFja2dyb3VuZDogbWF0LWNvbG9yKCRwYWxldHRlKTtcbiAgY29sb3I6IG1hdC1jb2xvcigkcGFsZXR0ZSwgZGVmYXVsdC1jb250cmFzdCk7XG59XG5cbkBtaXhpbiBfbWF0LXRvb2xiYXItZm9ybS1maWVsZC1vdmVycmlkZXMge1xuICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lLFxuICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXNlbGVjdC12YWx1ZSxcbiAgLm1hdC1zZWxlY3QtYXJyb3csXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAubWF0LWlucHV0LWVsZW1lbnQge1xuICAgIGNhcmV0LWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSkge1xuICAkcHJpbWFyeTogbWFwLWdldCgkdGhlbWUsIHByaW1hcnkpO1xuICAkYWNjZW50OiBtYXAtZ2V0KCR0aGVtZSwgYWNjZW50KTtcbiAgJHdhcm46IG1hcC1nZXQoJHRoZW1lLCB3YXJuKTtcbiAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgJGZvcmVncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBmb3JlZ3JvdW5kKTtcblxuICAubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6IG1hdC1jb2xvcigkYmFja2dyb3VuZCwgYXBwLWJhcik7XG4gICAgY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgdGV4dCk7XG5cbiAgICAmLm1hdC1wcmltYXJ5IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJi5tYXQtYWNjZW50IHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkYWNjZW50KTtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIHtcbiAgICAgIEBpbmNsdWRlIF9tYXQtdG9vbGJhci1jb2xvcigkd2Fybik7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgX21hdC10b29sYmFyLWZvcm0tZmllbGQtb3ZlcnJpZGVzO1xuICB9XG59XG5cbkBtaXhpbiBtYXQtdG9vbGJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC10b29sYmFyLFxuICAubWF0LXRvb2xiYXIgaDEsXG4gIC5tYXQtdG9vbGJhciBoMixcbiAgLm1hdC10b29sYmFyIGgzLFxuICAubWF0LXRvb2xiYXIgaDQsXG4gIC5tYXQtdG9vbGJhciBoNSxcbiAgLm1hdC10b29sYmFyIGg2IHtcbiAgICBAaW5jbHVkZSBtYXQtdHlwb2dyYXBoeS1sZXZlbC10by1zdHlsZXMoJGNvbmZpZywgdGl0bGUpO1xuICAgIG1hcmdpbjogMDtcbiAgfVxufVxuXG5cblxuXG5cbiRtYXQtdG9vbHRpcC10YXJnZXQtaGVpZ2h0OiAyMnB4O1xuJG1hdC10b29sdGlwLWZvbnQtc2l6ZTogMTBweDtcbiRtYXQtdG9vbHRpcC12ZXJ0aWNhbC1wYWRkaW5nOiAoJG1hdC10b29sdGlwLXRhcmdldC1oZWlnaHQgLSAkbWF0LXRvb2x0aXAtZm9udC1zaXplKSAvIDI7XG5cbiRtYXQtdG9vbHRpcC1oYW5kc2V0LXRhcmdldC1oZWlnaHQ6IDMwcHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU6IDE0cHg7XG4kbWF0LXRvb2x0aXAtaGFuZHNldC12ZXJ0aWNhbC1wYWRkaW5nOlxuICAgICgkbWF0LXRvb2x0aXAtaGFuZHNldC10YXJnZXQtaGVpZ2h0IC0gJG1hdC10b29sdGlwLWhhbmRzZXQtZm9udC1zaXplKSAvIDI7XG5cbkBtaXhpbiBtYXQtdG9vbHRpcC10aGVtZSgkdGhlbWUpIHtcbiAgLm1hdC10b29sdGlwIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJG1hdC1ncmV5LCA3MDAsIDAuOSk7XG4gIH1cbn1cblxuQG1peGluIG1hdC10b29sdGlwLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAubWF0LXRvb2x0aXAge1xuICAgIGZvbnQtZmFtaWx5OiBtYXQtZm9udC1mYW1pbHkoJGNvbmZpZyk7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtZm9udC1zaXplO1xuICAgIHBhZGRpbmctdG9wOiAkbWF0LXRvb2x0aXAtdmVydGljYWwtcGFkZGluZztcbiAgICBwYWRkaW5nLWJvdHRvbTogJG1hdC10b29sdGlwLXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cblxuICAubWF0LXRvb2x0aXAtaGFuZHNldCB7XG4gICAgZm9udC1zaXplOiAkbWF0LXRvb2x0aXAtaGFuZHNldC1mb250LXNpemU7XG4gICAgcGFkZGluZy10b3A6ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gICAgcGFkZGluZy1ib3R0b206ICRtYXQtdG9vbHRpcC1oYW5kc2V0LXZlcnRpY2FsLXBhZGRpbmc7XG4gIH1cbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10aGVtZSgkdGhlbWUpIHtcbiAgJGlzLWRhcmstdGhlbWU6IG1hcC1nZXQoJHRoZW1lLCBpcy1kYXJrKTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG5cbiAgLm1hdC1zbmFjay1iYXItY29udGFpbmVyIHtcbiAgICAvLyBVc2UgdGhlIHByaW1hcnkgdGV4dCBvbiB0aGUgZGFyayB0aGVtZSwgZXZlbiB0aG91Z2ggdGhlIGxpZ2h0ZXIgb25lIHVzZXNcbiAgICAvLyBhIHNlY29uZGFyeSwgYmVjYXVzZSB0aGUgY29udHJhc3Qgb24gdGhlIGxpZ2h0IHByaW1hcnkgdGV4dCBpcyBwb29yLlxuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgJGRhcmstcHJpbWFyeS10ZXh0LCAkbGlnaHQtc2Vjb25kYXJ5LXRleHQpO1xuICAgIGJhY2tncm91bmQ6IGlmKCRpcy1kYXJrLXRoZW1lLCBtYXAtZ2V0KCRtYXQtZ3JleSwgNTApLCAjMzIzMjMyKTtcblxuICAgIEBpbmNsdWRlIF9tYXQtdGhlbWUtZWxldmF0aW9uKDYsICR0aGVtZSk7XG4gIH1cblxuICAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICAgIGNvbG9yOiBpZigkaXMtZGFyay10aGVtZSwgaW5oZXJpdCwgbWF0LWNvbG9yKCRhY2NlbnQpKTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICAgIGZvbnQ6IHtcbiAgICAgIGZhbWlseTogbWF0LWZvbnQtZmFtaWx5KCRjb25maWcsIGJvZHktMSk7XG4gICAgICBzaXplOiBtYXQtZm9udC1zaXplKCRjb25maWcsIGJvZHktMSk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBmb250OiB7XG4gICAgICBmYW1pbHk6IGluaGVyaXQ7XG4gICAgICBzaXplOiBpbmhlcml0O1xuICAgICAgd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYnV0dG9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBmaWxsIGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXRoZW1lKCR0aGVtZSkge1xuICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuICAkaXMtZGFyay10aGVtZTogbWFwLWdldCgkdGhlbWUsIGlzLWRhcmspO1xuXG4gICRmaWxsLWJhY2tncm91bmQ6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgYmFzZSwgaWYoJGlzLWRhcmstdGhlbWUsIDAuMSwgMC4wNCkpO1xuICAkZmlsbC1kaXNhYmxlZC1iYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGJhc2UsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjA1LCAwLjAyKSk7XG4gICR1bmRlcmxpbmUtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlciwgaWYoJGlzLWRhcmstdGhlbWUsIDAuNSwgMC40MikpO1xuICAkbGFiZWwtZGlzYWJsZWQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGlzYWJsZWQtdGV4dCk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGZpbGwtYmFja2dyb3VuZDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRmaWxsLWRpc2FibGVkLWJhY2tncm91bmQ7XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1maWxsLWRlZHVwZSlcbiAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIHdpZHRoOiAxMDAlIC8gJGZvbnQtc2NhbGUgKyAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWZpbGwtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZmlsbC1kZWR1cGUgKyAwLjAwMDAxICFnbG9iYWw7XG59XG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZykge1xuICAvLyBUaGUgdW5pdC1sZXNzIGxpbmUtaGVpZ2h0IGZyb20gdGhlIGZvbnQgY29uZmlnLlxuICAkbGluZS1oZWlnaHQ6IG1hdC1saW5lLWhlaWdodCgkY29uZmlnLCBpbnB1dCk7XG4gIC8vIFRoZSBhbW91bnQgdG8gc2NhbGUgdGhlIGZvbnQgZm9yIHRoZSBmbG9hdGluZyBsYWJlbCBhbmQgc3Vic2NyaXB0LlxuICAkc3Vic2NyaXB0LWZvbnQtc2NhbGU6IDAuNzU7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRvcCBvZiB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLXRvcDogMC4yNWVtO1xuICAvLyBUaGUgcGFkZGluZyBiZWxvdyB0aGUgaW5maXguXG4gICRpbmZpeC1wYWRkaW5nLWJvdHRvbTogMC43NWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgZmlsbCBhcHBlYXJhbmNlLlxuICAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuNWVtO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwge1xuICAgIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XG4gICAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZy10b3AgMCAkaW5maXgtcGFkZGluZy1ib3R0b20gMDtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nLXRvcDtcbiAgICAgIG1hcmdpbi10b3A6ICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0O1xuICAgIH1cblxuICAgICYubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyOmZvY3VzICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWZpbGwtbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZy10b3AgKyAkZmlsbC1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtZmlsbC1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLXRvcCArICRmaWxsLWFwcGVhcmFuY2UtbGFiZWwtb2Zmc2V0LFxuICAgICAgICAgICAgICAgICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgbGVnYWN5IGFwcGVhcmFuY2Ugb2YgdGhlIGZvcm0tZmllbGQuXG5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIHNlY29uZGFyeS10ZXh0KTtcbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWhpbnQge1xuICAgICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtY29sb3I7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgICAgIEBpbmNsdWRlIG1hdC1jb250cm9sLWRpc2FibGVkLXVuZGVybGluZSgkdW5kZXJsaW5lLWNvbG9yKTtcbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBXZSB1c2UgcGVyc3BlY3RpdmUgdG8gZml4IHRoZSB0ZXh0IGJsdXJyaW5lc3MgYXMgZGVzY3JpYmVkIGhlcmU6XG4gIC8vIGh0dHA6Ly93d3cudXNlcmFnZW50bWFuLmNvbS9ibG9nLzIwMTQvMDUvMDQvZml4aW5nLXR5cG9ncmFwaHktaW5zaWRlLW9mLTItZC1jc3MtdHJhbnNmb3Jtcy9cbiAgLy8gVGhpcyByZXN1bHRzIGluIGEgc21hbGwgaml0dGVyIGFmdGVyIHRoZSBsYWJlbCBmbG9hdHMgb24gRmlyZWZveCwgd2hpY2ggdGhlXG4gIC8vIHRyYW5zbGF0ZVogZml4ZXMuXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZykgc2NhbGUoJGZvbnQtc2NhbGUpIHBlcnNwZWN0aXZlKDEwMHB4KVxuICB0cmFuc2xhdGVaKDAuMDAxcHggKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLSRpbmZpeC1tYXJnaW4tdG9wIC0gJGluZml4LXBhZGRpbmcgKyAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSlcbiAgICAgICAgICAgICAgICAgIHNjYWxlKCRmb250LXNjYWxlKTtcblxuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU7XG5cbiAgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGU6ICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG4vLyBTYW1lIGFzIG1peGluIGFib3ZlLCBidXQgb21pdHMgdGhlIHRyYW5zbGF0ZVogZm9yIHByaW50aW5nIHB1cnBvc2VzLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoJGZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCkge1xuICAvLyBUaGlzIHJlc3VsdHMgaW4gYSBzbWFsbCBqaXR0ZXIgYWZ0ZXIgdGhlIGxhYmVsIGZsb2F0cyBvbiBGaXJlZm94LCB3aGljaCB0aGVcbiAgLy8gdHJhbnNsYXRlWiBmaXhlcy5cbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0kaW5maXgtbWFyZ2luLXRvcCAtICRpbmZpeC1wYWRkaW5nICsgJG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS1kZWR1cGUpXG4gICAgICAgICAgICAgICAgICBzY2FsZSgkZm9udC1zY2FsZSk7XG4gIC8vIFRoZSB0cmlja3MgYWJvdmUgdXNlZCB0byBzbW9vdGggb3V0IHRoZSBhbmltYXRpb24gb24gY2hyb21lIGFuZCBmaXJlZm94IGFjdHVhbGx5IG1ha2UgdGhpbmdzXG4gIC8vIHdvcnNlIG9uIElFLCBzbyB3ZSBkb24ndCBpbmNsdWRlIHRoZW0gaW4gdGhlIElFIHZlcnNpb24uXG4gICRtYXQtZm9ybS1maWVsZC1sZWdhY3ktZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtbGVnYWN5LWRlZHVwZSArIDAuMDAwMDEgIWdsb2JhbDtcbn1cblxuQG1peGluIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IG9mIHNwYWNlIGJldHdlZW4gdGhlIHRvcCBvZiB0aGUgbGluZSBhbmQgdGhlIHRvcCBvZiB0aGUgYWN0dWFsIHRleHRcbiAgLy8gKGFzIGEgZnJhY3Rpb24gb2YgdGhlIGZvbnQtc2l6ZSkuXG4gICRsaW5lLXNwYWNpbmc6ICgkbGluZS1oZWlnaHQgLSAxKSAvIDI7XG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUsIGJ1dCBzZWVtIHRvIG1lYXN1cmUgZnJvbSB0aGUgZWRnZVxuICAvLyBvZiB0aGUgdGV4dCBpdHNlbGYsIG5vdCB0aGUgZWRnZSBvZiB0aGUgbGluZTsgdGhlcmVmb3JlIHdlIHN1YnRyYWN0IG9mZiB0aGUgbGluZSBzcGFjaW5nLlxuICAkaW5maXgtcGFkZGluZzogMC41ZW0gLSAkbGluZS1zcGFjaW5nO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS4gV2UgYWdhaW4gbmVlZCB0byBzdWJ0cmFjdCBvZmYgdGhlIGxpbmUgc3BhY2luZyBzaW5jZSB0aGUgbW9ja3MgbWVhc3VyZSB0byB0aGUgZWRnZSBvZiB0aGVcbiAgLy8gdGV4dCwgbm90IHRoZSAgZWRnZSBvZiB0aGUgbGluZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZSAtICgkbGluZS1zcGFjaW5nICogMik7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kge1xuICAgIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkd3JhcHBlci1wYWRkaW5nLWJvdHRvbTtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmcoXG4gICAgICAgICAgICAgICAgJHN1YnNjcmlwdC1mb250LXNjYWxlLCAkaW5maXgtcGFkZGluZywgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuXG4gICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgIC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtbGVnYWN5LWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgICAgLy8gc28gd2UgbW92ZSBpdCB1cCBieSB0aGUgcGFkZGluZyBhbW91bnQuXG4gICAgICBib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gICAgICBtYXJnaW4tdG9wOiAkc3Vic2NyaXB0LW1hcmdpbi10b3A7XG5cbiAgICAgIC8vIFdlIHdhbnQgdGhlIHN1YnNjcmlwdCB0byBzdGFydCBhdCB0aGUgZW5kIG9mIHRoZSBjb250ZW50IGJveCwgbm90IHRoZSBwYWRkaW5nIGJveCxcbiAgICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICAgIHRvcDogY2FsYygxMDAlIC0gI3skd3JhcHBlci1wYWRkaW5nLWJvdHRvbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZX0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRyYW5zbGF0ZVogY2F1c2VzIHRoZSBsYWJlbCB0byBub3QgYXBwZWFyIHdoaWxlIHByaW50aW5nLCBzbyB3ZSBvdmVycmlkZSBpdCB0byBub3RcbiAgLy8gYXBwbHkgdHJhbnNsYXRlWiB3aGlsZSBwcmludGluZ1xuICBAbWVkaWEgcHJpbnQge1xuICAgIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAgICYubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbiAgICAgICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBAYnJlYWtpbmctY2hhbmdlIDguMC4wIHdpbGwgcmVseSBvbiBBdXRvZmlsbE1vbml0b3IgaW5zdGVhZC5cbiAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxlZ2FjeS1sYWJlbC1mbG9hdGluZy1wcmludChcbiAgICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgICAvLyAodXNlZCBhcyBhIHB1cmUgQ1NTIHN0YW5kLWluIGZvciBtYXQtZm9ybS1maWVsZC1zaG91bGQtZmxvYXQpLlxuICAgICAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1sZWdhY3ktbGFiZWwtZmxvYXRpbmctcHJpbnQoXG4gICAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5cblxuXG5cblxuLy8gVGhlbWUgc3R5bGVzIHRoYXQgb25seSBhcHBseSB0byB0aGUgb3V0bGluZSBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJGxhYmVsLWRpc2FibGVkLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpc2FibGVkLXRleHQpO1xuICAkb3V0bGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4zLCAwLjEyKSk7XG4gICRvdXRsaW5lLWNvbG9yLWhvdmVyOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICRvdXRsaW5lLWNvbG9yLXByaW1hcnk6IG1hdC1jb2xvcigkcHJpbWFyeSk7XG4gICRvdXRsaW5lLWNvbG9yLWFjY2VudDogbWF0LWNvbG9yKCRhY2NlbnQpO1xuICAkb3V0bGluZS1jb2xvci13YXJuOiBtYXQtY29sb3IoJHdhcm4pO1xuICAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC4xNSwgMC4wNikpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUge1xuICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItaG92ZXI7XG4gICAgfVxuXG4gICAgJi5tYXQtZm9jdXNlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1wcmltYXJ5O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICAgICAgICBjb2xvcjogJG91dGxpbmUtY29sb3ItYWNjZW50O1xuICAgICAgfVxuXG4gICAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhc3MgcmVwZWF0ZWQgc28gdGhhdCBydWxlIGlzIHNwZWNpZmljIGVub3VnaCB0byBvdmVycmlkZSBmb2N1c2VkIGFjY2VudCBjb2xvciBjYXNlLlxuICAgICYubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAgIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgICAgICAgY29sb3I6ICRvdXRsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBjb2xvcjogJGxhYmVsLWRpc2FibGVkLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gICAgICAgIGNvbG9yOiAkb3V0bGluZS1jb2xvci1kaXNhYmxlZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gVXNlZCB0byBtYWtlIGluc3RhbmNlcyBvZiB0aGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nIG1peGluIG5lZ2xpZ2libHkgZGlmZmVyZW50LFxuLy8gYW5kIHByZXZlbnQgR29vZ2xlJ3MgQ1NTIE9wdGltaXplciBmcm9tIGNvbGxhcHNpbmcgdGhlIGRlY2xhcmF0aW9ucy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzb21lXG4vLyBvZiB0aGUgc2VsZWN0b3JzIGNvbnRhaW4gcHNldWRvLWNsYXNzZXMgbm90IHJlY29nbml6ZWQgaW4gYWxsIGJyb3dzZXJzLiBJZiBhIGJyb3dzZXIgZW5jb3VudGVyc1xuLy8gYW4gdW5rbm93biBwc2V1ZG8tY2xhc3MgaXQgd2lsbCBkaXNjYXJkIHRoZSBlbnRpcmUgcnVsZSBzZXQuXG4kbWF0LWZvcm0tZmllbGQtb3V0bGluZS1kZWR1cGU6IDA7XG5cbi8vIEFwcGxpZXMgYSBmbG9hdGluZyBsYWJlbCBhYm92ZSB0aGUgZm9ybSBmaWVsZCBjb250cm9sIGl0c2VsZi5cbkBtaXhpbiBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZSlcbiAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlO1xuXG4gICRtYXQtZm9ybS1maWVsZC1vdXRsaW5lLWRlZHVwZTogJG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtb3V0bGluZS10eXBvZ3JhcGh5KCRjb25maWcpIHtcbiAgLy8gVGhlIHVuaXQtbGVzcyBsaW5lLWhlaWdodCBmcm9tIHRoZSBmb250IGNvbmZpZy5cbiAgJGxpbmUtaGVpZ2h0OiBtYXQtbGluZS1oZWlnaHQoJGNvbmZpZywgaW5wdXQpO1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgcGFkZGluZyBhYm92ZSBhbmQgYmVsb3cgdGhlIGluZml4LlxuICAkaW5maXgtcGFkZGluZzogMWVtO1xuICAvLyBUaGUgbWFyZ2luIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtaW5maXggdG8gcmVzZXJ2ZSBzcGFjZSBmb3IgdGhlIGZsb2F0aW5nIGxhYmVsLlxuICAkaW5maXgtbWFyZ2luLXRvcDogMWVtICogJGxpbmUtaGVpZ2h0ICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgc3BhY2UgYmV0d2VlbiB0aGUgYm90dG9tIG9mIHRoZSAubWF0LWZvcm0tZmllbGQtZmxleCBhcmVhIGFuZCB0aGUgc3Vic2NyaXB0IHdyYXBwZXIuXG4gIC8vIE1vY2tzIHNob3cgaGFsZiBvZiB0aGUgdGV4dCBzaXplLCBidXQgdGhpcyBtYXJnaW4gaXMgYXBwbGllZCB0byBhbiBlbGVtZW50IHdpdGggdGhlIHN1YnNjcmlwdFxuICAvLyB0ZXh0IGZvbnQgc2l6ZSwgc28gd2UgbmVlZCB0byBkaXZpZGUgYnkgdGhlIHNjYWxlIGZhY3RvciB0byBtYWtlIGl0IGhhbGYgb2YgdGhlIG9yaWdpbmFsIHRleHRcbiAgLy8gc2l6ZS5cbiAgJHN1YnNjcmlwdC1tYXJnaW4tdG9wOiAwLjVlbSAvICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gVGhlIHBhZGRpbmcgYXBwbGllZCB0byB0aGUgZm9ybS1maWVsZC13cmFwcGVyIHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBzdWJzY3JpcHQsIHNpbmNlIGl0J3NcbiAgLy8gYWJzb2x1dGVseSBwb3NpdGlvbmVkLiBUaGlzIGlzIGEgY29tYmluYXRpb24gb2YgdGhlIHN1YnNjcmlwdCdzIG1hcmdpbiBhbmQgbGluZS1oZWlnaHQsIGJ1dCB3ZVxuICAvLyBuZWVkIHRvIG11bHRpcGx5IGJ5IHRoZSBzdWJzY3JpcHQgZm9udCBzY2FsZSBmYWN0b3Igc2luY2UgdGhlIHdyYXBwZXIgaGFzIGEgbGFyZ2VyIGZvbnQgc2l6ZS5cbiAgJHdyYXBwZXItcGFkZGluZy1ib3R0b206ICgkc3Vic2NyaXB0LW1hcmdpbi10b3AgKyAkbGluZS1oZWlnaHQpICogJHN1YnNjcmlwdC1mb250LXNjYWxlO1xuICAvLyBUaGUgYW1vdW50IHdlIG9mZnNldCB0aGUgbGFiZWwgZnJvbSB0aGUgaW5wdXQgdGV4dCBpbiB0aGUgb3V0bGluZSBhcHBlYXJhbmNlLlxuICAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDogLTAuMjVlbTtcblxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIHtcbiAgICAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICAgICAgcGFkZGluZzogJGluZml4LXBhZGRpbmcgMCAkaW5maXgtcGFkZGluZyAwO1xuICAgIH1cblxuICAgIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICB0b3A6ICRpbmZpeC1tYXJnaW4tdG9wICsgJGluZml4LXBhZGRpbmc7XG4gICAgICBtYXJnaW4tdG9wOiAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldDtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCB7XG4gICAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgICAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgIEBpbmNsdWRlIF9tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAgICRzdWJzY3JpcHQtZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcgKyAkb3V0bGluZS1hcHBlYXJhbmNlLWxhYmVsLW9mZnNldCxcbiAgICAgICAgICAgICAgICAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFNlcnZlci1zaWRlIHJlbmRlcmVkIG1hdElucHV0IHdpdGggYSBsYWJlbCBhdHRyaWJ1dGUgYnV0IGxhYmVsIG5vdCBzaG93blxuICAgICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAgIC5tYXQtaW5wdXQtc2VydmVyW2xhYmVsXTpub3QoOmxhYmVsLXNob3duKSArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4gICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgICBAaW5jbHVkZSBfbWF0LWZvcm0tZmllbGQtb3V0bGluZS1sYWJlbC1mbG9hdGluZyhcbiAgICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nICsgJG91dGxpbmUtYXBwZWFyYW5jZS1sYWJlbC1vZmZzZXQsXG4gICAgICAgICAgICAgICAgJGluZml4LW1hcmdpbi10b3ApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG4vLyBUaGVtZSBzdHlsZXMgdGhhdCBvbmx5IGFwcGx5IHRvIHRoZSBzdGFuZGFyZCBhcHBlYXJhbmNlIG9mIHRoZSBmb3JtLWZpZWxkLlxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgJHVuZGVybGluZS1jb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCBkaXZpZGVyLCBpZigkaXMtZGFyay10aGVtZSwgMC43LCAwLjQyKSk7XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xuICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvcjtcbiAgICB9XG5cbiAgICAmLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgQGluY2x1ZGUgbWF0LWNvbnRyb2wtZGlzYWJsZWQtdW5kZXJsaW5lKCR1bmRlcmxpbmUtY29sb3IpO1xuICAgIH1cbiAgfVxufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdHlwb2dyYXBoeSgkY29uZmlnKSB7fVxuXG5cbi8vIFRoZW1lIHN0eWxlcyB0aGF0IGFwcGx5IHRvIGFsbCBhcHBlYXJhbmNlcyBvZiB0aGUgZm9ybS1maWVsZC5cbkBtaXhpbiBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpIHtcbiAgJHByaW1hcnk6IG1hcC1nZXQoJHRoZW1lLCBwcmltYXJ5KTtcbiAgJGFjY2VudDogbWFwLWdldCgkdGhlbWUsIGFjY2VudCk7XG4gICR3YXJuOiBtYXAtZ2V0KCR0aGVtZSwgd2Fybik7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG4gICRpcy1kYXJrLXRoZW1lOiBtYXAtZ2V0KCR0aGVtZSwgaXMtZGFyayk7XG5cbiAgLy8gTGFiZWwgY29sb3JzLiBSZXF1aXJlZCBpcyB1c2VkIGZvciB0aGUgYCpgIHN0YXIgc2hvd24gaW4gdGhlIGxhYmVsLlxuICAkbGFiZWwtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgc2Vjb25kYXJ5LXRleHQsIGlmKCRpcy1kYXJrLXRoZW1lLCAwLjcsIDAuNikpO1xuICAkZm9jdXNlZC1sYWJlbC1jb2xvcjogbWF0LWNvbG9yKCRwcmltYXJ5KTtcbiAgJHJlcXVpcmVkLWxhYmVsLWNvbG9yOiBtYXQtY29sb3IoJGFjY2VudCk7XG5cbiAgLy8gVW5kZXJsaW5lIGNvbG9ycy5cbiAgJHVuZGVybGluZS1jb2xvci1iYXNlOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIsIGlmKCRpcy1kYXJrLXRoZW1lLCAxLCAwLjg3KSk7XG4gICR1bmRlcmxpbmUtY29sb3ItYWNjZW50OiBtYXQtY29sb3IoJGFjY2VudCk7XG4gICR1bmRlcmxpbmUtY29sb3Itd2FybjogbWF0LWNvbG9yKCR3YXJuKTtcbiAgJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yOiBtYXQtY29sb3IoJHByaW1hcnkpO1xuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtaGludCB7XG4gICAgY29sb3I6ICRsYWJlbC1jb2xvcjtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIGNvbG9yOiAkZm9jdXNlZC1sYWJlbC1jb2xvcjtcblxuICAgICYubWF0LWFjY2VudCB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgfVxuXG4gICAgJi5tYXQtd2FybiB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgICBjb2xvcjogJHJlcXVpcmVkLWxhYmVsLWNvbG9yO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1iYXNlO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR1bmRlcmxpbmUtZm9jdXNlZC1jb2xvcjtcblxuICAgICAgJi5tYXQtYWNjZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci1hY2NlbnQ7XG4gICAgICB9XG5cbiAgICAgICYubWF0LXdhcm4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvY3VzZWQ6bm90KC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkKSB7XG4gICAgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gICAgICBjb2xvcjogJHVuZGVybGluZS1mb2N1c2VkLWNvbG9yO1xuICAgIH1cblxuICAgICYubWF0LWFjY2VudCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLWFjY2VudDtcbiAgICB9XG5cbiAgICAmLm1hdC13YXJuIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcbiAgICB9XG4gIH1cblxuICAvLyBTdHlsaW5nIGZvciB0aGUgZXJyb3Igc3RhdGUgb2YgdGhlIGZvcm0gZmllbGQuIE5vdGUgdGhhdCB3aGlsZSB0aGUgc2FtZSBjYW4gYmVcbiAgLy8gYWNoaWV2ZWQgd2l0aCB0aGUgbmctKiBjbGFzc2VzLCB3ZSB1c2UgdGhpcyBhcHByb2FjaCBpbiBvcmRlciB0byBlbnN1cmUgdGhhdCB0aGUgc2FtZVxuICAvLyBsb2dpYyBpcyB1c2VkIHRvIHN0eWxlIHRoZSBlcnJvciBzdGF0ZSBhbmQgdG8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZXMuXG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIHtcbiAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgY29sb3I6ICR1bmRlcmxpbmUtY29sb3Itd2FybjtcblxuICAgICAgJi5tYXQtYWNjZW50LFxuICAgICAgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbiAgICAubWF0LWZvcm0tZmllbGQtcmlwcGxlLm1hdC1hY2NlbnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHVuZGVybGluZS1jb2xvci13YXJuO1xuICAgIH1cbiAgfVxuXG4gIC5tYXQtZXJyb3Ige1xuICAgIGNvbG9yOiAkdW5kZXJsaW5lLWNvbG9yLXdhcm47XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1sZWdhY3ktdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtc3RhbmRhcmQtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWZvcm0tZmllbGQtZmlsbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoZW1lKCR0aGVtZSk7XG59XG5cbi8vIFVzZWQgdG8gbWFrZSBpbnN0YW5jZXMgb2YgdGhlIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZyBtaXhpbiBuZWdsaWdpYmx5IGRpZmZlcmVudCxcbi8vIGFuZCBwcmV2ZW50IEdvb2dsZSdzIENTUyBPcHRpbWl6ZXIgZnJvbSBjb2xsYXBzaW5nIHRoZSBkZWNsYXJhdGlvbnMuIFRoaXMgaXMgbmVlZGVkIGJlY2F1c2Ugc29tZVxuLy8gb2YgdGhlIHNlbGVjdG9ycyBjb250YWluIHBzZXVkby1jbGFzc2VzIG5vdCByZWNvZ25pemVkIGluIGFsbCBicm93c2Vycy4gSWYgYSBicm93c2VyIGVuY291bnRlcnNcbi8vIGFuIHVua25vd24gcHNldWRvLWNsYXNzIGl0IHdpbGwgZGlzY2FyZCB0aGUgZW50aXJlIHJ1bGUgc2V0LlxuJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTogMDtcblxuLy8gQXBwbGllcyBhIGZsb2F0aW5nIGxhYmVsIGFib3ZlIHRoZSBmb3JtIGZpZWxkIGNvbnRyb2wgaXRzZWxmLlxuQG1peGluIF9tYXQtZm9ybS1maWVsZC1sYWJlbC1mbG9hdGluZygkZm9udC1zY2FsZSwgJGluZml4LXBhZGRpbmcsICRpbmZpeC1tYXJnaW4tdG9wKSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtJGluZml4LW1hcmdpbi10b3AgLSAkaW5maXgtcGFkZGluZyArICRtYXQtZm9ybS1maWVsZC1kZWR1cGUpXG4gICAgICAgICAgICAgc2NhbGUoJGZvbnQtc2NhbGUpO1xuICB3aWR0aDogMTAwJSAvICRmb250LXNjYWxlICsgJG1hdC1mb3JtLWZpZWxkLWRlZHVwZTtcblxuICAkbWF0LWZvcm0tZmllbGQtZGVkdXBlOiAkbWF0LWZvcm0tZmllbGQtZGVkdXBlICsgMC4wMDAwMSAhZ2xvYmFsO1xufVxuXG5AbWl4aW4gbWF0LWZvcm0tZmllbGQtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC8vIFRoZSB1bml0LWxlc3MgbGluZS1oZWlnaHQgZnJvbSB0aGUgZm9udCBjb25maWcuXG4gICRsaW5lLWhlaWdodDogbWF0LWxpbmUtaGVpZ2h0KCRjb25maWcsIGlucHV0KTtcblxuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgZmxvYXRpbmcgbGFiZWwgYW5kIHN1YnNjcmlwdC5cbiAgJHN1YnNjcmlwdC1mb250LXNjYWxlOiAwLjc1O1xuICAvLyBUaGUgYW1vdW50IHRvIHNjYWxlIHRoZSBmb250IGZvciB0aGUgcHJlZml4IGFuZCBzdWZmaXggaWNvbnMuXG4gICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZTogMS41O1xuXG4gIC8vIFRoZSBwYWRkaW5nIG9uIHRoZSBpbmZpeC4gTW9ja3Mgc2hvdyBoYWxmIG9mIHRoZSB0ZXh0IHNpemUuXG4gICRpbmZpeC1wYWRkaW5nOiAwLjVlbTtcbiAgLy8gVGhlIG1hcmdpbiBhcHBsaWVkIHRvIHRoZSBmb3JtLWZpZWxkLWluZml4IHRvIHJlc2VydmUgc3BhY2UgZm9yIHRoZSBmbG9hdGluZyBsYWJlbC5cbiAgJGluZml4LW1hcmdpbi10b3A6IDFlbSAqICRsaW5lLWhlaWdodCAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcbiAgLy8gRm9udCBzaXplIHRvIHVzZSBmb3IgdGhlIGxhYmVsIGFuZCBzdWJzY3JpcHQgdGV4dC5cbiAgJHN1YnNjcmlwdC1mb250LXNpemU6ICRzdWJzY3JpcHQtZm9udC1zY2FsZSAqIDEwMCU7XG4gIC8vIEZvbnQgc2l6ZSB0byB1c2UgZm9yIHRoZSBmb3IgdGhlIHByZWZpeCBhbmQgc3VmZml4IGljb25zLlxuICAkcHJlZml4LXN1ZmZpeC1pY29uLWZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMTAwJTtcbiAgLy8gVGhlIHNwYWNlIGJldHdlZW4gdGhlIGJvdHRvbSBvZiB0aGUgLm1hdC1mb3JtLWZpZWxkLWZsZXggYXJlYSBhbmQgdGhlIHN1YnNjcmlwdCB3cmFwcGVyLlxuICAvLyBNb2NrcyBzaG93IGhhbGYgb2YgdGhlIHRleHQgc2l6ZSwgYnV0IHRoaXMgbWFyZ2luIGlzIGFwcGxpZWQgdG8gYW4gZWxlbWVudCB3aXRoIHRoZSBzdWJzY3JpcHRcbiAgLy8gdGV4dCBmb250IHNpemUsIHNvIHdlIG5lZWQgdG8gZGl2aWRlIGJ5IHRoZSBzY2FsZSBmYWN0b3IgdG8gbWFrZSBpdCBoYWxmIG9mIHRoZSBvcmlnaW5hbCB0ZXh0XG4gIC8vIHNpemUuXG4gICRzdWJzY3JpcHQtbWFyZ2luLXRvcDogMC41ZW0gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGU7XG4gIC8vIFRoZSBwYWRkaW5nIGFwcGxpZWQgdG8gdGhlIGZvcm0tZmllbGQtd3JhcHBlciB0byByZXNlcnZlIHNwYWNlIGZvciB0aGUgc3Vic2NyaXB0LCBzaW5jZSBpdCdzXG4gIC8vIGFic29sdXRlbHkgcG9zaXRpb25lZC4gVGhpcyBpcyBhIGNvbWJpbmF0aW9uIG9mIHRoZSBzdWJzY3JpcHQncyBtYXJnaW4gYW5kIGxpbmUtaGVpZ2h0LCBidXQgd2VcbiAgLy8gbmVlZCB0byBtdWx0aXBseSBieSB0aGUgc3Vic2NyaXB0IGZvbnQgc2NhbGUgZmFjdG9yIHNpbmNlIHRoZSB3cmFwcGVyIGhhcyBhIGxhcmdlciBmb250IHNpemUuXG4gICR3cmFwcGVyLXBhZGRpbmctYm90dG9tOiAoJHN1YnNjcmlwdC1tYXJnaW4tdG9wICsgJGxpbmUtaGVpZ2h0KSAqICRzdWJzY3JpcHQtZm9udC1zY2FsZTtcblxuICAubWF0LWZvcm0tZmllbGQge1xuICAgIEBpbmNsdWRlIG1hdC10eXBvZ3JhcGh5LWxldmVsLXRvLXN0eWxlcygkY29uZmlnLCBpbnB1dCk7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gICAgcGFkZGluZy1ib3R0b206ICR3cmFwcGVyLXBhZGRpbmctYm90dG9tO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXByZWZpeCxcbiAgLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCB7XG4gICAgLy8gQWxsb3cgaWNvbnMgaW4gYSBwcmVmaXggb3Igc3VmZml4IHRvIGFkYXB0IHRvIHRoZSBjb3JyZWN0IHNpemUuXG4gICAgLm1hdC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNpemU7XG4gICAgICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xuICAgIH1cblxuICAgIC8vIEFsbG93IGljb24gYnV0dG9ucyBpbiBhIHByZWZpeCBvciBzdWZmaXggdG8gYWRhcHQgdG8gdGhlIGNvcnJlY3Qgc2l6ZS5cbiAgICAubWF0LWljb24tYnV0dG9uIHtcbiAgICAgIGhlaWdodDogJHByZWZpeC1zdWZmaXgtaWNvbi1mb250LXNjYWxlICogMWVtO1xuICAgICAgd2lkdGg6ICRwcmVmaXgtc3VmZml4LWljb24tZm9udC1zY2FsZSAqIDFlbTtcblxuICAgICAgLm1hdC1pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAkbGluZS1oZWlnaHQgKiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAkbGluZS1oZWlnaHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgICBwYWRkaW5nOiAkaW5maXgtcGFkZGluZyAwO1xuICAgIC8vIFRocm93cyBvZmYgdGhlIGJhc2VsaW5lIGlmIHdlIGRvIGl0IGFzIGEgcmVhbCBtYXJnaW4sIHNvIHdlIGRvIGl0IGFzIGEgYm9yZGVyIGluc3RlYWQuXG4gICAgYm9yZGVyLXRvcDogJGluZml4LW1hcmdpbi10b3Agc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IHtcbiAgICAmLm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gICAgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuXG4gICAgLy8gU2VydmVyLXNpZGUgcmVuZGVyZWQgbWF0SW5wdXQgd2l0aCBhIGxhYmVsIGF0dHJpYnV0ZSBidXQgbGFiZWwgbm90IHNob3duXG4gICAgLy8gKHVzZWQgYXMgYSBwdXJlIENTUyBzdGFuZC1pbiBmb3IgbWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0KS5cbiAgICAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuICAgICAgICAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgICAgQGluY2x1ZGUgX21hdC1mb3JtLWZpZWxkLWxhYmVsLWZsb2F0aW5nKFxuICAgICAgICAgICAgICAkc3Vic2NyaXB0LWZvbnQtc2NhbGUsICRpbmZpeC1wYWRkaW5nLCAkaW5maXgtbWFyZ2luLXRvcCk7XG4gICAgfVxuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICAgIHRvcDogLSRpbmZpeC1tYXJnaW4tdG9wO1xuICAgIHBhZGRpbmctdG9wOiAkaW5maXgtbWFyZ2luLXRvcDtcbiAgfVxuXG4gIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgdG9wOiAkaW5maXgtbWFyZ2luLXRvcCArICRpbmZpeC1wYWRkaW5nO1xuICB9XG5cbiAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gICAgLy8gV2Ugd2FudCB0aGUgdW5kZXJsaW5lIHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50LlxuICAgIGJvdHRvbTogJHdyYXBwZXItcGFkZGluZy1ib3R0b207XG4gIH1cblxuICAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICAgIGZvbnQtc2l6ZTogJHN1YnNjcmlwdC1mb250LXNpemU7XG4gICAgbWFyZ2luLXRvcDogJHN1YnNjcmlwdC1tYXJnaW4tdG9wO1xuXG4gICAgLy8gV2Ugd2FudCB0aGUgc3Vic2NyaXB0IHRvIHN0YXJ0IGF0IHRoZSBlbmQgb2YgdGhlIGNvbnRlbnQgYm94LCBub3QgdGhlIHBhZGRpbmcgYm94LFxuICAgIC8vIHNvIHdlIG1vdmUgaXQgdXAgYnkgdGhlIHBhZGRpbmcgYW1vdW50IChhZGp1c3RlZCBmb3IgdGhlIHNtYWxsZXIgZm9udCBzaXplKTtcbiAgICB0b3A6IGNhbGMoMTAwJSAtICN7JHdyYXBwZXItcGFkZGluZy1ib3R0b20gLyAkc3Vic2NyaXB0LWZvbnQtc2NhbGV9KTtcbiAgfVxuXG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLWxlZ2FjeS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1zdGFuZGFyZC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC1maWxsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbn1cblxuXG5cblxuXG5AbWl4aW4gbWF0LXRyZWUtdGhlbWUoJHRoZW1lKSB7XG4gICRiYWNrZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgYmFja2dyb3VuZCk7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC10cmVlIHtcbiAgICBiYWNrZ3JvdW5kOiBtYXQtY29sb3IoJGJhY2tncm91bmQsICdjYXJkJyk7XG4gIH1cblxuICAubWF0LXRyZWUtbm9kZSxcbiAgLm1hdC1uZXN0ZWQtdHJlZS1ub2RlIHtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxufVxuXG5AbWl4aW4gbWF0LXRyZWUtdHlwb2dyYXBoeSgkY29uZmlnKSB7XG4gIC5tYXQtdHJlZSB7XG4gICAgZm9udC1mYW1pbHk6IG1hdC1mb250LWZhbWlseSgkY29uZmlnKTtcbiAgfVxuXG4gIC5tYXQtdHJlZS1ub2RlLFxuICAubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICAgIGZvbnQtd2VpZ2h0OiBtYXQtZm9udC13ZWlnaHQoJGNvbmZpZywgYm9keS0xKTtcbiAgICBmb250LXNpemU6IG1hdC1mb250LXNpemUoJGNvbmZpZywgYm9keS0xKTtcbiAgfVxufVxuXG5cblxuLy8gSW5jbHVkZXMgYWxsIG9mIHRoZSB0eXBvZ3JhcGhpYyBzdHlsZXMuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10eXBvZ3JhcGh5KCRjb25maWc6IG51bGwpIHtcbiAgQGlmICRjb25maWcgPT0gbnVsbCB7XG4gICAgJGNvbmZpZzogbWF0LXR5cG9ncmFwaHktY29uZmlnKCk7XG4gIH1cblxuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJhc2UtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtYm90dG9tLXNoZWV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWJ1dHRvbi10b2dnbGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNhcmQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWNoZWNrYm94LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1jaGlwcy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdGFibGUtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRhdGVwaWNrZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWRpYWxvZy10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtZXhwYW5zaW9uLXBhbmVsLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1mb3JtLWZpZWxkLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1ncmlkLWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWljb24tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWlucHV0LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1tZW51LXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1wYWdpbmF0b3ItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcHJvZ3Jlc3Mtc3Bpbm5lci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmFkaW8tdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNlbGVjdC10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2lkZW5hdi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGUtdG9nZ2xlLXR5cG9ncmFwaHkoJGNvbmZpZyk7XG4gIEBpbmNsdWRlIG1hdC1zbGlkZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXN0ZXBwZXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNvcnQtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRhYnMtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2xiYXItdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXRvb2x0aXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LWxpc3QtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LW9wdGlvbi10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtb3B0Z3JvdXAtdHlwb2dyYXBoeSgkY29uZmlnKTtcbiAgQGluY2x1ZGUgbWF0LXNuYWNrLWJhci10eXBvZ3JhcGh5KCRjb25maWcpO1xuICBAaW5jbHVkZSBtYXQtdHJlZS10eXBvZ3JhcGh5KCRjb25maWcpO1xufVxuXG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgYXJlIG5vdCB0aGVtZS1kZXBlbmRlbnQuXG5AbWl4aW4gbWF0LWNvcmUoJHR5cG9ncmFwaHktY29uZmlnOiBudWxsKSB7XG4gIEBpbmNsdWRlIGFuZ3VsYXItbWF0ZXJpYWwtdHlwb2dyYXBoeSgkdHlwb2dyYXBoeS1jb25maWcpO1xuICBAaW5jbHVkZSBtYXQtcmlwcGxlKCk7XG4gIEBpbmNsdWRlIGNkay1hMTF5KCk7XG4gIEBpbmNsdWRlIGNkay1vdmVybGF5KCk7XG4gIEBpbmNsdWRlIGNkay10ZXh0LWZpZWxkKCk7XG59XG5cbi8vIE1peGluIHRoYXQgcmVuZGVycyBhbGwgb2YgdGhlIGNvcmUgc3R5bGVzIHRoYXQgZGVwZW5kIG9uIHRoZSB0aGVtZS5cbkBtaXhpbiBtYXQtY29yZS10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LXJpcHBsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtb3B0aW9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1vcHRncm91cC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcHNldWRvLWNoZWNrYm94LXRoZW1lKCR0aGVtZSk7XG5cbiAgLy8gUHJvdmlkZXMgZXh0ZXJuYWwgQ1NTIGNsYXNzZXMgZm9yIGVhY2ggZWxldmF0aW9uIHZhbHVlLiBFYWNoIENTUyBjbGFzcyBpcyBmb3JtYXR0ZWQgYXNcbiAgLy8gYG1hdC1lbGV2YXRpb24teiR6VmFsdWVgIHdoZXJlIGAkelZhbHVlYCBjb3JyZXNwb25kcyB0byB0aGUgei1zcGFjZSB0byB3aGljaCB0aGUgZWxlbWVudCBpc1xuICAvLyBlbGV2YXRlZC5cbiAgQGZvciAkelZhbHVlIGZyb20gMCB0aHJvdWdoIDI0IHtcbiAgICAuI3skX21hdC1lbGV2YXRpb24tcHJlZml4fSN7JHpWYWx1ZX0ge1xuICAgICAgQGluY2x1ZGUgX21hdC10aGVtZS1lbGV2YXRpb24oJHpWYWx1ZSwgJHRoZW1lKTtcbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyB0aGUgdGhlbWUgYmFja2dyb3VuZCB3aGVuIHRoZSB1c2VyJ3MgY29udGVudCBpc24ndFxuICAvLyBpbnNpZGUgb2YgYSBgbWF0LXNpZGVuYXYtY29udGFpbmVyYC4gTm90ZSB0aGF0IHdlIG5lZWQgdG8gZXhjbHVkZSB0aGUgYW1wZXJzYW5kXG4gIC8vIHNlbGVjdG9yIGluIGNhc2UgdGhlIG1peGluIGlzIGluY2x1ZGVkIGF0IHRoZSB0b3AgbGV2ZWwuXG4gIC5tYXQtYXBwLWJhY2tncm91bmQje2lmKCYsICcsICYubWF0LWFwcC1iYWNrZ3JvdW5kJywgJycpfSB7XG4gICAgJGJhY2tncm91bmQ6IG1hcC1nZXQoJHRoZW1lLCBiYWNrZ3JvdW5kKTtcbiAgICAkZm9yZWdyb3VuZDogbWFwLWdldCgkdGhlbWUsIGZvcmVncm91bmQpO1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWF0LWNvbG9yKCRiYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kKTtcbiAgICBjb2xvcjogbWF0LWNvbG9yKCRmb3JlZ3JvdW5kLCB0ZXh0KTtcbiAgfVxuXG4gIC8vIE1hcmtlciB0aGF0IGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHVzZXIgaGFzIGFkZGVkIGEgdGhlbWUgdG8gdGhlaXIgcGFnZS5cbiAgQGF0LXJvb3Qge1xuICAgIC5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5AbWl4aW4gbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKSB7XG4gICRmb3JlZ3JvdW5kOiBtYXAtZ2V0KCR0aGVtZSwgZm9yZWdyb3VuZCk7XG5cbiAgLm1hdC1kaXZpZGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiBtYXQtY29sb3IoJGZvcmVncm91bmQsIGRpdmlkZXIpO1xuICB9XG5cbiAgLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IG1hdC1jb2xvcigkZm9yZWdyb3VuZCwgZGl2aWRlcik7XG4gIH1cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gQ3JlYXRlIGEgdGhlbWUuXG5AbWl4aW4gYW5ndWxhci1tYXRlcmlhbC10aGVtZSgkdGhlbWUpIHtcbiAgQGluY2x1ZGUgbWF0LWNvcmUtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWF1dG9jb21wbGV0ZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYmFkZ2UtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWJvdHRvbS1zaGVldC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtYnV0dG9uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1idXR0b24tdG9nZ2xlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jYXJkLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1jaGVja2JveC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtY2hpcHMtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXRhYmxlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kYXRlcGlja2VyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1kaWFsb2ctdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWRpdmlkZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LWV4cGFuc2lvbi1wYW5lbC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZm9ybS1maWVsZC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtZ3JpZC1saXN0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pY29uLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1pbnB1dC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbGlzdC10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtbWVudS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtcGFnaW5hdG9yLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1wcm9ncmVzcy1iYXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXByb2dyZXNzLXNwaW5uZXItdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXJhZGlvLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zZWxlY3QtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNpZGVuYXYtdGhlbWUoJHRoZW1lKTtcbiAgQGluY2x1ZGUgbWF0LXNsaWRlLXRvZ2dsZS10aGVtZSgkdGhlbWUpO1xuICBAaW5jbHVkZSBtYXQtc2xpZGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zdGVwcGVyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zb3J0LXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10YWJzLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sYmFyLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10b29sdGlwLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC10cmVlLXRoZW1lKCR0aGVtZSk7XG4gIEBpbmNsdWRlIG1hdC1zbmFjay1iYXItdGhlbWUoJHRoZW1lKTtcbn1cbiIsIi8qISBKb2ludEpTIHYyLjIuMSAoMjAxOC0xMS0xMikgLSBKYXZhU2NyaXB0IGRpYWdyYW1taW5nIGxpYnJhcnlcblxuXG5UaGlzIFNvdXJjZSBDb2RlIEZvcm0gaXMgc3ViamVjdCB0byB0aGUgdGVybXMgb2YgdGhlIE1vemlsbGEgUHVibGljXG5MaWNlbnNlLCB2LiAyLjAuIElmIGEgY29weSBvZiB0aGUgTVBMIHdhcyBub3QgZGlzdHJpYnV0ZWQgd2l0aCB0aGlzXG5maWxlLCBZb3UgY2FuIG9idGFpbiBvbmUgYXQgaHR0cDovL21vemlsbGEub3JnL01QTC8yLjAvLlxuKi9cbi8qXG5BIGNvbXBsZXRlIGxpc3Qgb2YgU1ZHIHByb3BlcnRpZXMgdGhhdCBjYW4gYmUgc2V0IHRocm91Z2ggQ1NTIGlzIGhlcmU6XG5odHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvc3R5bGluZy5odG1sXG5cbkltcG9ydGFudCBub3RlOiBQcmVzZW50YXRpb24gYXR0cmlidXRlcyBoYXZlIGEgbG93ZXIgcHJlY2VkZW5jZSBvdmVyIENTUyBzdHlsZSBydWxlcy5cbiovXG5cblxuLyogLnZpZXdwb3J0IGlzIGEgPGc+IG5vZGUgd3JhcHBpbmcgYWxsIGRpYWdyYW0gZWxlbWVudHMgaW4gdGhlIHBhcGVyICovXG4uam9pbnQtdmlld3BvcnQge1xuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmpvaW50LXBhcGVyID4gc3ZnLFxuLmpvaW50LXBhcGVyLWJhY2tncm91bmQsXG4uam9pbnQtcGFwZXItZ3JpZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4vKlxuMS4gSUUgY2FuJ3QgaGFuZGxlIHBhdGhzIHdpdGhvdXQgdGhlIGBkYCBhdHRyaWJ1dGUgZm9yIGJvdW5kaW5nIGJveCBjYWxjdWxhdGlvblxuMi4gSUUgY2FuJ3QgZXZlbiBoYW5kbGUgJ2QnIGF0dHJpYnV0ZSBhcyBhIGNzcyBzZWxlY3RvciAoZS5nIHBhdGhbZF0pIHNvIHRoZSBmb2xsb3dpbmcgcnVsZSB3aWxsXG4gICBicmVhayB0aGUgbGlua3MgcmVuZGVyaW5nLlxuXG5wYXRoOm5vdChbZF0pIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4qL1xuXG5cbi8qIG1hZ25ldCBpcyBhbiBlbGVtZW50IHRoYXQgY2FuIGJlIGVpdGhlciBzb3VyY2Ugb3IgYSB0YXJnZXQgb2YgYSBsaW5rICovXG5bbWFnbmV0PXRydWVdOm5vdCguam9pbnQtZWxlbWVudCkge1xuICAgY3Vyc29yOiBjcm9zc2hhaXI7XG59XG5bbWFnbmV0PXRydWVdOm5vdCguam9pbnQtZWxlbWVudCk6aG92ZXIge1xuICAgb3BhY2l0eTogLjc7XG59XG5cbi8qXG5cbkVsZW1lbnRzIGhhdmUgQ1NTIGNsYXNzZXMgbmFtZWQgYnkgdGhlaXIgdHlwZXMuIEUuZy4gdHlwZTogYmFzaWMuUmVjdCBoYXMgYSBDU1MgY2xhc3MgXCJlbGVtZW50IGJhc2ljIFJlY3RcIi5cblRoaXMgbWFrZXMgaXQgcG9zc2libGUgdG8gZWFzaWxseSBzdHlsZSBlbGVtZW50cyBpbiBDU1MgYW5kIGhhdmUgZ2VuZXJpYyBDU1MgcnVsZXMgYXBwbHlpbmcgdG9cbnRoZSB3aG9sZSBncm91cCBvZiBlbGVtZW50cy4gRWFjaCBwbHVnaW4gY2FuIHByb3ZpZGUgaXRzIG93biBzdHlsZXNoZWV0LlxuXG4qL1xuXG4uam9pbnQtZWxlbWVudCB7XG4gICAvKiBHaXZlIHRoZSB1c2VyIGEgaGludCB0aGF0IGhlIGNhbiBkcmFnJmRyb3AgdGhlIGVsZW1lbnQuICovXG4gICBjdXJzb3I6IG1vdmU7XG59XG5cbi5qb2ludC1lbGVtZW50ICoge1xuICAgdXNlci1kcmFnOiBub25lO1xufVxuXG4uam9pbnQtZWxlbWVudCAuc2NhbGFibGUgKiB7XG4gICAvKiBUaGUgZGVmYXVsdCBiZWhhdmlvciB3aGVuIHNjYWxpbmcgYW4gZWxlbWVudCBpcyBub3QgdG8gc2NhbGUgdGhlIHN0cm9rZSBpbiBvcmRlciB0byBwcmV2ZW50IHRoZSB1Z2x5IGVmZmVjdCBvZiBzdHJva2Ugd2l0aCBkaWZmZXJlbnQgcHJvcG9ydGlvbnMuICovXG4gICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG59XG4vKlxuXG5jb25uZWN0aW9uLXdyYXAgaXMgYSA8cGF0aD4gZWxlbWVudCBvZiB0aGUgam9pbnQuZGlhLkxpbmsgdGhhdCBmb2xsb3dzIHRoZSAuY29ubmVjdGlvbiA8cGF0aD4gb2YgdGhhdCBsaW5rLlxuSW4gb3RoZXIgd29yZHMsIHRoZSBgZGAgYXR0cmlidXRlIG9mIHRoZSAuY29ubmVjdGlvbi13cmFwIGNvbnRhaW5zIHRoZSBzYW1lIGRhdGEgYXMgdGhlIGBkYCBhdHRyaWJ1dGUgb2YgdGhlXG4uY29ubmVjdGlvbiA8cGF0aD4uIFRoZSBhZHZhbnRhZ2Ugb2YgdXNpbmcgLmNvbm5lY3Rpb24td3JhcCBpcyB0byBiZSBhYmxlIHRvIGNhdGNoIHBvaW50ZXIgZXZlbnRzXG5pbiB0aGUgbmVpZ2hib3Job29kIG9mIHRoZSAuY29ubmVjdGlvbiA8cGF0aD4uIFRoaXMgaXMgZXNwZWNpYWxseSBoYW5keSBpZiB0aGUgLmNvbm5lY3Rpb24gPHBhdGg+IGlzXG52ZXJ5IHRoaW4uXG5cbiovXG5cbi5tYXJrZXItc291cmNlLFxuLm1hcmtlci10YXJnZXQge1xuICAgLyogVGhpcyBtYWtlcyB0aGUgYXJyb3doZWFkcyBwb2ludCB0byB0aGUgYm9yZGVyIG9mIG9iamVjdHMgZXZlbiB0aG91Z2ggdGhlIHRyYW5zZm9ybTogc2NhbGUoKSBpcyBhcHBsaWVkIG9uIHRoZW0uICovXG4gICB2ZWN0b3ItZWZmZWN0OiBub24tc2NhbGluZy1zdHJva2U7XG59XG5cbi8qIFBhcGVyICovXG4uam9pbnQtcGFwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi8qIFBhcGVyICovXG5cbi8qICBIaWdobGlnaHRpbmcgICovXG4uam9pbnQtaGlnaGxpZ2h0LW9wYWNpdHkge1xuICAgIG9wYWNpdHk6IDAuMztcbn1cbi8qICBIaWdobGlnaHRpbmcgICovXG5cbi8qXG5cblZlcnRleCBtYXJrZXJzIGFyZSBgPGNpcmNsZT5gIGVsZW1lbnRzIHRoYXQgYXBwZWFyIGF0IGNvbm5lY3Rpb24gdmVydGV4IHBvc2l0aW9ucy5cblxuKi9cblxuLmpvaW50LWxpbmsgLmNvbm5lY3Rpb24td3JhcCxcbi5qb2ludC1saW5rIC5jb25uZWN0aW9uIHtcbiAgIGZpbGw6IG5vbmU7XG59XG5cbi8qIDxnPiBlbGVtZW50IHdyYXBwaW5nIC5tYXJrZXItdmVydGV4LWdyb3VwLiAqL1xuLm1hcmtlci12ZXJ0aWNlcyB7XG4gICBvcGFjaXR5OiAwO1xuICAgY3Vyc29yOiBtb3ZlO1xufVxuLm1hcmtlci1hcnJvd2hlYWRzIHtcbiAgIG9wYWNpdHk6IDA7XG4gICBjdXJzb3I6IG1vdmU7XG4gICBjdXJzb3I6IC13ZWJraXQtZ3JhYjtcbiAgIGN1cnNvcjogLW1vei1ncmFiO1xuLyogICBkaXNwbGF5OiBub25lOyAgICovICAgLyogc2V0dGluZyBgZGlzcGxheTogbm9uZWAgb24gLm1hcmtlci1hcnJvd2hlYWRzIGVmZmVjdGl2ZWxseSBzd2l0Y2hlcyBvZiBsaW5rcyByZWNvbm5lY3RpbmcgKi9cbn1cbi5saW5rLXRvb2xzIHtcbiAgIG9wYWNpdHk6IDA7XG4gICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ubGluay10b29scyAudG9vbC1vcHRpb25zIHtcbiAgIGRpc3BsYXk6IG5vbmU7ICAgICAgIC8qIGJ5IGRlZmF1bHQsIHdlIGRvbid0IGRpc3BsYXkgbGluayBvcHRpb25zIHRvb2wgKi9cbn1cbi5qb2ludC1saW5rOmhvdmVyIC5tYXJrZXItdmVydGljZXMsXG4uam9pbnQtbGluazpob3ZlciAubWFya2VyLWFycm93aGVhZHMsXG4uam9pbnQtbGluazpob3ZlciAubGluay10b29scyB7XG4gICBvcGFjaXR5OiAxO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IHVzZWQgdG8gcmVtb3ZlIGEgdmVydGV4ICovXG4ubWFya2VyLXZlcnRleC1yZW1vdmUge1xuICAgY3Vyc29yOiBwb2ludGVyO1xuICAgb3BhY2l0eTogLjE7XG59XG5cbi5tYXJrZXItdmVydGV4LWdyb3VwOmhvdmVyIC5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICBvcGFjaXR5OiAxO1xufVxuXG4ubWFya2VyLXZlcnRleC1yZW1vdmUtYXJlYSB7XG4gICBvcGFjaXR5OiAuMTtcbiAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5tYXJrZXItdmVydGV4LWdyb3VwOmhvdmVyIC5tYXJrZXItdmVydGV4LXJlbW92ZS1hcmVhIHtcbiAgIG9wYWNpdHk6IDE7XG59XG5cbi8qXG5FeGFtcGxlIG9mIGN1c3RvbSBjaGFuZ2VzIChpbiBwdXJlIENTUyBvbmx5ISk6XG5cbkRvIG5vdCBzaG93IG1hcmtlciB2ZXJ0aWNlcyBhdCBhbGw6ICAubWFya2VyLXZlcnRpY2VzIHsgZGlzcGxheTogbm9uZTsgfVxuRG8gbm90IGFsbG93IGFkZGluZyBuZXcgdmVydGljZXM6IC5jb25uZWN0aW9uLXdyYXAgeyBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuKi9cblxuLyogZm9yZWlnbk9iamVjdCBpbnNpZGUgdGhlIGVsZW1lbnRzIChpLmUgam9pbnQuc2hhcGVzLmJhc2ljLlRleHRCbG9jaykgKi9cbi5qb2ludC1lbGVtZW50IC5mb2JqIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmpvaW50LWVsZW1lbnQgLmZvYmogYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcG9zaXRpb246IHN0YXRpYztcbn1cbi5qb2ludC1lbGVtZW50IC5mb2JqIGRpdiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICBwYWRkaW5nOiAwcHggNXB4IDBweCA1cHg7XG59XG5cbi8qIFBhcGVyICovXG4uam9pbnQtcGFwZXIuam9pbnQtdGhlbWUtZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4MTkxYjtcbn1cbi8qIFBhcGVyICovXG5cbi8qICBMaW5rcyAgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmNvbm5lY3Rpb24td3JhcCB7XG4gICAgc3Ryb2tlOiAjOEY4RkYzO1xuICAgIHN0cm9rZS13aWR0aDogMTU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5jb25uZWN0aW9uLXdyYXA6aG92ZXIge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuNDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmNvbm5lY3Rpb24ge1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBjaXJjbGUge1xuICAgIGZpbGw6ICNGMzM2MzY7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBwYXRoIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLmxpbmstdG9vbHMgW2V2ZW50PVwibGluazpvcHRpb25zXCJdIGNpcmNsZSB7XG4gICAgZmlsbDogZ3JlZW47XG59XG4vKiA8Y2lyY2xlPiBlbGVtZW50IGluc2lkZSAubWFya2VyLXZlcnRleC1ncm91cCA8Zz4gZWxlbWVudCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLXZlcnRleCB7XG4gICAgZmlsbDogIzU2NTJEQjtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci12ZXJ0ZXg6aG92ZXIge1xuICAgIGZpbGw6ICM4RThDRTE7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLWFycm93aGVhZCB7XG4gICAgZmlsbDogIzU2NTJEQjtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRhcmsgLm1hcmtlci1hcnJvd2hlYWQ6aG92ZXIge1xuICAgIGZpbGw6ICM4RThDRTE7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuLyogPGNpcmNsZT4gZWxlbWVudCB1c2VkIHRvIHJlbW92ZSBhIHZlcnRleCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGFyayAubWFya2VyLXZlcnRleC1yZW1vdmUtYXJlYSB7XG4gICAgZmlsbDogZ3JlZW47XG4gICAgc3Ryb2tlOiBkYXJrZ3JlZW47XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kYXJrIC5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgc3Ryb2tlOiB3aGl0ZTtcbn1cbi8qICBMaW5rcyAgKi9cbi8qIFBhcGVyICovXG4uam9pbnQtcGFwZXIuam9pbnQtdGhlbWUtZGVmYXVsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn1cbi8qIFBhcGVyICovXG5cbi8qICBMaW5rcyAgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLmNvbm5lY3Rpb24td3JhcCB7XG4gICAgc3Ryb2tlOiAjMDAwMDAwO1xuICAgIHN0cm9rZS13aWR0aDogMTU7XG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IG1vdmU7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5jb25uZWN0aW9uLXdyYXA6aG92ZXIge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuNDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLmNvbm5lY3Rpb24ge1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBjaXJjbGUge1xuICAgIGZpbGw6ICNGRjAwMDA7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBwYXRoIHtcbiAgICBmaWxsOiAjRkZGRkZGO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IGluc2lkZSAubWFya2VyLXZlcnRleC1ncm91cCA8Zz4gZWxlbWVudCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubWFya2VyLXZlcnRleCB7XG4gICAgZmlsbDogIzFBQkM5Qztcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLm1hcmtlci12ZXJ0ZXg6aG92ZXIge1xuICAgIGZpbGw6ICMzNDQ5NUU7XG4gICAgc3Ryb2tlOiBub25lO1xufVxuXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1kZWZhdWx0IC5tYXJrZXItYXJyb3doZWFkIHtcbiAgICBmaWxsOiAjMUFCQzlDO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtZGVmYXVsdCAubWFya2VyLWFycm93aGVhZDpob3ZlciB7XG4gICAgZmlsbDogI0YzOUMxMjtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgdXNlZCB0byByZW1vdmUgYSB2ZXJ0ZXggKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLWRlZmF1bHQgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgICBmaWxsOiAjRkZGRkZGO1xufVxuLyogIExpbmtzICAqL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2xhdG8tbGlnaHQnO1xuICAgIHNyYzogdXJsKGRhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGQwOUdSZ0FCQUFBQUFIaGdBQk1BQUFBQTNId0FBUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCR1JsUk5BQUFCcUFBQUFCd0FBQUFjYUxlOUtFZEVSVVlBQUFIRUFBQUFIZ0FBQUNBQkZnQUVSMUJQVXdBQUFlUUFBQW8xQUFBUnd0S1gwQkpIVTFWQ0FBQU1IQUFBQUN3QUFBQXd1UCs0L2s5VEx6SUFBQXhJQUFBQVdRQUFBR0RYMG5lclkyMWhjQUFBREtRQUFBR0pBQUFCNGhjSmRXSmpkblFnQUFBT01BQUFBRG9BQUFBNkR2b0l0bVp3WjIwQUFBNXNBQUFCc1FBQUFtVlR0QytuWjJGemNBQUFFQ0FBQUFBSUFBQUFDQUFBQUJCbmJIbG1BQUFRS0FBQVhNb0FBSzNFc0UvQXNXaGxZV1FBQUd6MEFBQUFNZ0FBQURZT0NDSElhR2hsWVFBQWJTZ0FBQUFnQUFBQUpBOWhDQk5vYlhSNEFBQnRTQUFBQWtFQUFBT2tuOVpoNld4dlkyRUFBRytNQUFBQnlBQUFBZFRrdmcxNGJXRjRjQUFBY1ZRQUFBQWdBQUFBSUFJR0FldHVZVzFsQUFCeGRBQUFCREFBQUF4R1lxRmlZWEJ2YzNRQUFIV2tBQUFCN3dBQUF0cFRGb0lOY0hKbGNBQUFkNVFBQUFEQkFBQUJPVVZuQ1hoM1pXSm1BQUI0V0FBQUFBWUFBQUFHdWNsWEtRQUFBQUVBQUFBQXpEMml6d0FBQUFESktyQVFBQUFBQU5OUGFraDQybU5nWkdCZzRBTmlDUVlRWUdKZ0JNSVhRTXdDNWpFQUFBNUNBUnNBQUhqYWZkZHJqRlRsSGNmeFArS0NBbDFYYktMaFJXbnFVbXBwMVliYTRHWFYxa3RYSzIxZGJ5MGVyWnVtaVdtRlpMdU5NYVFRRWxnV0owMG10TnhSUU1YTGNudHozR1VJanNZY05pRW1FNVBOaG9GbDJHUWd6S3ZKdk9uTEprNC9NNERpR3pMNTd2L3N6SnpuL1A2LzUzZWU4MHpNaUlnNWNYYzhHTmM5K3ZoVHowYm5hLzMvV0JVTDRucnZSN01acmMrdlBwN3h0Ny84ZlZYYzBEcHFjMzFjMTY0M3hJeXUvZTF2dmhwVE1UV2pIbFBYL1hYbWJYaTNvN3RqYk5ZL083cG52VHY3bGRtN2J2aDlSL2VOS3pxNjU4U2MzODUrWmVhN2M5K2F2V3ZlbnM3Ylp0UTd4anEvdU9sNnIrZlZMWjFmWFA1dnVxdXI2OTgzYmVucWFvMDU4N2FPN3RiZjl0SFlONi9XK04rOFhLZjltcmVubzdzMXpwVlhlN3oyNityalM2OTVlMmJlMWhxM3BmdlMzOWIvN1hjZWpUbk52dWhxZHNUTnpaNllyOTdpLys3bWw3RklYYXd1d1ZMY2cvdGlXZHlQSGk0K3JEN1cvRHgrM1J5SlhqeUJaL0FjVmhsck5kWml2WEUyWUFnYk1ZeE5lQk01WTI3Rk5tekhEdXpFYnV4empmZU12eC92NHdOOGlJOHdnZ091Y3hDSGNCaEhrR0lVWXppS0FvN2hPREpqbmxESGpYdUtyakttOUhzTzA0NnJPSStGdWkvcnZLenpzczdMT2kvcnNxYkxtaTVydXF6cHNrWjltZm95OVdYcXk5U1hxUzlUWDZhdVJsMk51aHAxTmVwcTFOV29xMUZYbzY1R1hZMjZHblUxNnNyVTFXSkp6S0puTGpyYmN6Skl6VGcxNDlTTVV6Tk96WGdzYS9iR2ZiaS9tWStlNXV2eHNPTVZ6WFh4WXJNVUw2a3JuYnZLdVlQcWFuV051bGJOT1hjcnRtRTdkbUFuZG1PZmNUSjFYRDNsdTJXY2R0NFpuRVdsN2RNZ253YjVOQmdYL2Y4RGFuc2txRUp4RDhVOWtqUW9SWU5TVkpHZ3ltV2xXeWl0eFFQTms5UW04V0J6a3VJdFZQWlEyRU5kS3lVVkthbElTVVZLS2xKU2taS0tsRlFvUzZoS3FPbWhwalZyZ3hUMVVOUmo5bHBLZXVLVm1DV1BjNXA3WTY3YWlhN21JL3piUXMwajFPeU43elZIWXlGdWw5N3U1Z1IxZS9rNndkZUp1TFA1R204bmVEc2gwNXZOOW1henZkbHNiNDRubTlYNFRmT05lTnE1ZlhqR2U4K3F6Nm5QcXk4MHQ4Y2ZxUHlqNHhYTjZVZ2N2NlMrM0N6RVNqcFcwVENvdnVIejFZN1hPRjZycm5mOURSakNSZ3hqRTk1RWpvNnQySWJ0MklHZDJJMzNYSGMvM3NjSCtCQWZZUVFIY0JDSGNCaEhrT0pqMXg1VngzQVVCUnpEY1h6aXN5SSt4V2ZJWE9PRTkwL1JXTVpwZXM5Z2lvOW5WWFBLOVVka1lZc3NiSkdGTFhIUmU5Mnk4S1VacU1yQ2wvRWRlZTVVdXlScVBtN3gvaUlzYXc3Snc0UXNWR1hoaUN5a3NqQVJ2L1Q5ZnF4MHppRFdZTDN2Yk1BUU5tSVltL0FtOWpsM0hLZDk3d3ltWE9Pc1dzRTV4eGZWbjFIVVIwMGZKWDJ5VUluYnZkdnQ3TVZZZ2p1OWxxcjN0SlhsNGw1bjNzZi8rNXNaZFFPVTdUV25CZk5wTG8yeHloaUQ2bXAxamJwV3pUbDNLN1poTzNaZ0ozYmpMZU85alQzWTI3N0hCdmhicFh5QXZ4WCtWblRRcDRNKzZ2dW83K05yaGE4VnZsWjAwUmMzVXQ3dnl2MnUydStLL2M3c2QyYS9iL2I3WnI5djlzZGRuTTl4dTVmYnZkek95WHNtNzVtOEwrUjhUc2J2a090VXJsTzVUdVU1aytkTW5sTjV6dVE1bGVkTWpqTlp6YmlmNDM2Tyt6bnU1N2lmNDM2Tyt6azVTK1VzbGJOVXpsSTVTK1VzbGJOTXpsSTVTK1VzbGJOVXpsSTVTK1VzazdOTXpqSTV5MlFzTld1OVpxdlgvVHFITzExV3IvbTR4ZkVpck1jR0RHRWpockVKYjJMSzk4N2hwOXc1K2EwNXZUS2Z2MjVlME9zRnZWNXdEMC9vODRJZUw3aFhDK1owM0ZvNWJsN0hPWHVTc3ljNWUvS2FjM25BdVFkeENJZHhCQ2xHTVlhaktPQVlqcU0xenlmVVU4WXRZeHBWbk1ldll0WlhFekVYbmVpS2UzU3hNT2FydCt1cFc2NFhZd21XNGg0c2E3NGdtWDJTK2Jwa0xwUE1QaDFPNjNCYWg5TzZtOWJkdE03ZTBka1JuYjBUSzQyOXlyaUQ2bXAxamJwV3pmbDhLN1poTzNaZ0ozWmpuN0VQR09jZ0R1RXdqaURGS01ad0ZBVWN3M0Zremp1aGpqdjNsUEhMT08xYVp6Q2xwN05xQmVjY1QvdXNpdk80NkwwN3pQeXdtYi9Wek45cTVvZk4vTENzOWxtSFN6cXM2ckNxdzZvT3F6cXNTc1d3VkF4THhiQlVERXZGc0ZRTVM4V3d0YkZrYlN4Wkcwdld4cEsxc1dSdExGa2JTN3FxNnFxcXE2cXVxcnFxNnFxcXE2cXVxcnFxNnFxcXE2cXVXbk5YbGJKYnBZd3VjekpwVGliTnlhUTVtVFFuaytaa3dvcFI1ZWNrUHlmNU9jblBTWDVPOG5PU241TldnS29Wb0dvRnFGb0JxcnlhakdlK3ZsZHYvdGI5bXJoZkUxY2FhdCt2aTlVbHVMTzUxQldIWEhFb0h2dnFmenpwNWtrM1Q3bzlsKzUxSHlmdTQ0US8zZTdqaEVmZDd1UEVjK2toOTNJaUViMFNNZUM1OUdlcDZQVmNHcEtLWHZkNEloVzlFdEY3elhzOTUvdGJzUTNic1FNN3NSdnYwYk1mNytNRGZJaVBNSUlEZEJ6RUlSekdFYVQ0MkhWSDFURWNSUUhIY0J5ZitLeUlUL0VaTXRjNDRmMVROSlp4WmIyWVJoWG44ZkRsSjMveHFpZC9uck0xenVZNVc3UUMvcENqUlU3dWw2cFJEdFk1V09kZ25ZTzdPVmZuV3Axalp5NC9zV3Z0Si9acTlkTFR1c2FoSW9lS0hDcHlxTWloSW9lS0hDcEszYWpValVyZHFOU05TdDJvMUkxSzNTZ1g2bHlvYzZIT2hUb1g2bHlvYzZET2dUb0g2aHlvYzZET2dicHU2N3F0NmJaMjFaTTNmOVdUTjYvN211NXJ1cSsxbjd3dmMyQUJCd1k0c0lBREN6andPZ2NTRHJ6T2dRSFp5c3RXdnUxRWEzVlo1TDBySzh5bGZGMWFaUzd0ZlJMdUpOeEp1UE9DZk9YbEs4K2xSTDd5bkVya0s4K3RmOGxYWHI1MnlkZUlmSzJUcjEwY1hNREJoSU1MWkN6UHhZU0xDN2lZY0hHQWl3TmNIT0RpQUJjSHVEakF4WUZycmtyWDN2TWtIRTQ0bkhBNDRYREM0VVRPOGx4T3VKeHdPZUZ5d3VXRXk0bWM1ZVVzTDJkNU9jdGZYc0VTemllY3Q5T2s5d3ltK0hkV3JlQ2M0Mm1mVlhFZUY3MzNFeTZubDEwdGNMVEEwUUkzQzl3c2NMTEV5UkluUzl3cmNhN0V0VExISmpqVldwdFQ3cVNjU1hWZjBIMUI5d1hkRjNSZjBIMUI5d1VkbG5SWTBtRkpoeVVkbG5SWTBsMUpkeVhkbFhSWDBsMUpkeVhkRkhSVDBrMnFtNVRxbE9xVTZsUTZaclh1RkhSaWhRUzkyUHd2TlRYN202SzlUZEcrcG1oUFVyUW5LZHFURk8xSml2WWh4Zml1TTBlY09XSnZWM1AyaU9mUlpzK2p1bWZSWnZ1M210RWFVcEFacldFdjF4cHh4SWdqUmh3eDRvZ1JSNHc0WXNRUkk0N0VUWEs3WEdhWFU3VzhuZGxXWGxjNkhzUWFuTVlaWEpxSDVlWmhlWHNlTHFyeitadnhOK052YXhmVDJzRmt2TXA0bGZFcTQxWEdxNHhYclYxSnhxdU1WeG12TWw1bHZHcnRRcktZNTlyclhIdGQrNWx6cldmSWxPK2N3L2ZkYllXdno3ckY4YUwyZkRmb2FkRFRvS2RCVDBQaUN4SmZrUGlDeEJja3ZpRHhCWWx2eld1RDFnYXREVm9idERab2JkRGFvTFZCYTRQV0JxME5XaHUwTnI1V2NQM1h1NlVyTzZFWjhTby81K3FtMDQ3aVp2NTRhc1dpV0J3L2loL2I1OTRWZDhmUytMbG44QytzR2ZmNkxYOS9QT0MzMElQeGtEWDBzWGc4bm9nbjQ2bjRYVHdkZlo1Uno4YnpzU0plakNSZWlqK1psVlV4WUY1V201ZTFzVDQyeEZCc0RFL2V5TVYvWW10c2krMnhJM2JHVy9GMjdJbTlmcjIvRSsvRi9uZy9Qb2dQNDZQd1d6ME94ZUU0RWgvSGFJekYwU2pFc1RnZW44Y0p2OGhQUmRsY243RmJPR3VPejhWMFZPTjhYUHcvZnBwd2lnQUFBSGphWTJCa1lHRGdZdEJoMEdOZ2NuSHpDV0hneTBrc3lXT1FZR0FCaWpQOC93OGtFQ3dnQUFDZXlnZHJlTnBqWUdZUlp0UmhZR1ZnWVozRmFzekF3Q2dQb1prdk1yZ3hNWEF3TS9Fek16RXhzVEF6TVRjd01LeDNZRWp3WW9DQ2tzb0FIeURGKzV1SnJmQmZJUU1EdXdialVnV2dBU0E1NXQrc0s0R1VBZ01UQUJ2Q0RNSUFBQUI0Mm1OZ1lHQm1nR0FaQmtZR0VMZ0Q1REdDK1N3TUI0QzBEb01Da01VRFpQRXkxREg4Wnd4bXJHQTZ4blJIZ1V0QlJFRktRVTVCU1VGTlFWL0JTaUZlWVkyaWt1cWYzMHovLzRQTjRRWHFXOEFZQkZYTm9DQ2dJS0VnQTFWdENWZk5DRlROL1Avci95Zi9ELzh2L08vN2orSHY2d2NuSGh4K2NPREIvZ2Q3SHV4OHNQSEJpZ2N0RHl6dUg3NzFpdlVaMUlWRUEwWTJpTmZBYkNZZ3dZU3VnSUdCaFpXTm5ZT1RpNXVIbDQ5ZlFGQklXRVJVVEZ4Q1VrcGFSbFpPWGtGUlNWbEZWVTFkUTFOTFcwZFhUOS9BME1qWXhOVE0zTUxTeXRyRzFzN2V3ZEhKMmNYVnpkM0QwOHZieDlmUFB5QXdLRGdrTkN3OElqSXFPaVkyTGo0aE1ZbWh2YU9yWjhyTStVc1dMMTIrYk1XcU5hdlhydHV3ZnVPbUxkdTJidCs1WSsrZWZmc1ppbFBUc3U1Vkxpck1lVnFlemRBNW02R0VnU0dqQXV5NjNGcUdsYnViVXZKQjdMeTYrOG5OYlRNT0g3bDIvZmFkR3pkM01SdzZ5dkRrNGFQbkx4aXFidDFsYU8xdDZldWVNSEZTLzdUcERGUG56cHZEY094NEVWQlROUkFEQUVYWWlvOEFBQUFBQUFQN0Jha0FWd0ErQUVNQVNRQk5BRkVBVXdCYkFGOEF0QUJoQUVnQVRRQlZBRnNBWVFCb0FHd0F0UUJQQUVBQVpRQlpBRHNBWXdVUkFBQjQybDFSdTA1YlFSRGREUThEZ2NUWUlEbmFGTE9aa01aN29RVUp4TldOWW1RN2hlVUlhVGR5a1l0eEFSOUFnVVFOMnE4Wm9LR2tTSnNHSVJkSWZFSStJUkl6YTRpaU5EczdzM1BPbVROTHlwR3FkK2xyejFQbkpKREMzUWJOTnYxT1NMV3pBUGVrNit1TmpMU0RCMXBzWnZUS2RmditDd2FiMFpRN2FnRGxQVzhwRHhsTk80RmF0S2YrMGZ3S2h2djhIL003R0xRMDAvVFVPZ25wSVFUbW0zRkxnKzhaemJyTEQvcUMxZUZpTURDa21LYmlMaittVXY2M05PZHF5N0Mxa2RHOGd6TVIrY2swUUZOcmJRU2EvdFFoMWZOeEZFdVF5NmF4TnBpWXN2NGtFOEdGeVhSVlU3WE0rTnJCWGJLejZHQ0RLczJCQjlqRFZua01IZzRQSmhUU3R5VEtMQTBSOW1LcnhBZ1JreHdLT2VYY3lmNmtRUGxJRXNhOFNVbzc0NGExQnNhUjE4Q2dOayt6L3p5YlRXMXZIY0w0V1J6QmQ3OFpTenI0eUliYUdCRmlPMklwZ0FsRVFrWlYrWVlhejcwc0J1UlMrODlBbElEbDhZOS9uUWkwN3RoRVBKZTFkUTR4VmdoNmZ0dmM4c3VLdTFhNXpvdENkMitxYXFqU0tjMzdYczYreHdPZUhndkRRV1BCbTgvNy9rcUIrandzcmpSb0RnUkRlamQ2LzZLMTZvaXJ2QmMrc2lmVHY3RmFBQUFBQUFFQUFmLy9BQTk0MnNSOUIyQWIxNUgydmwwc09oYTc2QUJKZ0NnRVNJSUVTSUFFQ1BZcWlrMmtTRkVpcVM1Um5hcTJiTW5kbG52TkpVN2MyN25LanBOZGtPN2xaUHRLMnVYU0xPZnVrbHh5eWQwZjNPOWM3RGdYUnhJSi9mUGVBaVJGU3k3M045a2t0b0RZZVRQelpyNlpOMjlBMFZRblJkR1Q3Q2pGVUNvcUlpRXEycGhXS2RqZnhTUWwrN1BHTkVQRElTVXgrREtMTDZkVnlzTFp4alRDMStPQ1Z5anhDdDVPdWpnYlFQZG1kN0tqcDUvclZQdzlCUjlKdlgvMlEzU2NQVTRKbElkYVFhV05GQldXV0gwbWJhYXBNQktMb3lKMVV0SmFNL2huMnFxbDFHSEpaTWlJcHFoWUVKZXNjT1NLU1Y0VWxxd213U1FaMlZTS2tzeXNZQkpkcWFycVpFMHpIWSs1YWF1Rm8vMitvRm1JQzNDazhrZVk5em1uejJyMnU0eEdsOTljbW9odHBCa2wwd0UvOUdEK3FzWG40aEpNSGQwNzkySmtlSFJES3JWaGRCalQrekx6T3AwQWVyV1VsYXFpWUlCVVdOVEhaMVI2U3FNSWk2WVlFbTJFWm9iUGlBd3Y2WUEyanM5SWRoU21xcW94Q1NvT0FUR2hrb1hEbDBjMU5HZmllQnA1Y2tlTTRpb1V6cjc3a0dDeENBL05IeEYralZHVVlqVThQMEhWb3lFcUhRTitpU1h4dEJIb2tIaHpQRDVUbzRnWkRlRnAxcE9zQzlqalVvMHlNeDJvcUl3SDdMRVpyWXJjVXJwVDlmaVdGbTdwQkpNVGJpR3hJU3FXblpSS2pKbDBTWmsyUE4xYTR0UEFCL09TR1FaZ00yYWtSaFFXRTY1WG14Lzd3dzhwYTFncnhpS2NxRDhoUmRTbldKRS84V3J6YlgrWUl0ZE5jQjMrTEl5dm0zakpxVDRseHZocE5xWTN3NFBKYngzK0xVYjRhU0hDbS9FenB0MGxUcmp1SWI4RCtMY1k1cWNyd2liNWJaWGtiZkFoOGZ3Zkpza1ZlRThkZnM5MEt2L09lbnlkb2RMNmNBVCtvVllycTlUcGVSaWgyeE1JVjFSR1l2RmtYYW8rY3I1L1lxc0x5NmNSdGFDNDJadE0yT1BtWnRTQUdLODVIck5hVkV4Y3BRejVHVGhXZVJtUVdXMU4wdXhsT0JSR1pqZ3I4WnE5WXpUekw2dXljMHBGK1QrTks1eW04R1pVdlRsY2pNYi9YY21XdmJIcWYzalk3SDl0S3VmTWFDejdEMk9zVXdodmVvMFRVQUpWcjhyK0Evb05xOVh5Nks2UUQ2R0h6WlpzQS9vYmoxcVIzUTduMllPdXlteTlJS2dVNkw3c1Zyc0ovYTJoSHQxRndTeDhNSHRLNFZjZW94cW9aZFJLNm0rcHRCVnJJa3lLZGsxR0RJSkFoNk1pZjFKcUZESmlJeS9WZ1JSck9CQjNUWjA2UExPU280cEJXVU14c1lhWCt1RldSTWhJSTdLQVcvNWo5aGtzU0lVWUFrbTZUa2h0N0NuUmRvS2R0cmJaZ01zaGZyb2c1QUttQi9GdnNZMmZic2ZYR1dyYTVncTFFYmEvYUxXNUNvSnQ3UXVjbFJwQkNLSXlKZW5xNEZXYmtsYld3R3QzU3V3WFJIOUtqSmdrcnh0bWJsVjFDMHJBaEZYWXpSR21GaVp2QzhJeVVMbVJYYVgwK3lKMGlIR3plREliRWVaOE1vTE1GamR0TjNNTWFvYjN3LzBIQy9TQ3BqQlUyejJSOGk2N2ZrZHI3YzU3dG1pUTBWaWkzL0ZnbTEzTDY4dGFOM2E0cTdhTTk5Y1ZOKzUvZktjZUdRMGwrbVB2akZhdTJKNHFXbkh4aWhCS0RsK3pwckptOWY3bTUwdU5ObDlwd01YUXQ5bHFSNDZ1N3o2MnM0WDVPbWYrdm1xZzFTOTR5NExzM0V0R1gxbnQ4ZzFOWXc5ZTBzMysxR0QrczNLUytYM0wydGFJaGE1VlZBOXNPZlBYYk4zYUkxMmQ2OXNyekJURlV1Tm5mODkrbTMyRk1sTWhzQjJkTUplL1RLVkxZUWFuVzdIWjYyVXo2UXFRWXByRms5blBabVpXSlZwWlExaGFCWWRPSXpsMHNoa2tqaE1MWXpGbVJBc3Z1VUYrV2pqVThsSTFISGJCWVJjdkRjSmhBMHpiQ1hoMVd3UlQyc2lXcGxJcGFiQUxqaE90bFNsc0tWZjFndEZzcUliTGZpY2NhYWtVV0Uzek9WWXpRaWVCeC9GWU00MFo3UGR4dEprSUJTbjk2RFBlT0I0ZFB0RFNzbitrcW5yVnZ1YVdBOFBSd1VEVGNDUXkwaElJdEl4RUlzTk5nVEtGVVduaXVzNzgzbUNqVjFhdFBOQUs3NDVXait4dmFqbTRzbXBGb0hrNEdobHBDZ1NhNE4wanpRSEZ3TVF0YXlPUnRiZE1qTitNWDI4ZUh6elE3Zk4xSHhnY1BORGo4L1VjT0RQSjNxUFdudDVsUW1NVHQ2eUxSTmJoZDA1RUloUHd6djNMdmQ3bCt3Y0hEeTMzK1pZZkFqdTY5K3dIN0dHUVJTczFURjFIcGVOWUNvMVlDc3RVbWJRQkM4QU5CMjREMkVMS2JkT0FMeG9oWEc4RG45UEdTMnJncXgvbWxoOU1IQnlhd05xRHRTdkhjd21zL1NwNGRmb0YwNHlCYlZ5MkltQlBpU1pCN0V1SjVhWjBxRHBKZU85ZUJyY3BkWFVTMzVhNURncGRtK09wWFlrMVBoaUtNSmlUVm92TkRseFBZc1p6U0lXZFJoUnh6R0ttSjFFd3hERjdhOWRkM2R2VFU3UDV4cEd1eTlZbWFVN3ZNS2c1UnVWdkhHOXMycmE4ZFBWYTlLMUlVazNyOVNtNnF3VlZyelU1K0I5RjlsMzdsWlVEWDcxaytkYkd6WWZybDE5OVlIMG9XNjVrTy9mMmw2R0xlbS9jUDFZNGZQL1k4c3NtNHRHaFhTbEd3UnAwQlYzTjRXRFhocnBWOTQ5bG0zb2Y3VE1ZTjMxdmZmWmR0Zkh2YXlmYUF2R3RmN0ZsOFBCZ3lOc3dXSTMrbmxVVkRXMCtDSzZMUXRoM0lnUHhuWDdaYytiY0poSjFlWjlKZnZSTG5lVzhoMXprRitIenZwSDlrRWJLQXNvSk13cUpMdklaQnZqN0F2bnZNVXZ0TnJEZVN1Q2dDUjhaVVlUNWhydHRhakJzVUYxMnhSV1hxN2p3NEZTYm03N2h5TC8rOHRkSEMxUkdyZTV2c212Ly9kK3lhLzlhcHpXcVhVZi85WmUvZ3VkTVpqOUVMNUhuSk9UbmFFK0tWR3pHSUp0UkF5K3hzZ3JnQjBzR0xjd3dXbTBIS1l1c0lETFlydGxya2dsVGJRMGRDb1pxV3BDYndWTkdGUXBPcWkrLy9JcWpLc1NGVjB5MUZ4VzFUNjBJYzcvUTZ2NGFQZmx2LzQ2ZS9CdWRsbE1YSFAzMUwvLzF5SkZmL2ZMWFIxd3F6TU9ybUh2b05IdUtxcVdTbEZnU25kSG9LUlhtWUNJcWxweVUxTEZZYkNaQTZKSzA5bGhNU2dKRmdSTEJOTTF5eFdXZ2FaZ3ZTVHRZMUFocVFuR3JSYWxxQnBkbkJ6NkRtZlVnVlNpQ1FtNVVoUHkxTllra2g0d29CRm9IaWhtNnF1QXQzc0twVmJXc1dtL2wzM0tkTUJhWVRDNytMZWM3UnF0QmlTL3JiTVlUcnJjNGw5bnM0dGlCeUVHdDJXUjJtLzc1bjB4dXMyRFJISWdjMEdocFJxTStFRDJvRVFSVGdmRFAveVFVQ0VaQnM3L3lnRnJETUZvMTBaRUQxQ3VLYXNWZlVqcVlseUlWRlZWeENTa3pJaHRMVXdqakVrcXJDYWNSaFE4Umc2ZWxub2lEamtrYXNIeUtXRnFqeGZjMEtuaWJWb01QdFpRR3BDS3JSSzBYbE1wcjlRcCs0UUI2ZVFpOWt1MGVvbS9wUTkvUHh2cXlWZWdIc3A0ZXpNNmhJUFVOcW9DS1Uya25OZ3FNSHN4dUlWWXdrUVBJQzNnVS94UUJjNVVVdURJYlRHakdTWHdjaHAzZ3hHdzVFV00yTmpOSm9zWUhxMHNycW14bEtiOVJyVlJvaTR1ZENxVlJFNnhhRTRnM1ZwZVBqYXp3R3RWYVZxdlFsaWJiU21nNkx0T3luVTdRSGZRdDRQRjltQjhTMG1Ud0R4SVZVWWxDNFJuR2ltY1Exa0I1Zk5idDZPZDBZbVFFLyswVVlPc3lHSWRBbFMxQzF2a0RoRkgwQXJyR1NJLzZCR2llT2hjcG53dVA0UmxuejV4OWx2NUg5a2VVbWpKU0loTkZvaVlxYWNrbnFWQUMvQVNNbktXdk5KYVd6MTJ2OWdxcmxYVHdOR1d4VUFUTDlwMzlVREdlODRlZE9RcWRta3pPLzZtQndsTFoweGtXUEowNUk1WGxmRm9PNzUvanUwek5DS2hISnF1RnhqeVBvRSs0cGI2VmQ3dytOZlhHSGNQRGQ3eTVaK3IxTzFaT2RoNjZkOVdxZXc5MTVsL3BkOTlFOWhmSHgxL01adDU4TTV2QlI4aitwblRxa2VYTEh6a2xpYWNmNmVsNTVEVG03eXhnOFJEN1RZcW5BSWtyTWZVcUZhRCtHTEZ0MDV3U3FVRS9oYWlvQnRObXlLUVpOVlpIaGdYTlZEUDRVSzBFelRUQmFCZzE2QTZDc1NBT0RuUjRKSWpvS2VoclRSSjhyUzgwaXg3dlEwMXpWalRBWk4vU3dyUlJOS0ZEcHgvcTcxZmM0dzlsZndObUFGSFhBejFoNEdlTVdrK2xLVXhQcFRhVDltQnVHckhLeEtPaVMrWm1lU3p0c21BU1hEQTVNRysxMkU0WU1sSU41akhtTGV2QnZLMEU3WllVNVdES2pNSTBhM01GaUxPS1k2M09ZUzdNVXVLci9LRm1KcTg0S3ZCV2NXL01Wb1N1MTJuUWZ6YnRHcWlvSGIrNHRldWk4WHE5MWtNcjZXcjl3T0g3eGtmdXVhZ2p0dnBRYzdiZTJ4MmdEL0lXdjg2aFJ2L1ZmUGpTSzdxSEx1a1BsUGZ1YkFvZzlmb3ZUOVpVYmY3eTF1SGJyNzJzSlZ1dFZwdjVGSmtiMTUvOVFCR0Y4UzZuYnFmU25YaThIR2dQMTRrSHhvRnhTTWVJSW1rQVBUazZZM24wMUJNVkswOUtwY0NGVWxtbmtpQWJkeEwva2RzQjNIRHpvcm40cENDMUFEdDY0WFpwSmZDQVVRTVAzTUkwRjJ2c3hHWlVjb0NrSktvRnJqb0ZzVEVsK2szcDhrcnMyckdCeFFiQWc5enN2TjdWbnN1c0tGckVLemZLSTZqclEzcTl6c0txbGJaQTdjRE9qblczclkrVWIzbnNrZzFmMmxRZFgzMVJjOWRGWXcyYzJxMWlZNGIrdy9lUGozemxRR3ZGd002bVJ4OWZmdVh4eVN1ZTNOMkF0Z2lzMW1neEplc2JJb1ZOR3k5SmRsdzBYTDJNamd6dGJ4ODQyT3NyNjluWmttTW54a2JkaDFiWEc5MnYzVEYrNy83bTlqM1h3M3hzQS8wNXlqNEgrbXlqZXFtMERtTWk0cVlOZ2c0WndpSVRsd3lnNEdxSUx1eFJVWGNTd2wxSkM4Z0hqSzhENjQwdXA4V0NBUTZvbElnRXNJeDVYYllvd3dqTXJoZmNlUkswT3BGc28zKzZCbWtNeHQrTnpZMGFCV1l6dlpkbTBHK1pkMlk3RWpwRGRoTjYxS0JMMEg4U1NpMUUxdmVDckJXQUhhTFVQMUhwTUphMW1zbWs3VmpBUmRyTWpOY1V0Z09GNXJqa1ZXZkVZcUN3S2lvYVRrcEJFR0oxTG5TZCt5T0piRVE3QkRZUTBVaEZtbE9jNkQ3eHF1RlhiOTJJYjdCaWNVUnlGNm5oR2l1WmJYRFRla0swOHRNV3E5a2NmbFg3bFJPL2duZnBRRCttUGU1aWN6Z052NHR2TGI3VnJ3UlZTS1hoWGZCQ3pWaHRib3NuSWdlZ0dxdk5YdVEyV3p6Rml3Tk5CRlNCOGppY2VJYVpZT3FuS1NaSU5FZU9meGFaSzZVcVpNYXM4M3NaWXRqbXdmYTloVnFMSVRZNDFiM3F5M3VhSXV2djJsUi9mVS9ySWZxMkF2ZmNIOWQwWFZaMzhPc1hOd3pkL09LT3hyMmJoZzZXR2owbDdzVDJlemF1T0xhK0Jwdkc2OG90aGRraXdkaDY4YU1iTG5yaDZnNXJJSXJ0OFczQTR5cmdjU0ZFSjJEUkhKakxQblVtcmNRNndGVTRsRENGT0NWTW9XcGlsb3RnQ2hYeFVnaEVid1kyeCtBMVZBUlFROGM1VkdTT1ZQancyTXc2ZVZaZ215RjdCTlc1WTFscW9XOWJ2UlhkSnZoWFo0ZUthMjJOVDI5Wi8vQ2gxdTRycFYzYm5qblN2akcrN29hUnNUc21hMnMySFJ1YXVITkxEZnI3MFpNMzBCYkgzUGZLZXdQTjNVMEhIdDY2NWFtakhXMlhTMk1yYjltYVRHNitjWERreHZYeGxxMVh5LzcwQnREeEhwSnZjaTNTY01tb0pmNHc1d1N4SHdWb1JNSk1sRWlDenQ3QS9MVktPYmRUWFdodnB4OHltR2JmMFBIczdwWUt3YVU1L1RQZXlub0tyRHorZklhNkhIaFlCallwQkpINUlQVW1sZllUT3d5eEJFblI5Q2t6TTIxSnZ4RjB0UzR1dGFuZ3FVT0VtYkk5RWh1eDVkSENzVFlxTmNvbUN2UFZiY2hNVzl3eE5ZUW5jSEZaRkJ0eGFhV3MxOEx6YjErSjFaY1RXVjdzT0NHbDdLZEVKd1RzZFNrbkNjeFpaNnFEcU9NTTY2eVREMGxRdnF3UlpHWDBWeWFKckpMWXlybkJpMHA5YlhCazBhYm1veEttZGhFbVVNbm85YnlSNFpMenl5T3JMdTVxMmRydXI5Lzd3T1pORCt4dDhIZHVhVmwyMGFyb3NpdWUzN256RzVjdm02emRjc3ZJeU0xYkVzdjJIbXRxdW41cVdUUTRkTm1xa2N1R1NzTERSd1lHam82RTBkVkRWNjVyNGsydFkzdWFCMjZhVEtVbWIrNXZtaHByTlJtYjExMDV0Tzd1bmNua3pydlg5MXd5R28yT1h0S3o4ZXIrNHVMK3ErbWQ5WHRIWTdIUnFZYm1xYUhLeXFFcHJOc2l5RDBHY25HRGR3VGRObFA1T0R1aXpzeTRBbVljWEx0VXNwTUVjWGlBelI2ZVFBMXR6aTJXZVRDTXRydk1oRitSQU9pMmxyS25sc2JNS2dTR0RrZHJCSDk4Z2tsaTErWEhKemM5ZG5HclBkSmVucjNlNkI5RFgvZlVXQnVPYnhxL1oyL3o1dGo0VmYxcmJ0bFFGVjkzVmQvUWpSc1RDdVg2Unc2M3R4MTVlbnZkanUxVFRYTS9kdENyd3dPQjl1VU5VL2RORGwwekhtM2NkS1JwRUtaMWZOMDFCRlBkRFpodm1Qa0Y2TGVmcWx4QWZhSTNLdGt4NWdzUUVJc050elVqRnBJWHFlUjh5RTg0OS9SdTQySWdtRHozYkVuV2RHd0pTaVIwQWFhVzZhcWtPbklXM0FwMEdhTXlGbzFFUmROSmlTcUdtTVVCbEduSml4UUZ2anRNOCtrTFNyS0d3YlU0UHBHbUNKb3ZCTHFYMEswOFB3Wm5yajZINURucVV6SDVFOGpJUEtFWUJEOUptV3NSc1JSS0ZZVG9PSEI2Z3FIMC9OeDNmS1ZoRDUwd0d1Z0h5dEd0SFRwZWsvMVhRYXZoczc5VUM3b096STluMFg4eXA1akxTRDdkSlNON0NITUExTE5ZQ2RWUlNUTnZpUkQ4UE1zTXprck1JUHJQdmo3VTJ0OVA2SUIvUmdXUzZVQUVraVZ3cElhQ1RRaFpFZEliNldSeG1TVWd6SDI3Z0tHUXNVTm5VcUZpWHNOeWF1VG1iQjNaUzhxQkR0L1pEK2tmd0x3b3BlcXBLU3BkaCtVUzBlY3d1QmRqOElhb2FENHBtVGljNFppMm0rSWNUQVdRVUZsVWlsdEoxcU1RVHhLQnBJZ2xreGxQRW0ra0RpYzk0b0xJcDhSQ0FPckUxWGtqY0kvU21vSnl4bU1lQWltTXlCOENHNlBJenhHQXUwdkU2eXZzR3RsU3YveXFUWFZWdmF2N2FtaDlCMXZkTTlwVEhlN2RWTnU1cFRPa01xcGY1RnplUlpFS0d5Nk1sOXJEUXhjdFgzRmd0SzJ1M3ZmTU45bnlsc2FtZ2NtdTVKb21qNzhpb0Q4emNCNDkzWDlXcnl4bFI2Z1YxR2JxMjVUWUc1VmEyRXk2cFJmRHc1Wk9nSWZHcUdpTlMyRkZSbHdWRTlkSEpRK2JFV3RCYkJoYWJpRzJveDVZVmM5TExtREhJTVNrZ3p6RytETkJPVnNRNUtVcXpDOHVJMjJWN1hkVDV2ZmZrdTMzT0M5T25KRDh5bE9pN3dRMTdmT1BUeEM3UFg5RXNJTnBVREM5eUZvOXRTMjk2NEdSVWxVUVQ0LzJiakk5akMwa3NTcXRoMm55Z3BaeW1hcnFjK2tsVXlLd2lKOGgyVGpKaHQxbVp6alE0blBzRk1JcEU1c2lIa3RnTU90QlNvWGZGd2pTSmZsMGt6bUNzS1QySC9raHNqOXl5K3hiRnpmc3ZHMXdZaTJkK290VnFWVjFCZTNYdkhaSllsTnd2VjV2RDFhNzZ2Y01WMjE5N3RmWDNENzd4b0dML3c1cHZucnZtZTBxSGFma0w4cSsvOHp4N00vKzhVcjBucVdzc2F4a3NLZkZOdXlzOGErN1oxYzlIWHNPbGJ4MzJlangwMDhlZVBuNm5vM2pHMGRMdXpZazEzeno5akdUS2Z0UXRNOWRXZWZWTlIzNnk4bDcvL1ZyUFZQdlpEOTY3SVhzKzY5c1hOYk9jc0grNGFudm80bzFaZDF4dDdOMTN5aHFVcW43am40Tnl4Y01JdXNDLzI4QWpGc2hSMG1BYTJXWXErRW9nTG1TQnM5QWV4UmoybHhFWnNaQkQ0cVRYQlNEOC81K3N4ZkJWQU1vWTZSWDdxSlhydVRNN0hOemRjOHFMTVlQNlZ1eVAxVnhhaFduWW8rZlhtTTBvQ2V6YTNVQ3pkRS9FeXFkVHB3SnhqamhQZkJIWHdNNkxKU0hLcWYyNU9JMUs4UXZCSStVUTlCUzdDSGtGR055d2tTenJHYU1iUUdUa3FTajBaeVpWaG1kQUFxQ2NEMFlsVlFRSEZmQWphQVZhTmFET25qd2dURWxGZ3R3S3BhYlJCVWVpT0JkRW5xVWVHTUpJbmVJTjRrS0JQM2U5OUJqVjd4d2FYMXAvOTd1NTE1cHYvTEZpN05mUmxOLzlVN05saSt0elg0Rk5VemV0VGI4Nmx2WnYyT1BWMis4ZFUxcXowUzd5ZlhOdjFqM2xSMkpWVTkrdFd0ZmY5bEFmTldldWkvZlEremwxV2MvWUNNa0xvMVQ2UWdlcDF1YnN6QVc3YnpMZFZxSW42VWtpMXN3eldncFE3RHNYTjJWVndFVWNrWTBwNGNZU1hya1hDaWlyOTd4T21JZkhqeDJjRnRWc2Rxa0thcG9YbjJ3Ky9wZlBESXgvc0JQcmxoeDJmYXhNS3RWYWxWbGxidXZ1bWZpbnRNemsvUzdUeUwrci9mWUs5ckRFYjIxT0Zoc1hYdjh3Ni9lLytIVDQ2Q09JWVZTVlZFMWtDemE5VFl5RWRzQU1tTWZBSm5wS1NkVmw1T1lnY2xKek1sazVuT1FJQTZEdkhTbXNzanBTTW1KWTZKNTl1Y1RGQ1hlL0pUenZrZnpEMlJmM0xidHhld0QyUW4wMUxHZjRtVEVUNDlsSjlqamsyOWsvL2owTTlrL3ZqRTV1dnFKMzkxMzcrK2VXRTM0aW5Xb0FlalJVZDA1YWpSNWFoUk1ab1pWRS8xaE1XRjZRcGpHTEtmSVNQcE1vd05yUnNma1hGa3VRU1lueCtTZjk1akpPU1Y5MmR5TjlHbjIrSnE1RjBmbm5saERuZk5jRGRVcVAzZmhtV3FXUEZPTm42azl6ek1oS3M4OVVMZmtnZkxqN3A2YndnOTdaTTNjZG1wZWQ3YUM3dFJRKzZsMEZkRWRaa0YzWmtyS3FqQnlLOEdPcWphdlJxS1RsL3pBL0RBRTl2NHdmcTYvRko2WXdEbDdKMWhMZ2EzQzJkbXdJQm0wMkdxV2dNS0o0WlJrS1NNT3l1QThqOTdOcCtKemlvY0QyU2JrRmJEcWdXRzhldnNieVBEMHlPMUhkMVVWYWdTTjJ0aXc5V3U3Ny9qTm8yUGpELy9MalgyWDdkNVlsZjBQSFkrK2xEaDh3MzNySHNwbVg5MU92L3NNRXQ3ZVphdG9LNjgwS3BTVjFhR0paejY4NS82UGprOFlQUlVGNkNaT2s1cWJDemFVV25QcUovT2RyU1h5YnNsWkxwVnN1VVEyUHNOb0NlY1oxYnkwZFdZY21vczZzbG9CTWlEMklTOW52Q2dmeC9HNDhONXU1clpkdTJZUHM4Zm4xdEZQbkY1RHZ6alhLejl2RG41dGgrY3hsSGVSbkhIcWtXVHI0ZFB3RHp2L2lYTzdzTVdULzNidDJRL283OExmdWlBT2tpTkpIWk1CV2tRbGpuQW9pQ29GOGxrRlpKblNESjlUaUtlSkRxZFRtWlNvRkVRRnpxV1NWWS81bUZoZXdRY3J2SlptRUszbk5LNUF4TDNpeXJISTdxYjlqMDFHTmhxNElxT0dVNmxWMWRzZTJNbDhhN2Irc2xldmJ1VUlQWDhDM3ZuWTV5Z2ZsY3J4enBiam5RRjQ1NVY1aDdYSVR3Ym5JN3lUQXBnbXhnczBtVkx5R09YRkZySUVSbkxtZHVJVVVJUUpJK0ZQTzFlYml4d1dQYjJjTDdTT3p0MWtkcHR0UG9GK2NMVEFacGg3UUdlMmU1M3J3VTFzWnJTY2poN251YmxMTEtCYkx1dmNjZ0NLaDNTQ2pwMWJscE16ODN2Z0hadjNVQktUbTlkSVZPWjVuMmFvZkRwUlVpMEkxZnJlVGxvRU1Zamo4enFqM0ErZjVjblBWVkhJamRzWXo5ZFhlQVFTN09CTXBBQTREdGRUbUNEWUVkVTRJNGt6Z09yQ2xEeDh3QXJJWmdlaEVBNkErdURzWkJqNVFzaG1GZDViemdrYWVybFJyelJvNkpSYTRIcldLK2IraGl2Z1hjYTVGeG4ydU5Jd3l4ZDVlUy9IL042Z1BMMUc4ZU9Db2xsOVFRSHpYKzZDTTVXTDlkdVV0NjZpTGtlckJtZzFFMXBOQXNHY2VQMU5CN1JhaUkvR05DcU5pMmdNWWxYeDU4aUtBMW5Nczh5Nm1JT2JIUVk2VlBvekRrK2g0c1RwTlJiRmYzZ0t6alJpMjM3VjJRL1pYeS9OUmVlOWxGKzdrSXUyTE9TaUxmKzd1ZWlydHIyVXZSZXMvdVFrV1AzNzVsN2F0bWYwZ1pQWEhudnZ2bFdyN252djJMVW5IeGlsMzMwYXJNVHVYZTlrZnc4ZTRQZHY3d0pySUR4ejN3ZlBqSTA5ODhGOTkzNzR6UGo0TXg5aStrRy9GZnVJYjdKVDdZdXRzaDJRaE01QTlGdUhrOEFPTWd3OWRsRXhVUzk3S1JhbW54TnowbzY5RkN0N3FXSUZBUWRlSjVvSEJYOUNsMUJuRWROOXcxOWRtdjBENGpiZHM3dnUrOS9OL29FOS9pLy9zUEhSaTF2blhxWWZyTjF3VGYvVE16S1d2aXI3bHRJRFBNWDVwTUY4UGluUDB3cnRRaUxKTXA5SXdqeWRUeVN4Vm9lUkJOcytCNUJsVFlrVlFscHJwRkpMMll1RGJqSUxQNHZORmNPSGU5SFJNWXRQbi8xdTIxMURuOG54Zlc4OWZtMGt1MWZIb1JVRmhlZm5mSjczUHdmZTI4RzZyTTFwcmtIV1hNa0g3TGM1Q1B0dHFubnpZZ2YyTzJLaVhWWWt6UDRBVmlRN2FJOUpLeThjQ2pqSmJDUDFFcUpQeUFzbEYrUGE4bVlIaFpFVHhSZmtjL0RNbjFOVDkyeHltdEZIYTNtSExsc2xsSmEvT2J2cHZsMTEzMzA3K3pGNy9PM1hSbTdaMmE0MXV1YnVnUGl3ejI2YU8wai9QTEw2YVA4RFg1WHR4ZmpaRDVoM1FXWk4xRDRxM1lBbHBnWGJvMjBnSzJrNHAxNkVSMVVLMTBxTDhMVlNQMTZFYTQ2S2pwTlNwU0VqVnZLU0VZYVNNR1NrRm5pdGRKQlZNZEVvdktDMUZKWEVHbkJjbURDSnhUQzZVaTEydDQ3aUJIRzN1ZHFQbk55VStkQkVwVlQ1WkNtQzYxWG13cGZ4SWoydktTcXI3OXZhdlBxbURkVXQyNis3NWJvZHpjbmREMDBlbk81MWFnUkQrZktwd2NGTFY1WTM3eUIzbWkvOSt2NjcvdUg1U3FNalVCNXcxRXhjMFQyd3RiMHluQmkrWWtQUGpUdWJ1M3VqQWdwR1FwVXJ0dGYxYnVxTVZDYUdqNHl2ZmV6U3ptMHlUd0lnMzF0QXZpcUlrY2s2anl4YWlzR0xQVGhZRjVVbnNSRFRyQkt6aE1Wc1VyTDRVSW5YSGhjaWVienVHRkJzeXpJNzJhSHg4ZE1pTzBRKy96dG5mOCthNGZPZFZKSktXMGx1V3l2YmU1R0w1MEVsbUh4Y1VBYitXK0xOdWFWbWhreUwzRnE1WlltVGpORGYyZFYwOEttZE81KzhxSEZuMzEzZnZmcnE3OTNaVDVjeDE4eGV1KzJiMS9Vc3YxYmNCc2ZYSFBuQi9XTmo5LzhBMDRGakl5ZlF3V04veitOeFVyS0R4S3RZMkQxUUVzWG5ZS3c1NXdzU09XZm9ONDVBRElUKzAyelFtZER2V0xOeGVPN1pEZXh4bytITWltaHRzbEtSMWdrQURjQlNVNVRxeC9DTUVQVnpLaDNDei9BVUIrUHhPSG1VeExuamNXeHBzVjNGc2ZIYkg3OS9ndVRzcVFnbktuaVI0aVhHY1lxRlF5bmtPUFZxNCsvZTMwVnVCM0hWMlFsSnk1OFNkU2RlZmNmM2ZpcWYwT2RFN3duSnJEMGxtazY4MmxUeHV5cjV1Z2ZYTnZIWTZUbDE4SEV1bUllNlV3d0ZHcTdRNmt4bXA4dGJzbEFiaGxwNUtuL2Q3U24ybGdSRDV5c2ZrNmdRWUV1VnpTL2JwM2dNSjRUbWZXWE1kczRwOHFOZ1NBbG1TMWpqVnFOOVNnM0w2bFRvZm9XRks4SnN2RitsWTFtMUN1MWxiTnhRdG01RGRwVmFxZFJrUjlhenh3dlBqRnVpTGxmVW9uaGFKd0I3eHkyVkxtZUVuSUZQelRnTEM1MW43TExlQXE4VnI1QjhmbkRCOTlONXRTcUtZdU5EU1RUMm5pb2I4WjRhUk1TYXAxSWpXeG1TQ2ZjTHRENnIzOEZ4TEhxWlViUG91SkxUVFdaMXRHWUhKN0RacEVLYmJWV1o5ZlQvb04vV2ErWnVWQnZWOUlTYW0rdWNNd01tZU1ESXpWMm5FVEJOTHFBcFRlTGVxbHdXbHNxREVhdWNhQUxsdHVVeVNRU0JVUEpCWHVVV014R21rMnN0ZUhmME1HZFZxNjBjZWxocDV0Yk5aWGF6eHcyR3VSMk9DcHM5N0tEdjB4bG5uNTk3bGw2Tm4zOEpQUDlwRXYrN2M5Z0tjQ2xaNFpBREpTNks3UmRGRmptVHlJc1hBbFRJYTcxRXo5dy9lN0hDenMzdVpCNE9tazJzYWszQVpqazl1d1ovNWpRNHcxTktBVDR6U2pKNWFqWWpxcUlTWXNubjRjbXI1ak5wTmNGcmFnT0p1bklQTWVjWHh1SjRzWFFhTFROeFAvNHhaOHIrUWVVSkdJUlQyM2hEQ1lYTy92bnNzL1RKL0JvN3RYaU5uY0ZhaG1Xa0xpODEwbGVXQ2w0MSs2UGdxYXpaaXVuYUIzU2w4M1Fab2hJRGRDbmhUM04wS1FBR0FGMEtQYVpMZ2VuUzVPbXkxeVF3dkpOREhPOCtIbFBGbzg3czZ4a0RyM3lBNXdKL3huVXhQMkRpekxjSVhzdlg4MUNrR29WWVJYTjBBWnpsbDdUbEJJcWNPTUZabEIrZzlVMW93ektkaWYxWXc3RXNwL2tUeXh1WU9IM0ozSzJjRnIwcGVBUytXTWkycTNsWm42bnNiNW5RMlFqRUkzWmNheUJSYkFiL2tGb0lPUXF4Z28xbFFyUC8rQ09DbzhjVVQ2S3ZnQy9UZ0Y4bWFqYWoxRk5HWEMxRFF0TVoxa29aRlBsSTFFeldiREdCWXh1Y0R2MmpTYjFKemI3Q21mNm8wbUlmdncvODRocUZIdXhXa3JxQlNoZmcyZVNONTFaMzJFemFnaWlTT1VwcnlMcTZodE9FWjlpNDM0SURjRXhpM2FKVkhveHdSRFltdVhEOU1pOFZHVE40TXFid1dqTm1scEFTWTBLYXMyQkRJaGFaUkRkTWdqaGVucUhjcVpTa1ljbGI1SHg5RXJ0OWtqR05vdHlpbW9DUGx4U0hRWlM2citlaGo1Ky83RWp2anVXVlJvdE9HQkwzRDErK3NpemtVWEhsSXhPN21tdTI5a1UyK0pLOXBRMWJSM3NEZi9Iam0xcy9idHMzWEszWWM4ZTlaZFZsNXFLaDRack50NDdPN1N5NnJxeTkwdTV1M2RvYjc2dXl1eUl0SlVpckNEU1BFaHdrbnYxSXdZS2VXa0FmVmxKcER2T0lpa3NPNElvU3M2ZFlsUkZSTkxjR2dhdTNKVnFJa1hRV3JxVFJHTWhLaEZSa3hXaWV3M0M2R05CRFdpTXdxUnkwRi9BWVRia1lNQVJoZWRJOUQzNThTcFc0cFROOTRMVWYxUjk2Y3MvdSsrdVVqQ05ZZitlNmladlhScDU1YU5zVGJleVA1aTZkMkptZHk4NGVlT3ZPNFpHVlY3cCtNZGJkZnVUcHlWK2YzTG1lNk5mRTJZK1l2UW9kUkYxTmNsMm1WQUNrczVoMEFRNEU0dElGUFFZOGxXUUlOaUE1Z3BWY0tBQW9vNmFLL2ZQRmZBUzd5Rm5XeFhtRCtXd1ZQZEY4K0xuOVd4OUlPVm10V2h0b0dHOGR1M2w5TEw3dTJGRHYxdGFnenFBdWNDeWYyRlcvK2JHTDJsRDI4SW5iQmxvU2ZsWmQ2QzFvUHZ6VWpxa25Eelg2eS94YXI2YzJaRjEyNHp2QSszR2cvUnM1M3EraDBpWTVlaUs4SndQd0FPODFpM21QMlk1QmhKcUx4U1JkanZjRm1QZXNDZlJPSjRoR25FSEVFcURVeGtYTFhEWTdpYTJpQkczVFpvc05KNGtGT1I4OERyeWYybkZQM1phRVM2SHRmT0hnYXorYUpMeHZ1R3RpNHFhMVVYUUdzMzZnaDE1M09sTHc2TG9wcEVBS3pIM2F0YWE3N2NqVFdJZXdERjRFR1pTQWY1aWswbDRzQlV0K0VCWEt6RXlROCtLTVQxQXhIejRZRGJqaVdUVG1JZ2crRjBFWWdYTFc0c1dUU0N0SXprS3NVQnd1aGFYd2NVb01DZ0N0Rnk4a0tmM2VUNG9wNmMwRkVSTXRoNS9idS9yTFU0MEdiczZUMkhMYjZvR0QvWlU2ZzZyQXVYTHJvZFRPcjEvZU1Vay9Xamw4YU5uZ2xXdnJhTk8rVjI3c2J6ajAxQjQ3YjdubytVc2F2T1UrTEsyZ2JmbnQzLzdKOEhVVDFiRjExeEtkODhDZ3IyUmZnOWMyS2wySXBRWndyeWd1MlpVd1YySVlkNmxWR1VtSFJ3dkJlaUdwZEN1QUFkdGk2WUpDckk4RlRvQ1kzaHpFakMrR3pjUXlGQ0VaZG9hQ251Y3JoeTlhVnR6cVpKQlpYKzZKalRiNVVGLzJwYzFmY2pQVHBkZXV1WDZzUXFlTjRweEcrNjZCcTNwbTl6RmYwdEp5cm5vZ2V6M3pNN0I5OWRRUU5Zbmk0TGV4TURZcE05TjI4eVoxV0hJcE1tSWlLclVDeVgxUnFRSTBMUnlEUUVkYWpRM2ZOaUtqQmo0ak52Q1NVZ2MyamljcjNTdHhIb2lEYUI0ODdrcUJtTVcxT0FhQ1F6Y3ZkY0ZodFpCSlYzZmhNVlk3WUl6YlpVajRwdzlPUENrdmwvVHo0dklUVXJuNmxCZzV3VTZIeXlQbThLdW56Q2MyNFNxTjZVcDhDbStaN3VsZmJnNm40WFJSclFaY3c3VWFML1NYVjBhVzkrUlEzb3Y5NWVHRlUzbXhaVzJwWUdyVk1HYWJYNWRvWGIwSkJ5OXVRU3dBVGVwckJVMnFic0RCS0lTbE9HWGxCNnRWQ21lckJVbFhBcTh1MHpUblhybVdXQVR3cDducTN2a2lYNXZkaXd0Uzg5VS9JYklFb3p6UDJyb2l4REZMbDlZSGRxK1BOL0xlaUtkblpjMm1tNFk3RGxZaXR1aitJbmZ0eGh0V2ppMFBWemR0dis3RzY3WTF0eDU1ZHRmVVkvdVNheUxqMTY1YWNlUFdWSHpWM2lOSGEwTHRWYTZXa3U3dGJlM2J1d0lseTdhM3RtM3ZMcGxhZWJoWWFLKzNSU05sZlBsdEczb3ZYUjB0ZHZ0Y3RDNjBPZGw3WkRSYTRPejBWRVJ0U3BVNU10TFpjc2xFb3FKdlMwZmxRSjNYM3pKV1U5WGdOUUJBTlpiR0doa3F0Ykd6cEtSelE3Mzh1bEgyM1UrQkl2MGQyQ2NyMVpYRG92cTQ3QldFbkZld3pWc21tdmdFSE9ub0RXVHJqR1N3a2pBU0RLMmNIMXp3QnNUakNiTDlGNTdhM1AzQ3dWWFhyQXB2T1hiVDVOYzd3ZUpmdm1aSDdlU2Q0M09INmR2dWVuekh4SndDMjVqN2dhQkI5Z1hLRERpaW1VcGI1bXNCalBwTTJvcHdtczF4enNZakM5bDRaRGVRTElsa244LzNmTEphSGdkaTkzUE9ZclBKNitCNWg5ZGs4anE1c3Mzc2hNbm41RGluejJRcXhxL0ZwMTltenN5eUZIMzI3N00zNW1nSjRheXVrNlNiZ0F3dHduQWRNSnNHTUZ1TVpKODBKekUvcHUwYUN3Znp4Q29ubi9RYUlNYnBKOFF3cFBBTXpQRkNvblFwZlhFV0dkUnUxOGpRWmsvajJtWjM5S1dsdEdZZnJOYXJKMFlVVjU0NVZqdlJFZFFxdjdPRWNwQ2xDTEo4RTJUcG5zK2xXdUpwSFJBOHd4UlJPcHhJWldXUmVnZ1gzVVNrVWpISnBSYUIvUGo1WEdyaWZLbFVCSGhZM0ZMRk9YbDByODVoWHAxdDFwcDF2RjJQZmpySzJmVFpWVUtSTzhyK2FQWml0UkZkcnpObVI3VW1wZHB1bU12cURPZzdKbTR1Uy9UdEhmZ1ZBQm9ac0t3eWpaaWdYT1lhQklsL0ZqTFg3MnhtZjNRNmt0TlQ5b2NFQSt6THhRY09QMFNuQ0VZbnk4UVVsMHBCWTR0aWVSQlFZY0FMSEdJRlQzSTRmc1A4cGdDSGpBNmtDb29rMWNRQWRqaGdKa1FES1JvMDRSUUlqcjFZUXo1ejZTRjFnVFo3Ym1rOHA5amNPU3BlVzZEUXVEc0cxbFFkdU1GaDZsaTlyYmIvNkdqbGxtdVAxRzdwcTloODZjR1JPNVBNR2RkWHlydmlCZGRkMUxLdXFTaTI1VXZyc1BwLzdjSGd3RVg5K09qdWg3ZU96V2J6Y3hMR2FxY0djanppY2lOVjQ0bHBWczJuQyszeUdPMXljb2ZMVDRUY3dJd0NDZFRNMUh6eWtBemxFN01Uazc3c2xVTUxFeFFvdlc5c3o1SUpLbU9aMDBEWE9ibllQQWJ3cTg1YkYyejQ5RnpzWjJ4VmFibjArWDM3bnIra3BlVVMvSHBweTJSMDdjMXIxOHJiVFBCckZHV1B2SFZyYisrdGJ4MDVjdUxXbnA1YlR4elovdVRobHBiRFQyN2Y5aFQrczZld1hYa3FleS9RclFjYkY2REdxYlNRcDV1d1ZJT0o5NExtNEFDdVpCNEJzellaQWJ0ejFpNklOek5TY3RMTUxVZ2FnVlJPNEZVcnZVVXBvekNCUkNyblFHRW5PZ2NJUDFWckVKQUc4TmZyUDJ3NDhPVFV6bnVUOVhldHhRRHM2WWUzUGRtYXZaZmRxak0rdEc0cU95dGo0YjYrckpIdUhsc3VnK0ZkRy9CWXhtRXMzNEN4WUR3NUx1TkpBaWJ4TkY5QWxOeFNSTWxoSUY4QWlOS1FRNVRjUEtJMHlGcHlYa1NaSk9HbWNDRkV1ZXVCcEFZVkpiWjBUdS9QSThya2w5Y3VJTXFoZ1VPdTB3L1JSUk03NXhGbHdhb2VnaWh6YzVyK1BZekZnYTI5bkJtZmw0aEZsd0VieWhlZmlNbzEwazR5R3BpNkpFRERKc3RJVmhmczg2c0xNdXNYTXBOWXMrTUNqOVRWVHh5SnJQQnpqS0MwKzZxTEw3NDd3cHpoVE85ZGNidlozTUVqalZaOTEwMXp1L0pyWXd3TCt0MUkvWkJLMTVOMVd5VUVqdlVrY0ZSb3d1bENURmtJcm9VSXhBdjVjTWpSRkJYdFlHMEFIMVhJZks0Vk1sS3pESXJlbjN6SElvTWlNeThLSjZTbzg1UllmUUpPcGsxbUFYQlFsSit1aWxZRERvTGZpM0FRM0NRNFNEQ1pvMVhWT1J4MHpobEJRUlU0TDYxVWdBdzVZVnBUR01BMUpXS3RTZkw0c0hLR05EaU5hL2ZVNXRLNGk5YnJ6c25qK2orWngxM3JZUFU2UTJueitxNjJMVzIrNnFGdFU5dUdxcU5ycmx5eC9rdE5OcFZSVjFJLzJwUmMxeHFBTzN2Z1R0WGFHMGFuSHBqeXFUWGVvRGZRUEJLSmQwUzkzbEREYUd0aXNyK3lOdWtEOStRcXJ1ME9WYlZXRm50TEcxYzNkUnhhVmQxSmVGNTc5Z1A2UVhZVDVhTU95ZEc3SE5JVmtKRE9wZ25qTFVpZXVLUW1zRHV0MXVYcjgwbkczazA4cjZpS3BmVnVmRU9QTjZHNFNkN0VqUXZvOWJ6RWNCbWNrc0F1Z01ITHlUUndSaWZraTlWcWsyUTdLVm5venRrZUhHRmdoMWVMMHl5MTMzQWlnejZDV3JNbnJNRzR1NlEyNU9EVkJhRWpiVHN1L3JMT3lEd2IxS085R2k1N2VjL2NRSGxqeUd4eldiWGhjTTJoSS9UTEJoamI3YUJQMzJET3lIYmNnUFViSjlZa1pjNzBpTnA0M282RDE4TkpaQTFvalRGRzdBMjI0eHFHMUxpSWVseXZSVWxJbWZQUkpLc3NUOGFGaUM5QzM3NzEySTFidjk2MUpWR0VOTjJ2SEJxOWVsVVlIYUJ2bXp0ODF4UGJKK2pzTEZ0d3o5aHVNT3BVTHQvSGZBOW9NK0djc29uaysxQXUzNWZQRUZHbUN5YjQvSzUrenFSQVExb2R5K28wYUpnMTZYdXp3NnVaTTBidDdNOGM1VFpiaFkwSjZEaEFVdmhaZHZEZC93QUlyNXo2TTVVdXgvNnNNRTRlSjNFRk9LOGNqdUx5R0R4ZjN0RytmMncrcjh5U3ZMTENjSXFGUTZuY2NPclZ0My80dTVROG5YeTg2RGtoQ2NwVG91WEVxNDNaOXgrUzg4ZUY4R2NPWGl6a0pUdmU2T3lBVUZwOTZ0VjN5dDh2SmlYaUFzdzd3UUx6enNkUEYvczg1dkMwRi85T3c4VkZzdy91d0l2b1RWR3RPZ1VybUN4Mmg2Zlk2NHNzemp3YnFkeWRna0pQY2ZrNU4vUFRFeGhZanRkby9hbWxMQVNqR3N1djErTEthN3dnS2lmZjhLS3R2WmN6TXdpcE5BcFdyMFltbGJYVXJrSUdvMWFoVVNOYVhiQTgrOXh5WHBYOUxhdG1HRFdiL1hlbHVYT0I3V0U3RTdiYlo5K05oRzBWZGliZ25HVnRUSVBSWTRUL1ovL0dsbHN6WVc0RHVSZk01NTc1ZUpwR3VlV0V3aWhPK2VSeno5YkZ1ZWZFZVZMUEFYUWcrL0I2bkhvT0t6aGtaM250UlBaQmRHZzl6angvbDlWbTMxUHhPbHFEL3FEWFpJY0VDN3BWWThpYTUvNGdhTkRiRm1OMm84YUlkUVA4MmZlQkhodkJnN0lLaXRib1FxRVhaYjJnRnBKOTN2WWhJMmppR3FWV3dlcVVhSVExNi9ybVhsUmFUTXRtQ0Z0K2F5d1crR0tlY2VpNDAyOXdKblFuUEtNZmVMQUNucmtvMTV4UGhaRXF6d3ZrbXZ1TjlEVnpYNkYvYVp3N1JoOEtDVlptODBDWlRaajl5d0hNMTdic0g5QVpwVUF0UjRjb3NUNHExYkFaVWp3S0liZ3RLdkc1RFM0dEVMdTBnaGVPOGhtcE1CS0xwVnVpcElBUmFjTFRuZEVXQ0daVUhmRzRWQTYzUFdHNFhVNzJ6SlNud0pZSk1ienJoV3lZZU9PamRmSlc4TmFJR0FaZDQ2V0k1cFFZNXFVT3phbFgzMXIxa1laTUlXMUU5RVR3OXVOQ3VPbmhKUlcrV2Z4SEE1a0pXbjVhclZYQkJORGczekJocG9zSzhYeHc0OSt2TnMvKzhYSHl0Z2cvWFJFSncvVksvQnVlTk4zVzJnR243ZmgzR280WHBvM1lua3JEdS9CUlJTb05uN2JvbGp1Vmh1ZmdJMEFhcmJ4S3JkRVdGcms5ZU85L2ExdDd4OUpWRy9TU1dsUGtycWljMzZ1ZW4wODFvSlhsZUc4UEJDSWxLZEZta25URlpIYlY1a0FqOW1vTmlLVHVjOG05UmJYeCtCUXYrQlROMTFqaVAya0xOSlRiekhaenFHZXFzODZrOWxVc3IzR2I3Q1puZWJMSW5TaDN3cUc3Wm5tRlQyMnE2NXpxQ2NFYmJlV045SllXVzNuS1c3ZG56NTc2NWowcktzSTZ2U2MxSEt2ZlA3VW5HV3lKRnF1VXhWWE53Y1RVM24zMXNlR1VSNjhMVnd6dWJrbkIyK3Q4ZGVWNEhpSjk5bDQwRHZyQ3lGWEc4eUdRTVVOKzVCQUlnWDFIK29Ic3ZhcWpmNzVKeGt4VDJUL1FKVVRQcnFQRTVmTGFRVjFVU29LZSthTlNLS2RuRUpKcUMwSFAya0dSSW0yZ1NPMWt5MlY3SGVoWlU3dEdUWnBmWUQwM09FSGRtdUJkMWMzd0xxNkpiTkZhRHVvV1hGQzNiMzkwajZ4dXpvZ0lvbkR5VWpWb1ZJUW8xcXR2UlQvNks2SnVob2pZRnNIbGRjMXdzNDJYdFBpbTRZOFhFVDB5OE5NNmd4WVVSNDkvdjlyODRSOTNrK3RPZnRybExJVHJCZmkzV00xUFI2c2pjRnFGZjcvNlZ0bEhQeWR2YSthblc1cmI0SG9yL3AyR1AxbWtYQVdwTkx3ZEgwVlRhWGpib2x1dHFiUWU3L3ROaVRxc2QxcWQzdUIwRlJSR0FFWTF0N1MyZlZMdmRIcFhRYlNxcGZWY3Zhc0RQeXh4N2FCM1NRSDdZNzlKY2xTbVVybmxtRVdxbDl1VGdVOUJBWU5OODl0cFNQN1N1a2dsdzJpSzEvZ3FlbXJjWnB2WldaNXdZMTJEUTNkTlQ0VlB3OWQxN3VrTldXd1dlM2w5SUZCZmJvZkRVTzlVUjkydlpVVkw3ZDhMaXRaY1ZheFVGVWRiU3hKVFUvc2E4b3EyWWs5emFtclA3aFJXTk5CU1VEaFF1MVR6bnNFS29qOTNvZGNWRm5vT3JPMXFDdXlzcEZWbjBsYXlOZGVLRVpNcktyRndoWFdSQlhOZU05L3J4V01rdFVnNHpPU05jaTJTMFlORENDdkdtaTR0OW5TT3hURWRBWnJ4WEdCSE50amQ1VzBlVDlYdTI3MnRJdGdjZGd3V04wK2thdmJ0MlZZUmFndzdFSHE5YnZQeXN0THEwb0xxenRLNnpkMzRzQkFPU1M4YW1DdkhBWmR6VkNIWTdqU0REYlZlbndGdmhWZEx5VHFlTllOL3BndlVPQ0ZVYU1EM1JFdWNaR1N0TVJMRUZSUUNpWG9HVTZ1SFE5RWk3MzNDcEM2a1pKSnhNQldDLy8xRTZhSXVOUE5OYURZeXo1Y21PSmV2Rk83VnpTMmI3ejhUbVpONzVqeWVuV1BPS0xKVWxLcW5icEwzVW9nbGNha1dBako3TEYxTEtoNXJDelZ5bklaWEFSSXFuREFtcGZ3d2lDb2d0a3B1VmhBRTFGcGJmRklRdzNISkRzZEJYbExLMWVsaUF1ZG5iWENnaTVISy9tQ0NSUGVTSGFQREVoaGRvaFp3UDBjSnhmTnJIb3Y2ZFhDSTlPc2c2UXljU3MrMzdHQ1N1WllkajdkZDlmSmhIVEp5SmZyeFd4TU9WbVB5MVEybktnWjJkcFhxMUdxRjA3RnNZaytEZkgvTFh4NXUyVlMxOXBxaHlnMWZucXhCMll2KzZ0WkIra2NHeTUvVURWRWZxM2E0QzlqWmEybC9xVmZCRnJ0alFUdjlIbTdGMFgvRGE1ZE9QbktvVGNWY3liUmUvQVRXeVM2S1VreXhMd1BYTHBJN1BraVZURVkrQURlYTF1SGNtMHVUbWFFVWNaMGhMQmJIOGVxaVdDSXpMblVTUjRRaHZDOG9sZzZsOG5GWk9oWENoeWtLRjdhbTRwb3daaFlsVmVJT0orVXB5YVVBYmVETnN2TWdpNnI1RGcrTGkwb0ZlWStmUUxiangrVVR2R1ZVNkRJTHh4TzdIdG01NHRMeFZsdElZeEE0UzdSbHJIbm8wdUV5OUIrQ0lWdlQyMm9QTzVpZzB6cnI4YmZIaStpYnZFWXJxdHo0eEpIT1lOdFl0WjBWaXB1aUJiVWJiMXlaL1hHcHpwVDk5dG9yS2hTS01tTlJoNkdzWWFnV3JaRDFDVkVRTm0rQVNEOUpyYUF3SWlxRE1DZ09VMVFwcjF3V241UUNvQWtCbnVTek9DNURGaXZ4RnFpWGFMVmdjUlg1ZGFST0sxNEdWOVE2Y29XVzFTSnBsNlBscEoxVW15dFZkbFZJYnVxZ0NwRmNlQ0twV3BLTmVUejJjT1JBVzh1QnlNT3hoMHJDNVNVUHh4K09IR3lCODBkaUQ1ZVVsNVd3RlgzYlU2bnRmUlg1VjBWNS9HRjRZK0NoK0VPNVA0eVROejZjUC85NWFsdHZSVVh2Tm5oM2YwVkYvM2JRaFRXZ0MrM3NjYXFZdWxpdVRNdlh1c3k0Q2h5VXZKVVVyMnRZWXpOdUQ3bGdqRXR1dUNDQU9uaHh1UlBlUFlYellxWlkydTdBT21DM2dtSGpZMm1ISFo4NVhIZ3ZjVXp5NFVTWmcxVE5BTEx3TEpUUEVJeVpUNEI2cmVRL1hKQmJTLzViczdMQWdMYW9PVllqb0MyNG5DYTdBazFtYjBHWFptL1pMTC9BNWVPdXVUV1dnT0FMMGNkMXh0bnZOeDVwekI1Rk44RUxxVXRiNVB0Vk1FN2kvZFZrKzVjaWhwMi9xSXhKS3JDeG1ua013TWc0WUFDUUFGTXcrMitLOVV6aDdHL2tHcmM3ejE3R1hFUDJXcStqSHFIa3VXSlRadEkyRWluYkJCaHNOQ28xd0pVR0FqVWJFdGltcnljR3A0ZlBUQ3Q3c01Vc0FEVFF3K05lUTFJQUxwWUhSdUJpSzF4c2pXSXdpcHNyYk1nM1ZZaWx4QjVCVElEak5ZbDE0R09GVnIzT3pIaEMwWWF1d2FIeENaeURHREdSTWpsYmcyQjZRY21WeDRZbWNyWW9zV2laWldubVFUbS80em9ZU3A2YnJBRGpwQUI5bFJkZDBKMGJkdFYxTDhwR0JCcEdtMUliMmdMeFZYdjI3MWtWWDcwcTJVVXlFZzgyMlZtRHpoQnEzYkNzWld1SHYzYnN3TVg3eHhKclNyc210bXlQOUxTVU5JK3MyMVN4dHAvKzU4R3Jnc0Z0L2NtdEE1V0poTi9nOUxpS0U4dExvOHZxb3RXcDdrMHRvMWNGUXBQZEpHTlI1MWVydmNGaVgvTklWYzJLeHVwWWJmZmF2dkwyUkNSYzRmSnVhWTRzVDFXV2w5cERtN0ZjU2hVL3BLUHNFWWl2UzZnYUN1OU84c1hKaGo5SERMOUlqQzBHQ2h1TWlvZ3NaMkNjYmlHTDdCbThXZ3B5TjUyYkcwV0JKZWVsQmtjUlJEWjJqck1YODd6YmdWWWFITzc1QzRMYndacDhIbnppRVhpMzNXQ3dGNTE3Q3RxMzV1d2ZsRVZnZHd2QVk2M0RQWTlJalp0WGtVbXJjRkZHV0VFRkZPR1pzWDZyeWhDV3hrQ0Yrc2V3Q3ZXdnhDalNxbEtIWjJyYnliMWFiSStJVHMwVXl0dXBDdVh0Vk4xQ1J1em1jZkowaHBPN24yQTFDbmFET2JKNlZlSGErdEV4WXFDYStnWFRpMXhoc0lycUhzVUsxQzZJOWJMelV1RGlRN3daRFc4eFdab2Z0aTgyMm9zWDlCTzVyZjV5WW1STjdhYWJubmg5Ky9ZM25yeHBZeUt4OGFZblg5K3g3WTBuYnRwVTI3ajc1WS92dU9QVUs3dDN2L0xuTysvNCtPWGRIM1JkL3V5MjJ2SCtkbzlEeFdsOURldVhqZDQybVVoc3ZuNXd6VlZKdlk3VjBNV05UMTZ5NWFuRDdmUzcyOTdFSDRFLytzMXQyOS9JSDcreC9jNVRyKzdlL2VxcE8rODg5ZHFlUGErZHVtUDdzNWQxOGtYbGhUNWRnYWNnc2UydThYVmYybHBURG5nYVBtdDV4OUZuNVhtOGx4bW1PMEFXUWRDV3E2bTBCYzlqaldKeDJZcm9pODVVRUpHSXNlZ01TNDd5bXl0QzRBVkNjcU1wRnVOK0I3Z0N2SzBpaE9ONFRnRGtXaTNBUi9ud3FxakRKQmJsTm9GTFRvQnNZa3lRcUtMRkZTem04MVN3MkhBQnl5ZmJHOVZ5YUc5NDR6MVR5L29xR3NzS2RVYVZvWHB2MTQ0OVhwMk8xYnBpaVphQXJ6bGF1TXppRFR0OHFWaUY3ZXNQTUw4cmFZOFYwelVyVnRxZGRzNWVIYmwwVy9acXRiN0xFWEFhVE1HR2lzSlNsODdvOUZ2dVpKY1J2anhDM1VKL2gzbVl6S01nbFpzeE15NHJwUVkrRk1kSWFZRUw0YUprczZNbzEwaW4xbXkzMlMwcUJtLytOTU9SRVMyNWhCZDRIL25ZelNQMWF3YU5WdithQ2dsdURwK3JYc2ZucjZzRU4yM2cwREZlYTlUcnN6K3hhTldXN0k5MUJxT1dSOWVmOTdJY216MkQxaktuNko5UUxGV1Yzem1hNzQ2ajBNaDdCQlNrbTFKYVFmcU1LS2o1UFFLNEE0NWZlSVpadVlxK3BTOTdFNHFBR3p4bmZpNmpCcWtuTHpCRHU3ckpMT3dDck5UVmpUKzRxd3JVcFRFMlV6MUlibFN6K2Uzc1M2Ym5NakR0M1RGeEdTLzE0Yncxbk5XZU0xbFh3dFcrWldERXJkNndxbzNzSGEwVklLb1NneWF4RVhTb3Uwc3d6Y0MwcGNpdFFVR3MvUnlUbGhUVnllWitTYlYwQW5RdWpENy9iRVZmblh2bzBldVA2QzBhRkJqV0dwWFovNmwyRlJ5ODk0cWorNDQrOWJubjU5enp6RzJYSE4xK1RGQ1pqZG1iVkZxMFE4ZGw5Nk1mVGE3ZnNCcGthbUZwbUpkZEMzMSsySXhjUUxqUTUwZDlUcDhmQzVoOXVvUHNKVjdQak5GL3k3NUsxc3ZhcWZuMmNYaHZOZWw0a2xzdDR4Wld5N2ovbmRXeTlWVWpCMXZiRG81VXdXdGIyNEdScXA2U2x0WFYxV3VhUzBxYVY4ZXFWN2VVS0c1cE9UQVNqWTdzeHgzZDRHMzdXL0JWOHE3VmJTVWxiYXRsVzNTQUdsWlVLeDZDTVJ1cGpZdjJRT09RQmFDbnFJbWxGYVRtU3NIaFlFWkJZa1VWMW5BK0tuSW5NWDR4R0hFL2tyU0J3L2NNREtpak5wYm1EQ1M5Z09OTVFEcUN2THRkM2tpOTBQNkplV3UySmQ4Q2FyaXZqOTdVaHg3TmJ1ckxia01QNERtMmxibWY3bEZlUlZWU3ZZU3lNdUNuSlNwcTQ1aXJCUXA1eDdyMnBGVE1aZExhNHZrK1UxRU0vc3RJMTV3Z21EeUxJQ2xaM0QwSFY3ekxJVURMZk9NY3VjZmJmT0VlYVd4SSt1WVVvYTFLelFkRnNhRE5VVnBiMU5KclZWbG9BK1BtcnQ1WU9kVGdkWWJyM1Q4eGwxcVIwOG5jNzFBTHFvK0tVdlZOM2tDdDM5U1RNaVBFYnRsVkVPdXJMbHZXMXVoNWoyVWRZV0l6SnBtL29QdGdQQzNVU2dyQ0dja0FVTlllblhISWhyNEVNSDRVYjJwR2dNUkUwMG14SUNZbEFCcFdnYUswNVRlR3BDbEZnaGgyUVl5bnBPSVNHR1JCbGR6d2hsaHVEM0l6aXpyZW9QbFJxaGFxRXhlaHJ3Zzk2VkdvV0xXUllSU1drc1pJZVd1WnpSYnRTNjVmWnkrdGNiZjFtcFJtRmUva3JscGZ1U0pWM05QY054aHNINnR1R2tsNUZTc01OSzFXcS9YbEpVVUZGYlZPWDIzUUdxTUhXdjF4SDkvZWFFR01Zc3N1VjFWblJlZTRSVmpkV1QxWTUvSFVkR0VlL0VUeEpDM2s2MEVWdVhyVkM5YURrblo3dUVyMUo0L3BuSTVOUDFjTEJzV1RmelJ4MlRtdFNyYkR0K00xVXVZTVZZUlhTTTF5VFF2SWUzN1ZSU3dBeE8wbWs4OGxrTElXMXpsckx4N3NVK1QrWWFLR1pIejBwdmtWR0ltM3BTNjBCaE1NQVJPeG4xeThGTFA4R3pzbmJ3NnlUTFhGa1gySHJWdThIRE94WWJDbllxSWtLOWtJM2NtelRZcGZRZXhqeHJVNHhGcm9OZkxxRnBsdGVvNlVBaU9zN3h6cHFDY2ErQmxLZG9WVUZPZmVjTHNvRForUnJQT2Q5aUJxOVpQdGhINEJtNHlXaTUvWlRmL2J2Ni9KaW1PN2psL2NvbWdidm1GRGZOV3AzeW9kcDM3TDNKV2F2QVhUY1J6OUdSMmh2d1YwUkRCeW5XSDFsQVhjalB4Q0hnOUMwVnJKUmZsbDhRTVhXYWpqZkdHSnhSWXFGSVRDa00xU1VzalRHK2JQZ29VOEQ1NERQKyttN04zb3ArQTFpNmlqRk1obVJrMlVQNjBtaTRCcTBrME9wQ1djbkRISjNzc2s5Ky9GN1c4OXViMzZzZDkxeWpsS0ljS0ovQW1GWkhLZDRrVHpDV3FhRjB4bWt0eURjRCsvVlYvQTJhb0NiRjdWQmFRbFVxNDVGSUdPcEdOcE1yNFFqZHlrVldsWm9iRE1YVlB2aXJXWGhwdmRhemNXeHJyS3lvZXlmMVdrMXhsMGxTR1gxMlpnYjluQ056ZDZxbjFtQjR6cFByQlRIY3FqWUVGN0tIRDhNeXA1UWpPNEF6TWVsZ3JsN0tXYUpIMHYwSVJNV05TRUROTVlGK0pXYjIxY1NPTEpHN3J2cHczM1pLLzRTOFZYMUdxZG1uMzlqYm1SV0l3dUMxNnJSRnBpeDhlWlFmb0o5aVdRbzJmZS94UXBpUCt4NXdvWEYvcVZ1dVIrcFNTejUxcndQMFgyVC9FL050bG5nekVaTHgyWVd0WTUxVjlhMmovVnVXeHFvSFRGbm4yN3A2WjI3OXVqT05aOWNHVTR2UEpnZC83MThQWFhINzc0aGh0a1h6TUQrTzZYZ084c1ZCa2dQQ1NXazBCWUc1c0p5bzQxak9NRm1JdHBKVzlOa1dxcVpBMWV0TVVkTlpoZ2JVMExNbHVaVUxCazBjVlEvdUtNNm5VbFhxQlV2cTR5dVQvKzJDMGdoZm8xK1FwQVB2blN0RTZQS25VR0JjdnBVSVhPd0d2NDdKVmM5Z3BlSTF6b0JxWmJRY0ZFWWIvTVBnL3lkVktsNEkwZWwzZm1pUDdjemtoTFhBcnl1SHhCOU1abnltVGhGOFhTWlVFczI3SkNUWGhHcGVTUklieWdHTVJ6ZlpvMjRCWGlBT2g3ZVd6R240TnhNZEtKSmFjaFlrQkl1d3JLc0N2d2svMUhVbG1RdE56R3UzWXJVMHYwQnpmenlDK2orVXNRdm1NSkk2dS8xdXNqamNDU3QveTA4V3ZaSzdGMmFYU3F4NWk0MW1VSnozNVhWMmhDWjlDdXptdUZBNjNaYVFmZGprb1l4WWV2ejZ1ZTVreVV2VUV3bjc3VXhKMUN2ODU2Uy9odmZZc3ZRV3NjUlhMTkt1YmJWSTV2M2RSalZOb2xyMEZLSFd3bXo3bVpzbG9YM3BoWEJqaTNySll3TEVJWTVsckNzT1dmaTJGU1Bid2hRS280QWk2WVZEM25zR3phR3F0dEpVRm9od3UzV21vRjlwVUphVStzUHRjMDdrSTg4eTRGRGFvTGdJWnpHSG1BcWRFNnJUSWo2UUdsK2tPQUUxWTdoaE45RnFXVnR0SU83aHFBRS9VK2dCT2VuNWpMTE1qbHZBQi9uV3FlWUl4bWpER0U5aFl6b21uRmxwMHVEREs2VzVzQVpDaWRZYXlybzBSWDAxUWIxVWROQUtKN2pVcTNZNjZQeHRPVm1PUEw0bEt4SWlPTnRSTjlIWW5QckpWWlBCaExyeVVSLzlvVndINURVM3NsQ0FVQXlvekRqZzl6SUFXSm02Sml3VW1SajBreDNJd0c1NmZyNENER1M2dEJXOWZGWmtabGJWMFJrellENjFmWHdXenVIMWlMOVhSVUVMdUI4MnZIUUJyOUtiRkpFRGVtOHBpbUxvZHBhbE5pc1NsZFVoNUxmUzVNVTQ2WDBzK0hhajVkMjBmbk1ZKzVwQ2xTM2xJT21LYy9zWDZ0RFRCUFM3OVpCYlpEYXpJUzFGUG43VzNxVzFHQ1VjK3FPbDltWVdZSTZBOUxaZ1p6WFE0U2xRV0xDc08xTG9CRUZvQkViZjY0VitoSldFQmd6Slpkem1xTWljekNtbzdxd1pUYlhkczUrL2lGcGhCSUszczcvWThLSFZqTEJtb1RsWTdpdFpDVVBnTklVYkxqYmZLTlMzZGphN2pNdEYxZHpvV2xHbXRHYW9JcjViZ25QMnNFN3FvRlhNNm1NVTNiUzZJcE1nZFNkbHcwcEM0c3pwVkhOeXRhVU55T1E3bUZFbnhidmdiLzNFN1R3WEIxeityK0dsclhvWVFEMGdPb3BudHplNGxXbzFHNFNKK2c3cXMzMVNFZjUvSlpGbFpYMmxic0c2eVBKL3hQZjRNTk55VVMzUnM3a21PTnhZR0tnRXBaV2hndmRaUVBIbExVZnFJZkVDUDNpMUZaU0wrWTRrL3RHT09ONGx6dlozZU1RZk1ialQ2dGQwejJQeTkyMnJuLzZORUwydk8za2FIREdzT1BGZXIvT3pReUJQeXljT25UYUJ6TGNFN0hSZGwzdFNiOStXbEU3VDgyYUg2dVl2TTBLajhtTklZK2xVWjU5K2ZuNEdNeWJpZnhFNXppNWFWUEpUVTcrK0c2RC92VUZ0VnhXa0dybmxXWjFSZWkrSHZmWTlrYllNS3dON0FMZFArQzBCMmpEbDZRYmd3bzdISEpDMkZpTkNvVndrc2dSanJiMkUvT3hHUzdGQ05lWXFaRXpubmdsbktCbUdCNkFabm9Rbk01bVJXNUlVdFJMOHdjRDFuNnZaQ0E1bGMvRThtRnhVL2xwN1lqK2pkelNjTG5iMDdWRm9ZclVkTGtUL2g5VGZXSnduQUZmUUZlRFBpYkkwNXZpYmV1SXRBWWNYbUQzdm93d1NReVQrWUlUOHFwUm1yc3dsd0pSbkdmdzBJd0hKRll2b1RSYTgySVhwNGdycmlWbERCS1lSandORzFDNXNWc3VMRGtsd0RFRW5sNU5YLzZxWHJ3a2NIdTVuazVRODNqRERWNnR0ckh1eDBHZzhQTkMzQitBVjZjNEQzNFBmaHZiQWFEemMzN1lvdk9xQVcrcUVwemZFbDhtcllFb3pNUjJmblZSR2NLYy80dFNiUWxMR3RMbUtSWlo3eXl0dUF2Y0tqR1RiMkFTWVhCYzlnazFVUkFXN3oyejZFdDUwUFVuOGF0THhWR212Mytsa2hoWWFURkQ4cFFtR2l2aWJlM3gydmFMOENsQi8yTllhY3ozT2dQTklRZGpuQkRBTDhiZmdnR1AvczdpbEwraHZUZXRGTmZvZEw2M1A3QXhVMkxSRXRzaGpQcGtid0F4Nmx3bDRvWlZxMmZiMlRraU9LU1JSeUxuYmoyNHpPa0lzUVNFVFVSSEZvb0NrNkpHbDdTdzR1Q24yWVZHbk40V28xL3c4MXBnd1YvK1lnWi8yWmVVckJxamQ1Z3Rwejc5UjkrdkF4bnp2MEFDNVZ3QWZpb01qUEZ6SHV6Yi9iU1IrYStNa0EvT3FlcG4zczRZM0NqRnJweVNtM1J6WGRIUW05bHgxMDB4L1FWUk8ya2QxSDJidEwzYXBDNmxFcjM0ZEZHNHVlMEx3S0p6N1RMUVdnN2FVRGMzb1NqdGFIRmpZendUcWlZa1hUN2xMcWNlRHVTaFhWSG9zbjYzajZpQmUxSjBJTDZsTmduaUxIVWY2dDMxc0ltcEdCb1NYUWFvVDkvVTYwZFY5eTl4cDZQV0F2T2pXVkxiczg4dGU2enUyMUYrNU51TkpDUGJzMkxnOTVMMUFmZVFtb3EzNGRMMFFEK1RrZFpQN3Z6bGUyek9sL1pQOUg1YXNGREwrcUJOVmUreUNIbkJLNnk1SHp3L3dPYTVqM3lZcHArczlnRDU0aFNobk5PZDRGWDRIZDFWT0ZuMDFYMFdYUzV6MFBYRWkrOG1MeTZUenJkZVNLWCtGbVp6am1nMDBOVlV6cytuVkxjTmFveUxnbmdWdnpnVm1JWEpKdVlBNXpDQVpkajQvRVdKS25VU2hhKzQ1OGN5YWQ3bGNYamluNjJFOG1QOC9obitnMmF3bC9zOERqb2pnWThSeEdWMXVKcUJCM3A5c1NSSExQQm5NbjNDNWpYVEx4VXI1clh5TVN1bkNxZStqWnB3VVZUYjhFSHIvdDhuem12V2ZnejMxclFLUDJ1dkNxZGVqZlgySXNHN2Fib0VkQW5ubVJTeUI2WHRJbDhyaFduemlSTHJuMkRSY0JmZzRGMGNpN0Z2RlJMY0ZyVHVsUTdIdHgxcmxyTVB4YjBRNC9IQS9xQjkreVY0VjVXWk5jZStkSWpZeFJYUCtFMTc0SllMckd6ZUtrYjk5cXg4NlJEZVRIQWpmQjVNNGlZSHZPNUF0Y3ZGZktIdTRiT2xmSW5oSHRxQnlaWWVmdzhNbzRCTnZoeHJyZktqdHllSmdHMG15SEpNdEJ1UkJrWnVlZ0lBWGgwdzBoOFVkRkk5dnNLWnJ6ZkxDMFl5V2FGWWswNGJSVHdvUkd2Y0FnODJTR3BzV1J3ejd0Y015eU5YYTQ0T3FmWm9GY3dMN1FieEVvZit6a3RQREQzMHVUa1M5bjc1MzYvR3oxOTdEM2NkUEM5WTlseDlIQjJDLzFHTy8zc1F1OUIrbzI1ZS9QdEIrZWVhOC8xUTZ3RmJHeWlJdFFWbitqWWhiRWYrUEFpR0UwNEtqbFl1UzE3ZEhIY2FBYUFFNUhoVG9UTXpoemN3ZkF3MytFTHJ4OFdZNFRqQ0taU2kzcDlTZUVpdkFCUmRvR3VYK1lMQU9RbDNjQk9mUW9tL2tTZk1HWGlmSUNZa1h1SHdWekQ2Mi9WMk1xZXAzdFk3SHpkdytLNU5iaHBJMXRhU2J6NUYyd2d0dUNwUHJ1VkdDcWNOeGVmcTZzWTg3VHMzUDYvam0vZU5uMk84WjFjTUYyZmE0RDBtL09PTWpkR3NHdDRqSFVYR0dQcWZHT3NYelRHOEg5dmpFdHM0K2NZYXZsUzAvazVCM3lPMDEwMDdsK1FjWGRReDg0emJsejhXQnFYWWl5cDBxckU3WTVoSG5jdTVrVXB6TndPZWVaMjhGSXRuQ1hrczhRQ256Q09yZTJBQ01ibzlGZXlEZWR5U21xRlNGaXFhdjdjUEx2QTdQNGNyT3U1NEl6L2ZEejg5dmxzZ0NMSHh6bkN4d1pxZ05wOVBrNUNnTmNUbHlyQlU3VUFDMWNzWWFFVXM1SnNKcTYyN1lURHpnWG00YTl6YTR4aEpYUDYyZitXa24wNnVQa2NmUE4rRnViNWZFYWw4VFB4RUtJZW9rNHJHTVVHd0lLVVdZT1NHbVRYSUpVR1BZU3V5dDZVUUVmUnBZbnN6ZWpLbXV4MTJXdFJGRjJOamlhek42SWp5ZXd0MldPMTZNcnN0YkplMzgzK21uMGZ2RzBsbGFJMlVHa2Jsa1oxWGhwbGVEN1h5NjArUVFBK25wUXhDY0RxQm5qMTRVVlpkMHBNQ0MrcFdadVQ4d1FqdVBCRXdGdTNLYW1zV2pDOVJIR0MwNk11U2VYRHJGeVZLeW1BdHVVRkVReXB5TjZoSUk2NDdVamUwV3FlMzZvckcrMHIzaDA5cERkWjY0N3ZPSVM1ZjhsM1IyNDArSVRLTi9ZZjNiTjVEVDNiODlKZXpQLy8yZjNON1ZnZVkwTTVQbmUyM2NjYmY3TWwrK3Nad3V6bStobUJwODV1UVNXdlBYRm1sWUt0YndadXovWFVKRER6SC94b0ZjWWdwTThjMkhFbjVjZGRXVC9aYVM1d3ZrNXpKYmxPYzJtcnk1TkRjK2Z0TnJlQVRjL1RkKzdqQmQ5em9RNTA3RmJaMy96ZnBuUEJwNXlIVGlRdGNpSVhvbFJ4V2Q1eDVHZ0Z2K0dreXM5UGEvaDh0RllzMEZyMDZiUXU4UTNuSTFuNUNXZHdZY0tYT0FBbVIvOGMwRjlKdFZEclBqa0NzU3dxTnNRbER4aXQ2aGdwRDFrWURsN0xEVmpuQzhNVGNKaFlHR1JicmtaY3Nxby9UVzArM1RLZFo4QnpuMm1KTGpqK1AzK0c5YUhsL25TZ2V4YksvY2tPZFo3NURuWEZuNzlEM1VJdS9meTk2cG9YeC9EbmExdkh2RHVQVXhiNnZISWdzYjVGZlY1bkRFWVNIUnMwbVJuR0tiY3oxc3gzSk9lQVpOb1lpNGtjajBzb1NDZG91UzI1Y2I0dCtRVmF2dTVFM1BsN3ZtWi9MbmQ5emY0ek9rcTZ2azVqMi8yOXN4OG8ydGpYcUY3cThoeDF4WlRjdVFrZ2c2VEVCYng5aEtSZVEwYnNsYitabG55anMxeFZXaUJrcG5VRjFlcXcxQUloUWt1VWhBRDRLMnJyOEhlVmx2bFQrS3MwSldVbnZMWUFsTEFWVjlRMkVuL1lXWUcvZWFqQUg1Sy9vV3pSdDVjb0ZtMDRYMUx3clZqOHJSTlc0WHNkUjU3ZXN1Ym1kZEdxbmxVOVZiNjY3cjVsS1YvTnVtc0hkM3kxeWNaeU9rT3dlVzFyNDhZMmIrUEVyb25HNnI3VmZkVkZyYnY2ZXE3ZW5GU2dIVThlYXF3WjJSNXYyZGlUcW1zTWxzUkszTDd5NXRIR1pSZXZpblRXNWZhc3Q2eXE2aHF1RGNYNzIySzlMWTFkby9YRnZXM2hpb2s3TnMwaW1JdWt4eHo1N3FBazFVYmRmWjR1YzNYNDYyRS9xOVZjKzJlMm11czRwOVhjREdmeDF6VmhCM2VoWm5OU0hRQmNzZWtMTjUxYmNBbGZ1UDNjanZrbWZGK3NFWjNpNWx6THZzL0Z6OGIvVC94c3hQeXMrK0w4bks5Sis4TDgvUFY4RWRzWDR5ZHpjYjdrTGMvUDQ0U2Z5NmtIenNQUDFPZmhaODluOHJQM0hINitnUGxaM3piUFVORWxpQTNuWld2cXY4dFc3R1dqK0N0MEVmR3lYNWk3VmYreTVoZnR2UDVSSlVzcjZjZFlUdk1GbVh6RjdLeithWVZhb2FTZlpsV0xkUGRXd3VzUjZ0MHYzSEVTVzltNnVOUU9kbmNvS2pYQmhTN3czcXNXc3g1TTc4eUlIS2VOTEJiRTlESlhUQjJlNlpKdmRVVm5sc2xIQy9JWlhTU2ZPa0hrVWxMWENFUjJGbjlsa3dhdlNraEZNZUZDcWovVURsZGFWNlMrdUpRdUVQTjlZV0VsTEtFNm43OHBVVk5RVVlrYXpjR2szOWRZVjFNUXJxUy9vTlNlTFdtTHVud2hYMTFWU1d1MHdGZnFhNGlRZFVCWmRrZUk3SHFwOWRUYlgxeDYzVkZ4SWk0MUFlZ2FBckZ0V0N3MnZQV3VIWkJXK3preUc4VXlrL3JoZWovSXg3cDRObTFjSkswVWxwYllicElxc1N2dEZ5U0xCdS9NTUVsREUzS1p6UCtSWnFPZnRhZm9DNHNzK1ZtYmtMNmc1SDcxNlZ1VzVtWDRjeUxEUG1yTmVXZmdLTVpkVGZMNjNhZkxjMmF3bTJzeWhHY0djeXU5WTB2blliODh4ZnA1YVJqTzJ1V3o5Z3VZeC9HbDAwL3NONG4rbERnc3pGZ3FtN28xbnpFRFJ3ZmhTbnZkZjM4R25tOForUXVMOU5iQ3F0WkFvTFdxcUVoK0xXeklyeTEvUVlldktHbXVjRG9ybWt0S0dpdWR6c3JHa25oYlczN05tZGhScFZHaHA5cXBZWmlKSXBWdXhsSk14S1hsTU12S1lxVGRuMWdRSjR2eTQ3RzB4am92dlpGQXM5VVFGbGZFcFJFRjdnYVZuNFlkSUlzT1hocVFKUk1BbURvU3d4RVEvdEwzWWo1RHBsc0hSYjR5UkJ3UTBweTFHUmVZQlV5U0E3K3VFdElGWmFTTXZ0Z2tSYXB4U2p1d0hOZEN3VEhaMGlpSXhiaFVTakxONzNKZkVGQ3U3czltbjY4NzgzdVhkQ3pGWHdPL1dHNU5jQlhsZTVndUZwTE95QXFEeisyOTltNTcxU3MzRHR5d3BVN0x6YTJybnJoNlJjLzJaU0V0cDNZNit0YnRyTDN4N1NyTG12My9xN2R6RDQ2cXV1UDRmZTR6KzdqWlo3SjViVGJKNXIzWmU1TXNlVU1DaElRa0JCTEFQQVJERVJHQ2dCZ0VYNGhDSzBsRkt5aGkyOUZTRmVoVXUzZkpqTmJhNllCVjIwNy9jcWEwVTF1bjQ5Uk9NK05NeTFpbkxVam8rWjF6OTVsOUpOWDJEMkR2SnN5OXY5ODU5NXpmT2VmMyszd2ZXb2FheExlbHVHMVlYSG4vaUFUTng1eGd0bGYwN0d6dlBUZ3MwcHJPQXlNQnJ2dkpGeXJFU3IwR05kbXhlKzk5dk8zZzYvYzZ6QWRlbTJweGx4ZnJDZ0YrK3VRMzEwMnV6QzljdVd0ZDAzb3BwMmJ6a2ZYSCtZcXVNZHF3ZVhxcjFIakhDV0R3enAvR0RONXU2aWdWNm9LMktwTmtseW9waGpmbzg4MDJrOWV2R1JlZE5qZkE4Zm1hTUpzWGp2eHdJcHBwRGlkanR0bmgrRnpnWFdWZW45alpoZGNOelQ1U2F0b2xRTG4yMGppK2RMcVRjellqNExmMmg1TTVZM2ZraWFzcktnZHpkU29kbjUxWGtWL2Y0dkozbHBlT25OclZsSWI3MnpMSXJVOTZUSDVZMVgvOEo5RHZNVWNYeGI3QTBjWDE3aEdTcnA4SkU5d1NjYm90S1hDNnJRcE9kNWEzdXYyZzFwQUdxQ3Y3WVpScFhBSllON3BJV0JKaWR5YXlRRmdVYkpmbG8rdUMxTDVwK04vNnBnRjg0MStDYitoSXdMOGszOURxU0xTL0tPZlExMkxxV3NMK3VZajlzeUxPUDJKSy8zU204RTlYckgvcU0vaEhYS3AvRmtUdVMzTFRjR0xVdmpobi9UcytXT2NVZngzQy91cWlObEhUNmJuVnNJYzJKTW1OS0xqclFiUEs1Z1RQQWJ5NnhZWnh5WEJtTW9BK0RrVDllUnVrQWJXZ1VjcnFyb2FUQUZubmhmcmFMMHUzemhTeExjbXZZNW1pdFVYNW1kbVNQa2hqS0JTSTBWdHdQWmVCcWxSeUhHQ3ZEa01xSTRrT0JwTG9JRk42QlU4YW4wVGhpWXdqN1JNSzcvOUdMNGJ6S25YQkZQMkhoSHR3S2UvQjZTTmxQdUVYRis3eFl1UjF0RTlFYXNodWpKRzdNTGMraFJ2aDNBQXIxYWprVk1DZVhpaWJqa21zTU1RbFZtaXgzaWVkcmR5UFRYd1I4R1pyWXY4K05jRzlGdHQ1Ynd3cGhySzNQa04yWHNjY0FUdkpyOEE3bjFhYTVGZVVrZnlLUEpKZkVVVUpnSGlVTXRGQ2ZvVTdrbC9CSlBRZmVKekVQbVpJNkNidlROUmtRQXZjME1QekpuNkwyMm5zMWovWXYvTXZJdi8xQXJ0SGhQZXZWWTIxc2pGcmpXdzZCdEN6QnN5d013MEt3elhLM3VLS0FGcTg2dm5jMG5JUnh3U2dqQjJpYW5SeDJzNk9XdHFMdFlVN1lETWVrMHM2WUtzMzRNQmwzZ3Rsc1FNRTdqTFd1di9WWFkxN2R0em1OajI5LzRLZ3pqcmFkbUt0VGtCTk1qNDcrQjBMYjd4dnhlNTFWUzMzeVZPM2YvK0IxUk5ORTQ5Mmo1N1lJckdtMXRIREE2TlBqTmZTSDJ4Ny9iRzFlYzJqYlQvK1Y5L3BmSTFPbDdXM3VNN01tSXlzbmJNYTI4U1pBbzFHYjloUjkvQzU5dzg5K1pkWFJqb2ZrdmR1Zlc1SDQrcGpQN3UvZnVjR3FXM1BNNlF2RXdiM05PV2dKT3BrQ3VJdm5GYzRKYmxZTlJlczgrSGtEZURmMUNkUWdGRmp6MHBra1NLWjRlUWxSdDQyVEFodWlCS0M1VklKNHFwOEN6a2dWMERCY2gyZ0FZcHFtMUlqZzFPdCtSZWloTDBwRi9YSklNUGNoMG1YN21qdXcreGhSUWZPVHczSDBJZkxJM01mUmhDTHlSREVhUkllNUhLWTNHb1dVVjhkSFo4eWM0bS9IUm05TWhLSzJVMGtBa3BuWS9XWHRMRWFiQ3hmaEkzUndHWVI3R1ZIWlBqTWFDVFRHWWxrd25aZVZISTZZdTJzaUxlektabWRhUkk3NUlyRjJya2dRTWxzN3ZiRVVUdXowYjBKMjRjUjI2Y1Q4enBpS05yaHZBNVZzcndPdytMeU9neEx5dXZJNEtvVTczcG1qKzFLK2U1bmR0MmhGSHQ0eEgrSHNQK2FZL001WWowWThBVjdTVDdIOG1nK0IzRmRSWHcreHlyMGNWWFVhUm55T2RJN0tsT3NsdGxodXpNRmFKbjk5cU1NTzJqUUIvZFJIM04rRGpUdUxTaFdxNlZBejBDZE5SY0dQYmg5c2lOckRwL21jMWVEVmxIT3NrR0lBZE9Kd3JpZ1k4K0N5NFM0cTMzczVadVhZL2w1c1orWkUydlh6cjladnN5Y1UyS3hlbkpNQVphT3VTRHZ4eVhPd0hYZ2VxbEdhcU9TSCtJTGJ6U1V3MEZsQU5jSTU0dXkyNEFyVnFCa1IwQ3RCMmVXOVc1QW5mRjJwN0dnbEl5QzVUNlNGdUlzMEpRMHh1MGZCQlFzbnFMMG9TWW9QRG8ySjhST0dwaU0rS09ubG8zb3JSYnA2YmJsMElTdjNETms4QWplNmRYZFcrdEVocXM5M0Q4MnZjWDMxTWowMlBUdHZnMmtxY1RhKzAzR3k2dXVISWIyV3I5UE1MKzE2bGVQN2JyUXdyeFJWYnZpNFBsNWQvZnlxVmQzL0h3S3h3R1lGNDNHZndmbGhoUC9lR0swazFINDZCZ2JYWndDRysxUnNORWhpeE1TR0JMUTBWQk9tWjhhSUIyZDRKS2dwTitOem1qSm9OTGN1ZkE2UG9NZGVWK0ZIWGtDNFhjbnR5TTZpU1ZEWXErSXpsckpER0ZQeHF5NXc3YUFobWo1UWx0eTRteXBTR0ZMWmRRV1Z4SmJjdExhc21DaVNtTFN5UVV6VTFMRG5vdWZqVmpGdGtQSXRrcXFEWGg3U1JubFFhOHYyQ3pKK1dpQXFCT3hwR2pVU3FDVUY5dHduaGFrempUWU1FRW94bmJRR3NXa0tZc0t6VG9naXJJb2xIbW1vVFNKRTU3Tk9IWW1kY3FOak9NbFF4alZxRDlERlNkYWE3cVlLQzBkbzZyRDFac0txanJvRW9LTzFNQnFOdEk3VTZPcmhVZ2ZUUTZ4NW81RU82bWliOEYvZ0ZudWlyNGJpTm9Tb25VQmxyYkFLaXZrWmNzR2ZUZUxLRUpxaDB2UmQ0UFh6WlVkMFhjcnNNZm91MWtTOWQwU1JTMG1Wb2IycFJDMFVEZmZQRGg2ZDFqYmJiQi9YaE92WjhFcXZqMkVWN2V0MUVBc0F4d1MxWnRJa2FLUEZDazY0NG9VNjVVaVJiZWlRbHdseUJvN1BING1aRGlUb1hlbGJwZWZadXBrS1pycjB3eTlESFN1UDlQY2pmcFlFVlZQUGFFb2p0a2t1WXlkQzFwRWduVTBoaXZVNnRpNVdWTjJIbXhibWFBOGlERGczRmJzR1VEQTJLdEVFZFo2d01BMFlyaXZFUmlZV1NMNklHaXJjRTZsRG1wWmVidy9sUTJZQ0Fmb3hZUW9keFVNVWNac1paZUtaTEF5anBoNkhMZUE5NmlTeURtUHZmem5tYTNuWi9hVXNTUGhrcHd2enBmdG1UbS9kZnFUbDhkMjk4OWNtVHA0ZWJxdmIvcnl3YWtyTS8xS3dxUi8vTmd3dlRGY3FyZHArTmhZM2M0cnRQbkMyV3ZuUjBiT1h6djcvTFdMbzZNWHI1SFlXZlVJcDZkRWFqWHE1NmVwVUMxNENjWEt5OVJRWTBLd3VnWko3a1NYL2VKc3Q3MFdYTlFOMjZBYnNJc2s1QktKbkQzQTdraTNDQnNrYXlEVHlUeUg0WmR0YUQwczF3SVp5bzQ2RTNKRmNFMTJ5T0FxYnlMNVRVV2c1eVRibDZHb21pcnlWRWs0bWFRYkpJT0NuVXFQVTBJTFJTa28rVUVRblN4NjVNTmJmaU10Kzg3ZGVlcjlLdXVhT3g3bzdmLzYxNWJwVFRkdjk0OGRHVmgxNStwS2ZaYkc1ZXdidjZ0eCtyM2FxbDg4di8ybGZTM2JLemNlMlRqOHlIQmxKZm9MZmF4a1ZjeWRGV3QzdHZkT0RZc2tDdm51ek1ySmdjcVlnNS93dHQ3eno1MThLVWtVYVFtZis3QWs3MDUxazdLaSthK1pHb3JQdklNUXNWR1NjOUViV2sxb3ZMYXJjcUVOazZJdE9CTVBKNUJCek8yM2tUMzV4U2JucGM4K1RKNnh0NGdhNG1SNWZOelFJbktmM2R4clRBUGVDNnlKYXFvS0NvZEV3RVFrQlFXWEhWRlgxVGFGSzZ4aTVtOTM0bVFkdi9VSDkvSnl2Mk1DYUkzb292cW9vTVVIdGJnNkZKYzdmVGdGd1NDQ1RnUGMwRVVXZlM2YzJobG05b0ZrcDhFRjc3WUZPcXNUazdudDhXVHUrSVZjNmkyYXBOc3hOTFdEYVdTNkdPZ2RGS3dHZHRCL1pCcUhob2lmL3R1Zm5XR3EyYmVaS2FJaFN4WWk4Q2RHUXhiK3l4bTJsS251NlNHL3o3K2YrZmY1T3VYM2ozUE5kQVAvT2VySHpWUXcyemZMWmxFNmptemlvb0ZCYjVvTDZYR0JvaDY0TVpSNTFtU2xKT1JOMk5uVmswTmppZ0JzWVZ0UkRhS0FaSCt4bGo0KzBKNm5VWG1sRXQ2MDNHN2xmak40cXMyaTBxaFY5WGNGV2pzMFdxUEs1ZTBuTnU3bmFtazMvMWYwREczNEdiS2l6OEJmbFUybXVhREpQS3ZGTnc1cWZTRXRyaXZUQXI0T0hzTUVleHRaNURFQ1FEd2htNTZFM3V3dDIwOGVvY05oSGVqSVUzUHJOQ3BwWjZDbFE2TXhxbk85ZmQ3QjA2MFdGVHpEL0hYYVRjMSs2V2R3Wkg2R1R4WStRcllLNWpyVUZrd1Bib3NLdEJaRlR4SDBTa3FEQkoyUlVzRlViUkxVazF6Wkl2VHpJcHdXVU9SQ1A3ZVpaMHVzVkwyQ2pGTGFUTGFaVVBkbklaZW1TQWg2VTdaaGFlYUdwYTM5SFhCWkR3YW1hbWR2aXNabm9PMlpldHoyRmRUdXNNM0UrVUUzc1RtOS8rRUlDdWQxSTdOelMrRGJYQnV3elhNTHRNUmtwVzBnQzg4TGVRMGdZSk9pcjVTR3YvU21iRHphZ2k0OVBHMXVSOWZ0K1NrNmxDWnBMOFAyemw5bjZuRS8rLy9hNi9pSzdFM2FlYlhKZXpUb2VaVFN5OWhIMkcvaG1zdWdFVFB6MUlTWnA0Ylh5NElIYkswTmYwbit3U0pMZFg2b0FJcVoyZWhTMzRiSmgvWnU4UGsyN0cxdjI3UEJ4MnhyM3d2TXpuczYyaWJoMjBteWh6TjU2eHB2cDE2bkJNcEROUUF2RU8rQ3VTVUpud2pKamdwUkpGL3hzSlhUR0Z0OGl5WW9PUSsyZEFnZHF4Yk56QUhDNG96bitaU212WncwNWhUYm9qczc5T2VtbkdLcnBTVEhiTTd4V05IMVB6SG5KM0s5TG83aFU1N21pb3lWTDFJbjZIY3g5OWROaGQxbnNsRkdEbWYzUVAwdzZMK2hLRFU1OERlUjdwc0M1MHZ1Tll2dTlTRm0wTUc5YkdFQ25ZQnZoOGM5Z1NqL3BhTFBMUUROWFVvRGo2T3BvbHZYdUduK0RiVGFPVWFGZXFDUm1yVnpJUk9FOW9Vb3RLZm9IcE9oS3VpVFpJcWJDOWFMczFvTi9xSkNBaUkwNXRlc3cyK1BiZ0NGK2RXV09ibWtBYlYyTmM2L3FmYkRTMUpkQm1EV2FneG1oWGRKSThxRGVJWGFqSWJERlN2UlVyd1E5RW10VHFVY0dZN05BcDRHaVlTdFNtSU5wbEtvaWVxQnltYkZ3cmpvSXdadmNkR3phbS9SOTJpR08zZkJQSDd5cmYyZGU3Y09sUlZ4T3EzRzdoRlhqYldNdjNCZm40blphUkp1aGxpYVpnU3phZDVpNkQxd2RyeGpXMjlEYWE1V3B5MHIzYlR6d1RYM3ZUMjl5Y2gwdDFyTDdhSy85UnUvZlhiUVVkTlZYY0tyYllWbGhiYmxENzk1dUZDZlhTZlp2YmJDTE9ISTVhTXJuR1hWWlRrNmo2OC9rRDk0OXFPbjhKalR5NDd6cFNoR1U2TjM0Z0NKMG1TdFRTSitaTVV3aXhuQWlocUhpQlpEVkFIa0phRWdWblZWNW8xb2RZWFJqRHlMbktmQzNsU0I4M2hTOU93eFlnVlJPR0p6a0ZBTEtwdWNIa0FsNXBOQ21nWUMyOFNFWTRmRjBhaW95M21FQU9xYW5tSXY2eEI2Nlk5L3ZZWSszYXpUcVQvUzg5cmY4MXBkeTNMK1R4b2hTOUI4b3VMM3RMYmUvQnNqb0QvOW5HWitwc0JzcEtjMDNNMUw5SHMxOHcrYWFZRit2R3ErR2ZvUURBSTMyQnRvSlBER2FDY3FNa0lRaXNKQVEvNVI0aUcvNEJiZ3Y4REJNdGEzWmgvbGY0biszYXFzTmgyU0luRnRpMHBjcXhMbHJhMGloSnR3cHV3d3pJVVZGU2lpZEMwN1VkZ1owZ2lZTFNCclFHUlAzNVNnZnUwQjlXdFZQdTFXbUtRZ2Z4M1lkV2FpdU1mSjBRWjlkZkc1SUxOeDI3eUpxRjl2M25MbTdxWXNuVituZnZVSHcxK1VzcytFMWEvSjgxL2kzNkdLUVkyOGtNTExrWkFCV2x4QU1iSmdobWVmemMwdjFKRGEvVnhzRXhZTkxNVEdnUGh0amhncUtNUmlnWG1nQ1dHV3pUQ3NHT2J3c0dndVFNYm9OVmFsREN4c0JFaElvZWNtMjhPeEl0NE5PODV1ODZ6dGJyUDFUZ1FlOFBjZkhxcW12Zk1mRWp1NlJsL1l2NXhYY2RmNytIMk1wbTdzNkdCWFJNajdQNjF5L1ZjQUFIamFZMkJrWUdCZ1pPby8vN0RaSzU3ZjVpdURQQWNEQ0Z6MnovS0EwZi9QL212aHlHVFhBSEk1R0poQW9nQnJuQXgzQUFCNDJtTmdaR0JnMS9nWHpjREE4ZUwvMmYvUE9ESVpnQ0lvNENVQW9nb0hobmphYlpOZlNKTlJHTWFmNy96NVZqRDZBNmJRamN0V0NsRmdFVjFMaVZSMkZUSG5NQ2pYcnVZL2hDQ0NSZEN3VUFweVlFV3laRFVzS0tVc3BKdUk2TVlLdWdnR0lsNUVreTRXWGdRamFyR2U5MnVMSlg3dzR6bm5QZDg1NXozdmM0NHE0QWhxUG1jVVVDa1UxQ3JtVFFaZDVLN2JoTEM5aWo3bkxlWlZERTlJVkI5QWdtT0RUZ3BEYWhveGFsd3Rsbjh4ZHB5VXlKVUtiZVFXR1NWSmNwSE1PaXRJQ1d6Zko0OU14bkZVRVUzdVRRellabXkyQWVUc1BWeHk2NUF6TDhrNCt5WDIvY2lwS0g3cktVUnNCNHFtQVRsZk8zSVNkODh3cDFjb2lsby94L1loYkI0amFKZXhJR3Y2OHRocTNubHN0MXR3bnVkNHBwYktQNmo5ek9HajNzMnpoOUNsdjdCL0dyTTZnMjVxMk5Talc0MmowV3pFQ1hNU1dlWjl4L2xjL3FCWHZYTzhjWHVRbFRnSm13NHE1K2k5eU9wQlJOUWlEakkrcHZQY000OEdQWU9nRnAxRUovZHRVekhIVDQxei94dFNmNms5MnhuU1h0R1EvR01VcmpPM0ZuZVkvUm4wNlFUU0hKdVdPVjRzaERvZFJJOTRvaDZnbDBRWit5UjcyMDA0cEFKNHlQNEk0N2RWaWZrbE1HZWY0cHJIQzV4aTdmZDRkVjhIWDIvNW0zamgrVkFEZmZDUjEyUWI4YnVkMkYvMVlTM01hOUx6UmJ5b1Fid1F6OHdVM2t2ZDE4TWRvSW9YOWYvRDJ1OGthV2VsWENEZnpWRkUvdm13RnRhbDBoNnJSYndRejBRM2ZHV3V5L3lIT2JGV08waXpUZ0crRnFDcTZpemZ5QUpwL1F2eTFIN3FPWTd4SFZUaDJoTzhGeE44RjBsNUk1VjNraVNpUTd6dnUreGx4R1d1dW9BMG1aTjFtV2ZBUHNjeC9aUHR3N3h6STJqOEF5VjI1T0FBQUFCNDJtTmdZTkNCd3hhR0k0d25tQll4WjdBb3NYaXgxTEVjWVRWaExXUGR3M3FMallkTmk2Mkw3Uks3Ri9zbkRnZU9UNXdwbkZPNEVyaXVjQ3R3dDNHdjREN0YvWWFuaERlRmR3V2ZIRjhUM3lsK05uNGIva1A4dndRa0JCSUV0Z25jRVRRU0xCQzhJQ1FsMUNmMFJiaE9lSjN3SnhFVmtWdWlLcUlwb24yaSswUnZpWEdKT1lsRmlUV0lDNGtYaVYrUU1KRllJL0ZQU2tFcVRXcU5OSnQwaEhTSjlDc1pNNWxKTWo5azQyU1h5U1hJblpPWGtROVNrRkJJVUppbGNFVHhqdUlQWlFubElpQThwcEtrOGs0MVEvV1dHb1BhR1hVNTlTY2FCUnJITk41cHZOUGNvSGxPUzB1clF1dUJkcEoybC9ZekhTMmRKSjB6dW55NkNicDc5Q0wwaGZSL0dOUVluRE5VTUt3eFlqT2FaS3hrUE12RXpXU0N5UjFUQTlOMXBqZk1XTXdjekJhWWM1bjNtZit6S0xCNFl6bkJ5c3dxd3VxUnRabDFqL1VibXhLYkk3WWl0cHZzb3V5WjdIYzRUSE9zY0lweE5uRys0WkxtOHMyMXo4M0xyY1p0bmRzSDl3RDNSeDRsSHM4OG96eHZlRlY0UzNsbmVEL3o4ZkxaNEN2bnU4bVB5Uy9CNzRsL1dZQkJ3SmFBVjRGV09LQkhZRmhnU21CTjRKVEFhMEVTUVZGQlY0SjlnbzhFL3duSkFjSkZJYmRDYm9XMmhmNEprd21yQ1hzRUFPSTBtNkVBQVFBQUFPa0FaUUFGQUFBQUFBQUNBQUVBQWdBV0FBQUJBQUdDQUFBQUFIamExVmJOYnVOa0ZMMU9PNUJKU3dVSXpZTEZ5S3BZdEZKSlU5UkJxS3dRYU1SSS9Ha0cwU1dUMkU1aU5Za3pzZDFNRVFzZWdTVVB3Qkt4WXNXQ05UOWJOcndEajhDQ2M4KzlqcE9tdzB5UldLQW85dlgzM2Qvem5YdHRFYmtWN01pR0JKczNSWUp0RVpjRGVRVlBKamRrSndoZDNwRDdRZHZsVFhrdCtNcmxHL0orOEszTHo4SDJUNWVmbDRlTnltZFRPbzJITHQrVTI0MnZYVzdkK0xIeHZjdGIwbWtPWGQ2V3VQbU55eThFWHpiL2NubEhqbHVQWFg1Um1xM3ZYSDVKV3EwZlhQNVpiclYrY3ZrWDZiUitkL2xYMmRuYWRQazMyZDU2MmVRL051VFZyZHZ5cm1ReWxRdVpTU29ER1VvaG9leEpKUHU0dnlFZE9jSS9sQjQwUXV4ZHlDZlFIMGxYSmhKajVRTXA1UXhQdVh5QnAvZHdUU1hCanQ0anJNeHhMK0ExbFB0WXovR2Z5VGsxUXJrTFR4UEcrd2dleGxnTlpSY2V1MWpMSUxYcFgvMGswTXZkcW1SazlSUFNzMW85a0h2UURPVmpWS0s2eTc1WFBSeGc1VE5hNTFqUHFIdUVTRWNleldLYmxhR2hlUThRVld1ZVBRV0J5L1dmUE1IbnlSSzJWKzJIbDZKZWxiRlp2NDJuVXlKYlVFZDNJL2hRcXk2a3dwSFMyb3RGck5lWFl0WHhVMmlGZUZKYzFWcFJIdFBUR2RZeTZmOExCclN2YmZHMDNmVnNjM28yYnFXTExKVUpmV0tnRE9tVFlTbXlVQjdIUkV3Um1EaXJVaUpYODZtRTl0aXh1OXdGcDhSRW84NkJaSSs1bXBkVnY3Tm42SSs5RmNhSGpHblZhQzhzNTdHN3lOTFExUHFINkZMbDdUMXlwbUQ5Q1cwTm80aVpLZzdLSkt0ZDg3V3pNR1J5YUZydlRTRVY3SlFDZnJvTGk0aXM2ek5teEwwSktsVDlHUms1WTQ5YjVCTm1XZER2RUhzYU4zYitLWnRDZVlTMWxIRzBRbU9hMWp2MVhEWDZMaWZIMEh1NVhPQnI5ZmZnTi9aNWxNaGpSdXRCcTZCVkhUTW1SbE5XZTdGU2FlYlRUdjFwblJYak5hLzhIMk5iUHc0V1haWGlKTFZ1UFlWUG5UMFJ0WEx1UnU1ZnNjcUk4SXhZWmF6NWdEdGRYNHNXL1c2NG56UC9GTFdONkhlVm95VXNwOHdqY2dhcU42M3BuUHVWM29pZGIzT2d6L2hqMWxoM1JNcVlvVStOTVhPN1lHOVp2eWIwTVZod1JtdDl4eGszZEE1VjgxdnJHSHN1RlpvNTdSTk9rZlZlSFNGZXhqMmROV2ZPMzRUVng4NkhPbExmcDVxdGRIM0NWek5oVGlTZTNOOVZKeDk0aEdTQnFMSm13UGVVc1RmR2ltVXlZVmVFeEc3RWJPZU9qZlZHaVVwbVMzbWFISzh3SWlmM1UweUxHU1BaRzZ5YUdBV1pOMkswYXNxdW4xMitjcnAxelYzbWx2Q1VxczQwTDNNL1QvVjI0S3hPblV2MXlSWE15ZXpzcVNUQ0pTdXBtRnVkUnU1YVhiRFN1Rk9zY0tVNjJZeWRNNkdGZGNlUWxVd3hJUTd4bS9QWDlrbGR2eDNhbkRaamFGeFgvL0xzemJHMlBIMC9YNXUraC8veHQ4L2V0V3ZZLzE5OU1hMVhtTU5Pc1p5eTg5dTBHT0dlY1dZZUl0cGRlTisvZ2cvUFpsbFZXbis5NkxkUGo3MXB1ZHVYMGFsWC9xRlAvbENPOGUvZ2VpSjM1QzFjajNHdHp2aE5vcU9UUmVkdlFYYVg3SU44Q1pVSC91YXliaC85RGVlaUZOSjQybTNRVjB4VGNSVEg4ZStCMGtMWmUrUGVxL2VXTXR3dDVicjN3SzBvMEZZUnNGZ1ZGeHJCcmRHWStLWnh2YWh4ejJqVUJ6WHVGVWZVQjUvZDhVRjkxY0w5KytaNStlVDMvK2VjbkJ3aWFLOC9GWlR6di9vRUVpR1JZaUVTQzFGWXNSRk5ESFppaVNPZUJCSkpJcGtVVWtram5Rd3l5U0tiSEhMSkk1OENPdENSVG5TbUMxM3BSbmQ2MEpOZTlLWVBmZWxIZndiZ1FFUEhTU0V1aWlpbWhGSUdNb2pCREdFb3d4aU9HdzlsZU1NN0dveGdKS01ZelJqR01vN3hUR0FpazVqTUZLWXlqZWxVTUlPWnpHSTJjNWpMUE9hemdFcUo0aWd0dEhLRC9YeGtNN3Zad1FHT2MweXNiT2M5bTlnbk5vbG1sOFN3bGR0OEVEc0hPY0V2ZnZLYkk1emlBZmM0elVJV3NZY3FIbEhOZlI3eWpNYzg0V240VGpXODVEa3ZPSU9QSCt6bERhOTRqWjh2ZkdNYml3bXdoS1hVVXNjaDZsbEdBMEVhQ2JHY0ZhemtNNnRZVFJOcldNZGFybktZWnRhemdZMTg1VHZYT01zNXJ2T1dkeElyY1JJdkNaSW9TWklzS1pJcWFaSXVHWklwV1p6bkFwZTV3aDB1Y29tN2JPR2taSE9UVzVJanVleVVQTW1YQXF1dnRxbkJyOWxDZFFHSHcrRTFvOU9NYm9mU2ErclJsZXJmNDFLV3RxbUgrNVdhVWxjNmxZVktsN0pJV2F3c1VmNmI1emJWMUZ4TnM5Y0VmS0ZnZFZWbG85OTgwZzFUbDJFcER3WHIyNFBMS0d2VDhKaDdoTlgvQXRiT25IRUFlTnBGenFzT3drQVFCZERkbHI3cHU2U0twT2pWQ0lLbE5UVUVUSnVRNEpFSUxCZ2tXQnpmTUVzUWhBL2lOOHFVYmhjMzUwN21abDYwT1FPOWtCTE1aY1VwdmRhODBGazFnYUF1SVZuaGNLckhvTE5OUlVETmNsRFpBcXdzZnhPVitrUmhQNXRaL3JDNGdJRXdkd0k2d2xnTGFBaDlMakJBYUI4QnV5djAra0lIbC9aTllJaHcwZzRVWFBGRGlLbjdWQmhYaXdNeVFJWmJTUjhaVENXOXR0K25NeUtUcUUzY1kvTlBZanlKN3BJSk10NUxqcEJKMnJPR2hIMEJzM1ZYN1FBQUFBQUJWeW01eUFBQSkgZm9ybWF0KCd3b2ZmJyk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbi8qICBMaW5rcyAgKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5jb25uZWN0aW9uLXdyYXAge1xuICAgIHN0cm9rZTogIzAwMDAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDE1O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLmNvbm5lY3Rpb24td3JhcDpob3ZlciB7XG4gICAgb3BhY2l0eTogLjQ7XG4gICAgc3Ryb2tlLW9wYWNpdHk6IC40O1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLmNvbm5lY3Rpb24ge1xuICAgIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubGluay10b29scyAudG9vbC1yZW1vdmUgY2lyY2xlIHtcbiAgICBmaWxsOiAjQzY0MjQyO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLmxpbmstdG9vbHMgLnRvb2wtcmVtb3ZlIHBhdGgge1xuICAgIGZpbGw6ICNGRkZGRkY7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgaW5zaWRlIC5tYXJrZXItdmVydGV4LWdyb3VwIDxnPiBlbGVtZW50ICovXG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLXZlcnRleCB7XG4gICAgZmlsbDogI2QwZDhlODtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItdmVydGV4OmhvdmVyIHtcbiAgICBmaWxsOiAjNWZhOWVlO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci1hcnJvd2hlYWQge1xuICAgIGZpbGw6ICNkMGQ4ZTg7XG59XG4uam9pbnQtbGluay5qb2ludC10aGVtZS1tYXRlcmlhbCAubWFya2VyLWFycm93aGVhZDpob3ZlciB7XG4gICAgZmlsbDogIzVmYTllZTtcbiAgICBzdHJva2U6IG5vbmU7XG59XG5cbi8qIDxjaXJjbGU+IGVsZW1lbnQgdXNlZCB0byByZW1vdmUgYSB2ZXJ0ZXggKi9cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1hdGVyaWFsIC5tYXJrZXItdmVydGV4LXJlbW92ZS1hcmVhIHtcbiAgICBmaWxsOiAjNWZhOWVlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbWF0ZXJpYWwgLm1hcmtlci12ZXJ0ZXgtcmVtb3ZlIHtcbiAgICBmaWxsOiB3aGl0ZTtcbn1cbi8qICBMaW5rcyAgKi9cblxuLyogIExpbmtzICAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5jb25uZWN0aW9uLXdyYXAge1xuICAgIHN0cm9rZTogIzAwMDAwMDtcbiAgICBzdHJva2Utd2lkdGg6IDE1O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBtb3ZlO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5jb25uZWN0aW9uLXdyYXA6aG92ZXIge1xuICAgIG9wYWNpdHk6IC40O1xuICAgIHN0cm9rZS1vcGFjaXR5OiAuNDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAuY29ubmVjdGlvbiB7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cbi5qb2ludC1saW5rLmpvaW50LXRoZW1lLW1vZGVybiAubGluay10b29scyAudG9vbC1yZW1vdmUgY2lyY2xlIHtcbiAgICBmaWxsOiAjRkYwMDAwO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5saW5rLXRvb2xzIC50b29sLXJlbW92ZSBwYXRoIHtcbiAgICBmaWxsOiAjRkZGRkZGO1xufVxuXG4vKiA8Y2lyY2xlPiBlbGVtZW50IGluc2lkZSAubWFya2VyLXZlcnRleC1ncm91cCA8Zz4gZWxlbWVudCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5tYXJrZXItdmVydGV4IHtcbiAgICBmaWxsOiAjMUFCQzlDO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5tYXJrZXItdmVydGV4OmhvdmVyIHtcbiAgICBmaWxsOiAjMzQ0OTVFO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5tYXJrZXItYXJyb3doZWFkIHtcbiAgICBmaWxsOiAjMUFCQzlDO1xufVxuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5tYXJrZXItYXJyb3doZWFkOmhvdmVyIHtcbiAgICBmaWxsOiAjRjM5QzEyO1xuICAgIHN0cm9rZTogbm9uZTtcbn1cblxuLyogPGNpcmNsZT4gZWxlbWVudCB1c2VkIHRvIHJlbW92ZSBhIHZlcnRleCAqL1xuLmpvaW50LWxpbmsuam9pbnQtdGhlbWUtbW9kZXJuIC5tYXJrZXItdmVydGV4LXJlbW92ZSB7XG4gICAgZmlsbDogd2hpdGU7XG59XG4vKiAgTGlua3MgICovXG4iLCIvKiBUaGVtZSBmb3IgdGhlIHJpcHBsZSBlbGVtZW50cy4qL1xuLyogc3R5bGVsaW50LWRpc2FibGUgbWF0ZXJpYWwvbm8tcHJlZml4ZXMgKi9cbi8qIHN0eWxlbGludC1lbmFibGUgKi9cbi8qIFRoZW1lIGZvciB0aGUgcmlwcGxlIGVsZW1lbnRzLiovXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBtYXRlcmlhbC9uby1wcmVmaXhlcyAqL1xuLyogc3R5bGVsaW50LWVuYWJsZSAqL1xuQGltcG9ydCB1cmwofmpvaW50anMvZGlzdC9qb2ludC5jc3MpO1xuLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBmb250LXNpemU6IDZweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMjRweDsgfVxuXG4ubWF0LWgxLCAubWF0LWhlYWRsaW5lLCAubWF0LXR5cG9ncmFwaHkgaDEge1xuICBmb250OiA0MDAgMjRweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCAxNnB4OyB9XG5cbi5tYXQtaDIsIC5tYXQtdGl0bGUsIC5tYXQtdHlwb2dyYXBoeSBoMiB7XG4gIGZvbnQ6IDUwMCAyMHB4LzMycHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDE2cHg7IH1cblxuLm1hdC1oMywgLm1hdC1zdWJoZWFkaW5nLTIsIC5tYXQtdHlwb2dyYXBoeSBoMyB7XG4gIGZvbnQ6IDQwMCAxNnB4LzI4cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDE2cHg7IH1cblxuLm1hdC1oNCwgLm1hdC1zdWJoZWFkaW5nLTEsIC5tYXQtdHlwb2dyYXBoeSBoNCB7XG4gIGZvbnQ6IDQwMCAxNXB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDE2cHg7IH1cblxuLm1hdC1oNSwgLm1hdC10eXBvZ3JhcGh5IGg1IHtcbiAgZm9udDogNDAwIDExLjYycHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgMTJweDsgfVxuXG4ubWF0LWg2LCAubWF0LXR5cG9ncmFwaHkgaDYge1xuICBmb250OiA0MDAgOS4zOHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDEycHg7IH1cblxuLm1hdC1ib2R5LXN0cm9uZywgLm1hdC1ib2R5LTIge1xuICBmb250OiA1MDAgMTRweC8yNHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtYm9keSwgLm1hdC1ib2R5LTEsIC5tYXQtdHlwb2dyYXBoeSB7XG4gIGZvbnQ6IDQwMCAxNHB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cbiAgLm1hdC1ib2R5IHAsIC5tYXQtYm9keS0xIHAsIC5tYXQtdHlwb2dyYXBoeSBwIHtcbiAgICBtYXJnaW46IDAgMCAxMnB4OyB9XG5cbi5tYXQtc21hbGwsIC5tYXQtY2FwdGlvbiB7XG4gIGZvbnQ6IDQwMCAxMnB4LzIwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1kaXNwbGF5LTQsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktNCB7XG4gIGZvbnQ6IDMwMCAxMTJweC8xMTJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luOiAwIDAgNTZweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA1ZW07IH1cblxuLm1hdC1kaXNwbGF5LTMsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMyB7XG4gIGZvbnQ6IDQwMCA1NnB4LzU2cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDY0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMmVtOyB9XG5cbi5tYXQtZGlzcGxheS0yLCAubWF0LXR5cG9ncmFwaHkgLm1hdC1kaXNwbGF5LTIge1xuICBmb250OiA0MDAgNDVweC80OHB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDAgMCA2NHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDA1ZW07IH1cblxuLm1hdC1kaXNwbGF5LTEsIC5tYXQtdHlwb2dyYXBoeSAubWF0LWRpc3BsYXktMSB7XG4gIGZvbnQ6IDQwMCAzNHB4LzQwcHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIG1hcmdpbjogMCAwIDY0cHg7IH1cblxuLm1hdC1ib3R0b20tc2hlZXQtY29udGFpbmVyIHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWJ1dHRvbiwgLm1hdC1yYWlzZWQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uLFxuLm1hdC1mbGF0LWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1jYXJkIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LWNhcmQtaGVhZGVyIC5tYXQtY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ubWF0LWNhcmQtc3VidGl0bGUsXG4ubWF0LWNhcmQtY29udGVudCB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LWNoZWNrYm94IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtY2hlY2tib3gtbGF5b3V0IC5tYXQtY2hlY2tib3gtbGFiZWwge1xuICBsaW5lLWhlaWdodDogMjRweDsgfVxuXG4ubWF0LWNoaXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLm1hdC1jaGlwIC5tYXQtY2hpcC10cmFpbGluZy1pY29uLm1hdC1pY29uLFxuICAubWF0LWNoaXAgLm1hdC1jaGlwLXJlbW92ZS5tYXQtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4OyB9XG5cbi5tYXQtdGFibGUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1jYWxlbmRhciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHkge1xuICBmb250LXNpemU6IDEzcHg7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWxhYmVsLFxuLm1hdC1jYWxlbmRhci1wZXJpb2QtYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHRoIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5tYXQtZGlhbG9nLXRpdGxlIHtcbiAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgZm9udDogNDAwIDE0cHgvMjBweCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjEyNTtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDEuMzQzNzVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtcHJlZml4IC5tYXQtaWNvbixcbi5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxNTAlO1xuICBsaW5lLWhlaWdodDogMS4xMjU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXByZWZpeCAubWF0LWljb24tYnV0dG9uLFxuLm1hdC1mb3JtLWZpZWxkLXN1ZmZpeCAubWF0LWljb24tYnV0dG9uIHtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtOyB9XG4gIC5tYXQtZm9ybS1maWVsZC1wcmVmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24sXG4gIC5tYXQtZm9ybS1maWVsZC1zdWZmaXggLm1hdC1pY29uLWJ1dHRvbiAubWF0LWljb24ge1xuICAgIGhlaWdodDogMS4xMjVlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xMjU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgYm9yZGVyLXRvcDogMC44NDM3NWVtIHNvbGlkIHRyYW5zcGFyZW50OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMzQzNzVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4zNDM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXIge1xuICB0b3A6IC0wLjg0Mzc1ZW07XG4gIHBhZGRpbmctdG9wOiAwLjg0Mzc1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdG9wOiAxLjM0Mzc1ZW07IH1cblxuLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJvdHRvbTogMS4zNDM3NWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBtYXJnaW4tdG9wOiAwLjY2NjY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS43OTE2NjY2N2VtKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAwLjQzNzVlbSAwOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCxcbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDFweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzMzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1mb3JtLWZpZWxkLWF1dG9maWxsLWNvbnRyb2w6LXdlYmtpdC1hdXRvZmlsbCArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjVlbSkgc2NhbGUoMC43NSkgcGVyc3BlY3RpdmUoMTAwcHgpIHRyYW5zbGF0ZVooMC4wMDEwMXB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyNGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjI4MTI1ZW0pIHNjYWxlKDAuNzUpIHBlcnNwZWN0aXZlKDEwMHB4KSB0cmFuc2xhdGVaKDAuMDAxMDJweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjNlbSkgc2NhbGUoMC43NSk7XG4gIHdpZHRoOiAxMzMuMzMzMzUzMzMlOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMjgxMjVlbTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJvdHRvbTogMS4yNWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBtYXJnaW4tdG9wOiAwLjU0MTY2NjY3ZW07XG4gIHRvcDogY2FsYygxMDAlIC0gMS42NjY2NjY2N2VtKTsgfVxuXG5AbWVkaWEgcHJpbnQge1xuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXI6Zm9jdXMgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS4yODEyMmVtKSBzY2FsZSgwLjc1KTsgfVxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1hdXRvZmlsbC1jb250cm9sOi13ZWJraXQtYXV0b2ZpbGwgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMjFlbSkgc2NhbGUoMC43NSk7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcltsYWJlbF06bm90KDpsYWJlbC1zaG93bikgKyAubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlclxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuMjgxMmVtKSBzY2FsZSgwLjc1KTsgfSB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZzogMC4yNWVtIDAgMC43NWVtIDA7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICB0b3A6IDEuMDkzNzVlbTtcbiAgbWFyZ2luLXRvcDogLTAuNWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtZmlsbC5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiAxZW0gMCAxZW0gMDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRvcDogMS44NDM3NWVtO1xuICBtYXJnaW4tdG9wOiAtMC4yNWVtOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtY2FuLWZsb2F0Lm1hdC1mb3JtLWZpZWxkLXNob3VsZC1mbG9hdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NWVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzMzMzMyU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQgLm1hdC1pbnB1dC1zZXJ2ZXJbbGFiZWxdOm5vdCg6bGFiZWwtc2hvd24pICsgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLXdyYXBwZXJcbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41OTM3NGVtKSBzY2FsZSgwLjc1KTtcbiAgd2lkdGg6IDEzMy4zMzMzNDMzMyU7IH1cblxuLm1hdC1ncmlkLXRpbGUtaGVhZGVyLFxuLm1hdC1ncmlkLXRpbGUtZm9vdGVyIHtcbiAgZm9udC1zaXplOiAxNHB4OyB9XG4gIC5tYXQtZ3JpZC10aWxlLWhlYWRlciAubWF0LWxpbmUsXG4gIC5tYXQtZ3JpZC10aWxlLWZvb3RlciAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm1hdC1ncmlkLXRpbGUtaGVhZGVyIC5tYXQtbGluZTpudGgtY2hpbGQobisyKSxcbiAgICAubWF0LWdyaWQtdGlsZS1mb290ZXIgLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDsgfVxuXG5pbnB1dC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIG1hcmdpbi10b3A6IC0wLjA2MjVlbTsgfVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5tYXQtcGFnaW5hdG9yLFxuLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXNlbGVjdCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgaGVpZ2h0OiAxLjEyNWVtOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLWNvbnRlbnQge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbCwgLm1hdC1zdGVwcGVyLWhvcml6b250YWwge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1zdGVwLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwOyB9XG5cbi5tYXQtc3RlcC1zdWItbGFiZWwtZXJyb3Ige1xuICBmb250LXdlaWdodDogbm9ybWFsOyB9XG5cbi5tYXQtc3RlcC1sYWJlbC1lcnJvciB7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LXN0ZXAtbGFiZWwtc2VsZWN0ZWQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cblxuLm1hdC10YWItZ3JvdXAge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWxpbmsge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LXRvb2xiYXIsXG4ubWF0LXRvb2xiYXIgaDEsXG4ubWF0LXRvb2xiYXIgaDIsXG4ubWF0LXRvb2xiYXIgaDMsXG4ubWF0LXRvb2xiYXIgaDQsXG4ubWF0LXRvb2xiYXIgaDUsXG4ubWF0LXRvb2xiYXIgaDYge1xuICBmb250OiA1MDAgMjBweC8zMnB4IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBtYXJnaW46IDA7IH1cblxuLm1hdC10b29sdGlwIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiA2cHg7XG4gIHBhZGRpbmctYm90dG9tOiA2cHg7IH1cblxuLm1hdC10b29sdGlwLWhhbmRzZXQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA4cHg7IH1cblxuLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1saXN0LW9wdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTZweDsgfVxuICAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gICAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxNnB4OyB9XG4gIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saW5lOm50aC1jaGlsZChuKzIpIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSB7XG4gIGZvbnQtc2l6ZTogMTJweDsgfVxuICAubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LWl0ZW0gLm1hdC1saW5lIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAgIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4OyB9XG4gIC5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGluZSB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgICAubWF0LWxpc3QtYmFzZVtkZW5zZV0gLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICAgICAgZm9udC1zaXplOiAxMnB4OyB9XG5cbi5tYXQtbGlzdC1iYXNlW2RlbnNlXSAubWF0LXN1YmhlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwOyB9XG5cbi5tYXQtb3B0aW9uIHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7IH1cblxuLm1hdC1vcHRncm91cC1sYWJlbCB7XG4gIGZvbnQ6IDUwMCAxNHB4LzI0cHggUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXIge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTRweDsgfVxuXG4ubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxuXG4ubWF0LXRyZWUge1xuICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7IH1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7IH1cblxuLm1hdC1yaXBwbGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLm1hdC1yaXBwbGUubWF0LXJpcHBsZS11bmJvdW5kZWQge1xuICBvdmVyZmxvdzogdmlzaWJsZTsgfVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm0gMG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XG4gIEBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbi5jZGstdmlzdWFsbHktaGlkZGVuIHtcbiAgYm9yZGVyOiAwO1xuICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICBoZWlnaHQ6IDFweDtcbiAgbWFyZ2luOiAtMXB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwYWRkaW5nOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIG91dGxpbmU6IDA7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lOyB9XG5cbi5jZGstb3ZlcmxheS1jb250YWluZXIsIC5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLmNkay1vdmVybGF5LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTAwMDsgfVxuICAuY2RrLW92ZXJsYXktY29udGFpbmVyOmVtcHR5IHtcbiAgICBkaXNwbGF5OiBub25lOyB9XG5cbi5jZGstZ2xvYmFsLW92ZXJsYXktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTAwMDsgfVxuXG4uY2RrLW92ZXJsYXktcGFuZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwJTsgfVxuXG4uY2RrLW92ZXJsYXktYmFja2Ryb3Age1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTAwMDtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC4yNSwgMSk7XG4gIG9wYWNpdHk6IDA7IH1cbiAgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgIG9wYWNpdHk6IDE7IH1cbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAgICAgLmNkay1vdmVybGF5LWJhY2tkcm9wLmNkay1vdmVybGF5LWJhY2tkcm9wLXNob3dpbmcge1xuICAgICAgICBvcGFjaXR5OiAwLjY7IH0gfVxuXG4uY2RrLW92ZXJsYXktZGFyay1iYWNrZHJvcCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4zMik7IH1cblxuLmNkay1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wLCAuY2RrLW92ZXJsYXktdHJhbnNwYXJlbnQtYmFja2Ryb3AuY2RrLW92ZXJsYXktYmFja2Ryb3Atc2hvd2luZyB7XG4gIG9wYWNpdHk6IDA7IH1cblxuLmNkay1vdmVybGF5LWNvbm5lY3RlZC1wb3NpdGlvbi1ib3VuZGluZy1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMXB4O1xuICBtaW4taGVpZ2h0OiAxcHg7IH1cblxuLmNkay1nbG9iYWwtc2Nyb2xsYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7IH1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydCB7XG4gIC8qISovIH1cblxuQGtleWZyYW1lcyBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1lbmQge1xuICAvKiEqLyB9XG5cbi5jZGstdGV4dC1maWVsZC1hdXRvZmlsbC1tb25pdG9yZWQ6LXdlYmtpdC1hdXRvZmlsbCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBjZGstdGV4dC1maWVsZC1hdXRvZmlsbC1zdGFydDsgfVxuXG4uY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtbW9uaXRvcmVkOm5vdCg6LXdlYmtpdC1hdXRvZmlsbCkge1xuICBhbmltYXRpb24tbmFtZTogY2RrLXRleHQtZmllbGQtYXV0b2ZpbGwtZW5kOyB9XG5cbnRleHRhcmVhLmNkay10ZXh0YXJlYS1hdXRvc2l6ZSB7XG4gIHJlc2l6ZTogbm9uZTsgfVxuXG50ZXh0YXJlYS5jZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nIHtcbiAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgcGFkZGluZzogMnB4IDAgIWltcG9ydGFudDtcbiAgYm94LXNpemluZzogY29udGVudC1ib3ggIWltcG9ydGFudDsgfVxuXG4ubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpOyB9XG5cbi5tYXQtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1vcHRpb246aG92ZXI6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSwgLm1hdC1vcHRpb246Zm9jdXM6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuICAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLW11bHRpcGxlKTpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG4gIC5tYXQtb3B0aW9uLm1hdC1hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNCk7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1vcHRpb24ubWF0LW9wdGlvbi1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1wcmltYXJ5IC5tYXQtb3B0aW9uLm1hdC1zZWxlY3RlZDpub3QoLm1hdC1vcHRpb24tZGlzYWJsZWQpIHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1hY2NlbnQgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXdhcm4gLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1vcHRncm91cC1kaXNhYmxlZCAubWF0LW9wdGdyb3VwLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1wc2V1ZG8tY2hlY2tib3gge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuICAubWF0LXBzZXVkby1jaGVja2JveDo6YWZ0ZXIge1xuICAgIGNvbG9yOiAjZmFmYWZhOyB9XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQsXG4ubWF0LXBzZXVkby1jaGVja2JveC1pbmRldGVybWluYXRlLFxuLm1hdC1hY2NlbnQgLm1hdC1wc2V1ZG8tY2hlY2tib3gtY2hlY2tlZCxcbi5tYXQtYWNjZW50IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjZmY0MDgxOyB9XG5cbi5tYXQtcHJpbWFyeSAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC1wcmltYXJ5IC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjM2Y1MWI1OyB9XG5cbi5tYXQtd2FybiAubWF0LXBzZXVkby1jaGVja2JveC1jaGVja2VkLFxuLm1hdC13YXJuIC5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUge1xuICBiYWNrZ3JvdW5kOiAjMjE5NmYzOyB9XG5cbi5tYXQtcHNldWRvLWNoZWNrYm94LWNoZWNrZWQubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCxcbi5tYXQtcHNldWRvLWNoZWNrYm94LWluZGV0ZXJtaW5hdGUubWF0LXBzZXVkby1jaGVja2JveC1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNiMGIwYjA7IH1cblxuLm1hdC1lbGV2YXRpb24tejAge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejEge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDFweCAxcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MyB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejQge1xuICBib3gtc2hhZG93OiAwcHggMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDRweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16NSB7XG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggNXB4IDhweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxNHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo2IHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA2cHggMTBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAxOHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo3IHtcbiAgYm94LXNoYWRvdzogMHB4IDRweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA3cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDJweCAxNnB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXo5IHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA2cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA5cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxMCB7XG4gIGJveC1zaGFkb3c6IDBweCA2cHggNnB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTBweCAxNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNHB4IDE4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejExIHtcbiAgYm94LXNoYWRvdzogMHB4IDZweCA3cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxMXB4IDE1cHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA0cHggMjBweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTIge1xuICBib3gtc2hhZG93OiAwcHggN3B4IDhweCAtNHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDEycHggMTdweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDVweCAyMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxMyB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTNweCAxOXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDI0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejE0IHtcbiAgYm94LXNoYWRvdzogMHB4IDdweCA5cHggLTRweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNHB4IDIxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA1cHggMjZweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MTUge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDlweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE1cHggMjJweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAyOHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxNiB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTBweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE2cHggMjRweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxNyB7XG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE3cHggMjZweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDZweCAzMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxOCB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTFweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE4cHggMjhweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoxOSB7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggMTJweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDE5cHggMjlweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDdweCAzNnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyMCB7XG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDEzcHggLTZweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyMHB4IDMxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA4cHggMzhweCA3cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MjEge1xuICBib3gtc2hhZG93OiAwcHggMTBweCAxM3B4IC02cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjFweCAzM3B4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOHB4IDQwcHggN3B4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1lbGV2YXRpb24tejIyIHtcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMTRweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDIycHggMzVweCAzcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDhweCA0MnB4IDdweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZWxldmF0aW9uLXoyMyB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE0cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyM3B4IDM2cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWVsZXZhdGlvbi16MjQge1xuICBib3gtc2hhZG93OiAwcHggMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtdGhlbWUtbG9hZGVkLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLm1hdC1hdXRvY29tcGxldGUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcikge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gICAgLm1hdC1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LWFjdGl2ZSk6bm90KDpob3Zlcik6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICMzZjUxYjU7IH1cbiAgQG1lZGlhICgtbXMtaGlnaC1jb250cmFzdDogYWN0aXZlKSB7XG4gICAgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgICAgIG91dGxpbmU6IHNvbGlkIDFweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7IH0gfVxuXG4ubWF0LWJhZGdlLWFjY2VudCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjZmY0MDgxO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1iYWRnZS13YXJuIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzIxOTZmMzsgfVxuXG4ubWF0LWJhZGdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5tYXQtYmFkZ2UtaGlkZGVuIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7IH1cblxuLm1hdC1iYWRnZS1kaXNhYmxlZCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiAjYjliOWI5O1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWJhZGdlLWNvbnRlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlLWluLW91dDtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLm1hdC1iYWRnZS1jb250ZW50Lm1hdC1iYWRnZS1hY3RpdmUge1xuICB0cmFuc2Zvcm06IG5vbmU7IH1cblxuLm1hdC1iYWRnZS1zbWFsbCAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTZweDsgfVxuXG4ubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC04cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2UtYmVsb3cgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgYm90dG9tOiAtOHB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMTZweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0xNnB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTZweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLXNtYWxsLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTE2cHg7IH1cblxuLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC04cHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1zbWFsbC5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IGF1dG87XG4gIHJpZ2h0OiAtOHB4OyB9XG5cbi5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtOHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2Utc21hbGwubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtOHB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG4gIGxpbmUtaGVpZ2h0OiAyMnB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1hYm92ZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICB0b3A6IC0xMXB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC0xMXB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTIycHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTIycHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjJweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0yMnB4OyB9XG5cbi5tYXQtYmFkZ2UtbWVkaXVtLm1hdC1iYWRnZS1vdmVybGFwLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogLTExcHg7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTExcHg7IH1cblxuLm1hdC1iYWRnZS1tZWRpdW0ubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMTFweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLW1lZGl1bS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IGF1dG87XG4gIGxlZnQ6IC0xMXB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2UtYWJvdmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgdG9wOiAtMTRweDsgfVxuXG4ubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWxvdyAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBib3R0b206IC0xNHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiAtMjhweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1iZWZvcmUgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgbGVmdDogYXV0bztcbiAgcmlnaHQ6IC0yOHB4OyB9XG5cbi5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiAtMjhweDsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWJhZGdlLWxhcmdlLm1hdC1iYWRnZS1hZnRlciAubWF0LWJhZGdlLWNvbnRlbnQge1xuICByaWdodDogYXV0bztcbiAgbGVmdDogLTI4cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYmVmb3JlIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIGxlZnQ6IC0xNHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWJlZm9yZSAubWF0LWJhZGdlLWNvbnRlbnQge1xuICBsZWZ0OiBhdXRvO1xuICByaWdodDogLTE0cHg7IH1cblxuLm1hdC1iYWRnZS1sYXJnZS5tYXQtYmFkZ2Utb3ZlcmxhcC5tYXQtYmFkZ2UtYWZ0ZXIgLm1hdC1iYWRnZS1jb250ZW50IHtcbiAgcmlnaHQ6IC0xNHB4OyB9XG5cbltkaXI9J3J0bCddIC5tYXQtYmFkZ2UtbGFyZ2UubWF0LWJhZGdlLW92ZXJsYXAubWF0LWJhZGdlLWFmdGVyIC5tYXQtYmFkZ2UtY29udGVudCB7XG4gIHJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAtMTRweDsgfVxuXG4ubWF0LWJvdHRvbS1zaGVldC1jb250YWluZXIge1xuICBib3gtc2hhZG93OiAwcHggOHB4IDEwcHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxNnB4IDI0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA2cHggMzBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtYnV0dG9uLCAubWF0LWljb24tYnV0dG9uLCAubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gIC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1wcmltYXJ5IHtcbiAgICBjb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWljb24tYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LWFjY2VudCB7XG4gICAgY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm4sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4ge1xuICAgIGNvbG9yOiAjMjE5NmYzOyB9XG4gIC5tYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1pY29uLWJ1dHRvbi5tYXQtcHJpbWFyeVtkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudFtkaXNhYmxlZF0sIC5tYXQtaWNvbi1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWljb24tYnV0dG9uW2Rpc2FibGVkXVtkaXNhYmxlZF0sIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC13YXJuW2Rpc2FibGVkXSwgLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuICAubWF0LWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtaWNvbi1idXR0b24ubWF0LWFjY2VudCAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LXN0cm9rZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWJ1dHRvbi5tYXQtd2FybiAubWF0LWJ1dHRvbi1mb2N1cy1vdmVybGF5LCAubWF0LWljb24tYnV0dG9uLm1hdC13YXJuIC5tYXQtYnV0dG9uLWZvY3VzLW92ZXJsYXksIC5tYXQtc3Ryb2tlZC1idXR0b24ubWF0LXdhcm4gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuICAubWF0LWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSwgLm1hdC1zdHJva2VkLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cbiAgLm1hdC1idXR0b24gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1pY29uLWJ1dHRvbiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXN0cm9rZWQtYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIG9wYWNpdHk6IDAuMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7IH1cblxuLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrOyB9XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtkaXNhYmxlZF0pIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZmxhdC1idXR0b24sIC5tYXQtcmFpc2VkLWJ1dHRvbiwgLm1hdC1mYWIsIC5tYXQtbWluaS1mYWIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LWFjY2VudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtZmFiLm1hdC1hY2NlbnQsIC5tYXQtbWluaS1mYWIubWF0LWFjY2VudCB7XG4gICAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4sIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1mYWIubWF0LXdhcm4sIC5tYXQtbWluaS1mYWIubWF0LXdhcm4ge1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtcHJpbWFyeSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5LCAubWF0LWZhYi5tYXQtcHJpbWFyeSwgLm1hdC1taW5pLWZhYi5tYXQtcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYWNjZW50LCAubWF0LWZhYi5tYXQtYWNjZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybiwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuLCAubWF0LWZhYi5tYXQtd2FybiwgLm1hdC1taW5pLWZhYi5tYXQtd2FybiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mbGF0LWJ1dHRvbi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtZmxhdC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnRbZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b24ubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXByaW1hcnlbZGlzYWJsZWRdLCAubWF0LWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1mYWIubWF0LXdhcm5bZGlzYWJsZWRdLCAubWF0LWZhYltkaXNhYmxlZF1bZGlzYWJsZWRdLCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtYWNjZW50W2Rpc2FibGVkXSwgLm1hdC1taW5pLWZhYi5tYXQtd2FybltkaXNhYmxlZF0sIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LWZhYi5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTsgfVxuICAubWF0LWZsYXQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1mYWIubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LW1pbmktZmFiLm1hdC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG4gIC5tYXQtZmxhdC1idXR0b24ubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC1yYWlzZWQtYnV0dG9uLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtZmFiLm1hdC13YXJuIC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtbWluaS1mYWIubWF0LXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyB9XG5cbi5tYXQtc3Ryb2tlZC1idXR0b246bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSwgLm1hdC1mbGF0LWJ1dHRvbjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAycHggMnB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXJhaXNlZC1idXR0b246bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pIHtcbiAgYm94LXNoYWRvdzogMHB4IDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF06bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWZhYjpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pLCAubWF0LW1pbmktZmFiOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mYWI6bm90KFtkaXNhYmxlZF0pOmFjdGl2ZTpub3QoW2NsYXNzKj0nbWF0LWVsZXZhdGlvbi16J10pLCAubWF0LW1pbmktZmFiOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gIGJveC1zaGFkb3c6IDBweCA3cHggOHB4IC00cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTJweCAxN3B4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNXB4IDIycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSksIC5tYXQtbWluaS1mYWJbZGlzYWJsZWRdOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMHB4IDBweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICBib3gtc2hhZG93OiAwcHggM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDJweCAycHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAxcHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1zdGFuZGFsb25lLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQsXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gIGJveC1zaGFkb3c6IG5vbmU7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG4gIC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIC5tYXQtYnV0dG9uLXRvZ2dsZS1mb2N1cy1vdmVybGF5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAtYXBwZWFyYW5jZS1zdGFuZGFyZCAubWF0LWJ1dHRvbi10b2dnbGUgKyAubWF0LWJ1dHRvbi10b2dnbGUge1xuICBib3JkZXItbGVmdDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuW2Rpcj0ncnRsJ10gLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWJ1dHRvbi10b2dnbGUtdmVydGljYWwgLm1hdC1idXR0b24tdG9nZ2xlICsgLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gIGJvcmRlci1yaWdodDogbm9uZTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuICAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTsgfVxuICAubWF0LWJ1dHRvbi10b2dnbGUtZGlzYWJsZWQubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCB7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgLm1hdC1idXR0b24tdG9nZ2xlLWRpc2FibGVkLm1hdC1idXR0b24tdG9nZ2xlLWNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZGJkYmQ7IH1cblxuLm1hdC1idXR0b24tdG9nZ2xlLXN0YW5kYWxvbmUubWF0LWJ1dHRvbi10b2dnbGUtYXBwZWFyYW5jZS1zdGFuZGFyZCxcbi5tYXQtYnV0dG9uLXRvZ2dsZS1ncm91cC1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcbiAgYm9yZGVyOiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1jYXJkOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMXB4IDFweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1jYXJkLm1hdC1jYXJkLWZsYXQ6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtY2hlY2tib3gtZnJhbWUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1jaGVja2JveC1jaGVja21hcmsge1xuICBmaWxsOiAjZmFmYWZhOyB9XG5cbi5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICBzdHJva2U6ICNmYWZhZmEgIWltcG9ydGFudDsgfVxuICBAbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBibGFjay1vbi13aGl0ZSkge1xuICAgIC5tYXQtY2hlY2tib3gtY2hlY2ttYXJrLXBhdGgge1xuICAgICAgc3Ryb2tlOiAjMDAwICFpbXBvcnRhbnQ7IH0gfVxuXG4ubWF0LWNoZWNrYm94LW1peGVkbWFyayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7IH1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCwgLm1hdC1jaGVja2JveC1jaGVja2VkLm1hdC1wcmltYXJ5IC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlLm1hdC1hY2NlbnQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWNoZWNrZWQubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtY2hlY2tib3gtaW5kZXRlcm1pbmF0ZS5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQsIC5tYXQtY2hlY2tib3gtY2hlY2tlZC5tYXQtd2FybiAubWF0LWNoZWNrYm94LWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQubWF0LWNoZWNrYm94LWNoZWNrZWQgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kLCAubWF0LWNoZWNrYm94LWRpc2FibGVkLm1hdC1jaGVja2JveC1pbmRldGVybWluYXRlIC5tYXQtY2hlY2tib3gtYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMGIwYjA7IH1cblxuLm1hdC1jaGVja2JveC1kaXNhYmxlZDpub3QoLm1hdC1jaGVja2JveC1jaGVja2VkKSAubWF0LWNoZWNrYm94LWZyYW1lIHtcbiAgYm9yZGVyLWNvbG9yOiAjYjBiMGIwOyB9XG5cbi5tYXQtY2hlY2tib3gtZGlzYWJsZWQgLm1hdC1jaGVja2JveC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbkBtZWRpYSAoLW1zLWhpZ2gtY29udHJhc3Q6IGFjdGl2ZSkge1xuICAubWF0LWNoZWNrYm94LWRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjU7IH0gfVxuXG5AbWVkaWEgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpIHtcbiAgLm1hdC1jaGVja2JveC1iYWNrZ3JvdW5kIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9IH1cblxuLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LXByaW1hcnkgLm1hdC1jaGVja2JveC1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1jaGVja2JveDpub3QoLm1hdC1jaGVja2JveC1kaXNhYmxlZCkubWF0LWFjY2VudCAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWNoZWNrYm94Om5vdCgubWF0LWNoZWNrYm94LWRpc2FibGVkKS5tYXQtd2FybiAubWF0LWNoZWNrYm94LXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gICAgb3BhY2l0eTogMC40OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcDpub3QoLm1hdC1jaGlwLWRpc2FibGVkKTphY3RpdmUge1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggM3B4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggM3B4IDRweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOm5vdCgubWF0LWNoaXAtZGlzYWJsZWQpIC5tYXQtY2hpcC1yZW1vdmU6aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuNTQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLWRpc2FibGVkIHtcbiAgICBvcGFjaXR5OiAwLjQ7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwOjphZnRlciB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7IH1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC40OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC13YXJuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMztcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LWNoaXAtcmVtb3ZlIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgb3BhY2l0eTogMC40OyB9XG4gIC5tYXQtY2hpcC5tYXQtc3RhbmRhcmQtY2hpcC5tYXQtY2hpcC1zZWxlY3RlZC5tYXQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cblxuLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxO1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1jaGlwLm1hdC1zdGFuZGFyZC1jaGlwLm1hdC1jaGlwLXNlbGVjdGVkLm1hdC1hY2NlbnQgLm1hdC1jaGlwLXJlbW92ZSB7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuICAubWF0LWNoaXAubWF0LXN0YW5kYXJkLWNoaXAubWF0LWNoaXAtc2VsZWN0ZWQubWF0LWFjY2VudCAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IH1cblxuLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQ6IHdoaXRlOyB9XG5cbi5tYXQtdGFibGUgdGhlYWQsIC5tYXQtdGFibGUgdGJvZHksIC5tYXQtdGFibGUgdGZvb3QsXG5tYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgbWF0LWZvb3Rlci1yb3csXG5bbWF0LWhlYWRlci1yb3ddLCBbbWF0LXJvd10sIFttYXQtZm9vdGVyLXJvd10sXG4ubWF0LXRhYmxlLXN0aWNreSB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7IH1cblxubWF0LXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1mb290ZXItcm93LFxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1jYWxlbmRhci1hcnJvdyB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSxcbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IC5tYXQtY2FsZW5kYXItbmV4dC1idXR0b24sXG4ubWF0LWRhdGVwaWNrZXItY29udGVudCAubWF0LWNhbGVuZGFyLXByZXZpb3VzLWJ1dHRvbiB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtY2FsZW5kYXItdGFibGUtaGVhZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1jYWxlbmRhci10YWJsZS1oZWFkZXItZGl2aWRlcjo6YWZ0ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LWNlbGw6bm90KC5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCk6aG92ZXIgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLFxuLmNkay1rZXlib2FyZC1mb2N1c2VkIC5tYXQtY2FsZW5kYXItYm9keS1hY3RpdmUgPiAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50Om5vdCgubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQpLFxuLmNkay1wcm9ncmFtLWZvY3VzZWQgLm1hdC1jYWxlbmRhci1ib2R5LWFjdGl2ZSA+IC5tYXQtY2FsZW5kYXItYm9keS1jZWxsLWNvbnRlbnQ6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS10b2RheTpub3QoLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkKSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktdG9kYXk6bm90KC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCkge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xOCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTtcbiAgY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtY2FsZW5kYXItYm9keS1kaXNhYmxlZCA+IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuNCk7IH1cblxuLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlOyB9XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50IHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtYWNjZW50IC5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LWFjY2VudCAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjQpOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC1hY2NlbnQgLm1hdC1jYWxlbmRhci1ib2R5LXRvZGF5Lm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggd2hpdGU7IH1cbiAgLm1hdC1kYXRlcGlja2VyLWNvbnRlbnQubWF0LXdhcm4gLm1hdC1jYWxlbmRhci1ib2R5LXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LWRhdGVwaWNrZXItY29udGVudC5tYXQtd2FybiAubWF0LWNhbGVuZGFyLWJvZHktZGlzYWJsZWQgPiAubWF0LWNhbGVuZGFyLWJvZHktc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzMsIDE1MCwgMjQzLCAwLjQpOyB9XG4gIC5tYXQtZGF0ZXBpY2tlci1jb250ZW50Lm1hdC13YXJuIC5tYXQtY2FsZW5kYXItYm9keS10b2RheS5tYXQtY2FsZW5kYXItYm9keS1zZWxlY3RlZCB7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4IHdoaXRlOyB9XG5cbi5tYXQtZGF0ZXBpY2tlci1jb250ZW50LXRvdWNoIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDBweCAwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCAwcHggMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZGF0ZXBpY2tlci10b2dnbGUtYWN0aXZlIHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LWFjY2VudCB7XG4gICAgY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1kYXRlcGlja2VyLXRvZ2dsZS1hY3RpdmUubWF0LXdhcm4ge1xuICAgIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZGlhbG9nLWNvbnRhaW5lciB7XG4gIGJveC1zaGFkb3c6IDBweCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDBweCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtZGl2aWRlciB7XG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1kaXZpZGVyLXZlcnRpY2FsIHtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsOm5vdChbY2xhc3MqPSdtYXQtZWxldmF0aW9uLXonXSkge1xuICAgIGJveC1zaGFkb3c6IDBweCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMnB4IDJweCAwcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMHB4IDFweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1hY3Rpb24tcm93IHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoLm1hdC1leHBhbmRlZCkgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKS5jZGsta2V5Ym9hcmQtZm9jdXNlZCwgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSkuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlcjpub3QoW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbkBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgLm1hdC1leHBhbnNpb24tcGFuZWw6bm90KC5tYXQtZXhwYW5kZWQpOm5vdChbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddKVxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfSB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbixcbi5tYXQtZXhwYW5zaW9uLWluZGljYXRvcjo6YWZ0ZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJbYXJpYS1kaXNhYmxlZD0ndHJ1ZSddIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cbiAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyW2FyaWEtZGlzYWJsZWQ9J3RydWUnXSAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUsXG4gIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlclthcmlhLWRpc2FibGVkPSd0cnVlJ10gLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyB9XG5cbi5tYXQtaGludCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwubWF0LWFjY2VudCB7XG4gICAgY29sb3I6ICNmZjQwODE7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtd2FybiB7XG4gICAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cbiAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZS5tYXQtd2FybiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpIC5tYXQtZm9ybS1maWVsZC1pbmZpeDo6YWZ0ZXIge1xuICBjb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdC5tYXQtZm9jdXNlZDpub3QoLm1hdC1mb3JtLWZpZWxkLWludmFsaWQpLm1hdC1hY2NlbnQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1uYXRpdmUtc2VsZWN0Lm1hdC1mb2N1c2VkOm5vdCgubWF0LWZvcm0tZmllbGQtaW52YWxpZCkubWF0LXdhcm4gLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG4gIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1sYWJlbC5tYXQtYWNjZW50LFxuICAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwgLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gICAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSxcbi5tYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUubWF0LWFjY2VudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1lcnJvciB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeSAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1sZWdhY3kgLm1hdC1oaW50IHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5IC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNDIpIDAlLCByZ2JhKDAsIDAsIDAsIDAuNDIpIDMzJSwgdHJhbnNwYXJlbnQgMCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDRweCAxMDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utc3RhbmRhcmQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjQyKSAwJSwgcmdiYSgwLCAwLCAwLCAwLjQyKSAzMyUsIHRyYW5zcGFyZW50IDAlKTtcbiAgYmFja2dyb3VuZC1zaXplOiA0cHggMTAwJTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14OyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWZsZXgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1maWxsLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWZpbGwubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZTo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtYWNjZW50IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZC5tYXQtd2FybiAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNik7IH1cblxuLm1hdC1pY29uLm1hdC1wcmltYXJ5IHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1pY29uLm1hdC1hY2NlbnQge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWljb24ubWF0LXdhcm4ge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQtdHlwZS1tYXQtbmF0aXZlLXNlbGVjdCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1pbnB1dC1lbGVtZW50OmRpc2FibGVkLFxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1mb3JtLWZpZWxkLWluZml4OjphZnRlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNhcmV0LWNvbG9yOiAjM2Y1MWI1OyB9XG4gIC5tYXQtaW5wdXQtZWxlbWVudDo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDIpOyB9XG4gIC5tYXQtaW5wdXQtZWxlbWVudDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cbiAgLm1hdC1pbnB1dC1lbGVtZW50Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuICAubWF0LWlucHV0LWVsZW1lbnQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQyKTsgfVxuXG4ubWF0LWFjY2VudCAubWF0LWlucHV0LWVsZW1lbnQge1xuICBjYXJldC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXdhcm4gLm1hdC1pbnB1dC1lbGVtZW50LFxuLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY2FyZXQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LW5hdGl2ZS1zZWxlY3QubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtaW5maXg6OmFmdGVyIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cblxuLm1hdC1saXN0LWJhc2UgLm1hdC1zdWJoZWFkZXIge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4ubWF0LWxpc3QtaXRlbS1kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7IH1cblxuLm1hdC1saXN0LW9wdGlvbjpob3ZlciwgLm1hdC1saXN0LW9wdGlvbjpmb2N1cyxcbi5tYXQtbmF2LWxpc3QgLm1hdC1saXN0LWl0ZW06aG92ZXIsXG4ubWF0LW5hdi1saXN0IC5tYXQtbGlzdC1pdGVtOmZvY3VzIHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjA0KTsgfVxuXG4ubWF0LW1lbnUtcGFuZWwge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTsgfVxuICAubWF0LW1lbnUtcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1tZW51LWl0ZW0ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC1tZW51LWl0ZW1bZGlzYWJsZWRdLCAubWF0LW1lbnUtaXRlbVtkaXNhYmxlZF06OmFmdGVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LW1lbnUtaXRlbSAubWF0LWljb24tbm8tY29sb3IsXG4ubWF0LW1lbnUtaXRlbS1zdWJtZW51LXRyaWdnZXI6OmFmdGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1tZW51LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pLFxuLm1hdC1tZW51LWl0ZW0uY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoW2Rpc2FibGVkXSksXG4ubWF0LW1lbnUtaXRlbS1oaWdobGlnaHRlZDpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMDQpOyB9XG5cbi5tYXQtcGFnaW5hdG9yIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuLm1hdC1wYWdpbmF0b3IsXG4ubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbi5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWRlY3JlbWVudCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWluY3JlbWVudCxcbi5tYXQtaWNvbi1idXR0b25bZGlzYWJsZWRdIC5tYXQtcGFnaW5hdG9yLWZpcnN0LFxuLm1hdC1pY29uLWJ1dHRvbltkaXNhYmxlZF0gLm1hdC1wYWdpbmF0b3ItbGFzdCB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogI2M1Y2FlOTsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjYWU5OyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWJhY2tncm91bmQge1xuICBmaWxsOiAjZmY4MGFiOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC1hY2NlbnQgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODBhYjsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtYWNjZW50IC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1iYWNrZ3JvdW5kIHtcbiAgZmlsbDogI2JiZGVmYjsgfVxuXG4ubWF0LXByb2dyZXNzLWJhci5tYXQtd2FybiAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJkZWZiOyB9XG5cbi5tYXQtcHJvZ3Jlc3MtYmFyLm1hdC13YXJuIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXByb2dyZXNzLXNwaW5uZXIgY2lyY2xlLCAubWF0LXNwaW5uZXIgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjM2Y1MWI1OyB9XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtYWNjZW50IGNpcmNsZSwgLm1hdC1zcGlubmVyLm1hdC1hY2NlbnQgY2lyY2xlIHtcbiAgc3Ryb2tlOiAjZmY0MDgxOyB9XG5cbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUsIC5tYXQtc3Bpbm5lci5tYXQtd2FybiBjaXJjbGUge1xuICBzdHJva2U6ICMyMTk2ZjM7IH1cblxuLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICBib3JkZXItY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXByaW1hcnkgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeSAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1wcmltYXJ5Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUsXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcHJpbWFyeTphY3RpdmUgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudCAubWF0LXJhZGlvLXJpcHBsZSAubWF0LXJpcHBsZS1lbGVtZW50Om5vdCgubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlKSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQ6YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0MDgxOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuLm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC13YXJuIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm4gLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudDpub3QoLm1hdC1yYWRpby1wZXJzaXN0ZW50LXJpcHBsZSksXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtd2Fybi5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLXBlcnNpc3RlbnQtcmlwcGxlLFxuLm1hdC1yYWRpby1idXR0b24ubWF0LXdhcm46YWN0aXZlIC5tYXQtcmFkaW8tcGVyc2lzdGVudC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtcmFkaW8tZGlzYWJsZWQgLm1hdC1yYWRpby1yaXBwbGUgLm1hdC1yaXBwbGUtZWxlbWVudCxcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1yYWRpby1kaXNhYmxlZCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1yYWRpby1idXR0b24ubWF0LXJhZGlvLWRpc2FibGVkIC5tYXQtcmFkaW8tbGFiZWwtY29udGVudCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtcmFkaW8tYnV0dG9uIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgfVxuXG4ubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtc2VsZWN0LXBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40Mik7IH1cblxuLm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtdmFsdWUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtc2VsZWN0LXBhbmVsIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cbiAgLm1hdC1zZWxlY3QtcGFuZWw6bm90KFtjbGFzcyo9J21hdC1lbGV2YXRpb24teiddKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCA0cHggNXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDEwcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1zZWxlY3QtcGFuZWwgLm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1tdWx0aXBsZSkge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1wcmltYXJ5IC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkLm1hdC1hY2NlbnQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQubWF0LXdhcm4gLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LWZvcm0tZmllbGQgLm1hdC1zZWxlY3QubWF0LXNlbGVjdC1pbnZhbGlkIC5tYXQtc2VsZWN0LWFycm93IHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1mb3JtLWZpZWxkIC5tYXQtc2VsZWN0Lm1hdC1zZWxlY3QtZGlzYWJsZWQgLm1hdC1zZWxlY3QtYXJyb3cge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAubWF0LWRyYXdlci5tYXQtZHJhd2VyLXB1c2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtZHJhd2VyOm5vdCgubWF0LWRyYXdlci1zaWRlKSB7XG4gICAgYm94LXNoYWRvdzogMHB4IDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwcHggMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggNnB4IDMwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1kcmF3ZXItc2lkZSB7XG4gIGJvcmRlci1yaWdodDogc29saWQgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZCB7XG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJvcmRlci1yaWdodDogbm9uZTsgfVxuXG5bZGlyPSdydGwnXSAubWF0LWRyYXdlci1zaWRlIHtcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIDFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7IH1cbiAgW2Rpcj0ncnRsJ10gLm1hdC1kcmF3ZXItc2lkZS5tYXQtZHJhd2VyLWVuZCB7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWRyYXdlci1iYWNrZHJvcC5tYXQtZHJhd2VyLXNob3duIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgNjQsIDEyOSwgMC41NCk7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXByaW1hcnkubWF0LWNoZWNrZWQgLm1hdC1zbGlkZS10b2dnbGUtdGh1bWIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjMsIDgxLCAxODEsIDAuNTQpOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1wcmltYXJ5Lm1hdC1jaGVja2VkIC5tYXQtcmlwcGxlLWVsZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLm1hdC13YXJuLm1hdC1jaGVja2VkIC5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZmMzsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS5tYXQtd2Fybi5tYXQtY2hlY2tlZCAubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMzLCAxNTAsIDI0MywgMC41NCk7IH1cblxuLm1hdC1zbGlkZS10b2dnbGUubWF0LXdhcm4ubWF0LWNoZWNrZWQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1zbGlkZS10b2dnbGU6bm90KC5tYXQtY2hlY2tlZCkgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyB9XG5cbi5tYXQtc2xpZGUtdG9nZ2xlLXRodW1iIHtcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksIDBweCAxcHggMXB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTsgfVxuXG4ubWF0LXNsaWRlLXRvZ2dsZS1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpOyB9XG5cbi5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpOyB9XG5cbi5tYXQtcHJpbWFyeSAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1wcmltYXJ5IC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNTsgfVxuXG4ubWF0LXByaW1hcnkgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10cmFjay1maWxsLFxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LWFjY2VudCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC1hY2NlbnQgLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtdGV4dCB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXdhcm4gLm1hdC1zbGlkZXItdHJhY2stZmlsbCxcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYixcbi5tYXQtd2FybiAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC13YXJuIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXRleHQge1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1zbGlkZXItZm9jdXMtcmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCA2NCwgMTI5LCAwLjIpOyB9XG5cbi5tYXQtc2xpZGVyOmhvdmVyIC5tYXQtc2xpZGVyLXRyYWNrLWJhY2tncm91bmQsXG4uY2RrLWZvY3VzZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCxcbi5tYXQtc2xpZGVyLWRpc2FibGVkIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwsXG4ubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cblxuLm1hdC1zbGlkZXItZGlzYWJsZWQ6aG92ZXIgLm1hdC1zbGlkZXItdHJhY2stYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlIC5tYXQtc2xpZGVyLWZvY3VzLXJpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtc2xpZGVyLW1pbi12YWx1ZS5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcgLm1hdC1zbGlkZXItdGh1bWIsXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nIC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWUubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nLmNkay1mb2N1c2VkIC5tYXQtc2xpZGVyLXRodW1iLFxuLm1hdC1zbGlkZXItbWluLXZhbHVlLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZy5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYi1sYWJlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNik7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKSAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cblxuLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKTpob3ZlciAubWF0LXNsaWRlci10aHVtYiwgLm1hdC1zbGlkZXItbWluLXZhbHVlOm5vdCgubWF0LXNsaWRlci10aHVtYi1sYWJlbC1zaG93aW5nKS5jZGstZm9jdXNlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXNsaWRlci1taW4tdmFsdWU6bm90KC5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmcpOmhvdmVyLm1hdC1zbGlkZXItZGlzYWJsZWQgLm1hdC1zbGlkZXItdGh1bWIsIC5tYXQtc2xpZGVyLW1pbi12YWx1ZTpub3QoLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZykuY2RrLWZvY3VzZWQubWF0LXNsaWRlci1kaXNhYmxlZCAubWF0LXNsaWRlci10aHVtYiB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTsgfVxuXG4ubWF0LXNsaWRlci1oYXMtdGlja3MgLm1hdC1zbGlkZXItd3JhcHBlcjo6YWZ0ZXIge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgfVxuXG4ubWF0LXNsaWRlci1ob3Jpem9udGFsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjcpLCByZ2JhKDAsIDAsIDAsIDAuNykgMnB4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IC1tb3otcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgwLjAwMDFkZWcsIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpOyB9XG5cbi5tYXQtc2xpZGVyLXZlcnRpY2FsIC5tYXQtc2xpZGVyLXRpY2tzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC43KSwgcmdiYSgwLCAwLCAwLCAwLjcpIDJweCwgdHJhbnNwYXJlbnQgMCwgdHJhbnNwYXJlbnQpOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIuY2RrLWtleWJvYXJkLWZvY3VzZWQsIC5tYXQtc3RlcC1oZWFkZXIuY2RrLXByb2dyYW0tZm9jdXNlZCwgLm1hdC1zdGVwLWhlYWRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNCk7IH1cblxuQG1lZGlhIChob3Zlcjogbm9uZSkge1xuICAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtbGFiZWwsXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBjb2xvcjogd2hpdGU7IH1cblxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZWRpdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXN0YXRlLWVycm9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWFjdGl2ZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWxhYmVsLm1hdC1zdGVwLWxhYmVsLWVycm9yIHtcbiAgY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC1zdGVwcGVyLWhvcml6b250YWwsIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtc3RlcHBlci12ZXJ0aWNhbC1saW5lOjpiZWZvcmUge1xuICBib3JkZXItbGVmdC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LWhvcml6b250YWwtc3RlcHBlci1oZWFkZXI6OmJlZm9yZSxcbi5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlcjo6YWZ0ZXIsXG4ubWF0LXN0ZXBwZXItaG9yaXpvbnRhbC1saW5lIHtcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG4ubWF0LXNvcnQtaGVhZGVyLWFycm93IHtcbiAgY29sb3I6ICM3NTc1NzU7IH1cblxuLm1hdC10YWItbmF2LWJhcixcbi5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLWludmVydGVkLWhlYWRlciAubWF0LXRhYi1uYXYtYmFyLFxuLm1hdC10YWItZ3JvdXAtaW52ZXJ0ZWQtaGVhZGVyIC5tYXQtdGFiLWhlYWRlciB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItYm90dG9tOiBub25lOyB9XG5cbi5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTsgfVxuXG4ubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG5cbi5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7IH1cblxuLm1hdC10YWItZ3JvdXBbY2xhc3MqPSdtYXQtYmFja2dyb3VuZC0nXSAubWF0LXRhYi1oZWFkZXIsXG4ubWF0LXRhYi1uYXYtYmFyW2NsYXNzKj0nbWF0LWJhY2tncm91bmQtJ10ge1xuICBib3JkZXItYm90dG9tOiBub25lO1xuICBib3JkZXItdG9wOiBub25lOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDIwMiwgMjMzLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciwgLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1OyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5Lm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudCAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyOCwgMTcxLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNDA4MTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYWNjZW50Lm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWFjY2VudC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4gLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMjIyLCAyNTEsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4gLm1hdC1pbmstYmFyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC13YXJuIC5tYXQtaW5rLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2ZjM7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LXdhcm4ubWF0LWJhY2tncm91bmQtd2FybiAubWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5NywgMjAyLCAyMzMsIDAuMyk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGlua3MsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rIHtcbiAgY29sb3I6IHdoaXRlOyB9XG4gIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbC5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHdoaXRlOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXByaW1hcnkgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tZGlzYWJsZWQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1wcmltYXJ5IC5tYXQtcmlwcGxlLWVsZW1lbnQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtcHJpbWFyeSAubWF0LXJpcHBsZS1lbGVtZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluay5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLWtleWJvYXJkLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDEyOCwgMTcxLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1oZWFkZXIsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjQwODE7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsge1xuICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLWFjY2VudCAubWF0LXRhYi1saW5rLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC10YWItaGVhZGVyLXBhZ2luYXRpb24tY2hldnJvbiB7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtYWNjZW50IC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24ge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC1hY2NlbnQgLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSxcbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1saW5rLmNkay1wcm9ncmFtLWZvY3VzZWQ6bm90KC5tYXQtdGFiLWRpc2FibGVkKSwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLmNkay1rZXlib2FyZC1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1sYWJlbC5jZGstcHJvZ3JhbS1mb2N1c2VkOm5vdCgubWF0LXRhYi1kaXNhYmxlZCksXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5jZGsta2V5Ym9hcmQtZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpLFxuLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsuY2RrLXByb2dyYW0tZm9jdXNlZDpub3QoLm1hdC10YWItZGlzYWJsZWQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDIyMiwgMjUxLCAwLjMpOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmtzLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItaGVhZGVyLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGlua3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NmYzOyB9XG5cbi5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluaywgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluayB7XG4gIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxhYmVsLm1hdC10YWItZGlzYWJsZWQsIC5tYXQtdGFiLWdyb3VwLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGluay5tYXQtdGFiLWRpc2FibGVkLCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC10YWItbGFiZWwubWF0LXRhYi1kaXNhYmxlZCwgLm1hdC10YWItbmF2LWJhci5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWxpbmsubWF0LXRhYi1kaXNhYmxlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTsgfVxuXG4ubWF0LXRhYi1ncm91cC5tYXQtYmFja2dyb3VuZC13YXJuIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWRpc2FibGVkIC5tYXQtdGFiLWhlYWRlci1wYWdpbmF0aW9uLWNoZXZyb24sIC5tYXQtdGFiLW5hdi1iYXIubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1kaXNhYmxlZCAubWF0LXRhYi1oZWFkZXItcGFnaW5hdGlvbi1jaGV2cm9uIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7IH1cblxuLm1hdC10YWItZ3JvdXAubWF0LWJhY2tncm91bmQtd2FybiAubWF0LXJpcHBsZS1lbGVtZW50LCAubWF0LXRhYi1uYXYtYmFyLm1hdC1iYWNrZ3JvdW5kLXdhcm4gLm1hdC1yaXBwbGUtZWxlbWVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7IH1cblxuLm1hdC10b29sYmFyIHtcbiAgYmFja2dyb3VuZDogd2hpdGVzbW9rZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7IH1cbiAgLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1O1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRvb2xiYXIubWF0LWFjY2VudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmNDA4MTtcbiAgICBjb2xvcjogd2hpdGU7IH1cbiAgLm1hdC10b29sYmFyLm1hdC13YXJuIHtcbiAgICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xuICAgIGNvbG9yOiB3aGl0ZTsgfVxuICAubWF0LXRvb2xiYXIgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSxcbiAgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUsXG4gIC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yOyB9XG4gIC5tYXQtdG9vbGJhciAubWF0LWZvcm0tZmllbGQtbGFiZWwsXG4gIC5tYXQtdG9vbGJhciAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLFxuICAubWF0LXRvb2xiYXIgLm1hdC1zZWxlY3QtdmFsdWUsXG4gIC5tYXQtdG9vbGJhciAubWF0LXNlbGVjdC1hcnJvdyxcbiAgLm1hdC10b29sYmFyIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LXNlbGVjdC1hcnJvdyB7XG4gICAgY29sb3I6IGluaGVyaXQ7IH1cbiAgLm1hdC10b29sYmFyIC5tYXQtaW5wdXQtZWxlbWVudCB7XG4gICAgY2FyZXQtY29sb3I6IGN1cnJlbnRDb2xvcjsgfVxuXG4ubWF0LXRvb2x0aXAge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDk3LCA5NywgOTcsIDAuOSk7IH1cblxuLm1hdC10cmVlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7IH1cblxuLm1hdC10cmVlLW5vZGUsXG4ubWF0LW5lc3RlZC10cmVlLW5vZGUge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuXG4ubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBiYWNrZ3JvdW5kOiAjMzIzMjMyO1xuICBib3gtc2hhZG93OiAwcHggM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwcHggMXB4IDE4cHggMHB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cblxuLm1hdC1zaW1wbGUtc25hY2tiYXItYWN0aW9uIHtcbiAgY29sb3I6ICNmZjQwODE7IH1cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmOyB9XG5cbi8qKlxuICogcHJpc20uanMgZGVmYXVsdCB0aGVtZSBmb3IgSmF2YVNjcmlwdCwgQ1NTIGFuZCBIVE1MXG4gKiBCYXNlZCBvbiBkYWJibGV0IChodHRwOi8vZGFiYmxldC5jb20pXG4gKiBAYXV0aG9yIExlYSBWZXJvdVxuICovXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICBjb2xvcjogYmxhY2s7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2hpdGUtc3BhY2U6IHByZTtcbiAgd29yZC1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtYnJlYWs6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIC1tb3otdGFiLXNpemU6IDQ7XG4gIC1vLXRhYi1zaXplOiA0O1xuICB0YWItc2l6ZTogNDtcbiAgLXdlYmtpdC1oeXBoZW5zOiBub25lO1xuICAtbW96LWh5cGhlbnM6IG5vbmU7XG4gIC1tcy1oeXBoZW5zOiBub25lO1xuICBoeXBoZW5zOiBub25lOyB9XG5cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl06Oi1tb3otc2VsZWN0aW9uLCBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIDo6LW1vei1zZWxlY3Rpb24ge1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogI2IzZDRmYzsgfVxuXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjpzZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6c2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbiB7XG4gIHRleHQtc2hhZG93OiBub25lO1xuICBiYWNrZ3JvdW5kOiAjYjNkNGZjOyB9XG5cbkBtZWRpYSBwcmludCB7XG4gIGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdLFxuICBwcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTsgfSB9XG5cbi8qIENvZGUgYmxvY2tzICovXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgcGFkZGluZzogMWVtO1xuICBtYXJnaW46IC41ZW0gMDtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjJmMDsgfVxuXG4vKiBJbmxpbmUgY29kZSAqL1xuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuICBwYWRkaW5nOiAuMWVtO1xuICBib3JkZXItcmFkaXVzOiAuM2VtO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XG5cbi50b2tlbi5jb21tZW50LFxuLnRva2VuLnByb2xvZyxcbi50b2tlbi5kb2N0eXBlLFxuLnRva2VuLmNkYXRhIHtcbiAgY29sb3I6IHNsYXRlZ3JheTsgfVxuXG4udG9rZW4ucHVuY3R1YXRpb24ge1xuICBjb2xvcjogIzk5OTsgfVxuXG4ubmFtZXNwYWNlIHtcbiAgb3BhY2l0eTogLjc7IH1cblxuLnRva2VuLnByb3BlcnR5LFxuLnRva2VuLnRhZyxcbi50b2tlbi5ib29sZWFuLFxuLnRva2VuLm51bWJlcixcbi50b2tlbi5jb25zdGFudCxcbi50b2tlbi5zeW1ib2wsXG4udG9rZW4uZGVsZXRlZCB7XG4gIGNvbG9yOiAjOTA1OyB9XG5cbi50b2tlbi5zZWxlY3Rvcixcbi50b2tlbi5hdHRyLW5hbWUsXG4udG9rZW4uc3RyaW5nLFxuLnRva2VuLmNoYXIsXG4udG9rZW4uYnVpbHRpbixcbi50b2tlbi5pbnNlcnRlZCB7XG4gIGNvbG9yOiAjNjkwOyB9XG5cbi50b2tlbi5vcGVyYXRvcixcbi50b2tlbi5lbnRpdHksXG4udG9rZW4udXJsLFxuLmxhbmd1YWdlLWNzcyAudG9rZW4uc3RyaW5nLFxuLnN0eWxlIC50b2tlbi5zdHJpbmcge1xuICBjb2xvcjogIzlhNmUzYTtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyB9XG5cbi50b2tlbi5hdHJ1bGUsXG4udG9rZW4uYXR0ci12YWx1ZSxcbi50b2tlbi5rZXl3b3JkIHtcbiAgY29sb3I6ICMwN2E7IH1cblxuLnRva2VuLmZ1bmN0aW9uLFxuLnRva2VuLmNsYXNzLW5hbWUge1xuICBjb2xvcjogI0RENEE2ODsgfVxuXG4udG9rZW4ucmVnZXgsXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLnZhcmlhYmxlIHtcbiAgY29sb3I6ICNlOTA7IH1cblxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRva2VuLml0YWxpYyB7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxuXG4udG9rZW4uZW50aXR5IHtcbiAgY3Vyc29yOiBoZWxwOyB9XG5cbi5tZW51LWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiMWZmOyB9XG5cbi5tYWluLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThlYWY2OyB9XG5cbi9kZWVwLyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODJiMWZmOyB9XG5cbi9kZWVwLyAubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDsgfVxuIiwiXG4vLyBDdXN0b20gVGhlbWluZyBmb3IgQW5ndWxhciBNYXRlcmlhbFxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb246IFxuLy8gLSBodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vZ3VpZGUvdGhlbWluZ1xuLy8gLSBodHRwczovL21lZGl1bS5jb20vQHRvbWFzdHJhamFuL3RoZS1jb21wbGV0ZS1ndWlkZS10by1hbmd1bGFyLW1hdGVyaWFsLXRoZW1lcy00ZDE2NWE5ZDI0ZDFcbi8vXG5AaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG4vLyBQbHVzIGltcG9ydHMgZm9yIG90aGVyIGNvbXBvbmVudHMgaW4geW91ciBhcHAuXG5cbi8vIEluY2x1ZGUgdGhlIGNvbW1vbiBzdHlsZXMgZm9yIEFuZ3VsYXIgTWF0ZXJpYWwuIFdlIGluY2x1ZGUgdGhpcyBoZXJlIHNvIHRoYXQgeW91IG9ubHlcbi8vIGhhdmUgdG8gbG9hZCBhIHNpbmdsZSBjc3MgZmlsZSBmb3IgQW5ndWxhciBNYXRlcmlhbCBpbiB5b3VyIGFwcC5cbi8vIEJlIHN1cmUgdGhhdCB5b3Ugb25seSBldmVyIGluY2x1ZGUgdGhpcyBtaXhpbiBvbmNlIVxuQGluY2x1ZGUgbWF0LWNvcmUoKTtcblxuLy8gaW1wb3J0IGFwcCB0aGVtZVxuQGltcG9ydCAndGhlbWUuc2Nzcyc7XG5cbi8vIEluY2x1ZGUgdGhlbWUgc3R5bGVzIGZvciBjb3JlIGFuZCBlYWNoIGNvbXBvbmVudCB1c2VkIGluIHlvdXIgYXBwLlxuLy8gQWx0ZXJuYXRpdmVseSwgeW91IGNhbiBpbXBvcnQgYW5kIEBpbmNsdWRlIHRoZSB0aGVtZSBtaXhpbnMgZm9yIGVhY2ggY29tcG9uZW50XG4vLyB0aGF0IHlvdSBhcmUgdXNpbmcuXG5AaW5jbHVkZSBhbmd1bGFyLW1hdGVyaWFsLXRoZW1lKCRuZy1qb2ludC1hcHAtdGhlbWUpO1xuXG4vKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5cbi8vIGh0bWwsIGJvZHkgeyBoZWlnaHQ6IDEwMCU7IH1cbmJvZHkgeyBtYXJnaW46IDA7IGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjsgfVxuXG4vLyBqb2ludGpzIGxpYnJhcnkgc3R5bGVzIGltcG9ydFxuQGltcG9ydCAnfmpvaW50anMvZGlzdC9qb2ludC5jc3MnO1xuXG4vLyBuZ3gtbWQgc3R5bGVzIGltcG9ydFxuQGltcG9ydCAnfnByaXNtanMvdGhlbWVzL3ByaXNtJzsiLCIvKipcbiAqIHByaXNtLmpzIGRlZmF1bHQgdGhlbWUgZm9yIEphdmFTY3JpcHQsIENTUyBhbmQgSFRNTFxuICogQmFzZWQgb24gZGFiYmxldCAoaHR0cDovL2RhYmJsZXQuY29tKVxuICogQGF1dGhvciBMZWEgVmVyb3VcbiAqL1xuXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRjb2xvcjogYmxhY2s7XG5cdGJhY2tncm91bmQ6IG5vbmU7XG5cdHRleHQtc2hhZG93OiAwIDFweCB3aGl0ZTtcblx0Zm9udC1mYW1pbHk6IENvbnNvbGFzLCBNb25hY28sICdBbmRhbGUgTW9ubycsICdVYnVudHUgTW9ubycsIG1vbm9zcGFjZTtcblx0dGV4dC1hbGlnbjogbGVmdDtcblx0d2hpdGUtc3BhY2U6IHByZTtcblx0d29yZC1zcGFjaW5nOiBub3JtYWw7XG5cdHdvcmQtYnJlYWs6IG5vcm1hbDtcblx0d29yZC13cmFwOiBub3JtYWw7XG5cdGxpbmUtaGVpZ2h0OiAxLjU7XG5cblx0LW1vei10YWItc2l6ZTogNDtcblx0LW8tdGFiLXNpemU6IDQ7XG5cdHRhYi1zaXplOiA0O1xuXG5cdC13ZWJraXQtaHlwaGVuczogbm9uZTtcblx0LW1vei1oeXBoZW5zOiBub25lO1xuXHQtbXMtaHlwaGVuczogbm9uZTtcblx0aHlwaGVuczogbm9uZTtcbn1cblxucHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6LW1vei1zZWxlY3Rpb24sIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjotbW96LXNlbGVjdGlvbixcbmNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjotbW96LXNlbGVjdGlvbiwgY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjotbW96LXNlbGVjdGlvbiB7XG5cdHRleHQtc2hhZG93OiBub25lO1xuXHRiYWNrZ3JvdW5kOiAjYjNkNGZjO1xufVxuXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdOjpzZWxlY3Rpb24sIHByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0gOjpzZWxlY3Rpb24sXG5jb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXTo6c2VsZWN0aW9uLCBjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSA6OnNlbGVjdGlvbiB7XG5cdHRleHQtc2hhZG93OiBub25lO1xuXHRiYWNrZ3JvdW5kOiAjYjNkNGZjO1xufVxuXG5AbWVkaWEgcHJpbnQge1xuXHRjb2RlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSxcblx0cHJlW2NsYXNzKj1cImxhbmd1YWdlLVwiXSB7XG5cdFx0dGV4dC1zaGFkb3c6IG5vbmU7XG5cdH1cbn1cblxuLyogQ29kZSBibG9ja3MgKi9cbnByZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0ge1xuXHRwYWRkaW5nOiAxZW07XG5cdG1hcmdpbjogLjVlbSAwO1xuXHRvdmVyZmxvdzogYXV0bztcbn1cblxuOm5vdChwcmUpID4gY29kZVtjbGFzcyo9XCJsYW5ndWFnZS1cIl0sXG5wcmVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0YmFja2dyb3VuZDogI2Y1ZjJmMDtcbn1cblxuLyogSW5saW5lIGNvZGUgKi9cbjpub3QocHJlKSA+IGNvZGVbY2xhc3MqPVwibGFuZ3VhZ2UtXCJdIHtcblx0cGFkZGluZzogLjFlbTtcblx0Ym9yZGVyLXJhZGl1czogLjNlbTtcblx0d2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnRva2VuLmNvbW1lbnQsXG4udG9rZW4ucHJvbG9nLFxuLnRva2VuLmRvY3R5cGUsXG4udG9rZW4uY2RhdGEge1xuXHRjb2xvcjogc2xhdGVncmF5O1xufVxuXG4udG9rZW4ucHVuY3R1YXRpb24ge1xuXHRjb2xvcjogIzk5OTtcbn1cblxuLm5hbWVzcGFjZSB7XG5cdG9wYWNpdHk6IC43O1xufVxuXG4udG9rZW4ucHJvcGVydHksXG4udG9rZW4udGFnLFxuLnRva2VuLmJvb2xlYW4sXG4udG9rZW4ubnVtYmVyLFxuLnRva2VuLmNvbnN0YW50LFxuLnRva2VuLnN5bWJvbCxcbi50b2tlbi5kZWxldGVkIHtcblx0Y29sb3I6ICM5MDU7XG59XG5cbi50b2tlbi5zZWxlY3Rvcixcbi50b2tlbi5hdHRyLW5hbWUsXG4udG9rZW4uc3RyaW5nLFxuLnRva2VuLmNoYXIsXG4udG9rZW4uYnVpbHRpbixcbi50b2tlbi5pbnNlcnRlZCB7XG5cdGNvbG9yOiAjNjkwO1xufVxuXG4udG9rZW4ub3BlcmF0b3IsXG4udG9rZW4uZW50aXR5LFxuLnRva2VuLnVybCxcbi5sYW5ndWFnZS1jc3MgLnRva2VuLnN0cmluZyxcbi5zdHlsZSAudG9rZW4uc3RyaW5nIHtcblx0Y29sb3I6ICM5YTZlM2E7XG5cdGJhY2tncm91bmQ6IGhzbGEoMCwgMCUsIDEwMCUsIC41KTtcbn1cblxuLnRva2VuLmF0cnVsZSxcbi50b2tlbi5hdHRyLXZhbHVlLFxuLnRva2VuLmtleXdvcmQge1xuXHRjb2xvcjogIzA3YTtcbn1cblxuLnRva2VuLmZ1bmN0aW9uLFxuLnRva2VuLmNsYXNzLW5hbWUge1xuXHRjb2xvcjogI0RENEE2ODtcbn1cblxuLnRva2VuLnJlZ2V4LFxuLnRva2VuLmltcG9ydGFudCxcbi50b2tlbi52YXJpYWJsZSB7XG5cdGNvbG9yOiAjZTkwO1xufVxuXG4udG9rZW4uaW1wb3J0YW50LFxuLnRva2VuLmJvbGQge1xuXHRmb250LXdlaWdodDogYm9sZDtcbn1cbi50b2tlbi5pdGFsaWMge1xuXHRmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi50b2tlbi5lbnRpdHkge1xuXHRjdXJzb3I6IGhlbHA7XG59XG4iLCIvLyBJbXBvcnQgYW5ndWxhciBtYXRyaWFsIHRoZW1pbmcgZnVuY3Rpb25zXG5AaW1wb3J0ICd+QGFuZ3VsYXIvbWF0ZXJpYWwvdGhlbWluZyc7XG4vLyBJbXBvcnQgYXBwIGN1c3RvbSB0aGVtZVxuQGltcG9ydCAnLi4vc3R5bGVzLnNjc3MnO1xuXG4ubWVudS1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXQtY29sb3IoJG5nLWpvaW50LWFwcC13YXJuLCBBMTAwKTtcbn1cblxuLm1haW4tY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbmctam9pbnQtYXBwLXByaW1hcnksIDUwKTtcbn1cblxuL2RlZXAvIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbmctam9pbnQtYXBwLXdhcm4sIEExMDApO1xufVxuXG4vZGVlcC8gLm1hdC1leHBhbnNpb24tcGFuZWwtY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG1hdC1jb2xvcigkbmctam9pbnQtYXBwLXdhcm4sIDUwKTtcbn1cbiJdfQ== */"

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
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-generic.service */ "./src/app/app-generic.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(service, router) {
        this.service = service;
        this.router = router;
        this.accordionMulti = true;
        this.accordionDisplayMode = 'flat';
        this.accordionHideToggle = false;
        this.expansionPanelExpanded = true;
        this.expensionPanelHeaderCollapsedHeight = '40px';
        this.expensionPanelHeaderExpandedHeight = '40px';
        this.menuOptions = [
            {
                title: 'Overview Library',
                description: 'ng-joint',
                path: '',
            },
            {
                title: 'shapes.Standard',
                description: 'jointjs',
                path: 'shapes-standard-examples',
                childs: [
                    {
                        title: 'Elements',
                        path: 'standard-elements'
                    },
                    {
                        title: 'Links',
                        path: 'standard-links'
                    }
                ]
            },
            {
                title: 'shapes.uml',
                description: 'jointjs',
                path: 'shapes-uml-examples',
                childs: [
                    {
                        title: 'UML Class Diagram',
                        path: 'uml-class-diagram'
                    }
                ]
            },
            {
                title: 'shapes.Angular',
                description: 'ng-joint',
                path: 'shapes-angular-examples',
                childs: [
                    {
                        title: 'Template Only',
                        path: 'angular-template-only'
                    },
                    {
                        title: 'Bi-Directional Bind',
                        path: 'angular-bi-dir-bind'
                    }
                ]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('AppComponent.ngOnInit');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log('AppComponent.ngAfterViewInit');
        // this.accordion.openAll();
    };
    AppComponent.prototype.afterCollapse = function (menuOption) {
        // PM
    };
    AppComponent.prototype.afterExpand = function (menuOption) {
        // PM
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('accordion'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAccordion"])
    ], AppComponent.prototype, "accordion", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_4__["AppGenericService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-generic.service */ "./src/app/app-generic.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material.module */ "./src/app/app-material.module.ts");
/* harmony import */ var _overview__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overview */ "./src/app/overview/index.ts");
/* harmony import */ var _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shapes-standard-examples */ "./src/app/shapes-standard-examples/index.ts");
/* harmony import */ var _shapes_uml_examples__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shapes-uml-examples */ "./src/app/shapes-uml-examples/index.ts");
/* harmony import */ var _shapes_angular_examples__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shapes-angular-examples */ "./src/app/shapes-angular-examples/index.ts");
/* harmony import */ var _page_not_found__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-not-found */ "./src/app/page-not-found/index.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            providers: [_app_generic_service__WEBPACK_IMPORTED_MODULE_6__["AppGenericService"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModule"],
                _overview__WEBPACK_IMPORTED_MODULE_9__["OverviewModule"],
                _shapes_standard_examples__WEBPACK_IMPORTED_MODULE_10__["ShapesStandardExamplesModule"],
                _shapes_uml_examples__WEBPACK_IMPORTED_MODULE_11__["ShapesUmlExamplesModule"],
                _shapes_angular_examples__WEBPACK_IMPORTED_MODULE_12__["ShapesAngularExamplesModule"],
                _page_not_found__WEBPACK_IMPORTED_MODULE_13__["PageNotFoundModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/code-example-viewer/code-example-viewer.component.html":
/*!************************************************************************!*\
  !*** ./src/app/code-example-viewer/code-example-viewer.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\n\n  <mat-toolbar fxLayout=\"row\">\n    <span fxFlex>CODE EXAMPLE</span>\n    <span fxFlex></span>\n    <span fxFlex>\n      <button mat-stroked-button \n        *ngIf=\"codeSourceUrl\"\n        (click)=\"toggleViewCodeEnabled()\">\n        View Code\n      </button>\n    </span>\n  </mat-toolbar>\n\n  <mat-tab-group *ngIf=\"viewCodeEnabled\">\n    <mat-tab label=\"HTML\">\n        <ngx-md [path]=\"codeSourceUrl + '.html'\"></ngx-md>\n    </mat-tab>\n    <mat-tab label=\"TS\">\n      <ngx-md [path]=\"codeSourceUrl + '.ts'\"></ngx-md>\n    </mat-tab>\n    <mat-tab label=\"STYLES\">\n      (PM STYLES)\n    </mat-tab>\n  </mat-tab-group>\n\n  <ng-container *ngTemplateOutlet=\"codeExample\"></ng-container>\n\n</mat-card>\n\n<ngx-md>\n    # Markdown h1 content  \n    Testing\n</ngx-md>\n\n<ngx-md>\n    ## Markdown h2 content\n</ngx-md>\n"

/***/ }),

/***/ "./src/app/code-example-viewer/code-example-viewer.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/code-example-viewer/code-example-viewer.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvZGUtZXhhbXBsZS12aWV3ZXIvY29kZS1leGFtcGxlLXZpZXdlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/code-example-viewer/code-example-viewer.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/code-example-viewer/code-example-viewer.component.ts ***!
  \**********************************************************************/
/*! exports provided: CodeExampleViewerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleViewerComponent", function() { return CodeExampleViewerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CodeExampleViewerComponent = /** @class */ (function () {
    function CodeExampleViewerComponent(http) {
        this.http = http;
        this.viewCodeEnabled = false;
    }
    CodeExampleViewerComponent.prototype.ngOnInit = function () {
    };
    CodeExampleViewerComponent.prototype.toggleViewCodeEnabled = function () {
        this.viewCodeEnabled = !this.viewCodeEnabled;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], CodeExampleViewerComponent.prototype, "codeExample", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CodeExampleViewerComponent.prototype, "codeSourceUrl", void 0);
    CodeExampleViewerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code-example-viewer',
            template: __webpack_require__(/*! ./code-example-viewer.component.html */ "./src/app/code-example-viewer/code-example-viewer.component.html"),
            styles: [__webpack_require__(/*! ./code-example-viewer.component.scss */ "./src/app/code-example-viewer/code-example-viewer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CodeExampleViewerComponent);
    return CodeExampleViewerComponent;
}());



/***/ }),

/***/ "./src/app/code-example-viewer/code-example-viewer.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/code-example-viewer/code-example-viewer.module.ts ***!
  \*******************************************************************/
/*! exports provided: CodeExampleViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeExampleViewerModule", function() { return CodeExampleViewerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var ngx_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-md */ "./node_modules/ngx-md/fesm5/ngx-md.js");
/* harmony import */ var _code_example_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./code-example-viewer.component */ "./src/app/code-example-viewer/code-example-viewer.component.ts");

// https://www.npmjs.com/package/ngx-md







var CodeExampleViewerModule = /** @class */ (function () {
    function CodeExampleViewerModule() {
    }
    CodeExampleViewerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _code_example_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CodeExampleViewerComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ngx_md__WEBPACK_IMPORTED_MODULE_6__["NgxMdModule"]
            ],
            exports: [
                _code_example_viewer_component__WEBPACK_IMPORTED_MODULE_7__["CodeExampleViewerComponent"]
            ]
        })
    ], CodeExampleViewerModule);
    return CodeExampleViewerModule;
}());



/***/ }),

/***/ "./src/app/code-example-viewer/index.ts":
/*!**********************************************!*\
  !*** ./src/app/code-example-viewer/index.ts ***!
  \**********************************************/
/*! exports provided: CodeExampleViewerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _code_example_viewer_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./code-example-viewer.module */ "./src/app/code-example-viewer/code-example-viewer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CodeExampleViewerModule", function() { return _code_example_viewer_module__WEBPACK_IMPORTED_MODULE_0__["CodeExampleViewerModule"]; });




/***/ }),

/***/ "./src/app/how-to-use-doc/how-to-use-doc.component.html":
/*!**************************************************************!*\
  !*** ./src/app/how-to-use-doc/how-to-use-doc.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>HOW TO USE?</h1>\n<mat-tab-group>\n  <mat-tab label=\"OVERVIEW\">\n    <ng-container *ngTemplateOutlet=\"overview\"></ng-container>\n  </mat-tab>\n  <mat-tab label=\"API\">\n    <ng-container *ngTemplateOutlet=\"api\"></ng-container>\n  </mat-tab>\n  <mat-tab label=\"EXAMPLES\">\n    <ng-container *ngTemplateOutlet=\"examples\"></ng-container>\n  </mat-tab>\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/how-to-use-doc/how-to-use-doc.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/how-to-use-doc/how-to-use-doc.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdy10by11c2UtZG9jL2hvdy10by11c2UtZG9jLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/how-to-use-doc/how-to-use-doc.component.ts":
/*!************************************************************!*\
  !*** ./src/app/how-to-use-doc/how-to-use-doc.component.ts ***!
  \************************************************************/
/*! exports provided: HowToUseDocComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToUseDocComponent", function() { return HowToUseDocComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowToUseDocComponent = /** @class */ (function () {
    function HowToUseDocComponent() {
    }
    HowToUseDocComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HowToUseDocComponent.prototype, "overview", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HowToUseDocComponent.prototype, "api", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], HowToUseDocComponent.prototype, "examples", void 0);
    HowToUseDocComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-to-use-doc',
            template: __webpack_require__(/*! ./how-to-use-doc.component.html */ "./src/app/how-to-use-doc/how-to-use-doc.component.html"),
            styles: [__webpack_require__(/*! ./how-to-use-doc.component.scss */ "./src/app/how-to-use-doc/how-to-use-doc.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowToUseDocComponent);
    return HowToUseDocComponent;
}());



/***/ }),

/***/ "./src/app/how-to-use-doc/how-to-use-doc.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/how-to-use-doc/how-to-use-doc.module.ts ***!
  \*********************************************************/
/*! exports provided: HowToUseDocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowToUseDocModule", function() { return HowToUseDocModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _how_to_use_doc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./how-to-use-doc.component */ "./src/app/how-to-use-doc/how-to-use-doc.component.ts");





var HowToUseDocModule = /** @class */ (function () {
    function HowToUseDocModule() {
    }
    HowToUseDocModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _how_to_use_doc_component__WEBPACK_IMPORTED_MODULE_4__["HowToUseDocComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]
            ],
            exports: [
                _how_to_use_doc_component__WEBPACK_IMPORTED_MODULE_4__["HowToUseDocComponent"]
            ]
        })
    ], HowToUseDocModule);
    return HowToUseDocModule;
}());



/***/ }),

/***/ "./src/app/how-to-use-doc/index.ts":
/*!*****************************************!*\
  !*** ./src/app/how-to-use-doc/index.ts ***!
  \*****************************************/
/*! exports provided: HowToUseDocModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _how_to_use_doc_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./how-to-use-doc.module */ "./src/app/how-to-use-doc/how-to-use-doc.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HowToUseDocModule", function() { return _how_to_use_doc_module__WEBPACK_IMPORTED_MODULE_0__["HowToUseDocModule"]; });




/***/ }),

/***/ "./src/app/overview/index.ts":
/*!***********************************!*\
  !*** ./src/app/overview/index.ts ***!
  \***********************************/
/*! exports provided: OverviewModule, OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _overview_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./overview.module */ "./src/app/overview/overview.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewModule", function() { return _overview_module__WEBPACK_IMPORTED_MODULE_0__["OverviewModule"]; });

/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overview.component */ "./src/app/overview/overview.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return _overview_component__WEBPACK_IMPORTED_MODULE_1__["OverviewComponent"]; });





/***/ }),

/***/ "./src/app/overview/overview-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/overview/overview-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: OverviewRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewRoutingModule", function() { return OverviewRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overview.component */ "./src/app/overview/overview.component.ts");




var overviewModuleRoutes = [
    { path: 'overview', component: _overview_component__WEBPACK_IMPORTED_MODULE_3__["OverviewComponent"] }
];
var OverviewRoutingModule = /** @class */ (function () {
    function OverviewRoutingModule() {
    }
    OverviewRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(overviewModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], OverviewRoutingModule);
    return OverviewRoutingModule;
}());



/***/ }),

/***/ "./src/app/overview/overview.component.html":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "The NgJoint (@dgwnu/ng-joint) Library is a research project of the dutch based Plan-K Consultancy firm. Our aim is to combine the best of both worlds. \n<mat-list>\n    <mat-list-item><mat-icon mat-list-icon>star</mat-icon> the angular HTML-template and structural directives that makes it easy to create single page webapplications that can support almost every webbrowser; </mat-list-item>\n    <mat-list-item><mat-icon mat-list-icon>star</mat-icon> The fabulous diagram programming building blocks of jointjs. </mat-list-item>\n</mat-list>\n\n<app-how-to-use-doc [overview]=\"overview\" [api]=\"api\" [examples]=\"examples\">\n</app-how-to-use-doc>\n\n<ng-template #overview>\n  Test overview template\n</ng-template>\n\n<ng-template #api>\n    Test api template\n</ng-template>\n\n<ng-template #examples>\n    Test examples template\n</ng-template>"

/***/ }),

/***/ "./src/app/overview/overview.component.scss":
/*!**************************************************!*\
  !*** ./src/app/overview/overview.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/overview/overview.component.ts":
/*!************************************************!*\
  !*** ./src/app/overview/overview.component.ts ***!
  \************************************************/
/*! exports provided: OverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewComponent", function() { return OverviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-generic.service */ "./src/app/app-generic.service.ts");



var OverviewComponent = /** @class */ (function () {
    function OverviewComponent(appService) {
        this.appService = appService;
    }
    OverviewComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Overview';
    };
    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overview',
            template: __webpack_require__(/*! ./overview.component.html */ "./src/app/overview/overview.component.html"),
            styles: [__webpack_require__(/*! ./overview.component.scss */ "./src/app/overview/overview.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], OverviewComponent);
    return OverviewComponent;
}());



/***/ }),

/***/ "./src/app/overview/overview.module.ts":
/*!*********************************************!*\
  !*** ./src/app/overview/overview.module.ts ***!
  \*********************************************/
/*! exports provided: OverviewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverviewModule", function() { return OverviewModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _how_to_use_doc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../how-to-use-doc */ "./src/app/how-to-use-doc/index.ts");
/* harmony import */ var _overview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./overview.component */ "./src/app/overview/overview.component.ts");
/* harmony import */ var _overview_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./overview-routing.module */ "./src/app/overview/overview-routing.module.ts");







var OverviewModule = /** @class */ (function () {
    function OverviewModule() {
    }
    OverviewModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_overview_component__WEBPACK_IMPORTED_MODULE_5__["OverviewComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _how_to_use_doc__WEBPACK_IMPORTED_MODULE_4__["HowToUseDocModule"],
                _overview_routing_module__WEBPACK_IMPORTED_MODULE_6__["OverviewRoutingModule"]
            ],
            exports: [_overview_routing_module__WEBPACK_IMPORTED_MODULE_6__["OverviewRoutingModule"]]
        })
    ], OverviewModule);
    return OverviewModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/index.ts":
/*!*****************************************!*\
  !*** ./src/app/page-not-found/index.ts ***!
  \*****************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_not_found_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-not-found.module */ "./src/app/page-not-found/page-not-found.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return _page_not_found_module__WEBPACK_IMPORTED_MODULE_0__["PageNotFoundModule"]; });




/***/ }),

/***/ "./src/app/page-not-found/page-not-found-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: PageNotFoundRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundRoutingModule", function() { return PageNotFoundRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");




var demoModuleRoutes = [
    { path: 'page-not-found', component: _page_not_found_component__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundComponent"] }
];
var PageNotFoundRoutingModule = /** @class */ (function () {
    function PageNotFoundRoutingModule() {
    }
    PageNotFoundRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], PageNotFoundRoutingModule);
    return PageNotFoundRoutingModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
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
            template: "\n      <h1>PAGE NOT FOUNT</h1>\n      <div>\n        This Path is Not Available OR Authorized!\n      </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.module.ts ***!
  \*********************************************************/
/*! exports provided: PageNotFoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundModule", function() { return PageNotFoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _page_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-not-found-routing.module */ "./src/app/page-not-found/page-not-found-routing.module.ts");




var PageNotFoundModule = /** @class */ (function () {
    function PageNotFoundModule() {
    }
    PageNotFoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_page_not_found_component__WEBPACK_IMPORTED_MODULE_2__["PageNotFoundComponent"]],
            imports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundRoutingModule"]],
            exports: [_page_not_found_routing_module__WEBPACK_IMPORTED_MODULE_3__["PageNotFoundRoutingModule"]]
        })
    ], PageNotFoundModule);
    return PageNotFoundModule;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n\n    <ng-joint-dia-graph>\n\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n\n                <ng-joint-angular-element *ngFor=\"let customNgEl of customNgEls\"\n                    [id]=\"customNgEl.id\"\n                    [(x)]=\"customNgEl.x\"\n                    [(y)]=\"customNgEl.y\"\n                    [(width)]=\"customNgEl.width\"\n                    [(height)]=\"customNgEl.height\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                ({{ customNgEl.id }}): {{ customNgEl.testFieldA }} \n                            </mat-card-title>\n                            <mat-card-subtitle>\n                                ({{ customNgEl.x }}, {{ customNgEl.y }})\n                            </mat-card-subtitle>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonXPlus10(customNgEl)\">\n                                x + 10\n                            </button>\n                            <button mat-mini-fab color=\"accent\" (click)=\"onClickMatButtonYPlus10(customNgEl)\">\n                                y + 10\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n\n            </ng-joint-shapes-angular>\n\n        </ng-joint-shapes>\n\n    </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL2FuZ3VsYXItYmktZGlyLWJpbmQvYW5ndWxhci1iaS1kaXItYmluZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AngularBiDirBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return AngularBiDirBindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var AngularBiDirBindComponent = /** @class */ (function () {
    function AngularBiDirBindComponent(appService) {
        this.appService = appService;
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
    AngularBiDirBindComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Bi-Directional Bind Example';
    };
    // example how to use events inside Angular Elements
    AngularBiDirBindComponent.prototype.onClickMatButtonXPlus10 = function (customNgEl) {
        customNgEl.x = customNgEl.x + 10;
    };
    // example how to use events inside Angular Elements
    AngularBiDirBindComponent.prototype.onClickMatButtonYPlus10 = function (customNgEl) {
        customNgEl.y = customNgEl.y + 10;
    };
    // you can handle paper:elementpointerclick events
    // (other events will be added in later versions of this Library)
    AngularBiDirBindComponent.prototype.onElementPointerClick = function (id) {
        console.log('onElementPointerClick(id: ' + id + ')');
    };
    AngularBiDirBindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-bi-dir-bind',
            template: __webpack_require__(/*! ./angular-bi-dir-bind.component.html */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.html"),
            styles: [__webpack_require__(/*! ./angular-bi-dir-bind.component.scss */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], AngularBiDirBindComponent);
    return AngularBiDirBindComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts ***!
  \**********************************************************************/
/*! exports provided: AngularBiDirBindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return _angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__["AngularBiDirBindComponent"]; });




/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html":
/*!****************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [height]=\"600\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-angular>\n                <ng-joint-angular-element\n                    [id]=\"'ng1'\"\n                    [x]=\"400\"\n                    [y]=\"100\"\n                    [width]=\"250\"\n                    [height]=\"200\">\n                    <h1>Standard Angular HTML</h1>\n                    <button>Standard Button</button>\n                    <input type=\"text\" name=\"fname\">\n                </ng-joint-angular-element>\n                <ng-joint-angular-element\n                    [id]=\"'mat1'\"\n                    [x]=\"700\"\n                    [y]=\"50\"\n                    [width]=\"200\"\n                    [height]=\"150\">\n                    <mat-card>\n                        <mat-card-header>\n                            <mat-card-title>\n                                Angular Material \n                            </mat-card-title>\n                        </mat-card-header>\n                        <mat-card-content>\n                            <mat-form-field>\n                                <input matInput placeholder=\"Input\">\n                            </mat-form-field>\n                        </mat-card-content>\n                        <mat-card-footer>\n                            <button mat-mini-fab color=\"accent\">\n                                FAB\n                            </button>\n                        </mat-card-footer>\n                    </mat-card>\n                </ng-joint-angular-element>\n            </ng-joint-shapes-angular>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL2FuZ3VsYXItdGVtcGxhdGUtb25seS9hbmd1bGFyLXRlbXBsYXRlLW9ubHkuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: AngularTemplateOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return AngularTemplateOnlyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var AngularTemplateOnlyComponent = /** @class */ (function () {
    function AngularTemplateOnlyComponent(appService, el) {
        this.appService = appService;
        this.el = el;
        console.log('AngularTemplateOnlyComponent.el', this.el);
    }
    AngularTemplateOnlyComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Template Only Example';
    };
    AngularTemplateOnlyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-template-only',
            template: __webpack_require__(/*! ./angular-template-only.component.html */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.html"),
            styles: [__webpack_require__(/*! ./angular-template-only.component.scss */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], AngularTemplateOnlyComponent);
    return AngularTemplateOnlyComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/angular-template-only/index.ts":
/*!************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/angular-template-only/index.ts ***!
  \************************************************************************/
/*! exports provided: AngularTemplateOnlyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_template_only_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return _angular_template_only_component__WEBPACK_IMPORTED_MODULE_0__["AngularTemplateOnlyComponent"]; });




/***/ }),

/***/ "./src/app/shapes-angular-examples/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shapes-angular-examples/index.ts ***!
  \**************************************************/
/*! exports provided: AngularBiDirBindComponent, AngularTemplateOnlyComponent, ShapesAngularExamplesComponent, ShapesAngularExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-bi-dir-bind/angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularBiDirBindComponent", function() { return _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_0__["AngularBiDirBindComponent"]; });

/* harmony import */ var _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./angular-template-only/angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AngularTemplateOnlyComponent", function() { return _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_1__["AngularTemplateOnlyComponent"]; });

/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesComponent", function() { return _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_2__["ShapesAngularExamplesComponent"]; });

/* harmony import */ var _shapes_angular_examples_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-angular-examples.module */ "./src/app/shapes-angular-examples/shapes-angular-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesModule", function() { return _shapes_angular_examples_module__WEBPACK_IMPORTED_MODULE_3__["ShapesAngularExamplesModule"]; });







/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: ShapesAngularExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesRoutingModule", function() { return ShapesAngularExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony import */ var _angular_template_only__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-template-only */ "./src/app/shapes-angular-examples/angular-template-only/index.ts");
/* harmony import */ var _angular_bi_dir_bind__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-bi-dir-bind */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/index.ts");






var demoModuleRoutes = [
    { path: 'shapes-angular-examples', component: _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesAngularExamplesComponent"],
        children: [
            { path: 'angular-template-only', component: _angular_template_only__WEBPACK_IMPORTED_MODULE_4__["AngularTemplateOnlyComponent"] },
            { path: 'angular-bi-dir-bind', component: _angular_bi_dir_bind__WEBPACK_IMPORTED_MODULE_5__["AngularBiDirBindComponent"] }
        ]
    }
];
var ShapesAngularExamplesRoutingModule = /** @class */ (function () {
    function ShapesAngularExamplesRoutingModule() {
    }
    ShapesAngularExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesAngularExamplesRoutingModule);
    return ShapesAngularExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  Shapes Angular Examples\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzL3NoYXBlcy1hbmd1bGFyLWV4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.component.ts ***!
  \******************************************************************************/
/*! exports provided: ShapesAngularExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesComponent", function() { return ShapesAngularExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-generic.service */ "./src/app/app-generic.service.ts");



var ShapesAngularExamplesComponent = /** @class */ (function () {
    function ShapesAngularExamplesComponent(appService) {
        this.appService = appService;
    }
    ShapesAngularExamplesComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Angular Examples';
    };
    ShapesAngularExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-angular-examples',
            template: __webpack_require__(/*! ./shapes-angular-examples.component.html */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-angular-examples.component.scss */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], ShapesAngularExamplesComponent);
    return ShapesAngularExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-angular-examples/shapes-angular-examples.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shapes-angular-examples/shapes-angular-examples.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShapesAngularExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesAngularExamplesModule", function() { return ShapesAngularExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shapes-angular-examples.component */ "./src/app/shapes-angular-examples/shapes-angular-examples.component.ts");
/* harmony import */ var _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-template-only/angular-template-only.component */ "./src/app/shapes-angular-examples/angular-template-only/angular-template-only.component.ts");
/* harmony import */ var _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./angular-bi-dir-bind/angular-bi-dir-bind.component */ "./src/app/shapes-angular-examples/angular-bi-dir-bind/angular-bi-dir-bind.component.ts");
/* harmony import */ var _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes-angular-examples-routing.module */ "./src/app/shapes-angular-examples/shapes-angular-examples-routing.module.ts");









var ShapesAngularExamplesModule = /** @class */ (function () {
    function ShapesAngularExamplesModule() {
    }
    ShapesAngularExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_angular_examples_component__WEBPACK_IMPORTED_MODULE_5__["ShapesAngularExamplesComponent"],
                _angular_template_only_angular_template_only_component__WEBPACK_IMPORTED_MODULE_6__["AngularTemplateOnlyComponent"],
                _angular_bi_dir_bind_angular_bi_dir_bind_component__WEBPACK_IMPORTED_MODULE_7__["AngularBiDirBindComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_4__["ShapesAngularModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShapesAngularExamplesRoutingModule"]
            ],
            exports: [
                _shapes_angular_examples_routing_module__WEBPACK_IMPORTED_MODULE_8__["ShapesAngularExamplesRoutingModule"]
            ]
        })
    ], ShapesAngularExamplesModule);
    return ShapesAngularExamplesModule;
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
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-generic.service */ "./src/app/app-generic.service.ts");



var ShapesStandardExamplesComponent = /** @class */ (function () {
    function ShapesStandardExamplesComponent(appService) {
        this.appService = appService;
    }
    ShapesStandardExamplesComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Standard Examples';
    };
    ShapesStandardExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-standard-examples',
            template: __webpack_require__(/*! ./shapes-standard-examples.component.html */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-standard-examples.component.scss */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
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
/* harmony import */ var _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../code-example-viewer */ "./src/app/code-example-viewer/index.ts");
/* harmony import */ var _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../how-to-use-doc */ "./src/app/how-to-use-doc/index.ts");
/* harmony import */ var _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shapes-standard-examples.component */ "./src/app/shapes-standard-examples/shapes-standard-examples.component.ts");
/* harmony import */ var _standard_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standard-elements */ "./src/app/shapes-standard-examples/standard-elements/index.ts");
/* harmony import */ var _standard_links__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./standard-links */ "./src/app/shapes-standard-examples/standard-links/index.ts");
/* harmony import */ var _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shapes-standard-examples-routing.module */ "./src/app/shapes-standard-examples/shapes-standard-examples-routing.module.ts");










var ShapesStandardExamplesModule = /** @class */ (function () {
    function ShapesStandardExamplesModule() {
    }
    ShapesStandardExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_standard_examples_component__WEBPACK_IMPORTED_MODULE_6__["ShapesStandardExamplesComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardModule"],
                _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__["CodeExampleViewerModule"], _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__["HowToUseDocModule"],
                _standard_elements__WEBPACK_IMPORTED_MODULE_7__["StandardElementsModule"], _standard_links__WEBPACK_IMPORTED_MODULE_8__["StandardLinksModule"],
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShapesStandardExamplesRoutingModule"]
            ],
            exports: [
                _shapes_standard_examples_routing_module__WEBPACK_IMPORTED_MODULE_9__["ShapesStandardExamplesRoutingModule"]
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
/*! exports provided: StandardElementsComponent, StandardElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-elements.component */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardElementsComponent", function() { return _standard_elements_component__WEBPACK_IMPORTED_MODULE_0__["StandardElementsComponent"]; });

/* harmony import */ var _standard_elements_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard-elements.module */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardElementsModule", function() { return _standard_elements_module__WEBPACK_IMPORTED_MODULE_1__["StandardElementsModule"]; });





/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/index.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/index.ts ***!
  \******************************************************************************************************/
/*! exports provided: StandardElementsCodeExample01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_elements_code_example01_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-elements-code-example01.component */ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardElementsCodeExample01Component", function() { return _standard_elements_code_example01_component__WEBPACK_IMPORTED_MODULE_0__["StandardElementsCodeExample01Component"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Based on https://resources.jointjs.com/docs/jointjs/v2.2/demo/shapes/shapes.standard.js -->\n<ng-joint-dia-paper\n[width]=\"650\"\n[height]=\"800\"\n[gridSize]=\"10\"\n[drawGrid]=\"true\">\n\n<ng-joint-dia-graph (cellAdd)=\"onCellAdd($event)\">\n\n  <ng-joint-shapes>\n\n    <ng-joint-shapes-standard>\n\n      <ng-joint-standard-bordered-image\n        [id]=\"'bordered-image'\"\n        [x]=\"225\" [y]=\"410\"\n        [width]=\"150\" [height]=\"100\"\n        [root]=\"{ title: 'standard.BorderedImage' }\"\n        [label]=\"{ text: 'Bordered\\nImage' }\"\n        [border]=\"{ rx: '5' }\"\n        [image]=\"{ xlinkHref: 'assets/image.png' }\">\n      </ng-joint-standard-bordered-image>\n\n      <ng-joint-standard-circle (elementPointerClick)=\"onElementPointerClick('circle')\"\n        [id]=\"'circle'\"\n        [x]=\"200\" [y]=\"10\"\n        [width]=\"100\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Circle' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n        [label]=\"{ text: 'Circle' }\">\n      </ng-joint-standard-circle>\n\n      <ng-joint-standard-cylinder\n        [id]=\"'cylinder'\"\n        [x]=\"525\" [y]=\"75\"\n        [width]=\"100\" [height]=\"200\"\n        [root]=\"{ title: 'standard.Cylinder', tabindex: '7' }\"\n        [body]=\"{ fill: 'fe854f', fillOpacity: '0.5' }\"\n        [top]=\"{ fill: 'fe854f', fillOpacity: '0.8' }\"\n        [label]=\"{ text: 'Cylinder' }\"\n        [topRy]=\"'10%'\">\n      </ng-joint-standard-cylinder>\n\n      <ng-joint-standard-ellipse\n        [id]=\"'ellipse'\"\n        [x]=\"350\" [y]=\"10\"\n        [width]=\"150\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Ellipse' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n        [label]=\"{ text: 'Ellipse' }\">\n      </ng-joint-standard-ellipse>\n\n      <ng-joint-standard-embedded-image\n        [id]=\"'embedded-image'\"\n        [x]=\"425\" [y]=\"340\"\n        [width]=\"150\" [height]=\"100\"\n        [root]=\"{ title: 'standard.EmbededImage' }\"\n        [label]=\"{ text: 'Embedded\\nImage' }\"\n        [body]=\"{ fill: '#fe854f', fillOpacity: '0.5', stroke: '#fe854f' }\"\n        [image]=\"{ xlinkHref: 'assets/image.png' }\">\n      </ng-joint-standard-embedded-image>\n\n      <ng-joint-standard-headered-rectangle\n        [id]=\"'headered-rectangle'\"\n        [x]=\"25\" [y]=\"610\"\n        [width]=\"150\" [height]=\"100\"\n        [root]=\"{ title: 'standard.HeaderedRectangle' }\"\n        [header]=\"{ fill: '#000000', fillOpacity: '0.1' }\"\n        [headerText]=\"{ text: 'Header' }\"\n        [body]=\"{ fill: '#fe854f', fillOpacity: '0.5' }\"\n        [bodyText]=\"{ text: 'Headered\\nRectangle' }\">\n      </ng-joint-standard-headered-rectangle>\n\n      <ng-joint-standard-image\n        [id]=\"'image'\"\n        [x]=\"25\" [y]=\"410\"\n        [width]=\"150\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Image' }\"\n        [label]=\"{ text: 'Image' }\"\n        [image]=\"{ xlinkHref: 'assets/image.png' }\">\n      </ng-joint-standard-image>\n\n      <ng-joint-standard-inscribed-image\n        [id]=\"'inscribed-image'\"\n        [x]=\"450\" [y]=\"450\"\n        [width]=\"100\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Image' }\"\n        [image]=\"{ xlinkHref: 'assets/image.png' }\"\n        [border]=\"{ strokeWidth: '5' }\"\n        [background]=\"{ fill: 'lightgray' }\"\n        [label]=\"{ text: 'Inscribed Image' }\">\n      </ng-joint-standard-inscribed-image>\n      \n      <ng-joint-standard-path\n        [id]=\"'path'\"\n        [x]=\"50\" [y]=\"210\"\n        [width]=\"100\"\n        [height]=\"100\"\n        [root]=\"{ title: 'standard.Path' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5', refD: 'M 0 5 10 0 C 20 0 20 20 10 20 L 0 15 Z' }\"\n        [label]=\"{ text: 'Path' }\">\n      </ng-joint-standard-path>\n\n      <ng-joint-standard-polygon\n        [id]=\"'polygon'\"\n        [x]=\"200\" [y]=\"210\" \n        [width]=\"100\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Polygon' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,10 10,0 20,10 10,20' }\"\n        [label]=\"{ text: 'Polygon' }\">\n      </ng-joint-standard-polygon>\n\n      <ng-joint-standard-polyline\n        [id]=\"'polyline'\"\n        [x]=\"375\" [y]=\"210\"\n        [width]=\"100\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Polyline' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: 0.5, refPoints: '0,0 0,10 10,10 10,0' }\"\n        [label]=\"{ text: 'Polyline' }\">\n      </ng-joint-standard-polyline>\n\n      <ng-joint-standard-rectangle\n        [id]=\"'rectangle'\"\n        [x]=\"50\" [y]=\"10\"\n        [width]=\"100\" [height]=\"100\"\n        [root]=\"{ title: 'standard.Rectangle' }\"\n        [body]=\"{ fill: '#30d0c6', fillOpacity: '0.5' }\"\n        [label]=\"{ text: 'Rectangle' }\">\n      </ng-joint-standard-rectangle>\n\n    </ng-joint-shapes-standard>\n\n  </ng-joint-shapes>\n\n</ng-joint-dia-graph>\n\n</ng-joint-dia-paper>"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1lbGVtZW50cy9zdGFuZGFyZC1lbGVtZW50cy1jb2RlLWV4YW1wbGUwMS9zdGFuZGFyZC1lbGVtZW50cy1jb2RlLWV4YW1wbGUwMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: StandardElementsCodeExample01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardElementsCodeExample01Component", function() { return StandardElementsCodeExample01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardElementsCodeExample01Component = /** @class */ (function () {
    function StandardElementsCodeExample01Component() {
    }
    StandardElementsCodeExample01Component.prototype.ngOnInit = function () {
    };
    StandardElementsCodeExample01Component.prototype.onElementPointerClick = function (cid) {
        console.log('onElementPointerClick.cid', cid);
    };
    StandardElementsCodeExample01Component.prototype.onCellAdd = function (cid) {
        console.log('onCellAdd.cid', cid);
    };
    StandardElementsCodeExample01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-elements-code-example01',
            template: __webpack_require__(/*! ./standard-elements-code-example01.component.html */ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.html"),
            styles: [__webpack_require__(/*! ./standard-elements-code-example01.component.scss */ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/standard-elements-code-example01.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardElementsCodeExample01Component);
    return StandardElementsCodeExample01Component;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-how-to-use-doc\n  [overview]=\"overview\"\n  [api]=\"api\"\n  [examples]=\"examples\">\n</app-how-to-use-doc>\n  \n<ng-template #overview>\n  Test overview template\n</ng-template>\n  \n<ng-template #api>\n  Test api template\n</ng-template>\n\n<ng-template #examples>\n  <p>Example with all standard <b>joinjs</b> package delivered element-shapes in the <b>@dwgu/ng-joint</b> angular HTML-template definition format.</p>\n\n  <app-code-example-viewer\n    [codeExample]=\"codeexample01\"\n    [codeSourceUrl]=\"codeSourceUrlExample01\">\n  </app-code-example-viewer>\n\n  <ng-template #codeexample01>\n    <app-standard-elements-code-example01></app-standard-elements-code-example01>\n  </ng-template>\n\n</ng-template>\n"

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
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var StandardElementsComponent = /** @class */ (function () {
    function StandardElementsComponent(appService) {
        this.appService = appService;
    }
    Object.defineProperty(StandardElementsComponent.prototype, "_standardElementsSourceUrl", {
        get: function () {
            return this.appService.shapesStandardExamplesSourceUrl + '/standard-elements';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandardElementsComponent.prototype, "codeSourceUrlExample01", {
        get: function () {
            return this._standardElementsSourceUrl + '/standard-elements-code-example01/standard-elements-code-example01.component';
        },
        enumerable: true,
        configurable: true
    });
    StandardElementsComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Standard Elements Examples';
    };
    StandardElementsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-elements',
            template: __webpack_require__(/*! ./standard-elements.component.html */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.html"),
            styles: [__webpack_require__(/*! ./standard-elements.component.scss */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], StandardElementsComponent);
    return StandardElementsComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-elements/standard-elements.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-elements/standard-elements.module.ts ***!
  \****************************************************************************************/
/*! exports provided: StandardElementsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardElementsModule", function() { return StandardElementsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-example-viewer */ "./src/app/code-example-viewer/index.ts");
/* harmony import */ var _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../how-to-use-doc */ "./src/app/how-to-use-doc/index.ts");
/* harmony import */ var _standard_elements_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard-elements.component */ "./src/app/shapes-standard-examples/standard-elements/standard-elements.component.ts");
/* harmony import */ var _standard_elements_code_example01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standard-elements-code-example01 */ "./src/app/shapes-standard-examples/standard-elements/standard-elements-code-example01/index.ts");








var StandardElementsModule = /** @class */ (function () {
    function StandardElementsModule() {
    }
    StandardElementsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _standard_elements_component__WEBPACK_IMPORTED_MODULE_6__["StandardElementsComponent"],
                _standard_elements_code_example01__WEBPACK_IMPORTED_MODULE_7__["StandardElementsCodeExample01Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardModule"],
                _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__["CodeExampleViewerModule"], _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__["HowToUseDocModule"],
            ],
            exports: []
        })
    ], StandardElementsModule);
    return StandardElementsModule;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/index.ts ***!
  \******************************************************************/
/*! exports provided: StandardLinksComponent, StandardLinksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_links_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-links.component */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardLinksComponent", function() { return _standard_links_component__WEBPACK_IMPORTED_MODULE_0__["StandardLinksComponent"]; });

/* harmony import */ var _standard_links_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./standard-links.module */ "./src/app/shapes-standard-examples/standard-links/standard-links.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardLinksModule", function() { return _standard_links_module__WEBPACK_IMPORTED_MODULE_1__["StandardLinksModule"]; });





/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/index.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/index.ts ***!
  \************************************************************************************************/
/*! exports provided: StandardLinksCodeExample01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_links_code_example01_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-links-code-example01.component */ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardLinksCodeExample01Component", function() { return _standard_links_code_example01_component__WEBPACK_IMPORTED_MODULE_0__["StandardLinksCodeExample01Component"]; });




/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.html ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-joint-dia-paper\n    [width]=\"650\"\n    [height]=\"800\"\n    [gridSize]=\"10\"\n    [drawGrid]=\"true\">\n    \n    <ng-joint-dia-graph>\n        <ng-joint-shapes>\n            <ng-joint-shapes-standard>\n\n                <ng-joint-standard-rectangle (elementPointerClick)=\"onElementPointerClick($event)\"\n                    [id]=\"'rect'\"\n                    [x]=\"10\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'blue' }\"\n                    [label]=\"{ text: 'Hello', fill: 'white' }\">\n                    </ng-joint-standard-rectangle>\n\n                <ng-joint-standard-rectangle \n                    [id]=\"'rect2'\"\n                    [x]=\"310\"\n                    [y]=\"30\"\n                    [width]=\"100\"\n                    [height]=\"40\"\n                    [body]=\"{ fill: 'red' }\"\n                    [label]=\"{ text: 'World!', fill: 'white' }\">\n                </ng-joint-standard-rectangle>\n\n                <ng-joint-standard-link\n                    [id]=\"'link'\"\n                    [sourceId]=\"'rect'\"\n                    [targetId]=\"'rect2'\"\n                    [line]=\"{ stroke: '#222138', sourceMarker: { fill: '#31d0c6', stroke: 'none', d: 'M 5 -10 L -15 0 L 5 10 Z' } }\"\n                    >\n                </ng-joint-standard-link>\n\n                <ng-joint-standard-embedded-image\n                    [id]=\"'embedded-image'\"\n                    [x]=\"425\" [y]=\"340\"\n                    [width]=\"150\" [height]=\"100\"\n                    [root]=\"{ title: 'standard.EmbededImage' }\"\n                    [label]=\"{ text: 'Embedded\\nImage' }\"\n                    [body]=\"{ fill: '#fe854f', fillOpacity: '0.5', stroke: '#fe854f' }\"\n                    [image]=\"{ xlinkHref: 'assets/image.png' }\"\n                    >\n                </ng-joint-standard-embedded-image>\n    \n                <ng-joint-standard-headered-rectangle\n                    [id]=\"'headered-rectangle'\"\n                    [x]=\"25\" [y]=\"610\"\n                    [width]=\"150\" [height]=\"100\"\n                    [root]=\"{ title: 'standard.HeaderedRectangle' }\"\n                    [header]=\"{ fill: '#000000', fillOpacity: '0.1' }\"\n                    [headerText]=\"{ text: 'Header' }\"\n                    [body]=\"{ fill: '#fe854f', fillOpacity: '0.5' }\"\n                    [bodyText]=\"{ text: 'Headered\\nRectangle' }\">\n                </ng-joint-standard-headered-rectangle>\n\n                <ng-joint-standard-double-link\n                    [id]=\"'double-link'\"\n                    [sourceId]=\"'embedded-image'\"\n                    [targetId]=\"'headered-rectangle'\"\n                    [root]=\"{ title: 'standard.DoubleLink' }\"\n                    [line]=\"{ stroke: '#30d0c6' }\">\n                </ng-joint-standard-double-link>\n\n            </ng-joint-shapes-standard>\n        </ng-joint-shapes>\n    </ng-joint-dia-graph>\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.scss":
/*!************************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.scss ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy1zdGFuZGFyZC1leGFtcGxlcy9zdGFuZGFyZC1saW5rcy9zdGFuZGFyZC1saW5rcy1jb2RlLWV4YW1wbGUwMS9zdGFuZGFyZC1saW5rcy1jb2RlLWV4YW1wbGUwMS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.ts":
/*!**********************************************************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.ts ***!
  \**********************************************************************************************************************************/
/*! exports provided: StandardLinksCodeExample01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinksCodeExample01Component", function() { return StandardLinksCodeExample01Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StandardLinksCodeExample01Component = /** @class */ (function () {
    function StandardLinksCodeExample01Component() {
    }
    StandardLinksCodeExample01Component.prototype.ngOnInit = function () {
    };
    StandardLinksCodeExample01Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-links-code-example01',
            template: __webpack_require__(/*! ./standard-links-code-example01.component.html */ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.html"),
            styles: [__webpack_require__(/*! ./standard-links-code-example01.component.scss */ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/standard-links-code-example01.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StandardLinksCodeExample01Component);
    return StandardLinksCodeExample01Component;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-how-to-use-doc\n  [overview]=\"overview\"\n  [api]=\"api\"\n  [examples]=\"examples\">\n</app-how-to-use-doc>\n  \n<ng-template #overview>\n  Test overview template\n</ng-template>\n  \n<ng-template #api>\n  Test api template\n</ng-template>\n\n<ng-template #examples>\n  <p>Example with all standard <b>joinjs</b> package delivered link-shapes in the <b>@dwgu/ng-joint</b> angular HTML-template definition format.</p>\n\n  <app-code-example-viewer\n    [codeExample]=\"codeexample01\"\n    [codeSourceUrl]=\"codeSourceUrlExample01\">\n  </app-code-example-viewer>\n\n  <ng-template #codeexample01>\n    <app-standard-links-code-example01></app-standard-links-code-example01>\n  </ng-template>\n\n</ng-template>\n"

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
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");



var StandardLinksComponent = /** @class */ (function () {
    function StandardLinksComponent(appService) {
        this.appService = appService;
    }
    Object.defineProperty(StandardLinksComponent.prototype, "_standardElementsSourceUrl", {
        get: function () {
            return this.appService.shapesStandardExamplesSourceUrl + '/standard-links';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StandardLinksComponent.prototype, "codeSourceUrlExample01", {
        get: function () {
            return this._standardElementsSourceUrl + '/standard-links-code-example01/standard-links-code-example01.component';
        },
        enumerable: true,
        configurable: true
    });
    StandardLinksComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'Standard Links Examples';
    };
    StandardLinksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-standard-links',
            template: __webpack_require__(/*! ./standard-links.component.html */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.html"),
            styles: [__webpack_require__(/*! ./standard-links.component.scss */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], StandardLinksComponent);
    return StandardLinksComponent;
}());



/***/ }),

/***/ "./src/app/shapes-standard-examples/standard-links/standard-links.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shapes-standard-examples/standard-links/standard-links.module.ts ***!
  \**********************************************************************************/
/*! exports provided: StandardLinksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardLinksModule", function() { return StandardLinksModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../code-example-viewer */ "./src/app/code-example-viewer/index.ts");
/* harmony import */ var _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../how-to-use-doc */ "./src/app/how-to-use-doc/index.ts");
/* harmony import */ var _standard_links_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./standard-links.component */ "./src/app/shapes-standard-examples/standard-links/standard-links.component.ts");
/* harmony import */ var _standard_links_code_example01__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./standard-links-code-example01 */ "./src/app/shapes-standard-examples/standard-links/standard-links-code-example01/index.ts");








var StandardLinksModule = /** @class */ (function () {
    function StandardLinksModule() {
    }
    StandardLinksModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _standard_links_component__WEBPACK_IMPORTED_MODULE_6__["StandardLinksComponent"],
                _standard_links_code_example01__WEBPACK_IMPORTED_MODULE_7__["StandardLinksCodeExample01Component"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_3__["ShapesStandardModule"],
                _code_example_viewer__WEBPACK_IMPORTED_MODULE_4__["CodeExampleViewerModule"], _how_to_use_doc__WEBPACK_IMPORTED_MODULE_5__["HowToUseDocModule"],
            ],
            exports: []
        })
    ], StandardLinksModule);
    return StandardLinksModule;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shapes-uml-examples/index.ts ***!
  \**********************************************/
/*! exports provided: ShapesUmlExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shapes_uml_examples_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shapes-uml-examples.module */ "./src/app/shapes-uml-examples/shapes-uml-examples.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesModule", function() { return _shapes_uml_examples_module__WEBPACK_IMPORTED_MODULE_0__["ShapesUmlExamplesModule"]; });




/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ShapesUmlExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesRoutingModule", function() { return ShapesUmlExamplesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shapes-uml-examples.component */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts");
/* harmony import */ var _uml_class_diagram__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uml-class-diagram */ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts");





var demoModuleRoutes = [
    { path: 'shapes-uml-examples', component: _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_3__["ShapesUmlExamplesComponent"],
        children: [
            { path: 'uml-class-diagram', component: _uml_class_diagram__WEBPACK_IMPORTED_MODULE_4__["UmlClassDiagramComponent"] }
        ]
    }
];
var ShapesUmlExamplesRoutingModule = /** @class */ (function () {
    function ShapesUmlExamplesRoutingModule() {
    }
    ShapesUmlExamplesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(demoModuleRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], ShapesUmlExamplesRoutingModule);
    return ShapesUmlExamplesRoutingModule;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shapes-uml-examples works!\n</p>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy11bWwtZXhhbXBsZXMvc2hhcGVzLXVtbC1leGFtcGxlcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShapesUmlExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesComponent", function() { return ShapesUmlExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShapesUmlExamplesComponent = /** @class */ (function () {
    function ShapesUmlExamplesComponent() {
    }
    ShapesUmlExamplesComponent.prototype.ngOnInit = function () {
    };
    ShapesUmlExamplesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shapes-uml-examples',
            template: __webpack_require__(/*! ./shapes-uml-examples.component.html */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.html"),
            styles: [__webpack_require__(/*! ./shapes-uml-examples.component.scss */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShapesUmlExamplesComponent);
    return ShapesUmlExamplesComponent;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/shapes-uml-examples.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shapes-uml-examples/shapes-uml-examples.module.ts ***!
  \*******************************************************************/
/*! exports provided: ShapesUmlExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapesUmlExamplesModule", function() { return ShapesUmlExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @dgwnu/ng-joint */ "./dist/ng-joint/fesm5/dgwnu-ng-joint.js");
/* harmony import */ var _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shapes-uml-examples-routing.module */ "./src/app/shapes-uml-examples/shapes-uml-examples-routing.module.ts");
/* harmony import */ var _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shapes-uml-examples.component */ "./src/app/shapes-uml-examples/shapes-uml-examples.component.ts");
/* harmony import */ var _uml_class_diagram__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./uml-class-diagram */ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts");










var ShapesUmlExamplesModule = /** @class */ (function () {
    function ShapesUmlExamplesModule() {
    }
    ShapesUmlExamplesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _shapes_uml_examples_component__WEBPACK_IMPORTED_MODULE_8__["ShapesUmlExamplesComponent"],
                _uml_class_diagram__WEBPACK_IMPORTED_MODULE_9__["UmlClassDiagramComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_6__["NgJointModule"], _dgwnu_ng_joint__WEBPACK_IMPORTED_MODULE_6__["ShapesUmlModule"],
                _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesUmlExamplesRoutingModule"],
            ],
            exports: [
                _shapes_uml_examples_routing_module__WEBPACK_IMPORTED_MODULE_7__["ShapesUmlExamplesRoutingModule"]
            ]
        })
    ], ShapesUmlExamplesModule);
    return ShapesUmlExamplesModule;
}());



/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/index.ts ***!
  \****************************************************************/
/*! exports provided: UmlClassDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uml_class_diagram_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uml-class-diagram.component */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramComponent", function() { return _uml_class_diagram_component__WEBPACK_IMPORTED_MODULE_0__["UmlClassDiagramComponent"]; });




/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  {{ umlClasses[0].name }}({{ umlClasses[0].x }}, {{ umlClasses[0].y }})\n</div>\n\n<ng-joint-dia-paper\n  [width]=\"800\"\n  [height]=\"600\"\n  [gridSize]=\"10\"\n  [drawGrid]=\"true\">\n\n  <ng-joint-dia-graph>\n\n    <ng-joint-shapes>\n\n      <ng-joint-shapes-uml>\n\n        <ng-joint-uml-interface *ngFor=\"let umlInterface of umlInterfaces\"\n          [id]=\"umlInterface.id\"\n          [x]=\"umlInterface.x\"\n          [y]=\"umlInterface.y\"\n          [width]=\"umlInterface.width\"\n          [height]=\"umlInterface.height\"\n          [name]=\"umlInterface.name\"\n          [attributes]=\"umlInterface.attributes\"\n          [methods]=\"umlInterface.methods\"\n          [attrs]=\"umlInterface.attrs\">\n        </ng-joint-uml-interface>\n\n        <ng-joint-uml-abstract *ngFor=\"let umlAbstract of umlAbstracts\"\n          [id]=\"umlAbstract.id\"\n          [x]=\"umlAbstract.x\"\n          [y]=\"umlAbstract.y\"\n          [width]=\"umlAbstract.width\"\n          [height]=\"umlAbstract.height\"\n          [name]=\"umlAbstract.name\"\n          [attributes]=\"umlAbstract.attributes\"\n          [methods]=\"umlAbstract.methods\"\n          [attrs]=\"umlAbstract.attrs\">\n        </ng-joint-uml-abstract>\n\n        <ng-joint-uml-class *ngFor=\"let umlClass of umlClasses\"\n          [id]=\"umlClass.id\"\n          [(x)]=\"umlClass.x\"\n          [(y)]=\"umlClass.y\"\n          [width]=\"umlClass.width\"\n          [height]=\"umlClass.height\"\n          [name]=\"umlClass.name\"\n          [attributes]=\"umlClass.attributes\"\n          [methods]=\"umlClass.methods\"\n          [attrs]=\"umlClass.attrs\">\n        </ng-joint-uml-class>\n\n        <ng-joint-uml-generalization *ngFor=\"let umlGeneralization of umlGeneralizations\"\n          [id]=\"umlGeneralization.id\"\n          [sourceId]=\"umlGeneralization.sourceId\"\n          [targetId]=\"umlGeneralization.targetId\">\n        </ng-joint-uml-generalization>\n\n        <ng-joint-uml-implementation *ngFor=\"let umlImplementation of umlImplementations\"\n          [id]=\"umlImplementation.id\"\n          [sourceId]=\"umlImplementation.sourceId\"\n          [targetId]=\"umlImplementation.targetId\">\n        </ng-joint-uml-implementation>\n\n        <ng-joint-uml-aggregation *ngFor=\"let umlAggregation of umlAggregations\"\n          [id]=\"umlAggregation.id\"\n          [sourceId]=\"umlAggregation.sourceId\"\n          [targetId]=\"umlAggregation.targetId\">\n        </ng-joint-uml-aggregation>\n\n        <ng-joint-uml-composition *ngFor=\"let umlComposition of umlCompositions\"\n          [id]=\"umlComposition.id\"\n          [sourceId]=\"umlComposition.sourceId\"\n          [targetId]=\"umlComposition.targetId\">\n        </ng-joint-uml-composition>\n\n      </ng-joint-shapes-uml>\n\n    </ng-joint-shapes>\n\n  </ng-joint-dia-graph>\n\n</ng-joint-dia-paper>\n"

/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXBlcy11bWwtZXhhbXBsZXMvdW1sLWNsYXNzLWRpYWdyYW0vdW1sLWNsYXNzLWRpYWdyYW0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.ts ***!
  \**************************************************************************************/
/*! exports provided: UmlClassDiagramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UmlClassDiagramComponent", function() { return UmlClassDiagramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_generic_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-generic.service */ "./src/app/app-generic.service.ts");

/**
 * Angular Component supported by NgJoint Library: JointJs UML Class Diagram Demo
 * Based on @see https://resources.jointjs.com/demos/joint/demo/umlcd/src/umlcd.js
 */


var umlClassDiagramFolderUrl = 'https://raw.githubusercontent.com/dgwnu/ng-joint/master/src/app/shapes-uml-examples/uml-class-diagram';
var htmlTextUrl = umlClassDiagramFolderUrl + '/uml-class-diagram.component.html';
var UmlClassDiagramComponent = /** @class */ (function () {
    function UmlClassDiagramComponent(appService) {
        this.appService = appService;
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
    }
    UmlClassDiagramComponent.prototype.ngOnInit = function () {
        this.appService.subTitle = 'UML Class Diagram Example';
    };
    UmlClassDiagramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-uml-class-diagram',
            template: __webpack_require__(/*! ./uml-class-diagram.component.html */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.html"),
            styles: [__webpack_require__(/*! ./uml-class-diagram.component.scss */ "./src/app/shapes-uml-examples/uml-class-diagram/uml-class-diagram.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_generic_service__WEBPACK_IMPORTED_MODULE_2__["AppGenericService"]])
    ], UmlClassDiagramComponent);
    return UmlClassDiagramComponent;
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
    production: false,
    traceRoutes: false
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