"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateManyClientInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyClientInput_1 = require("../inputs/FavoriteCreateManyClientInput");
let FavoriteCreateManyClientInputEnvelope = class FavoriteCreateManyClientInputEnvelope {
};
exports.FavoriteCreateManyClientInputEnvelope = FavoriteCreateManyClientInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateManyClientInput_1.FavoriteCreateManyClientInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteCreateManyClientInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateManyClientInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FavoriteCreateManyClientInputEnvelope = FavoriteCreateManyClientInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateManyClientInputEnvelope", {})
], FavoriteCreateManyClientInputEnvelope);
