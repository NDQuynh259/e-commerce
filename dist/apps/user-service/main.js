/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/user-service/src/user-service.controller.ts"
/*!**********************************************************!*\
  !*** ./apps/user-service/src/user-service.controller.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServiceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_service_service_1 = __webpack_require__(/*! ./user-service.service */ "./apps/user-service/src/user-service.service.ts");
let UserServiceController = class UserServiceController {
    userServiceService;
    constructor(userServiceService) {
        this.userServiceService = userServiceService;
    }
    getUser(data) {
        return {
            id: data.id,
            name: 'John Doe',
            email: 'john@example.com',
        };
    }
    getHello() {
        return this.userServiceService.getHello();
    }
    createUser(data) {
        return {
            message: 'User created successfully',
            user: data,
        };
    }
};
exports.UserServiceController = UserServiceController;
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_user' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserServiceController.prototype, "getUser", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_hello' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], UserServiceController.prototype, "getHello", null);
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'create_user' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], UserServiceController.prototype, "createUser", null);
exports.UserServiceController = UserServiceController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_service_1.UserServiceService !== "undefined" && user_service_service_1.UserServiceService) === "function" ? _a : Object])
], UserServiceController);


/***/ },

/***/ "./apps/user-service/src/user-service.module.ts"
/*!******************************************************!*\
  !*** ./apps/user-service/src/user-service.module.ts ***!
  \******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServiceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_controller_1 = __webpack_require__(/*! ./user-service.controller */ "./apps/user-service/src/user-service.controller.ts");
const user_service_service_1 = __webpack_require__(/*! ./user-service.service */ "./apps/user-service/src/user-service.service.ts");
let UserServiceModule = class UserServiceModule {
};
exports.UserServiceModule = UserServiceModule;
exports.UserServiceModule = UserServiceModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [user_service_controller_1.UserServiceController],
        providers: [user_service_service_1.UserServiceService],
    })
], UserServiceModule);


/***/ },

/***/ "./apps/user-service/src/user-service.service.ts"
/*!*******************************************************!*\
  !*** ./apps/user-service/src/user-service.service.ts ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserServiceService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let UserServiceService = class UserServiceService {
    getHello() {
        return 'Hello World!';
    }
};
exports.UserServiceService = UserServiceService;
exports.UserServiceService = UserServiceService = __decorate([
    (0, common_1.Injectable)()
], UserServiceService);


/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "@nestjs/microservices"
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
(module) {

module.exports = require("@nestjs/microservices");

/***/ }

/******/ 	});
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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/*!***************************************!*\
  !*** ./apps/user-service/src/main.ts ***!
  \***************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_service_module_1 = __webpack_require__(/*! ./user-service.module */ "./apps/user-service/src/user-service.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(user_service_module_1.UserServiceModule, {
        transport: microservices_1.Transport.TCP,
        options: {
            host: '127.0.0.1',
            port: 3001,
        },
    });
    await app.listen();
    console.log('User Microservice is listening on port 3001');
}
bootstrap();

})();

/******/ })()
;