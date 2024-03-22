"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyReservationArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCreateManyInput_1 = require("../../../inputs/ReservationCreateManyInput");
let CreateManyReservationArgs = class CreateManyReservationArgs {
};
exports.CreateManyReservationArgs = CreateManyReservationArgs;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ReservationCreateManyInput_1.ReservationCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyReservationArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyReservationArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyReservationArgs = CreateManyReservationArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyReservationArgs);
