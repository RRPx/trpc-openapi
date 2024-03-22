"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCastInformationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationOrderByWithRelationInput_1 = require("../../../inputs/CastInformationOrderByWithRelationInput");
const CastInformationWhereInput_1 = require("../../../inputs/CastInformationWhereInput");
const CastInformationWhereUniqueInput_1 = require("../../../inputs/CastInformationWhereUniqueInput");
let AggregateCastInformationArgs = exports.AggregateCastInformationArgs = class AggregateCastInformationArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereInput_1.CastInformationWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereInput_1.CastInformationWhereInput)
], AggregateCastInformationArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CastInformationOrderByWithRelationInput_1.CastInformationOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateCastInformationArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationWhereUniqueInput_1.CastInformationWhereUniqueInput)
], AggregateCastInformationArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCastInformationArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateCastInformationArgs.prototype, "skip", void 0);
exports.AggregateCastInformationArgs = AggregateCastInformationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateCastInformationArgs);
