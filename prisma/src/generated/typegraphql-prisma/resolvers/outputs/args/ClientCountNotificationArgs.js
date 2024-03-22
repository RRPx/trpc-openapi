"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientCountNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereInput_1 = require("../../inputs/NotificationWhereInput");
let ClientCountNotificationArgs = class ClientCountNotificationArgs {
};
exports.ClientCountNotificationArgs = ClientCountNotificationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], ClientCountNotificationArgs.prototype, "where", void 0);
exports.ClientCountNotificationArgs = ClientCountNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ClientCountNotificationArgs);
