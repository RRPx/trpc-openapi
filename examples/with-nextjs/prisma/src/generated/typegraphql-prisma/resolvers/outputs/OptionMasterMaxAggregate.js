"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let OptionMasterMaxAggregate = exports.OptionMasterMaxAggregate = class OptionMasterMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterMaxAggregate.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], OptionMasterMaxAggregate.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], OptionMasterMaxAggregate.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterMaxAggregate.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], OptionMasterMaxAggregate.prototype, "updated_at", void 0);
exports.OptionMasterMaxAggregate = OptionMasterMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMasterMaxAggregate", {})
], OptionMasterMaxAggregate);
