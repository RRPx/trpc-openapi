"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstCastArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastOrderByWithRelationInput_1 = require("../../../inputs/CastOrderByWithRelationInput");
const CastWhereInput_1 = require("../../../inputs/CastWhereInput");
const CastWhereUniqueInput_1 = require("../../../inputs/CastWhereUniqueInput");
const CastScalarFieldEnum_1 = require("../../../../enums/CastScalarFieldEnum");
let FindFirstCastArgs = class FindFirstCastArgs {
};
exports.FindFirstCastArgs = FindFirstCastArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereInput_1.CastWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereInput_1.CastWhereInput)
], FindFirstCastArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastOrderByWithRelationInput_1.CastOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCastArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastWhereUniqueInput_1.CastWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastWhereUniqueInput_1.CastWhereUniqueInput)
], FindFirstCastArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCastArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstCastArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastScalarFieldEnum_1.CastScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstCastArgs.prototype, "distinct", void 0);
exports.FindFirstCastArgs = FindFirstCastArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstCastArgs);
