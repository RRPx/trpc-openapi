"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationUncheckedCreateInput_1 = require("../../../inputs/NotificationUncheckedCreateInput");
let CreateOneNotificationArgs = exports.CreateOneNotificationArgs = class CreateOneNotificationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationUncheckedCreateInput_1.NotificationUncheckedCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", NotificationUncheckedCreateInput_1.NotificationUncheckedCreateInput)
], CreateOneNotificationArgs.prototype, "data", void 0);
exports.CreateOneNotificationArgs = CreateOneNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateOneNotificationArgs);
