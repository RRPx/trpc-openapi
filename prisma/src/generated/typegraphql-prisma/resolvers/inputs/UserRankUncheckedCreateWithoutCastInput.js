"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankUncheckedCreateWithoutCastInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let UserRankUncheckedCreateWithoutCastInput = class UserRankUncheckedCreateWithoutCastInput {
};
exports.UserRankUncheckedCreateWithoutCastInput = UserRankUncheckedCreateWithoutCastInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankUncheckedCreateWithoutCastInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankUncheckedCreateWithoutCastInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankUncheckedCreateWithoutCastInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserRankUncheckedCreateWithoutCastInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankUncheckedCreateWithoutCastInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankUncheckedCreateWithoutCastInput.prototype, "updated_at", void 0);
exports.UserRankUncheckedCreateWithoutCastInput = UserRankUncheckedCreateWithoutCastInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankUncheckedCreateWithoutCastInput", {})
], UserRankUncheckedCreateWithoutCastInput);
