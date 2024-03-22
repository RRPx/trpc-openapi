"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cast = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const Approval_1 = require("../enums/Approval");
const CosplayContent_1 = require("../enums/CosplayContent");
const CupNumber_1 = require("../enums/CupNumber");
const LanguageType_1 = require("../enums/LanguageType");
const PriorityOrder_1 = require("../enums/PriorityOrder");
const CastCount_1 = require("../resolvers/outputs/CastCount");
let Cast = exports.Cast = class Cast {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], Cast.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "locate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [LanguageType_1.LanguageType], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Cast.prototype, "language_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "language_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cast.prototype, "cosplay_guide", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CosplayContent_1.CosplayContent], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], Cast.prototype, "cosplay_content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "cosplay_other", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CupNumber_1.CupNumber, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "cup_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "memo", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "user_rank_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], Cast.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PriorityOrder_1.PriorityOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "homepage_recommended_priority", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Approval_1.Approval, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "profile_approval_by_admin", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "twitter_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Cast.prototype, "instagram_user_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Cast.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], Cast.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCount_1.CastCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCount_1.CastCount)
], Cast.prototype, "_count", void 0);
exports.Cast = Cast = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Cast", {})
], Cast);
