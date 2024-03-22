"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereInput_1 = require("../../../inputs/CastWhereInput");
let NotificationCastArgs = class NotificationCastArgs {
};
exports.NotificationCastArgs = NotificationCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], NotificationCastArgs.prototype, "where", void 0);
exports.NotificationCastArgs = NotificationCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], NotificationCastArgs);
