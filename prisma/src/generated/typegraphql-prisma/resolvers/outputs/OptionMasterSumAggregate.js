"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OptionMasterSumAggregate = class OptionMasterSumAggregate {
};
exports.OptionMasterSumAggregate = OptionMasterSumAggregate;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterSumAggregate.prototype, "fee", void 0);
exports.OptionMasterSumAggregate = OptionMasterSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMasterSumAggregate", {})
], OptionMasterSumAggregate);
