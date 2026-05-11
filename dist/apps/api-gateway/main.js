/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayModule = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(4);
const gateway_controller_1 = __webpack_require__(5);
const gateway_service_1 = __webpack_require__(6);
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'USER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3001,
                    },
                },
                {
                    name: 'PRODUCT_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3002,
                    },
                },
                {
                    name: 'ORDER_SERVICE',
                    transport: microservices_1.Transport.TCP,
                    options: {
                        host: '127.0.0.1',
                        port: 3003,
                    },
                },
            ]),
        ],
        controllers: [gateway_controller_1.GatewayController],
        providers: [gateway_service_1.GatewayService],
    })
], GatewayModule);


/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayController = void 0;
const common_1 = __webpack_require__(3);
const microservices_1 = __webpack_require__(4);
const gateway_service_1 = __webpack_require__(6);
let GatewayController = class GatewayController {
    gatewayService;
    userClient;
    productClient;
    orderClient;
    constructor(gatewayService, userClient, productClient, orderClient) {
        this.gatewayService = gatewayService;
        this.userClient = userClient;
        this.productClient = productClient;
        this.orderClient = orderClient;
    }
    login(loginDto) {
        return this.userClient.send({ cmd: 'login' }, loginDto);
    }
    getUser(id) {
        return this.userClient.send({ cmd: 'get_user' }, { id });
    }
    getProducts() {
        return this.productClient.send({ cmd: 'get_products' }, {});
    }
    createProduct(productDto) {
        return this.productClient.send({ cmd: 'create_product' }, productDto);
    }
    getOrders() {
        return this.orderClient.send({ cmd: 'get_orders' }, {});
    }
    createOrder(orderDto) {
        return this.orderClient.send({ cmd: 'create_order' }, orderDto);
    }
};
exports.GatewayController = GatewayController;
__decorate([
    (0, common_1.Post)('auth/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('user/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getUser", null);
__decorate([
    (0, common_1.Get)('products'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getProducts", null);
__decorate([
    (0, common_1.Post)('product'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)('orders'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "getOrders", null);
__decorate([
    (0, common_1.Post)('order'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GatewayController.prototype, "createOrder", null);
exports.GatewayController = GatewayController = __decorate([
    (0, common_1.Controller)(),
    __param(1, (0, common_1.Inject)('USER_SERVICE')),
    __param(2, (0, common_1.Inject)('PRODUCT_SERVICE')),
    __param(3, (0, common_1.Inject)('ORDER_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof gateway_service_1.GatewayService !== "undefined" && gateway_service_1.GatewayService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _c : Object, typeof (_d = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _d : Object])
], GatewayController);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayService = void 0;
const common_1 = __webpack_require__(3);
let GatewayService = class GatewayService {
    getHello() {
        return 'Hello World!';
    }
};
exports.GatewayService = GatewayService;
exports.GatewayService = GatewayService = __decorate([
    (0, common_1.Injectable)()
], GatewayService);


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const gateway_module_1 = __webpack_require__(2);
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

})();

/******/ })()
;