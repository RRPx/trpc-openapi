"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereUniqueInput_1 = require("../../../inputs/CastWhereUniqueInput");
let FindUniqueCastArgs = exports.FindUniqueCastArgs = class FindUniqueCastArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], FindUniqueCastArgs.prototype, "where", void 0);
exports.FindUniqueCastArgs = FindUniqueCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindUniqueCastArgs);
