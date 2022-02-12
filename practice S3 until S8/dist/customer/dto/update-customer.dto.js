"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatecustomerDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_customer_dto_1 = require("./create-customer.dto");
class UpdatecustomerDto extends (0, mapped_types_1.PartialType)(create_customer_dto_1.CreatecustomerDto) {
}
exports.UpdatecustomerDto = UpdatecustomerDto;
//# sourceMappingURL=update-customer.dto.js.map