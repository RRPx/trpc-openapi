"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCountAggregate_1 = require("../outputs/CastCountAggregate");
const CastMaxAggregate_1 = require("../outputs/CastMaxAggregate");
const CastMinAggregate_1 = require("../outputs/CastMinAggregate");
const Approval_1 = require("../../enums/Approval");
const CosplayContent_1 = require("../../enums/CosplayContent");
const CupNumber_1 = require("../../enums/CupNumber");
const LanguageType_1 = require("../../enums/LanguageType");
const PriorityOrder_1 = require("../../enums/PriorityOrder");
let CastGroupBy = exports.CastGroupBy = class CastGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastGroupBy.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastGroupBy.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastGroupBy.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CastGroupBy.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastGroupBy.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CastGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CastGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCountAggregate_1.CastCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCountAggregate_1.CastCountAggregate)
], CastGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastMinAggregate_1.CastMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastMinAggregate_1.CastMinAggregate)
], CastGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastMaxAggregate_1.CastMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastMaxAggregate_1.CastMaxAggregate)
], CastGroupBy.prototype, "_max", void 0);
exports.CastGroupBy = CastGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CastGroupBy", {})
], CastGroupBy);
