"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateNestedManyWithoutClientInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyClientInputEnvelope_1 = require("../inputs/FavoriteCreateManyClientInputEnvelope");
const FavoriteCreateOrConnectWithoutClientInput_1 = require("../inputs/FavoriteCreateOrConnectWithoutClientInput");
const FavoriteCreateWithoutClientInput_1 = require("../inputs/FavoriteCreateWithoutClientInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteCreateNestedManyWithoutClientInput = class FavoriteCreateNestedManyWithoutClientInput {
};
exports.FavoriteCreateNestedManyWithoutClientInput = FavoriteCreateNestedManyWithoutClientInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateWithoutClientInput_1.FavoriteCreateWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteCreateNestedManyWithoutClientInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutClientInput_1.FavoriteCreateOrConnectWithoutClientInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteCreateNestedManyWithoutClientInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateManyClientInputEnvelope_1.FavoriteCreateManyClientInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateManyClientInputEnvelope_1.FavoriteCreateManyClientInputEnvelope)
], FavoriteCreateNestedManyWithoutClientInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteCreateNestedManyWithoutClientInput.prototype, "connect", void 0);
exports.FavoriteCreateNestedManyWithoutClientInput = FavoriteCreateNestedManyWithoutClientInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateNestedManyWithoutClientInput", {})
], FavoriteCreateNestedManyWithoutClientInput);
