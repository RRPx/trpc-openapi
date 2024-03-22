"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedCreateInput_1 = require("../../../inputs/AddressUncheckedCreateInput");
let CreateOneAddressArgs = exports.CreateOneAddressArgs = class CreateOneAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateInput_1.AddressUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateInput_1.AddressUncheckedCreateInput)
], CreateOneAddressArgs.prototype, "data", void 0);
exports.CreateOneAddressArgs = CreateOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneAddressArgs);
