"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOptionMasterOrThrowArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterOrderByWithRelationInput_1 = require("../../../inputs/OptionMasterOrderByWithRelationInput");
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
const OptionMasterScalarFieldEnum_1 = require("../../../../enums/OptionMasterScalarFieldEnum");
let FindFirstOptionMasterOrThrowArgs = class FindFirstOptionMasterOrThrowArgs {
};
exports.FindFirstOptionMasterOrThrowArgs = FindFirstOptionMasterOrThrowArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], FindFirstOptionMasterOrThrowArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterOrderByWithRelationInput_1.OptionMasterOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOptionMasterOrThrowArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], FindFirstOptionMasterOrThrowArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOptionMasterOrThrowArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstOptionMasterOrThrowArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarFieldEnum_1.OptionMasterScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstOptionMasterOrThrowArgs.prototype, "distinct", void 0);
exports.FindFirstOptionMasterOrThrowArgs = FindFirstOptionMasterOrThrowArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstOptionMasterOrThrowArgs);
