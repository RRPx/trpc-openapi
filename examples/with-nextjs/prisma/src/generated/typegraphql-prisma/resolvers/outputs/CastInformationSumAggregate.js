"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastInformationSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CastInformationSumAggregate = exports.CastInformationSumAggregate = class CastInformationSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationSumAggregate.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CastInformationSumAggregate.prototype, "height", void 0);
exports.CastInformationSumAggregate = CastInformationSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CastInformationSumAggregate", {})
], CastInformationSumAggregate);
