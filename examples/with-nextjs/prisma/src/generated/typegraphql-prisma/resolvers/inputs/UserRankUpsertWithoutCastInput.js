"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankUpsertWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedCreateWithoutCastInput_1 = require("../inputs/UserRankUncheckedCreateWithoutCastInput");
const UserRankUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserRankUncheckedUpdateWithoutCastInput");
const UserRankWhereInput_1 = require("../inputs/UserRankWhereInput");
let UserRankUpsertWithoutCastInput = exports.UserRankUpsertWithoutCastInput = class UserRankUpsertWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput)
], UserRankUpsertWithoutCastInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput)
], UserRankUpsertWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], UserRankUpsertWithoutCastInput.prototype, "where", void 0);
exports.UserRankUpsertWithoutCastInput = UserRankUpsertWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankUpsertWithoutCastInput", {})
], UserRankUpsertWithoutCastInput);
