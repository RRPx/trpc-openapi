"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationChat_roomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomWhereInput_1 = require("../../../inputs/ChatRoomWhereInput");
let ReservationChat_roomArgs = exports.ReservationChat_roomArgs = class ReservationChat_roomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ChatRoomWhereInput_1.ChatRoomWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ChatRoomWhereInput_1.ChatRoomWhereInput)
], ReservationChat_roomArgs.prototype, "where", void 0);
exports.ReservationChat_roomArgs = ReservationChat_roomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ReservationChat_roomArgs);
