"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CastInformationAvgAggregate = class CastInformationAvgAggregate {
};
exports.CastInformationAvgAggregate = CastInformationAvgAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationAvgAggregate.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationAvgAggregate.prototype, "height", void 0);
exports.CastInformationAvgAggregate = CastInformationAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CastInformationAvgAggregate", {})
], CastInformationAvgAggregate);
