"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateManyWithoutCastNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyCastInputEnvelope_1 = require("../inputs/FavoriteCreateManyCastInputEnvelope");
const FavoriteCreateOrConnectWithoutCastInput_1 = require("../inputs/FavoriteCreateOrConnectWithoutCastInput");
const FavoriteCreateWithoutCastInput_1 = require("../inputs/FavoriteCreateWithoutCastInput");
const FavoriteScalarWhereInput_1 = require("../inputs/FavoriteScalarWhereInput");
const FavoriteUpdateManyWithWhereWithoutCastInput_1 = require("../inputs/FavoriteUpdateManyWithWhereWithoutCastInput");
const FavoriteUpdateWithWhereUniqueWithoutCastInput_1 = require("../inputs/FavoriteUpdateWithWhereUniqueWithoutCastInput");
const FavoriteUpsertWithWhereUniqueWithoutCastInput_1 = require("../inputs/FavoriteUpsertWithWhereUniqueWithoutCastInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpdateManyWithoutCastNestedInput = exports.FavoriteUpdateManyWithoutCastNestedInput = class FavoriteUpdateManyWithoutCastNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateWithoutCastInput_1.FavoriteCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutCastInput_1.FavoriteCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpsertWithWhereUniqueWithoutCastInput_1.FavoriteUpsertWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateManyCastInputEnvelope_1.FavoriteCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateManyCastInputEnvelope_1.FavoriteCreateManyCastInputEnvelope)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpdateWithWhereUniqueWithoutCastInput_1.FavoriteUpdateWithWhereUniqueWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpdateManyWithWhereWithoutCastInput_1.FavoriteUpdateManyWithWhereWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteScalarWhereInput_1.FavoriteScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutCastNestedInput.prototype, "deleteMany", void 0);
exports.FavoriteUpdateManyWithoutCastNestedInput = FavoriteUpdateManyWithoutCastNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateManyWithoutCastNestedInput", {})
], FavoriteUpdateManyWithoutCastNestedInput);
