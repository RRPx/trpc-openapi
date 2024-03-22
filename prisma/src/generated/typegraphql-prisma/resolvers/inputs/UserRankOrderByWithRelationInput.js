"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByRelationAggregateInput_1 = require("../inputs/CastOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let UserRankOrderByWithRelationInput = class UserRankOrderByWithRelationInput {
};
exports.UserRankOrderByWithRelationInput = UserRankOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserRankOrderByWithRelationInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], UserRankOrderByWithRelationInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByRelationAggregateInput_1.CastOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByRelationAggregateInput_1.CastOrderByRelationAggregateInput)
], UserRankOrderByWithRelationInput.prototype, "cast", void 0);
exports.UserRankOrderByWithRelationInput = UserRankOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankOrderByWithRelationInput", {})
], UserRankOrderByWithRelationInput);
