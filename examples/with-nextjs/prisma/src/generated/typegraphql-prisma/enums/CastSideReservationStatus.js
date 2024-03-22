"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CastSideReservationStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var CastSideReservationStatus;
(function (CastSideReservationStatus) {
    CastSideReservationStatus["TRANSPORTATION"] = "TRANSPORTATION";
    CastSideReservationStatus["AWAITING"] = "AWAITING";
    CastSideReservationStatus["BOOKED"] = "BOOKED";
})(CastSideReservationStatus || (exports.CastSideReservationStatus = CastSideReservationStatus = {}));
TypeGraphQL.registerEnumType(CastSideReservationStatus, {
    name: "CastSideReservationStatus",
    description: undefined,
});
