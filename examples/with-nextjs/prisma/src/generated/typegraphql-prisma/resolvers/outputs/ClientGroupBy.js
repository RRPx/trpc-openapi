"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ClientCountAggregate_1 = require("../outputs/ClientCountAggregate");
const ClientMaxAggregate_1 = require("../outputs/ClientMaxAggregate");
const ClientMinAggregate_1 = require("../outputs/ClientMinAggregate");
const Gender_1 = require("../../enums/Gender");
let ClientGroupBy = exports.ClientGroupBy = class ClientGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "telephone_number", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], ClientGroupBy.prototype, "birthday", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "age", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "nick_name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "image", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Gender_1.Gender, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "gender", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "image2", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ClientGroupBy.prototype, "image3", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Boolean)
], ClientGroupBy.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], ClientGroupBy.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientCountAggregate_1.ClientCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientCountAggregate_1.ClientCountAggregate)
], ClientGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMinAggregate_1.ClientMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMinAggregate_1.ClientMinAggregate)
], ClientGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ClientMaxAggregate_1.ClientMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ClientMaxAggregate_1.ClientMaxAggregate)
], ClientGroupBy.prototype, "_max", void 0);
exports.ClientGroupBy = ClientGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ClientGroupBy", {})
], ClientGroupBy);
