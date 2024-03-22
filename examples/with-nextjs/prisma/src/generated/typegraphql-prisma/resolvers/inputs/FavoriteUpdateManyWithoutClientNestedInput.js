"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUpdateManyWithoutClientNestedInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyClientInputEnvelope_1 = require("../inputs/FavoriteCreateManyClientInputEnvelope");
const FavoriteCreateOrConnectWithoutClientInput_1 = require("../inputs/FavoriteCreateOrConnectWithoutClientInput");
const FavoriteCreateWithoutClientInput_1 = require("../inputs/FavoriteCreateWithoutClientInput");
const FavoriteScalarWhereInput_1 = require("../inputs/FavoriteScalarWhereInput");
const FavoriteUpdateManyWithWhereWithoutClientInput_1 = require("../inputs/FavoriteUpdateManyWithWhereWithoutClientInput");
const FavoriteUpdateWithWhereUniqueWithoutClientInput_1 = require("../inputs/FavoriteUpdateWithWhereUniqueWithoutClientInput");
const FavoriteUpsertWithWhereUniqueWithoutClientInput_1 = require("../inputs/FavoriteUpsertWithWhereUniqueWithoutClientInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUpdateManyWithoutClientNestedInput = exports.FavoriteUpdateManyWithoutClientNestedInput = class FavoriteUpdateManyWithoutClientNestedInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateWithoutClientInput_1.FavoriteCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutClientInput_1.FavoriteCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpsertWithWhereUniqueWithoutClientInput_1.FavoriteUpsertWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateManyClientInputEnvelope_1.FavoriteCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateManyClientInputEnvelope_1.FavoriteCreateManyClientInputEnvelope)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "set", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpdateWithWhereUniqueWithoutClientInput_1.FavoriteUpdateWithWhereUniqueWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteUpdateManyWithWhereWithoutClientInput_1.FavoriteUpdateManyWithWhereWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "updateMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteScalarWhereInput_1.FavoriteScalarWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUpdateManyWithoutClientNestedInput.prototype, "deleteMany", void 0);
exports.FavoriteUpdateManyWithoutClientNestedInput = FavoriteUpdateManyWithoutClientNestedInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUpdateManyWithoutClientNestedInput", {})
], FavoriteUpdateManyWithoutClientNestedInput);
