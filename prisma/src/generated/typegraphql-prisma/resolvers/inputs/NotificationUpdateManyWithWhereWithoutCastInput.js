"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUncheckedUpdateManyWithoutCastInput_1 = require("../inputs/NotificationUncheckedUpdateManyWithoutCastInput");
let NotificationUpdateManyWithWhereWithoutCastInput = class NotificationUpdateManyWithWhereWithoutCastInput {
};
exports.NotificationUpdateManyWithWhereWithoutCastInput = NotificationUpdateManyWithWhereWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationScalarWhereInput_1.NotificationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationScalarWhereInput_1.NotificationScalarWhereInput)
], NotificationUpdateManyWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutCastInput_1.NotificationUncheckedUpdateManyWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutCastInput_1.NotificationUncheckedUpdateManyWithoutCastInput)
], NotificationUpdateManyWithWhereWithoutCastInput.prototype, "data", void 0);
exports.NotificationUpdateManyWithWhereWithoutCastInput = NotificationUpdateManyWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithWhereWithoutCastInput", {})
], NotificationUpdateManyWithWhereWithoutCastInput);
