"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationUpdateManyWithWhereWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationScalarWhereInput_1 = require("../inputs/NotificationScalarWhereInput");
const NotificationUncheckedUpdateManyWithoutClientInput_1 = require("../inputs/NotificationUncheckedUpdateManyWithoutClientInput");
let NotificationUpdateManyWithWhereWithoutClientInput = class NotificationUpdateManyWithWhereWithoutClientInput {
};
exports.NotificationUpdateManyWithWhereWithoutClientInput = NotificationUpdateManyWithWhereWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationScalarWhereInput_1.NotificationScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationScalarWhereInput_1.NotificationScalarWhereInput)
], NotificationUpdateManyWithWhereWithoutClientInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedUpdateManyWithoutClientInput_1.NotificationUncheckedUpdateManyWithoutClientInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedUpdateManyWithoutClientInput_1.NotificationUncheckedUpdateManyWithoutClientInput)
], NotificationUpdateManyWithWhereWithoutClientInput.prototype, "data", void 0);
exports.NotificationUpdateManyWithWhereWithoutClientInput = NotificationUpdateManyWithWhereWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("NotificationUpdateManyWithWhereWithoutClientInput", {})
], NotificationUpdateManyWithWhereWithoutClientInput);
