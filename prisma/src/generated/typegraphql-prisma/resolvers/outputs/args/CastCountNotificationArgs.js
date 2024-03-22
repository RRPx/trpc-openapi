"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCountNotificationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const NotificationWhereInput_1 = require("../../inputs/NotificationWhereInput");
let CastCountNotificationArgs = class CastCountNotificationArgs {
};
exports.CastCountNotificationArgs = CastCountNotificationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationWhereInput_1.NotificationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationWhereInput_1.NotificationWhereInput)
], CastCountNotificationArgs.prototype, "where", void 0);
exports.CastCountNotificationArgs = CastCountNotificationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastCountNotificationArgs);
