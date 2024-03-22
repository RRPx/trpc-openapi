"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CastInformationCreateWithoutCastInput = class CastInformationCreateWithoutCastInput {
};
exports.CastInformationCreateWithoutCastInput = CastInformationCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationCreateWithoutCastInput.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationCreateWithoutCastInput.prototype, "height", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "blood_type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "personality", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "user_image_main", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "user_image_sub1", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "user_image_sub2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "user_image_sub3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "user_image_sub4", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationCreateWithoutCastInput.prototype, "liquor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationCreateWithoutCastInput.prototype, "smoking", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "hobby", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "like_spot", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CastInformationCreateWithoutCastInput.prototype, "self_introduction", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationCreateWithoutCastInput.prototype, "pick_up", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CastInformationCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastInformationCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], CastInformationCreateWithoutCastInput.prototype, "updated_at", void 0);
exports.CastInformationCreateWithoutCastInput = CastInformationCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationCreateWithoutCastInput", {})
], CastInformationCreateWithoutCastInput);
