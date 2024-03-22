"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationOption_idArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterOrderByWithRelationInput_1 = require("../../../inputs/OptionMasterOrderByWithRelationInput");
const OptionMasterWhereInput_1 = require("../../../inputs/OptionMasterWhereInput");
const OptionMasterWhereUniqueInput_1 = require("../../../inputs/OptionMasterWhereUniqueInput");
const OptionMasterScalarFieldEnum_1 = require("../../../../enums/OptionMasterScalarFieldEnum");
let ReservationOption_idArgs = exports.ReservationOption_idArgs = class ReservationOption_idArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], ReservationOption_idArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterOrderByWithRelationInput_1.OptionMasterOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationOption_idArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereUniqueInput_1.OptionMasterWhereUniqueInput)
], ReservationOption_idArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationOption_idArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ReservationOption_idArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [OptionMasterScalarFieldEnum_1.OptionMasterScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ReservationOption_idArgs.prototype, "distinct", void 0);
exports.ReservationOption_idArgs = ReservationOption_idArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ReservationOption_idArgs);
