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
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("./entities/customer.entity");
let customerService = class customerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    create(body) {
        const customer = this.customerRepository.create(body);
        this.customerRepository.save(customer);
        return customer;
    }
    findAll() {
        return this.customerRepository.find();
    }
    findOne(id) {
        return this.customerRepository.findOne(id);
    }
    async update(id, body) {
        const customer = await this.customerRepository.preload(Object.assign({ id: id }, body));
        if (!customer) {
            throw new common_1.NotFoundException();
        }
        return this.customerRepository.save(customer);
    }
    async remove(id) {
        const customer = await this.findOne(id);
        this.customerRepository.remove(customer);
        return customer;
    }
};
customerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], customerService);
exports.customerService = customerService;
//# sourceMappingURL=customer.service.js.map