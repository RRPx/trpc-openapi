"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedUpdateManyInput_1 = require("../../../inputs/AddressUncheckedUpdateManyInput");
const AddressWhereInput_1 = require("../../../inputs/AddressWhereInput");
let UpdateManyAddressArgs = class UpdateManyAddressArgs {
};
exports.UpdateManyAddressArgs = UpdateManyAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateManyInput_1.AddressUncheckedUpdateManyInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateManyInput_1.AddressUncheckedUpdateManyInput)
], UpdateManyAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereInput_1.AddressWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressWhereInput_1.AddressWhereInput)
], UpdateManyAddressArgs.prototype, "where", void 0);
exports.UpdateManyAddressArgs = UpdateManyAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAddressArgs);
