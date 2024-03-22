"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationCreateNestedOneWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationCreateOrConnectWithoutCastInput_1 = require("../inputs/CastInformationCreateOrConnectWithoutCastInput");
const CastInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedCreateWithoutCastInput");
const CastInformationWhereUniqueInput_1 = require("../inputs/CastInformationWhereUniqueInput");
let CastInformationCreateNestedOneWithoutCastInput = exports.CastInformationCreateNestedOneWithoutCastInput = class CastInformationCreateNestedOneWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput)
], CastInformationCreateNestedOneWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCreateOrConnectWithoutCastInput_1.CastInformationCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCreateOrConnectWithoutCastInput_1.CastInformationCreateOrConnectWithoutCastInput)
], CastInformationCreateNestedOneWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], CastInformationCreateNestedOneWithoutCastInput.prototype, "connect", void 0);
exports.CastInformationCreateNestedOneWithoutCastInput = CastInformationCreateNestedOneWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationCreateNestedOneWithoutCastInput", {})
], CastInformationCreateNestedOneWithoutCastInput);
