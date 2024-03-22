"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedUpdateManyWithoutUser_rankNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateManyUser_rankInputEnvelope_1 = require("../inputs/CastCreateManyUser_rankInputEnvelope");
const CastCreateOrConnectWithoutUser_rankInput_1 = require("../inputs/CastCreateOrConnectWithoutUser_rankInput");
const CastCreateWithoutUser_rankInput_1 = require("../inputs/CastCreateWithoutUser_rankInput");
const CastScalarWhereInput_1 = require("../inputs/CastScalarWhereInput");
const CastUpdateManyWithWhereWithoutUser_rankInput_1 = require("../inputs/CastUpdateManyWithWhereWithoutUser_rankInput");
const CastUpdateWithWhereUniqueWithoutUser_rankInput_1 = require("../inputs/CastUpdateWithWhereUniqueWithoutUser_rankInput");
const CastUpsertWithWhereUniqueWithoutUser_rankInput_1 = require("../inputs/CastUpsertWithWhereUniqueWithoutUser_rankInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUncheckedUpdateManyWithoutUser_rankNestedInput = exports.CastUncheckedUpdateManyWithoutUser_rankNestedInput = class CastUncheckedUpdateManyWithoutUser_rankNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateWithoutUser_rankInput_1.CastCreateWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateOrConnectWithoutUser_rankInput_1.CastCreateOrConnectWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpsertWithWhereUniqueWithoutUser_rankInput_1.CastUpsertWithWhereUniqueWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateManyUser_rankInputEnvelope_1.CastCreateManyUser_rankInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateManyUser_rankInputEnvelope_1.CastCreateManyUser_rankInputEnvelope)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpdateWithWhereUniqueWithoutUser_rankInput_1.CastUpdateWithWhereUniqueWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpdateManyWithWhereWithoutUser_rankInput_1.CastUpdateManyWithWhereWithoutUser_rankInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereInput_1.CastScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutUser_rankNestedInput.prototype, "deleteMany", void 0);
exports.CastUncheckedUpdateManyWithoutUser_rankNestedInput = CastUncheckedUpdateManyWithoutUser_rankNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedUpdateManyWithoutUser_rankNestedInput", {})
], CastUncheckedUpdateManyWithoutUser_rankNestedInput);
