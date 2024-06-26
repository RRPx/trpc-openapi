"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AddressCountAggregate_1 = require("../outputs/AddressCountAggregate");
const AddressMaxAggregate_1 = require("../outputs/AddressMaxAggregate");
const AddressMinAggregate_1 = require("../outputs/AddressMinAggregate");
let AddressGroupBy = class AddressGroupBy {
};
exports.AddressGroupBy = AddressGroupBy;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressGroupBy.prototype, "lat", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], AddressGroupBy.prototype, "long", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressGroupBy.prototype, "note", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AddressGroupBy.prototype, "address", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], AddressGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], AddressGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressCountAggregate_1.AddressCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressCountAggregate_1.AddressCountAggregate)
], AddressGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressMinAggregate_1.AddressMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressMinAggregate_1.AddressMinAggregate)
], AddressGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AddressMaxAggregate_1.AddressMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AddressMaxAggregate_1.AddressMaxAggregate)
], AddressGroupBy.prototype, "_max", void 0);
exports.AddressGroupBy = AddressGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("AddressGroupBy", {})
], AddressGroupBy);
