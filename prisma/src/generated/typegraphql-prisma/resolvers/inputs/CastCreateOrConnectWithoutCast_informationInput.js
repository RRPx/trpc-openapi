"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutCast_informationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutCast_informationInput_1 = require("../inputs/CastUncheckedCreateWithoutCast_informationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutCast_informationInput = class CastCreateOrConnectWithoutCast_informationInput {
};
exports.CastCreateOrConnectWithoutCast_informationInput = CastCreateOrConnectWithoutCast_informationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutCast_informationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutCast_informationInput_1.CastUncheckedCreateWithoutCast_informationInput)
], CastCreateOrConnectWithoutCast_informationInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutCast_informationInput = CastCreateOrConnectWithoutCast_informationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutCast_informationInput", {})
], CastCreateOrConnectWithoutCast_informationInput);
