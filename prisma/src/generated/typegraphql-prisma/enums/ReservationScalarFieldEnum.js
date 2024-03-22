"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ReservationScalarFieldEnum;
(function (ReservationScalarFieldEnum) {
    ReservationScalarFieldEnum["id"] = "id";
    ReservationScalarFieldEnum["cast_id"] = "cast_id";
    ReservationScalarFieldEnum["client_id"] = "client_id";
    ReservationScalarFieldEnum["start_time"] = "start_time";
    ReservationScalarFieldEnum["end_time"] = "end_time";
    ReservationScalarFieldEnum["guide_flg"] = "guide_flg";
    ReservationScalarFieldEnum["approval"] = "approval";
    ReservationScalarFieldEnum["admin_approval"] = "admin_approval";
    ReservationScalarFieldEnum["payment_amount"] = "payment_amount";
    ReservationScalarFieldEnum["payment_select"] = "payment_select";
    ReservationScalarFieldEnum["payment_id"] = "payment_id";
    ReservationScalarFieldEnum["is_display"] = "is_display";
    ReservationScalarFieldEnum["reservation_date"] = "reservation_date";
    ReservationScalarFieldEnum["address_id"] = "address_id";
    ReservationScalarFieldEnum["created_at"] = "created_at";
    ReservationScalarFieldEnum["updated_at"] = "updated_at";
})(ReservationScalarFieldEnum || (exports.ReservationScalarFieldEnum = ReservationScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ReservationScalarFieldEnum, {
    name: "ReservationScalarFieldEnum",
    description: undefined,
});
