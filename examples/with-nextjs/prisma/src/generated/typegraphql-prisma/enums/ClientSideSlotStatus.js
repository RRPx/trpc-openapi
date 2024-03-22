"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientSideSlotStatus = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ClientSideSlotStatus;
(function (ClientSideSlotStatus) {
    ClientSideSlotStatus["HOLD"] = "HOLD";
    ClientSideSlotStatus["UNBOOKED"] = "UNBOOKED";
    ClientSideSlotStatus["BOOKED"] = "BOOKED";
})(ClientSideSlotStatus || (exports.ClientSideSlotStatus = ClientSideSlotStatus = {}));
TypeGraphQL.registerEnumType(ClientSideSlotStatus, {
    name: "ClientSideSlotStatus",
    description: undefined,
});
