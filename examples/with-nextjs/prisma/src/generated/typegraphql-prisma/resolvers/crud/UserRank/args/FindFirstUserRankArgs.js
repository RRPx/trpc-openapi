"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankOrderByWithRelationInput_1 = require("../../../inputs/UserRankOrderByWithRelationInput");
const UserRankWhereInput_1 = require("../../../inputs/UserRankWhereInput");
const UserRankWhereUniqueInput_1 = require("../../../inputs/UserRankWhereUniqueInput");
const UserRankScalarFieldEnum_1 = require("../../../../enums/UserRankScalarFieldEnum");
let FindFirstUserRankArgs = exports.FindFirstUserRankArgs = class FindFirstUserRankArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], FindFirstUserRankArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankOrderByWithRelationInput_1.UserRankOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserRankArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], FindFirstUserRankArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserRankArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstUserRankArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankScalarFieldEnum_1.UserRankScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstUserRankArgs.prototype, "distinct", void 0);
exports.FindFirstUserRankArgs = FindFirstUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstUserRankArgs);
