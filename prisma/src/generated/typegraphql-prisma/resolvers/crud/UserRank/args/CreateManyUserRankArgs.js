"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyUserRankArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankCreateManyInput_1 = require("../../../inputs/UserRankCreateManyInput");
let CreateManyUserRankArgs = class CreateManyUserRankArgs {
};
exports.CreateManyUserRankArgs = CreateManyUserRankArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [UserRankCreateManyInput_1.UserRankCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyUserRankArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyUserRankArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyUserRankArgs = CreateManyUserRankArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyUserRankArgs);
