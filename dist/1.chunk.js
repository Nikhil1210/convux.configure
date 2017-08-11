webpackJsonpac__name_([1],{

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agents_module__ = __webpack_require__(516);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AgentsModule", function() { return __WEBPACK_IMPORTED_MODULE_0__agents_module__["a"]; });



/***/ }),

/***/ 502:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var debounceTime_1 = __webpack_require__(246);
Observable_1.Observable.prototype.debounceTime = debounceTime_1.debounceTime;
//# sourceMappingURL=debounceTime.js.map

/***/ }),

/***/ 503:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var map_1 = __webpack_require__(88);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 504:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(6);
var take_1 = __webpack_require__(505);
Observable_1.Observable.prototype.take = take_1.take;
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 505:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Subscriber_1 = __webpack_require__(11);
var ArgumentOutOfRangeError_1 = __webpack_require__(506);
var EmptyObservable_1 = __webpack_require__(70);
/**
 * Emits only the first `count` values emitted by the source Observable.
 *
 * <span class="informal">Takes the first `count` values from the source, then
 * completes.</span>
 *
 * <img src="./img/take.png" width="100%">
 *
 * `take` returns an Observable that emits only the first `count` values emitted
 * by the source Observable. If the source emits fewer than `count` values then
 * all of its values are emitted. After that, it completes, regardless if the
 * source completes.
 *
 * @example <caption>Take the first 5 seconds of an infinite 1-second interval Observable</caption>
 * var interval = Rx.Observable.interval(1000);
 * var five = interval.take(5);
 * five.subscribe(x => console.log(x));
 *
 * @see {@link takeLast}
 * @see {@link takeUntil}
 * @see {@link takeWhile}
 * @see {@link skip}
 *
 * @throws {ArgumentOutOfRangeError} When using `take(i)`, it delivers an
 * ArgumentOutOrRangeError to the Observer's `error` callback if `i < 0`.
 *
 * @param {number} count The maximum number of `next` values to emit.
 * @return {Observable<T>} An Observable that emits only the first `count`
 * values emitted by the source Observable, or all of the values from the source
 * if the source emits fewer than `count` values.
 * @method take
 * @owner Observable
 */
function take(count) {
    if (count === 0) {
        return new EmptyObservable_1.EmptyObservable();
    }
    else {
        return this.lift(new TakeOperator(count));
    }
}
exports.take = take;
var TakeOperator = (function () {
    function TakeOperator(total) {
        this.total = total;
        if (this.total < 0) {
            throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
        }
    }
    TakeOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new TakeSubscriber(subscriber, this.total));
    };
    return TakeOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var TakeSubscriber = (function (_super) {
    __extends(TakeSubscriber, _super);
    function TakeSubscriber(destination, total) {
        _super.call(this, destination);
        this.total = total;
        this.count = 0;
    }
    TakeSubscriber.prototype._next = function (value) {
        var total = this.total;
        var count = ++this.count;
        if (count <= total) {
            this.destination.next(value);
            if (count === total) {
                this.destination.complete();
                this.unsubscribe();
            }
        }
    };
    return TakeSubscriber;
}(Subscriber_1.Subscriber));
//# sourceMappingURL=take.js.map

/***/ }),

/***/ 506:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * An error thrown when an element was queried at a certain index of an
 * Observable, but no such index or position exists in that sequence.
 *
 * @see {@link elementAt}
 * @see {@link take}
 * @see {@link takeLast}
 *
 * @class ArgumentOutOfRangeError
 */
var ArgumentOutOfRangeError = (function (_super) {
    __extends(ArgumentOutOfRangeError, _super);
    function ArgumentOutOfRangeError() {
        var err = _super.call(this, 'argument out of range');
        this.name = err.name = 'ArgumentOutOfRangeError';
        this.stack = err.stack;
        this.message = err.message;
    }
    return ArgumentOutOfRangeError;
}(Error));
exports.ArgumentOutOfRangeError = ArgumentOutOfRangeError;
//# sourceMappingURL=ArgumentOutOfRangeError.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return agentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_apollo_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__graphql_queries__ = __webpack_require__(244);










var agentDetailComponent = (function () {
    // Inject Angular2Apollo service
    function agentDetailComponent(apollo, route) {
        this.route = route;
        this.pageTitle = 'Agent detail:';
        this.agentControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        // Observable variable of the graphql query
        this.nameFilter = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.apollo = apollo;
    }
    agentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this
            .route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_9__graphql_queries__["a" /* GetAgentDetailQuery */],
            variables: {
                "id": this.id
            }
        }).subscribe(function (_a) {
            var data = _a.data;
            _this.agent = data.agent;
        });
    };
    agentDetailComponent.prototype.ngOnDestroy = function () {
        this
            .sub
            .unsubscribe();
    };
    return agentDetailComponent;
}());
agentDetailComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({ template: __webpack_require__(529), styles: [__webpack_require__(537)] }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_apollo_angular__["b" /* Apollo */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* ActivatedRoute */]])
], agentDetailComponent);



/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__agents_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_take__);









var AgentListComponent = (function () {
    // Inject Angular2Apollo service
    function AgentListComponent(_agentService, snackBar) {
        this._agentService = _agentService;
        this.snackBar = snackBar;
        this.agentControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]();
        this.nameFilter = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
    }
    AgentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.agents = this
            ._agentService
            .get();
        // Add debounce time to wait 300 ms for a new change instead of keep hitting the
        // server
        this
            .agentControl
            .valueChanges
            .debounceTime(300)
            .subscribe(function (name) {
            _this
                .nameFilter
                .next(name);
        });
    };
    AgentListComponent.prototype.deleteAgent = function (id) {
        var _this = this;
        this
            ._agentService
            .delete(id)
            .then(function (response) {
            _this.openSnackBar(response.message, 'Delete');
            _this
                .agents
                .refetch();
        })
            .catch(function (error) {
            _this.openSnackBar(error.message, 'Delete');
        });
    };
    AgentListComponent.prototype.openSnackBar = function (message, action) {
        this
            .snackBar
            .open(message, action, { duration: 4000 });
    };
    return AgentListComponent;
}());
AgentListComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({ selector: 'agent-list', template: __webpack_require__(530), styles: [__webpack_require__(538)] }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__agents_service__["a" /* AgentsService */], __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MdSnackBar */]])
], AgentListComponent);



/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_mutations__ = __webpack_require__(247);








var EditAgentComponent = (function () {
    function EditAgentComponent(formBuilder, route, router, apollo) {
        this.route = route;
        this.router = router;
        this.apollo = apollo;
        this.form = formBuilder.group({
            title: [
                '',
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            ],
            content: ['']
        });
        this.apollo = apollo;
    }
    EditAgentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.sub = this
            .route
            .params
            .subscribe(function (params) {
            _this.id = params['id'];
        });
        this.apollo.watchQuery({
            query: __WEBPACK_IMPORTED_MODULE_5__graphql_queries__["a" /* GetAgentDetailQuery */],
            variables: {
                "id": this.id
            }
        }).subscribe(function (_a) {
            var data = _a.data;
            that.agent = data.agent;
            _this
                .form
                .setValue({ title: data.agent.title, content: data.agent.content });
        });
    };
    EditAgentComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.valid)
            return;
        this
            .apollo
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_6__graphql_mutations__["a" /* UpdateAgentMutation */],
            variables: {
                "id": this.agent.id,
                "data": {
                    "title": this.form.value.title,
                    "content": this.form.value.content
                }
            }
        })
            .take(1)
            .subscribe({
            next: function (_a) {
                var data = _a.data;
                console.log('edit agent', data);
                // get edit data
                _this
                    .router
                    .navigate(['/agents']);
            },
            error: function (errors) {
                console.log('there was an error sending the query', errors);
            }
        });
    };
    return EditAgentComponent;
}());
EditAgentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({ selector: 'edit-agent', template: __webpack_require__(531), styles: [__webpack_require__(539)] }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4_apollo_angular__["b" /* Apollo */]])
], EditAgentComponent);



/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAgentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_apollo_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__graphql_queries__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__graphql_mutations__ = __webpack_require__(247);







var NewAgentComponent = (function () {
    function NewAgentComponent(formBuilder, router, apollo) {
        this.router = router;
        this.apollo = apollo;
        this.form = formBuilder.group({
            title: [
                '',
                [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required]
            ],
            content: ['']
        });
        this.apollo = apollo;
    }
    NewAgentComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.valid)
            return;
        this
            .apollo
            .mutate({
            mutation: __WEBPACK_IMPORTED_MODULE_6__graphql_mutations__["b" /* AddAgentMutation */],
            variables: {
                "data": {
                    "title": this.form.value.title,
                    "content": this.form.value.content
                }
            },
            refetchQueries: [
                {
                    query: __WEBPACK_IMPORTED_MODULE_5__graphql_queries__["b" /* GetAgentsQuery */]
                }
            ]
        })
            .take(1)
            .subscribe({
            next: function (_a) {
                var data = _a.data;
                console.log('got a new agent', data);
                // get new data
                _this
                    .router
                    .navigate(['/agents']);
            },
            error: function (errors) {
                console.log('there was an error sending the query', errors);
            }
        });
    };
    return NewAgentComponent;
}());
NewAgentComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_11" /* Component */])({ selector: 'new-agent', template: __webpack_require__(532), styles: [__webpack_require__(540)] }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["b" /* __metadata */]("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_4_apollo_angular__["b" /* Apollo */]])
], NewAgentComponent);



/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);


var AgentsFilterPipe = (function () {
    function AgentsFilterPipe() {
    }
    AgentsFilterPipe.prototype.transform = function (value, filtetBy) {
        filtetBy = filtetBy
            ? filtetBy.toLocaleLowerCase()
            : null; //search in each product if is the same
        return filtetBy
            ? value.filter(function (agent) { return agent.title.toLocaleLowerCase().indexOf(filtetBy) !== -1; })
            : value;
    };
    return AgentsFilterPipe;
}());
AgentsFilterPipe = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["X" /* Pipe */])({ name: 'agentsFilter' })
], AgentsFilterPipe);



/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__agents_routes__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__agent_list_agent_list_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__agent_detail_agent_detail_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__new_agent_new_agent_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__edit_agent_edit_agent_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agents_filter_agents_filter_pipe__ = __webpack_require__(515);













var AgentsModule = (function () {
    function AgentsModule() {
    }
    return AgentsModule;
}());
AgentsModule.routes = __WEBPACK_IMPORTED_MODULE_7__agents_routes__["a" /* routes */];
AgentsModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["y" /* NgModule */])({
        declarations: [
            /**
             * Components / Directives/ Pipes
             */
            __WEBPACK_IMPORTED_MODULE_8__agent_list_agent_list_component__["a" /* AgentListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__new_agent_new_agent_component__["a" /* NewAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__edit_agent_edit_agent_component__["a" /* EditAgentComponent */],
            __WEBPACK_IMPORTED_MODULE_12__agents_filter_agents_filter_pipe__["a" /* AgentsFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_9__agent_detail_agent_detail_component__["a" /* agentDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__agents_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MaterialModule */],
        ]
    })
], AgentsModule);



/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__agent_list_agent_list_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_agent_new_agent_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_agent_edit_agent_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__agent_detail_agent_detail_component__ = __webpack_require__(507);




var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__agent_list_agent_list_component__["a" /* AgentListComponent */]
            }, {
                path: 'agent-detail/:id',
                component: __WEBPACK_IMPORTED_MODULE_3__agent_detail_agent_detail_component__["a" /* agentDetailComponent */]
            }, {
                path: 'new',
                component: __WEBPACK_IMPORTED_MODULE_1__new_agent_new_agent_component__["a" /* NewAgentComponent */]
            }, {
                path: 'edit/:id',
                component: __WEBPACK_IMPORTED_MODULE_2__edit_agent_edit_agent_component__["a" /* EditAgentComponent */]
            }
        ]
    }
];


/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(undefined);
// imports


// module
exports.push([module.i, ".agent {\n  width: 70%;\n  margin: auto; }\n  .agent .title {\n    font-weight: bold; }\n", ""]);

// exports


/***/ }),

/***/ 522:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(undefined);
// imports


// module
exports.push([module.i, ".agents {\n  width: 70%;\n  margin: auto; }\n  .agents .addBtn {\n    float: right; }\n", ""]);

// exports


/***/ }),

/***/ 523:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(undefined);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 524:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(69)(undefined);
// imports


// module
exports.push([module.i, ".agentDetail {\n  width: 70%;\n  margin: auto; }\n", ""]);

// exports


/***/ }),

/***/ 529:
/***/ (function(module, exports) {

module.exports = "<div class=\"agent\">\n    <h2>{{pageTitle}}</h2>\n    <div *ngIf=\"agent\">\n        <md-card>\n            <md-card-header>\n                <md-card-title class=\"title\">{{agent.title }}</md-card-title>\n                <md-card-subtitle>_________________________</md-card-subtitle>\n            </md-card-header>\n            <md-card-content>\n                <p>{{agent.content}}</p>\n            </md-card-content>\n        </md-card>\n    </div>\n\n</div>"

/***/ }),

/***/ 530:
/***/ (function(module, exports) {

module.exports = "<div class=\"agents\">\n    <div aria-flowto=\"<left></left>\">\n        <h2>Agents list</h2>\n        <button class=\"addBtn\" md-fab [routerLink]=\"['/agents/new']\">\n    <md-icon>add</md-icon>\n  </button>\n        <br></div>\n    <md-input-container>\n        <input mdInput type=\"search\" [(ngModel)]='listAgentFilter' [formControl]=\"agentControl\" placeholder=\"search...\"></md-input-container>\n    <md-card *ngFor=\"let agent of agents | async | agentsFilter:listAgentFilter\">\n        <md-list>\n            <md-list-item>\n                <a md-line [routerLink]=\"['/agents/agent-detail', agent.id]\">\n            {{\n              agent.title\n            }}\n          </a>\n                <p md-line>\n                    <span>{{\n                agent.content\n              }}</span>\n                </p>\n                <span>\n            <button md-button (click)='deleteAgent(agent.id)'>\n              <md-icon>delete</md-icon>\n            </button>\n          </span>\n                <span>\n            <button md-button [routerLink]=\"['/agents/edit', agent.id]\">\n              <md-icon>edit</md-icon>\n            </button>\n          </span>\n            </md-list-item>\n        </md-list>\n    </md-card>\n</div>"

/***/ }),

/***/ 531:
/***/ (function(module, exports) {

module.exports = "<div class=\"agentDetail\">\n    <div *ngIf=\"agent\">\n        <h5>Edit agent:</h5>\n        <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n            <md-input-container>\n                <input mdInput formControlName=\"title\" placeholder=\"Title\">\n                <md-error>This field is required</md-error>\n            </md-input-container><br>\n            <md-input-container>\n                <textarea mdInput md-autosize minRows=\"6\" placeholder=\"Your agent content...\" formControlName=\"content\"></textarea>\n            </md-input-container>\n            <button md-raised-button type=\"submit\">Save</button>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ 532:
/***/ (function(module, exports) {

module.exports = "<div class=\"agentDetail\">\n    <h5>Add new agent:</h5>\n    <form [formGroup]=\"form\" (ngSubmit)=\"save()\">\n        <md-input-container>\n            <input mdInput formControlName=\"title\" placeholder=\"Title\">\n            <md-error>This field is required</md-error>\n        </md-input-container><br>\n        <md-input-container>\n            <textarea mdInput md-autosize minRows=\"6\" placeholder=\"Your agent content...\" formControlName=\"content\"></textarea>\n        </md-input-container>\n        <button md-raised-button type=\"submit\">Save</button>\n    </form>\n</div>"

/***/ }),

/***/ 537:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(521);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 538:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(522);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(523);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(524);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ })

});
//# sourceMappingURL=1.chunk.js.map