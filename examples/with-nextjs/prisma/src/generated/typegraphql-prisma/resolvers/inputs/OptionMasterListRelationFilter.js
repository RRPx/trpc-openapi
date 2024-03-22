"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereInput_1 = require("../inputs/OptionMasterWhereInput");
let OptionMasterListRelationFilter = exports.OptionMasterListRelationFilter = class OptionMasterListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], OptionMasterListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], OptionMasterListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], OptionMasterListRelationFilter.prototype, "none", void 0);
exports.OptionMasterListRelationFilter = OptionMasterListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterListRelationFilter", {})
], OptionMasterListRelationFilter);
