"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteUncheckedCreateNestedManyWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyCastInputEnvelope_1 = require("../inputs/FavoriteCreateManyCastInputEnvelope");
const FavoriteCreateOrConnectWithoutCastInput_1 = require("../inputs/FavoriteCreateOrConnectWithoutCastInput");
const FavoriteCreateWithoutCastInput_1 = require("../inputs/FavoriteCreateWithoutCastInput");
const FavoriteWhereUniqueInput_1 = require("../inputs/FavoriteWhereUniqueInput");
let FavoriteUncheckedCreateNestedManyWithoutCastInput = class FavoriteUncheckedCreateNestedManyWithoutCastInput {
};
exports.FavoriteUncheckedCreateNestedManyWithoutCastInput = FavoriteUncheckedCreateNestedManyWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateWithoutCastInput_1.FavoriteCreateWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUncheckedCreateNestedManyWithoutCastInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateOrConnectWithoutCastInput_1.FavoriteCreateOrConnectWithoutCastInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUncheckedCreateNestedManyWithoutCastInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteCreateManyCastInputEnvelope_1.FavoriteCreateManyCastInputEnvelope, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteCreateManyCastInputEnvelope_1.FavoriteCreateManyCastInputEnvelope)
], FavoriteUncheckedCreateNestedManyWithoutCastInput.prototype, "createMany", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteWhereUniqueInput_1.FavoriteWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteUncheckedCreateNestedManyWithoutCastInput.prototype, "connect", void 0);
exports.FavoriteUncheckedCreateNestedManyWithoutCastInput = FavoriteUncheckedCreateNestedManyWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteUncheckedCreateNestedManyWithoutCastInput", {})
], FavoriteUncheckedCreateNestedManyWithoutCastInput);
