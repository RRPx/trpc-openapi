"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const FavoriteOrderByRelationAggregateInput_1 = require("../inputs/FavoriteOrderByRelationAggregateInput");
const NotificationOrderByRelationAggregateInput_1 = require("../inputs/NotificationOrderByRelationAggregateInput");
const ReservationOrderByRelationAggregateInput_1 = require("../inputs/ReservationOrderByRelationAggregateInput");
const ReviewOrderByRelationAggregateInput_1 = require("../inputs/ReviewOrderByRelationAggregateInput");
const SortOrderInput_1 = require("../inputs/SortOrderInput");
const UserOrderByWithRelationInput_1 = require("../inputs/UserOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let ClientOrderByWithRelationInput = class ClientOrderByWithRelationInput {
};
exports.ClientOrderByWithRelationInput = ClientOrderByWithRelationInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrderInput_1.SortOrderInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", SortOrderInput_1.SortOrderInput)
], ClientOrderByWithRelationInput.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientOrderByWithRelationInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => UserOrderByWithRelationInput_1.UserOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", UserOrderByWithRelationInput_1.UserOrderByWithRelationInput)
], ClientOrderByWithRelationInput.prototype, "users", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => FavoriteOrderByRelationAggregateInput_1.FavoriteOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", FavoriteOrderByRelationAggregateInput_1.FavoriteOrderByRelationAggregateInput)
], ClientOrderByWithRelationInput.prototype, "favorite", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationOrderByRelationAggregateInput_1.ReservationOrderByRelationAggregateInput)
], ClientOrderByWithRelationInput.prototype, "reservation", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReviewOrderByRelationAggregateInput_1.ReviewOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReviewOrderByRelationAggregateInput_1.ReviewOrderByRelationAggregateInput)
], ClientOrderByWithRelationInput.prototype, "review", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", NotificationOrderByRelationAggregateInput_1.NotificationOrderByRelationAggregateInput)
], ClientOrderByWithRelationInput.prototype, "notification", void 0);
exports.ClientOrderByWithRelationInput = ClientOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ClientOrderByWithRelationInput", {})
], ClientOrderByWithRelationInput);
