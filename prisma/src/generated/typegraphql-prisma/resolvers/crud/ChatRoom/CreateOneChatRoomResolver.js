"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOneChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateOneChatRoomArgs_1 = require("./args/CreateOneChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const helpers_1 = require("../../../helpers");
let CreateOneChatRoomResolver = class CreateOneChatRoomResolver {
    async createOneChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateOneChatRoomResolver = CreateOneChatRoomResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => ChatRoom_1.ChatRoom, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateOneChatRoomArgs_1.CreateOneChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateOneChatRoomResolver.prototype, "createOneChatRoom", null);
exports.CreateOneChatRoomResolver = CreateOneChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], CreateOneChatRoomResolver);
