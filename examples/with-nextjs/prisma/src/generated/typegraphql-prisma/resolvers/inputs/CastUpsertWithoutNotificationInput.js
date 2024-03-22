"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpsertWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutNotificationInput_1 = require("../inputs/CastUncheckedCreateWithoutNotificationInput");
const CastUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/CastUncheckedUpdateWithoutNotificationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpsertWithoutNotificationInput = exports.CastUpsertWithoutNotificationInput = class CastUpsertWithoutNotificationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput)
], CastUpsertWithoutNotificationInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput)
], CastUpsertWithoutNotificationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpsertWithoutNotificationInput.prototype, "where", void 0);
exports.CastUpsertWithoutNotificationInput = CastUpsertWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpsertWithoutNotificationInput", {})
], CastUpsertWithoutNotificationInput);
