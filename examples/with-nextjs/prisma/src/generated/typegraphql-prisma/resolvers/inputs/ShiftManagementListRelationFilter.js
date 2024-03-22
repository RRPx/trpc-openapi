"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ShiftManagementWhereInput_1 = require("../inputs/ShiftManagementWhereInput");
let ShiftManagementListRelationFilter = exports.ShiftManagementListRelationFilter = class ShiftManagementListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], ShiftManagementListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], ShiftManagementListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ShiftManagementWhereInput_1.ShiftManagementWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ShiftManagementWhereInput_1.ShiftManagementWhereInput)
], ShiftManagementListRelationFilter.prototype, "none", void 0);
exports.ShiftManagementListRelationFilter = ShiftManagementListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ShiftManagementListRelationFilter", {})
], ShiftManagementListRelationFilter);
