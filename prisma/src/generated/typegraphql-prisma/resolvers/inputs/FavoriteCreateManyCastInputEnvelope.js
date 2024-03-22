"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteCreateManyCastInputEnvelope = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteCreateManyCastInput_1 = require("../inputs/FavoriteCreateManyCastInput");
let FavoriteCreateManyCastInputEnvelope = class FavoriteCreateManyCastInputEnvelope {
};
exports.FavoriteCreateManyCastInputEnvelope = FavoriteCreateManyCastInputEnvelope;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [FavoriteCreateManyCastInput_1.FavoriteCreateManyCastInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], FavoriteCreateManyCastInputEnvelope.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], FavoriteCreateManyCastInputEnvelope.prototype, "skipDuplicates", void 0);
exports.FavoriteCreateManyCastInputEnvelope = FavoriteCreateManyCastInputEnvelope = tslib_1.__decorate([
    TypeGraphQL.InputType("FavoriteCreateManyCastInputEnvelope", {})
], FavoriteCreateManyCastInputEnvelope);
