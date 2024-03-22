"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastCreateNestedOneWithoutNotificationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateOrConnectWithoutNotificationInput_1 = require("../inputs/CastCreateOrConnectWithoutNotificationInput");
const CastUncheckedCreateWithoutNotificationInput_1 = require("../inputs/CastUncheckedCreateWithoutNotificationInput");
const CastWhereUniqueInput_1 = require("../inputs/CastWhereUniqueInput");
let CastCreateNestedOneWithoutNotificationInput = exports.CastCreateNestedOneWithoutNotificationInput = class CastCreateNestedOneWithoutNotificationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateWithoutNotificationInput_1.CastUncheckedCreateWithoutNotificationInput)
], CastCreateNestedOneWithoutNotificationInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateOrConnectWithoutNotificationInput_1.CastCreateOrConnectWithoutNotificationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateOrConnectWithoutNotificationInput_1.CastCreateOrConnectWithoutNotificationInput)
], CastCreateNestedOneWithoutNotificationInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], CastCreateNestedOneWithoutNotificationInput.prototype, "connect", void 0);
exports.CastCreateNestedOneWithoutNotificationInput = CastCreateNestedOneWithoutNotificationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastCreateNestedOneWithoutNotificationInput", {})
], CastCreateNestedOneWithoutNotificationInput);
