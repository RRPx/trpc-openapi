"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastNullableRelationFilter = class CastNullableRelationFilter {
};
exports.CastNullableRelationFilter = CastNullableRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastNullableRelationFilter.prototype, "isNot", void 0);
exports.CastNullableRelationFilter = CastNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CastNullableRelationFilter", {})
], CastNullableRelationFilter);
