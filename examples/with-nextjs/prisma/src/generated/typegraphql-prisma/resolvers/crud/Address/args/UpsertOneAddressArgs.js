"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertOneAddressArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressUncheckedCreateInput_1 = require("../../../inputs/AddressUncheckedCreateInput");
const AddressUncheckedUpdateInput_1 = require("../../../inputs/AddressUncheckedUpdateInput");
const AddressWhereUniqueInput_1 = require("../../../inputs/AddressWhereUniqueInput");
let UpsertOneAddressArgs = exports.UpsertOneAddressArgs = class UpsertOneAddressArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressWhereUniqueInput_1.AddressWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressWhereUniqueInput_1.AddressWhereUniqueInput)
], UpsertOneAddressArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedCreateInput_1.AddressUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedCreateInput_1.AddressUncheckedCreateInput)
], UpsertOneAddressArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressUncheckedUpdateInput_1.AddressUncheckedUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AddressUncheckedUpdateInput_1.AddressUncheckedUpdateInput)
], UpsertOneAddressArgs.prototype, "update", void 0);
exports.UpsertOneAddressArgs = UpsertOneAddressArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertOneAddressArgs);
