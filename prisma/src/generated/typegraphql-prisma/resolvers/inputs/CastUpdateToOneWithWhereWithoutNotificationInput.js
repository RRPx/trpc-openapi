"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUpdateToOneWithWhereWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedUpdateWithoutNotificationInput_1 = require("../inputs/CastUncheckedUpdateWithoutNotificationInput");
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastUpdateToOneWithWhereWithoutNotificationInput = class CastUpdateToOneWithWhereWithoutNotificationInput {
};
exports.CastUpdateToOneWithWhereWithoutNotificationInput = CastUpdateToOneWithWhereWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastUpdateToOneWithWhereWithoutNotificationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedUpdateWithoutNotificationInput_1.CastUncheckedUpdateWithoutNotificationInput)
], CastUpdateToOneWithWhereWithoutNotificationInput.prototype, "data", void 0);
exports.CastUpdateToOneWithWhereWithoutNotificationInput = CastUpdateToOneWithWhereWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastUpdateToOneWithWhereWithoutNotificationInput", {})
], CastUpdateToOneWithWhereWithoutNotificationInput);
