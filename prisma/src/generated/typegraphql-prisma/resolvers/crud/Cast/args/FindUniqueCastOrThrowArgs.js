"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereUniqueInput_1 = require("../../../inputs/CastWhereUniqueInput");
let FindUniqueCastOrThrowArgs = class FindUniqueCastOrThrowArgs {
};
exports.FindUniqueCastOrThrowArgs = FindUniqueCastOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], FindUniqueCastOrThrowArgs.prototype, "where", void 0);
exports.FindUniqueCastOrThrowArgs = FindUniqueCastOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCastOrThrowArgs);
