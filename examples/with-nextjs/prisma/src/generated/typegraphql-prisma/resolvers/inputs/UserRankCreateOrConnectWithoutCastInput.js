"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankCreateOrConnectWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankUncheckedCreateWithoutCastInput_1 = require("../inputs/UserRankUncheckedCreateWithoutCastInput");
const UserRankWhereUniqueInput_1 = require("../inputs/UserRankWhereUniqueInput");
let UserRankCreateOrConnectWithoutCastInput = exports.UserRankCreateOrConnectWithoutCastInput = class UserRankCreateOrConnectWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], UserRankCreateOrConnectWithoutCastInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput)
], UserRankCreateOrConnectWithoutCastInput.prototype, "create", void 0);
exports.UserRankCreateOrConnectWithoutCastInput = UserRankCreateOrConnectWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankCreateOrConnectWithoutCastInput", {})
], UserRankCreateOrConnectWithoutCastInput);
