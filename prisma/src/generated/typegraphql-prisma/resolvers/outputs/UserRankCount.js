"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankCountCastArgs_1 = require("./args/UserRankCountCastArgs");
let UserRankCount = class UserRankCount {
    getCast(root, args) {
        return root.cast;
    }
};
exports.UserRankCount = UserRankCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "cast",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [UserRankCount, UserRankCountCastArgs_1.UserRankCountCastArgs]),
    tslib_1.__metadata("design:returntype", Number)
], UserRankCount.prototype, "getCast", null);
exports.UserRankCount = UserRankCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("UserRankCount", {})
], UserRankCount);
