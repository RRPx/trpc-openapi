"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationOrderByWithAggregationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationAvgOrderByAggregateInput_1 = require("../inputs/CastInformationAvgOrderByAggregateInput");
const CastInformationCountOrderByAggregateInput_1 = require("../inputs/CastInformationCountOrderByAggregateInput");
const CastInformationMaxOrderByAggregateInput_1 = require("../inputs/CastInformationMaxOrderByAggregateInput");
const CastInformationMinOrderByAggregateInput_1 = require("../inputs/CastInformationMinOrderByAggregateInput");
const CastInformationSumOrderByAggregateInput_1 = require("../inputs/CastInformationSumOrderByAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CastInformationOrderByWithAggregationInput = exports.CastInformationOrderByWithAggregationInput = class CastInformationOrderByWithAggregationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "blood_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "personality", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "user_image_main", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "user_image_sub1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "user_image_sub2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "user_image_sub3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "user_image_sub4", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "liquor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "smoking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "hobby", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "like_spot", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastInformationOrderByWithAggregationInput.prototype, "self_introduction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "pick_up", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationOrderByWithAggregationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCountOrderByAggregateInput_1.CastInformationCountOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCountOrderByAggregateInput_1.CastInformationCountOrderByAggregateInput)
], CastInformationOrderByWithAggregationInput.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationAvgOrderByAggregateInput_1.CastInformationAvgOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationAvgOrderByAggregateInput_1.CastInformationAvgOrderByAggregateInput)
], CastInformationOrderByWithAggregationInput.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMaxOrderByAggregateInput_1.CastInformationMaxOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMaxOrderByAggregateInput_1.CastInformationMaxOrderByAggregateInput)
], CastInformationOrderByWithAggregationInput.prototype, "_max", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMinOrderByAggregateInput_1.CastInformationMinOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMinOrderByAggregateInput_1.CastInformationMinOrderByAggregateInput)
], CastInformationOrderByWithAggregationInput.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationSumOrderByAggregateInput_1.CastInformationSumOrderByAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationSumOrderByAggregateInput_1.CastInformationSumOrderByAggregateInput)
], CastInformationOrderByWithAggregationInput.prototype, "_sum", void 0);
exports.CastInformationOrderByWithAggregationInput = CastInformationOrderByWithAggregationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationOrderByWithAggregationInput", {})
], CastInformationOrderByWithAggregationInput);
