"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastUserArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserWhereInput_1 = require("../../../inputs/UserWhereInput");
let CastUserArgs = class CastUserArgs {
};
exports.CastUserArgs = CastUserArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserWhereInput_1.UserWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserWhereInput_1.UserWhereInput)
], CastUserArgs.prototype, "where", void 0);
exports.CastUserArgs = CastUserArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CastUserArgs);
