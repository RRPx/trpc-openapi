"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationAvgAggregate_1 = require("../outputs/CastInformationAvgAggregate");
const CastInformationCountAggregate_1 = require("../outputs/CastInformationCountAggregate");
const CastInformationMaxAggregate_1 = require("../outputs/CastInformationMaxAggregate");
const CastInformationMinAggregate_1 = require("../outputs/CastInformationMinAggregate");
const CastInformationSumAggregate_1 = require("../outputs/CastInformationSumAggregate");
let CastInformationGroupBy = class CastInformationGroupBy {
};
exports.CastInformationGroupBy = CastInformationGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "cast_id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationGroupBy.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationGroupBy.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "blood_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "personality", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "user_image_main", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "user_image_sub1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "user_image_sub2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "user_image_sub3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "user_image_sub4", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationGroupBy.prototype, "liquor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationGroupBy.prototype, "smoking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "hobby", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "like_spot", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationGroupBy.prototype, "self_introduction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationGroupBy.prototype, "pick_up", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CastInformationGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], CastInformationGroupBy.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCountAggregate_1.CastInformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCountAggregate_1.CastInformationCountAggregate)
], CastInformationGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationAvgAggregate_1.CastInformationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationAvgAggregate_1.CastInformationAvgAggregate)
], CastInformationGroupBy.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationSumAggregate_1.CastInformationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationSumAggregate_1.CastInformationSumAggregate)
], CastInformationGroupBy.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMinAggregate_1.CastInformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMinAggregate_1.CastInformationMinAggregate)
], CastInformationGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMaxAggregate_1.CastInformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMaxAggregate_1.CastInformationMaxAggregate)
], CastInformationGroupBy.prototype, "_max", void 0);
exports.CastInformationGroupBy = CastInformationGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CastInformationGroupBy", {})
], CastInformationGroupBy);
