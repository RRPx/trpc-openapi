"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateCast = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CastCountAggregate_1 = require("../outputs/CastCountAggregate");
const CastMaxAggregate_1 = require("../outputs/CastMaxAggregate");
const CastMinAggregate_1 = require("../outputs/CastMinAggregate");
let AggregateCast = class AggregateCast {
};
exports.AggregateCast = AggregateCast;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastCountAggregate_1.CastCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastCountAggregate_1.CastCountAggregate)
], AggregateCast.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastMinAggregate_1.CastMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastMinAggregate_1.CastMinAggregate)
], AggregateCast.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastMaxAggregate_1.CastMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastMaxAggregate_1.CastMaxAggregate)
], AggregateCast.prototype, "_max", void 0);
exports.AggregateCast = AggregateCast = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AggregateCast", {})
], AggregateCast);
