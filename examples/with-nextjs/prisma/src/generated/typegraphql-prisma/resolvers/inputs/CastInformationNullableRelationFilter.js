"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationNullableRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationWhereInput_1 = require("../inputs/CastInformationWhereInput");
let CastInformationNullableRelationFilter = exports.CastInformationNullableRelationFilter = class CastInformationNullableRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationNullableRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], CastInformationNullableRelationFilter.prototype, "isNot", void 0);
exports.CastInformationNullableRelationFilter = CastInformationNullableRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CastInformationNullableRelationFilter", {})
], CastInformationNullableRelationFilter);
