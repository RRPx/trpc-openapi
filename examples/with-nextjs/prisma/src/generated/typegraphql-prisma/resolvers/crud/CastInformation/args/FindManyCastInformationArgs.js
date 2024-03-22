"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindManyCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationOrderByWithRelationInput_1 = require("../../../inputs/CastInformationOrderByWithRelationInput");
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
const CastInformationWhereUniqueInput_1 = require("../../../inputs/CastInformationWhereUniqueInput");
const CastInformationScalarFieldEnum_1 = require("../../../../enums/CastInformationScalarFieldEnum");
let FindManyCastInformationArgs = exports.FindManyCastInformationArgs = class FindManyCastInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], FindManyCastInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationOrderByWithRelationInput_1.CastInformationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCastInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], FindManyCastInformationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCastInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindManyCastInformationArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationScalarFieldEnum_1.CastInformationScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindManyCastInformationArgs.prototype, "distinct", void 0);
exports.FindManyCastInformationArgs = FindManyCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindManyCastInformationArgs);
