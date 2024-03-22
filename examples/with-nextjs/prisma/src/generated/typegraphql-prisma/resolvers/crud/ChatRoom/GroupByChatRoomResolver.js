"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupByChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const GroupByChatRoomArgs_1 = require("./args/GroupByChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const ChatRoomGroupBy_1 = require("../../outputs/ChatRoomGroupBy");
const helpers_1 = require("../../../helpers");
let GroupByChatRoomResolver = exports.GroupByChatRoomResolver = class GroupByChatRoomResolver {
    async groupByChatRoom(ctx, info, args) {
        const { _count, _avg, _sum, _min, _max } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.groupBy({
            ...args,
            ...Object.fromEntries(Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => [ChatRoomGroupBy_1.ChatRoomGroupBy], {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, GroupByChatRoomArgs_1.GroupByChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], GroupByChatRoomResolver.prototype, "groupByChatRoom", null);
exports.GroupByChatRoomResolver = GroupByChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], GroupByChatRoomResolver);
