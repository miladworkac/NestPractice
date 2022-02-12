"use strict";
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerController = void 0;
const common_1 = require("@nestjs/common");
const customer_service_1 = require("./customer.service");
const create_customer_dto_1 = require("./dto/create-customer.dto");
const update_customer_dto_1 = require("./dto/update-customer.dto");
const typeorm_1 = require("@nestjs/typeorm");
const customer_entity_1 = require("./entities/customer.entity");
const typeorm_2 = require("typeorm");
let customerController = class customerController {
    constructor(customerRepository, customerService) {
        this.customerRepository = customerRepository;
        this.customerService = customerService;
    }
    create(createcustomerDto) {
        return this.customerService.create(createcustomerDto);
    }
    findAll() {
        return this.customerService.findAll();
    }
    findOne(id) {
        return this.customerService.findOne(+id);
    }
    update(id, updatecustomerDto) {
        return this.customerService.update(+id, updatecustomerDto);
    }
    remove(id) {
        return this.customerService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_customer_dto_1.CreatecustomerDto !== "undefined" && create_customer_dto_1.CreatecustomerDto) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], customerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], customerController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], customerController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_b = typeof update_customer_dto_1.UpdatecustomerDto !== "undefined" && update_customer_dto_1.UpdatecustomerDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], customerController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], customerController.prototype, "remove", null);
customerController = __decorate([
    (0, common_1.Controller)('customer'),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeof (_c = typeof customer_service_1.customerService !== "undefined" && customer_service_1.customerService) === "function" ? _c : Object])
], customerController);
exports.customerController = customerController;
//# sourceMappingURL=user.controller.js.map