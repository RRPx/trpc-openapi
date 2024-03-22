"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastWhereInput_1 = require("../inputs/CastWhereInput");
let CastListRelationFilter = class CastListRelationFilter {
};
exports.CastListRelationFilter = CastListRelationFilter;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], CastListRelationFilter.prototype, "none", void 0);
exports.CastListRelationFilter = CastListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CastListRelationFilter", {})
], CastListRelationFilter);
