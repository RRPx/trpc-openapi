"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateOneWithoutNotificationNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutNotificationInput_1 = require("../inputs/CastCreateOrConnectWithoutNotificationInput");
const CastUncheckedCreateWithoutNotificationInput_1 = require("../inputs/CastUncheckedCreateWithoutNotificationInput");
const CastUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/CastUncheckedUpdateWithoutNotificationInput");
const CastUpsertWithoutNotificationInput_1 = require("../inputs/CastUpsertWithoutNotificationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastUpdateOneWithoutNotificationNestedInput = exports.CastUpdateOneWithoutNotificationNestedInput = class CastUpdateOneWithoutNotificationNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutNotificationInput_1.CastCreateOrConnectWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutNotificationInput_1.CastCreateOrConnectWithoutNotificationInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUpsertWithoutNotificationInput_1.CastUpsertWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUpsertWithoutNotificationInput_1.CastUpsertWithoutNotificationInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput)
], CastUpdateOneWithoutNotificationNestedInput.prototype, "update", void 0);
exports.CastUpdateOneWithoutNotificationNestedInput = CastUpdateOneWithoutNotificationNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateOneWithoutNotificationNestedInput", {})
], CastUpdateOneWithoutNotificationNestedInput);
