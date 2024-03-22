"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedCreateWithoutCastInput");
const CastInformationWhereUniqueInput_1 = require("../inputs/CastInformationWhereUniqueInput");
let CastInformationCreateOrConnectWithoutCastInput = class CastInformationCreateOrConnectWithoutCastInput {
};
exports.CastInformationCreateOrConnectWithoutCastInput = CastInformationCreateOrConnectWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], CastInformationCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput)
], CastInformationCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.CastInformationCreateOrConnectWithoutCastInput = CastInformationCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationCreateOrConnectWithoutCastInput", {})
], CastInformationCreateOrConnectWithoutCastInput);
