"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const BoolFilter_1 = require("../inputs/BoolFilter");
const CastListRelationFilter_1 = require("../inputs/CastListRelationFilter");
const DateTimeFilter_1 = require("../inputs/DateTimeFilter");
const IntFilter_1 = require("../inputs/IntFilter");
const OptionMasterWhereInput_1 = require("../inputs/OptionMasterWhereInput");
const ReservationListRelationFilter_1 = require("../inputs/ReservationListRelationFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let OptionMasterWhereUniqueInput = class OptionMasterWhereUniqueInput {
};
exports.OptionMasterWhereUniqueInput = OptionMasterWhereUniqueInput;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], OptionMasterWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereInput_1.OptionMasterWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterWhereUniqueInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereInput_1.OptionMasterWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterWhereUniqueInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterWhereInput_1.OptionMasterWhereInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], OptionMasterWhereUniqueInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], OptionMasterWhereUniqueInput.prototype, "option_menu", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], OptionMasterWhereUniqueInput.prototype, "fee", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => BoolFilter_1.BoolFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", BoolFilter_1.BoolFilter)
], OptionMasterWhereUniqueInput.prototype, "is_display", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OptionMasterWhereUniqueInput.prototype, "created_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => DateTimeFilter_1.DateTimeFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", DateTimeFilter_1.DateTimeFilter)
], OptionMasterWhereUniqueInput.prototype, "updated_at", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CastListRelationFilter_1.CastListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CastListRelationFilter_1.CastListRelationFilter)
], OptionMasterWhereUniqueInput.prototype, "cast", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ReservationListRelationFilter_1.ReservationListRelationFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ReservationListRelationFilter_1.ReservationListRelationFilter)
], OptionMasterWhereUniqueInput.prototype, "reservation", void 0);
exports.OptionMasterWhereUniqueInput = OptionMasterWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("OptionMasterWhereUniqueInput", {})
], OptionMasterWhereUniqueInput);
