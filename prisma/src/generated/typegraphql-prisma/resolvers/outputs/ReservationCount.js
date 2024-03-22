"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ReservationCountOption_idArgs_1 = require("./args/ReservationCountOption_idArgs");
const ReservationCountShift_idArgs_1 = require("./args/ReservationCountShift_idArgs");
let ReservationCount = class ReservationCount {
    getOption_id(root, args) {
        return root.option_id;
    }
    getShift_id(root, args) {
        return root.shift_id;
    }
};
exports.ReservationCount = ReservationCount;
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "option_id",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReservationCount, ReservationCountOption_idArgs_1.ReservationCountOption_idArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ReservationCount.prototype, "getOption_id", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "shift_id",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [ReservationCount, ReservationCountShift_idArgs_1.ReservationCountShift_idArgs]),
    tslib_1.__metadata("design:returntype", Number)
], ReservationCount.prototype, "getShift_id", null);
exports.ReservationCount = ReservationCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ReservationCount", {})
], ReservationCount);
