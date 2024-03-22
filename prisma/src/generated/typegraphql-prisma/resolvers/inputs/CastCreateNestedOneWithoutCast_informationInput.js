"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutCast_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutCast_informationInput_1 = require("../inputs/CastCreateOrConnectWithoutCast_informationInput");
const CastUncheckedCreateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutCast_informationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutCast_informationInput = class CastCreateNestedOneWithoutCast_informationInput {
};
exports.CastCreateNestedOneWithoutCast_informationInput = CastCreateNestedOneWithoutCast_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput)
], CastCreateNestedOneWithoutCast_informationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutCast_informationInput_1.CastCreateOrConnectWithoutCast_informationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutCast_informationInput_1.CastCreateOrConnectWithoutCast_informationInput)
], CastCreateNestedOneWithoutCast_informationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutCast_informationInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutCast_informationInput = CastCreateNestedOneWithoutCast_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutCast_informationInput", {})
], CastCreateNestedOneWithoutCast_informationInput);
