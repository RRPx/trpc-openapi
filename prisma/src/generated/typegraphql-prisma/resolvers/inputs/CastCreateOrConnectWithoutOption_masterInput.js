"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutOption_masterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutOption_masterInput_1 = require("../inputs/CastUncheckedCreateWithoutOption_masterInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutOption_masterInput = class CastCreateOrConnectWithoutOption_masterInput {
};
exports.CastCreateOrConnectWithoutOption_masterInput = CastCreateOrConnectWithoutOption_masterInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutOption_masterInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutOption_masterInput_1.CastUncheckedCreateWithoutOption_masterInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutOption_masterInput_1.CastUncheckedCreateWithoutOption_masterInput)
], CastCreateOrConnectWithoutOption_masterInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutOption_masterInput = CastCreateOrConnectWithoutOption_masterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutOption_masterInput", {})
], CastCreateOrConnectWithoutOption_masterInput);
