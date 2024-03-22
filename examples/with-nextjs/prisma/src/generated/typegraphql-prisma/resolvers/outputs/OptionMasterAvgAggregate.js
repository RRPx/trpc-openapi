"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OptionMasterAvgAggregate = exports.OptionMasterAvgAggregate = class OptionMasterAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterAvgAggregate.prototype, "fee", void 0);
exports.OptionMasterAvgAggregate = OptionMasterAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMasterAvgAggregate", {})
], OptionMasterAvgAggregate);
