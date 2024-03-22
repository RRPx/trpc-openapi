"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankUpdateToOneWithWhereWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserRankUncheckedUpdateWithoutCastInput");
const UserRankWhereInput_1 = require("../inputs/UserRankWhereInput");
let UserRankUpdateToOneWithWhereWithoutCastInput = exports.UserRankUpdateToOneWithWhereWithoutCastInput = class UserRankUpdateToOneWithWhereWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereInput_1.UserRankWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereInput_1.UserRankWhereInput)
], UserRankUpdateToOneWithWhereWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput)
], UserRankUpdateToOneWithWhereWithoutCastInput.prototype, "data", void 0);
exports.UserRankUpdateToOneWithWhereWithoutCastInput = UserRankUpdateToOneWithWhereWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankUpdateToOneWithWhereWithoutCastInput", {})
], UserRankUpdateToOneWithWhereWithoutCastInput);
