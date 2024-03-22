"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChatRoomResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CreateManyChatRoomArgs_1 = require("./args/CreateManyChatRoomArgs");
const ChatRoom_1 = require("../../../models/ChatRoom");
const AffectedRowsOutput_1 = require("../../outputs/AffectedRowsOutput");
const helpers_1 = require("../../../helpers");
let CreateManyChatRoomResolver = class CreateManyChatRoomResolver {
    async createManyChatRoom(ctx, info, args) {
        const { _count } = (0, helpers_1.transformInfoIntoPrismaArgs)(info);
        return (0, helpers_1.getPrismaFromContext)(ctx).chatRoom.createMany({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
exports.CreateManyChatRoomResolver = CreateManyChatRoomResolver;
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => AffectedRowsOutput_1.AffectedRowsOutput, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object, CreateManyChatRoomArgs_1.CreateManyChatRoomArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateManyChatRoomResolver.prototype, "createManyChatRoom", null);
exports.CreateManyChatRoomResolver = CreateManyChatRoomResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => ChatRoom_1.ChatRoom)
], CreateManyChatRoomResolver);
