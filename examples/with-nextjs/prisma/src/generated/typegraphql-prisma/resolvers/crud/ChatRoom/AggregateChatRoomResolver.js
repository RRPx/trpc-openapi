"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateChatRoomArgs_1 = require("./args/AggregateChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const AggregateChatRoom_1 = require("../../outputs/AggregateChatRoom");
const helpers_1 = require("../../../helpers");
let AggregateChatRoomResolver = exports.AggregateChatRoomResolver = class AggregateChatRoomResolver {
    async aggregateChatRoom(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.aggregate({
            ...args,
            ...(0, helpers_1.transformInfoIntoPrismaArgs)(info),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateChatRoom_1.AggregateChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, AggregateChatRoomArgs_1.AggregateChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateChatRoomResolver.prototype, "aggregateChatRoom", null);
exports.AggregateChatRoomResolver = AggregateChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], AggregateChatRoomResolver);
