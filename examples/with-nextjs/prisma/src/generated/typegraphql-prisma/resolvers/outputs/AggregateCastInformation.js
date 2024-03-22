"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCastInformation = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastInformationAvgAggregate_1 = require("../outputs/CastInformationAvgAggregate");
const CastInformationCountAggregate_1 = require("../outputs/CastInformationCountAggregate");
const CastInformationMaxAggregate_1 = require("../outputs/CastInformationMaxAggregate");
const CastInformationMinAggregate_1 = require("../outputs/CastInformationMinAggregate");
const CastInformationSumAggregate_1 = require("../outputs/CastInformationSumAggregate");
let AggregateCastInformation = exports.AggregateCastInformation = class AggregateCastInformation {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationCountAggregate_1.CastInformationCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationCountAggregate_1.CastInformationCountAggregate)
], AggregateCastInformation.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationAvgAggregate_1.CastInformationAvgAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationAvgAggregate_1.CastInformationAvgAggregate)
], AggregateCastInformation.prototype, "_avg", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationSumAggregate_1.CastInformationSumAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationSumAggregate_1.CastInformationSumAggregate)
], AggregateCastInformation.prototype, "_sum", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMinAggregate_1.CastInformationMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMinAggregate_1.CastInformationMinAggregate)
], AggregateCastInformation.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastInformationMaxAggregate_1.CastInformationMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastInformationMaxAggregate_1.CastInformationMaxAggregate)
], AggregateCastInformation.prototype, "_max", void 0);
exports.AggregateCastInformation = AggregateCastInformation = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCastInformation", {})
], AggregateCastInformation);
