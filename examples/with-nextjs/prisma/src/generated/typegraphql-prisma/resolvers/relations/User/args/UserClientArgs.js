"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserClientArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientWhereInput_1 = require("../../../inputs/ClientWhereInput");
let UserClientArgs = exports.UserClientArgs = class UserClientArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientWhereInput_1.ClientWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientWhereInput_1.ClientWhereInput)
], UserClientArgs.prototype, "where", void 0);
exports.UserClientArgs = UserClientArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserClientArgs);
