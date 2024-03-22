"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationUpdateOneWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationCreateOrConnectWithoutCastInput_1 = require("../inputs/CastInformationCreateOrConnectWithoutCastInput");
const CastInformationUncheckedCreateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedCreateWithoutCastInput");
const CastInformationUncheckedUpdateWithoutCastInput_1 = require("../inputs/CastInformationUncheckedUpdateWithoutCastInput");
const CastInformationUpsertWithoutCastInput_1 = require("../inputs/CastInformationUpsertWithoutCastInput");
const CastInformationWhereInput_1 = require("../inputs/CastInformationWhereInput");
const CastInformationWhereUniqueInput_1 = require("../inputs/CastInformationWhereUniqueInput");
let CastInformationUpdateOneWithoutCastNestedInput = class CastInformationUpdateOneWithoutCastNestedInput {
};
exports.CastInformationUpdateOneWithoutCastNestedInput = CastInformationUpdateOneWithoutCastNestedInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedCreateWithoutCastInput_1.CastInformationUncheckedCreateWithoutCastInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCreateOrConnectWithoutCastInput_1.CastInformationCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCreateOrConnectWithoutCastInput_1.CastInformationCreateOrConnectWithoutCastInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUpsertWithoutCastInput_1.CastInformationUpsertWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUpsertWithoutCastInput_1.CastInformationUpsertWithoutCastInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationUncheckedUpdateWithoutCastInput_1.CastInformationUncheckedUpdateWithoutCastInput)
], CastInformationUpdateOneWithoutCastNestedInput.prototype, "update", void 0);
exports.CastInformationUpdateOneWithoutCastNestedInput = CastInformationUpdateOneWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationUpdateOneWithoutCastNestedInput", {})
], CastInformationUpdateOneWithoutCastNestedInput);
