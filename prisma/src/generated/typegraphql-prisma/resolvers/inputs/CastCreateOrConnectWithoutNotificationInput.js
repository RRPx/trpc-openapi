"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateOrConnectWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateWithoutNotificationInput_1 = require("../inputs/CastUncheckedCreateWithoutNotificationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateOrConnectWithoutNotificationInput = class CastCreateOrConnectWithoutNotificationInput {
};
exports.CastCreateOrConnectWithoutNotificationInput = CastCreateOrConnectWithoutNotificationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateOrConnectWithoutNotificationInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput)
], CastCreateOrConnectWithoutNotificationInput.prototype, "create", void 0);
exports.CastCreateOrConnectWithoutNotificationInput = CastCreateOrConnectWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateOrConnectWithoutNotificationInput", {})
], CastCreateOrConnectWithoutNotificationInput);
