"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedUpdateInput_1 = require("../../../inputs/AddressUncheckedUpdateInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let UpdateOneAddressArgs = class UpdateOneAddressArgs {
};
exports.UpdateOneAddressArgs = UpdateOneAddressArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateInput_1.AddressUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateInput_1.AddressUncheckedUpdateInput)
], UpdateOneAddressArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], UpdateOneAddressArgs.prototype, "where", void 0);
exports.UpdateOneAddressArgs = UpdateOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateOneAddressArgs);
