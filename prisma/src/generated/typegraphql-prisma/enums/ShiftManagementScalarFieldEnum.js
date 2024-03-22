"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftManagementScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ShiftManagementScalarFieldEnum;
(function (ShiftManagementScalarFieldEnum) {
    ShiftManagementScalarFieldEnum["id"] = "id";
    ShiftManagementScalarFieldEnum["cast_id"] = "cast_id";
    ShiftManagementScalarFieldEnum["client_id"] = "client_id";
    ShiftManagementScalarFieldEnum["shift_date"] = "shift_date";
    ShiftManagementScalarFieldEnum["start_time"] = "start_time";
    ShiftManagementScalarFieldEnum["end_time"] = "end_time";
    ShiftManagementScalarFieldEnum["memo"] = "memo";
    ShiftManagementScalarFieldEnum["is_display"] = "is_display";
    ShiftManagementScalarFieldEnum["cast_side_reservation_status"] = "cast_side_reservation_status";
    ShiftManagementScalarFieldEnum["client_side_slot_status"] = "client_side_slot_status";
    ShiftManagementScalarFieldEnum["created_at"] = "created_at";
    ShiftManagementScalarFieldEnum["updated_at"] = "updated_at";
    ShiftManagementScalarFieldEnum["reservationId"] = "reservationId";
})(ShiftManagementScalarFieldEnum || (exports.ShiftManagementScalarFieldEnum = ShiftManagementScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ShiftManagementScalarFieldEnum, {
    name: "ShiftManagementScalarFieldEnum",
    description: undefined,
});
