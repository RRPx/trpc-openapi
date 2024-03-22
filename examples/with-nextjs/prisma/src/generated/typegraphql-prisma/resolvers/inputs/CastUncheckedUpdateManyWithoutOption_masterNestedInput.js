"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUncheckedUpdateManyWithoutOption_masterNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutOption_masterInput_1 = require("../inputs/CastCreateOrConnectWithoutOption_masterInput");
const CastCreateWithoutOption_masterInput_1 = require("../inputs/CastCreateWithoutOption_masterInput");
const CastScalarWhereInput_1 = require("../inputs/CastScalarWhereInput");
const CastUpdateManyWithWhereWithoutOption_masterInput_1 = require("../inputs/CastUpdateManyWithWhereWithoutOption_masterInput");
const CastUpdateWithWhereUniqueWithoutOption_masterInput_1 = require("../inputs/CastUpdateWithWhereUniqueWithoutOption_masterInput");
const CastUpsertWithWhereUniqueWithoutOption_masterInput_1 = require("../inputs/CastUpsertWithWhereUniqueWithoutOption_masterInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUncheckedUpdateManyWithoutOption_masterNestedInput = exports.CastUncheckedUpdateManyWithoutOption_masterNestedInput = class CastUncheckedUpdateManyWithoutOption_masterNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateWithoutOption_masterInput_1.CastCreateWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastCreateOrConnectWithoutOption_masterInput_1.CastCreateOrConnectWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpsertWithWhereUniqueWithoutOption_masterInput_1.CastUpsertWithWhereUniqueWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastWhereUniqueInput_1.CastWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpdateWithWhereUniqueWithoutOption_masterInput_1.CastUpdateWithWhereUniqueWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastUpdateManyWithWhereWithoutOption_masterInput_1.CastUpdateManyWithWhereWithoutOption_masterInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarWhereInput_1.CastScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastUncheckedUpdateManyWithoutOption_masterNestedInput.prototype, "deleteMany", void 0);
exports.CastUncheckedUpdateManyWithoutOption_masterNestedInput = CastUncheckedUpdateManyWithoutOption_masterNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUncheckedUpdateManyWithoutOption_masterNestedInput", {})
], CastUncheckedUpdateManyWithoutOption_masterNestedInput);
