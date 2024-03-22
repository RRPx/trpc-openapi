"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankUncheckedCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastUncheckedCreateNestedManyWithoutUser_rankInput_1 = require("../inputs/CastUncheckedCreateNestedManyWithoutUser_rankInput");
let UserRankUncheckedCreateInput = exports.UserRankUncheckedCreateInput = class UserRankUncheckedCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankUncheckedCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankUncheckedCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankUncheckedCreateInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserRankUncheckedCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankUncheckedCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankUncheckedCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastUncheckedCreateNestedManyWithoutUser_rankInput_1.CastUncheckedCreateNestedManyWithoutUser_rankInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastUncheckedCreateNestedManyWithoutUser_rankInput_1.CastUncheckedCreateNestedManyWithoutUser_rankInput)
], UserRankUncheckedCreateInput.prototype, "cast", void 0);
exports.UserRankUncheckedCreateInput = UserRankUncheckedCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankUncheckedCreateInput", {})
], UserRankUncheckedCreateInput);
