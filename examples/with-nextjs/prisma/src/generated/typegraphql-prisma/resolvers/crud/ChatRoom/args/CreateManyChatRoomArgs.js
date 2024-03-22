"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyChatRoomArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ChatRoomCreateManyInput_1 = require("../../../inputs/ChatRoomCreateManyInput");
let CreateManyChatRoomArgs = exports.CreateManyChatRoomArgs = class CreateManyChatRoomArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ChatRoomCreateManyInput_1.ChatRoomCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyChatRoomArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], CreateManyChatRoomArgs.prototype, "skipDuplicates", void 0);
exports.CreateManyChatRoomArgs = CreateManyChatRoomArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyChatRoomArgs);
