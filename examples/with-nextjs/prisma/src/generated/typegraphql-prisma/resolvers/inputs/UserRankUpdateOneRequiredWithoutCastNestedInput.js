"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankUpdateOneRequiredWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const UserRankCreateOrConnectWithoutCastInput_1 = require("../inputs/UserRankCreateOrConnectWithoutCastInput");
const UserRankUncheckedCreateWithoutCastInput_1 = require("../inputs/UserRankUncheckedCreateWithoutCastInput");
const UserRankUncheckedUpdateWithoutCastInput_1 = require("../inputs/UserRankUncheckedUpdateWithoutCastInput");
const UserRankUpsertWithoutCastInput_1 = require("../inputs/UserRankUpsertWithoutCastInput");
const UserRankWhereUniqueInput_1 = require("../inputs/UserRankWhereUniqueInput");
let UserRankUpdateOneRequiredWithoutCastNestedInput = exports.UserRankUpdateOneRequiredWithoutCastNestedInput = class UserRankUpdateOneRequiredWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedCreateWithoutCastInput_1.UserRankUncheckedCreateWithoutCastInput)
], UserRankUpdateOneRequiredWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankCreateOrConnectWithoutCastInput_1.UserRankCreateOrConnectWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankCreateOrConnectWithoutCastInput_1.UserRankCreateOrConnectWithoutCastInput)
], UserRankUpdateOneRequiredWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUpsertWithoutCastInput_1.UserRankUpsertWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUpsertWithoutCastInput_1.UserRankUpsertWithoutCastInput)
], UserRankUpdateOneRequiredWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankWhereUniqueInput_1.UserRankWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankWhereUniqueInput_1.UserRankWhereUniqueInput)
], UserRankUpdateOneRequiredWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankUncheckedUpdateWithoutCastInput_1.UserRankUncheckedUpdateWithoutCastInput)
], UserRankUpdateOneRequiredWithoutCastNestedInput.prototype, "update", void 0);
exports.UserRankUpdateOneRequiredWithoutCastNestedInput = UserRankUpdateOneRequiredWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankUpdateOneRequiredWithoutCastNestedInput", {})
], UserRankUpdateOneRequiredWithoutCastNestedInput);
