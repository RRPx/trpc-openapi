"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BankInformationOrderByRelationAggregateInput_1 = require("../inputs/BankInformationOrderByRelationAggregateInput");
const CastInformationOrderByWithRelationInput_1 = require("../inputs/CastInformationOrderByWithRelationInput");
const FavoriteOrderByRelationAggregateInput_1 = require("../inputs/FavoriteOrderByRelationAggregateInput");
const NotificationOrderByRelationAggregateInput_1 = require("../inputs/NotificationOrderByRelationAggregateInput");
const OptionMasterOrderByRelationAggregateInput_1 = require("../inputs/OptionMasterOrderByRelationAggregateInput");
const ReservationOrderByRelationAggregateInput_1 = require("../inputs/ReservationOrderByRelationAggregateInput");
const ReviewOrderByRelationAggregateInput_1 = require("../inputs/ReviewOrderByRelationAggregateInput");
const ShiftManagementOrderByRelationAggregateInput_1 = require("../inputs/ShiftManagementOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const UserRankOrderByWithRelationInput_1 = require("../inputs/UserRankOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CastOrderByWithRelationInput = exports.CastOrderByWithRelationInput = class CastOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], CastOrderByWithRelationInput.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastOrderByWithRelationInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], CastOrderByWithRelationInput.prototype, "user", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserRankOrderByWithRelationInput_1.UserRankOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserRankOrderByWithRelationInput_1.UserRankOrderByWithRelationInput)
], CastOrderByWithRelationInput.prototype, "user_rank", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteOrderByRelationAggregateInput_1.FavoriteOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteOrderByRelationAggregateInput_1.FavoriteOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "notification", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterOrderByRelationAggregateInput_1.OptionMasterOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterOrderByRelationAggregateInput_1.OptionMasterOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "option_master", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementOrderByRelationAggregateInput_1.ShiftManagementOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementOrderByRelationAggregateInput_1.ShiftManagementOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "shift_management", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewOrderByRelationAggregateInput_1.ReviewOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewOrderByRelationAggregateInput_1.ReviewOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationOrderByWithRelationInput_1.CastInformationOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationOrderByWithRelationInput_1.CastInformationOrderByWithRelationInput)
], CastOrderByWithRelationInput.prototype, "cast_information", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BankInformationOrderByRelationAggregateInput_1.BankInformationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BankInformationOrderByRelationAggregateInput_1.BankInformationOrderByRelationAggregateInput)
], CastOrderByWithRelationInput.prototype, "bank_information", void 0);
exports.CastOrderByWithRelationInput = CastOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastOrderByWithRelationInput", {})
], CastOrderByWithRelationInput);
