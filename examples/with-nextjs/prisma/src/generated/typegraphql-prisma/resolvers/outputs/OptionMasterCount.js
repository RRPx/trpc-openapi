"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionMasterCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const OptionMasterCountCastArgs_1 = require("./args/OptionMasterCountCastArgs");
const OptionMasterCountReservationArgs_1 = require("./args/OptionMasterCountReservationArgs");
let OptionMasterCount = exports.OptionMasterCount = class OptionMasterCount {
    getCast(root, args) {
        return root.cast;
    }
    getReservation(root, args) {
        return root.reservation;
    }
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "cast",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OptionMasterCount, OptionMasterCountCastArgs_1.OptionMasterCountCastArgs]),
    tslib_1.__metadata("design:returntype", Number)
], OptionMasterCount.prototype, "getCast", null);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        name: "reservation",
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Root()),
    tslib_1.__param(1, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [OptionMasterCount, OptionMasterCountReservationArgs_1.OptionMasterCountReservationArgs]),
    tslib_1.__metadata("design:returntype", Number)
], OptionMasterCount.prototype, "getReservation", null);
exports.OptionMasterCount = OptionMasterCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("OptionMasterCount", {})
], OptionMasterCount);
