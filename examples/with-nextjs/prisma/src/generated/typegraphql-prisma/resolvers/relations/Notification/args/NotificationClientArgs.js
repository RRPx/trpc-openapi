"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let NotificationClientArgs = exports.NotificationClientArgs = class NotificationClientArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], NotificationClientArgs.prototype, "where", void 0);
exports.NotificationClientArgs = NotificationClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], NotificationClientArgs);
