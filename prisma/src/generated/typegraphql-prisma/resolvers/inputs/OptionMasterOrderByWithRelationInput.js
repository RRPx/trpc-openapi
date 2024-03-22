"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByRelationAggregateInput_1 = require("../inputs/CastOrderByRelationAggregateInput");
const ReservationOrderByRelationAggregateInput_1 = require("../inputs/ReservationOrderByRelationAggregateInput");
const SortOrder_1 = require("../../enums/SortOrder");
let OptionMasterOrderByWithRelationInput = class OptionMasterOrderByWithRelationInput {
};
exports.OptionMasterOrderByWithRelationInput = OptionMasterOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastOrderByRelationAggregateInput_1.CastOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastOrderByRelationAggregateInput_1.CastOrderByRelationAggregateInput)
], OptionMasterOrderByWithRelationInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput)
], OptionMasterOrderByWithRelationInput.prototype, "reservation", void 0);
exports.OptionMasterOrderByWithRelationInput = OptionMasterOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterOrderByWithRelationInput", {})
], OptionMasterOrderByWithRelationInput);
