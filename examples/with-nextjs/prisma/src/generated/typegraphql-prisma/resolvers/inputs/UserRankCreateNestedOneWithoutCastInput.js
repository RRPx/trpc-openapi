"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankCreateNestedOneWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankCreateOrConnectWithoutCastInput_1 = require("../inputs/UserRankCreateOrConnectWithoutCastInput");
const UserRankUncheckedCreateWithoutCastInput_1 = require("../inputs/UserRankUncheckedCreateWithoutCastInput");
const UserRankWhereUniqueInput_1 = require("../inputs/UserRankWhereUniqueInput");
let UserRankCreateNestedOneWithoutCastInput = exports.UserRankCreateNestedOneWithoutCastInput = class UserRankCreateNestedOneWithoutCastInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput)
], UserRankCreateNestedOneWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCreateOrConnectWithoutCastInput_1.UserRankCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankCreateOrConnectWithoutCastInput_1.UserRankCreateOrConnectWithoutCastInput)
], UserRankCreateNestedOneWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], UserRankCreateNestedOneWithoutCastInput.prototype, "connect", void 0);
exports.UserRankCreateNestedOneWithoutCastInput = UserRankCreateNestedOneWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankCreateNestedOneWithoutCastInput", {})
], UserRankCreateNestedOneWithoutCastInput);
