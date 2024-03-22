"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRankCreateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCreateNestedManyWithoutUser_rankInput_1 = require("../inputs/CastCreateNestedManyWithoutUser_rankInput");
let UserRankCreateInput = exports.UserRankCreateInput = class UserRankCreateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankCreateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], UserRankCreateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRankCreateInput.prototype, "basic_fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], UserRankCreateInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankCreateInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], UserRankCreateInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCreateNestedManyWithoutUser_rankInput_1.CastCreateNestedManyWithoutUser_rankInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCreateNestedManyWithoutUser_rankInput_1.CastCreateNestedManyWithoutUser_rankInput)
], UserRankCreateInput.prototype, "cast", void 0);
exports.UserRankCreateInput = UserRankCreateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("UserRankCreateInput", {})
], UserRankCreateInput);
