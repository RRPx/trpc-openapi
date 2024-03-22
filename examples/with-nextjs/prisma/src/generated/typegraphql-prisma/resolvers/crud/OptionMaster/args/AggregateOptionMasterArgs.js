"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateOptionMasterArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterOrderByWithRelationInput_1 = require("../../../inputs/OptionMasterOrderByWithRelationInput");
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
let AggregateOptionMasterArgs = exports.AggregateOptionMasterArgs = class AggregateOptionMasterArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], AggregateOptionMasterArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterOrderByWithRelationInput_1.OptionMasterOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateOptionMasterArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], AggregateOptionMasterArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOptionMasterArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateOptionMasterArgs.prototype, "skip", void 0);
exports.AggregateOptionMasterArgs = AggregateOptionMasterArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateOptionMasterArgs);
