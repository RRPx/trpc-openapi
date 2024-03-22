"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCountOption_idArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterWhereInput_1 = require("../../inputs/OptionMasterWhereInput");
let ReservationCountOption_idArgs = exports.ReservationCountOption_idArgs = class ReservationCountOption_idArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => OptionMasterWhereInput_1.OptionMasterWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", OptionMasterWhereInput_1.OptionMasterWhereInput)
], ReservationCountOption_idArgs.prototype, "where", void 0);
exports.ReservationCountOption_idArgs = ReservationCountOption_idArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ReservationCountOption_idArgs);
